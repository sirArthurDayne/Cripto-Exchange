<template>
    <main>
        <cx-header :links="links"/>
        <router-view
            class="container px-5 sm:px-20 py-20 flex justify-center"
        />
    </main>
</template>

<script>
import CxHeader from "@/components/CxHeader.vue";
export default {
    name: "App",
    components: {
        CxHeader
    },
    data() {
        return {
            links: [
                {
                    title: 'BTC',
                    to: { name: 'coin-detail', params: { id: 'bitcoin' } }
                },
                {
                    title: 'ETH',
                    to: { name: 'coin-detail', params: { id: 'ethereum' } }
                },
                {
                    title: 'XRP',
                    to: { name: 'coin-detail', params: { id: 'xrp' } }
                }
            ]
        }
    }
};
</script>

<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
