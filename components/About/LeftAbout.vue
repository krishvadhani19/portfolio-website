<template>
  <div class="flex flex-col space-y-16 justify-center h-full">
    <!-- image -->
    <img
      src="~/static/Krish.png"
      alt=""
      class="mx-auto w-32 h-32 rounded-full"
    />

    <!--  -->
    <div class="flex flex-col">
      <!-- Name -->
      <div class="text-3xl text-white font-bold text-center mb-3">
        Krish Vadhani
      </div>

      <!-- Social Media -->
      <div class="flex flex-row space-x-5 mx-auto mb-10">
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

      <!-- Email -->
      <div
        class="text-2xl text-dark-100 font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 w-[80%] mx-auto rounded-lg p-3"
      >
        krish.vadhani@somaiya.edu
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
