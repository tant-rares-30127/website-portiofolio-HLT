<template>
  <div id="modal">
    <div id="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h3>{{ title }}</h3>
      <div class="align-items-center">
        <form id="form" @submit.prevent="submitForm">
          <div class="form-example">
            <label for="first-name">About</label>
            <input
              id="about"
              type="text"
              v-model="user.firstName"
              class="mt-3 input-modal"
            />
          </div>
          <div class="form-example">
            <label for="last-name">Contact</label>
            <label for="linkdIn">LinkdIn</label>
            <input
              id="linkdIn"
              type="text"
              v-model="user"
              class="mt-3 input-modal"
            />
            <label for="gitHub">GitHub</label>
            <input
              id="gitHub"
              type="text"
              v-model="user"
              class="mt-3 input-modal"
            />
            <label for="phone">Phone</label>
            <input
              id="phone"
              type="text"
              v-model="user"
              class="mt-3 input-modal"
            />
            <label for="email">Email</label>
            <input
              id="email"
              type="text"
              v-model="user"
              class="mt-3 input-modal"
            />
          </div>
          <div class="form-example">
            <label for="education">Education</label>
            <input
              id="education"
              type="text"
              v-model="user"
              class="mt-3 input-modal"
            />
          </div>
          <div class="form-example">
            <label for="workexperience">Work Experience</label>
            <input
              id="workexperience"
              type="text"
              v-model="user"
              class="mt-3 input-modal"
            />
          </div>
          <div class="form-example">
            <label for="languages">Languages</label>
            <input
              id="languages"
              type="text"
              v-model="languages"
              class="mt-3 input-modal"
            />
          </div>
          <div class="form-example">
            <label for="whatIDo">What I Do</label>
            <input
              id="whatIDo"
              type="text"
              v-model="whatIdo"
              class="mt-3 input-modal"
            />
          </div>
          <div class="form-example">
            <label for="whatIUse">What I Use</label>
            <input
              id="whatIUse"
              type="text"
              v-model="whatIUse"
              class="mt-3 input-modal"
            />
          </div>
          <div class="form-example">
            <label for="projects">Projects</label>
            <input
              id="projects"
              type="text"
              v-model="projects"
              class="mt-3 input-modal"
            />
          </div>
          <div class="form-example">
            <label for="skills">Skills</label>
            <input
              id="skills"
              type="text"
              v-model="Skills"
              class="mt-3 input-modal"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
</style>