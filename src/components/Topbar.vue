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
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link class="button is-primary" to="/signup">
            <strong>Sign up</strong>
          </router-link>
          <a class="button is-light">Log in</a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  data() {
    return {
      appTitle: this.$store.state.appTitle
    };
  }
};
</script>
