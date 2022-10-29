const mutations = {
    SET_FAVORITE(state,id){setUp("favorites",{state,id})},
    SET_WISH(state,id){setUp("wishes",{state,id})},
    INIT_STATE(state){
        ["favorites","wishes"].map(i=>{
            var tab = localStorage.getItem(i);
            if (!tab) tab = [];
            else tab = tab.split(",");
            state[i] = tab;
        })
    }
}

const getters = {
    favorites(){
        return get("favorites");
    },
    wishes(){
        return get("wishes");
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

function get(prop) {
    var tab = localStorage.getItem(prop);
    return tab? tab.split(","):[];
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