<template>
  <div class="flex flex-col space-y-16 justify-center h-full">
    <!-- image -->
    <img
      src="~/static/Krish.png"
      alt=""
      class="mx-auto w-32 h-32 rounded-full"
    />

    <!--  -->
    <div class="flex flex-col space-y-6">
      <!-- Name -->
      <div class="text-3xl text-white font-bold text-center">Krish Vadhani</div>

      <!-- Social Media -->
      <div class="flex flex-row space-x-6 justify-center">
        <GithubIcon size="30" color="#ffffff" />
        <LinkedInIcon size="30" color="#ffffff" />
        <TwitterIcon size="30" color="#ffffff" />
      </div>
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
