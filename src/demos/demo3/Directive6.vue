<template>
  <div id="app">
    <div>
      <div>输入框触发时间:{{dt}}</div>
      <input type="text"  v-on:keydown.ctrl.65="clickHandle">
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

