<template>
  <div class="about-work">
    <h2>Work Experience</h2>
    <h3>{{ workExperience }}</h3>
  </div>
</template>
<style>
.about-work h2,
.about-work h3 {
  background-color: var(--dark-gray);
  color: #ffffff;
  font-weight: bold;

  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  padding-left: 4.7%;
  padding-top: 3%;
}
.about-work h3 {
  font-weight: lighter;
}
</style>
<script>
export default {
  data() {
    return {
      workExperience:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
    };
  },
};
</script>
