<template>
  <div class="tab_bar_item" @click="itemClick">
    <div v-if="!isShow"><slot name="item-icon"></slot></div>
     <div v-else><slot name="item-icon-active"></slot></div>
     <div :style='activeStyle'><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default{
    name:'TabBarItem',
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'#e89abe'
      }
    },
    computed:{
      isShow(){
        return this.$route.path.indexOf(this.path) != -1
      },
      activeStyle(){
        return this.isShow ? {color:this.activeColor} : {}
      }
    },
    methods: {
      itemClick(){
        this.$router.push(this.path)
       }
    }
  }
</script>

<style>
  .tab_bar_item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;

  }
  .tab_bar_item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
