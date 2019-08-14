<template>
  <div class="c-table">
    <table :class="{compressed, hasBorder}">
      <thead>
      <tr>
        <th v-if="selectable" @change="onChangeAll($event)">
          <input type="checkbox">
        </th>
        <th v-if="indexVisible">#</th>
        <th v-for="(column, columnIndex) in columns" :key="columnIndex">
          {{column.text}}
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
  export default {
    name: "coco-table",
    data(){
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
      }
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
        }
      }

      tbody {
        tr {
          transition: background .3s;

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


  }
</style>