<template>
  <div>
    {{ user }}
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "ContactPage",

    computed: {
      ...mapGetters('auth', ['user']),
    }
  }
</script>

<style scoped>

</style>