<template>
  <router-link to="/"></router-link>
  <router-view></router-view>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
:root {
  --dark-gray: #393e46;
  --blue: #00adb5;
  --light-blue: #aad8d3;
  --light-gray: #eeeeee;
}
</style>
