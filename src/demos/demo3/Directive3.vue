<template>
  <div id="app">
    <div>
      绑定属性方式
      <div v-bind:class="{
      'classA':showA,
      'classB':showB
    }"></div>
    </div>
    <div>
      数组方式
      <div v-bind:class="[{'classC':showC,myClass}]"></div>
    </div>
    <div>
      对象方式
      <div v-bind:class="classData"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Directive3",
    data() {
      return {
        showA: true,
        showB: false,
        showC: false,
        myClass: 'myClass',
        classData: {
          "classD": false,
          "classE": true,
        }
      }
    }
  }
</script>

