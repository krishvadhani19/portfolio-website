<template>
  <div class="w-[70%] text-center my-10 mx-auto flex flex-col space-y-16">
    <div class="text-6xl font-bold text-dark-700">What I do</div>

    <div class="flex lg:flex-row flex-col space-x-10">
      <!-- Frontend Development -->
      <div class="bg-primary-pink w-[30%] h-full rounded-lg px-5 py-10">
        <div class="w-[20%] mx-auto">
          <GithubIcon size="55" color="#000000" />
        </div>
        <div class="text-2xl font-bold">Frontend Development</div>
        <div class="w-[80%] mx-auto leading-tight text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi
          ipsam accusamus impedit distinctio cum magni, dolorum quod! Animi quod
          dignissimos harum vitae in commodi repellendus dolorum iure excepturi
          dicta.
        </div>
      </div>

      <!-- Backend Development -->
      <div class="bg-primary-pink w-[30%] h-44 rounded-lg"></div>

      <!-- Data Analytics -->
      <div class="bg-primary-pink w-[30%] h-44 rounded-lg"></div>
    </div>
  </div>
</template>

<script>
import GithubIcon from "~/components/icons/github.vue";
export default {
  components: { GithubIcon },
};
</script>
