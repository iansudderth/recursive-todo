webpackHotUpdate(5,{

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = network;

var _actions = __webpack_require__(662);

function network() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "success";
	var action = arguments[1];

	switch (action.type) {
		case _actions.UPDATE_ERROR:
			return "error";

		case _actions.UPDATE_SUCCESS:
			return "success";

		case _actions.UPDATE_PROGRESS:
			return "progress";

		default:
			return state;
	}
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/network_reducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/network_reducer.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40Y2E4YzU4NWI2NDA4NGJkYjNhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9uZXR3b3JrX3JlZHVjZXIuanM/YWEzNjgxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVUERBVEVfUFJPR1JFU1MsIFVQREFURV9TVUNDRVNTLCBVUERBVEVfRVJST1IgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXR3b3JrKHN0YXRlID0gXCJzdWNjZXNzXCIsIGFjdGlvbil7XG5cdHN3aXRjaChhY3Rpb24udHlwZSl7XG5cdFx0Y2FzZSBVUERBVEVfRVJST1I6XG5cdFx0XHRyZXR1cm4gXCJlcnJvclwiXG5cblx0XHRjYXNlIFVQREFURV9TVUNDRVNTOlxuXHRcdFx0cmV0dXJuIFwic3VjY2Vzc1wiXG5cblx0XHRjYXNlIFVQREFURV9QUk9HUkVTUzpcblx0XHRcdHJldHVybiBcInByb2dyZXNzXCJcblxuXHRcdGRlZmF1bHQ6XG5cdFx0cmV0dXJuIHN0YXRlXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL25ldHdvcmtfcmVkdWNlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==