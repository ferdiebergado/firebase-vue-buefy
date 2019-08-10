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
    <b-field label="Confirm Password" :type="passwordsMatch ? 'is-success':''">
      <b-input type="password" v-model="password_confirmation" icon="lock" password-reveal required></b-input>
    </b-field>
    <!-- Password Confirmation -->
    <b-button type="is-primary" @click="createNewUser()" :disabled="disabled">Submit</b-button>
  </div>
</template>

<script>
// import * as firebase from "firebase/app";
// import "firebase/auth";
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
        this.password_confirmation === ""
      );
    },
    passwordsMatch: function() {
      return this.password === this.password_confirmation;
    }
  },
  methods: {
    createNewUser() {
      if (this.passwordsMatch) {
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
