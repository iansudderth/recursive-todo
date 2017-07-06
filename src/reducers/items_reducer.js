import _ from 'lodash'
import {NEW_ITEM,COMPLETE_ITEM, DELETE_ITEM} from '../actions'

function items(state = seedData,action){
	switch (action.type){
		case NEW_ITEM:
		var newID = randomID()
		var parentID = action.payload.parent
		var newItem = { [newID] : {
			id:newID,
			content: action.payload.content,
			complete:false,
			children:[],
			parent:parentID
			}
		}
		var newParent = { [parentID] :  addChild(state[parentID],newID)  }
		var newState = _.merge( {} , state, newItem, newParent)
		return newState

		case COMPLETE_ITEM:
		var id = action.payload;
		var newState = _.merge({}, state)
		var newItem =  {[id]:newState[id]}
		newItem[id].complete = !newItem[id].complete;
		return _.merge(newState, newItem)

		case DELETE_ITEM:
		var id = action.payload
		var newState = _.merge({}, state)
		var parent = state[id].parent
		newState = _.omit(newState,generateChildList(state,id))
		newState[parent].children = _.filter(newState[parent].children, n => n !== id)

		console.log(newState)
		return newState;

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

function generateChildList(state,baseID){
	var list = [baseID]
	list = list.concat(state[baseID].children)
	for(var i = 1; i < list.length; i++){
		list = list.concat(state[list[i]].children)
	}
	return list;
}

function randomID(){
	return _.random(0,65500,false)
}

function addChild(item,child){
	var children = [...item.children]
	children = children.concat(child)
	return _.merge({}, item, {children})
}

const seedData = {
	1001:{
		id:1001,
		content:"Random seed 1",
		complete:false,
		parent:'root',
		children:[1004]

	},
	1002:{
		id:1002,
		content:"Random seed 2",
		complete:false,
		parent:'root',
		children:[1003]

	},
	1003:{
		id:1003,
		content:"Random seed 3",
		complete:false,
		parent:1002,
		children:[]

	},
	1004:{
		id:1004,
		content:"Random seed 4",
		complete:false,
		parent:1001,
		children:[]

	},
	root:{
		children:[1001,1002]
	}
}