<template>
    <div>
      这是组件Comp1,可以在路由h1,h2
      <hr/>
      <div>
        <router-link to="h1">嵌套组件H1</router-link>
        <router-link to="h2">嵌套组件H2</router-link>
      </div>
      <hr/>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Comp1"
    }
</script>

<style scoped>

</style>
