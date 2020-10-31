<template>
    <main>
        <cx-header />
        <router-view class="container px-5 sm:px-20 py-20 flex justify-center"/>
    </main>
</template>

<script>
import CxHeader from "@/components/CxHeader.vue";
export default {
  name: "App",
  components: {
      CxHeader
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
