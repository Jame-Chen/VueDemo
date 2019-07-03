<template>
  <div>
    <slot name="header" ></slot>
    <p>------------</p>
    <slot/>
    <p>------------</p>
    <slot name="footer"></slot>
  </div>
</template>

<script>
  export default {
    name: "Child",
    data() {
      return {

      }
    }

  }
</script>

