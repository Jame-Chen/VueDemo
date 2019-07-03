<template>
  <div>
    这是父组件，标题 【{{title}}】<br/>
    -------------------<br/>
    <Child :parentTitle="title" @changeParentTitle="changeTitle" />
  </div>
</template>

<script>
  import Child from "./Child";

  export default {
    data() {
      return {
        title:"父组件标题"
      }
    },
    methods:{
      changeTitle(t ){
        this.title = t;
      }
    },
    components:{Child}
  }
</script>

<style scoped>

</style>
