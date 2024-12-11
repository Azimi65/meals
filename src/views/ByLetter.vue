<template>
  <div class="flex flex-row flex-wrap justify-center mt-2">
    <router-link
      v-for="letter in letters"
      :key="letter"
      :to="{ name: 'mealsByLetter', params: { letter } }"
      class="mx-1"
      >{{ letter }}</router-link
    >
  </div>
  <!-- <pre>{{meals}}</pre> -->
  <div v-if="meals" class="mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-5 justify-center mt-2">
    <div
      v-for="mealByLetter in meals"
      :key="mealByLetter.idMeal"
      class="mx-1 mt-5 rounded border border-1 border-cyan-200 shadow self-start overflow-hidden"
    >
      <router-link :to="{name:'mealDetails',params:{id:mealByLetter.idMeal}}">
        <img
          :src="mealByLetter.strMealThumb"
          alt=""
          class="aspect-auto rounded-t h-52 w-full object-cover"
        />
      </router-link>
      <div class="p-2 font-semibold">{{ mealByLetter.strMeal }}</div>
      <div class="p-2">{{ mealByLetter.strInstructions.substring(0,200).concat('...') }}</div>
      <div class="p-2 flex gap-2">
        <YoutubeButton :href="mealByLetter.strYoutube">Youtube</YoutubeButton>
      </div>
    </div>
  </div>
  <div v-else>{{`dont find any food with ${route.params.letter} letter`}}</div>
</template>

<script setup>
import YoutubeButton from '../components/YoutubeButton.vue'
import {computed,watch} from 'vue'
import {useRoute} from 'vue-router'
const route=useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
let meals=computed(()=> store.mealsByLetter)
watch(route,()=>{
  store.searchByLetter(route.params.letter)
})
import { useMealStore } from '@/stores/mealsStore'

import {onMounted} from 'vue'

const store=useMealStore()
onMounted(()=>{
  store.searchByLetter(route.params.letter)
})
</script>


<style>

</style>