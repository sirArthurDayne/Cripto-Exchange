<template>
    <div>
        <cx-assets-table :assets="assets"/>
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
            assets: []
        }
    },
    created(){
        api.getAssets()
            .then(assets => (this.assets = assets));
        console.log(this.assets);
     }
};
</script>
