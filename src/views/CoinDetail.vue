<template>
  <div class="flex-col">
    <template v-if="asset.id">
      <div class="flex flex-col sm:flex-row justify-around items-center">
        <div class="flex flex-col items-center">
          <img
            :src="
              `https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`
            "
            :alt="asset.name"
            class="w-20 h-20 mr-5"
          />
          <h1 class="text-5xl">
            {{ asset.name }}
            <small class="sm:mr-2 text-gray-500">{{ asset.symbol }}</small>
          </h1>
        </div>

        <div class="my-10 flex flex-col">
          <ul>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Ranking</b>
              <span>#{{ asset.rank }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio actual</b>
              <span>{{ dollarFilter(asset.priceUsd) }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio más bajo</b>
              <span> {{dollarFilter(min)}}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio más alto</b>
              <span>{{dollarFilter(max)}} </span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio Promedio</b>
              <span> {{dollarFilter(avg)}} </span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Variación 24hs</b>
              <span>{{ percentFilter(asset.changePercent24Hr) }}</span>
            </li>
          </ul>
        </div>

        <div class="my-10 sm:mt-0 flex flex-col justify-center text-center">
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >Cambiar</button>

          <div class="flex flex-row my-5">
            <label class="w-full" for="convertValue">
              <input
                id="convertValue"
                type="number"
                class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              />
            </label>
          </div>

          <span class="text-xl"></span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import api from "@/api.js";
import {dollarFilter, percentFilter} from "@/filter";

export default {
    name: "CoinDetail",

    data() {
        return {
            isLoading:false,
            asset: {},
            history: []
        }
    },

    computed: {
        min() {
            return Math.min(
                ...this.history.map(h => parseFloat(h.priceUsd).toFixed(2)));
        },
        max() {
            return Math.max(
                ...this.history.map(h => parseFloat(h.priceUsd).toFixed(2)));
        },
        avg() {
            return this.history.reduce((a, b) => a + parseFloat(b.priceUsd), 0) / this.history.length;
        }
    },
    setup(){
        return {dollarFilter, percentFilter};
    },

    created() {
        this.getCoin();
    },

    methods: {
        getCoin() {
            const id = this.$route.params.id;
            this.isLoading =true;
            Promise.all([
                api.getDetails(id),
                api.getHistory(id)
            ])
                .then(([asset, history]) => {
                    this.asset = asset;
                    this.history = history;
                }).finally(() => {this.isLoading=false});
        }
    }
}
</script>

<style scoped>
td {
  padding: 10px;
  text-align: center;
}
</style>

