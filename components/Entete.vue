<template>
<div>
    <header :class="isAtTop?'':'fixed'">
      <h1>La recette du chef</h1>
      <nav>
        <nuxt-link to="/">menu</nuxt-link>
        <nuxt-link class="notifiable" to="/favorites">favoris 
          <div v-if="favorites.length!== 0" class="notif">{{favorites.length}}</div> 
        </nuxt-link>
        <nuxt-link class="notifiable" to="/todos">a faire
          <div v-if="wishes.length !== 0" class="notif">{{wishes.length}}</div>
        </nuxt-link>
      </nav>
    </header>
  <header class="leur"></header>
</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name:"Entete",
  data(){
    return{
      isAtTop:true,
    }
  },
  computed:{
    ...mapState(["favorites","wishes"]),
  },
  mounted(){
    window.addEventListener("scroll",(e)=>{
      if (scrollY >=this.$el.clientHeight) {
        this.isAtTop = false
      }else this.isAtTop =true;
    })
  }
}
</script>

<style lang="scss" scoped>
header{
  transition: .4s;
}

.leur{
  display: none;
}

.fixed{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  padding:5px;
  & + .leur{
    display: block;
  }
}
</style>