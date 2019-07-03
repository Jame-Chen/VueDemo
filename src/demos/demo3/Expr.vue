<template>
  <div id="app">
    <div>
      Message:{{msg}}
    </div>
    <div>
      Number: {{number+100}}
    </div>
    <div>
      {{ ok ? "YES" : "NO"}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "Expr",
    data() {
      return {
        msg: "这是一条消息",
        number: 1,
        ok: true
      }
    }
  }
</script>

