<template>
    <div>
      <div>这是组件E</div>
      <div>参数:<BR/>name={{this.$route.name}} <BR/>  username={{this.$route.query.username}} <BR/>  id={{this.$route.query.id}} </div>
    </div>
</template>

<script>
    export default {
        name: "CompE"
    }
</script>

<style scoped>

</style>
