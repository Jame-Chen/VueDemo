<template>
  <div>
    <div><input type="button" value="加载数据" @click="loadData"></div>
    <div>
      <table border="1" style="width:300px;">
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>地址</th>
        </tr>
        <tr v-for="item of dataList">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.address}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import MockAdapter from 'axios-mock-adapter';
  let mock = new MockAdapter(axios);
  let url = "http://localhost:10000/data.jsp";
  let mockData = [{"address":"北京","age":20,"id":"001","name":"张三"},{"address":"上海","age":20,"id":"002","name":"李四"},{"address":"深圳","age":20,"id":"003","name":"王五"}];

  mock.onGet(url).reply(200, mockData);

  export default {
    name: "Comp",
    data() {
      return {
        dataList: []
      }
    },
    methods: {
      loadData() {
        //this.dataList = this.dataList.concat([{id: '001', name: 'tom', address: "上海"}]);
        this.dataList= [];
          axios.get(url).then(res => {
            this.dataList = res.data;
          }).catch(e => {
            console.log(e)
          });
      }
    }
  }
</script>

<style scoped>

</style>
