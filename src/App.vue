<template>
  <SelectCV></SelectCV>
  <Login></Login>
  <Main></Main>
</template>

<script>
import Login from "./components/Login.vue";
import Main from "./components/Main.vue";
import SelectCV from "./components/SelectCV.vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: "App",
  components: {
    Login,
    Main,
    SelectCV,
  },
};
</script>

<style></style>
