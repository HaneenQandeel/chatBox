<template>
  <div>
    <div class="container">
        <h3>Please Login WITH your google account ... </h3>
        <button @click="login">Login with google</button>
   
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
 data(){
    return{

    }
 },
  methods: {
    login() {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().signInWithPopup(provider).then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // eslint-disable-next-line no-undef
        token = result.credential.accessToken;
        // The signed-in user info.
        // eslint-disable-next-line no-unused-vars
        var user = result.user;
        this.$router.push('/');
        // ...
        }).catch(function() {

        });
    }
  }
};
</script>