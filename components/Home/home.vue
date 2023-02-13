<template>
  <div class="p-3 min-h-screen">
    <!-- Navbar -->
    <Navbar />

    <!-- Home Heading -->
    <div class="mt-44 mb-28">
      <HomeHeading />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import HomeHeading from "./HomeHeading.vue";

export default {
  name: "IndexPage",
  data() {
    return {};
  },
  components: {
    Navbar,
    HomeHeading,
  },
};
</script>
