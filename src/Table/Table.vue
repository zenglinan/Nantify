<template>
  <div class="c-table">
    <table :class="{compressed, hasBorder}">
      <thead>
      <tr>
        <th v-if="selectable" @change="onChangeAll($event)">
          <input type="checkbox">
        </th>
        <th v-if="indexVisible">#</th>
        <th v-for="(column, columnIndex) in columns"
            :key="columnIndex"
            :class="{canSort: sortRules}"
            @click="column.field in sortRules && onChangeSortRules(column.field)"
        >
          <div class="thContent">
            <span>{{column.text}}</span>
            <div class="tableSorter" v-if="column.field in sortRules">
              <c-icon icon="i-asc" :class="{active: sortRules[column.field] === 'asc'}"></c-icon>
              <c-icon icon="i-desc" :class="{active: sortRules[column.field] === 'desc'}"></c-icon>
            </div>
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(dataItem, dataIndex) in data" :key="dataIndex">
        <td v-if="selectable" @change="onChangeItem($event, dataItem, dataIndex)">
          <input type="checkbox" :checked="selector">
        </td>
        <td v-if="indexVisible">
          {{dataIndex + 1}}
        </td>
        <template v-for="column in columns">
          <td>{{dataItem[column.field]}}</td>
        </template>
      </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
  import Icon from '../component/icon'

  export default {
    name: "coco-table",
    data() {
      return {
        selector: false  // 控制所有单选框的开关
      }
    },
    props: {
      data: {
        type: Array
      },
      columns: {
        type: Array
      },
      indexVisible: {
        type: Boolean,
        default: true
      },
      compressed: {  // 紧凑
        type: Boolean,
        default: false
      },
      hasBorder: {  //内部格子边框
        type: Boolean,
        default: false
      },
      striped: {  // 间隔颜色变化
        type: Boolean,
        default: true
      },
      selectable: {
        type: Boolean,
        default: false
      },
      selectedItems: {
        type: Array,
        default: () => []
      },
      sortRules: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      onChangeItem(e, data, index) {
        let ifSelected = e.target.checked
        let copy = JSON.parse(JSON.stringify(this.selectedItems))
        ifSelected && copy.push(data)  // 勾选选中
        !ifSelected && (copy = copy.filter(item => item.id !== index))  // 勾选不选
        this.$emit('update:selectedItems', copy)
      },
      onChangeAll(e) {
        let ifSelectedAll = e.target.checked
        ifSelectedAll && this.$emit('update:selectedItems', this.data) && (this.selector = true)
        !ifSelectedAll && this.$emit('update:selectedItems', []) && (this.selector = false)
      },
      onChangeSortRules(field) {
        let copy = JSON.parse(JSON.stringify(this.sortRules))
        switch (this.sortRules[field]) {
          case 'asc':
            copy[field] = 'desc';
            break;
          case 'desc':
            copy[field] = '';
            break;
          default:
            copy[field] = 'asc';
        }
        this.$emit('update:sortRules', copy)
      }
    },
    components: {
      'c-icon': Icon
    }
  }
</script>

<style scoped lang="scss">
  @import "../common/scss/base";

  @mixin border-bottom() {
    border-bottom: 1px solid darken($beige-light, 2%);
  }

  @mixin border() {
    border: 1px solid darken($beige-light, 2%);
  }

  .c-table {
    box-sizing: border-box;
    overflow: hidden;

    table {
      @include border();
      border-collapse: separate;
      border-spacing: 0;
      text-align: left;
      width: 100%;
      border-radius: 4px;

      thead {
        tr {
          background-color: $beige-lighter;

          th.canSort {
            transition: all .3s;
            &:hover {
              background-color: rgb(233, 233, 233);
              cursor: pointer;
            }

            .tableSorter {
              display: flex;
              flex-direction: column;
              margin-left: 4px;

              svg {
                width: 8px;
                height: 8px;
                fill: rgb(191, 191, 191);
                transition: all .2s;

                &.active {
                  fill: rgb(24, 144, 255);
                }
              }
            }
          }

          .thContent {
            display: flex;
            align-items: center;
            color: rgb(76, 76, 76);
          }
        }
      }
    }

    tbody {
      tr {
        transition: background .3s;
        color: rgb(89, 89, 89);

        &:hover {
          background: $beige-lighter;
        }
      }
    }

    td, th {
      padding: 14px;
      @include border-bottom();
    }

    tr {
      @include border-bottom();

    }

    &.compressed {
      td, th {
        padding: 10px;
      }
    }

    &.hasBorder {
      border: none;

      tr {
        &:last-child {
          td {
            @include border-bottom();

            &:first-child {
              border-bottom-left-radius: 4px;
            }

            &:last-child {
              border-bottom-right-radius: 4px;
            }
          }
        }

        td, th {
          @include border();
          border-bottom: none;
        }

        td:not(:first-child), th:not(:first-child) {
          border-left: none;
        }

        th:first-child {
          border-top-left-radius: 4px;
        }

        th:last-child {
          border-top-right-radius: 4px;
        }
      }

    }
  }

</style>