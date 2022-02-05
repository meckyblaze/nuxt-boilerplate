<template>
  <div>
    {{ user }}
    <v-btn color="error" @click="Add">Add</v-btn>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    name: "ContactPage",

    computed: {
      ...mapGetters('auth', ['user']),
    },

    methods: {
      ...mapActions('auth', ['change']),

      Add() {
        this.change('Maduka Emmanuel Chinonyerem')
      }
    },
  }
</script>

<style scoped>

</style>