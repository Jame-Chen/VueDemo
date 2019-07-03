<template>
    <div id="app">
      Count:{{this.count}}<br/>
      <input  value="增加" type="button" v-on:click="increase">
    </div>
</template>

<script>
    export default {
        name: "MyFirstVue",
      data(){
          return {
            count :0
          }
      },
      methods:{
        increase(){
          this.count ++;
        }
      }
    }
</script>

<style scoped>

</style>
