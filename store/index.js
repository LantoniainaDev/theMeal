const mutations = {
    SET_FAVORITE(state,id){setUp("favorites",{state,id})},
    SET_WISH(state,id){setUp("wishes",{state,id})},
    INIT_STATE(state){
        console.log("navigator");
        ["favorites","wishes"].map(i=>{
            var tab = localStorage.getItem(i);
            if (!tab) tab = [];
            else tab = tab.split(",");
            state[i] = tab;
        })
    }
}

const getters = {
    favorites(store){
        // return get("favorites");
        return store.favorites;
    },
    wishes(store){
        // return get("wishes");
        return store.wishes;
    }
}


function setUp(prop,{state,id}) {
    
    var tab = localStorage.getItem(prop);
    if (!tab) tab = [];
    else tab = tab.split(",");
    const added= tab.includes(id);

    if (added) {
        tab = tab.filter((e)=> e!==id);
    } else {
        tab.push(id);
    }
    localStorage.setItem(prop,tab);
    state[prop] = tab;
    return "done";
}

export default {
    state(){
        return{
            favorites:[],
            wishes:[],
        }
    },
    mutations,getters
}