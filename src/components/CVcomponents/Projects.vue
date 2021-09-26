<template>
  <div class="about-projects">
    <h2>Projects</h2>
    <p class="projects">{{ projects }}</p>
    <ProjectObject
      v-for="proj in this.projList"
      :key="this.projList.indexOf(proj)"
      :name="proj"
    ></ProjectObject>
  </div>
</template>

<style>
.projects {
  color: var(--blue);
}

.about-projects h2 {
  background-color: var(--dark-gray);
  font-weight: bold;
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-self: center;
  padding-top: 3%;
  color: white;
}

.about-projects table {
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

.about-projects {
  display: flex;
  flex-direction: column;
  align-self: center;
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
