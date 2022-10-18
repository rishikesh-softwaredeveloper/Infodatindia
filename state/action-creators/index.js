export const initItem = (add) =>{
    return (dispatch) =>{
        dispatch({
            type:'init_category',
            payload:add
        })
    }
}

export const removeItem = (remove) =>{
    return (dispatch) =>{
        dispatch({
            type:'clear_category',
            payload:remove
        })
    }
}