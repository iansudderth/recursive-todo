'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.UPDATE_ERROR = exports.UPDATE_SUCCESS = exports.UPDATE_PROGRESS = exports.updateDataThrottled = exports.UPDATE_DATA = exports.UPDATE_ITEM = exports.CHANGE_COLOR = exports.REORDER_ITEM = exports.DELETE_ITEM = exports.COMPLETE_ITEM = exports.CHANGE_BASE = exports.NEW_ITEM = undefined;
exports.newItem = newItem;
exports.changeBaseItem = changeBaseItem;
exports.completeItem = completeItem;
exports.deleteItem = deleteItem;
exports.reorderItem = reorderItem;
exports.changeColor = changeColor;
exports.updateItem = updateItem;
exports.updateData = updateData;
exports.updateProgress = updateProgress;
exports.updateComplete = updateComplete;
exports.updateError = updateError;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _throttleAction = require('throttle-action');

var _throttleAction2 = _interopRequireDefault(_throttleAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ===============
// Action Creators
// ===============

var NEW_ITEM = exports.NEW_ITEM = "NEW_ITEM";
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
var CHANGE_BASE = exports.CHANGE_BASE = "CHANGE_BASE";
function changeBaseItem(id) {
	return {
		type: CHANGE_BASE,
		payload: id
	};
}

var COMPLETE_ITEM = exports.COMPLETE_ITEM = "COMPLETE_ITEM";
function completeItem(id) {
	return {
		type: COMPLETE_ITEM,
		payload: id
	};
}

var DELETE_ITEM = exports.DELETE_ITEM = "DELETE_ITEM";
function deleteItem(id) {
	return {
		type: DELETE_ITEM,
		payload: id
	};
}

var REORDER_ITEM = exports.REORDER_ITEM = "REORDER_ITEM";
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

var CHANGE_COLOR = exports.CHANGE_COLOR = "CHANGE_COLOR";
function changeColor(id, color) {
	return {
		type: CHANGE_COLOR,
		payload: {
			id: id,
			color: color
		}
	};
}

var UPDATE_ITEM = exports.UPDATE_ITEM = "UPDATE_ITEM";
function updateItem(id, newText) {
	return {
		type: UPDATE_ITEM,
		payload: {
			id: id,
			newText: newText
		}
	};
}

var UPDATE_DATA = exports.UPDATE_DATA = "UPDATE_DATA";
function updateData(id, newState) {
	return function (dispatch) {
		dispatch(updateProgress());

		return _axios2.default.put('/todo/' + id, newState).then(function (response) {
			dispatch(updateComplete());
		}, function (error) {
			dispatch(updateError());
		});
	};
}

var updateDataThrottled = exports.updateDataThrottled = (0, _throttleAction2.default)(updateData, 5000);

var UPDATE_PROGRESS = exports.UPDATE_PROGRESS = "UPDATE_PROGRESS";
function updateProgress() {
	return {
		type: UPDATE_PROGRESS
	};
}

var UPDATE_SUCCESS = exports.UPDATE_SUCCESS = "UPDATE_SUCCESS";
function updateComplete() {
	return {
		type: UPDATE_SUCCESS
	};
}

var UPDATE_ERROR = exports.UPDATE_ERROR = "UPDATE_ERROR";
function updateError() {
	return {
		type: UPDATE_ERROR
	};
}