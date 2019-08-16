<template>
  <div class="c-table" ref="tableWrapper">
    <div class="tableInnerWrapper" :style="{height}" ref="innerWrapper">
      <table :class="{compressed, hasBorder}" ref="table">
        <thead ref="thead">
        <tr>
          <th v-if="selectable" @change="onChangeAll($event)" :style="{width: '60px'}">
            <div class="thContent">
              <input type="checkbox" :checked="selector">
            </div>
          </th>
          <th v-if="indexVisible" :style="{width: '60px'}">#</th>
          <th v-for="(column, columnIndex) in columns"
              :key="columnIndex"
              :class="{canSort: column.field in sortRules}"
              @click="column.field in sortRules && onChangeSortRules(column.field)"
              :style="{width: column.width}"
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
        <tr v-for="(dataItem, dataIndex) in data" :key="dataIndex" >
          <td v-if="selectable"
              @change="onChangeItem($event, dataItem, dataIndex)"
              :style="{width: '60px'}"
          >
            <input type="checkbox" :checked="selector">
          </td>
          <td v-if="indexVisible" :style="{width: '60px'}">
            {{dataIndex + 1}}
          </td>
          <template v-for="column in columns">
            <td :style="{width: column.width}">{{dataItem[column.field]}}</td>
          </template>
        </tr>
        </tbody>

      </table>
    </div>
    <div class="loading" v-show="loading">
      <c-icon icon="i-loading"></c-icon>
    </div>
  </div>
</template>

<script>
  import Icon from '../Icon/icon'

  export default {
    name: "coco-table",
    data() {
      return {
        selector: false  // 所有单选框上都有的属性, 表示是否勾选
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
      selectable: {  // 是否可勾选
        type: Boolean,
        default: false
      },
      selectedItems: {  // 勾选的column数组
        type: Array,
        default: () => []
      },
      sortRules: {  // 排序规则
        type: Object,
        default: () => ({})
      },
      loading: {
        type: Boolean,
        default: false
      },
      height: {  // 指定tbody的高度, 固定表头需要用到
        type: String
      }
    },
    mounted() {  // 将 thead 移出, 插入假表作为固定表头
      let table2 = this.$refs.table.cloneNode(false)
      let thead = this.$refs.thead
      let wrapper = this.$refs.tableWrapper
      table2.appendChild(thead)
      table2.classList.add('fakeTable')
      wrapper.appendChild(table2)

      let {height} = getComputedStyle(thead)  // 设置 margin, 防止第一行被挡住
      this.$refs.innerWrapper.style.marginTop = height
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
            this.resetObj(copy)  // 先将所有字段的规则置空
            copy[field] = 'desc';  // 指定对应字段的排序规则
            break;
          case 'desc':
            this.resetObj(copy)
            copy[field] = 'asc';
            break;
          default:
            this.resetObj(copy)
            copy[field] = 'asc';
        }
        this.$emit('update:sortRules', copy)
      },
      resetObj(object) {
        Object.keys(object).forEach(key => object[key] = '')
      }
    },
    components: {
      'c-icon': Icon
    }
  }
</script>

<style scoped lang="scss">
  @import "../common/scss/base";
  @import "../common/scss/scrollbar";

  @mixin border-bottom() {
    border-bottom: 1px solid darken($beige-light, 2%);
  }

  @mixin border() {
    border: 1px solid darken($beige-light, 2%);
  }

  @include rotateAnimation;

  *{box-sizing: border-box;}
  .c-table {
    box-sizing: border-box;
    position: relative;
    overflow: hidden;

    .fakeTable {
      position: absolute;
      top: 0;
      left: 0;
    }

    .tableInnerWrapper {
      overflow: auto;
    }

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

      tbody {
        tr {
          transition: background .3s;
          color: rgb(89, 89, 89);

          &:nth-child(even) {
            background-color: rgb(247, 247, 247);
          }

          &:hover {
            background: rgb(230, 247, 255);
          }

        }
      }

      td, th {
        padding: 10px;
        @include border-bottom();
      }

      tr {
        @include border-bottom();

        &:last-child {
          border-bottom: none;
        }
      }

      &.compressed {
        td, th {
          padding: 6px;
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


    .loading {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, .7);
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 20px;
        height: 20px;
        animation: rotate .6s linear infinite;
      }
    }

  }


</style>