<template>
  <div class="flex flex-row justify-around text-white text-xl">
    <!-- Navigation -->
    <div class="flex flex-row space-x-10">
      <!-- Home -->
      <div class="text-2xl font-semibold">Home</div>

      <!-- Projects -->
      <div class="text-2xl font-semibold">Projects</div>

      <!-- Tech Stack -->
      <div class="text-2xl font-semibold">Tech Stack</div>

      <!-- Contact -->
      <div class="text-2xl font-semibold">Contact</div>
    </div>

    <!-- Social Media links -->
    <div class="flex flex-row space-x-5">
      <!-- Github -->
      <div>
        <a href="https://github.com/krishvadhani19" target="_blank">
          <GithubIcon color="#ffffff" size="30" />
        </a>
      </div>

      <!-- Twitter -->
      <div>
        <a
          href="https://twitter.com/KrishVadhani?t=5HkUdBctZJtWdx1VX40IcQ&s=09"
          target="_blank"
        >
          <TwitterIcon color="#ffffff" size="30" />
        </a>
      </div>

      <!-- LinkedIn -->
      <div>
        <a
          href="https://www.linkedin.com/in/krish-vadhani-020a19197/"
          target="_blank"
        >
          <LinkedInIcon color="#ffffff" size="30" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import GithubIcon from "./icons/github.vue";
import LinkedInIcon from "./icons/linkedin.vue";
import TwitterIcon from "./icons/twitter.vue";

export default {
  name: "Navbar",
  components: {
    GithubIcon,
    LinkedInIcon,
    TwitterIcon,
  },
};
</script>
