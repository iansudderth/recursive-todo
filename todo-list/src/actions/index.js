export const NEW_ITEM = "NEW_ITEM";
export const CHANGE_BASE = "CHANGE_BASE";
export const COMPLETE_ITEM = "COMPLETE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const REORDER_ITEM = "REORDER_ITEM";
export const CHANGE_COLOR = "CHANGE_COLOR"

// ============
// To Implement
// ============

export const UPDATE_ITEM = "UPDATE_ITEM";

// ===============
// Action Creators
// ===============

export function newItem(content = "", parent = "root") {
	return {
		type: NEW_ITEM,
		payload: {
			content,
			parent
		}
	};
}

export function changeBaseItem(id) {
	return {
		type: CHANGE_BASE,
		payload: id
	};
}

export function completeItem(id) {
	return {
		type: COMPLETE_ITEM,
		payload: id
	};
}

export function deleteItem(id) {
	return {
		type: DELETE_ITEM,
		payload: id
	};
}

export function reorderItem(parentID, oldIndex, newIndex) {
	return {
		type: REORDER_ITEM,
		payload: {
			parentID,
			oldIndex,
			newIndex
		}
	};
}

export function changeColor(id,color){
	return{
		type: CHANGE_COLOR,
		payload: {
			id,
			color
		}
	}
}
