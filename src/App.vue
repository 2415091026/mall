<template>
  
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from 'components/content/mainTabBar'
// import MainTabbar from './components/mainTabbar.vue'

export default {
 components: {
   MainTabBar
 }
  
}
</script>

  MainTabbar<style>
  @import "assets/css/base.css"
</style>
