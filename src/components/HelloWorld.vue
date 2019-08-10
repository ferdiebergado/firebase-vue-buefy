<template>
  <div class="column is-half is-offset-one-quarter">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ title }}</h1>
          <h2 class="subtitle">Created by {{ subtitle }}</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$store.state.appTitle,
      subtitle: this.$store.state.author
    };
  }
};
</script>
