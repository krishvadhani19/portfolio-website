<template>
  <div class="flex flex-row justify-around text-white text-xl">
    <!-- Logo -->
    <div>Krish Vadhani</div>

    <!-- Navigation -->
    <div class="flex flex-row space-x-10">
      <!-- Home -->
      <div>Home</div>

      <!-- Projects -->
      <div>Projects</div>

      <!-- About -->
      <div>About</div>

      <!-- Contact -->
      <div>Contact</div>
    </div>

    <!-- Social Media links -->
    <div class="flex flex-row space-x-5">
      <!-- Github -->
      <div><GithubIcon color="#ffffff" size="25" /></div>

      <!-- Twitter -->
      <div><TwitterIcon color="#ffffff" size="25" /></div>

      <!-- LinkedIn -->
      <div><LinkedInIcon color="#ffffff" size="25" /></div>
    </div>
  </div>
</template>

<script>
import GithubIcon from "../icons/github.vue";
import LinkedInIcon from "../icons/linkedin.vue";
import TwitterIcon from "../icons/twitter.vue";

export default {
  name: "Navbar",
  components: {
    GithubIcon,
    LinkedInIcon,
    TwitterIcon,
  },
};
</script>
