webpackHotUpdate(5,{

/***/ 675:
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

var _reactSortableHoc = __webpack_require__(674);

var _List = __webpack_require__(653);

var _Checkbox = __webpack_require__(761);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _IconButton = __webpack_require__(678);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Reorder = __webpack_require__(773);

var _Reorder2 = _interopRequireDefault(_Reorder);

var _Brightness = __webpack_require__(774);

var _Brightness2 = _interopRequireDefault(_Brightness);

var _DeleteForever = __webpack_require__(775);

var _DeleteForever2 = _interopRequireDefault(_DeleteForever);

var _Settings = __webpack_require__(776);

var _Settings2 = _interopRequireDefault(_Settings);

var _FormatListBulleted = __webpack_require__(777);

var _FormatListBulleted2 = _interopRequireDefault(_FormatListBulleted);

var _colors = __webpack_require__(605);

var _Button = __webpack_require__(654);

var _Button2 = _interopRequireDefault(_Button);

var _Menu = __webpack_require__(778);

var _Menu2 = _interopRequireDefault(_Menu);

var _Typography = __webpack_require__(645);

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = __webpack_require__(682);

var _Divider2 = _interopRequireDefault(_Divider);

var _colorParser = __webpack_require__(783);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItem.js";
// import style from "./style.css";
// import PropTypes from 'prop-types'
// import _ from 'lodash';


var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (props) {
	return _react2.default.createElement("span", { style: props.completeStyle, __source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, _react2.default.createElement(_Reorder2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}));
});

var ColorMenu = function ColorMenu(props) {
	var colors = ['red', 'purple', 'lightBlue', 'teal', 'lightGreen', 'yellow', 'orange', 'pink'];
	return _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 30
		}
	}, colors.map(function (color, index) {

		var breakLine = index % 4 === 3 ? _react2.default.createElement("br", {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 33
			}
		}) : "";

		return _react2.default.createElement("span", { key: color + "-" + index, __source: {
				fileName: _jsxFileName,
				lineNumber: 36
			}
		}, _react2.default.createElement(_IconButton2.default, {
			style: { color: (0, _colorParser.primaryColorParser)(color) },
			onClick: props.clickHandler(color),
			__source: {
				fileName: _jsxFileName,
				lineNumber: 37
			}
		}, _react2.default.createElement(_Brightness2.default, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 41
			}
		})), breakLine);
	}));
};

