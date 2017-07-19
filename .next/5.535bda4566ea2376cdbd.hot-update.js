webpackHotUpdate(5,{

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(57);

var _extends3 = _interopRequireDefault(_extends2);

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

var _List = __webpack_require__(648);

var _TextField = __webpack_require__(685);

var _TextField2 = _interopRequireDefault(_TextField);

var _reactTouch = __webpack_require__(863);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItemTextArea.js";


var ListItemTextArea = function (_Component) {
	(0, _inherits3.default)(ListItemTextArea, _Component);

	function ListItemTextArea(props) {
		(0, _classCallCheck3.default)(this, ListItemTextArea);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ListItemTextArea.__proto__ || (0, _getPrototypeOf2.default)(ListItemTextArea)).call(this, props));

		_this.state = {
			editMode: false,
			editText: props.rawText
		};

		_this.TextContainer = _this.TextContainer.bind(_this);
		_this.doubleClickHandler = _this.doubleClickHandler.bind(_this);
		_this.EditItem = _this.EditItem.bind(_this);
		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleBlur = _this.handleBlur.bind(_this);
		_this.nonEditItem = _this.nonEditItem.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(ListItemTextArea, [{
		key: "nonEditItem",
		value: function nonEditItem(props) {
			var lineStyle = this.props.complete ? { textDecoration: 'line-through' } : {};
			var hold = (0, _reactTouch.defineHold)({ updateEvery: 50, holdFor: 500 });
			return _react2.default.createElement(_reactTouch.Holdable, {
				config: hold,
				onHoldComplete: props.doubleClickHandler,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, _react2.default.createElement(_List.ListItemText, {
				primary: _react2.default.createElement("span", {
					style: (0, _extends3.default)({ color: this.props.textColor }, lineStyle, { wordBreak: 'break-all' }),
					__source: {
						fileName: _jsxFileName,
						lineNumber: 34
					}
				}, props.primary),
				secondary: props.secondary,
				style: { color: props.textColor, padding: '0px', wordWrap: 'break-word' },
				onDoubleClick: props.doubleClickHandler,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}));
		}
	}, {
		key: "EditItem",
		value: function EditItem(props) {
			return _react2.default.createElement("form", {
				onSubmit: this.handleBlur,
				style: { width: '100%' },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement(_TextField2.default, {
				value: this.state.editText,
				onChange: this.handleChange,
				onBlur: this.handleBlur,
				fullWidth: true,
				autoFocus: true,
				InputProps: { style: {
						color: this.props.textColor
					}
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}));
		}
	}, {
		key: "handleChange",
		value: function handleChange(event) {
			this.setState({ editText: event.target.value });
		}
	}, {
		key: "handleBlur",
		value: function handleBlur(event) {
			this.props.updateItem(this.props.id, this.state.editText);
			this.setState({ editMode: false });
		}
	}, {
		key: "TextContainer",
		value: function TextContainer(props) {
			var NonEditItem = this.nonEditItem;
			var EditItem = this.EditItem;
			if (props.editMode) {
				return _react2.default.createElement(EditItem, {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 82
					}
				});
			} else {
				return _react2.default.createElement(NonEditItem, {
					doubleClickHandler: props.doubleClickHandler,
					primary: props.primary,
					secondary: props.secondary,
					style: { color: props.textColor, padding: '0px', wordWrap: 'break-word' },
					__source: {
						fileName: _jsxFileName,
						lineNumber: 88
					}
				});
			}
		}
	}, {
		key: "doubleClickHandler",
		value: function doubleClickHandler() {
			this.setState({ editMode: true });
		}
	}, {
		key: "render",
		value: function render() {
			var TextContainer = this.TextContainer;
			return _react2.default.createElement(TextContainer, {
				doubleClickHandler: this.doubleClickHandler,
				editMode: this.state.editMode,
				primary: this.state.editText,
				secondary: this.props.secondary,
				textColor: this.props.textColor,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 105
				}
			});
		}
	}]);

	return ListItemTextArea;
}(_react.Component);

exports.default = ListItemTextArea;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItemTextArea.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItemTextArea.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41MzViZGE0NTY2ZWEyMzc2Y2RiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RJdGVtVGV4dEFyZWEuanM/M2RiYjJkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGlzdEl0ZW0sIExpc3RJdGVtVGV4dCB9IGZyb20gXCJtYXRlcmlhbC11aS9MaXN0XCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJtYXRlcmlhbC11aS9UZXh0RmllbGRcIjtcbmltcG9ydCB7IEhvbGRhYmxlLCBkZWZpbmVIb2xkIH0gZnJvbSAncmVhY3QtdG91Y2gnO1xuXG5cbmNsYXNzIExpc3RJdGVtVGV4dEFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLnN0YXRlPXtcblx0XHRcdGVkaXRNb2RlOmZhbHNlLFxuXHRcdFx0ZWRpdFRleHQ6cHJvcHMucmF3VGV4dFxuXHRcdH1cblxuXHRcdHRoaXMuVGV4dENvbnRhaW5lciA9IHRoaXMuVGV4dENvbnRhaW5lci5iaW5kKHRoaXMpXG5cdFx0dGhpcy5kb3VibGVDbGlja0hhbmRsZXIgPSB0aGlzLmRvdWJsZUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpXG5cdFx0dGhpcy5FZGl0SXRlbSA9IHRoaXMuRWRpdEl0ZW0uYmluZCh0aGlzKVxuXHRcdHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdHRoaXMuaGFuZGxlQmx1ciA9IHRoaXMuaGFuZGxlQmx1ci5iaW5kKHRoaXMpXG5cdFx0dGhpcy5ub25FZGl0SXRlbSA9IHRoaXMubm9uRWRpdEl0ZW0uYmluZCh0aGlzKVxuXHR9XG5cblx0bm9uRWRpdEl0ZW0ocHJvcHMpe1xuXHRcdHZhciBsaW5lU3R5bGUgPSB0aGlzLnByb3BzLmNvbXBsZXRlID8ge3RleHREZWNvcmF0aW9uOidsaW5lLXRocm91Z2gnfSA6IHt9XG5cdFx0Y29uc3QgaG9sZCA9IGRlZmluZUhvbGQoe3VwZGF0ZUV2ZXJ5OiA1MCwgaG9sZEZvcjogNTAwfSk7XG5cdFx0XHRcdHJldHVybihcblx0XHRcdDxIb2xkYWJsZVxuXHRcdFx0Y29uZmlnPXtob2xkfVxuXHRcdFx0b25Ib2xkQ29tcGxldGU9e3Byb3BzLmRvdWJsZUNsaWNrSGFuZGxlcn1cblx0XHRcdD5cblx0XHRcdDxMaXN0SXRlbVRleHRcblx0XHRcdHByaW1hcnk9eyhcblx0XHRcdFx0PHNwYW5cblx0XHRcdFx0c3R5bGU9e3tjb2xvcjp0aGlzLnByb3BzLnRleHRDb2xvciwgLi4ubGluZVN0eWxlLCB3b3JkQnJlYWs6J2JyZWFrLWFsbCd9fVxuXHRcdFx0XHQ+e3Byb3BzLnByaW1hcnl9PC9zcGFuPlxuXHRcdFx0XHQpfVxuXHRcdFx0c2Vjb25kYXJ5PXtwcm9wcy5zZWNvbmRhcnl9XG5cdFx0XHRzdHlsZT17e2NvbG9yOnByb3BzLnRleHRDb2xvcixwYWRkaW5nOicwcHgnLCB3b3JkV3JhcCA6ICdicmVhay13b3JkJ319XG5cdFx0XHRvbkRvdWJsZUNsaWNrPXtwcm9wcy5kb3VibGVDbGlja0hhbmRsZXJ9XG5cdFx0XHQvPlxuXHRcdFx0PC9Ib2xkYWJsZT5cblx0XHRcdClcblx0fVxuXG5cdEVkaXRJdGVtKHByb3BzKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8Zm9ybVxuXHRcdFx0b25TdWJtaXQ9e3RoaXMuaGFuZGxlQmx1cn1cblx0XHRcdHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cblx0XHRcdD5cblx0XHRcdDxUZXh0RmllbGRcblx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmVkaXRUZXh0fVxuXHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuXHRcdFx0b25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG5cdFx0XHRmdWxsV2lkdGg9e3RydWV9XG5cdFx0XHRhdXRvRm9jdXM9e3RydWV9XG5cdFx0XHRJbnB1dFByb3BzPXt7c3R5bGU6e1xuXHRcdFx0XHRcdGNvbG9yOnRoaXMucHJvcHMudGV4dENvbG9yXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0XHQpXG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe2VkaXRUZXh0OmV2ZW50LnRhcmdldC52YWx1ZX0pXG5cdH1cblxuXHRoYW5kbGVCbHVyKGV2ZW50KXtcblx0XHR0aGlzLnByb3BzLnVwZGF0ZUl0ZW0odGhpcy5wcm9wcy5pZCwgdGhpcy5zdGF0ZS5lZGl0VGV4dClcblx0XHR0aGlzLnNldFN0YXRlKHtlZGl0TW9kZTpmYWxzZX0pXG5cdH1cblxuXHRUZXh0Q29udGFpbmVyKHByb3BzKXtcblx0XHR2YXIgTm9uRWRpdEl0ZW0gPSB0aGlzLm5vbkVkaXRJdGVtXG5cdFx0dmFyIEVkaXRJdGVtID0gdGhpcy5FZGl0SXRlbVxuXHRcdGlmKHByb3BzLmVkaXRNb2RlKXtcblx0XHRcdHJldHVybihcblx0XHRcdDxFZGl0SXRlbVxuXG5cdFx0XHQvPlxuXHRcdFx0KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxOb25FZGl0SXRlbVxuXHRcdFx0XHRkb3VibGVDbGlja0hhbmRsZXI9e3Byb3BzLmRvdWJsZUNsaWNrSGFuZGxlcn1cblx0XHRcdFx0cHJpbWFyeT17cHJvcHMucHJpbWFyeX1cblx0XHRcdFx0c2Vjb25kYXJ5PXtwcm9wcy5zZWNvbmRhcnl9XG5cdFx0XHRcdHN0eWxlPXt7Y29sb3I6cHJvcHMudGV4dENvbG9yLHBhZGRpbmc6JzBweCcsIHdvcmRXcmFwIDogJ2JyZWFrLXdvcmQnfX1cblx0XHRcdFx0Lz5cblx0XHRcdClcblx0XHR9XG5cdH1cblxuXHRkb3VibGVDbGlja0hhbmRsZXIoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtlZGl0TW9kZTp0cnVlfSlcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHZhciBUZXh0Q29udGFpbmVyID0gdGhpcy5UZXh0Q29udGFpbmVyXG5cdFx0cmV0dXJuKFxuXHRcdFx0PFRleHRDb250YWluZXJcblx0XHRcdGRvdWJsZUNsaWNrSGFuZGxlcj17dGhpcy5kb3VibGVDbGlja0hhbmRsZXJ9XG5cdFx0XHRlZGl0TW9kZT17dGhpcy5zdGF0ZS5lZGl0TW9kZX1cblx0XHRcdHByaW1hcnk9e3RoaXMuc3RhdGUuZWRpdFRleHR9XG5cdFx0XHRzZWNvbmRhcnk9e3RoaXMucHJvcHMuc2Vjb25kYXJ5fVxuXHRcdFx0dGV4dENvbG9yPXt0aGlzLnByb3BzLnRleHRDb2xvcn1cblx0XHRcdC8+XG5cdFx0XHQpfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbVRleHRBcmVhXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RJdGVtVGV4dEFyZWEuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUtBO0FBQ0E7O0FBREE7QUFFQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBUkE7QUFZQTtBQVpBO0FBQ0E7Ozs7QUFhQTtBQUVBO0FBQ0E7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTs7QUFOQTtBQWNBO0FBZEE7QUFDQTs7OztBQWVBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBSUE7QUFKQTtBQUFBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBT0E7QUFQQTtBQUNBO0FBT0E7Ozs7QUFHQTtBQUFBOzs7O0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFMQTtBQU9BO0FBUEE7QUFDQTs7Ozs7QUFTQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==