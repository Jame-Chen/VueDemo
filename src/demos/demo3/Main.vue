<template>
  <div id="app">
    <div>
      <select id="sel" v-model="selectValue">
        <option value="0">模板语法</option>
        <option value="1">指令1</option>
        <option value="2">指令2</option>
        <option value="3">指令3</option>
        <option value="4">指令4</option>
        <option value="5">指令5</option>
        <option value="6">指令6</option>
      </select>
    </div>
    <div v-if="selectValue==0">
      <expr></expr>
    </div>
    <div v-if="selectValue==1">
      <directive1></directive1>
    </div>
    <div v-if="selectValue==2">
      <directive2></directive2>
    </div>
    <div v-if="selectValue==3">
      <directive3></directive3>
    </div>
    <div v-if="selectValue==4">
      <directive4></directive4>
    </div>
    <div v-if="selectValue==5">
      <directive5></directive5>
    </div>
    <div v-if="selectValue==6">
      <directive6></directive6>
    </div>
  </div>

</template>

<script>
  import Expr from "./Expr"
  import Directive1 from "./Directive1"
  import Directive2 from "./Directive2"
  import Directive3 from "./Directive3"
  import Directive4 from "./Directive4"
  import Directive5 from "./Directive5"
  import Directive6 from "./Directive6"

  export default {
    name: "Main",
    components: {Expr,Directive1,Directive2,Directive3,Directive4,Directive5,Directive6},
    data() {
      return {
        selectValue: "0"
      }
    }
  }
</script>

