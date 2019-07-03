<template>
  <div>
    <div>
      规则:<textarea rows="10" cols="60" v-model.trim="rules"/><br/>
      示例1：<br/>
      {
      "list|1-10": [{
      "id|+1": 1
      }]
      }<br/>
      示例2：<br/>
      {
      "email": "@cname" ,
      "title": "@ctitle"
      }<br/>
      <br/>
      <input type="button" value="Mock数据" @click="mockData"/>
    </div>
    <div>
      <div>
        <textarea rows="10" cols="60" >{{result}}</textarea>
      </div>
    </div>
  </div>
</template>

<script>
  import Mock from 'mockjs';


  export default {
    name: "Comp",
    data() {
      return {
        rules: "{\n" +
          "    \"list|1-10\": [{\n" +
          "        \"id|+1\": 1\n" +
          "    }]\n" +
          "}",
        result: ""
      }
    },
    methods: {
      mockData() {
        let obj = JSON.parse(this.rules);
        let data = Mock.mock(obj);
        this.result = JSON.stringify(data,null,4);
      }
    }
  }
</script>

<style scoped>

</style>
