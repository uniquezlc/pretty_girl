<template>
  <tab-bar>
      <tab-bar-item path="/home">
        <img slot='item-icon' src="~assets/img/tabbar/home1.png" alt="首页"/>
        <img slot='item-icon-active' src="~assets/img/tabbar/home.png" alt="首页"/>
        <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category"  activeColor="#e89abe">
        <img slot='item-icon' src="~assets/img/tabbar/class.png" alt=""/>
        <img slot='item-icon-active' src="~assets/img/tabbar/class1.png" alt=""/>
        <div slot='item-text'>分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot='item-icon' src="~assets/img/tabbar/shopcart.png" alt=""/>
        <img slot='item-icon-active' src="~assets/img/tabbar/shopcart1.png" alt=""/>
        <div slot='item-text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot='item-icon' src="~assets/img/tabbar/profile.png" alt=""/>
        <img slot='item-icon-active' src="~assets/img/tabbar/profile1.png" alt=""/>
        <div slot='item-text'>我的</div>
      </tab-bar-item>
   </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
   export default{
     name:'MainTabBar',
     components:{
       TabBar,
       TabBarItem
     }
   }
</script>

<style>
</style>
