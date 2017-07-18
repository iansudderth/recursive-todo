webpackHotUpdate(5,{

/***/ 677:
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

var _extends2 = __webpack_require__(57);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactSortableHoc = __webpack_require__(676);

var _List = __webpack_require__(653);

var _Checkbox = __webpack_require__(762);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _IconButton = __webpack_require__(680);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Reorder = __webpack_require__(774);

var _Reorder2 = _interopRequireDefault(_Reorder);

var _Brightness = __webpack_require__(775);

var _Brightness2 = _interopRequireDefault(_Brightness);

var _DeleteForever = __webpack_require__(776);

var _DeleteForever2 = _interopRequireDefault(_DeleteForever);

var _Settings = __webpack_require__(777);

var _Settings2 = _interopRequireDefault(_Settings);

var _FormatListBulleted = __webpack_require__(778);

var _FormatListBulleted2 = _interopRequireDefault(_FormatListBulleted);

var _colors = __webpack_require__(605);

var _Button = __webpack_require__(655);

var _Button2 = _interopRequireDefault(_Button);

var _Menu = __webpack_require__(779);

var _Menu2 = _interopRequireDefault(_Menu);

var _Typography = __webpack_require__(645);

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = __webpack_require__(684);

var _Divider2 = _interopRequireDefault(_Divider);

var _colorParser = __webpack_require__(654);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItem.js";
// import style from "./style.css";
// import PropTypes from 'prop-types'
// import _ from 'lodash';


var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (props) {

	var activeStyle = props.complete ? {} : { cursor: 'pointer' };

	return _react2.default.createElement("span", { style: (0, _extends3.default)({}, props.completeStyle, activeStyle), __source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, _react2.default.createElement(_Reorder2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}));
});

var ColorMenu = function ColorMenu(props) {
	var colors = ['red', 'purple', 'lightBlue', 'teal', 'lightGreen', 'yellow', 'orange', 'pink'];
	return _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}, colors.map(function (color, index) {

		var breakLine = index % 4 === 3 ? _react2.default.createElement("br", {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 38
			}
		}) : "";

		return _react2.default.createElement("span", { key: color + "-" + index,
			onClick: props.clickHandler(color), __source: {
				fileName: _jsxFileName,
				lineNumber: 41
			}
		}, _react2.default.createElement(_IconButton2.default, {
			style: { color: (0, _colorParser.primaryColorParser)(color) },
			__source: {
				fileName: _jsxFileName,
				lineNumber: 43
			}
		}, _react2.default.createElement(_Brightness2.default, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 46
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
		_this.completeGrey = _colors.grey[500];
		_this.completeLineStyle = _this.item.complete ? { color: _this.completeGrey, textDecoration: "line-through" } : {};
		_this.completeStyle = _this.item.complete ? { color: _this.completeGrey } : { color: _this.textColor };

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
	// listItemStyle = {backgroundColor:this.state.bgColor}


	(0, _createClass3.default)(BaseListItem, [{
		key: "completeDisplay",
		value: function completeDisplay() {
			var completed = this.item.completeChildren.length;
			var total = completed + this.item.incompleteChildren.length;
			var textColor = this.props.value.complete ? this.completeGrey : this.props.textColor;
			var displayTextStyle = this.props.value.complete ? { color: this.completeGrey } : { color: this.props.textColor };
			if (total === 0) {
				return "";
			} else {
				return _react2.default.createElement("span", {
					style: displayTextStyle,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 100
					}
				}, "( " + completed + " / " + total + " complete)");
			}
		}
	}, {
		key: "content",
		value: function content() {
			var textColor = this.props.value.complete ? this.completeGrey : this.props.textColor;
			var contentTextStyle = this.props.value.complete ? { color: this.completeGrey, textDecoration: "line-through" } : { color: this.props.textColor };
			return _react2.default.createElement("span", { style: contentTextStyle, __source: {
					fileName: _jsxFileName,
					lineNumber: 113
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
			var propsColor = this.props.bgColor;
			return function () {
				changeColor();
				close();
			};
		}
	}, {
		key: "render",
		value: function render() {
			var textColor = this.props.value.complete ? this.completeGrey : this.props.textColor;
			return _react2.default.createElement(_List.ListItem, { divider: true, style: { backgroundColor: this.props.itemColor }, __source: {
					fileName: _jsxFileName,
					lineNumber: 140
				}
			}, _react2.default.createElement(DragHandle, {
				completeStyle: { color: textColor },
				complete: this.item.complete,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 141
				}
			}), _react2.default.createElement(_Checkbox2.default, {
				checked: this.item.complete,
				onClick: this.props.completeItemComposer(this.item.id),
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 145
				}
			}), _react2.default.createElement(_List.ListItemText, { primary: this.content(),
				secondary: this.completeDisplay(),
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 151
				}
			}), _react2.default.createElement(_IconButton2.default, {
				onClick: this.props.changeBaseComposer(this.item.id),
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 156
				}
			}, _react2.default.createElement(_FormatListBulleted2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 160
				}
			})), _react2.default.createElement(_IconButton2.default, {
				onClick: this.openMenu,
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 162
				}
			}, _react2.default.createElement(_Settings2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 166
				}
			})), _react2.default.createElement(_Menu2.default, {
				id: this.item.id + "-menu",
				open: this.state.open,
				onRequestClose: this.closeMenu,
				anchorEl: this.state.anchorEl,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 168
				}
			}, _react2.default.createElement(_Typography2.default, {
				type: "subheading",
				align: 'center',
				style: { outline: 'none', paddingLeft: 16 },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 174
				}
			}, "Change Color"), _react2.default.createElement(_Divider2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 179
				}
			}), _react2.default.createElement(ColorMenu, {
				clickHandler: this.colorItemClickHandler,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 180
				}
			}), _react2.default.createElement(_Divider2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 183
				}
			}), _react2.default.createElement("div", {
				style: { textAlign: 'center' },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 184
				}
			}, _react2.default.createElement(_Button2.default, {
				style: { color: 'white', backgroundColor: _colors.red[500], marginTop: 8 },
				onClick: this.props.deleteItemComposer(this.item.id),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 187
				}
			}, _react2.default.createElement(_DeleteForever2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 191
				}
			}), " ", 'Delete Item'))));
		}
	}]);

	return BaseListItem;
}(_react.Component);

