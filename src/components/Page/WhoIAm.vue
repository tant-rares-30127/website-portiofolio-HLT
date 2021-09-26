<template>
  <nav class="navbar navbar-expand-lg navbar-light pt-4">
    <div class="container-fluid">
      <div class="navbar-name">
        <a class="navbar-brand ms-3" id="name" href="#" @click="logOut()">{{
          checkUserLogin
        }}</a>
      </div>
      <div class="d-flex">
        <div class="collapse navbar-collapse me-3" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-bars"></i>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <div class="dropdown-item-li">
                  <li><a class="dropdown-item" href="#">Claudia</a></li>
                  <li><a class="dropdown-item" href="#">Delia</a></li>
                  <li><a class="dropdown-item" href="#">Rares</a></li>
                  <li><a class="dropdown-item" href="#">Teona</a></li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="about">
    <div class="about-text">
      <br />
      <br />
      <br />
      <h2>About</h2>
      <br />
      <br />
      <h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
      </h3>
    </div>
    <div class="about-photo">
      <img src="" alt="buna" />
    </div>
  </div>
  <div class="about-contact">
    <h2>Contact</h2>
    <br />
    <div class="about-contact-i">
      <a href=""><i id="first" class="fab fa-linkedin"></i></a>
      <a href=""><i class="fab fa-github"></i></a>
      <a href=""><i class="fas fa-phone-square"></i></a>
      <a href=""><i class="fas fa-envelope"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedUser: "",
    };
  },
  computed: {
    checkUserLogin() {
      return this.$store.getters["auth/loggedUserId"]
        ? this.$store.getters["auth/loggedUsername"]
        : "Login";
    },
    methods: {
      logOut() {
        const actionPayload = {
          username: "",
          password: "",
          userId: "",
        };
        this.$store.dispatch("auth/logOut", actionPayload);
        //this.$router.push("/login");
      },
    },
  },
};
</script>

<style>
.about,
.about-contact,
br {
  background-color: var(--dark-gray);
}

.dropdown-menu {
  right: auto;
  left: 60%;
  -webkit-transform: translate(-50%, 0);
  -o-transform: translate(-50%, 0);
  transform: translate(-70%, 0);
}

#name {
  font-size: 2rem;
  color: white;
}

.navbar-name {
  border: 3px solid #ffffff;
  box-sizing: border-box;
  border-radius: 116px;
  padding-bottom: 0.5%;
  padding-top: 0.3%;
  font-size: 24px;
}

#navbarDropdown {
  color: white;
}

.d-flex a {
  font-size: 1.5rem;
}

.dropdown-item-li a {
  background: #00adb5;
  border: 3px solid #00adb5;
  box-sizing: border-box;
  border-radius: 116px;
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: white;
}

.dropdown-item-li li {
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2%;
  padding-bottom: 2%;
  background-color: white;
}

.about-text h2,
.about-contact h2 {
  padding-right: 80%;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
}

.about-contact h2 {
  padding-right: 85%;
  padding-top: 3%;
}

.about-text h3 {
  color: #ffffff;
  font-style: normal;
  font-weight: lighter;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  padding-left: 4.7%;
}

.about-photo {
  background-color: grey;
  padding-right: 10%;
  margin-left: 10%;
  margin-right: 10%;
}

.about {
  display: flex;
  justify-content: space-around;
  padding-top: 3%;
}

.navbar {
  background-color: var(--dark-gray);
}

.about-contact a {
  font-size: 3rem;
  padding-left: 4.7%;
  color: black;
}

.about-contact i:hover {
  color: #00adb5;
}
</style>
