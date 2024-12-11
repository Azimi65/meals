<template>
  <!-- <pre>{{meals}}</pre> -->
  <div
    v-for="meal in meals"
    :key="meal.idIngredient"
    class="border-2 border-gray-200 bg-white shadow rounded my-5 mx-5 p-5"
  >
    <!-- <router-link :to="{ name: 'showIngredient', params: { ingredient: meal.idMeal } }"> -->
      <h2 class="font-bold my-2">{{ meal.strIngredient }}</h2>
    <!-- </router-link> -->
    <div class="">{{ meal.strDescription }}</div>
  </div>
</template>

<script setup>
defineProps({
  meals: [],
})
</script>

<style></style>
