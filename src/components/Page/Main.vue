<template>
    <WhoIAm></WhoIAm>
    <Educationpart></Educationpart>
    <WorkExperience></WorkExperience>
    <Languages></Languages>
    <WhatIDo></WhatIDo>
</template>

<script>
import  WhoIAm from "../Page/WhoIAm.vue";
import Educationpart from "../Page/Educationpart.vue";
import WorkExperience from "../Page/WorkExperience.vue";
import Languages from "../Page/Languages.vue";
import WhatIDo from "../Page/WhatIDo";

export default {
  name: "App",
  components: {
    WhoIAm,
    Educationpart,
    WorkExperience,
    Languages,
    WhatIDo
  },
};
</script>

<style></style>
