<template>
        <div class="top-bar-item" @click="itemClick">
            <slot v-if="!isActive" name="item-icon"></slot>
            <slot v-else name="item-icon-active"></slot>
            <div :class="{active: isActive}"><slot name="item-text"></slot></div>
            <!-- <img src="../../assets/img/tabbar/first-noChoice.svg" alt="">
           <div>首页</div> -->
        </div>
        
</template>
<script>
export default {
     props: {
        path: String
            },
    data() {
        return {          
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        }
    },
    methods: {
        itemClick() {
            console.log(this.path);
            this.$router.push(this.path)
            // this.$routerouter.replace(this.path)
        }
    },
}
</script>
<style>
    .top-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    
    /* line-height: 49px; */
  }
  .top-bar-item img {
      height: 24px;
      width: 24px;
      margin-top: 3px;
      vertical-align: middle;
  }
  .active {
      color: red;
  }
</style>