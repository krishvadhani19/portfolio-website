<template>
  <div class="flex flex-row justify-around text-white">
    <!-- Title -->
    <div class="text-lg">Feel free to contact me</div>

    <div class="gradient-text text-lg font-semibold">
      krish.vadhani@somaiya.edu
    </div>

    <!-- Social Media -->
    <div class="flex flex-row space-x-6 justify-center">
      <GithubIcon size="30" color="#ffffff" />
      <LinkedInIcon size="30" color="#ffffff" />
      <TwitterIcon size="30" color="#ffffff" />
    </div>
  </div>
</template>

<script>
import GithubIcon from "~/components/icons/github.vue";
import LinkedInIcon from "~/components/icons/linkedin.vue";
import TwitterIcon from "~/components/icons/twitter.vue";

export default {
  components: {
    GithubIcon,
    LinkedInIcon,
    TwitterIcon,
  },
};
</script>
