<template>
    <div style="background-color: lemonchiffon">
      这是H2组件，Double Count值为{{count}}
    </div>
</template>

<script>

  import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
    export default {
        name: "H2",
      data(){
        return {

        }
      },
      computed: {
          ...mapGetters({
            count:"a/doubleCount"
          })
        /*count () {
          return this.$store.getters["a/doubleCount"]
        }*/
      }
    }
</script>
