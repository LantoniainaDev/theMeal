<template>
    <div>
        <Entete></Entete>
        <p class="centered"><input type="search" placeholder="chercher..."> Vous avez {{favorites.length}} {{namer}}</p>
        <div v-if="favorites.length" class="flex">
            <Recette v-for="(meal) in meals.filter(({idMeal})=>favorites.includes(idMeal))" :key="meal.idMeal" :meal="meal"></Recette>
        </div>
        <div v-else class="flex">
            Vous n'avez pas de favoris
            <nuxt-link to="/">Menu</nuxt-link>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { searchById } from '~/static/fetcher';

const storeName ="wishes";
const namer = "liste de chose a faire";

export default {
    name:"favorites_Page",
    data(){
        return{
            i:0,
            meals:[],namer,
        }
    },
    computed:{
        ...mapState({favorites:storeName}),
    },
    methods:{
        pushData(id){
            return searchById(id)
                .then(data=>{
                    this.meals
                    .push(data)
                })
        }
    },
    mounted(){
        this.favorites.map(id=>{
                this.pushData(id)
            })
    }
}
</script>
