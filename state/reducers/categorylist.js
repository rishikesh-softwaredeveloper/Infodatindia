const reducer = (state=[],action)=>{
    switch(action.type){
        case 'init_category':
            return state=[...state,action.payload]
        case "clear_category":
         return state =[]
        default:
            return state
    }   
}

export default reducer;