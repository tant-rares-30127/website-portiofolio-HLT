<template>
  <div class="about-projects">
    <h2>Projects</h2>
    <p>{{ projects }}</p>
    <ProjectObject
      v-for="proj in this.projList"
      :key="this.projList.indexOf(proj)"
      :name="proj"
    ></ProjectObject>
    <p>-----in project comp-------</p>
  </div>
</template>

<style>
.about-projects h2 {
  background-color: var(--dark-gray);
  /* color: #ffffff; */
  font-weight: bold;
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  padding-left: 4.7%;
  padding-top: 3%;
}

.about-projects table {
  /* color: #ffffff; */
  margin-left: auto;
  margin-right: auto;
  border-radius: 1.2em;
  overflow: hidden;
  border-collapse: collapse;
}

.about-projects td,
.about-projects th {
  padding: 10px;
}

.about-projects tr {
  text-align: center;
  padding-left: 22%;
}
</style>

<script>
import ProjectObject from "./Objects/ProjectObject.vue";
export default {
  props: ["projects"],
  components: { ProjectObject },
  data() {
    return {
      projList: this.splitProjects,
    };
  },
  computed: {
    splitProjects() {
      return this.projects.split(",");
    },
  },
};
</script>
