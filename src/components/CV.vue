<template>
  <div class="select-cv-page">
    <!-- <navbar></navbar> -->
    <div class="navbar">
      <div v-if="!currentUser" class="navbar-nav">
        <li class="nav-item">
          <button class="login" @click="$router.push('/login')">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </button>
        </li>
      </div>
      <div v-if="currentUser" class="navbar-nav">
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
    <div class="content-cv">
      <WhoIAm
        :user="this.user"
        :imgSrc="imgPath + this.currentCV.imgSrc"
        :introduction="this.currentCV.introduction"
      ></WhoIAm>
      <Educationpart :edList="this.currentCV.education"></Educationpart>
      <WorkExperience
        :workList="this.currentCV.workExperience"
      ></WorkExperience>
      <Languages :langList="this.currentCV.language"></Languages>
      <WhatIDo
        :whatIDo="this.currentCV.whatIDo"
        :whatIUse="this.currentCV.whatIUse"
      ></WhatIDo>
      <Projects :projects="this.currentCV.projects"></Projects>
      <Skills :skills="this.currentCV.skills"></Skills>
    </div>
  </div>
</template>

<script>
import variables from "../../variables";
import WhoIAm from "./CVcomponents/WhoIAm.vue";
import Educationpart from "./CVcomponents/Educationpart.vue";
import WorkExperience from "./CVcomponents/WorkExperience.vue";
import Languages from "./CVcomponents/Languages.vue";
import WhatIDo from "./CVcomponents/WhatIDo.vue";
import Projects from "./CVcomponents/Projects.vue";
import Skills from "./CVcomponents/Skills.vue";

export default {
  name: "Home",
  components: {
    WhoIAm,
    Educationpart,
    WorkExperience,
    Languages,
    WhatIDo,
    Projects,
    Skills,
  },
  data() {
    return {
      imgPath: variables.IMG_URL,
      currentCV: [],
      user: {
        firstName: "",
        lastName: "",
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
    },
  },
  methods: {
    getCVFromStore() {
      this.loading = true;
      this.currentCV = this.$store.state.cvs.currentCV;
      this.user = this.$store.state.cvs.currentCV.user;
    },
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("");
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

.content-cv {
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
