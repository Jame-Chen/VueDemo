<template>
  <div id="app">
    First Name : <input type="text" v-model="firstName"><BR/>
    Last Name : <input type="text" v-model="lastName"><BR/>
    Address : <input type="text" v-model="address"><BR/>

    <div>
      Full Name:{{fullName}}
    </div>
    <div>
      ADDRESS:{{addr}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "ComputeVue",
    data() {
      return {
        firstName: '',
        lastName: '',
        address: '',
        addr: '',
      }
    },
    computed: {
      fullName() {
        return this.firstName + " " + this.lastName;
      }
    },
    watch:{
      /*address(){
        this.addr = this.address;
      }*/
    }
  }
</script>
