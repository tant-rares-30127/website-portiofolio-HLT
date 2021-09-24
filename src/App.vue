<template>
  <Login></Login>
</template>

<script>
import Login from "./components/Login.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components: {
    Login,
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
