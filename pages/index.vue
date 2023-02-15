<template>
  <div
    class="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 min-h-screen p-3"
  >
    <!-- HomePage -->
    <HomePage />

    <!-- Projects -->
    <ProjectPage />

    <!-- TechStack -->
    <TechStack />

    <!-- About -->
    <AboutPage />

    <!-- Contact -->
    <ContactPage />
  </div>
</template>

<script>
import HomePage from "~/components/Home/Home.vue";
import TechStack from "~/components/TechStack/TechStack.vue";
import ProjectPage from "~/components/Projects/Projects.vue";
import AboutPage from "~/components/About/About.vue";
import ContactPage from "~/components/Contact/Contact.vue";

export default {
  name: "IndexPage",
  data() {
    return {};
  },
  components: {
    HomePage,
    TechStack,
    ProjectPage,
    AboutPage,
    ContactPage,
  },
};
</script>
