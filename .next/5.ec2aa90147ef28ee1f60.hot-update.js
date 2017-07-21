webpackHotUpdate(5,{

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(671);

var _Button = __webpack_require__(675);

var _Button2 = _interopRequireDefault(_Button);

var _Check = __webpack_require__(954);

var _Check2 = _interopRequireDefault(_Check);

var _Save = __webpack_require__(955);

var _Save2 = _interopRequireDefault(_Save);

var _Report = __webpack_require__(956);

var _Report2 = _interopRequireDefault(_Report);

var _Autorenew = __webpack_require__(957);

var _Autorenew2 = _interopRequireDefault(_Autorenew);

var _reactMdSpinner = __webpack_require__(983);

var _reactMdSpinner2 = _interopRequireDefault(_reactMdSpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/Progress.js';


var NetworkProgress = function NetworkProgress(props) {
	var icon = '';
	switch (props.network) {
		case 'progress':
			icon = _react2.default.createElement(_reactMdSpinner2.default, { singleColor: props.textColor, __source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			});
			break;
		case 'success':
			icon = _react2.default.createElement(_Check2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			});
			break;
		case 'error':
			icon = _react2.default.createElement(_Report2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			});
			break;
	}
	return _react2.default.createElement('span', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}, _react2.default.createElement(_Button2.default, {
		style: { color: props.textColor },
		onClick: props.updateData,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}, icon));
};

function mapStateToProps(_ref) {
	var network = _ref.network;

	return { network: network };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(NetworkProgress);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/Progress.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/Progress.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lYzJhYTkwMTQ3ZWYyOGVlMWY2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL1Byb2dyZXNzLmpzPzNjOWU0YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9CdXR0b24nO1xuaW1wb3J0IENoZWNrSWNvbiBmcm9tICdtYXRlcmlhbC11aS1pY29ucy9DaGVjayc7XG5pbXBvcnQgU2F2ZUljb24gZnJvbSAnbWF0ZXJpYWwtdWktaWNvbnMvU2F2ZSc7XG5pbXBvcnQgUmVwb3J0SWNvbiBmcm9tICdtYXRlcmlhbC11aS1pY29ucy9SZXBvcnQnXG5pbXBvcnQgQXV0b3JlbmV3IGZyb20gJ21hdGVyaWFsLXVpLWljb25zL0F1dG9yZW5ldydcbmltcG9ydCBNRFNwaW5uZXIgZnJvbSBcInJlYWN0LW1kLXNwaW5uZXJcIjtcblxuXG5cblxuY29uc3QgTmV0d29ya1Byb2dyZXNzID0gKHByb3BzKSA9PiB7XG5cdGxldCBpY29uID0gJydcblx0c3dpdGNoKHByb3BzLm5ldHdvcmspe1xuXHRcdGNhc2UgJ3Byb2dyZXNzJzpcblx0XHRcdGljb24gPSA8TURTcGlubmVyIHNpbmdsZUNvbG9yPXtwcm9wcy50ZXh0Q29sb3J9Lz5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ3N1Y2Nlc3MnOlxuXHRcdFx0aWNvbiA9IDxDaGVja0ljb24gLz5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2Vycm9yJzpcblx0XHRcdGljb24gPSA8UmVwb3J0SWNvbiAvPlxuXHRcdFx0YnJlYWs7XG5cdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNwYW4+XG5cdFx0XHQ8QnV0dG9uXG5cdFx0XHRzdHlsZT17e2NvbG9yOnByb3BzLnRleHRDb2xvcn19XG5cdFx0XHRvbkNsaWNrPXtwcm9wcy51cGRhdGVEYXRhfVxuXHRcdFx0PlxuXHRcdFx0XHR7aWNvbn1cblx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9zcGFuPlxuXHRcdFx0KVxuXHR9XG5cblxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoeyBuZXR3b3JrIH0pIHtcblx0cmV0dXJuIHsgbmV0d29yayB9O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShOZXR3b3JrUHJvZ3Jlc3MpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9Qcm9ncmVzcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7O0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBaEJBO0FBQ0E7QUEwQkE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==