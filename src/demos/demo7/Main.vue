<template>
  <div id="app">
    <parent></parent>
  </div>

</template>

<script>
  import Parent from "./Parent"

  export default {
    name: "Main",
    data() {
      return {}
    },
    components: {"parent": Parent}
  }
</script>

