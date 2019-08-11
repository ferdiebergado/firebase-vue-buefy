<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item>
        <router-link to="/">{{ appTitle }}</router-link>
      </b-navbar-item>
    </template>
    <template slot="start">
      <!-- <b-navbar-item href="#">Home</b-navbar-item>
      <b-navbar-item href="#">Documentation</b-navbar-item>-->
    </template>

    <template slot="end">
      <b-navbar-item v-if="user" tag="div">
        <div class="buttons">
          <router-link to="/">
            <strong>{{ user }}</strong>
          </router-link>
          <b-button @click="signout()">
            <strong>Sign Out</strong>
          </b-button>
        </div>
      </b-navbar-item>
      <b-navbar-item v-else tag="div">
        <div class="buttons">
          <b-button tag="router-link" type="is-link" to="/signup">
            <strong>Sign up</strong>
          </b-button>
          <a class="button is-light">Log in</a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  computed: {
    appTitle() {
      return this.$store.state.appTitle;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    signout() {
      this.$store.dispatch("signOut");
    }
  }
};
</script>
