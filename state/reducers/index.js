import { combineReducers } from 'redux'
import categoryReducer from './categorylist'

const reducers = combineReducers({
    categoryList: categoryReducer,
    
})


export default reducers