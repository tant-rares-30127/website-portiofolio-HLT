<template>
  <div class="select-cv-page">
    <div class="navbar">
      <button class="login" @click="$router.push('/login')">
        Log in
      </button>
    </div>
    <div class="content">
      <div class="select-cv-area" >
        <user 
          v-for="user in this.users"
          :key="user.id"
          :id="user.id"
          :name="user.name"
          :position="user.position"
          :photoSrc="user.photoSrc"
          class="user-item"
          @click="getCVData(user.id - 1)"
        ></user>
      </div>
    </div>
  </div>
</template>

<script>
import photo from "../assets/person-icon.png";
import User from "../components/User.vue";
export default {
  components: { User },
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Rareș Tânț",
          position: "Developer",
          photoSrc: photo,
        },
        {
          id: 2,
          name: "Teona Tanasă",
          position: "Developer",
          photoSrc: photo,
        },
        {
          id: 3,
          name: "Claudia Naghi",
          position: "Developer",
          photoSrc: photo,
        },
        {
          id: 4,
          name: "Delia Popescu",
          position: "Developer",
          photoSrc: photo,
        },
      ],
    };
  },
  methods: {
    async getCVData(currentId) {
      // const actionPayload = {
      //   username: "Teona",
      //   password: "2222",
      // };
      // await this.$store.dispatch("auth/signIn", actionPayload);
      await this.$store.dispatch("cvdata/getCVForSelectedUser", currentId);
    },
  },
};
</script>

<style>
.select-cv-page {
  background-color: var(--dark-gray);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
}

.navbar {
  height: 7%;
}

.login {
  color: white;
  font-size: 24px;
  top: 20%;
  left: 92%;
  font-weight: bold;
  border: none;
  background: none;
  position: absolute;
}

.login:hover,
.login:focus {
  text-decoration: none;
  cursor: pointer;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 80%;
}

.select-cv-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 40%;
}
</style>
