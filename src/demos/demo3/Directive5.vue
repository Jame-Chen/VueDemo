<template>
  <div id="app">
    <div>
      <div>按钮点击时间:{{dt}}</div>
      <input type="button" value="Click" v-on:click="clickHandle">
      <input type="button" value="Click2" v-on:click.once="clickHandle">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Directive5",
    data() {
      return {
        dt: 0
      }
    },
    methods: {
      clickHandle() {
        this.dt = new Date().getTime()
      }
    }
  }
</script>

