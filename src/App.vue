<template>
  <div class="container is-fluid">
    <Topbar></Topbar>
    <section class="section">
      <div class="container">
        <div class="columns">
          <router-view></router-view>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Topbar from "./components/Topbar";
export default {
  name: "App",
  components: {
    Topbar
  }
};
</script>
