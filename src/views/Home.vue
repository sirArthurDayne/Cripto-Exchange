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
            isLoading: false,
            assets: []
        };
    },
    created() {
        this.isLoading = true;
        api.getAssets()
            .then(assets => (this.assets = assets))
            .finally(() => (this.isLoading = false));
    }
};
</script>
