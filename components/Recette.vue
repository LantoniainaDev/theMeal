<template>
    <div class="carte">
        <img :src="meal.strMealThumb" alt="rien">
        <div class="flotant">
            <h1>Categorie</h1>
            <p>{{meal.strCategory || category}}</p>
            <h3>Region :</h3>
            <small>{{meal.strArea || 'inconnue'}} </small>
        </div>
            <h1>{{meal.strMeal}}</h1>
        <div class="flex">
            <input @input="()=>love(id)" :checked="favorites().includes(id)"
             type="checkbox" :id="'love'+meal.idMeal">
            <label class="love" title="ajouter au favoris" :for="'love'+meal.idMeal">❤</label>
            <input @input="()=>wish(id)" :checked="wishes().includes(id)"
             type="checkbox" :id="'wish'+meal.idMeal">
            <label class="wish" title="ajouter a la liste des chose a faire" :for="'wish'+meal.idMeal">✛</label>
        </div>
        <nuxt-link :to="link">voir plus...</nuxt-link>
    </div>
</template>

<script>
import { mapMutations,mapGetters } from "vuex";

export default {
    name: "carte",
    props:["meal","category"],
    data({ meal }){
        return {
            id: meal.idMeal,
            link:{
                path:"/preparation",
                query:{id:meal.idMeal},
            },
        };
    },
    methods:{
        ...mapMutations({love:"SET_FAVORITE",wish:"SET_WISH"}),
        ...mapGetters(["favorites","wishes"]),
    },
}
</script>