var BaseListItem = function (_Component) {
	(0, _inherits3.default)(BaseListItem, _Component);

	function BaseListItem(props) {
		(0, _classCallCheck3.default)(this, BaseListItem);

		var _this = (0, _possibleConstructorReturn3.default)(this, (BaseListItem.__proto__ || (0, _getPrototypeOf2.default)(BaseListItem)).call(this, props));

		_this.item = _this.props.value;
		_this.incompleteListStyle = { backgroundColor: (0, _colorParser.primaryColorParser)(_this.item.color) };
		_this.completeListStyle = { backgroundColor: (0, _colorParser.fadedColorParser)(_this.item.color) };
		_this.listItemStyle = { backgroundColor: _this.props.bgColor };
		_this.completeGrey = _colors.grey[500];
		_this.completeLineStyle = _this.item.complete ? { color: _this.completeGrey, textDecoration: "line-through" } : {};
		_this.completeStyle = _this.item.complete ? { color: _this.completeGrey } : {};

		_this.state = {
			open: false,
			anchorEl: undefined
		};

		_this.completeDisplay = _this.completeDisplay.bind(_this);
		_this.content = _this.content.bind(_this);
		_this.openMenu = _this.openMenu.bind(_this);
		_this.closeMenu = _this.closeMenu.bind(_this);
		_this.colorItemClickHandler = _this.colorItemClickHandler.bind(_this);
		return _this;
	}
	// listItemStyle = this.item.complete
	// 	? this.completeListStyle
	// 	: this.incompleteListStyle;


	(0, _createClass3.default)(BaseListItem, [{
		key: "completeDisplay",
		value: function completeDisplay() {
			var completed = this.item.completeChildren.length;
			var total = completed + this.item.incompleteChildren.length;
			if (total === 0) {
				return "";
			} else {
				return _react2.default.createElement("span", {
					style: this.completeStyle,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 90
					}
				}, "( " + completed + " / " + total + " complete)");
			}
		}
	}, {
		key: "content",
		value: function content() {
			return _react2.default.createElement("span", { style: this.completeLineStyle, __source: {
					fileName: _jsxFileName,
					lineNumber: 99
				}
			}, this.item.content);
		}
	}, {
		key: "openMenu",
		value: function openMenu(event) {
			this.setState({ open: true, anchorEl: event.currentTarget });
		}
	}, {
		key: "closeMenu",
		value: function closeMenu() {
			this.setState({ open: false });
		}
	}, {
		key: "colorItemClickHandler",
		value: function colorItemClickHandler(colorName) {
			var close = this.closeMenu;
			var changeColor = this.props.changeColorComposer(this.item.id, colorName);
			return function () {
				console.log(colorName);
				changeColor();
			};
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_List.ListItem, { divider: true, style: this.listItemStyle, __source: {
					fileName: _jsxFileName,
					lineNumber: 124
				}
			}, _react2.default.createElement(DragHandle, {
				completeStyle: this.completeStyle,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 125
				}
			}), _react2.default.createElement(_Checkbox2.default, {
				checked: this.item.complete,
				onClick: this.props.completeItemComposer(this.item.id),
				style: this.completeStyle,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 128
				}
			}), _react2.default.createElement(_List.ListItemText, { primary: this.content(), secondary: this.completeDisplay(), __source: {
					fileName: _jsxFileName,
					lineNumber: 134
				}
			}), _react2.default.createElement(_IconButton2.default, {
				onClick: this.props.changeBaseComposer(this.item.id),
				style: this.completeStyle,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 136
				}
			}, _react2.default.createElement(_FormatListBulleted2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 140
				}
			})), _react2.default.createElement(_IconButton2.default, { onClick: this.openMenu, __source: {
					fileName: _jsxFileName,
					lineNumber: 142
				}
			}, _react2.default.createElement(_Settings2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 143
				}
			})), _react2.default.createElement(_Menu2.default, {
				id: this.item.id + "-menu",
				open: this.state.open,
				onRequestClose: this.closeMenu,
				anchorEl: this.state.anchorEl,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 145
				}
			}, _react2.default.createElement(_Typography2.default, {
				type: "subheading",
				align: 'center',
				style: { outline: 'none', paddingLeft: 16 },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 151
				}
			}, "Change Color"), _react2.default.createElement(_Divider2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 156
				}
			}), _react2.default.createElement(ColorMenu, {
				clickHandler: this.colorItemClickHandler,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 157
				}
			})));
		}
	}]);

	return BaseListItem;
}(_react.Component);

;

BaseListItem.propTypes = {};

exports.default = BaseListItem;

