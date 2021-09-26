<template>
  <div class="about-education">
    <h2>Education</h2>
    <div class="education">
      <EducationObject
        v-for="ed in this.edList"
        :key="ed.id"
        :institutionName="ed.institutionName"
        :description="ed.description"
        :startDate="ed.startDate"
        :endDate="ed.endDate"
      ></EducationObject>
    </div>
  </div>
</template>

<style>
.about-education {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-education h2,
.about-education h3 {
  background-color: var(--dark-gray);
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  padding-top: 3%;
}

.about-education h3 {
  font-weight: lighter;
}

.education {
  display: flex;
  gap: 2rem;
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
