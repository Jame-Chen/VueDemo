<template>
  <div style="background-color: lightsalmon">
    这是H1组件,Count值为 {{count}}
    <div>
      <input type="button" value="增加3" @click="inc(3)"/>
      <input type="button" value="增加2" @click="increase(2)"/>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'

  export default {
    name: "H1",
    data() {
      return {}
    },
    methods: {
      ...mapActions({
        inc: "a/increment"
      }),
      ...mapMutations({
        inc2: "a/increment"
      }),
        increase(step){
         this.$store.dispatch("a/increment",step);
       }
    },
    computed: {
      ...mapState({count: state => state.a.count})
    }
  }
</script>
