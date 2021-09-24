<template>
  <div class="user-box">
    <a href="#">
      <div class="user-info" @click="openCV">
        <img v-bind:src="photoSrc" alt="profileImage" height="40" />
        <div class="text-box">
          <p id="name">{{ name }}</p>
          <p id="position">{{ position }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "position", "photoSrc"],
  methods: {
    openCV() {
      console.log("the user selected has the id: " + this.id);
    },
  },
};
</script>

<style>
.user-box {
  font: roboto;
  background-color: none;
  width: 25rem;
  padding: 1.5rem;
}

.user-box a {
  text-decoration: none;
}

.user-info {
  font: roboto;
  background-color: var(--light-gray);
  width: 23rem;
  height: 7rem;
  display: flex;
  flex-direction: row;
  border-radius: 30px;
}
.user-box img {
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

.text-box #name {
  font-weight: bold;
  font-size: 24px;
  padding-top: 17%;
}

.text-box #position {
  font-weight: normal;
  font-size: 21px;
  margin-bottom: 20%;
}
</style>
