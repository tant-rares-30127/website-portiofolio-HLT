<template>
  <div class="about">
    <div class="about-text">
      <div class="about-photo">
        <img :src="imgSrc" alt="buna" height="300" />
      </div>
    </div>
    <div class="right-part">
      <h2 class="CVname">{{ user.firstName }} {{ user.lastName }}</h2>
      <div class="introduction-box">
        <h2>About</h2>
        <p>{{ introduction }}</p>
      </div>
      <div class="about-contact">
        <h2>Contact</h2>
        <div class="about-contact-i">
          <a v-bind:href="user.linkedIn"
            ><i class="fab fa-linkedin"></i
          ></a>
          <a v-bind:href="user.gitHub"><i class="fab fa-github"></i></a>
          <a href=""><i class="fas fa-phone-square"></i></a>
          <a href=""><i class="fas fa-envelope"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user", "imgSrc", "introduction"],
};
</script>

<style>
.about {
  margin-top: 700px;
  margin-left: 50px;
  color: white;
  display: flex;
  gap: 3rem;
  padding-top: 3%;
}

.about-photo img {
  border-radius: 30px;
  left: 10px;
}

.CVname {
  font-size: 4rem;
  color: var(--light-gray);
  font-style: italic;
  font-weight: bold;
}

.about-contact h2 {
  padding-right: 100%;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
}

.about-contact a {
  font-size: 3rem;
  padding-left: 2.2%;
  color: black;
}
.about-contact a:hover {
  color: #00adb5;
}
</style>
