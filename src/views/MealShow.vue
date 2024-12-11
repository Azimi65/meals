<template>
  <!-- <pre>{{ store.meal.meals }}</pre> -->
  <div
    v-for="meal in store.meal.meals"
    :key="meal.idMeal"
    class="mx-auto my-2 pb-5 max-w-[800px] mt-5 rounded border border-1 border-cyan-200 shadow self-start overflow-hidden"
  >
    <div>
      <img :src="meal.strMealThumb" alt="" class="aspect-auto rounded-t h-52 w-full object-cover" />
    </div>
    <div class="p-2 font-semibold">{{ meal.strMeal }}</div>
    <div class="p-2">{{ meal.strInstructions }}</div>
    <div class="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div><strong class="px-2">category:</strong>{{ meal.strCategory }}</div>
      <div><strong class="px-2">Area:</strong>{{ meal.strArea }}</div>
      <div><strong class="px-2">Tags:</strong>{{ meal.strTags }}</div>
    </div>

    <div class="p-2 grid grid-cols-2 md:grid-cols-3">
      <div class="px-3 py-2">
        <h3 class="font-bold">Ingredients:</h3>
        <ul>
          <li v-for="(elem, index) in new Array(20)" :key="index">
            {{index+1}}-{{ meal[`strIngredient${index + 1}`] }}
          </li>
        </ul>
      </div>
      <div class="px-3 py-2">
        <h3 class="font-bold">Measures:</h3>
        <ul>
          <li v-for="(elem, index) in new Array(20)" :key="index">
            {{ meal[`strMeasure${index + 1}`] }}
          </li>
        </ul>
      </div>
    </div>
    <div class="px-3">
        <YoutubeButton :href="meal.strYoutube">Go To Youtube</YoutubeButton>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from '../components/YoutubeButton.vue'
import { useMealStore } from '@/stores/mealsStore'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const store = useMealStore()
const route = useRoute()
onMounted(() => {
  store.showMeal(route.params.id)
})
</script>

<style></style>
