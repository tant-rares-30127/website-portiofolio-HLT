<template>
  <Login></Login>
  <Main></Main>
  <SelectCV></SelectCV>
</template>

<script>
import Login from "./components/Login.vue";
import Main from "./components/Page/Main.vue";
import SelectCV from "./components/SelectCV.vue";

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
