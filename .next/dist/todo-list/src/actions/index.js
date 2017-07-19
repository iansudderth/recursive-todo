"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.newItem = newItem;
exports.changeBaseItem = changeBaseItem;
exports.completeItem = completeItem;
exports.deleteItem = deleteItem;
exports.reorderItem = reorderItem;
exports.changeColor = changeColor;
exports.updateItem = updateItem;
var NEW_ITEM = exports.NEW_ITEM = "NEW_ITEM";
var CHANGE_BASE = exports.CHANGE_BASE = "CHANGE_BASE";
var COMPLETE_ITEM = exports.COMPLETE_ITEM = "COMPLETE_ITEM";
var DELETE_ITEM = exports.DELETE_ITEM = "DELETE_ITEM";
var REORDER_ITEM = exports.REORDER_ITEM = "REORDER_ITEM";
var CHANGE_COLOR = exports.CHANGE_COLOR = "CHANGE_COLOR";

// ============
// To Implement
// ============

var UPDATE_ITEM = exports.UPDATE_ITEM = "UPDATE_ITEM";

// ===============
// Action Creators
// ===============

function newItem() {
	var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "root";

	return {
		type: NEW_ITEM,
		payload: {
			content: content,
			parent: parent
		}
	};
}

function changeBaseItem(id) {
	return {
		type: CHANGE_BASE,
		payload: id
	};
}

function completeItem(id) {
	return {
		type: COMPLETE_ITEM,
		payload: id
	};
}

function deleteItem(id) {
	return {
		type: DELETE_ITEM,
		payload: id
	};
}

function reorderItem(parentID, oldIndex, newIndex) {
	return {
		type: REORDER_ITEM,
		payload: {
			parentID: parentID,
			oldIndex: oldIndex,
			newIndex: newIndex
		}
	};
}

function changeColor(id, color) {
	return {
		type: CHANGE_COLOR,
		payload: {
			id: id,
			color: color
		}
	};
}

function updateItem(id, newText) {
	return {
		type: UPDATE_ITEM,
		payload: {
			id: id,
			newText: newText
		}
	};
}