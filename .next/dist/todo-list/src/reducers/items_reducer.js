"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = require("../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function items() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : seedData;
	var action = arguments[1];

	switch (action.type) {
		case _actions.NEW_ITEM:
			var newID = randomID();
			var parentID = action.payload.parent;
			var newItem = (0, _defineProperty3.default)({}, newID, {
				id: newID,
				content: action.payload.content,
				complete: false,
				color: 'lightBlue',
				completeChildren: [],
				incompleteChildren: [],
				parent: parentID
			});
			var newParent = (0, _defineProperty3.default)({}, parentID, addChild(state[parentID], newID));
			var newState = _lodash2.default.merge({}, state, newItem, newParent);
			return newState;

		case _actions.COMPLETE_ITEM:
			var id = action.payload;
			var newState = _lodash2.default.merge({}, state);
			var newItem = (0, _defineProperty3.default)({}, id, newState[id]);
			var parentID = newItem[id].parent;
			newItem[id].complete = !newItem[id].complete;
			if (newItem[id].complete) {
				_lodash2.default.pull(newState[parentID].incompleteChildren, id);
				newState[parentID].completeChildren.unshift(id);
			} else {
				_lodash2.default.pull(newState[parentID].completeChildren, id);
				newState[parentID].incompleteChildren.push(id);
			}
			return _lodash2.default.merge(newState, newItem);

		case _actions.DELETE_ITEM:
			var id = action.payload;
			var newState = _lodash2.default.merge({}, state);
			var parent = state[id].parent;
			newState = _lodash2.default.omit(newState, generateChildList(state, id));
			newState[parent].completeChildren = _lodash2.default.filter(newState[parent].completeChildren, function (n) {
				return n !== id;
			});
			newState[parent].incompleteChildren = _lodash2.default.filter(newState[parent].incompleteChildren, function (n) {
				return n !== id;
			});
			return newState;

		case _actions.REORDER_ITEM:
			var newState = _lodash2.default.merge({}, state);
			var parentID = action.payload.parentID;
			newState[parentID].incompleteChildren = reorder(newState[parentID].incompleteChildren, action.payload.oldIndex, action.payload.newIndex);
			return newState;

		case _actions.CHANGE_COLOR:
			var newState = _lodash2.default.merge({}, state);
			newState[action.payload.id].color = action.payload.color;
			return newState;

		default:
			return state;
	}
}

exports.default = items;

// // Structure of Items
// id: {
// 	content:String,
// 	parent:id,
// 	children:[id,id,id...]
// }

function generateChildList(state, baseID) {
	var list = [baseID];
	list = list.concat(state[baseID].completeChildren).concat(state[baseID].incompleteChildren);
	for (var i = 1; i < list.length; i++) {
		list = list.concat(state[list[i]].completeChildren).concat(state[list[i]].incompleteChildren);
	}
	return list;
}

function randomID() {
	return _lodash2.default.random(0, 65500, false);
}

function addChild(item, child) {
	return _lodash2.default.merge({}, item, {
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
		removed = [].concat((0, _toConsumableArray3.default)(before), (0, _toConsumableArray3.default)(after));
	}

	if (newIndex === 0) {
		return [arr[oldIndex]].concat((0, _toConsumableArray3.default)(removed));
	} else if (newIndex === arr.length - 1) {
		return [].concat((0, _toConsumableArray3.default)(removed), [arr[oldIndex]]);
	} else {
		before = removed.slice(0, newIndex);
		after = removed.slice(newIndex, removed.length);
		return [].concat((0, _toConsumableArray3.default)(before), [arr[oldIndex]], (0, _toConsumableArray3.default)(after));
	}
}

var seedData = {
	1001: {
		id: 1001,
		content: "Random seed 1",
		complete: false,
		color: 'red',
		parent: "root",
		completeChildren: [],
		incompleteChildren: [1004]
	},
	1002: {
		id: 1002,
		content: "Random seed 2",
		complete: false,
		color: 'red',
		parent: "root",
		completeChildren: [],
		incompleteChildren: [1003]
	},
	1003: {
		id: 1003,
		content: "Random seed 3",
		complete: false,
		color: 'red',
		parent: 1002,
		completeChildren: [],
		incompleteChildren: []
	},
	1004: {
		id: 1004,
		content: "Random seed 4",
		complete: false,
		color: 'red',
		parent: 1001,
		completeChildren: [],
		incompleteChildren: []
	},
	1005: {
		id: 1005,
		content: "Random seed 5",
		complete: true,
		color: 'red',
		parent: "root",
		completeChildren: [],
		incompleteChildren: []
	},
	root: {
		color: 'red',
		completeChildren: [1005],
		incompleteChildren: [1001, 1002]
	}
};