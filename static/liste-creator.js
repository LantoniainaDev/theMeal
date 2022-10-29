
import { mapGetters } from "vuex";
import { searchById } from '~/static/fetcher';

export default function (namer,storeName) {
    
    
    return {
        name:"favorites_Page",
        data(){
        return{
            i:0,
            meals:[],namer,
            errMsg:"",
        }
    },
    computed:{
        ...mapGetters({favorites:storeName}),
    },
    methods:{
        pushData(id){
            return searchById(id)
            .then(data=>{
                this.meals
                .push(data)
            })
        },
    },
    mounted(){
        // this.initState();
        this.favorites.map(id=>{
            this.pushData(id).catch(()=>this.errMsg = "Erreur de réseau");
        })
    }
}
}