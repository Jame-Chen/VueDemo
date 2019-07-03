<template>
  <div id="app">
    <div>
      <div>IF DEMO ------</div>
      <div v-if="value=='1'">value1</div>
      <div v-else-if="value=='2'">value2</div>
      <div v-else>value3</div>
    </div>
    <div>
      <div>SHOW DEMO------</div>
      <div v-show="value=='1'">show value1</div>
      <div v-show="value=='2'">show value2</div>
    </div>
    <div>
      <div>FOR DEMO------</div>
      <div v-for="(item,index) in items">
        <div>{{index}}-{{item}}</div>
      </div>
      <div>FOR DEMO2------</div>
      <div v-for="item of items">
        <div>{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Directive1",
    data() {
      return {
        value: '1',
        items: ['A', 'B', 'C']
      }
    },
    methods: {}
  }
</script>

