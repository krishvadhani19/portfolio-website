<template>
  <div
    class="w-full bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 min-h-screen p-3"
  >
    <!-- Navbar -->
    <Navbar />

    <!-- HomePage -->
    <!-- <HomePage /> -->

    <!-- Projects -->
    <ProjectPage />

    <!-- TechStack -->
    <TechStack />

    <!-- About -->
    <AboutPage />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import HomePage from "~/components/Home.vue";
import TechStack from "~/components/TechStack.vue";
import ProjectPage from "~/components/Projects.vue";
import AboutPage from "~/components/About/About.vue";

export default {
  name: "IndexPage",
  data() {
    return {};
  },
  components: {
    Navbar,
    HomePage,
    TechStack,
    ProjectPage,
    AboutPage,
  },
};
</script>
