<template>
    <div class="vue-tempalte">
      <template v-if="errors">
      <Errors :errorObj="{errors,msg}" />
    </template>
        <form @submit.prevent="userRegistration">
            <h3>Sign Up</h3>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control form-control-lg" v-model="user.name" />
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>

             <div class="form-group">
                <label>Phone No</label>
                <input type="phone" class="form-control form-control-lg" v-model="user.phone" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">
               Sign Up
            </button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>


<script>
import firebase from "firebase";
import Errors from "@/components/Errors.vue";

export default {
  components: {
    Errors,
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
        phone: '',
        password: '',
      },
      errors: [],
      msg:[],
    };
  },
  methods: {
    userRegistration() {
this.errors = [];
      this.msg = [];

      if (!this.user.name) {
        this.errors.push("Name is required.");
      }
      if (!this.user.email) {
        this.errors.push("Email is required.");
      }
      if (!this.user.password) {
        this.errors.push("Password is required.");
      }
      
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.user.name,
             phone: this.user.phone
          })
          .then(() => {
            this.$router.push('/login')
          });
      })
      .catch((error) => {
         alert(error.message);
      });
    }
  }
};
</script>