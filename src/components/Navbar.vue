<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const desktop = ref(false);
const isMobileMenuOpen = ref(false);

function handleResize() {
  desktop.value = window.innerWidth >= 768; 
}


onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <header class="h-16 bg-gray-100 shadow-md">
    <div class="flex px-5 justify-between h-full items-center">
      <router-link :to="{ name: 'home' }" class="text-purple-600 font-bold">Home</router-link>

      
      <div v-if="desktop" class="flex gap-3 items-center h-full">
        <router-link
          class="inline-flex items-center h-full hover:bg-purple-100"
          :to="{ name: 'mealsByName' }"
        >
          searchMeals
        </router-link>
        <router-link
          class="inline-flex items-center h-full hover:bg-purple-100"
          :to="{ name: 'mealsByLetter', params: { letter: 'A' } }"
        >
          searchByLetter
        </router-link>
        <router-link
          class="inline-flex items-center h-full hover:bg-purple-100"
          :to="{ name: 'mealsByIngredient' }"
        >
          searchByIngredient
        </router-link>
      </div>

      
      <div v-else>
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="focus:outline-none"
        >
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        
        <div
          v-show="isMobileMenuOpen"
          class="absolute right-0 top-10 bg-white border border-gray-200 shadow-lg rounded-tl-lg p-4"
        >
          <router-link
            class="block py-2 px-4 hover:bg-purple-100 rounded"
            :to="{ name: 'mealsByName' }"
            @click="isMobileMenuOpen = false"
          >
            searchMeals
          </router-link>
          <router-link
            class="block py-2 px-4 hover:bg-purple-100 rounded"
            :to="{ name: 'mealsByLetter', params: { letter: 'A' } }"
            @click="isMobileMenuOpen = false"
          >
            searchByLetter
          </router-link>
          <router-link
            class="block py-2 px-4 hover:bg-purple-100 rounded"
            :to="{ name: 'mealsByIngredient' }"
            @click="isMobileMenuOpen = false"
          >
            searchByIngredient
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style>

</style>
