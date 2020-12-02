<style lang="less" scoped>
.headerLeft {
    display: inline-block;
}
</style>

<template>
  <div class="header-bar">
    <!-- <sider-trigger :collapsed="collapsed" icon="md-menu" @on-change="handleCollpasedChange"></sider-trigger> -->
    <div class="headerLeft">
        <div class="al">
            <Icon type="md-list-box" size="21" color="#6576FE" />
            <div>
                <span class="bold">Do you know the latest update of 2019?</span>
                <span>A overview of our is now available on you...</span>
            </div>
            <Icon type="ios-share-outline" size="17" />
        </div>
        
    </div>
    <custom-bread-crumb show-icon style="margin-left: 30px;" :list="breadCrumbList"></custom-bread-crumb>
    <div class="custom-content-con">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import siderTrigger from './sider-trigger'
import customBreadCrumb from './custom-bread-crumb'
import './header-bar.less'
export default {
  name: 'HeaderBar',
  components: {
    siderTrigger,
    customBreadCrumb
  },
  props: {
    collapsed: Boolean
  },
  computed: {
    breadCrumbList () {
      // console.log(this.$store.state.app.breadCrumbList)
      return this.$store.state.app.breadCrumbList
    }
  },
  methods: {
    handleCollpasedChange (state) {
      this.$emit('on-coll-change', state)
    }
  }
}
</script>
