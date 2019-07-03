<template>
    <div>
      <div>这是组件D</div>
      <div>参数:<BR/>name={{this.$route.name}} <BR/>  username={{this.$route.params.username}} <BR/>  id={{this.$route.params.id}} </div>
    </div>
</template>

<script>
    export default {
        name: "CompD"
    }
</script>

<style scoped>

</style>
