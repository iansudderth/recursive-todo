import _ from 'lodash'


export const NEW_ITEM = 'NEW_ITEM'
export const CHANGE_BASE = 'CHANGE_BASE'

// ============
// To Implement
// ============

export const DELETE_ITEM = 'DELETE_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const COMPLETE_ITEM = 'COMPLETE_ITEM'

// ===============
// Action Creators
// ===============

export function newItem(content, parent='root'){

	return {
		type:NEW_ITEM,
		payload:{
			id:randomID(),
			content,
			children:[],
			parent
		}
	}
}

function randomID(){
	return _.random(0,65500,false)
}

export function changeBaseItem(id){
	return {
		type:CHANGE_BASE,
		payload:id
	}
}