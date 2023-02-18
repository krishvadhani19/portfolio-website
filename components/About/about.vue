<template>
  <div
    class="lg:w-[70%] w-[90%] mx-auto my-32 flex flex-col lg:space-y-20 space-y-10"
  >
    <!-- Title -->
    <div class="lg:text-6xl text-5xl font-bold text-dark-700 text-center">
      About
    </div>

    <!--  -->
    <div class="flex lg:flex-row flex-col space-y-10">
      <!-- Right About -->
      <div
        class="lg:w-[60%] w-full flex flex-col space-y-10 text-dark-600 text-xl font-medium text-justify lg:text-left"
      >
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
          magnam quas est error autem, culpa laboriosam corporis? Delectus
          rerum, vel laudantium modi excepturi placeat minima magni, inventore
          error, sit voluptate?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Harum voluptatem vel a nostrum voluptate adipisci
          alias officia aspernatur, eaque, molestiae, dicta mollitia
          perspiciatis laboriosam minus accusantium saepe libero non
          perferendis?
        </div>

        <!-- para2 -->
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quia.
          Corrupti et rerum vitae? Labore magni eius dolorum impedit assumenda
          ullam molestiae maxime?Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Praesentium, iure sed. Aperiam voluptas cumque
          repellat culpa sed quas earum accusamus tempora quae eaque tempore
          expedita magnam, placeat et quis libero?
        </div>
      </div>

      <!-- Left About -->
      <div class="lg:w-[40%] w-full">
        <LeftAbout />
      </div>
    </div>
  </div>
</template>

<script>
import LeftAbout from "~/components/About/LeftAbout.vue";

export default {
  components: {
    LeftAbout,
  },
};
</script>
