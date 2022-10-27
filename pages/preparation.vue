<template>
    <div>
        <Entete></Entete>
        <div  :style="`background:url(${a.strMealThumb}) center/cover no-repeat,url('/u55lbp1585564013.jpg') center/cover no-repeat`" class="preparation">
            <div class="preparation-view" v-if="!loading">
                <h1 >{{a.strMeal}}</h1>
                <p v-html="stripedInstructions()"></p>

                <h3>Ingredients</h3>
                <ul>
                    <li v-for="i in ingredients" :key="i">{{a["strIngredient"+i]}} : {{a["strMeasure"+i]}}</li>
                </ul>

            </div>
            <div v-else class="preparation-view">
                <Loading></Loading>
            </div>
        </div>
            <footer>
                <p>Region d'origine: {{a.strArea}}</p>|
                <p>Boisson suggérée : {{a.strDrinkAlternate || "aucune suggestion"}}</p>|
                <p>Categorie : {{a.strCategory}} </p>
            </footer>
    </div>
</template>

<script>
import { searchById } from '~/static/fetcher';

export default {
    name:"preparing",
    data(e){
        return {
            id:e.$route.query.id,
            a:{},
            ingredients:[],
            loading:true,
        };
    },
    mounted(){
        searchById(this.id).then(data=>this.a = data)
        .then(()=>{
            const { a } = this;
            var ingredient = a["strIngredient1"],i=1;
            while(ingredient){
                this.ingredients.push(i);
                i++;
                ingredient = a["strIngredient"+i];
            }
        }).then(()=>this.loading = false)
        .catch(()=>this.loading = false);
    },
    methods:{
        stripedInstructions(){
            return this.a.strInstructions.split(".").join(".<br/>-");
            }
    }
}
</script>