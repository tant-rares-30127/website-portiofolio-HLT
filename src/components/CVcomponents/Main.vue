<template>
  <div class="wrapper">
    <WhoIAm></WhoIAm>
    <Educationpart></Educationpart>
    <WorkExperience></WorkExperience>
    <Languages></Languages>
    <WhatIDo></WhatIDo>
    <Projects></Projects>
    <Skills></Skills>
  </div>
</template>

<script>
import WhoIAm from "../Page/WhoIAm.vue";
import Educationpart from "../Page/Educationpart.vue";
import WorkExperience from "../Page/WorkExperience.vue";
import Languages from "../Page/Languages.vue";
import WhatIDo from "../Page/WhatIDo.vue";
import Projects from "../Page/Projects.vue";
import Skills from "../Page/Skills.vue";

export default {
  name: "App",
  components: {
    WhoIAm,
    Educationpart,
    WorkExperience,
    Languages,
    WhatIDo,
    Projects,
    Skills,
  },
};
</script>

<style></style>
