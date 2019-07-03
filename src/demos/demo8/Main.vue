<template>
  <div id="app">
    <div>
        <div>使用push方式</div>
      <input type="button" value="跳转到A" @click="goto('/a')">
      <input type="button" value="跳转到B" @click="goto('/b')">
      <input type="button" value="跳转到C" @click="goto({name:'routeC'})">
      <input type="button" value="跳转到D" @click="goto({name:'routeD',params:{username:'tom',id:'002'}})">
      <input type="button" value="跳转到E" @click="goto({path:'/e',query:{id:'001',username:'alen'}})">
    </div>
    <br/>
    <div>
      <div>使用link方式</div>
      <router-link to="/a">链接到A</router-link>
      <router-link to="/b">链接到B</router-link>
      <router-link to="/c">链接到C</router-link>
      <router-link :to="{name:'routeD',params:{username:'tom',id:'002'}}">链接到D</router-link>
    </div>
    <br/>
    <router-view></router-view>
  </div>

</template>

<script>

  export default {
    name: "Main",
    methods:{
      goto(param){
        this.$router.push(param);
      }
    }
  }
</script>

