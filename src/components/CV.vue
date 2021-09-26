<template>
  <div class="select-cv-page">
    <!-- <navbar></navbar> -->
    <div class="navbar">
      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <button class="login" @click="$router.push('/login')">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </button>
        </li>
      </div>
      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item d-inline-flex">
          <div class="login d-inline-flex" @click="$router.push('')">
            <div>
              <font-awesome-icon icon="user" />
            </div>
            <div class="d-flex-inline logged-user">
              {{ currentUser.firstName }}
              {{ currentUser.lastName }}
            </div>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div>
    </div>
    <div class="content">
      <WhoIAm 
        :user="this.user"
        :imgSrc="imgPath + this.currentCV.imgSrc"
        :introduction="this.currentCV.introduction"
      ></WhoIAm>
    </div>
  </div>
</template>

<script>
import variables from "../../variables";
import WhoIAm from "./CVcomponents/WhoIAm.vue";

export default {
  name: "Home",
  components: {
    WhoIAm
  },
  data() {
    return {
      imgPath: variables.IMG_URL,
      currentCV: [],
      user:{
        firstName:'' ,
        lastName: '',
      },
    
    };
  },
  mounted() {
    this.loading = true;
    this.getCVFromStore();
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user == null
        ? null
        : this.$store.state.auth.user.user;
    }
  },
  methods: {
    getCVFromStore() {
      this.loading = true;
      this.currentCV = this.$store.state.cvs.currentCV;
      this.user=this.$store.state.cvs.currentCV.user;
    },
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("");
    }
  }
};
</script>

<style>
.select-cv-page {
  background-color: var(--dark-gray);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  /* overflow: hidden; */
}

.navbar {
  height: 7%;
}

.login {
  color: white;
  font-size: 24px;
  top: 20%;
  left: 80%;
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
  height: 100%;
}

.select-cv-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 40%;
}
.logged-user {
  margin-left: 10px;
}
</style>