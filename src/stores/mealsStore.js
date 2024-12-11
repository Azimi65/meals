// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useMealStore = defineStore('mealsList', {
  state: () => {
    return {
      meals: [],
      searchedMeals:[],
      meal:{},
      mealsByLetter:[],
      ingredients:[]
    }
  },
  getters: {
    allMeals(state) {
      return state.meals
    },
  },
  actions: {
    async getAllMeals() {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        console.log(response.data.meals)
        this.meals = response.data.meals
        console.log('meals', this.meals)
      } catch (error) {
        console.error('Error fetching meals:', error)
      }
    },
    async searchMeal(keyword) {
      // const matchingMeals = this.meals.filter(meal =>
      //   meal.strIngredient.toLowerCase().includes(keyword.toLowerCase())
      // );
      // console.log('Matching Meals:', matchingMeals);
      // return matchingMeals;
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        console.log(response.data)
       this.searchedMeals=response.data
      } catch (error) {
        console.log('error')
      }
    },
    async showMeal(id){
      try{
        const response=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        this.meal=response.data
        
    
      }catch(error){
        console.log(error.message);
      }
    },
    async searchByLetter(letter){
      try{
        const response=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        this.mealsByLetter=response.data.meals 
        console.log('mealsbyletter',this.mealsByLetter)
      }catch(error){
        console.log(error.message);
      }
    },
    async searchByIngredients(){
      try{
        const response=await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        this.ingredients=response.data.meals
      }catch(error){
        console.log(error);
      }
    }
  },
})
