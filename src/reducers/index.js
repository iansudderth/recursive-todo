import { combineReducers } from 'redux'
import items from './items_reducer.js'
import baseItem from './baseItem_reducer.js'


const rootReducer = combineReducers({
	items,
	baseItem
});

export default rootReducer