<template>
    <div id="top-bar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    #top-bar {
    display: flex;
    background: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 1px rgba(100, 100, 100, .02);
    
  }
  
</style>