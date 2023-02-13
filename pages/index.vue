<template>
  <div
    class="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 min-h-screen p-3"
  >
    <!-- HomePage -->
    <HomePage />

    <!-- What I do -->
    <FieldPage />

    <!-- Projects -->
    <ProjectPage />

    <!-- About -->
    <About />
  </div>
</template>

<script>
import HomePage from "~/components/Home/Home.vue";
import FieldPage from "~/components/Fields/Fields.vue";
import ProjectPage from "~/components/Projects/Projects.vue";
import AboutPage from "~/components/About/About.vue";

export default {
  name: "IndexPage",
  data() {
    return {};
  },
  components: {
    HomePage,
    FieldPage,
    ProjectPage,
    AboutPage,
  },
};
</script>
