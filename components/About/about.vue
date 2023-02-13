<template>
  <div class="w-[70%] mx-auto my-32 flex flex-col space-y-20">
    <!-- Title -->
    <div class="text-6xl font-bold text-dark-700 text-center">About</div>

    <!--  -->
    <div class="flex flex-row">
      <!-- Left About -->
      <div class="w-[40%]">
        <LeftAbout />
      </div>

      <!-- Right About -->
      <div class="w-[60%]">
        <RightAbout />
      </div>
    </div>
  </div>
</template>

<script>
import LeftAbout from "~/components/About/LeftAbout.vue";
import RightAbout from "~/components/About/RightAbout.vue";

export default {
  components: {
    LeftAbout,
    RightAbout,
  },
};
</script>
