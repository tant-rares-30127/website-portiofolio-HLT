<template>
  <div class="about-work">
    <h2>Work Experience</h2>
    <div class="work-experience">
      <WorkExperienceObject
        v-for="object in this.workList"
        :key="object.id"
        :companyName="object.companyName"
        :position="object.position"
        :startDate="object.startDate"
        :endDate="object.endDate"
      ></WorkExperienceObject>
    </div>
  </div>
</template>

<style>
.about-work h2,
.about-work h3 {
  background-color: var(--dark-gray);
  color: #ffffff;
  font-weight: bold;

  font-style: normal;
  font-size: 36px;
  line-height: 28px;
  padding-top: 3%;
}
.about-work h3 {
  font-weight: lighter;
}

.about-work {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.work-experience {
  display: flex;
  gap: 2rem;
}
</style>

<script>
import WorkExperienceObject from "./Objects/WorkExperienceObject.vue";
export default {
  components: { WorkExperienceObject },
  props: ["workList"],
};
</script>
