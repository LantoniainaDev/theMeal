<template>
    <div>
        <Entete></Entete>
        <p class="centered"><input type="search" placeholder="chercher..."> Vous avez {{favorites.length}} {{namer}}</p>
        <Err-log v-if="errMsg" :errMessage="errMsg"></Err-log>
        <div v-else-if="favorites.length !== 0" class="flex">
            <Recette v-for="(meal) in meals.filter(({idMeal})=>favorites.includes(idMeal))" :key="meal.idMeal" :meal="meal"></Recette>
        </div>
        <div v-else class="flex">
            Vous n'avez pas de {{namer}}
            <nuxt-link to="/">Menu</nuxt-link>
        </div>
    </div>
</template>

<script>
import listeCreator from "~/static/liste-creator";

export default listeCreator("chose a faire","wishes");
</script>
