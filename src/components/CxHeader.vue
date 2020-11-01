<template>
    <header class="shadow w-screen">
        <nav>
            <nav
                class="flex items-center justify-between flex-wrap bg-green-400 p-6"
            >
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <cx-icon class="mr-2" />
                    <router-link
                        :to="{ name: 'Home' }"
                        class="font-semibold text-xl tracking-tight"
                        >Cripto Exchange</router-link
                    >
                </div>
                <div
                    class="hidden sm:block w-full block flex-grow lg:flex
                lg:items-center lg:w-auto"
                >
                    <div class="text-sm lg:flex-grow">
                        <router-link v-for="l in links" :key="l.title" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200
                        hover:text-white mr-4" :to="l.to" >{{l.title}}</router-link>
                        <router-link to="/About" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200
                        hover:text-white mr-4">About</router-link>
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
    components: { CxIcon },
    props: {
            links:{
                type: Array,
                default: () => []
        }
    }
};
</script>
