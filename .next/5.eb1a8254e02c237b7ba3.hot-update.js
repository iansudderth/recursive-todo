webpackHotUpdate(5,{

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _axios = __webpack_require__(768);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(652);

var _lodash2 = _interopRequireDefault(_lodash);

var _throttleAction = __webpack_require__(787);

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

// export const UPDATE_DATA = "UPDATE_DATA";
// export function updateData(id, newState){
// 	var request = axios.put(`/todo/${id}`, newState)
// 	return{
// 		type:UPDATE_DATA,
// 		payload:request
// 	}
// }

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/actions/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/actions/index.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lYjFhODI1NGUwMmMyMzdiN2JhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9hY3Rpb25zL2luZGV4LmpzPzJiNTc4ODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHRocm90dGxlQWN0aW9uIGZyb20gJ3Rocm90dGxlLWFjdGlvbic7XG5cblxuLy8gPT09PT09PT09PT09PT09XG4vLyBBY3Rpb24gQ3JlYXRvcnNcbi8vID09PT09PT09PT09PT09PVxuXG5leHBvcnQgY29uc3QgTkVXX0lURU0gPSBcIk5FV19JVEVNXCI7XG5leHBvcnQgZnVuY3Rpb24gbmV3SXRlbShjb250ZW50ID0gXCJcIiwgcGFyZW50ID0gXCJyb290XCIpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBORVdfSVRFTSxcblx0XHRwYXlsb2FkOiB7XG5cdFx0XHRjb250ZW50LFxuXHRcdFx0cGFyZW50XG5cdFx0fVxuXHR9O1xufVxuZXhwb3J0IGNvbnN0IENIQU5HRV9CQVNFID0gXCJDSEFOR0VfQkFTRVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUJhc2VJdGVtKGlkKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0JBU0UsXG5cdFx0cGF5bG9hZDogaWRcblx0fTtcbn1cblxuZXhwb3J0IGNvbnN0IENPTVBMRVRFX0lURU0gPSBcIkNPTVBMRVRFX0lURU1cIjtcbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0ZUl0ZW0oaWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDT01QTEVURV9JVEVNLFxuXHRcdHBheWxvYWQ6IGlkXG5cdH07XG59XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfSVRFTSA9IFwiREVMRVRFX0lURU1cIjtcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVJdGVtKGlkKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogREVMRVRFX0lURU0sXG5cdFx0cGF5bG9hZDogaWRcblx0fTtcbn1cblxuZXhwb3J0IGNvbnN0IFJFT1JERVJfSVRFTSA9IFwiUkVPUkRFUl9JVEVNXCI7XG5leHBvcnQgZnVuY3Rpb24gcmVvcmRlckl0ZW0ocGFyZW50SUQsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFJFT1JERVJfSVRFTSxcblx0XHRwYXlsb2FkOiB7XG5cdFx0XHRwYXJlbnRJRCxcblx0XHRcdG9sZEluZGV4LFxuXHRcdFx0bmV3SW5kZXhcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfQ09MT1IgPSBcIkNIQU5HRV9DT0xPUlwiO1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbG9yKGlkLGNvbG9yKXtcblx0cmV0dXJue1xuXHRcdHR5cGU6IENIQU5HRV9DT0xPUixcblx0XHRwYXlsb2FkOiB7XG5cdFx0XHRpZCxcblx0XHRcdGNvbG9yXG5cdFx0fVxuXHR9XG59XG5cblxuZXhwb3J0IGNvbnN0IFVQREFURV9JVEVNID0gXCJVUERBVEVfSVRFTVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW0oaWQsbmV3VGV4dCl7XG5cdHJldHVybiB7XG5cdFx0dHlwZTpVUERBVEVfSVRFTSxcblx0XHRwYXlsb2FkOntcblx0XHRcdGlkLFxuXHRcdFx0bmV3VGV4dFxuXHRcdH1cblx0fVxufVxuXG4vLyBleHBvcnQgY29uc3QgVVBEQVRFX0RBVEEgPSBcIlVQREFURV9EQVRBXCI7XG4vLyBleHBvcnQgZnVuY3Rpb24gdXBkYXRlRGF0YShpZCwgbmV3U3RhdGUpe1xuLy8gXHR2YXIgcmVxdWVzdCA9IGF4aW9zLnB1dChgL3RvZG8vJHtpZH1gLCBuZXdTdGF0ZSlcbi8vIFx0cmV0dXJue1xuLy8gXHRcdHR5cGU6VVBEQVRFX0RBVEEsXG4vLyBcdFx0cGF5bG9hZDpyZXF1ZXN0XG4vLyBcdH1cbi8vIH1cblxuZXhwb3J0IGNvbnN0IFVQREFURV9EQVRBID0gXCJVUERBVEVfREFUQVwiXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRGF0YShpZCwgbmV3U3RhdGUpe1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0ZGlzcGF0Y2godXBkYXRlUHJvZ3Jlc3MoKSlcblxuXHRcdHJldHVybiBheGlvcy5wdXQoYC90b2RvLyR7aWR9YCwgbmV3U3RhdGUpXG5cdFx0XHQudGhlbihcblxuXHRcdFx0XHRyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2godXBkYXRlQ29tcGxldGUoKSlcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRlcnJvciA9PiB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2godXBkYXRlRXJyb3IoKSlcblx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZURhdGFUaHJvdHRsZWQgPSB0aHJvdHRsZUFjdGlvbih1cGRhdGVEYXRhLCA1MDAwKTtcblxuXG5leHBvcnQgY29uc3QgVVBEQVRFX1BST0dSRVNTID0gXCJVUERBVEVfUFJPR1JFU1NcIlxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKCl7XG5cdHJldHVybntcblx0XHR0eXBlOlVQREFURV9QUk9HUkVTU1xuXHR9XG59XG5cblxuZXhwb3J0IGNvbnN0IFVQREFURV9TVUNDRVNTID0gXCJVUERBVEVfU1VDQ0VTU1wiXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29tcGxldGUoKXtcblx0cmV0dXJue1xuXHRcdHR5cGU6VVBEQVRFX1NVQ0NFU1Ncblx0fVxufVxuXG5leHBvcnQgY29uc3QgVVBEQVRFX0VSUk9SID0gXCJVUERBVEVfRVJST1JcIlxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVycm9yKCl7XG5cdHJldHVybntcblx0XHR0eXBlOlVQREFURV9FUlJPUlxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFVQTtBQVVBO0FBUUE7QUFRQTtBQVFBO0FBWUE7QUFZQTtBQW9CQTtBQXNCQTtBQVFBO0FBT0E7QUFDQTtBQTlIQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTs7QUFFQTtBQUdBO0FBSkE7QUFGQTtBQU9BO0FBQUE7QUFDQTs7QUFHQTtBQUVBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFDQTs7QUFHQTtBQUVBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFDQTs7QUFHQTtBQUVBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFDQTs7QUFHQTs7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQUZBO0FBU0E7QUFDQTtBQURBO0FBQ0E7O0FBR0E7O0FBRUE7QUFHQTtBQUpBO0FBRkE7QUFTQTtBQUNBO0FBREE7QUFDQTs7QUFHQTs7QUFFQTtBQUdBO0FBSkE7QUFGQTs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBS0E7QUFMQTtBQVNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTs7QUFJQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBQ0E7O0FBSUE7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOztBQUlBO0FBRkE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==