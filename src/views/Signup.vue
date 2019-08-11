<template>
  <div class="column is-half is-offset-one-quarter">
    <h1 class="title">Sign Up</h1>
    <b-field label="Email" :type="errors.email ? 'is-danger':''" :message="errors.email">
      <b-input type="email" v-model="email" icon="email" required></b-input>
    </b-field>
    <!-- Email -->
    <b-field label="Password" :type="errors.password ? 'is-danger':''" :message="errors.password">
      <b-input type="password" v-model="password" icon="lock" password-reveal required></b-input>
    </b-field>
    <!-- Password -->
    <b-field
      label="Confirm Password"
      :type="passwordsMatch ? 'is-success':''"
      :message="passwordsMatch ? 'Passwords match!':''"
    >
      <b-input type="password" v-model="password_confirmation" icon="lock" password-reveal required></b-input>
    </b-field>
    <!-- Password Confirmation -->
    <b-button
      type="is-primary"
      icon-left="account-plus"
      @click="createNewUser()"
      :disabled="disabled"
    >Create Account</b-button>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      password_confirmation: "",
      errors: {
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  computed: {
    disabled: function() {
      return (
        this.email === "" ||
        this.password === "" ||
        this.password_confirmation === "" ||
        !this.passwordsMatch
      );
    },
    passwordsMatch: function() {
      return (
        this.password !== "" &&
        this.password_confirmation !== "" &&
        this.password === this.password_confirmation
      );
    }
  },
  methods: {
    createNewUser() {
      if (this.passwordsMatch) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(function(userCredentials) {
            this.$store.commit("setUser", userCredentials.user.email);
            this.$router.push("/home");
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            switch (errorCode) {
              case "email-already-in-use" || "invalid-email":
                this.errors.email = errorMessage;
                break;
              case "weak-password":
                this.errors.password = errorMessage;
                break;
            }
            // ...
          });

        console.log("Todo: create new user.");
        return;
      } else {
        let errPassword = "Passwords don't match.";
        this.errors.password = errPassword;
      }
    }
  }
};
</script>
