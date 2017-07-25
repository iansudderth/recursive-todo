webpackHotUpdate(5,{

/***/ 997:
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

var _IconButton = __webpack_require__(651);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Settings = __webpack_require__(707);

var _Settings2 = _interopRequireDefault(_Settings);

var _Menu = __webpack_require__(708);

var _Menu2 = _interopRequireDefault(_Menu);

var _ColorMenu = __webpack_require__(744);

var _ColorMenu2 = _interopRequireDefault(_ColorMenu);

var _Typography = __webpack_require__(650);

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = __webpack_require__(679);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/HeaderMenu.js';


var HeaderMenu = function (_Component) {
	(0, _inherits3.default)(HeaderMenu, _Component);

	function HeaderMenu(props) {
		(0, _classCallCheck3.default)(this, HeaderMenu);

		var _this = (0, _possibleConstructorReturn3.default)(this, (HeaderMenu.__proto__ || (0, _getPrototypeOf2.default)(HeaderMenu)).call(this, props));

		_this.state = {
			open: false,
			anchorEl: undefined
		};

		_this.openMenu = _this.openMenu.bind(_this);
		_this.closeMenu = _this.closeMenu.bind(_this);
		_this.colorItemClickHandler = _this.colorItemClickHandler.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(HeaderMenu, [{
		key: 'openMenu',
		value: function openMenu(event) {
			this.setState({ open: true, anchorEl: event.currentTarget });
		}
	}, {
		key: 'closeMenu',
		value: function closeMenu() {
			this.setState({ open: false });
		}
	}, {
		key: 'colorItemClickHandler',
		value: function colorItemClickHandler(colorName) {
			var close = this.closeMenu;
			var changeColor = this.props.changeColorComposer(this.props.baseItem, colorName);
			var propsColor = this.props.bgColor;
			return function () {
				changeColor();
				close();
			};
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, _react2.default.createElement(_IconButton2.default, {
				onClick: this.openMenu,
				style: { color: this.props.textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement(_Settings2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			})), _react2.default.createElement(_Menu2.default, {
				id: this.props.baseItem + '-menu',
				open: this.state.open,
				onRequestClose: this.closeMenu,
				anchorEl: this.state.anchorEl,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement(_Typography2.default, {
				type: "subheading",
				align: 'center',
				style: { outline: 'none', paddingLeft: 16 },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, 'Change Color'), _react2.default.createElement(_Divider2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}), _react2.default.createElement(_ColorMenu2.default, {
				clickHandler: this.colorItemClickHandler,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			})));
		}
	}]);

	return HeaderMenu;
}(_react.Component);

exports.default = HeaderMenu;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/HeaderMenu.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/HeaderMenu.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yMWY1NWM4ZDI4NmI3YmQ5MDQwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0hlYWRlck1lbnUuanM/NTU1MDg4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b25cIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tICdtYXRlcmlhbC11aS1pY29ucy9TZXR0aW5ncyc7XG5pbXBvcnQgTWVudSwgeyBNZW51SXRlbSB9IGZyb20gJ21hdGVyaWFsLXVpL01lbnUnO1xuaW1wb3J0IENvbG9yTWVudSBmcm9tICcuL0NvbG9yTWVudS5qcydcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ21hdGVyaWFsLXVpL1R5cG9ncmFwaHknO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRGl2aWRlcic7XG5cbmNsYXNzIEhlYWRlck1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLnN0YXRlPXtcblx0XHRcdG9wZW46ZmFsc2UsXG5cdFx0XHRhbmNob3JFbDp1bmRlZmluZWRcblx0XHR9XG5cblx0XHR0aGlzLm9wZW5NZW51ID0gdGhpcy5vcGVuTWVudS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5jbG9zZU1lbnUgPSB0aGlzLmNsb3NlTWVudS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5jb2xvckl0ZW1DbGlja0hhbmRsZXIgPSB0aGlzLmNvbG9ySXRlbUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpXG5cdH1cblxuXHRvcGVuTWVudShldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7b3Blbjp0cnVlLCBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldH0pXG5cdH1cblxuXHRjbG9zZU1lbnUoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtvcGVuOmZhbHNlfSlcblx0fVxuXG5cdGNvbG9ySXRlbUNsaWNrSGFuZGxlcihjb2xvck5hbWUpe1xuXHRcdHZhciBjbG9zZSA9IHRoaXMuY2xvc2VNZW51XG5cdFx0bGV0IGNoYW5nZUNvbG9yID0gdGhpcy5wcm9wcy5jaGFuZ2VDb2xvckNvbXBvc2VyKHRoaXMucHJvcHMuYmFzZUl0ZW0sIGNvbG9yTmFtZSlcblx0XHRsZXQgcHJvcHNDb2xvciA9IHRoaXMucHJvcHMuYmdDb2xvclxuXHRcdHJldHVybiBmdW5jdGlvbigpe1xuXHRcdGNoYW5nZUNvbG9yKClcblx0XHRjbG9zZSgpXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMub3Blbk1lbnV9XG5cdFx0XHRcdHN0eWxlPXt7Y29sb3I6dGhpcy5wcm9wcy50ZXh0Q29sb3J9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFNldHRpbmdzIC8+XG5cdFx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdFx0PE1lbnVcblx0XHRcdFx0aWQ9e2Ake3RoaXMucHJvcHMuYmFzZUl0ZW19LW1lbnVgfVxuXHRcdFx0XHRvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG5cdFx0XHRcdG9uUmVxdWVzdENsb3NlPXt0aGlzLmNsb3NlTWVudX1cblx0XHRcdFx0YW5jaG9yRWw9e3RoaXMuc3RhdGUuYW5jaG9yRWx9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxuXHRcdFx0XHRcdHR5cGU9e1wic3ViaGVhZGluZ1wifVxuXHRcdFx0XHRcdGFsaWduPXsnY2VudGVyJ31cblx0XHRcdFx0XHRzdHlsZT17e291dGxpbmU6J25vbmUnLCBwYWRkaW5nTGVmdDoxNn19XG5cdFx0XHRcdFx0PkNoYW5nZSBDb2xvcjwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHQ8RGl2aWRlciAvPlxuXHRcdFx0XHRcdDxDb2xvck1lbnVcblx0XHRcdFx0XHRjbGlja0hhbmRsZXI9e3RoaXMuY29sb3JJdGVtQ2xpY2tIYW5kbGVyfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvTWVudT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0KVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyTWVudVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9IZWFkZXJNZW51LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFHQTtBQUpBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7O0FBSUE7QUFBQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBTUE7QUFOQTtBQUNBO0FBT0E7QUFDQTtBQUFBOztBQUhBO0FBQUE7QUFBQTtBQUNBOztBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBREE7QUFNQTtBQU5BO0FBQ0E7Ozs7O0FBU0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=