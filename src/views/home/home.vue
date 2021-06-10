<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends='recommends'/>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childCopms/HomeSwiper'
import RecommendView from './childCopms/RecommendView.vue'
import {getHomeMultidata} from 'network/home'


export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
 },
 data() {
   return {
    banners: [],
    recommends: []
   }
 },
 created() {
   getHomeMultidata().then(res => {
     console.log(res);
     //这里有坑banners
     const list =  this.banners = res.data.banner.list;
    console.log(list);
      this.recommends = res.data.recommend.list
   })
 },
}
</script>
<style>
  .home-nav {
    background-color: #ff8198;
    color: #fff;
  }
</style>