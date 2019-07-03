<template>
  <div id="app">
    Count:{{this.count}}<br/>
    <input value="增加" type="button" v-on:click="increase"><br/>
  </div>
</template>

<script>
  export default {
    name: "MyFirstVue",
    data() {
      return {
        count: 0
      }
    },
    methods: {
      increase() {
        this.count++;
      }
    },
    beforeCreate() {
      console.log("Before Create ...")
    },
    created() {
      console.log("Created")
    },
    beforeMount() {
      console.log("BeforeMount")
    },
    mounted() {
      console.log("Mounted")
    },
    beforeUpdate() {
      console.log("Before Update...")
    },
    updated() {
      console.log("Updated")
    }
    /*
    beforeCreate 实例初始化前
    created 实例创建完成后调用,此时，尚未挂载
    beforeMount 挂载前调用,render函数首次被调用
    mounted el被新创建的vm.$el替换,挂载到实例后调用
    beforeUpdate 数据更新时调用
    updated 数据更改重新渲染后调用
     */
  }
</script>
