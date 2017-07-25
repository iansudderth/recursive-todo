webpackHotUpdate(5,{

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(10);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(29);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(30);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(31);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = __webpack_require__(794);

var _List2 = _interopRequireDefault(_List);

var _reactRedux = __webpack_require__(674);

var _actions = __webpack_require__(662);

var _redux = __webpack_require__(654);

var _ListHeader = __webpack_require__(946);

var _ListHeader2 = _interopRequireDefault(_ListHeader);

var _Card = __webpack_require__(999);

var _Card2 = _interopRequireDefault(_Card);

var _styles = __webpack_require__(645);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/containers/TodoContainer.js";
// import style from "../components/ListItem/style.css";

// import _ from 'lodash'


var styleSheet = (0, _styles.createStyleSheet)("CardContainer", {
	card: {
		margin: 0
	},
	"@media (min-width:768px)": {
		card: {
			margin: 16
		}
	}
});

var TodoContainer = function (_Component) {
	(0, _inherits3.default)(TodoContainer, _Component);

	function TodoContainer(props) {
		(0, _classCallCheck3.default)(this, TodoContainer);

		var _this = (0, _possibleConstructorReturn3.default)(this, (TodoContainer.__proto__ || (0, _getPrototypeOf2.default)(TodoContainer)).call(this, props));

		_this.state = {
			newItem: ""
		};
		_this.inputUpdate = _this.inputUpdate.bind(_this);
		_this.newItemAction = _this.newItemAction.bind(_this);
		_this.changeBaseComposer = _this.changeBaseComposer.bind(_this);
		_this.completeItemComposer = _this.completeItemComposer.bind(_this);
		_this.deleteItemComposer = _this.deleteItemComposer.bind(_this);
		_this.reorderItemComposer = _this.reorderItemComposer.bind(_this);
		_this.generateComplete = _this.generateComplete.bind(_this);
		_this.changeColorComposer = _this.changeColorComposer.bind(_this);
		_this.updateItemDispatch = _this.updateItemDispatch.bind(_this);
		_this.updateDataDispatch = _this.updateDataDispatch.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(TodoContainer, [{
		key: "inputUpdate",
		value: function inputUpdate(event) {
			this.setState({ newItem: event.target.value });
		}
	}, {
		key: "newItemAction",
		value: function newItemAction(content) {
			this.props.newItem(content, this.props.baseItem);
			this.setState({ newItem: "" }, function () {});
		}
	}, {
		key: "changeBaseComposer",
		value: function changeBaseComposer(id) {
			var changeBaseItem = this.props.changeBaseItem;
			return function () {
				changeBaseItem(id);
			};
		}
	}, {
		key: "deleteItemComposer",
		value: function deleteItemComposer(id) {
			var deleteItemDispatch = this.props.deleteItem;
			return function () {
				deleteItemDispatch(id);
			};
		}
	}, {
		key: "completeItemComposer",
		value: function completeItemComposer(id) {
			var completeItemDispatch = this.props.completeItem;
			return function () {
				completeItemDispatch(id);
			};
		}
	}, {
		key: "reorderItemComposer",
		value: function reorderItemComposer(id, oldIndex, newIndex) {
			var reorderItemDispatch = this.props.reorderItem;
			return function () {
				reorderItemDispatch(id, oldIndex, newIndex);
			};
		}
	}, {
		key: "generateComplete",
		value: function generateComplete() {
			var completeCount = this.props.items[this.props.baseItem].completeChildren.length;
			var totalCount = this.props.items[this.props.baseItem].incompleteChildren.length + completeCount;
			return "( " + completeCount + " / " + totalCount + " Complete )";
		}
	}, {
		key: "changeColorComposer",
		value: function changeColorComposer(id, color) {
			var changeColorDispatch = this.props.changeColor;
			return function () {
				changeColorDispatch(id, color);
			};
		}
	}, {
		key: "updateItemDispatch",
		value: function updateItemDispatch(id, newText) {
			this.props.updateItem(id, newText);
		}
	}, {
		key: "updateDataDispatch",
		value: function updateDataDispatch() {
			var id = this.props.listID;
			var newState = {
				items: this.props.items,
				baseItem: this.props.baseItem
			};
			this.props.updateData(id, { id: id, newState: newState });
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			this.updateDataDispatch();
		}
	}, {
		key: "render",
		value: function render() {
			var currentItem = this.props.items[this.props.baseItem];
			return _react2.default.createElement(_Card2.default, { className: this.props.classes.card, __source: {
					fileName: _jsxFileName,
					lineNumber: 124
				}
			}, _react2.default.createElement(_ListHeader2.default, {
				baseItem: this.props.baseItem,
				baseItemText: currentItem.content,
				currentParent: currentItem.parent,
				changeBaseComposer: this.changeBaseComposer,
				changeColorComposer: this.changeColorComposer,
				counterText: this.generateComplete(),
				items: this.props.items,
				newItemAction: this.newItemAction,
				updateItem: this.updateItemDispatch,
				updateData: this.updateDataDispatch,
				completeItemComposer: this.completeItemComposer,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 125
				}
			}), _react2.default.createElement(_List2.default, {
				items: this.props.items,
				baseItem: this.props.baseItem,
				changeBaseComposer: this.changeBaseComposer,
				deleteItemComposer: this.deleteItemComposer,
				completeItemComposer: this.completeItemComposer,
				reorderItemComposer: this.reorderItemComposer,
				changeColorComposer: this.changeColorComposer,
				updateItem: this.updateItemDispatch,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 138
				}
			}));
		}
	}]);

	return TodoContainer;
}(_react.Component);

TodoContainer.propTypes = {
	baseItem: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	items: _propTypes2.default.object,
	classes: _propTypes2.default.object,
	listID: _propTypes2.default.string,
	newItem: _propTypes2.default.func,
	changeBaseItem: _propTypes2.default.func,
	completeItem: _propTypes2.default.func,
	deleteItem: _propTypes2.default.func,
	reorderItem: _propTypes2.default.func,
	changeColor: _propTypes2.default.func,
	updateItem: _propTypes2.default.func,
	updateData: _propTypes2.default.func
};

function mapStateToProps(_ref) {
	var items = _ref.items,
	    baseItem = _ref.baseItem;

	return { items: items, baseItem: baseItem };
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({
		newItem: _actions.newItem,
		changeBaseItem: _actions.changeBaseItem,
		completeItem: _actions.completeItem,
		deleteItem: _actions.deleteItem,
		reorderItem: _actions.reorderItem,
		changeColor: _actions.changeColor,
		updateItem: _actions.updateItem,
		updateData: _actions.updateDataThrottled
	}, dispatch);
}

exports.default = (0, _styles.withStyles)(styleSheet)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TodoContainer));

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/containers/TodoContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/containers/TodoContainer.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41Yjk0YzhjMzAwNDRkZjZmZDFlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIuanM/ODBhZjVmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1xuXHRuZXdJdGVtLFxuXHRjaGFuZ2VCYXNlSXRlbSxcblx0Y29tcGxldGVJdGVtLFxuXHRkZWxldGVJdGVtLFxuXHRyZW9yZGVySXRlbSxcblx0Y2hhbmdlQ29sb3IsXG5cdHVwZGF0ZUl0ZW0sXG5cdHVwZGF0ZURhdGFUaHJvdHRsZWRcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RJdGVtL3N0eWxlLmNzc1wiO1xuaW1wb3J0IExpc3RIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdEhlYWRlci5qc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIm1hdGVyaWFsLXVpL0NhcmRcIjtcbi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlU2hlZXQgfSBmcm9tIFwibWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBjcmVhdGVTdHlsZVNoZWV0KFwiQ2FyZENvbnRhaW5lclwiLCB7XG5cdGNhcmQ6IHtcblx0XHRtYXJnaW46IDBcblx0fSxcblx0XCJAbWVkaWEgKG1pbi13aWR0aDo3NjhweClcIjoge1xuXHRcdGNhcmQ6IHtcblx0XHRcdG1hcmdpbjogMTZcblx0XHR9XG5cdH1cbn0pO1xuXG5jbGFzcyBUb2RvQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5ld0l0ZW06IFwiXCJcblx0XHR9O1xuXHRcdHRoaXMuaW5wdXRVcGRhdGUgPSB0aGlzLmlucHV0VXBkYXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5uZXdJdGVtQWN0aW9uID0gdGhpcy5uZXdJdGVtQWN0aW9uLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jaGFuZ2VCYXNlQ29tcG9zZXIgPSB0aGlzLmNoYW5nZUJhc2VDb21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY29tcGxldGVJdGVtQ29tcG9zZXIgPSB0aGlzLmNvbXBsZXRlSXRlbUNvbXBvc2VyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5kZWxldGVJdGVtQ29tcG9zZXIgPSB0aGlzLmRlbGV0ZUl0ZW1Db21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVvcmRlckl0ZW1Db21wb3NlciA9IHRoaXMucmVvcmRlckl0ZW1Db21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZ2VuZXJhdGVDb21wbGV0ZSA9IHRoaXMuZ2VuZXJhdGVDb21wbGV0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2hhbmdlQ29sb3JDb21wb3NlciA9IHRoaXMuY2hhbmdlQ29sb3JDb21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudXBkYXRlSXRlbURpc3BhdGNoID0gdGhpcy51cGRhdGVJdGVtRGlzcGF0Y2guYmluZCh0aGlzKTtcblx0XHR0aGlzLnVwZGF0ZURhdGFEaXNwYXRjaCA9IHRoaXMudXBkYXRlRGF0YURpc3BhdGNoLmJpbmQodGhpcyk7XG5cdH1cblxuXHRpbnB1dFVwZGF0ZShldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBuZXdJdGVtOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG5cdH1cblxuXHRuZXdJdGVtQWN0aW9uKGNvbnRlbnQpIHtcblx0XHR0aGlzLnByb3BzLm5ld0l0ZW0oY29udGVudCwgdGhpcy5wcm9wcy5iYXNlSXRlbSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG5ld0l0ZW06IFwiXCIgfSwgKCkgPT4ge30pO1xuXHR9XG5cblx0Y2hhbmdlQmFzZUNvbXBvc2VyKGlkKSB7XG5cdFx0dmFyIGNoYW5nZUJhc2VJdGVtID0gdGhpcy5wcm9wcy5jaGFuZ2VCYXNlSXRlbTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRjaGFuZ2VCYXNlSXRlbShpZCk7XG5cdFx0fTtcblx0fVxuXG5cdGRlbGV0ZUl0ZW1Db21wb3NlcihpZCkge1xuXHRcdGxldCBkZWxldGVJdGVtRGlzcGF0Y2ggPSB0aGlzLnByb3BzLmRlbGV0ZUl0ZW07XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZGVsZXRlSXRlbURpc3BhdGNoKGlkKTtcblx0XHR9O1xuXHR9XG5cblx0Y29tcGxldGVJdGVtQ29tcG9zZXIoaWQpIHtcblx0XHRsZXQgY29tcGxldGVJdGVtRGlzcGF0Y2ggPSB0aGlzLnByb3BzLmNvbXBsZXRlSXRlbTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wbGV0ZUl0ZW1EaXNwYXRjaChpZCk7XG5cdFx0fTtcblx0fVxuXG5cdHJlb3JkZXJJdGVtQ29tcG9zZXIoaWQsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuXHRcdGxldCByZW9yZGVySXRlbURpc3BhdGNoID0gdGhpcy5wcm9wcy5yZW9yZGVySXRlbTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW9yZGVySXRlbURpc3BhdGNoKGlkLCBvbGRJbmRleCwgbmV3SW5kZXgpO1xuXHRcdH07XG5cdH1cblxuXHRnZW5lcmF0ZUNvbXBsZXRlKCkge1xuXHRcdHZhciBjb21wbGV0ZUNvdW50ID0gdGhpcy5wcm9wcy5pdGVtc1t0aGlzLnByb3BzLmJhc2VJdGVtXVxuXHRcdFx0LmNvbXBsZXRlQ2hpbGRyZW4ubGVuZ3RoO1xuXHRcdHZhciB0b3RhbENvdW50ID1cblx0XHRcdHRoaXMucHJvcHMuaXRlbXNbdGhpcy5wcm9wcy5iYXNlSXRlbV0uaW5jb21wbGV0ZUNoaWxkcmVuLmxlbmd0aCArXG5cdFx0XHRjb21wbGV0ZUNvdW50O1xuXHRcdHJldHVybiBgKCAke2NvbXBsZXRlQ291bnR9IC8gJHt0b3RhbENvdW50fSBDb21wbGV0ZSApYDtcblx0fVxuXG5cdGNoYW5nZUNvbG9yQ29tcG9zZXIoaWQsIGNvbG9yKSB7XG5cdFx0bGV0IGNoYW5nZUNvbG9yRGlzcGF0Y2ggPSB0aGlzLnByb3BzLmNoYW5nZUNvbG9yO1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdGNoYW5nZUNvbG9yRGlzcGF0Y2goaWQsIGNvbG9yKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlSXRlbURpc3BhdGNoKGlkLCBuZXdUZXh0KSB7XG5cdFx0dGhpcy5wcm9wcy51cGRhdGVJdGVtKGlkLCBuZXdUZXh0KTtcblx0fVxuXG5cdHVwZGF0ZURhdGFEaXNwYXRjaCgpIHtcblx0XHRjb25zdCBpZCA9IHRoaXMucHJvcHMubGlzdElEO1xuXHRcdGNvbnN0IG5ld1N0YXRlID0ge1xuXHRcdFx0aXRlbXM6IHRoaXMucHJvcHMuaXRlbXMsXG5cdFx0XHRiYXNlSXRlbTogdGhpcy5wcm9wcy5iYXNlSXRlbVxuXHRcdH07XG5cdFx0dGhpcy5wcm9wcy51cGRhdGVEYXRhKGlkLCB7IGlkLCBuZXdTdGF0ZSB9KTtcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHR0aGlzLnVwZGF0ZURhdGFEaXNwYXRjaCgpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjdXJyZW50SXRlbSA9IHRoaXMucHJvcHMuaXRlbXNbdGhpcy5wcm9wcy5iYXNlSXRlbV07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxDYXJkIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc2VzLmNhcmR9PlxuXHRcdFx0XHQ8TGlzdEhlYWRlclxuXHRcdFx0XHRcdGJhc2VJdGVtPXt0aGlzLnByb3BzLmJhc2VJdGVtfVxuXHRcdFx0XHRcdGJhc2VJdGVtVGV4dD17Y3VycmVudEl0ZW0uY29udGVudH1cblx0XHRcdFx0XHRjdXJyZW50UGFyZW50PXtjdXJyZW50SXRlbS5wYXJlbnR9XG5cdFx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXt0aGlzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0XHRjaGFuZ2VDb2xvckNvbXBvc2VyPXt0aGlzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdFx0Y291bnRlclRleHQ9e3RoaXMuZ2VuZXJhdGVDb21wbGV0ZSgpfVxuXHRcdFx0XHRcdGl0ZW1zPXt0aGlzLnByb3BzLml0ZW1zfVxuXHRcdFx0XHRcdG5ld0l0ZW1BY3Rpb249e3RoaXMubmV3SXRlbUFjdGlvbn1cblx0XHRcdFx0XHR1cGRhdGVJdGVtPXt0aGlzLnVwZGF0ZUl0ZW1EaXNwYXRjaH1cblx0XHRcdFx0XHR1cGRhdGVEYXRhPXt0aGlzLnVwZGF0ZURhdGFEaXNwYXRjaH1cblx0XHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17dGhpcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PExpc3Rcblx0XHRcdFx0XHRpdGVtcz17dGhpcy5wcm9wcy5pdGVtc31cblx0XHRcdFx0XHRiYXNlSXRlbT17dGhpcy5wcm9wcy5iYXNlSXRlbX1cblx0XHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3RoaXMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17dGhpcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3RoaXMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0cmVvcmRlckl0ZW1Db21wb3Nlcj17dGhpcy5yZW9yZGVySXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXI9e3RoaXMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0XHR1cGRhdGVJdGVtPXt0aGlzLnVwZGF0ZUl0ZW1EaXNwYXRjaH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvQ2FyZD5cblx0XHQpO1xuXHR9XG59XG5cblRvZG9Db250YWluZXIucHJvcFR5cGVzID0ge1xuXHRiYXNlSXRlbTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXHRpdGVtczogUHJvcFR5cGVzLm9iamVjdCxcblx0Y2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblx0bGlzdElEOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRuZXdJdGVtOiBQcm9wVHlwZXMuZnVuYyxcblx0Y2hhbmdlQmFzZUl0ZW06IFByb3BUeXBlcy5mdW5jLFxuXHRjb21wbGV0ZUl0ZW06IFByb3BUeXBlcy5mdW5jLFxuXHRkZWxldGVJdGVtOiBQcm9wVHlwZXMuZnVuYyxcblx0cmVvcmRlckl0ZW06IFByb3BUeXBlcy5mdW5jLFxuXHRjaGFuZ2VDb2xvcjogUHJvcFR5cGVzLmZ1bmMsXG5cdHVwZGF0ZUl0ZW06IFByb3BUeXBlcy5mdW5jLFxuXHR1cGRhdGVEYXRhOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHsgaXRlbXMsIGJhc2VJdGVtIH0pIHtcblx0cmV0dXJuIHsgaXRlbXMsIGJhc2VJdGVtIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuXHRyZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKFxuXHRcdHtcblx0XHRcdG5ld0l0ZW0sXG5cdFx0XHRjaGFuZ2VCYXNlSXRlbSxcblx0XHRcdGNvbXBsZXRlSXRlbSxcblx0XHRcdGRlbGV0ZUl0ZW0sXG5cdFx0XHRyZW9yZGVySXRlbSxcblx0XHRcdGNoYW5nZUNvbG9yLFxuXHRcdFx0dXBkYXRlSXRlbSxcblx0XHRcdHVwZGF0ZURhdGE6IHVwZGF0ZURhdGFUaHJvdHRsZWRcblx0XHR9LFxuXHRcdGRpc3BhdGNoXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVTaGVldCkoXG5cdGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRvZG9Db250YWluZXIpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7OztBQUxBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTtBQUZBOzs7QUFJQTtBQUFBO0FBREE7QUFKQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBRUE7QUFHQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7Ozs7QUFJQTtBQUNBOzs7O0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVhBO0FBYUE7QUFiQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFSQTtBQVlBO0FBWkE7QUFDQTs7Ozs7QUExR0E7QUFDQTtBQXVIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7QUFHQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUEE7QUFhQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==