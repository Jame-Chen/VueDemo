<template>
  <div>
    <div><input type="button" value="加载数据" @click="loadData"></div>
    <div><input type="button" value="加载数据Timeout" @click="loadDataTimeout"></div>
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
  let url = "http://localhost:10000/data.jsp";
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
            debugger
            this.dataList = res.data;
          }).catch(e => {
            console.log(e)
          });
      },
      loadDataTimeout(){
        axios.get(url, {
          timeout:1000
        }).then(res => {
          this.dataList = res.data;
        }).catch(e => {
          debugger
          console.log(e)
        });
      }
    }
  }
</script>

<style scoped>

</style>
