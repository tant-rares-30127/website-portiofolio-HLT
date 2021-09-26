<template>
  <div class="about-projects">
    <p class="projects-title">Projects</p>
    <p class="projects">{{ projects }}</p>
  </div>
</template>

<style>
.projects {
  color: var(--blue);
}

.about-projects .projects-title {
  background-color: var(--dark-gray);
  font-weight: bold;
  font-style: normal;
  font-size: 36px;
  line-height: 28px;
  display: flex;
  align-self: center;
  padding-top: 10%;
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
export default {
  props: ["projects"],
};
</script>
