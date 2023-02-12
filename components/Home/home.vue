<template>
  <div class="bg-dark-100 min-h-screen p-3 h-screen">
    <!-- Navbar -->
    <Navbar />

    <!-- Home Heading -->
    <div class="mt-44">
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
