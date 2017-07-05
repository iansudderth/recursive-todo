import _ from 'lodash'
import {NEW_ITEM} from '../actions'

function items(state = seedData,action){
	switch (action.type){
		case NEW_ITEM:
		console.log('new item')
		var newItemID = action.payload.id
		var parentID = action.payload.parent
		var newItem = {[newItemID]:action.payload}
		var newParent = addChild(state[parentID],newItemID)
		var newState = Object.assign(state,newItem,{[parentID]:newParent})
		console.log(newState)
		return newState
		default:
		return state;
	}

}

export default items


// // Structure of Items
// id: {
// 	content:String,
// 	parent:id,
// 	children:[id,id,id...]
// }

function randomID(){
	return _.random(0,65500,false)
}

function addChild(item,child){
	var children = [...item.children]
	children = children.concat(child)
	return Object.assign(item, {children})
}

const seedData = {
	1001:{
		id:1001,
		content:"Random seed 1",
		parent:'root',
		children:[1004]

	},
	1002:{
		id:1002,
		content:"Random seed 2",
		parent:'root',
		children:[1003]

	},
	1003:{
		id:1003,
		content:"Random seed 3",
		parent:1002,
		children:[]

	},
	1004:{
		id:1004,
		content:"Random seed 4",
		parent:1001,
		children:[]

	},
	root:{
		children:[1001,1002]
	}
}