<template>
  <form @submit.prevent="submit">
    <div class="wrapper">
      <div class="fields-wrapper">
        <div class="in align-items-center">
          <label class="p-3" for="username"><strong>Username</strong></label>
          <input type="text" placeholder="Username" />
        </div>

        <div class="in align-items-center">
          <label class="p-3" for="Password"><strong>Password</strong></label>
          <input
            type="text"
            style="-webkit-text-security: disc"
            placeholder="Password"
          />
        </div>
        <button class="submit-btn">Login</button>
      </div>
    </div>
  </form>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { mapActions } from "vuex";

export default {

  name:'signin',
  components:{
    //
  },
  data(){
    return{
      form:{
        username:'',
        password:'',
      }
    }
  },
  methods:{
    ...mapActions({
      signIn: 'signIn'
    }),
    submit(){
      this.signIn(this.form)

    }
  }
};
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
  height: 40%;
  top: 30%;
  left: 35%;
  background: #eeeeee;
  border-radius: 65px;
  align-items: center;
}

.fields-wrapper input {
  text-align: center;
  width: 50%;
  height: 60%;
  top: 20%;
  background: #aad8d3;
  border-radius: 10px;
  outline: none;
  color: black;
}

.submit-btn {
  position: relative;
  width: 6rem;
  height: 10%;
  /* left: 40%; */
  background: #00adb5;
  border-radius: 50px;
  margin-top: 2rem;
}
.in {
  display: flex;
  flex-direction: column;
  width: 100%;
}

@media only screen and (max-width: 800px) {
  .fields-wrapper {
    width: 40%;
    left: 25%;
  }
}
</style>