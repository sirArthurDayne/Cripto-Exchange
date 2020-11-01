<template>
    <div>
        <cx-assets-table :assets="assets" />
    </div>
</template>

<script>
import api from "@/api.js";
import CxAssetsTable from "@/components/CxAssetsTable.vue";

export default {
    name: "Home",
    components: { CxAssetsTable },
    data() {
        return {
            isLoading: false,//TODO: add spinner when support for vue3
            assets: [],
            interval:null
        };
    },
    async created() {
        this.isLoading = true;
        this.assets = await api.getAssets();
        this.isLoading = false;
        this.refreshFETCH();
    },
    methods: {
        refreshFETCH() {//allows to see new prices without reloading the page
            this.interval = setInterval(
            async () => {this.assets = await api.getAssets();}, 5000 );
        }
    },
    beforeUnmount() {
       clearInterval(this.interval);
    }
};
</script>
