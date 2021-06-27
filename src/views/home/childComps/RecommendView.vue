<template>
<div class="recommend">
  <div v-for="item in recommends" class="recommend_item">
    <a :href="item.link">
      <img :src="item.image" >
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
   export default{
     name:'RecommendView',
     props: {
       recommends: {
         type:Array,
         default(){
           return []
         }
       }
     }
   }
</script>

<style>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 15px 0;
    border-bottom:  8px solid #eee;
  }
  .recommend_item{
    flex: 1;
  }
  .recommend_item img{
    height: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
