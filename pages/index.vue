<template>
  <div class="bg-dark-100 min-h-screen p-3">
    <!-- HomePage -->
    <HomePage />

    <!-- What I do -->
    <FieldPage />
  </div>
</template>

<script>
import HomePage from "~/components/Home/home.vue";
import FieldPage from "~/components/Fields/Fields.vue";

export default {
  name: "IndexPage",
  data() {
    return {};
  },
  components: {
    HomePage,
    FieldPage,
  },
};
</script>
