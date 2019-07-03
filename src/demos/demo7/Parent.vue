<template>
  <div>
    <child>
      <div slot="header">HEADER CONTENT</div>
      <div slot="footer">FOOTER CONTENT</div>
      这是正文
    </child>
  </div>
</template>

<script>
  import Child from "./Child";

  export default {
    data() {
      return {

      }
    },
    components:{Child}
  }
</script>

<style scoped>

</style>
