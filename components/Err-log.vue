<template>
    <div class="alert">
        <h1>Eurreur de chargemen!</h1>
        <p>{{errMessage || msgAlternatif}} </p>
        <p>
            <button @click="solve">{{solution || "resoudre le probleme"}} </button>
        </p>
    </div>
</template>

<script>
export default {
    props:["errMessage","solution"],
    data(){
        return {
            msgAlternatif:"Ceci est probablement un probleme de réseau...",
        }
    },
    methods:{
        solve(){
            this.$emit("action");
        }
    }
}
</script>