<template>
  <div class="wrapper">
    <div class="fields-wrapper">
      <div class="in align-items-center">
        <label class="p-3" for="username"><strong>Username</strong></label>
        <input type="text" placeholder="Username" style="text-align: center" />
      </div>

      <div class="in align-items-center">
        <label class="p-3" for="Password"><strong>Password</strong></label>
        <input type="text" placeholder="Password" style="text-align: center" />
      </div>
      <button class="submit-btn mt-3">Login</button>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {};
</script>

<style>
.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #393e46;
}
.fields-wrapper {
  display: flex;
  flex-direction: column; 
  justify-content: center;
  position: relative;
  width: 30%;
  height: 30%;
  top: 30%;
  left: 35%;
  background: #eeeeee;
  border-radius: 65px;
}

.fields-wrapper input {
  width: 50%;
  height: 60%;
  top: 20%;
  background: #aad8d3;
  opacity: 0.5;
  border-radius: 50px;
}
.submit-btn {
  position: relative;
  width: 5rem;
  height: 15%;
  left: 40%;
  background: #00adb5;
  border-radius: 50px;
}
.in {
   display: flex;
  flex-direction: column; 
}
</style>