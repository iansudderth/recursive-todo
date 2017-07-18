import _ from "lodash";
import { NEW_ITEM, COMPLETE_ITEM, DELETE_ITEM, REORDER_ITEM, CHANGE_COLOR } from "../actions";

function items(state = seedData, action) {
	switch (action.type) {
		case NEW_ITEM:
			var newID = randomID();
			var parentID = action.payload.parent;
			var newItem = {
				[newID]: {
					id: newID,
					content: action.payload.content,
					complete: false,
					color:'lightBlue',
					completeChildren: [],
					incompleteChildren: [],
					parent: parentID
				}
			};
			var newParent = { [parentID]: addChild(state[parentID], newID) };
			var newState = _.merge({}, state, newItem, newParent);
			return newState;

		case COMPLETE_ITEM:
			var id = action.payload;
			var newState = _.merge({}, state);
			var newItem = { [id]: newState[id] };
			var parentID = newItem[id].parent;
			newItem[id].complete = !newItem[id].complete;
			if (newItem[id].complete) {
				_.pull(newState[parentID].incompleteChildren, id);
				newState[parentID].completeChildren.unshift(id);
			} else {
				_.pull(newState[parentID].completeChildren, id);
				newState[parentID].incompleteChildren.push(id);
			}
			return _.merge(newState, newItem);

		case DELETE_ITEM:
			var id = action.payload;
			var newState = _.merge({}, state);
			var parent = state[id].parent;
			newState = _.omit(newState, generateChildList(state, id));
			newState[parent].completeChildren = _.filter(
				newState[parent].completeChildren,
				n => n !== id
			);
			newState[parent].incompleteChildren = _.filter(
				newState[parent].incompleteChildren,
				n => n !== id
			);
			return newState;

		case REORDER_ITEM:
			var newState = _.merge({}, state);
			var parentID = action.payload.parentID;
			newState[parentID].incompleteChildren = reorder(
				newState[parentID].incompleteChildren,
				action.payload.oldIndex,
				action.payload.newIndex
			);
			return newState;

		case CHANGE_COLOR:
			var newState = _.merge({}, state)
			newState[action.payload.id].color = action.payload.color
			return newState;

		default:
			return state;
	}
}

export default items;

// // Structure of Items
// id: {
// 	content:String,
// 	parent:id,
// 	children:[id,id,id...]
// }

function generateChildList(state, baseID) {
	var list = [baseID];
	list = list
		.concat(state[baseID].completeChildren)
		.concat(state[baseID].incompleteChildren);
	for (var i = 1; i < list.length; i++) {
		list = list
			.concat(state[list[i]].completeChildren)
			.concat(state[list[i]].incompleteChildren);
	}
	return list;
}

function randomID() {
	return _.random(0, 65500, false);
}

function addChild(item, child) {
	return _.merge({}, item, {
		incompleteChildren: item.incompleteChildren.concat(child)
	});
}

function reorder(arr, oldIndex, newIndex) {
	var removed = [];
	if (oldIndex === 0) {
		removed = arr.slice(1);
	} else {
		var before = arr.slice(0, oldIndex);
		var after = arr.slice(oldIndex + 1, arr.length);
		removed = [...before, ...after];
	}

	if (newIndex === 0) {
		return [arr[oldIndex], ...removed];
	} else if (newIndex === arr.length - 1) {
		return [...removed, arr[oldIndex]];
	} else {
		before = removed.slice(0, newIndex);
		after = removed.slice(newIndex, removed.length);
		return [...before, arr[oldIndex], ...after];
	}
}

const seedData = {
	1001: {
		id: 1001,
		content: "Random seed 1",
		complete: false,
		color:'red',
		parent: "root",
		completeChildren: [],
		incompleteChildren: [1004]
	},
	1002: {
		id: 1002,
		content: "Random seed 2",
		complete: false,
		color:'red',
		parent: "root",
		completeChildren: [],
		incompleteChildren: [1003]
	},
	1003: {
		id: 1003,
		content: "Random seed 3",
		complete: false,
		color:'red',
		parent: 1002,
		completeChildren: [],
		incompleteChildren: []
	},
	1004: {
		id: 1004,
		content: "Random seed 4",
		complete: false,
		color:'red',
		parent: 1001,
		completeChildren: [],
		incompleteChildren: []
	},
	1005: {
		id: 1005,
		content: "Random seed 5",
		complete: true,
		color:'red',
		parent: "root",
		completeChildren: [],
		incompleteChildren: []
	},
	root: {
		color:'red',
		completeChildren: [1005],
		incompleteChildren: [1001, 1002]
	}
};
