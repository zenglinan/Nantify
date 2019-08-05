<template>
  <div class="cascader">
    <div class="trigger" :class="{active}" @click="clickTrigger">
      {{getSelectedName}}
    </div>
    <div class="popover" v-show="popoverVisible">
      <cascader-item :city="citys" :selected="selected" @update:selected="updateSelected"></cascader-item>
    </div>
  </div>
</template>

<script>
  import db from './database.js'
  import CascaderItem from './CascaderItem'

  export default {
    name: "Cascader",
    props: {
      selected: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        popoverVisible: false,
        active: false,
        citys: []
      }
    },
    components: {
      'cascader-item': CascaderItem
    },
    methods: {
      updateSelected(newSelected) {
        let lastSelected = newSelected[newSelected.length - 1]
        this.getDb(lastSelected.id).then(res => {
          this.$set(lastSelected, 'children', res)
        })
        this.$emit('update:selected', newSelected)
      },
      getDb(level = 0) {
        return new Promise((resolve, reject) => {
          let result = db.filter(item => {
            return item.parent_id == level
          })
          result && resolve(result)
        })
      },
      clickTrigger(){
        this.popoverVisible = !this.popoverVisible
        this.active = !this.active
      }
    },
    computed: {
      getSelectedName() {
        let names = this.selected.map((item) => {
          return item.name
        })
        return names.join('/')
      }
    },
    mounted() {
      this.getDb().then(res => {
        this.citys = res
      })
    }
  }
</script>

<style scoped lang="scss">
  @import "../common/scss/base";

  .cascader {
    display: inline-flex;
    position: relative;

    .trigger {
      font-size: $font-size;
      background: $bg;
      display: inline-flex;
      align-items: center;
      min-width: 180px;
      height: 30px;
      cursor: pointer;
      padding: 0 8px;
      border-radius: 6px;
      box-shadow: 0 0 2px rgba(0, 0, 0, .2);
      border: 1px solid $border-color-light;
      color: $gray-blue;
      &.active {
        border-color: $blue;
      }
    }

    .popover {
      font-size: $font-size;
      position: absolute; top: 100%; left: 0; background: $bg; display: flex;
      margin-top: 12px;z-index: 1;
      filter: drop-shadow(0 0 2px $box-shadow-color);

      &::after, &::before {
        width: 0;
        height: 0;
        content: '';
        display: block;
        border: 8px solid transparent;
        border-top: none;
        position: absolute;
        top: 0;
        left: 5px;
        transform: translateY(-100%);
      }

      &::after {
        border-bottom-color: $bg;
        margin-top: 1px;
      }
    }

  }
</style>