<template>
  <div id="app">
    <div>
      <input type="text" v-model="formData.a"/> <br/>
      <input type="checkbox" v-model="formData.b"/><br/>
      1 <input type="radio" name="r" value="1" v-model="formData.c"/><br/>
      2 <input type="radio" name="r" value="2" v-model="formData.c"/><br/>
      <textarea v-model="formData.d"></textarea><br/>
    </div>
    <div>
      a->{{formData.a}}<BR/>
      b->{{formData.b}}<BR/>
      c->{{formData.c}}<BR/>
      d->{{formData.d}}<BR/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Directive4",
    data() {
      return {
        formData: {}
      }
    }
  }
</script>

