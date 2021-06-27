<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center">美人街</div>
  </nav-bar>
   <HomeSwiper :banners="banners"/>
   <RecommendView :recommends="recommends"/>
   <feature-view/>
   <tab-control :titles="['流行','新款','精选']"/>
   <ul>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
     <li>t</li>
   </ul>
</div>
</template>

<script>

  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'
  import FeatureView from './childComps/FeatureView.vue'
  
  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  
  import {getHomeMultidata} from 'network/home.js'


   export default{
     name:'Home',
     components:{
       HomeSwiper,
       RecommendView,
       FeatureView,
       NavBar,
       TabControl
     },
     data () {
       return {
         banners: [],
         recommends: []
       }
     },
     created() {
       //请求多个数据
       getHomeMultidata().then(res => {
         console.log(res)
         //保存数据
         this.banners = res.data.banner.list
         this.recommends = res.data.recommend.list
       })
     }
   }
</script>

<style>
  #home {
    padding-top: 44px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #FFFFFF;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
</style>
