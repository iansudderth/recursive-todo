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

var _List = __webpack_require__(794);

var _List2 = _interopRequireDefault(_List);

var _reactRedux = __webpack_require__(674);

var _actions = __webpack_require__(662);

var _redux = __webpack_require__(654);

var _ListHeader = __webpack_require__(946);

var _ListHeader2 = _interopRequireDefault(_ListHeader);

var _Card = __webpack_require__(999);

var _Card2 = _interopRequireDefault(_Card);

var _lodash = __webpack_require__(655);

var _lodash2 = _interopRequireDefault(_lodash);

var _styles = __webpack_require__(645);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/containers/TodoContainer.js";
// import style from "../components/ListItem/style.css";


var styleSheet = (0, _styles.createStyleSheet)("CardContainer", function (theme) {
	return {
		card: {
			margin: 0
		},
		'@media (min-width:768px)': {
			card: {
				margin: 16
			}
		}
	};
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
			var updateDataDispatch = this.updateDataDispatch;
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
			var updateDataDispatch = this.updateDataDispatch;
			return function () {
				deleteItemDispatch(id);
			};
		}
	}, {
		key: "completeItemComposer",
		value: function completeItemComposer(id) {
			var completeItemDispatch = this.props.completeItem;
			var updateDataDispatch = this.updateDataDispatch;
			return function () {
				completeItemDispatch(id);
			};
		}
	}, {
		key: "reorderItemComposer",
		value: function reorderItemComposer(id, oldIndex, newIndex) {
			var reorderItemDispatch = this.props.reorderItem;
			var updateDataDispatch = this.updateDataDispatch;
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
			var updateDataDispatch = this.updateDataDispatch;
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
		value: function componentDidUpdate(prevProps, prevState) {
			this.updateDataDispatch();
		}
	}, {
		key: "render",
		value: function render() {
			var currentItem = this.props.items[this.props.baseItem];
			var parentItem = this.props.items[currentItem.parent];
			return _react2.default.createElement(_Card2.default, { className: this.props.classes.card, __source: {
					fileName: _jsxFileName,
					lineNumber: 140
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
					lineNumber: 141
				}
			}), _react2.default.createElement(_List2.default, {
				list: this.props.items,
				baseItem: this.props.baseItem,
				changeBaseComposer: this.changeBaseComposer,
				deleteItemComposer: this.deleteItemComposer,
				completeItemComposer: this.completeItemComposer,
				reorderItemComposer: this.reorderItemComposer,
				changeColorComposer: this.changeColorComposer,
				updateItem: this.updateItemDispatch,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 154
				}
			}));
		}
	}]);

	return TodoContainer;
}(_react.Component);

function mapStateToProps(_ref) {
	var items = _ref.items,
	    baseItem = _ref.baseItem;

	return { items: items, baseItem: baseItem };
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({ newItem: _actions.newItem, changeBaseItem: _actions.changeBaseItem, completeItem: _actions.completeItem, deleteItem: _actions.deleteItem, reorderItem: _actions.reorderItem, changeColor: _actions.changeColor, updateItem: _actions.updateItem, updateData: _actions.updateDataThrottled }, dispatch);
}

