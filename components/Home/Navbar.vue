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
      <div>
        <a href="https://github.com/krishvadhani19" target="_blank">
          <GithubIcon color="#ffffff" size="25" />
        </a>
      </div>

      <!-- Twitter -->
      <div>
        <a
          href="https://twitter.com/KrishVadhani?t=5HkUdBctZJtWdx1VX40IcQ&s=09"
        >
          <TwitterIcon color="#ffffff" size="25" />
        </a>
      </div>

      <!-- LinkedIn -->
      <div>
        <a href="https://www.linkedin.com/in/krish-vadhani-020a19197/">
          <LinkedInIcon color="#ffffff" size="25" />
        </a>
      </div>
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
