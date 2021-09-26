<template>
  <div class="cv-box">
    <a href="#">
      <div class="cv-info" @click="$router.push(`/cv/${id}`)">
        <img :src="imgSrc" alt="profileImage" />
        <div class="text-box">
          <p id="firstName" class="firstname">{{ firstName }}</p>
          <p id="lastName" class="lastname">{{ lastName }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "imgSrc"],
};
</script>

<style>
.cv-box {
  background-color: none;
  width: 25rem;
  padding: 1.5rem;
  align-self: center;
}

.cv-box a {
  text-decoration: none;
}

.cv-info {
  font: roboto;
  background-color: var(--light-gray);
  width: 23rem;
  height: 7rem;
  display: flex;
  flex-direction: row;
  border-radius: 30px;
}
.cv-box img {
  width: 4.75em;
  height: 4.75em;
  margin: 5%;
  border-radius: 50%;
}

.text-box {
  width: 50%;
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-box p {
  font-family: Roboto;
  color: black;
  text-align: center;
  line-height: 20px;
}

.text-box .firstname {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 24px;
  padding-top: 17%;
}

.text-box .lastname {
  font: roboto;
  font-weight: normal;
  font-size: 21px;
  margin-bottom: 20%;
}
</style>
