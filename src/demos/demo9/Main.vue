<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="left" style="float:left;width:50%; height:300px;"/>
    <router-view name="right" style="float:right;width:50%; height:300px;"/>
  </div>

</template>

<script>

  export default {
    name: "Main"
  }
</script>

