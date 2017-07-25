webpackHotUpdate(5,{

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = __webpack_require__(637);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _lodash = __webpack_require__(655);

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = __webpack_require__(662);

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

		case _actions.UPDATE_ITEM:
			var newState = _lodash2.default.merge({}, state);
			newState[action.payload.id].content = action.payload.newText;
			return newState;

		case _actions.UPDATE_DATA:
			console.log(action.payload);
			return state;

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
	var item = arr[oldIndex];
	arr.splice(oldIndex, 1);
	arr.splice(newIndex, 0, item);
	return arr;
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/items_reducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/items_reducer.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42YWE1MGJiZTMxMTYwYWE1NjlkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9pdGVtc19yZWR1Y2VyLmpzPzQ3YzZlYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgTkVXX0lURU0sIENPTVBMRVRFX0lURU0sIERFTEVURV9JVEVNLCBSRU9SREVSX0lURU0sIENIQU5HRV9DT0xPUiwgVVBEQVRFX0lURU0sIFVQREFURV9EQVRBIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcblxuZnVuY3Rpb24gaXRlbXMoc3RhdGUgPSBzZWVkRGF0YSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIE5FV19JVEVNOlxuXHRcdFx0dmFyIG5ld0lEID0gcmFuZG9tSUQoKTtcblx0XHRcdHZhciBwYXJlbnRJRCA9IGFjdGlvbi5wYXlsb2FkLnBhcmVudDtcblx0XHRcdHZhciBuZXdJdGVtID0ge1xuXHRcdFx0XHRbbmV3SURdOiB7XG5cdFx0XHRcdFx0aWQ6IG5ld0lELFxuXHRcdFx0XHRcdGNvbnRlbnQ6IGFjdGlvbi5wYXlsb2FkLmNvbnRlbnQsXG5cdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdFx0XHRcdGNvbG9yOidsaWdodEJsdWUnLFxuXHRcdFx0XHRcdGNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdFx0XHRcdGluY29tcGxldGVDaGlsZHJlbjogW10sXG5cdFx0XHRcdFx0cGFyZW50OiBwYXJlbnRJRFxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0dmFyIG5ld1BhcmVudCA9IHsgW3BhcmVudElEXTogYWRkQ2hpbGQoc3RhdGVbcGFyZW50SURdLCBuZXdJRCkgfTtcblx0XHRcdHZhciBuZXdTdGF0ZSA9IF8ubWVyZ2Uoe30sIHN0YXRlLCBuZXdJdGVtLCBuZXdQYXJlbnQpO1xuXHRcdFx0cmV0dXJuIG5ld1N0YXRlO1xuXG5cdFx0Y2FzZSBDT01QTEVURV9JVEVNOlxuXHRcdFx0dmFyIGlkID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHR2YXIgbmV3U3RhdGUgPSBfLm1lcmdlKHt9LCBzdGF0ZSk7XG5cdFx0XHR2YXIgbmV3SXRlbSA9IHsgW2lkXTogbmV3U3RhdGVbaWRdIH07XG5cdFx0XHR2YXIgcGFyZW50SUQgPSBuZXdJdGVtW2lkXS5wYXJlbnQ7XG5cdFx0XHRuZXdJdGVtW2lkXS5jb21wbGV0ZSA9ICFuZXdJdGVtW2lkXS5jb21wbGV0ZTtcblx0XHRcdGlmIChuZXdJdGVtW2lkXS5jb21wbGV0ZSkge1xuXHRcdFx0XHRfLnB1bGwobmV3U3RhdGVbcGFyZW50SURdLmluY29tcGxldGVDaGlsZHJlbiwgaWQpO1xuXHRcdFx0XHRuZXdTdGF0ZVtwYXJlbnRJRF0uY29tcGxldGVDaGlsZHJlbi51bnNoaWZ0KGlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF8ucHVsbChuZXdTdGF0ZVtwYXJlbnRJRF0uY29tcGxldGVDaGlsZHJlbiwgaWQpO1xuXHRcdFx0XHRuZXdTdGF0ZVtwYXJlbnRJRF0uaW5jb21wbGV0ZUNoaWxkcmVuLnB1c2goaWQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIF8ubWVyZ2UobmV3U3RhdGUsIG5ld0l0ZW0pO1xuXG5cdFx0Y2FzZSBERUxFVEVfSVRFTTpcblx0XHRcdHZhciBpZCA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0dmFyIG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUpO1xuXHRcdFx0dmFyIHBhcmVudCA9IHN0YXRlW2lkXS5wYXJlbnQ7XG5cdFx0XHRuZXdTdGF0ZSA9IF8ub21pdChuZXdTdGF0ZSwgZ2VuZXJhdGVDaGlsZExpc3Qoc3RhdGUsIGlkKSk7XG5cdFx0XHRuZXdTdGF0ZVtwYXJlbnRdLmNvbXBsZXRlQ2hpbGRyZW4gPSBfLmZpbHRlcihcblx0XHRcdFx0bmV3U3RhdGVbcGFyZW50XS5jb21wbGV0ZUNoaWxkcmVuLFxuXHRcdFx0XHRuID0+IG4gIT09IGlkXG5cdFx0XHQpO1xuXHRcdFx0bmV3U3RhdGVbcGFyZW50XS5pbmNvbXBsZXRlQ2hpbGRyZW4gPSBfLmZpbHRlcihcblx0XHRcdFx0bmV3U3RhdGVbcGFyZW50XS5pbmNvbXBsZXRlQ2hpbGRyZW4sXG5cdFx0XHRcdG4gPT4gbiAhPT0gaWRcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gbmV3U3RhdGU7XG5cblx0XHRjYXNlIFJFT1JERVJfSVRFTTpcblx0XHRcdHZhciBuZXdTdGF0ZSA9IF8ubWVyZ2Uoe30sIHN0YXRlKTtcblx0XHRcdHZhciBwYXJlbnRJRCA9IGFjdGlvbi5wYXlsb2FkLnBhcmVudElEO1xuXHRcdFx0bmV3U3RhdGVbcGFyZW50SURdLmluY29tcGxldGVDaGlsZHJlbiA9IHJlb3JkZXIoXG5cdFx0XHRcdG5ld1N0YXRlW3BhcmVudElEXS5pbmNvbXBsZXRlQ2hpbGRyZW4sXG5cdFx0XHRcdGFjdGlvbi5wYXlsb2FkLm9sZEluZGV4LFxuXHRcdFx0XHRhY3Rpb24ucGF5bG9hZC5uZXdJbmRleFxuXHRcdFx0KTtcblx0XHRcdHJldHVybiBuZXdTdGF0ZTtcblxuXHRcdGNhc2UgQ0hBTkdFX0NPTE9SOlxuXHRcdFx0dmFyIG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUpXG5cdFx0XHRuZXdTdGF0ZVthY3Rpb24ucGF5bG9hZC5pZF0uY29sb3IgPSBhY3Rpb24ucGF5bG9hZC5jb2xvclxuXHRcdFx0cmV0dXJuIG5ld1N0YXRlO1xuXG5cdFx0Y2FzZSBVUERBVEVfSVRFTTpcblx0XHRcdHZhciBuZXdTdGF0ZSA9IF8ubWVyZ2Uoe30sIHN0YXRlKVxuXHRcdFx0bmV3U3RhdGVbYWN0aW9uLnBheWxvYWQuaWRdLmNvbnRlbnQgPSBhY3Rpb24ucGF5bG9hZC5uZXdUZXh0XG5cdFx0XHRyZXR1cm4gbmV3U3RhdGVcblxuXHRcdGNhc2UgVVBEQVRFX0RBVEE6XG5cdFx0XHRjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZClcblx0XHRcdHJldHVybiBzdGF0ZVxuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBpdGVtcztcblxuLy8gLy8gU3RydWN0dXJlIG9mIEl0ZW1zXG4vLyBpZDoge1xuLy8gXHRjb250ZW50OlN0cmluZyxcbi8vIFx0cGFyZW50OmlkLFxuLy8gXHRjaGlsZHJlbjpbaWQsaWQsaWQuLi5dXG4vLyB9XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2hpbGRMaXN0KHN0YXRlLCBiYXNlSUQpIHtcblx0dmFyIGxpc3QgPSBbYmFzZUlEXTtcblx0bGlzdCA9IGxpc3Rcblx0XHQuY29uY2F0KHN0YXRlW2Jhc2VJRF0uY29tcGxldGVDaGlsZHJlbilcblx0XHQuY29uY2F0KHN0YXRlW2Jhc2VJRF0uaW5jb21wbGV0ZUNoaWxkcmVuKTtcblx0Zm9yICh2YXIgaSA9IDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bGlzdCA9IGxpc3Rcblx0XHRcdC5jb25jYXQoc3RhdGVbbGlzdFtpXV0uY29tcGxldGVDaGlsZHJlbilcblx0XHRcdC5jb25jYXQoc3RhdGVbbGlzdFtpXV0uaW5jb21wbGV0ZUNoaWxkcmVuKTtcblx0fVxuXHRyZXR1cm4gbGlzdDtcbn1cblxuZnVuY3Rpb24gcmFuZG9tSUQoKSB7XG5cdHJldHVybiBfLnJhbmRvbSgwLCA2NTUwMCwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZChpdGVtLCBjaGlsZCkge1xuXHRyZXR1cm4gXy5tZXJnZSh7fSwgaXRlbSwge1xuXHRcdGluY29tcGxldGVDaGlsZHJlbjogaXRlbS5pbmNvbXBsZXRlQ2hpbGRyZW4uY29uY2F0KGNoaWxkKVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVvcmRlcihhcnIsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuXHR2YXIgaXRlbSA9IGFycltvbGRJbmRleF1cblx0YXJyLnNwbGljZShvbGRJbmRleCwgMSlcblx0YXJyLnNwbGljZShuZXdJbmRleCwgMCwgaXRlbSlcblx0cmV0dXJuIGFyclxufVxuXG5jb25zdCBzZWVkRGF0YSA9IHtcblx0MTAwMToge1xuXHRcdGlkOiAxMDAxLFxuXHRcdGNvbnRlbnQ6IFwiUmFuZG9tIHNlZWQgMVwiLFxuXHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRjb2xvcjoncmVkJyxcblx0XHRwYXJlbnQ6IFwicm9vdFwiLFxuXHRcdGNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdGluY29tcGxldGVDaGlsZHJlbjogWzEwMDRdXG5cdH0sXG5cdDEwMDI6IHtcblx0XHRpZDogMTAwMixcblx0XHRjb250ZW50OiBcIlJhbmRvbSBzZWVkIDJcIixcblx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0Y29sb3I6J3JlZCcsXG5cdFx0cGFyZW50OiBcInJvb3RcIixcblx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFsxMDAzXVxuXHR9LFxuXHQxMDAzOiB7XG5cdFx0aWQ6IDEwMDMsXG5cdFx0Y29udGVudDogXCJSYW5kb20gc2VlZCAzXCIsXG5cdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdGNvbG9yOidyZWQnLFxuXHRcdHBhcmVudDogMTAwMixcblx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFtdXG5cdH0sXG5cdDEwMDQ6IHtcblx0XHRpZDogMTAwNCxcblx0XHRjb250ZW50OiBcIlJhbmRvbSBzZWVkIDRcIixcblx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0Y29sb3I6J3JlZCcsXG5cdFx0cGFyZW50OiAxMDAxLFxuXHRcdGNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdGluY29tcGxldGVDaGlsZHJlbjogW11cblx0fSxcblx0MTAwNToge1xuXHRcdGlkOiAxMDA1LFxuXHRcdGNvbnRlbnQ6IFwiUmFuZG9tIHNlZWQgNVwiLFxuXHRcdGNvbXBsZXRlOiB0cnVlLFxuXHRcdGNvbG9yOidyZWQnLFxuXHRcdHBhcmVudDogXCJyb290XCIsXG5cdFx0Y29tcGxldGVDaGlsZHJlbjogW10sXG5cdFx0aW5jb21wbGV0ZUNoaWxkcmVuOiBbXVxuXHR9LFxuXHRyb290OiB7XG5cdFx0Y29sb3I6J3JlZCcsXG5cdFx0Y29tcGxldGVDaGlsZHJlbjogWzEwMDVdLFxuXHRcdGluY29tcGxldGVDaGlsZHJlbjogWzEwMDEsIDEwMDJdXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL2l0ZW1zX3JlZHVjZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVRBO0FBU0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVJBOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUkE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFSQTs7QUFVQTtBQUFBO0FBQ0E7QUFGQTtBQTlDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9