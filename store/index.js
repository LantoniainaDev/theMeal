const mutations = {
    SET_FAVORITE(state,id){setUp("favorites",{state,id})},
    SET_WISH(state,id){setUp("wishes",{state,id})},
}

function setUp(prop,{state,id}) {
    const added= state[prop].includes(id);
        if (added) {
            state[prop] = state[prop].filter((e)=> e!==id);
            return false;
        } else {
            state[prop].push(id);
            return true;
        }
}

export default {
    state(){return{
        favorites:[],
        wishes:[],
    }},
    mutations,
}