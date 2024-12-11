<template>
<pre>{{ingredients}}</pre>
</template>

<script setup>
import { useMealStore } from "@/stores/mealsStore";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
const store=useMealStore()
const route=useRoute()
const ingredients=computed(()=>store.meal.meals || [])
onMounted(()=>{
    store.showMeal(route.params.ingredient)
})
</script>

<style>

</style>