import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'
import ByName from '../views/ByName.vue'
import ByLetter from '../views/ByLetter.vue'
import ByIngredient from '../views/ByIngredient.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealShow from '../views/MealShow.vue'
import ShowIngredient from '../views/ShowIngredient.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children:[
      
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: '/byName/:name?',
          name: 'mealsByName',
          component: ByName,
        },
        {
          path: '/byIngredient',
          name: 'mealsByIngredient',
          component: ByIngredient,
        },
        {
          path: '/Ingredient/:ingredient?',
          name: 'showIngredient',
          component: ShowIngredient,
        },
        {
          path: '/letter/:letter?',
          name: 'mealsByLetter',
          component: ByLetter,
        },
        {
          path:'/meal/:id',
          name:'mealDetails',
          component:MealShow
        }
      ]
    },
    {
      path:'/guest',
      component:GuestLayout,
    }
  ],
})

export default router
