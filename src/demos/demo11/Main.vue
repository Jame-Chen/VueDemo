<template>
  <div id="app">
    <h1-comp></h1-comp>
    <h2-comp></h2-comp>
  </div>

</template>

<script>

  import H1 from './H1'
  import H2 from './H2'

  export default {
    name: "Main",
    components:{
      'h1-comp':H1,
      'h2-comp':H2
    }
  }
</script>

