webpackHotUpdate(5,{

/***/ 811:
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

var _List = __webpack_require__(653);

var _TextField = __webpack_require__(788);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItemTextArea.js";


var ListItemTextArea = function (_Component) {
	(0, _inherits3.default)(ListItemTextArea, _Component);

	function ListItemTextArea(props) {
		(0, _classCallCheck3.default)(this, ListItemTextArea);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ListItemTextArea.__proto__ || (0, _getPrototypeOf2.default)(ListItemTextArea)).call(this, props));

		_this.state = {
			editMode: false,
			editText: ''
		};

		_this.TextContainer = _this.TextContainer.bind(_this);
		_this.doubleClickHandler = _this.doubleClickHandler.bind(_this);
		_this.EditItem = _this.EditItem.bind(_this);
		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleBlur = _this.handleBlur.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(ListItemTextArea, [{
		key: "nonEditItem",
		value: function nonEditItem(props) {
			return _react2.default.createElement(_List.ListItemText, {
				primary: props.primary,
				secondary: props.secondary,
				style: { color: props.textColor, padding: '0px', wordWrap: 'break-word' },
				onDoubleClick: props.doubleClickHandler,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			});
		}
	}, {
		key: "EditItem",
		value: function EditItem(props) {
			return _react2.default.createElement("form", {
				onSubmit: this.handleBlur,
				style: { width: '100%' },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, _react2.default.createElement(_TextField2.default, {
				value: this.state.editText,
				onChange: this.handleChange,
				onBlur: this.handleBlur,
				fullWidth: true,
				autoFocus: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 39
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
			console.log(this.state.editText);
			console.log('blurred');
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
						lineNumber: 65
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
						lineNumber: 71
					}
				});
			}
		}
	}, {
		key: "doubleClickHandler",
		value: function doubleClickHandler() {
			console.log("double click!!!");
			var text = this.props.rawText;
			this.setState({ editText: text, editMode: true });
		}
	}, {
		key: "render",
		value: function render() {
			var TextContainer = this.TextContainer;
			return _react2.default.createElement(TextContainer, {
				doubleClickHandler: this.doubleClickHandler,
				editMode: this.state.editMode,
				primary: this.props.primary,
				secondary: this.props.secondary,
				textColor: this.props.textColor,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 90
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iYjRiOWZjYTUwMWY0MDA2NTNlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RJdGVtVGV4dEFyZWEuanM/Yjk1N2Y4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGlzdEl0ZW0sIExpc3RJdGVtVGV4dCB9IGZyb20gXCJtYXRlcmlhbC11aS9MaXN0XCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJtYXRlcmlhbC11aS9UZXh0RmllbGRcIjtcblxuXG5jbGFzcyBMaXN0SXRlbVRleHRBcmVhIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5zdGF0ZT17XG5cdFx0XHRlZGl0TW9kZTpmYWxzZSxcblx0XHRcdGVkaXRUZXh0OicnXG5cdFx0fVxuXG5cdFx0dGhpcy5UZXh0Q29udGFpbmVyID0gdGhpcy5UZXh0Q29udGFpbmVyLmJpbmQodGhpcylcblx0XHR0aGlzLmRvdWJsZUNsaWNrSGFuZGxlciA9IHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVyLmJpbmQodGhpcylcblx0XHR0aGlzLkVkaXRJdGVtID0gdGhpcy5FZGl0SXRlbS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5oYW5kbGVCbHVyID0gdGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcylcblx0fVxuXG5cdG5vbkVkaXRJdGVtKHByb3BzKXtcblx0XHRcdFx0cmV0dXJuKFxuXHRcdFx0PExpc3RJdGVtVGV4dFxuXHRcdFx0cHJpbWFyeT17cHJvcHMucHJpbWFyeX1cblx0XHRcdHNlY29uZGFyeT17cHJvcHMuc2Vjb25kYXJ5fVxuXHRcdFx0c3R5bGU9e3tjb2xvcjpwcm9wcy50ZXh0Q29sb3IscGFkZGluZzonMHB4Jywgd29yZFdyYXAgOiAnYnJlYWstd29yZCd9fVxuXHRcdFx0b25Eb3VibGVDbGljaz17cHJvcHMuZG91YmxlQ2xpY2tIYW5kbGVyfVxuXHRcdFx0Lz5cblx0XHRcdClcblx0fVxuXG5cdEVkaXRJdGVtKHByb3BzKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8Zm9ybVxuXHRcdFx0b25TdWJtaXQ9e3RoaXMuaGFuZGxlQmx1cn1cblx0XHRcdHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cblx0XHRcdD5cblx0XHRcdDxUZXh0RmllbGRcblx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmVkaXRUZXh0fVxuXHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuXHRcdFx0b25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG5cdFx0XHRmdWxsV2lkdGg9e3RydWV9XG5cdFx0XHRhdXRvRm9jdXM9e3RydWV9XG5cdFx0XHQvPlxuXHRcdFx0PC9mb3JtPlxuXHRcdFx0KVxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHtlZGl0VGV4dDpldmVudC50YXJnZXQudmFsdWV9KVxuXHR9XG5cblx0aGFuZGxlQmx1cihldmVudCl7XG5cdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS5lZGl0VGV4dClcblx0XHRjb25zb2xlLmxvZygnYmx1cnJlZCcpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZWRpdE1vZGU6ZmFsc2V9KVxuXHR9XG5cblx0VGV4dENvbnRhaW5lcihwcm9wcyl7XG5cdFx0dmFyIE5vbkVkaXRJdGVtID0gdGhpcy5ub25FZGl0SXRlbVxuXHRcdHZhciBFZGl0SXRlbSA9IHRoaXMuRWRpdEl0ZW1cblx0XHRpZihwcm9wcy5lZGl0TW9kZSl7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHQ8RWRpdEl0ZW1cblxuXHRcdFx0Lz5cblx0XHRcdClcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8Tm9uRWRpdEl0ZW1cblx0XHRcdFx0ZG91YmxlQ2xpY2tIYW5kbGVyPXtwcm9wcy5kb3VibGVDbGlja0hhbmRsZXJ9XG5cdFx0XHRcdHByaW1hcnk9e3Byb3BzLnByaW1hcnl9XG5cdFx0XHRcdHNlY29uZGFyeT17cHJvcHMuc2Vjb25kYXJ5fVxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnByb3BzLnRleHRDb2xvcixwYWRkaW5nOicwcHgnLCB3b3JkV3JhcCA6ICdicmVhay13b3JkJ319XG5cdFx0XHRcdC8+XG5cdFx0XHQpXG5cdFx0fVxuXHR9XG5cblx0ZG91YmxlQ2xpY2tIYW5kbGVyKCl7XG5cdFx0Y29uc29sZS5sb2coXCJkb3VibGUgY2xpY2shISFcIilcblx0XHR2YXIgdGV4dCA9IHRoaXMucHJvcHMucmF3VGV4dFxuXHRcdHRoaXMuc2V0U3RhdGUoe2VkaXRUZXh0OnRleHQsIGVkaXRNb2RlOnRydWV9KVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0dmFyIFRleHRDb250YWluZXIgPSB0aGlzLlRleHRDb250YWluZXJcblx0XHRyZXR1cm4oXG5cdFx0XHQ8VGV4dENvbnRhaW5lclxuXHRcdFx0ZG91YmxlQ2xpY2tIYW5kbGVyPXt0aGlzLmRvdWJsZUNsaWNrSGFuZGxlcn1cblx0XHRcdGVkaXRNb2RlPXt0aGlzLnN0YXRlLmVkaXRNb2RlfVxuXHRcdFx0cHJpbWFyeT17dGhpcy5wcm9wcy5wcmltYXJ5fVxuXHRcdFx0c2Vjb25kYXJ5PXt0aGlzLnByb3BzLnNlY29uZGFyeX1cblx0XHRcdHRleHRDb2xvcj17dGhpcy5wcm9wcy50ZXh0Q29sb3J9XG5cdFx0XHQvPlxuXHRcdFx0KX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW1UZXh0QXJlYVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SXRlbVRleHRBcmVhLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFKQTtBQU9BO0FBUEE7QUFDQTs7OztBQVFBO0FBRUE7QUFDQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFBQTs7QUFMQTtBQVNBO0FBVEE7QUFDQTs7OztBQVVBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFJQTtBQUpBO0FBQUE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFPQTtBQVBBO0FBQ0E7QUFPQTs7OztBQUdBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFMQTtBQU9BO0FBUEE7QUFDQTs7Ozs7QUFTQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==