// <IconButton
// 	onClick={props.deleteItemComposer(item.id)}
// 	style={completeStyle}
// >
// 	<DeleteForever />
// </IconButton>

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItem.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kN2EzMTc1MjFjZTMzMjdiM2JjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RJdGVtLmpzP2Y1MWYwMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBTb3J0YWJsZUhhbmRsZSB9IGZyb20gXCJyZWFjdC1zb3J0YWJsZS1ob2NcIjtcbmltcG9ydCB7IExpc3RJdGVtLCBMaXN0SXRlbVRleHQgfSBmcm9tIFwibWF0ZXJpYWwtdWkvTGlzdFwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCJtYXRlcmlhbC11aS9DaGVja2JveFwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b25cIjtcbmltcG9ydCBSZW9yZGVyIGZyb20gXCJtYXRlcmlhbC11aS1pY29ucy9SZW9yZGVyXCI7XG5pbXBvcnQgRG90IGZyb20gJ21hdGVyaWFsLXVpLWljb25zL0JyaWdodG5lc3MxJ1xuaW1wb3J0IERlbGV0ZUZvcmV2ZXIgZnJvbSBcIm1hdGVyaWFsLXVpLWljb25zL0RlbGV0ZUZvcmV2ZXJcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tICdtYXRlcmlhbC11aS1pY29ucy9TZXR0aW5ncydcbmltcG9ydCBGb3JtYXRMaXN0QnVsbGV0ZWQgIGZyb20gXCJtYXRlcmlhbC11aS1pY29ucy9Gb3JtYXRMaXN0QnVsbGV0ZWRcIjtcbmltcG9ydCB7IHJlZCxwaW5rLHB1cnBsZSxkZWVwUHVycGxlLGluZGlnbyxibHVlLCBsaWdodEJsdWUsIGN5YW4sIHRlYWwsIGdyZWVuLCBsaWdodEdyZWVuLCBsaW1lLCB5ZWxsb3csIGFtYmVyLCBvcmFuZ2UsIGRlZXBPcmFuZ2UsIGdyZXkgfSBmcm9tIFwibWF0ZXJpYWwtdWkvY29sb3JzXCJcbmltcG9ydCBCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvQnV0dG9uJztcbmltcG9ydCBNZW51LCB7IE1lbnVJdGVtIH0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdtYXRlcmlhbC11aS9UeXBvZ3JhcGh5JztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL0RpdmlkZXInO1xuaW1wb3J0IHtwcmltYXJ5Q29sb3JQYXJzZXIsIGZhZGVkQ29sb3JQYXJzZXJ9IGZyb20gJy4uL2hlbHBlcnMvY29sb3JQYXJzZXIuanMnXG5cbmNvbnN0IERyYWdIYW5kbGUgPSBTb3J0YWJsZUhhbmRsZSgocHJvcHMpID0+XG5cdFx0PHNwYW4gc3R5bGU9e3Byb3BzLmNvbXBsZXRlU3R5bGV9PlxuXHRcdDxSZW9yZGVyIC8+XG5cdFx0PC9zcGFuPlxuKTtcblxuY29uc3QgQ29sb3JNZW51ID0gKHByb3BzKSAgPT4ge1xuXHR2YXIgY29sb3JzID0gWydyZWQnLCAncHVycGxlJywgJ2xpZ2h0Qmx1ZScsICd0ZWFsJywgJ2xpZ2h0R3JlZW4nLCAneWVsbG93JywgJ29yYW5nZScsICdwaW5rJ11cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0e2NvbG9ycy5tYXAoKGNvbG9yLCBpbmRleCk9PntcblxuXHRcdFx0XHR2YXIgYnJlYWtMaW5lID0gaW5kZXggJSA0ID09PSAzID8gPGJyIC8+IDogXCJcIlxuXG5cdFx0XHRcdHJldHVybihcblx0XHRcdFx0PHNwYW4ga2V5PXtgJHtjb2xvcn0tJHtpbmRleH1gfT5cblx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0c3R5bGU9e3tjb2xvcjpwcmltYXJ5Q29sb3JQYXJzZXIoY29sb3IpfX1cblx0XHRcdFx0b25DbGljaz17cHJvcHMuY2xpY2tIYW5kbGVyKGNvbG9yKX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxEb3QgLz5cblx0XHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0XHR7YnJlYWtMaW5lfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdClcblx0XHRcdH0pfVxuXHRcdDwvZGl2PlxuXHRcdClcbn1cblxuXG5jbGFzcyBCYXNlTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRvcGVuOmZhbHNlLFxuXHRcdFx0YW5jaG9yRWw6IHVuZGVmaW5lZFxuXHRcdH1cblxuXHRcdHRoaXMuY29tcGxldGVEaXNwbGF5ID0gdGhpcy5jb21wbGV0ZURpc3BsYXkuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuYmluZCh0aGlzKTtcblx0XHR0aGlzLm9wZW5NZW51ID0gdGhpcy5vcGVuTWVudS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2xvc2VNZW51ID0gdGhpcy5jbG9zZU1lbnUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNvbG9ySXRlbUNsaWNrSGFuZGxlciA9IHRoaXMuY29sb3JJdGVtQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG5cdH1cblx0IGl0ZW0gPSB0aGlzLnByb3BzLnZhbHVlO1xuXG5cdGluY29tcGxldGVMaXN0U3R5bGUgPSB7IGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yUGFyc2VyKHRoaXMuaXRlbS5jb2xvcikgfTtcblx0Y29tcGxldGVMaXN0U3R5bGUgPSB7IGJhY2tncm91bmRDb2xvcjogZmFkZWRDb2xvclBhcnNlcih0aGlzLml0ZW0uY29sb3IpIH07XG5cdC8vIGxpc3RJdGVtU3R5bGUgPSB0aGlzLml0ZW0uY29tcGxldGVcblx0Ly8gXHQ/IHRoaXMuY29tcGxldGVMaXN0U3R5bGVcblx0Ly8gXHQ6IHRoaXMuaW5jb21wbGV0ZUxpc3RTdHlsZTtcblx0bGlzdEl0ZW1TdHlsZSA9IHtiYWNrZ3JvdW5kQ29sb3I6dGhpcy5wcm9wcy5iZ0NvbG9yfVxuXHRjb21wbGV0ZUdyZXkgPSBncmV5WzUwMF07XG5cdGNvbXBsZXRlTGluZVN0eWxlID0gdGhpcy5pdGVtLmNvbXBsZXRlXG5cdFx0PyB7IGNvbG9yOiB0aGlzLmNvbXBsZXRlR3JleSwgdGV4dERlY29yYXRpb246IFwibGluZS10aHJvdWdoXCIgfVxuXHRcdDoge307XG5cdGNvbXBsZXRlU3R5bGUgPSB0aGlzLml0ZW0uY29tcGxldGUgPyB7IGNvbG9yOiB0aGlzLmNvbXBsZXRlR3JleSB9IDoge307XG5cblxuXHRjb21wbGV0ZURpc3BsYXkoKSB7XG5cdFx0dmFyIGNvbXBsZXRlZCA9IHRoaXMuaXRlbS5jb21wbGV0ZUNoaWxkcmVuLmxlbmd0aDtcblx0XHR2YXIgdG90YWwgPSBjb21wbGV0ZWQgKyB0aGlzLml0ZW0uaW5jb21wbGV0ZUNoaWxkcmVuLmxlbmd0aDtcblx0XHRpZiAodG90YWwgPT09IDApIHtcblx0XHRcdHJldHVybiBcIlwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdHN0eWxlPXt0aGlzLmNvbXBsZXRlU3R5bGV9XG5cdFx0XHRcdD57YCggJHtjb21wbGV0ZWR9IC8gJHt0b3RhbH0gY29tcGxldGUpYH08L3NwYW4+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnRlbnQoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzcGFuIHN0eWxlPXt0aGlzLmNvbXBsZXRlTGluZVN0eWxlfT5cblx0XHRcdFx0e3RoaXMuaXRlbS5jb250ZW50fVxuXHRcdFx0PC9zcGFuPlxuXHRcdCk7XG5cdH1cblxuXHRvcGVuTWVudShldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7b3Blbjp0cnVlLCBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldH0pXG5cdH1cblxuXHRjbG9zZU1lbnUoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtvcGVuOmZhbHNlfSlcblx0fVxuXG5cdGNvbG9ySXRlbUNsaWNrSGFuZGxlcihjb2xvck5hbWUpe1xuXHRcdHZhciBjbG9zZSA9IHRoaXMuY2xvc2VNZW51XG5cdFx0bGV0IGNoYW5nZUNvbG9yID0gdGhpcy5wcm9wcy5jaGFuZ2VDb2xvckNvbXBvc2VyKHRoaXMuaXRlbS5pZCwgY29sb3JOYW1lKVxuXHRcdHJldHVybiBmdW5jdGlvbigpe1xuXHRcdGNvbnNvbGUubG9nKGNvbG9yTmFtZSlcblx0XHRjaGFuZ2VDb2xvcigpXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdHJldHVybiAoXG5cdFx0PExpc3RJdGVtIGRpdmlkZXI9e3RydWV9IHN0eWxlPXt0aGlzLmxpc3RJdGVtU3R5bGV9PlxuXHRcdFx0PERyYWdIYW5kbGVcblx0XHRcdFx0Y29tcGxldGVTdHlsZT17dGhpcy5jb21wbGV0ZVN0eWxlfVxuXHRcdFx0Lz5cblx0XHRcdDxDaGVja2JveFxuXHRcdFx0XHRjaGVja2VkPXt0aGlzLml0ZW0uY29tcGxldGV9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMucHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXIodGhpcy5pdGVtLmlkKX1cblx0XHRcdFx0c3R5bGU9e3RoaXMuY29tcGxldGVTdHlsZX1cblx0XHRcdC8+XG5cblx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGhpcy5jb250ZW50KCl9IHNlY29uZGFyeT17dGhpcy5jb21wbGV0ZURpc3BsYXkoKX0gLz5cblxuXHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0b25DbGljaz17dGhpcy5wcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXIodGhpcy5pdGVtLmlkKX1cblx0XHRcdFx0c3R5bGU9e3RoaXMuY29tcGxldGVTdHlsZX1cblx0XHRcdD5cblx0XHRcdFx0PEZvcm1hdExpc3RCdWxsZXRlZCAvPlxuXHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0PEljb25CdXR0b24gb25DbGljaz17dGhpcy5vcGVuTWVudX0+XG5cdFx0XHRcdDxTZXR0aW5ncyAvPlxuXHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0PE1lbnVcblx0XHRcdGlkPXtgJHt0aGlzLml0ZW0uaWR9LW1lbnVgfVxuXHRcdFx0b3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9e3RoaXMuY2xvc2VNZW51fVxuXHRcdFx0YW5jaG9yRWw9e3RoaXMuc3RhdGUuYW5jaG9yRWx9XG5cdFx0XHQ+XG5cdFx0XHRcdDxUeXBvZ3JhcGh5XG5cdFx0XHRcdHR5cGU9e1wic3ViaGVhZGluZ1wifVxuXHRcdFx0XHRhbGlnbj17J2NlbnRlcid9XG5cdFx0XHRcdHN0eWxlPXt7b3V0bGluZTonbm9uZScsIHBhZGRpbmdMZWZ0OjE2fX1cblx0XHRcdFx0PkNoYW5nZSBDb2xvcjwvVHlwb2dyYXBoeT5cblx0XHRcdFx0PERpdmlkZXIgLz5cblx0XHRcdFx0PENvbG9yTWVudVxuXHRcdFx0XHRjbGlja0hhbmRsZXI9e3RoaXMuY29sb3JJdGVtQ2xpY2tIYW5kbGVyfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9NZW51PlxuXHRcdDwvTGlzdEl0ZW0+XG5cdCk7XG5cdH1cbn07XG5cbkJhc2VMaXN0SXRlbS5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZUxpc3RJdGVtO1xuXG5cblx0XHRcdC8vIDxJY29uQnV0dG9uXG5cdFx0XHQvLyBcdG9uQ2xpY2s9e3Byb3BzLmRlbGV0ZUl0ZW1Db21wb3NlcihpdGVtLmlkKX1cblx0XHRcdC8vIFx0c3R5bGU9e2NvbXBsZXRlU3R5bGV9XG5cdFx0XHQvLyA+XG5cdFx0XHQvLyBcdDxEZWxldGVGb3JldmVyIC8+XG5cdFx0XHQvLyA8L0ljb25CdXR0b24+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RJdGVtLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7QUFsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUVBO0FBRkE7QUFBQTtBQVFBO0FBdEJBO0FBQ0E7QUF3QkE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVlBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUF4QkE7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7O0FBVUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTs7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUlBOzs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBTUE7QUFDQTs7OztBQUlBO0FBQUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQURBO0FBR0E7QUFIQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUhBO0FBTUE7QUFOQTtBQUNBO0FBS0E7QUFFQTtBQUZBO0FBRUE7QUFDQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQU9BO0FBQ0E7QUFBQTs7QUFIQTtBQUFBO0FBQUE7QUFDQTs7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQURBO0FBTUE7QUFOQTtBQUNBOzs7OztBQTFHQTtBQUNBO0FBK0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9