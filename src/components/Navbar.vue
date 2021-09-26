<template>
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
</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "photoSrc"],
};
</script>

<style></style>
