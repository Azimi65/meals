<template>
  <div class="flex justify-center mx-5 mt-5">
    <input
      type="text"
      v-model="keyword"
      placeholder="search for meals"
      class="px-1 py-2 w-full rounded-md border border-gray-100 hover:border-cyan-100"
      @change="searchMeal"
    />
  </div>
  <div class="mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-5 justify-center mt-2">
    <div
      v-for="(searchedMeal, index) in store.searchedMeals.meals"
      :key="index"
      class="mx-1 mt-5 rounded border border-1 border-cyan-200 shadow self-start overflow-hidden"
    >
      <router-link :to="{name:'mealDetails',params:{id:searchedMeal.idMeal}}">
        <img
          :src="searchedMeal.strMealThumb"
          alt=""
          class="aspect-auto rounded-t h-52 w-full object-cover"
        />
      </router-link>
      <div class="p-2 font-semibold">{{ searchedMeal.strMeal }}</div>
      <div class="p-2" v-if="expended[index]">{{ searchedMeal.strInstructions }}</div>
      <div class="p-2" v-else>{{ truncText(searchedMeal.strInstructions, index) }}</div>
      <div class="p-2 flex gap-2">
        <YoutubeButton :href="searchedMeal.strYoutube">Youtube</YoutubeButton>
        <!-- <button @click.prevent="toggleExpend(index)">
          {{ expended[index] ? 'show less' : 'view more' }}
        </button> -->
      </div>
    </div>
  </div>
  <!-- <pre>{{ store.searchedMeals }}</pre> -->
</template>

<script setup>
import { useMealStore } from '@/stores/mealsStore'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import YoutubeButton from '../components/YoutubeButton.vue'

const store = useMealStore()
const keyword = ref('')
const expended = ref([])
const truncated = true
const route=useRoute()
let searchedMeals = computed(() => store.searchedMeals)
function searchMeal() {
  store.searchMeal(keyword.value)
  // .then(() => {
  //   expended.value = Array(store.searchedMeals.meals.length).fill(false)
  //   console.log('expended', expended.value)
  // })
  console.log(store.searchedMeals)
}
onMounted(()=>{
  keyword.value=route.params.name
  if(keyword.value){
    searchMeal()
  }
})
// function toggleExpend(index) {
//   expended.value[index] = !expended.value[index]
// }
function truncText(text, index) {
  if (text.length > 200) {
    expended.value[index] = false
    return text.substring(0, 200).concat('...')
    
  }
  expended.value[index] = true
  return text
  
}
</script>

<style></style>
