<template>
  <div>
    这是子组件,父组件标题为【{{title}}】
    <div>
      <input type="text" v-model="title" />
      <input type="button" value="改变父标题" @click="changeParentTitle">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Child",
    data() {
      return {
        title:""
      }
    },
    props: ["parentTitle"],
    mounted(){
      this.title = this.parentTitle;
    },
    methods:{
      changeParentTitle(){
        this.$emit("changeParentTitle",this.title)
      }
    }
  }
</script>

