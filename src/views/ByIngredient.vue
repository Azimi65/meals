<template>
  <!-- <pre>{{meals}}</pre> -->

  <div class="px-5 py-5 bg-gray-200">
    <div class="flex justify-center mx-5 mt-5">
      <input
        type="text"
        v-model="keyword"
        placeholder="search for meals"
        class="px-1 py-2 w-full rounded-md border border-gray-100 hover:border-cyan-100"
        
      />
    </div>
    <Meal class="bg-white rounded" :meals="filteredMeals" />
  </div>
</template>

<script setup>
import { useMealStore } from '@/stores/mealsStore'
import { computed, onMounted , ref } from 'vue'
import Meal from '../components/Meal.vue'
const keyword=ref('')
const store = useMealStore()
const meals = computed(() => store.ingredients)
onMounted(() => {
  store.searchByIngredients()
})
 const filteredMeals=computed(()=>{
  if(!filteredMeals){
    return meals
  }
  return meals.value.filter(i=>{
    return (i.strDescription || '').toLowerCase().includes(keyword.value.toLowerCase()) || i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  })
 })
</script>

<style></style>
