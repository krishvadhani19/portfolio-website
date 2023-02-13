<template>
  <div class="bg-dark-100 min-h-screen p-3">
    <!-- HomePage -->
    <HomePage />

    <!-- What I do -->
    <FieldPage />

    <!-- Projects -->
    <Projects />

    <!-- About -->
    <About />
  </div>
</template>

<script>
import HomePage from "~/components/Home/home.vue";
import FieldPage from "~/components/Fields/Fields.vue";
import ProjectPage from "~/components/Projects/projects.vue";
import AboutPage from "~/components/About/about.vue";

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
