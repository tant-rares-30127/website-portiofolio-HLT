<template>
  <div class="about-education">
    <h2>Education</h2>
    <EducationObject
      v-for="ed in this.edList"
      :key="ed.id"
      :institutionName="ed.institutionName"
      :description="ed.description"
      :startDate="ed.startDate"
      :endDate="ed.endDate"
    ></EducationObject>
  </div>
</template>

<style>
.about-education h2,
.about-education h3 {
  background-color: var(--dark-gray);
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  padding-left: 4.7%;
  padding-top: 3%;
}

.about-education h3 {
  font-weight: lighter;
}
</style>

<script>
import EducationObject from "./Objects/EducationObject.vue";
export default {
  components: { EducationObject },
  props: ["edList"],
  data() {
    return {
      textEducation:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
    };
  },
};
</script>
