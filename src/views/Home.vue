<script setup>
import { EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useMealStore } from '@/stores/mealsStore'
import axios from 'axios'
import { onMounted, ref, Transition } from 'vue'
const store = useMealStore()

const spinner = ref(false)
onMounted(() => {
  // setInterval(() => {
    store.getAllMeals()
    // spinner.value = false
  // }, 5000)

  // console.log(store.meals)
})

</script>

<template>
  <!-- <pre>{{store.meals}}</pre> -->

  <div role="status" v-if="spinner">
    <svg
      aria-hidden="true"
      class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span class="sr-only">Loading...</span>
  </div>
  <div v-else class="flex justify-center items-center gap-3 my-10 mx-5 overflow-hidden">
    <swiper
     :modules="[EffectFade]" effect="fade"
      :slides-per-view="1"
      
      :fadeEffect= "{ crossFade: true }"

      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <div
        v-for="meal in store.meals"
        :data-index="index"
        :key="meal.idMeal"
        class="border border-1 border-gray-200 shadow-lg rounded-xl"
      >
        <swiper-slide>
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div>
              <img :src="meal.strMealThumb" alt="" class="rounded-tl-xl h-96 w-full object-cover" />
            </div>
            <div class="px-3 py-5 font-semibold">{{ meal.strInstructions }}</div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2">
            <h2
              class="font-bold py-5 flex justify-start px-3 text-indigo-600 hover:text-indigo-800"
            >
              {{ meal.strMeal }}
            </h2>
            <div class="px-3 grid grid-cols-1 md:grid-cols-3 py-5">
              <div class="flex gap-2">
                <span class="font-bold">category:</span><span>{{ meal.strCategory }}</span>
              </div>
              <div class="flex gap-2">
                <span class="font-bold">Area:</span><span>{{ meal.strArea }}</span>
              </div>
              <div class="flex gap-2">
                <span class="font-bold">Ingredient:</span><span>{{ meal.strTags }}</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </div>
    </swiper>
  </div>
</template>
<style scoped></style>
