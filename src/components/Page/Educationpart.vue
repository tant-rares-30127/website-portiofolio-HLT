<template>
  <div class="about-education">
    <h2>Education</h2>
    <h3>{{ textEducation }}</h3>
  </div>
</template>
<style>
.about-education h2, .about-education h3{
background-color: #23262b;
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
*{
    background-color: #23262b;
}

</style>
<script>
export default {
  data() {
    return {
      textEducation: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
    };
  },
};
</script>
