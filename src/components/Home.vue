<template>
  <div class="select-cv-page">
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
      <div class="select-cv-area">
        <user
          v-for="cv in this.cvs"
          :key="cv.id"
          :id="cv.id"
          :firstName="cv.user.firstName"
          :lastName="cv.user.lastName"
          :photoSrc="cv.photoSrc"
          class="user-item"
          @click="getById(cv.id)"
        ></user>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../components/User.vue";

export default {
  name: "Home",
  components: { User },
  data() {
    return {
      cvs: ""
    };
  },
  mounted() {
    this.loading = true;
    this.getAllCVs();
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user == null ? null : this.$store.state.auth.user.user;
    }
  },
  methods: {
    getAllCVs() {
      let that = this;
      this.loading = true;

      this.$store.dispatch("cvs/getAll").then(
        () => {
          that.cvs = that.$store.state.cvs.cvs;
          that.cvs
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
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