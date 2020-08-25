<template>
    <div class="vue-tempalte">
        <h2>Dashboard</h2>
        <h3>Welcome</h3>
           <p>{{user.displayName}}</p>
           <p>{{user.email}}</p>
           <p>{{user.phone}}</p>
        
        <button 
        type="submit" 
        class="btn btn-dark btn-lg btn-block"
        @click="logOut()">
            Log out
        </button>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: null
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logOut() {
      firebase.auth().signOut().then(() => {
        firebase.auth().onAuthStateChanged(() => {
          this.$router.push('/login')
        })
      })
    }
  }
};
</script>