;

BaseListItem.propTypes = {};

exports.default = BaseListItem;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItem.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kMzg5Yzc3OTcyOWNlZTNkYzVjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RJdGVtLmpzPzBiZGY5OGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBTb3J0YWJsZUhhbmRsZSB9IGZyb20gXCJyZWFjdC1zb3J0YWJsZS1ob2NcIjtcbmltcG9ydCB7IExpc3RJdGVtLCBMaXN0SXRlbVRleHQgfSBmcm9tIFwibWF0ZXJpYWwtdWkvTGlzdFwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCJtYXRlcmlhbC11aS9DaGVja2JveFwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b25cIjtcbmltcG9ydCBSZW9yZGVyIGZyb20gXCJtYXRlcmlhbC11aS1pY29ucy9SZW9yZGVyXCI7XG5pbXBvcnQgRG90IGZyb20gJ21hdGVyaWFsLXVpLWljb25zL0JyaWdodG5lc3MxJ1xuaW1wb3J0IERlbGV0ZUZvcmV2ZXIgZnJvbSBcIm1hdGVyaWFsLXVpLWljb25zL0RlbGV0ZUZvcmV2ZXJcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tICdtYXRlcmlhbC11aS1pY29ucy9TZXR0aW5ncydcbmltcG9ydCBGb3JtYXRMaXN0QnVsbGV0ZWQgIGZyb20gXCJtYXRlcmlhbC11aS1pY29ucy9Gb3JtYXRMaXN0QnVsbGV0ZWRcIjtcbmltcG9ydCB7IHJlZCxwaW5rLHB1cnBsZSxkZWVwUHVycGxlLGluZGlnbyxibHVlLCBsaWdodEJsdWUsIGN5YW4sIHRlYWwsIGdyZWVuLCBsaWdodEdyZWVuLCBsaW1lLCB5ZWxsb3csIGFtYmVyLCBvcmFuZ2UsIGRlZXBPcmFuZ2UsIGdyZXkgfSBmcm9tIFwibWF0ZXJpYWwtdWkvY29sb3JzXCJcbmltcG9ydCBCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvQnV0dG9uJztcbmltcG9ydCBNZW51LCB7IE1lbnVJdGVtIH0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdtYXRlcmlhbC11aS9UeXBvZ3JhcGh5JztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL0RpdmlkZXInO1xuaW1wb3J0IHtwcmltYXJ5Q29sb3JQYXJzZXIsIGZhZGVkQ29sb3JQYXJzZXJ9IGZyb20gJy4uL2hlbHBlcnMvY29sb3JQYXJzZXIuanMnXG5cbmNvbnN0IERyYWdIYW5kbGUgPSBTb3J0YWJsZUhhbmRsZSgocHJvcHMpID0+e1xuXG5cdHZhciBhY3RpdmVTdHlsZSA9IHByb3BzLmNvbXBsZXRlID8ge30gOiB7Y3Vyc29yOidwb2ludGVyJ31cblxuXHRyZXR1cm4oXG5cdFx0PHNwYW4gc3R5bGU9e3suLi5wcm9wcy5jb21wbGV0ZVN0eWxlLCAuLi5hY3RpdmVTdHlsZX19PlxuXHRcdDxSZW9yZGVyIC8+XG5cdFx0PC9zcGFuPlxuXHRcdCl9XG4pO1xuXG5jb25zdCBDb2xvck1lbnUgPSAocHJvcHMpICA9PiB7XG5cdHZhciBjb2xvcnMgPSBbJ3JlZCcsICdwdXJwbGUnLCAnbGlnaHRCbHVlJywgJ3RlYWwnLCAnbGlnaHRHcmVlbicsICd5ZWxsb3cnLCAnb3JhbmdlJywgJ3BpbmsnXVxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHR7Y29sb3JzLm1hcCgoY29sb3IsIGluZGV4KT0+e1xuXG5cdFx0XHRcdHZhciBicmVha0xpbmUgPSBpbmRleCAlIDQgPT09IDMgPyA8YnIgLz4gOiBcIlwiXG5cblx0XHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8c3BhbiBrZXk9e2Ake2NvbG9yfS0ke2luZGV4fWB9XG5cdFx0XHRcdG9uQ2xpY2s9e3Byb3BzLmNsaWNrSGFuZGxlcihjb2xvcil9PlxuXHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnByaW1hcnlDb2xvclBhcnNlcihjb2xvcil9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PERvdCAvPlxuXHRcdFx0XHQ8L0ljb25CdXR0b24+XG5cdFx0XHRcdHticmVha0xpbmV9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KVxuXHRcdFx0fSl9XG5cdFx0PC9kaXY+XG5cdFx0KVxufVxuXG5cbmNsYXNzIEJhc2VMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG9wZW46ZmFsc2UsXG5cdFx0XHRhbmNob3JFbDogdW5kZWZpbmVkXG5cdFx0fVxuXG5cdFx0dGhpcy5jb21wbGV0ZURpc3BsYXkgPSB0aGlzLmNvbXBsZXRlRGlzcGxheS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub3Blbk1lbnUgPSB0aGlzLm9wZW5NZW51LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jbG9zZU1lbnUgPSB0aGlzLmNsb3NlTWVudS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY29sb3JJdGVtQ2xpY2tIYW5kbGVyID0gdGhpcy5jb2xvckl0ZW1DbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcblx0fVxuXG5cdCBpdGVtID0gdGhpcy5wcm9wcy52YWx1ZTtcblxuXHRpbmNvbXBsZXRlTGlzdFN0eWxlID0geyBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvclBhcnNlcih0aGlzLml0ZW0uY29sb3IpIH07XG5cdGNvbXBsZXRlTGlzdFN0eWxlID0geyBiYWNrZ3JvdW5kQ29sb3I6IGZhZGVkQ29sb3JQYXJzZXIodGhpcy5pdGVtLmNvbG9yKSB9O1xuXHQvLyBsaXN0SXRlbVN0eWxlID0gdGhpcy5pdGVtLmNvbXBsZXRlXG5cdC8vIFx0PyB0aGlzLmNvbXBsZXRlTGlzdFN0eWxlXG5cdC8vIFx0OiB0aGlzLmluY29tcGxldGVMaXN0U3R5bGU7XG5cdC8vIGxpc3RJdGVtU3R5bGUgPSB7YmFja2dyb3VuZENvbG9yOnRoaXMuc3RhdGUuYmdDb2xvcn1cblx0Y29tcGxldGVHcmV5ID0gZ3JleVs1MDBdO1xuXHRjb21wbGV0ZUxpbmVTdHlsZSA9IHRoaXMuaXRlbS5jb21wbGV0ZVxuXHRcdD8geyBjb2xvcjogdGhpcy5jb21wbGV0ZUdyZXksIHRleHREZWNvcmF0aW9uOiBcImxpbmUtdGhyb3VnaFwiIH1cblx0XHQ6IHt9O1xuXHRjb21wbGV0ZVN0eWxlID0gdGhpcy5pdGVtLmNvbXBsZXRlXG5cdD8geyBjb2xvcjogdGhpcy5jb21wbGV0ZUdyZXkgfVxuXHQ6IHsgY29sb3I6IHRoaXMudGV4dENvbG9yfTtcblxuXG5cdGNvbXBsZXRlRGlzcGxheSgpIHtcblx0XHR2YXIgY29tcGxldGVkID0gdGhpcy5pdGVtLmNvbXBsZXRlQ2hpbGRyZW4ubGVuZ3RoO1xuXHRcdHZhciB0b3RhbCA9IGNvbXBsZXRlZCArIHRoaXMuaXRlbS5pbmNvbXBsZXRlQ2hpbGRyZW4ubGVuZ3RoO1xuXHRcdHZhciB0ZXh0Q29sb3IgPSB0aGlzLnByb3BzLnZhbHVlLmNvbXBsZXRlPyB0aGlzLmNvbXBsZXRlR3JleSA6IHRoaXMucHJvcHMudGV4dENvbG9yXG5cdFx0dmFyIGRpc3BsYXlUZXh0U3R5bGUgPSB0aGlzLnByb3BzLnZhbHVlLmNvbXBsZXRlXG5cdFx0PyB7IGNvbG9yOiB0aGlzLmNvbXBsZXRlR3JleX1cblx0XHQ6IHsgY29sb3I6IHRoaXMucHJvcHMudGV4dENvbG9yfTtcblx0XHRpZiAodG90YWwgPT09IDApIHtcblx0XHRcdHJldHVybiBcIlwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdHN0eWxlPXtkaXNwbGF5VGV4dFN0eWxlfVxuXHRcdFx0XHQ+e2AoICR7Y29tcGxldGVkfSAvICR7dG90YWx9IGNvbXBsZXRlKWB9PC9zcGFuPlxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRjb250ZW50KCkge1xuXHRcdHZhciB0ZXh0Q29sb3IgPSB0aGlzLnByb3BzLnZhbHVlLmNvbXBsZXRlPyB0aGlzLmNvbXBsZXRlR3JleSA6IHRoaXMucHJvcHMudGV4dENvbG9yXG5cdFx0dmFyIGNvbnRlbnRUZXh0U3R5bGUgPSB0aGlzLnByb3BzLnZhbHVlLmNvbXBsZXRlXG5cdFx0PyB7IGNvbG9yOiB0aGlzLmNvbXBsZXRlR3JleSwgdGV4dERlY29yYXRpb246IFwibGluZS10aHJvdWdoXCIgfVxuXHRcdDogeyBjb2xvcjogdGhpcy5wcm9wcy50ZXh0Q29sb3J9O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c3BhbiBzdHlsZT17Y29udGVudFRleHRTdHlsZX0+XG5cdFx0XHRcdHt0aGlzLml0ZW0uY29udGVudH1cblx0XHRcdDwvc3Bhbj5cblx0XHQpO1xuXHR9XG5cblx0b3Blbk1lbnUoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe29wZW46dHJ1ZSwgYW5jaG9yRWw6IGV2ZW50LmN1cnJlbnRUYXJnZXR9KVxuXHR9XG5cblx0Y2xvc2VNZW51KCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7b3BlbjpmYWxzZX0pXG5cdH1cblxuXHRjb2xvckl0ZW1DbGlja0hhbmRsZXIoY29sb3JOYW1lKXtcblx0XHR2YXIgY2xvc2UgPSB0aGlzLmNsb3NlTWVudVxuXHRcdGxldCBjaGFuZ2VDb2xvciA9IHRoaXMucHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcih0aGlzLml0ZW0uaWQsIGNvbG9yTmFtZSlcblx0XHRsZXQgcHJvcHNDb2xvciA9IHRoaXMucHJvcHMuYmdDb2xvclxuXHRcdHJldHVybiBmdW5jdGlvbigpe1xuXHRcdGNoYW5nZUNvbG9yKClcblx0XHRjbG9zZSgpXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0dmFyIHRleHRDb2xvciA9IHRoaXMucHJvcHMudmFsdWUuY29tcGxldGU/IHRoaXMuY29tcGxldGVHcmV5IDogdGhpcy5wcm9wcy50ZXh0Q29sb3Jcblx0cmV0dXJuIChcblx0XHQ8TGlzdEl0ZW0gZGl2aWRlcj17dHJ1ZX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMuaXRlbUNvbG9yfX0+XG5cdFx0XHQ8RHJhZ0hhbmRsZVxuXHRcdFx0XHRjb21wbGV0ZVN0eWxlPXt7Y29sb3I6dGV4dENvbG9yfX1cblx0XHRcdFx0Y29tcGxldGU9e3RoaXMuaXRlbS5jb21wbGV0ZX1cblx0XHRcdC8+XG5cdFx0XHQ8Q2hlY2tib3hcblx0XHRcdFx0Y2hlY2tlZD17dGhpcy5pdGVtLmNvbXBsZXRlfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyKHRoaXMuaXRlbS5pZCl9XG5cdFx0XHRcdHN0eWxlPXt7Y29sb3I6dGV4dENvbG9yfX1cblx0XHRcdC8+XG5cblx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGhpcy5jb250ZW50KCl9XG5cdFx0XHRzZWNvbmRhcnk9e3RoaXMuY29tcGxldGVEaXNwbGF5KCl9XG5cdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHQvPlxuXG5cdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLmNoYW5nZUJhc2VDb21wb3Nlcih0aGlzLml0ZW0uaWQpfVxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHQ+XG5cdFx0XHRcdDxGb3JtYXRMaXN0QnVsbGV0ZWQgLz5cblx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRvbkNsaWNrPXt0aGlzLm9wZW5NZW51fVxuXHRcdFx0c3R5bGU9e3tjb2xvcjp0ZXh0Q29sb3J9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8U2V0dGluZ3MgLz5cblx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdDxNZW51XG5cdFx0XHRpZD17YCR7dGhpcy5pdGVtLmlkfS1tZW51YH1cblx0XHRcdG9wZW49e3RoaXMuc3RhdGUub3Blbn1cblx0XHRcdG9uUmVxdWVzdENsb3NlPXt0aGlzLmNsb3NlTWVudX1cblx0XHRcdGFuY2hvckVsPXt0aGlzLnN0YXRlLmFuY2hvckVsfVxuXHRcdFx0PlxuXHRcdFx0XHQ8VHlwb2dyYXBoeVxuXHRcdFx0XHR0eXBlPXtcInN1YmhlYWRpbmdcIn1cblx0XHRcdFx0YWxpZ249eydjZW50ZXInfVxuXHRcdFx0XHRzdHlsZT17e291dGxpbmU6J25vbmUnLCBwYWRkaW5nTGVmdDoxNn19XG5cdFx0XHRcdD5DaGFuZ2UgQ29sb3I8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdDxEaXZpZGVyIC8+XG5cdFx0XHRcdDxDb2xvck1lbnVcblx0XHRcdFx0Y2xpY2tIYW5kbGVyPXt0aGlzLmNvbG9ySXRlbUNsaWNrSGFuZGxlcn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PERpdmlkZXIgLz5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319XG5cdFx0XHRcdD5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOid3aGl0ZScsIGJhY2tncm91bmRDb2xvcjpyZWRbNTAwXSwgbWFyZ2luVG9wOjh9fVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLmRlbGV0ZUl0ZW1Db21wb3Nlcih0aGlzLml0ZW0uaWQpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PERlbGV0ZUZvcmV2ZXIgLz4geydEZWxldGUgSXRlbSd9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTWVudT5cblx0XHQ8L0xpc3RJdGVtPlxuXHQpO1xuXHR9XG59O1xuXG5CYXNlTGlzdEl0ZW0ucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VMaXN0SXRlbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7OztBQWxCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUFBO0FBTkE7QUFDQTtBQVVBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFBQTtBQUdBOztBQURBO0FBR0E7QUFIQTtBQUNBOztBQUVBO0FBRUE7QUFGQTtBQUFBO0FBUUE7QUF0QkE7QUFDQTtBQXdCQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBWUE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUF6QkE7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFXQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUZBO0FBSUE7QUFDQTs7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUlBOzs7O0FBR0E7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQU1BO0FBQ0E7Ozs7QUFJQTtBQUFBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFIQTtBQU1BO0FBTkE7QUFDQTtBQU1BO0FBQ0E7O0FBRkE7QUFLQTtBQUxBO0FBS0E7QUFDQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBRUE7QUFGQTtBQUFBO0FBR0E7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBTUE7QUFOQTtBQUNBO0FBT0E7QUFDQTtBQUFBOztBQUhBO0FBQUE7QUFBQTtBQUNBOztBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBREE7QUFHQTtBQUhBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFFQTs7QUFEQTtBQUdBO0FBSEE7QUFDQTtBQUdBO0FBQ0E7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7O0FBR0E7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBdElBO0FBQ0E7QUE0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9