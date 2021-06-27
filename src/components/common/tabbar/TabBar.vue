<template>
  <div>
    <div id="tab_bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
   export default {
     name:'TabBar'
   }
</script>

<style>

#tab_bar {
  display: flex;
  background-color: #f1f1f1;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px #d0cece54;
  color: #8a8a8a;
}

</style>
