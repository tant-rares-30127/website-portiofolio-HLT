<template>
    <WhoIAm></WhoIAm>
    <Educationpart></Educationpart>
    <WorkExperience></WorkExperience>
    <Languages></Languages>
</template>

<script>
import  WhoIAm from "../Page/WhoIAm.vue";
import Educationpart from "../Page/Educationpart.vue";
import WorkExperience from "../Page/WorkExperience.vue";
import Languages from "../Page/Languages.vue";

export default {
  name: "App",
  components: {
    WhoIAm,
    Educationpart,
    WorkExperience,
    Languages
  },
};
</script>

<style></style>
