<template>
  <div class="about-skills">
    <h2>Skills</h2>
    <p>{{ skills }}</p>
  </div>
</template>

<script>
export default {
  props: ["skills"],
};
</script>

<style>
.table-skills p {
  color: #ffffff;
}

.table-skills {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.progress-bar {
  background-color: var(--dark-gray);
}

.progress-bar p {
  font-weight: 600;
}

.about-skills h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  display: flex;
  align-self: center;
  color: #ffffff;
}

.about-skills {
  display: flex;
  align-self: center;
  flex-direction: column;
  color: var(--blue);
}
</style>