exports.default = (0, _styles.withStyles)(styleSheet)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TodoContainer));

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/containers/TodoContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/containers/TodoContainer.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40ODJkZDA2ZWQzOTVmNzg1NTJkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIuanM/YjcxMmFiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1xuXHRuZXdJdGVtLFxuXHRjaGFuZ2VCYXNlSXRlbSxcblx0Y29tcGxldGVJdGVtLFxuXHRkZWxldGVJdGVtLFxuXHRyZW9yZGVySXRlbSxcblx0Y2hhbmdlQ29sb3IsXG5cdHVwZGF0ZUl0ZW0sXG5cdHVwZGF0ZURhdGEsXG5cdHVwZGF0ZURhdGFUaHJvdHRsZWRcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RJdGVtL3N0eWxlLmNzc1wiO1xuaW1wb3J0IExpc3RIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdEhlYWRlci5qc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIm1hdGVyaWFsLXVpL0NhcmRcIjtcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlU2hlZXQgfSBmcm9tIFwibWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBjcmVhdGVTdHlsZVNoZWV0KFwiQ2FyZENvbnRhaW5lclwiLCB0aGVtZSA9PiAoe1xuXHRjYXJkOntcblx0XHRtYXJnaW46MFxuXHR9LFxuXHQnQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpJzp7XG5cdFx0Y2FyZDp7XG5cdFx0XHRtYXJnaW46MTZcblx0XHR9XG5cdH1cbn0pKTtcblxuXG5jbGFzcyBUb2RvQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5ld0l0ZW06IFwiXCJcblx0XHR9O1xuXHRcdHRoaXMuaW5wdXRVcGRhdGUgPSB0aGlzLmlucHV0VXBkYXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5uZXdJdGVtQWN0aW9uID0gdGhpcy5uZXdJdGVtQWN0aW9uLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jaGFuZ2VCYXNlQ29tcG9zZXIgPSB0aGlzLmNoYW5nZUJhc2VDb21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY29tcGxldGVJdGVtQ29tcG9zZXIgPSB0aGlzLmNvbXBsZXRlSXRlbUNvbXBvc2VyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5kZWxldGVJdGVtQ29tcG9zZXIgPSB0aGlzLmRlbGV0ZUl0ZW1Db21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVvcmRlckl0ZW1Db21wb3NlciA9IHRoaXMucmVvcmRlckl0ZW1Db21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZ2VuZXJhdGVDb21wbGV0ZSA9IHRoaXMuZ2VuZXJhdGVDb21wbGV0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2hhbmdlQ29sb3JDb21wb3NlciA9IHRoaXMuY2hhbmdlQ29sb3JDb21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudXBkYXRlSXRlbURpc3BhdGNoID0gdGhpcy51cGRhdGVJdGVtRGlzcGF0Y2guYmluZCh0aGlzKTtcblx0XHR0aGlzLnVwZGF0ZURhdGFEaXNwYXRjaCA9IHRoaXMudXBkYXRlRGF0YURpc3BhdGNoLmJpbmQodGhpcyk7XG5cdH1cblxuXHRpbnB1dFVwZGF0ZShldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBuZXdJdGVtOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG5cdH1cblxuXHRuZXdJdGVtQWN0aW9uKGNvbnRlbnQpIHtcblx0XHR0aGlzLnByb3BzLm5ld0l0ZW0oY29udGVudCwgdGhpcy5wcm9wcy5iYXNlSXRlbSk7XG5cdFx0dmFyIHVwZGF0ZURhdGFEaXNwYXRjaCA9IHRoaXMudXBkYXRlRGF0YURpc3BhdGNoXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG5ld0l0ZW06IFwiXCIgfSwgKCkgPT4ge1xuXG5cdFx0fSk7XG5cdH1cblxuXHRjaGFuZ2VCYXNlQ29tcG9zZXIoaWQpIHtcblx0XHR2YXIgY2hhbmdlQmFzZUl0ZW0gPSB0aGlzLnByb3BzLmNoYW5nZUJhc2VJdGVtO1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdGNoYW5nZUJhc2VJdGVtKGlkKTtcblx0XHR9O1xuXHR9XG5cblx0ZGVsZXRlSXRlbUNvbXBvc2VyKGlkKSB7XG5cdFx0bGV0IGRlbGV0ZUl0ZW1EaXNwYXRjaCA9IHRoaXMucHJvcHMuZGVsZXRlSXRlbTtcblx0XHRsZXQgdXBkYXRlRGF0YURpc3BhdGNoID0gdGhpcy51cGRhdGVEYXRhRGlzcGF0Y2hcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRkZWxldGVJdGVtRGlzcGF0Y2goaWQpO1xuXG5cdFx0fTtcblx0fVxuXG5cdGNvbXBsZXRlSXRlbUNvbXBvc2VyKGlkKSB7XG5cdFx0bGV0IGNvbXBsZXRlSXRlbURpc3BhdGNoID0gdGhpcy5wcm9wcy5jb21wbGV0ZUl0ZW07XG5cdFx0bGV0IHVwZGF0ZURhdGFEaXNwYXRjaCA9IHRoaXMudXBkYXRlRGF0YURpc3BhdGNoXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcGxldGVJdGVtRGlzcGF0Y2goaWQpO1xuXG5cdFx0fTtcblx0fVxuXG5cdHJlb3JkZXJJdGVtQ29tcG9zZXIoaWQsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuXHRcdGxldCByZW9yZGVySXRlbURpc3BhdGNoID0gdGhpcy5wcm9wcy5yZW9yZGVySXRlbTtcblx0XHRsZXQgdXBkYXRlRGF0YURpc3BhdGNoID0gdGhpcy51cGRhdGVEYXRhRGlzcGF0Y2g7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVvcmRlckl0ZW1EaXNwYXRjaChpZCwgb2xkSW5kZXgsIG5ld0luZGV4KTtcblxuXHRcdH07XG5cdH1cblxuXHRnZW5lcmF0ZUNvbXBsZXRlKCkge1xuXHRcdHZhciBjb21wbGV0ZUNvdW50ID0gdGhpcy5wcm9wcy5pdGVtc1t0aGlzLnByb3BzLmJhc2VJdGVtXVxuXHRcdFx0LmNvbXBsZXRlQ2hpbGRyZW4ubGVuZ3RoO1xuXHRcdHZhciB0b3RhbENvdW50ID1cblx0XHRcdHRoaXMucHJvcHMuaXRlbXNbdGhpcy5wcm9wcy5iYXNlSXRlbV0uaW5jb21wbGV0ZUNoaWxkcmVuLmxlbmd0aCArXG5cdFx0XHRjb21wbGV0ZUNvdW50O1xuXHRcdHJldHVybiBgKCAke2NvbXBsZXRlQ291bnR9IC8gJHt0b3RhbENvdW50fSBDb21wbGV0ZSApYDtcblx0fVxuXG5cdGNoYW5nZUNvbG9yQ29tcG9zZXIoaWQsIGNvbG9yKSB7XG5cdFx0bGV0IGNoYW5nZUNvbG9yRGlzcGF0Y2ggPSB0aGlzLnByb3BzLmNoYW5nZUNvbG9yXG5cdFx0bGV0IHVwZGF0ZURhdGFEaXNwYXRjaCA9IHRoaXMudXBkYXRlRGF0YURpc3BhdGNoO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKXtcblx0XHRcdGNoYW5nZUNvbG9yRGlzcGF0Y2goaWQsIGNvbG9yKVxuXG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlSXRlbURpc3BhdGNoKGlkLCBuZXdUZXh0KXtcblx0XHR0aGlzLnByb3BzLnVwZGF0ZUl0ZW0oaWQsIG5ld1RleHQpXG5cblx0fVxuXG5cdHVwZGF0ZURhdGFEaXNwYXRjaCgpe1xuXHRcdGNvbnN0IGlkID0gdGhpcy5wcm9wcy5saXN0SURcblx0XHRjb25zdCBuZXdTdGF0ZSA9IHtcblx0XHRcdGl0ZW1zOnRoaXMucHJvcHMuaXRlbXMsXG5cdFx0XHRiYXNlSXRlbTp0aGlzLnByb3BzLmJhc2VJdGVtXG5cdFx0XHR9XG5cdFx0dGhpcy5wcm9wcy51cGRhdGVEYXRhKGlkLCB7aWQsIG5ld1N0YXRlfSlcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuXHRcdHRoaXMudXBkYXRlRGF0YURpc3BhdGNoKClcblx0fVxuXG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIGN1cnJlbnRJdGVtID0gdGhpcy5wcm9wcy5pdGVtc1t0aGlzLnByb3BzLmJhc2VJdGVtXTtcblx0XHR2YXIgcGFyZW50SXRlbSA9IHRoaXMucHJvcHMuaXRlbXNbY3VycmVudEl0ZW0ucGFyZW50XTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PENhcmQgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzZXMuY2FyZH0+XG5cdFx0XHRcdDxMaXN0SGVhZGVyXG5cdFx0XHRcdFx0YmFzZUl0ZW09e3RoaXMucHJvcHMuYmFzZUl0ZW19XG5cdFx0XHRcdFx0YmFzZUl0ZW1UZXh0PXtjdXJyZW50SXRlbS5jb250ZW50fVxuXHRcdFx0XHRcdGN1cnJlbnRQYXJlbnQ9e2N1cnJlbnRJdGVtLnBhcmVudH1cblx0XHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3RoaXMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXIgPXt0aGlzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdFx0Y291bnRlclRleHQ9e3RoaXMuZ2VuZXJhdGVDb21wbGV0ZSgpfVxuXHRcdFx0XHRcdGl0ZW1zPXt0aGlzLnByb3BzLml0ZW1zfVxuXHRcdFx0XHRcdG5ld0l0ZW1BY3Rpb249e3RoaXMubmV3SXRlbUFjdGlvbn1cblx0XHRcdFx0XHR1cGRhdGVJdGVtPXt0aGlzLnVwZGF0ZUl0ZW1EaXNwYXRjaH1cblx0XHRcdFx0XHR1cGRhdGVEYXRhPXt0aGlzLnVwZGF0ZURhdGFEaXNwYXRjaH1cblx0XHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17dGhpcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PExpc3Rcblx0XHRcdFx0XHRsaXN0PXt0aGlzLnByb3BzLml0ZW1zfVxuXHRcdFx0XHRcdGJhc2VJdGVtPXt0aGlzLnByb3BzLmJhc2VJdGVtfVxuXHRcdFx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17dGhpcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRcdFx0ZGVsZXRlSXRlbUNvbXBvc2VyPXt0aGlzLmRlbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17dGhpcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0XHRyZW9yZGVySXRlbUNvbXBvc2VyPXt0aGlzLnJlb3JkZXJJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3NlciA9e3RoaXMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0XHR1cGRhdGVJdGVtPXt0aGlzLnVwZGF0ZUl0ZW1EaXNwYXRjaH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvQ2FyZD5cblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IGl0ZW1zLCBiYXNlSXRlbSB9KSB7XG5cdHJldHVybiB7IGl0ZW1zLCBiYXNlSXRlbX07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuXHRyZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKFxuXHRcdHsgbmV3SXRlbSwgY2hhbmdlQmFzZUl0ZW0sIGNvbXBsZXRlSXRlbSwgZGVsZXRlSXRlbSwgcmVvcmRlckl0ZW0sIGNoYW5nZUNvbG9yLCB1cGRhdGVJdGVtLCB1cGRhdGVEYXRhOnVwZGF0ZURhdGFUaHJvdHRsZWR9LFxuXHRcdGRpc3BhdGNoXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVTaGVldCkoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVG9kb0NvbnRhaW5lcikpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7OztBQUxBO0FBQ0E7QUFDQTtBQUlBOzs7QUFJQTtBQUZBOzs7QUFJQTtBQUFBO0FBREE7QUFKQTtBQURBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7O0FBR0E7QUFBQTtBQUVBO0FBR0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7QUFFQTtBQUNBOzs7O0FBS0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7Ozs7QUFHQTtBQUVBOzs7O0FBS0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWEE7QUFhQTtBQWJBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVJBO0FBWUE7QUFaQTtBQUNBOzs7OztBQXpIQTtBQUNBO0FBc0lBO0FBQUE7QUFBQTtBQUNBO0FBQUE7OztBQUdBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==