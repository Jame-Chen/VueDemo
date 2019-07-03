<template>
  <div id="app">
    <div v-text="text">

    </div>
    <div v-html="html">

    </div>

    <div>
      Count={{count}},Once Count=<span v-once>{{count}}</span> <br/>
      <input type="button" value="增加" v-on:click="increase">

    </div>

  </div>
</template>

<script>
  export default {
    name: "Directive1",
    data() {
      return {
        text: "这是text文本信息",
        html: "<span style='color: red'>这是html信息</span>",
        count: 1
      }
    },
    methods: {
      increase() {
        this.count++;
      }
    }
  }
</script>

