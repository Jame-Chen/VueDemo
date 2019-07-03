<template>
  <div id="app">
    <div>
      <global-comp></global-comp>
    </div>
    <div>
      <local-comp></local-comp>
    </div>
    <div>
      <span is="local-comp"/>
    </div>
  </div>

</template>

<script>
  import LocalComp from "./LocalComp"

  export default {
    name: "Main",
    components: {"local-comp": LocalComp},
    data() {
      return {}
    }
  }
</script>

