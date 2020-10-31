<template>
    <main>
        <cx-header/>
        <cx-assets-table/>
    </main>
</template>

<script>
import CxHeader from "@/components/CxHeader.vue";
import CxAssetsTable from "@/components/CxAssetsTable.vue";
export default {
  name: "App",
  components: {
      CxHeader, CxAssetsTable
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
