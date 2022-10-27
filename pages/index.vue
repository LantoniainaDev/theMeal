<template>
  <div>
    <Entete></Entete>
    <span class="search-container">
      <input type="search" placeholder="rechercher..." v-model="search">
      <div>  {{meals.length}} plat{{meals.length>1?'s':''}} et {{searchedMeal.length}} resultats</div>
    </span>
    <p v-if="catList.lenght" class="flex"><select name="categorie" id="cat" v-model="selected" @input="loadList">
      <option v-for="(categorie,i) in catList" :key="i" :value="categorie.strCategory">{{categorie.strCategory}}</option>
      </select> </p>
    <div v-if="!(loading || errMessage)" class="table-de-recette">
      <Recette v-for="(meal,i) in searchedMeal" :key="i" :meal='meal' :category="selected"></Recette>
    </div>
    <Err-log v-else-if="errMessage" :errMessage="errMessage" @action="reload"></Err-log>
    <Loading v-else></Loading>
  </div>
</template>


<script>
import { getCatList, randMeal } from '~/static/fetcher';
import { filtreDeRecherche } from "~/static/searcher";

export default {
  name: 'IndexPage',
  data(){
    return {
      search:"",
      meals:[],
      loading:true,
      selected:"Vegan",
      errMessage:"",
      catList:[],
    }
  },
  mounted(){
    this.reload();
  },
  computed:{
    searchedMeal(){
      return this.meals.filter(e=>{return filtreDeRecherche(e,this.search)});
    },
  },
  methods:{
    onErr(){this.loading =false;this.errMessage = "Erreur de connexion"},
    loadList(){
      this.loading =true;
      randMeal(this.selected).then(({data})=>this.meals =data.meals)
      .then(()=>this.loading =false)
      .catch(this.onErr);
    },
    reload(){
    this.errMessage = "";
    getCatList()
      .then((data)=>this.catList = data)
      .then(this.loadList)
      .catch(this.onErr);
    }
  }
}
</script>
