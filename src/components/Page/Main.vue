<template>
    <WhoIAm></WhoIAm>
    <Educationpart></Educationpart>
    <WorkExperience></WorkExperience>
</template>

<script>
import  WhoIAm from "../Page/WhoIAm.vue";
import Educationpart from "../Page/Educationpart.vue";
import WorkExperience from "../Page/WorkExperience.vue";

export default {
  name: "App",
  components: {
    WhoIAm,
    Educationpart,
    WorkExperience,
  },
};
</script>

<style></style>
