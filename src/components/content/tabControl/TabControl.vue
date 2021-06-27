<template>
  <div class="tab_control">
    <div v-for="(item,index) in titles" class="tab_control_item" :class="{active: index == currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
   export default{
     name:'TabControl',
     props: {
       titles: {
         type: Array,
         default() {
           return []
         }
       }
     },
     data() {
       return {
         currentIndex:0
       }
     }
   }
</script>

<style>
  .tab_control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }
 .tab_control_item {
   flex: 1;
 }
 .active {
   color: var(--color-tint);
 }
 .active span{
   padding: 5px;
   border-bottom: 3px solid var(--color-tint);
 }

</style>
