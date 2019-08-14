<template>
  <div class="c-table">
    <table :class="{compressed, hasBorder}">
      <thead>
      <tr>
        <th v-if="indexVisible">#</th>
        <th v-for="(column, columnIndex) in columns" :key="columnIndex">{{column.text}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(dataItem, dataIndex) in data" :key="dataIndex">
        <td v-if="indexVisible">{{dataIndex + 1}}</td>
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
      compressed: {
        type: Boolean,
        default: false
      },
      hasBorder: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../common/scss/base";

  @mixin border-bottom() {
    border-bottom: 1px solid darken($beige-light, 15%);
  }

  @mixin border() {
    border: 1px solid darken($beige-light, 15%);
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

      td, th {
        padding: 16px;
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