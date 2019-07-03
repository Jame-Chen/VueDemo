<template>
  <div id="app">
    <div>
      当前显示:{{this.isDisplayMockData ? 'Mock Data' : 'Mock Request'}}
      <input type="button" value="点击切换" @click="changeComp">
    </div>
    <comp-data v-if="isDisplayMockData"></comp-data>
    <comp-request v-else></comp-request>
  </div>

</template>

<script>

  import MockData from './MockData'
  import MockRequest from './MockRequest'

  export default {
    name: "Main",
    components: {
      'comp-data': MockData,
      'comp-request': MockRequest
    },
    data() {
      return {
        isDisplayMockData: true,
      }
    },
    methods: {
      changeComp() {
        this.isDisplayMockData=!this.isDisplayMockData;
      }
    }
  }
</script>

