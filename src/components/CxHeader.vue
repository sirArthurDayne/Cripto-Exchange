<template>
    <header class="shadow w-screen">
        <nav>
            <nav
                class="flex items-center justify-between flex-wrap bg-green-400 p-6"
            >
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <cx-icon class="mr-2" />
                    <span class="font-semibold text-xl tracking-tight"
                        >Cripto Exchange</span
                    >
                </div>
                <div
                    class="hidden sm:block w-full block flex-grow lg:flex
                lg:items-center lg:w-auto"
                >
                    <div class="text-sm lg:flex-grow">
                        <router-link to="/">Home</router-link> |
                        <router-link to="/About">About</router-link>
                    </div>
                </div>
            </nav>
        </nav>
    </header>
</template>

<script>
import CxIcon from "@/components/CxIcon.vue";
export default {
    name: "CxHeader",
    components: { CxIcon }
};
</script>
