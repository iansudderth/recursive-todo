
          window.__NEXT_REGISTER_PAGE('/todo', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 1004:
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

var _Settings = __webpack_require__(708);

var _Settings2 = _interopRequireDefault(_Settings);

var _Menu = __webpack_require__(709);

var _Menu2 = _interopRequireDefault(_Menu);

var _ColorMenu = __webpack_require__(745);

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
			anchorEl: ''
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

/***/ }),

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = __webpack_require__(637);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _List = __webpack_require__(649);

var _TextField = __webpack_require__(680);

var _TextField2 = _interopRequireDefault(_TextField);

var _reactTouch = __webpack_require__(719);

var _Typography = __webpack_require__(650);

var _Typography2 = _interopRequireDefault(_Typography);

var _propTypes = __webpack_require__(31);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/EditableTextArea.js";


var NonEditItem = function NonEditItem(props) {
	var lineStyle = props.complete ? { textDecoration: 'line-through' } : {};
	var hold = (0, _reactTouch.defineHold)({ updateEvery: 50, holdFor: 500 });
	return _react2.default.createElement(_reactTouch.Holdable, {
		config: hold,
		onHoldComplete: props.updateHandler,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}, _react2.default.createElement(_Typography2.default, {
		type: "headline",
		align: "center",
		style: (0, _extends3.default)({ color: props.textColor }, lineStyle),
		onDoubleClick: props.updateHandler,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}, props.primary), _react2.default.createElement(_Typography2.default, {
		type: "subheading",
		align: "center",
		style: { color: props.textColor },
		onDoubleClick: props.updateHandler,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, props.secondary)));
};

var EditableTextArea = function (_Component) {
	(0, _inherits3.default)(EditableTextArea, _Component);

	function EditableTextArea(props) {
		(0, _classCallCheck3.default)(this, EditableTextArea);

		var _this = (0, _possibleConstructorReturn3.default)(this, (EditableTextArea.__proto__ || (0, _getPrototypeOf2.default)(EditableTextArea)).call(this, props));

		_this.state = {
			editMode: false,
			editText: ""
		};

		_this.TextContainer = _this.TextContainer.bind(_this);
		_this.doubleClickHandler = _this.doubleClickHandler.bind(_this);
		_this.EditItem = _this.EditItem.bind(_this);
		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleBlur = _this.handleBlur.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(EditableTextArea, [{
		key: "EditItem",
		value: function EditItem(props) {
			return _react2.default.createElement("form", {
				onSubmit: this.handleBlur,
				style: { width: '100%' },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
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
					lineNumber: 62
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
			event.preventDefault();
			this.props.updateItem(this.props.id, this.state.editText);
			this.setState({ editMode: false });
		}
	}, {
		key: "TextContainer",
		value: function TextContainer() {
			var EditItem = this.EditItem;
			if (this.state.editMode) {
				return _react2.default.createElement(EditItem, {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 92
					}
				});
			} else {
				var _React$createElement;

				return _react2.default.createElement(NonEditItem, (_React$createElement = {
					style: { color: this.props.textColor, padding: '0px', wordWrap: 'break-word' },
					complete: this.props.complete,
					updateHandler: this.doubleClickHandler,
					textColor: this.props.textColor,
					primary: this.props.primary,
					secondary: this.props.secondary
				}, (0, _defineProperty3.default)(_React$createElement, "complete", this.props.complete), (0, _defineProperty3.default)(_React$createElement, "__source", {
					fileName: _jsxFileName,
					lineNumber: 98
				}), _React$createElement));
			}
		}
	}, {
		key: "doubleClickHandler",
		value: function doubleClickHandler() {
			this.setState({ editMode: true, editText: this.props.primary });
		}
	}, {
		key: "render",
		value: function render() {
			var TextContainer = this.TextContainer;
			return _react2.default.createElement(TextContainer, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 118
				}
			});
		}
	}]);

	return EditableTextArea;
}(_react.Component);

exports.default = EditableTextArea;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/EditableTextArea.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/EditableTextArea.js"); } } })();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDefaultContext = setDefaultContext;
exports.getDefaultContext = getDefaultContext;

var _MuiThemeProvider = __webpack_require__(562);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _palette = __webpack_require__(239);

var _palette2 = _interopRequireDefault(_palette);

var _theme = __webpack_require__(238);

var _theme2 = _interopRequireDefault(_theme);

var _colors = __webpack_require__(605);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createDefaultContext = function createDefaultContext() {
  return _MuiThemeProvider2.default.createDefaultContext({
    theme: (0, _theme2.default)({
      palette: (0, _palette2.default)({
        primary: _colors.grey
      })
    })
  });
};

// Singleton hack as there is no way to pass variables from _document.js to pages yet.
var context = null;

function setDefaultContext() {
  context = createDefaultContext();
}

function getDefaultContext() {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return context;
  }

  // Reuse store on the client-side
  if (!context) {
    context = createDefaultContext();
  }

  return context;
}

exports.default = createDefaultContext;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/style/createDefaultContext.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/style/createDefaultContext.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)))

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.black = exports.white = exports.fadedAccentColorParser = exports.fadedColorParser = exports.accentColorParser = exports.primaryColorParser = exports.rawColorParser = undefined;
exports.textColorParser = textColorParser;
exports.accentTextColorParser = accentTextColorParser;

var _colors = __webpack_require__(605);

var _lodash = __webpack_require__(655);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function colorParserComposer(modifier
// }


function colorParserComposer(modifier) {

	var colors = { red: _colors.red, pink: _colors.pink, purple: _colors.purple, deepPurple: _colors.deepPurple, indigo: _colors.indigo, blue: _colors.blue, lightBlue: _colors.lightBlue, cyan: _colors.cyan, teal: _colors.teal, green: _colors.green, lightGreen: _colors.lightGreen, lime: _colors.lime, yellow: _colors.yellow, amber: _colors.amber, orange: _colors.orange, deepOrange: _colors.deepOrange, grey: _colors.grey };

	return function (colorText) {

		if (colors.hasOwnProperty(colorText)) {
			return colors[colorText][modifier];
		} else {
			return 'no match';
		}
	};
}

function textColorParser(colorText, complete) {
	var whiteList = ['red', 'pink', 'purple', 'deepPurple', 'indigo', 'blue', 'teal', 'deepOrange', 'brown', 'blueGrey'];
	var blackList = ['lightBlue', 'cyan', 'green', 'lightGreen', 'lime', 'yellow', 'amber', 'orange', 'grey'];
	if (complete) {
		if (_lodash2.default.includes(whiteList, colorText)) {
			return '#000000';
		} else {
			return '#ffffff';
		}
	} else {
		if (_lodash2.default.includes(whiteList, colorText)) {
			return '#ffffff';
		} else {
			return '#000000';
		}
	}
}

function accentTextColorParser(colorText) {
	var whiteList = ['red', 'pink', 'purple', 'deepPurple', 'indigo', 'blue', 'deepOrange'];
	var blackList = ['lightBlue', 'cyan', 'teal', 'gren', 'lightGreen', 'lime', 'yellow', 'amber', 'orange'];

	if (_lodash2.default.includes(whiteList, colorText)) {
		return '#ffffff';
	} else {
		return '#000000';
	}
}

var rawColorParser = exports.rawColorParser = function rawColorParser(colorText) {
	var colors = { red: _colors.red, pink: _colors.pink, purple: _colors.purple, deepPurple: _colors.deepPurple, indigo: _colors.indigo, blue: _colors.blue, lightBlue: _colors.lightBlue, cyan: _colors.cyan, teal: _colors.teal, green: _colors.green, lightGreen: _colors.lightGreen, lime: _colors.lime, yellow: _colors.yellow, amber: _colors.amber, orange: _colors.orange, deepOrange: _colors.deepOrange, grey: _colors.grey };
	if (colors.hasOwnProperty(colorText)) {
		return colors[colorText];
	} else {
		return _colors.grey;
	}
};

var primaryColorParser = exports.primaryColorParser = colorParserComposer(500);

var accentColorParser = exports.accentColorParser = colorParserComposer('A400');

var fadedColorParser = exports.fadedColorParser = colorParserComposer(100);

var fadedAccentColorParser = exports.fadedAccentColorParser = colorParserComposer('A100');

var white = exports.white = {
	50: '#ffffff',
	100: '#ffffff',
	200: '#ffffff',
	300: '#ffffff',
	400: '#ffffff',
	500: '#ffffff',
	600: '#ffffff',
	700: '#ffffff',
	800: '#ffffff',
	900: '#ffffff',
	A100: '#ffffff',
	A200: '#ffffff',
	A400: '#ffffff',
	A700: '#fffff',
	contrastDefaultColor: 'dark'
};

var black = exports.black = {
	50: '#000000',
	100: '#000000',
	200: '#000000',
	300: '#000000',
	400: '#000000',
	500: '#000000',
	600: '#000000',
	700: '#000000',
	800: '#000000',
	900: '#000000',
	A100: '#000000',
	A200: '#000000',
	A400: '#000000',
	A700: '#000000',
	contrastDefaultColor: 'dark'
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/helpers/colorParser.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/helpers/colorParser.js"); } } })();

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.UPDATE_ERROR = exports.UPDATE_SUCCESS = exports.UPDATE_PROGRESS = exports.updateDataThrottled = exports.UPDATE_DATA = exports.UPDATE_ITEM = exports.CHANGE_COLOR = exports.REORDER_ITEM = exports.DELETE_ITEM = exports.COMPLETE_ITEM = exports.CHANGE_BASE = exports.NEW_ITEM = undefined;
exports.newItem = newItem;
exports.changeBaseItem = changeBaseItem;
exports.completeItem = completeItem;
exports.deleteItem = deleteItem;
exports.reorderItem = reorderItem;
exports.changeColor = changeColor;
exports.updateItem = updateItem;
exports.updateData = updateData;
exports.updateProgress = updateProgress;
exports.updateComplete = updateComplete;
exports.updateError = updateError;

var _axios = __webpack_require__(770);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(655);

var _lodash2 = _interopRequireDefault(_lodash);

var _throttleAction = __webpack_require__(789);

var _throttleAction2 = _interopRequireDefault(_throttleAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ===============
// Action Creators
// ===============

var NEW_ITEM = exports.NEW_ITEM = "NEW_ITEM";
function newItem() {
	var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "root";

	return {
		type: NEW_ITEM,
		payload: {
			content: content,
			parent: parent
		}
	};
}
var CHANGE_BASE = exports.CHANGE_BASE = "CHANGE_BASE";
function changeBaseItem(id) {
	return {
		type: CHANGE_BASE,
		payload: id
	};
}

var COMPLETE_ITEM = exports.COMPLETE_ITEM = "COMPLETE_ITEM";
function completeItem(id) {
	return {
		type: COMPLETE_ITEM,
		payload: id
	};
}

var DELETE_ITEM = exports.DELETE_ITEM = "DELETE_ITEM";
function deleteItem(id) {
	return {
		type: DELETE_ITEM,
		payload: id
	};
}

var REORDER_ITEM = exports.REORDER_ITEM = "REORDER_ITEM";
function reorderItem(parentID, oldIndex, newIndex) {
	return {
		type: REORDER_ITEM,
		payload: {
			parentID: parentID,
			oldIndex: oldIndex,
			newIndex: newIndex
		}
	};
}

var CHANGE_COLOR = exports.CHANGE_COLOR = "CHANGE_COLOR";
function changeColor(id, color) {
	return {
		type: CHANGE_COLOR,
		payload: {
			id: id,
			color: color
		}
	};
}

var UPDATE_ITEM = exports.UPDATE_ITEM = "UPDATE_ITEM";
function updateItem(id, newText) {
	return {
		type: UPDATE_ITEM,
		payload: {
			id: id,
			newText: newText
		}
	};
}

// export const UPDATE_DATA = "UPDATE_DATA";
// export function updateData(id, newState){
// 	var request = axios.put(`/todo/${id}`, newState)
// 	return{
// 		type:UPDATE_DATA,
// 		payload:request
// 	}
// }

var UPDATE_DATA = exports.UPDATE_DATA = "UPDATE_DATA";
function updateData(id, newState) {
	return function (dispatch) {
		dispatch(updateProgress());

		return _axios2.default.put('/todo/' + id, newState).then(function (response) {
			dispatch(updateComplete());
		}, function (error) {
			dispatch(updateError());
		});
	};
}

var updateDataThrottled = exports.updateDataThrottled = (0, _throttleAction2.default)(updateData, 5000);

var UPDATE_PROGRESS = exports.UPDATE_PROGRESS = "UPDATE_PROGRESS";
function updateProgress() {
	return {
		type: UPDATE_PROGRESS
	};
}

var UPDATE_SUCCESS = exports.UPDATE_SUCCESS = "UPDATE_SUCCESS";
function updateComplete() {
	return {
		type: UPDATE_SUCCESS
	};
}

var UPDATE_ERROR = exports.UPDATE_ERROR = "UPDATE_ERROR";
function updateError() {
	return {
		type: UPDATE_ERROR
	};
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/actions/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/actions/index.js"); } } })();

/***/ }),

/***/ 690:
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

var _styles = __webpack_require__(645);

var _createDefaultContext = __webpack_require__(561);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/App.js';


var styleSheet = (0, _styles.createStyleSheet)('App', function (theme) {
  return {
    '@global': {
      html: {
        background: theme.palette.background.default,
        fontFamily: theme.typography.fontFamily,
        WebkitFontSmoothing: 'antialiased', // Antialiasing.
        MozOsxFontSmoothing: 'grayscale' // Antialiasing.
      },
      body: {
        margin: 0
      },
      a: {
        color: 'inherit'
      }
    }
  };
});

var AppWrapper = function AppWrapper(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, props.children);
};

AppWrapper = (0, _styles.withStyles)(styleSheet)(AppWrapper);

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Remove the server-side injected CSS.
      var jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _getDefaultContext = (0, _createDefaultContext.getDefaultContext)(),
          styleManager = _getDefaultContext.styleManager,
          theme = _getDefaultContext.theme;

      return _react2.default.createElement(_styles.MuiThemeProvider, { styleManager: styleManager, theme: theme, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(AppWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, this.props.children));
    }
  }]);

  return App;
}(_react.Component);

App.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = App;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/App.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/App.js"); } } })();

/***/ }),

/***/ 699:
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

var _reactSortableHoc = __webpack_require__(698);

var _List = __webpack_require__(649);

var _Checkbox = __webpack_require__(703);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _IconButton = __webpack_require__(651);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Reorder = __webpack_require__(844);

var _Reorder2 = _interopRequireDefault(_Reorder);

var _Brightness = __webpack_require__(707);

var _Brightness2 = _interopRequireDefault(_Brightness);

var _DeleteForever = __webpack_require__(845);

var _DeleteForever2 = _interopRequireDefault(_DeleteForever);

var _Settings = __webpack_require__(708);

var _Settings2 = _interopRequireDefault(_Settings);

var _FormatListBulleted = __webpack_require__(846);

var _FormatListBulleted2 = _interopRequireDefault(_FormatListBulleted);

var _colors = __webpack_require__(605);

var _Button = __webpack_require__(678);

var _Button2 = _interopRequireDefault(_Button);

var _Menu = __webpack_require__(709);

var _Menu2 = _interopRequireDefault(_Menu);

var _Typography = __webpack_require__(650);

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = __webpack_require__(679);

var _Divider2 = _interopRequireDefault(_Divider);

var _colorParser = __webpack_require__(657);

var _ListItemTextArea = __webpack_require__(861);

var _ListItemTextArea2 = _interopRequireDefault(_ListItemTextArea);

var _ColorMenu = __webpack_require__(745);

var _ColorMenu2 = _interopRequireDefault(_ColorMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItem.js";
// import style from "./style.css";
// import PropTypes from 'prop-types'
// import _ from 'lodash';


var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (props) {

	var activeStyle = props.complete ? {} : { cursor: 'pointer' };
	var centerStyle = { display: 'flex', alignItems: 'center', margin: 12 };

	return _react2.default.createElement("span", { style: (0, _extends3.default)({}, props.completeStyle, activeStyle, centerStyle), __source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}, _react2.default.createElement(_Reorder2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 30
		}
	}));
});

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
						lineNumber: 79
					}
				}, "( " + completed + " / " + total + " complete)");
			}
		}
	}, {
		key: "content",
		value: function content() {
			var textColor = this.props.value.complete ? this.completeGrey : this.props.textColor;
			var contentTextStyle = this.props.value.complete ? { color: this.completeGrey, textDecoration: "line-through" } : { color: this.props.textColor };
			return _react2.default.createElement("span", { style: (0, _extends3.default)({}, contentTextStyle, { wordWrap: 'break-word', wordBreak: 'break-all' }), __source: {
					fileName: _jsxFileName,
					lineNumber: 92
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
			return _react2.default.createElement(_List.ListItem, { divider: true, style: { backgroundColor: this.props.itemColor, padding: 12, transition: 'all 0s, background-color .5s' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 119
				}
			}, _react2.default.createElement(DragHandle, {
				completeStyle: { color: textColor },
				complete: this.item.complete,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 120
				}
			}), _react2.default.createElement(_Checkbox2.default, {
				checked: this.item.complete,
				onClick: this.props.completeItemComposer(this.item.id),
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 124
				}
			}), _react2.default.createElement(_ListItemTextArea2.default, {
				primary: this.content(),
				secondary: this.completeDisplay(),
				textColor: textColor,
				rawText: this.item.content,
				updateItem: this.props.updateItem,
				id: this.item.id,
				complete: this.item.complete,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 130
				}
			}), _react2.default.createElement(_IconButton2.default, {
				onClick: this.props.changeBaseComposer(this.item.id),
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 140
				}
			}, _react2.default.createElement(_FormatListBulleted2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 144
				}
			})), _react2.default.createElement(_IconButton2.default, {
				onClick: this.openMenu,
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 146
				}
			}, _react2.default.createElement(_Settings2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 150
				}
			})), _react2.default.createElement(_Menu2.default, {
				id: this.item.id + "-menu",
				open: this.state.open,
				onRequestClose: this.closeMenu,
				anchorEl: this.state.anchorEl,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 152
				}
			}, _react2.default.createElement(_Typography2.default, {
				type: "subheading",
				align: 'center',
				style: { outline: 'none', paddingLeft: 16 },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 158
				}
			}, "Change Color"), _react2.default.createElement(_Divider2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 163
				}
			}), _react2.default.createElement(_ColorMenu2.default, {
				clickHandler: this.colorItemClickHandler,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 164
				}
			}), _react2.default.createElement(_Divider2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 167
				}
			}), _react2.default.createElement("div", {
				style: { textAlign: 'center' },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 168
				}
			}, _react2.default.createElement(_Button2.default, {
				style: { color: 'white', backgroundColor: _colors.red[500], marginTop: 8 },
				onClick: this.props.deleteItemComposer(this.item.id),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 171
				}
			}, _react2.default.createElement(_DeleteForever2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 175
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

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _IconButton = __webpack_require__(651);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Brightness = __webpack_require__(707);

var _Brightness2 = _interopRequireDefault(_Brightness);

var _colorParser = __webpack_require__(657);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ColorMenu.js';


var ColorMenu = function ColorMenu(props) {
	// var colors = ['red', 'purple', 'lightBlue', 'teal', 'lightGreen', 'yellow', 'orange', 'pink']
	var colors = ['red', 'pink', 'deepPurple', 'indigo', 'lightBlue', 'cyan', 'teal', 'green', 'lightGreen', 'yellow', 'orange', 'deepOrange'];
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, colors.map(function (color, index) {

		var breakLine = index % 4 === 3 ? _react2.default.createElement('br', {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 14
			}
		}) : "";

		return _react2.default.createElement('span', { key: color + '-' + index,
			onClick: props.clickHandler(color), __source: {
				fileName: _jsxFileName,
				lineNumber: 17
			}
		}, _react2.default.createElement(_IconButton2.default, {
			style: { color: (0, _colorParser.primaryColorParser)(color) },
			__source: {
				fileName: _jsxFileName,
				lineNumber: 19
			}
		}, _react2.default.createElement(_Brightness2.default, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 22
			}
		})), breakLine);
	}));
};

exports.default = ColorMenu;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ColorMenu.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ColorMenu.js"); } } })();

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(757);


/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(58);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(59);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _App = __webpack_require__(690);

var _App2 = _interopRequireDefault(_App);

var _index = __webpack_require__(763);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/pages/todo.js?entry';


var Todo = function (_Component) {
  (0, _inherits3.default)(Todo, _Component);

  function Todo() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Todo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Todo.__proto__ || (0, _getPrototypeOf2.default)(Todo)).call.apply(_ref, [this].concat(args))), _this), _this.seedState = _this.props.query.initialState, _this.listID = _this.props.query.initialState._id, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Todo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_App2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_index2.default, {
        seedState: this.seedState,
        listID: this.listID,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var query = _ref2.query;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', { query: query });

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Todo;
}(_react.Component);

exports.default = Todo;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/pages/todo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/pages/todo.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(75)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/todo")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(674);

var _redux = __webpack_require__(654);

var _reducers = __webpack_require__(768);

var _reducers2 = _interopRequireDefault(_reducers);

var _App = __webpack_require__(690);

var _App2 = _interopRequireDefault(_App);

var _reduxPromise = __webpack_require__(793);

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reduxDevtoolsExtension = __webpack_require__(799);

var _styles = __webpack_require__(645);

var _TodoContainer = __webpack_require__(800);

var _TodoContainer2 = _interopRequireDefault(_TodoContainer);

var _reduxThunk = __webpack_require__(1012);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/index.js";
// import ReactDOM from "react-dom";
// import registerServiceWorker from "./registerServiceWorker";


var createStoreWithMiddleware = (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default))(_redux.createStore);

var Boiler = function Boiler(props) {
	return _react2.default.createElement(_reactRedux.Provider, { store: createStoreWithMiddleware(_reducers2.default, props.seedState), __source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, _react2.default.createElement(_TodoContainer2.default, {
		listID: props.listID,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}));
};

// ReactDOM.render(<Boiler />, document.getElementById("root"));
// registerServiceWorker();

exports.default = Boiler;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/index.js"); } } })();

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(654);

var _items_reducer = __webpack_require__(769);

var _items_reducer2 = _interopRequireDefault(_items_reducer);

var _baseItem_reducer = __webpack_require__(791);

var _baseItem_reducer2 = _interopRequireDefault(_baseItem_reducer);

var _network_reducer = __webpack_require__(792);

var _network_reducer2 = _interopRequireDefault(_network_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	items: _items_reducer2.default,
	baseItem: _baseItem_reducer2.default,
	network: _network_reducer2.default
});

exports.default = rootReducer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/index.js"); } } })();

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = __webpack_require__(100);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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
	var removed = [];
	if (oldIndex === 0) {
		removed = arr.slice(1);
	} else {
		var before = arr.slice(0, oldIndex);
		var after = arr.slice(oldIndex + 1, arr.length);
		removed = [].concat((0, _toConsumableArray3.default)(before), (0, _toConsumableArray3.default)(after));
	}

	if (newIndex === 0) {
		return [arr[oldIndex]].concat((0, _toConsumableArray3.default)(removed));
	} else if (newIndex === arr.length - 1) {
		return [].concat((0, _toConsumableArray3.default)(removed), [arr[oldIndex]]);
	} else {
		before = removed.slice(0, newIndex);
		after = removed.slice(newIndex, removed.length);
		return [].concat((0, _toConsumableArray3.default)(before), [arr[oldIndex]], (0, _toConsumableArray3.default)(after));
	}
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

/***/ }),

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = __webpack_require__(662);

function baseItem() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "root";
	var action = arguments[1];

	switch (action.type) {
		case _actions.CHANGE_BASE:
			return action.payload;
		default:
			return state;
	}
}

exports.default = baseItem;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/baseItem_reducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/baseItem_reducer.js"); } } })();

/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = network;

var _lodash = __webpack_require__(655);

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = __webpack_require__(662);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = __webpack_require__(637);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _List = __webpack_require__(801);

var _List2 = _interopRequireDefault(_List);

var _reactRedux = __webpack_require__(674);

var _actions = __webpack_require__(662);

var _redux = __webpack_require__(654);

var _ListHeader = __webpack_require__(953);

var _ListHeader2 = _interopRequireDefault(_ListHeader);

var _Card = __webpack_require__(1006);

var _Card2 = _interopRequireDefault(_Card);

var _lodash = __webpack_require__(655);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/containers/TodoContainer.js";
// import style from "../components/ListItem/style.css";


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
			return _react2.default.createElement(_Card2.default, { style: (0, _defineProperty3.default)({ margin: "auto" }, "margin", "16px"), __source: {
					fileName: _jsxFileName,
					lineNumber: 128
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
					lineNumber: 129
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
					lineNumber: 142
				}
			}));
		}
	}]);

	return TodoContainer;
}(_react.Component);

function mapStateToProps(_ref2) {
	var items = _ref2.items,
	    baseItem = _ref2.baseItem;

	return { items: items, baseItem: baseItem };
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({ newItem: _actions.newItem, changeBaseItem: _actions.changeBaseItem, completeItem: _actions.completeItem, deleteItem: _actions.deleteItem, reorderItem: _actions.reorderItem, changeColor: _actions.changeColor, updateItem: _actions.updateItem, updateData: _actions.updateDataThrottled }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TodoContainer);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/containers/TodoContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/containers/TodoContainer.js"); } } })();

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _IncompleteList = __webpack_require__(802);

var _IncompleteList2 = _interopRequireDefault(_IncompleteList);

var _CompleteList = __webpack_require__(952);

var _CompleteList2 = _interopRequireDefault(_CompleteList);

var _styles = __webpack_require__(645);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/List.js";
// import style from "./style.css";
// import PropTypes from 'prop-types'
// import _ from 'lodash';


var styleSheet = (0, _styles.createStyleSheet)("List", function (theme) {
	return {
		container: {}
	};
});

var List = function List(props) {
	var itemsList = props.list;
	var baseItem = props.baseItem;
	var completeListItems = itemsList[baseItem].completeChildren;
	var incompleteListItems = itemsList[baseItem].incompleteChildren;

	completeListItems = populateList(completeListItems);
	incompleteListItems = populateList(incompleteListItems);

	function populateList(listArr) {
		return listArr.map(function (listID) {
			return itemsList[listID];
		});
	}

	var classes = props.classes;

	return _react2.default.createElement("div", { className: classes.container, __source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}, _react2.default.createElement(_IncompleteList2.default, {
		items: incompleteListItems,
		parentID: props.baseItem,
		renderChildren: true,
		changeBaseComposer: props.changeBaseComposer,
		deleteItemComposer: props.deleteItemComposer,
		completeItemComposer: props.completeItemComposer,
		reorderItemComposer: props.reorderItemComposer,
		changeColorComposer: props.changeColorComposer,
		updateItem: props.updateItem,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}), _react2.default.createElement(_CompleteList2.default, {
		items: completeListItems,
		parentID: props.baseItem,
		renderChildren: true,
		changeBaseComposer: props.changeBaseComposer,
		deleteItemComposer: props.deleteItemComposer,
		completeItemComposer: props.completeItemComposer,
		reorderItemComposer: props.reorderItemComposer,
		changeColorComposer: props.changeColorComposer,
		updateItem: props.updateItem,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 43
		}
	}));
};

List.propTypes = {};

exports.default = (0, _styles.withStyles)(styleSheet)(List);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/List.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/List.js"); } } })();

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactSortableHoc = __webpack_require__(698);

var _ListItem = __webpack_require__(699);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = __webpack_require__(649);

var _List2 = _interopRequireDefault(_List);

var _styles = __webpack_require__(645);

var _colorParser = __webpack_require__(657);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/IncompleteList.js";
// import style from "./style.css";
// import PropTypes from "prop-types";
// import _ from "lodash";


var styleSheet = (0, _styles.createStyleSheet)("IncompleteList", function (theme) {
	return {
		container: {
			listStyle: "none",
			padding: 0,
			margin: 0
		},
		root: {
			padding: 0
		},
		helper: {
			transition: 0
		}
	};
});

var SortableList = (0, _reactSortableHoc.SortableContainer)(function (props) {
	return _react2.default.createElement(_List2.default, { className: props.classForList, __source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, props.items.map(function (value, index) {
		return _react2.default.createElement(SortableListItem, {
			key: "item-" + value.id,
			index: index,
			value: value,
			changeBaseComposer: props.changeBaseComposer,
			deleteItemComposer: props.deleteItemComposer,
			completeItemComposer: props.completeItemComposer,
			changeColorComposer: props.changeColorComposer,
			bgColorComposer: props.bgColorComposer,
			textColorComposer: props.textColorComposer,
			updateItem: props.updateItem,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 35
			}
		});
	}));
});

var SortableListItem = (0, _reactSortableHoc.SortableElement)(function (props) {
	return _react2.default.createElement(_ListItem2.default, {
		value: props.value,
		changeBaseComposer: props.changeBaseComposer,
		deleteItemComposer: props.deleteItemComposer,
		completeItemComposer: props.completeItemComposer,
		changeColorComposer: props.changeColorComposer,
		itemColor: props.bgColorComposer(props.value.color),
		textColor: props.textColorComposer(props.value.color, props.value.complete),
		updateItem: props.updateItem,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 55
		}
	});
});

var IncompleteList = function IncompleteList(props) {
	var classes = props.classes;

	function handleSort(_ref) {
		var oldIndex = _ref.oldIndex,
		    newIndex = _ref.newIndex;

		props.reorderItemComposer(props.parentID, oldIndex, newIndex)();
	}

	return _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 77
		}
	}, _react2.default.createElement(SortableList, {
		items: props.items,
		useDragHandle: true,
		onSortEnd: handleSort,
		changeBaseComposer: props.changeBaseComposer,
		deleteItemComposer: props.deleteItemComposer,
		completeItemComposer: props.completeItemComposer,
		classForList: classes.root,
		changeColorComposer: props.changeColorComposer,
		bgColorComposer: _colorParser.primaryColorParser,
		textColorComposer: _colorParser.textColorParser,
		updateItem: props.updateItem,
		helperClass: props.classes.helper,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 78
		}
	}));
};

IncompleteList.propTypes = {};

exports.default = (0, _styles.withStyles)(styleSheet)(IncompleteList);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/IncompleteList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/IncompleteList.js"); } } })();

/***/ }),

/***/ 861:
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

var _List = __webpack_require__(649);

var _TextField = __webpack_require__(680);

var _TextField2 = _interopRequireDefault(_TextField);

var _reactTouch = __webpack_require__(719);

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
					style: (0, _extends3.default)({ color: this.props.textColor }, lineStyle, { wordWrap: 'normal', wordBreak: 'normal' }),
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
			event.preventDefault();
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
						lineNumber: 83
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
						lineNumber: 89
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
					lineNumber: 106
				}
			});
		}
	}]);

	return ListItemTextArea;
}(_react.Component);

exports.default = ListItemTextArea;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItemTextArea.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItemTextArea.js"); } } })();

/***/ }),

/***/ 952:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _ListItem = __webpack_require__(699);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = __webpack_require__(649);

var _List2 = _interopRequireDefault(_List);

var _styles = __webpack_require__(645);

var _colorParser = __webpack_require__(657);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/CompleteList.js";
// import style from "./style.css";
// import PropTypes from "prop-types";
// import _ from "lodash";


var styleSheet = (0, _styles.createStyleSheet)("CompleteList", function (theme) {
	return {
		container: {
			margin: 0,
			padding: 0
		}
	};
});

var CompleteList = function CompleteList(props) {
	var classes = props.classes;

	return _react2.default.createElement(_List2.default, { className: classes.container, __source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, props.items.map(function (value) {
		return _react2.default.createElement(_ListItem2.default, {
			key: "item-" + value.id,
			value: value,
			changeBaseComposer: props.changeBaseComposer,
			deleteItemComposer: props.deleteItemComposer,
			completeItemComposer: props.completeItemComposer,
			changeColorComposer: props.changeColorComposer,
			itemColor: (0, _colorParser.fadedColorParser)(value.color),
			textColor: (0, _colorParser.textColorParser)(value.color),
			updateItem: props.updateItem,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 24
			}
		});
	}));
};

CompleteList.propTypes = {};

exports.default = (0, _styles.withStyles)(styleSheet)(CompleteList);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/CompleteList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/CompleteList.js"); } } })();

/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = __webpack_require__(100);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(645);

var _Typography = __webpack_require__(650);

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = __webpack_require__(679);

var _Divider2 = _interopRequireDefault(_Divider);

var _ChevronRight = __webpack_require__(954);

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

var _NewItemForm = __webpack_require__(955);

var _NewItemForm2 = _interopRequireDefault(_NewItemForm);

var _colorParser = __webpack_require__(657);

var _Progress = __webpack_require__(964);

var _Progress2 = _interopRequireDefault(_Progress);

var _HeaderMenu = __webpack_require__(1004);

var _HeaderMenu2 = _interopRequireDefault(_HeaderMenu);

var _EditableTextArea = __webpack_require__(1005);

var _EditableTextArea2 = _interopRequireDefault(_EditableTextArea);

var _Checkbox = __webpack_require__(703);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _IconButton = __webpack_require__(651);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListHeader.js";
// import style from "./style.css";
// import PropTypes from "prop-types";
// import _ from "lodash";


var styleSheet = (0, _styles.createStyleSheet)("Header", function (theme) {
	return {
		titleContainer: {
			padding: 16,
			display: 'flex'
		},
		titleText: {
			flexGrow: 1
		},
		crumb: {
			alignItems: "center",
			display: "inline-flex",
			cursor: "pointer",
			"&:hover": {
				textDecoration: "underline"
			}
		},
		crumbContainer: {
			padding: 16
		}
	};
});

var ListHeader = function ListHeader(props) {
	var classes = props.classes;
	var currentItemColor = props.items[props.baseItem].color;
	var incompleteColor = (0, _colorParser.primaryColorParser)(currentItemColor);
	var incompleteTextColor = (0, _colorParser.textColorParser)(currentItemColor);
	var incompleteAccentColor = (0, _colorParser.accentColorParser)(currentItemColor);
	var completeAccentColor = (0, _colorParser.fadedAccentColorParser)(currentItemColor);
	var incompleteAccentTextColor = (0, _colorParser.accentTextColorParser)(currentItemColor);
	var complete = props.baseItem === 'root' ? false : props.items[props.baseItem].complete;

	var completeColor = (0, _colorParser.fadedColorParser)(currentItemColor);
	var textColor = complete ? "#000000" : incompleteTextColor;
	var bgColor = complete ? completeColor : incompleteColor;
	var accentColor = complete ? completeAccentColor : incompleteAccentColor;
	var accentTextColor = complete ? "#000000" : incompleteAccentTextColor;

	var headerText = props.items[props.baseItem].content;

	var BreadCrumb = function BreadCrumb() {
		var trail = [];
		var current = props.baseItem;
		var counter = 0;
		if (current === "root") {
			trail = ["root"];
		} else {
			while (props.items[current].parent !== "root" && counter < 10) {
				trail = [current].concat((0, _toConsumableArray3.default)(trail));
				current = props.items[current].parent;
				counter++;
			}
			trail = ["root", current].concat((0, _toConsumableArray3.default)(trail));
		}
		return _react2.default.createElement(_Typography2.default, {
			type: "body1",
			className: props.classes.crumbContainer,
			style: { color: textColor },
			__source: {
				fileName: _jsxFileName,
				lineNumber: 71
			}
		}, trail.map(function (item, index) {
			return _react2.default.createElement("span", {
				key: "breadcrumb-" + index,
				className: props.classes.crumb,
				onClick: props.changeBaseComposer(item),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, item === "root" ? "root" : props.items[item].content, index < trail.length - 1 ? _react2.default.createElement(_ChevronRight2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			}) : "", " ");
		}));
	};

	return _react2.default.createElement("div", {
		style: {
			backgroundColor: bgColor,
			color: textColor,
			transition: '.5s'

		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 97
		}
	}, _react2.default.createElement("div", { className: classes.titleContainer, __source: {
			fileName: _jsxFileName,
			lineNumber: 105
		}
	}, props.baseItem === 'root' ? _react2.default.createElement(_IconButton2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 107
		}
	}) : _react2.default.createElement(_Checkbox2.default, {
		checked: complete,
		onClick: props.completeItemComposer(props.baseItem),
		style: { color: textColor },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 108
		}
	}), _react2.default.createElement("div", { className: classes.titleText, __source: {
			fileName: _jsxFileName,
			lineNumber: 113
		}
	}, _react2.default.createElement(_EditableTextArea2.default, {
		primary: headerText,
		secondary: props.counterText,
		textColor: textColor,
		rawText: headerText,
		updateItem: props.updateItem,
		id: props.baseItem,
		complete: complete,
		header: true,

		__source: {
			fileName: _jsxFileName,
			lineNumber: 114
		}
	})), _react2.default.createElement(_HeaderMenu2.default, {
		textColor: textColor,
		baseItem: props.baseItem,
		changeColorComposer: props.changeColorComposer,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 126
		}
	})), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 132
		}
	}), _react2.default.createElement(BreadCrumb, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 133
		}
	}), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 134
		}
	}), _react2.default.createElement(_NewItemForm2.default, {
		newItemAction: props.newItemAction,
		textColor: textColor,
		accentColor: accentColor,
		accentTextColor: accentTextColor,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 135
		}
	}), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 141
		}
	}));
};

ListHeader.propTypes = {};

exports.default = (0, _styles.withStyles)(styleSheet)(ListHeader);

// <NetworkProgress
// textColor={textColor}
// updateData={props.updateData}
// />

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListHeader.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListHeader.js"); } } })();

/***/ }),

/***/ 955:
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

var _TextField = __webpack_require__(680);

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = __webpack_require__(678);

var _Button2 = _interopRequireDefault(_Button);

var _Grid = __webpack_require__(956);

var _Grid2 = _interopRequireDefault(_Grid);

var _styles = __webpack_require__(645);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/NewItemForm.js";
// import style from "./style.css";
// import PropTypes from 'prop-types'
// import _ from 'lodash';


var styleSheet = (0, _styles.createStyleSheet)("NewItemForm", function (theme) {
	return {
		container: {
			margin: "auto",
			paddingBottom: "16px",
			paddingTop: "16px",
			padding: 24,
			boxSizing: "border-box"
		},
		typeItem: {
			flexGrow: 1
		},
		white: {
			color: '#ffffff'
		},
		black: {
			color: '#000000'
		}
	};
});

var NewItemForm = function (_Component) {
	(0, _inherits3.default)(NewItemForm, _Component);

	function NewItemForm(props) {
		(0, _classCallCheck3.default)(this, NewItemForm);

		var _this = (0, _possibleConstructorReturn3.default)(this, (NewItemForm.__proto__ || (0, _getPrototypeOf2.default)(NewItemForm)).call(this, props));

		_this.state = {
			newItem: ""
		};
		_this.inputUpdate = _this.inputUpdate.bind(_this);
		_this.submitHandler = _this.submitHandler.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(NewItemForm, [{
		key: "submitHandler",
		value: function submitHandler(event) {
			event.preventDefault();
			this.props.newItemAction(this.state.newItem);
			this.setState({ newItem: "" });
		}
	}, {
		key: "inputUpdate",
		value: function inputUpdate(event) {
			this.setState({ newItem: event.target.value });
		}
	}, {
		key: "render",
		value: function render() {
			var classes = this.props.classes;
			var textColorClass = this.props.textColor === '#ffffff' ? classes.white : classes.black;
			return _react2.default.createElement("div", {
				className: classes.container,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement("form", { onSubmit: this.submitHandler, __source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, _react2.default.createElement(_Grid2.default, { container: true, gutter: 8, align: "center", __source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, _react2.default.createElement(_Grid2.default, { item: true, className: classes.typeItem, __source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, _react2.default.createElement(_TextField2.default, {
				id: "newItem",
				label: "New Item",
				type: "text",
				fullWidth: true,
				value: this.state.newItem,
				onChange: this.inputUpdate,
				InputProps: {
					style: {
						color: this.props.textColor
					}
				},
				InputLabelProps: {
					style: {
						color: this.props.textColor
					}
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			})), _react2.default.createElement(_Grid2.default, { item: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 82
				}
			}, _react2.default.createElement(_Button2.default, {
				type: "submit",
				raised: true,
				style: { color: this.props.accentTextColor, backgroundColor: this.props.accentColor }, __source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			}, "Make a New Item")))));
		}
	}]);

	return NewItemForm;
}(_react.Component);

NewItemForm.propTypes = {};

exports.default = (0, _styles.withStyles)(styleSheet)(NewItemForm);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/NewItemForm.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/NewItemForm.js"); } } })();

/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(674);

var _Button = __webpack_require__(678);

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = __webpack_require__(651);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Check = __webpack_require__(965);

var _Check2 = _interopRequireDefault(_Check);

var _Save = __webpack_require__(966);

var _Save2 = _interopRequireDefault(_Save);

var _Report = __webpack_require__(967);

var _Report2 = _interopRequireDefault(_Report);

var _Autorenew = __webpack_require__(968);

var _Autorenew2 = _interopRequireDefault(_Autorenew);

var _reactMdSpinner = __webpack_require__(969);

var _reactMdSpinner2 = _interopRequireDefault(_reactMdSpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/Progress.js';


var NetworkProgress = function NetworkProgress(props) {
	var icon = '';
	switch (props.network) {
		case 'progress':
			icon = _react2.default.createElement(_reactMdSpinner2.default, { singleColor: props.textColor, __source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			});
			break;
		case 'success':
			icon = _react2.default.createElement(_Check2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			});
			break;
		case 'error':
			icon = _react2.default.createElement(_Report2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			});
			break;
	}
	return _react2.default.createElement('span', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}, _react2.default.createElement(_IconButton2.default, {
		style: { color: props.textColor },
		onClick: props.updateData,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 29
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

},[756]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy90b2RvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0hlYWRlck1lbnUuanM/ZDI0ZGUzMCIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvRWRpdGFibGVUZXh0QXJlYS5qcz9kMjRkZTMwIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvc3R5bGUvY3JlYXRlRGVmYXVsdENvbnRleHQuanM/ZDI0ZGUzMCIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2hlbHBlcnMvY29sb3JQYXJzZXIuanM/ZDI0ZGUzMCIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2FjdGlvbnMvaW5kZXguanM/ZDI0ZGUzMCIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL0FwcC5qcz9kMjRkZTMwIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SXRlbS5qcz9kMjRkZTMwIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9Db2xvck1lbnUuanM/ZDI0ZGUzMCIsIndlYnBhY2s6Ly8vLi9wYWdlcy90b2RvLmpzP2QyNGRlMzAiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9pbmRleC5qcz9kMjRkZTMwIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvcmVkdWNlcnMvaW5kZXguanM/ZDI0ZGUzMCIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL2l0ZW1zX3JlZHVjZXIuanM/ZDI0ZGUzMCIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL2Jhc2VJdGVtX3JlZHVjZXIuanM/ZDI0ZGUzMCIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL25ldHdvcmtfcmVkdWNlci5qcz9kMjRkZTMwIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29udGFpbmVycy9Ub2RvQ29udGFpbmVyLmpzP2QyNGRlMzAiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3QuanM/ZDI0ZGUzMCIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvSW5jb21wbGV0ZUxpc3QuanM/ZDI0ZGUzMCIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdEl0ZW1UZXh0QXJlYS5qcz9kMjRkZTMwIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9Db21wbGV0ZUxpc3QuanM/ZDI0ZGUzMCIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdEhlYWRlci5qcz9kMjRkZTMwIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9OZXdJdGVtRm9ybS5qcz9kMjRkZTMwIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9Qcm9ncmVzcy5qcz9kMjRkZTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJ21hdGVyaWFsLXVpLWljb25zL1NldHRpbmdzJztcbmltcG9ydCBNZW51LCB7IE1lbnVJdGVtIH0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudSc7XG5pbXBvcnQgQ29sb3JNZW51IGZyb20gJy4vQ29sb3JNZW51LmpzJ1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnbWF0ZXJpYWwtdWkvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdtYXRlcmlhbC11aS9EaXZpZGVyJztcblxuY2xhc3MgSGVhZGVyTWVudSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMuc3RhdGU9e1xuXHRcdFx0b3BlbjpmYWxzZSxcblx0XHRcdGFuY2hvckVsOicnXG5cdFx0fVxuXG5cdFx0dGhpcy5vcGVuTWVudSA9IHRoaXMub3Blbk1lbnUuYmluZCh0aGlzKVxuXHRcdHRoaXMuY2xvc2VNZW51ID0gdGhpcy5jbG9zZU1lbnUuYmluZCh0aGlzKVxuXHRcdHRoaXMuY29sb3JJdGVtQ2xpY2tIYW5kbGVyID0gdGhpcy5jb2xvckl0ZW1DbGlja0hhbmRsZXIuYmluZCh0aGlzKVxuXHR9XG5cblx0b3Blbk1lbnUoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe29wZW46dHJ1ZSwgYW5jaG9yRWw6IGV2ZW50LmN1cnJlbnRUYXJnZXR9KVxuXHR9XG5cblx0Y2xvc2VNZW51KCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7b3BlbjpmYWxzZX0pXG5cdH1cblxuXHRjb2xvckl0ZW1DbGlja0hhbmRsZXIoY29sb3JOYW1lKXtcblx0XHR2YXIgY2xvc2UgPSB0aGlzLmNsb3NlTWVudVxuXHRcdGxldCBjaGFuZ2VDb2xvciA9IHRoaXMucHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcih0aGlzLnByb3BzLmJhc2VJdGVtLCBjb2xvck5hbWUpXG5cdFx0bGV0IHByb3BzQ29sb3IgPSB0aGlzLnByb3BzLmJnQ29sb3Jcblx0XHRyZXR1cm4gZnVuY3Rpb24oKXtcblx0XHRjaGFuZ2VDb2xvcigpXG5cdFx0Y2xvc2UoKVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9wZW5NZW51fVxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnRoaXMucHJvcHMudGV4dENvbG9yfX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxTZXR0aW5ncyAvPlxuXHRcdFx0XHQ8L0ljb25CdXR0b24+XG5cdFx0XHRcdDxNZW51XG5cdFx0XHRcdGlkPXtgJHt0aGlzLnByb3BzLmJhc2VJdGVtfS1tZW51YH1cblx0XHRcdFx0b3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuXHRcdFx0XHRvblJlcXVlc3RDbG9zZT17dGhpcy5jbG9zZU1lbnV9XG5cdFx0XHRcdGFuY2hvckVsPXt0aGlzLnN0YXRlLmFuY2hvckVsfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFR5cG9ncmFwaHlcblx0XHRcdFx0XHR0eXBlPXtcInN1YmhlYWRpbmdcIn1cblx0XHRcdFx0XHRhbGlnbj17J2NlbnRlcid9XG5cdFx0XHRcdFx0c3R5bGU9e3tvdXRsaW5lOidub25lJywgcGFkZGluZ0xlZnQ6MTZ9fVxuXHRcdFx0XHRcdD5DaGFuZ2UgQ29sb3I8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0PERpdmlkZXIgLz5cblx0XHRcdFx0XHQ8Q29sb3JNZW51XG5cdFx0XHRcdFx0Y2xpY2tIYW5kbGVyPXt0aGlzLmNvbG9ySXRlbUNsaWNrSGFuZGxlcn1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlck1lbnVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvSGVhZGVyTWVudS5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL0xpc3RcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIm1hdGVyaWFsLXVpL1RleHRGaWVsZFwiO1xuaW1wb3J0IHsgSG9sZGFibGUsIGRlZmluZUhvbGQgfSBmcm9tICdyZWFjdC10b3VjaCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdtYXRlcmlhbC11aS9UeXBvZ3JhcGh5J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5cbmNvbnN0IE5vbkVkaXRJdGVtID0gKHByb3BzKSA9PiB7XG5cdFx0dmFyIGxpbmVTdHlsZSA9IHByb3BzLmNvbXBsZXRlID8ge3RleHREZWNvcmF0aW9uOidsaW5lLXRocm91Z2gnfSA6IHt9XG5cdFx0Y29uc3QgaG9sZCA9IGRlZmluZUhvbGQoe3VwZGF0ZUV2ZXJ5OiA1MCwgaG9sZEZvcjogNTAwfSk7XG5cdFx0XHRcdHJldHVybihcblx0XHRcdDxIb2xkYWJsZVxuXHRcdFx0Y29uZmlnPXtob2xkfVxuXHRcdFx0b25Ib2xkQ29tcGxldGU9e3Byb3BzLnVwZGF0ZUhhbmRsZXJ9XG5cdFx0XHQ+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8VHlwb2dyYXBoeVxuXHRcdFx0XHRcdHR5cGU9e1wiaGVhZGxpbmVcIn1cblx0XHRcdFx0XHRhbGlnbj17XCJjZW50ZXJcIn1cblx0XHRcdFx0XHRzdHlsZT17e2NvbG9yOnByb3BzLnRleHRDb2xvciwgLi4ubGluZVN0eWxlfX1cblx0XHRcdFx0XHRvbkRvdWJsZUNsaWNrPXtwcm9wcy51cGRhdGVIYW5kbGVyfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtwcm9wcy5wcmltYXJ5fVxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdDxUeXBvZ3JhcGh5XG5cdFx0XHRcdFx0dHlwZT17XCJzdWJoZWFkaW5nXCJ9XG5cdFx0XHRcdFx0YWxpZ249e1wiY2VudGVyXCJ9XG5cdFx0XHRcdFx0c3R5bGU9e3tjb2xvcjpwcm9wcy50ZXh0Q29sb3J9fVxuXHRcdFx0XHRcdG9uRG91YmxlQ2xpY2s9e3Byb3BzLnVwZGF0ZUhhbmRsZXJ9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3Byb3BzLnNlY29uZGFyeX1cblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvSG9sZGFibGU+XG5cdFx0XHQpXG5cdH1cblxuXG5cbmNsYXNzIEVkaXRhYmxlVGV4dEFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLnN0YXRlPXtcblx0XHRcdGVkaXRNb2RlOmZhbHNlLFxuXHRcdFx0ZWRpdFRleHQ6XCJcIlxuXHRcdH1cblxuXHRcdHRoaXMuVGV4dENvbnRhaW5lciA9IHRoaXMuVGV4dENvbnRhaW5lci5iaW5kKHRoaXMpXG5cdFx0dGhpcy5kb3VibGVDbGlja0hhbmRsZXIgPSB0aGlzLmRvdWJsZUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpXG5cdFx0dGhpcy5FZGl0SXRlbSA9IHRoaXMuRWRpdEl0ZW0uYmluZCh0aGlzKVxuXHRcdHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdHRoaXMuaGFuZGxlQmx1ciA9IHRoaXMuaGFuZGxlQmx1ci5iaW5kKHRoaXMpXG5cdH1cblx0RWRpdEl0ZW0ocHJvcHMpe1xuXHRcdHJldHVybihcblx0XHRcdDxmb3JtXG5cdFx0XHRvblN1Ym1pdD17dGhpcy5oYW5kbGVCbHVyfVxuXHRcdFx0c3R5bGU9e3t3aWR0aDonMTAwJSd9fVxuXHRcdFx0PlxuXHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZWRpdFRleHR9XG5cdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG5cdFx0XHRvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cblx0XHRcdGZ1bGxXaWR0aD17dHJ1ZX1cblx0XHRcdGF1dG9Gb2N1cz17dHJ1ZX1cblx0XHRcdElucHV0UHJvcHM9e3tzdHlsZTp7XG5cdFx0XHRcdFx0Y29sb3I6dGhpcy5wcm9wcy50ZXh0Q29sb3Jcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Lz5cblx0XHRcdDwvZm9ybT5cblx0XHRcdClcblx0fVxuXG5cdGhhbmRsZUNoYW5nZShldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZWRpdFRleHQ6ZXZlbnQudGFyZ2V0LnZhbHVlfSlcblx0fVxuXG5cdGhhbmRsZUJsdXIoZXZlbnQpe1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHR0aGlzLnByb3BzLnVwZGF0ZUl0ZW0odGhpcy5wcm9wcy5pZCwgdGhpcy5zdGF0ZS5lZGl0VGV4dClcblx0XHR0aGlzLnNldFN0YXRlKHtlZGl0TW9kZTpmYWxzZX0pXG5cdH1cblxuXHRUZXh0Q29udGFpbmVyKCl7XG5cdFx0dmFyIEVkaXRJdGVtID0gdGhpcy5FZGl0SXRlbVxuXHRcdGlmKHRoaXMuc3RhdGUuZWRpdE1vZGUpe1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0PEVkaXRJdGVtXG5cblx0XHRcdC8+XG5cdFx0XHQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PE5vbkVkaXRJdGVtXG5cdFx0XHRcdHN0eWxlPXt7Y29sb3I6dGhpcy5wcm9wcy50ZXh0Q29sb3IscGFkZGluZzonMHB4Jywgd29yZFdyYXAgOiAnYnJlYWstd29yZCd9fVxuXHRcdFx0XHRjb21wbGV0ZT17dGhpcy5wcm9wcy5jb21wbGV0ZX1cblx0XHRcdFx0dXBkYXRlSGFuZGxlcj17dGhpcy5kb3VibGVDbGlja0hhbmRsZXJ9XG5cdFx0XHRcdHRleHRDb2xvcj17dGhpcy5wcm9wcy50ZXh0Q29sb3J9XG5cdFx0XHRcdHByaW1hcnk9e3RoaXMucHJvcHMucHJpbWFyeX1cblx0XHRcdFx0c2Vjb25kYXJ5PXt0aGlzLnByb3BzLnNlY29uZGFyeX1cblx0XHRcdFx0Y29tcGxldGU9e3RoaXMucHJvcHMuY29tcGxldGV9XG5cdFx0XHRcdC8+XG5cdFx0XHQpXG5cdFx0fVxuXHR9XG5cblx0ZG91YmxlQ2xpY2tIYW5kbGVyKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZWRpdE1vZGU6dHJ1ZSwgZWRpdFRleHQ6dGhpcy5wcm9wcy5wcmltYXJ5fSlcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHZhciBUZXh0Q29udGFpbmVyID0gdGhpcy5UZXh0Q29udGFpbmVyXG5cdFx0cmV0dXJuKFxuXHRcdFx0PFRleHRDb250YWluZXIgLz5cblx0XHRcdCl9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRhYmxlVGV4dEFyZWFcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9FZGl0YWJsZVRleHRBcmVhLmpzIiwiaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInXG5pbXBvcnQgY3JlYXRlUGFsZXR0ZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBjcmVhdGVNdWlUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgeyBwdXJwbGUsIGdyZWVuLCBncmV5IH0gZnJvbSAnbWF0ZXJpYWwtdWkvY29sb3JzJ1xuXG5jb25zdCBjcmVhdGVEZWZhdWx0Q29udGV4dCA9ICgpID0+XG4gIE11aVRoZW1lUHJvdmlkZXIuY3JlYXRlRGVmYXVsdENvbnRleHQoe1xuICAgIHRoZW1lOiBjcmVhdGVNdWlUaGVtZSh7XG4gICAgICBwYWxldHRlOiBjcmVhdGVQYWxldHRlKHtcbiAgICAgICAgcHJpbWFyeTogZ3JleVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4vLyBTaW5nbGV0b24gaGFjayBhcyB0aGVyZSBpcyBubyB3YXkgdG8gcGFzcyB2YXJpYWJsZXMgZnJvbSBfZG9jdW1lbnQuanMgdG8gcGFnZXMgeWV0LlxubGV0IGNvbnRleHQgPSBudWxsXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0Q29udGV4dCAoKSB7XG4gIGNvbnRleHQgPSBjcmVhdGVEZWZhdWx0Q29udGV4dCgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0Q29udGV4dCAoKSB7XG4gIC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgc3RvcmUgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIGNvbnRleHRcbiAgfVxuXG4gIC8vIFJldXNlIHN0b3JlIG9uIHRoZSBjbGllbnQtc2lkZVxuICBpZiAoIWNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY3JlYXRlRGVmYXVsdENvbnRleHQoKVxuICB9XG5cbiAgcmV0dXJuIGNvbnRleHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGVmYXVsdENvbnRleHRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvc3R5bGUvY3JlYXRlRGVmYXVsdENvbnRleHQuanMiLCJpbXBvcnQgeyByZWQscGluayxwdXJwbGUsZGVlcFB1cnBsZSxpbmRpZ28sYmx1ZSwgbGlnaHRCbHVlLCBjeWFuLCB0ZWFsLCBncmVlbiwgbGlnaHRHcmVlbiwgbGltZSwgeWVsbG93LCBhbWJlciwgb3JhbmdlLCBkZWVwT3JhbmdlLGdyZXkgfSBmcm9tIFwibWF0ZXJpYWwtdWkvY29sb3JzXCJcblxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuXG4vLyBmdW5jdGlvbiBjb2xvclBhcnNlckNvbXBvc2VyKG1vZGlmaWVyXG4vLyB9XG5cblxuZnVuY3Rpb24gY29sb3JQYXJzZXJDb21wb3Nlcihtb2RpZmllcil7XG5cblx0XHR2YXIgY29sb3JzID0geyByZWQscGluayxwdXJwbGUsZGVlcFB1cnBsZSxpbmRpZ28sYmx1ZSwgbGlnaHRCbHVlLCBjeWFuLCB0ZWFsLCBncmVlbiwgbGlnaHRHcmVlbiwgbGltZSwgeWVsbG93LCBhbWJlciwgb3JhbmdlLCBkZWVwT3JhbmdlLCBncmV5IH07XG5cblx0cmV0dXJuIGZ1bmN0aW9uKGNvbG9yVGV4dCl7XG5cblxuXHRcdGlmKCBjb2xvcnMuaGFzT3duUHJvcGVydHkoY29sb3JUZXh0KSl7XG5cdFx0XHRyZXR1cm4gY29sb3JzW2NvbG9yVGV4dF1bbW9kaWZpZXJdXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAnbm8gbWF0Y2gnXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0Q29sb3JQYXJzZXIoY29sb3JUZXh0LCBjb21wbGV0ZSl7XG5cdHZhciB3aGl0ZUxpc3QgPSBbJ3JlZCcsJ3BpbmsnLCdwdXJwbGUnLCdkZWVwUHVycGxlJywnaW5kaWdvJywnYmx1ZScsJ3RlYWwnLCdkZWVwT3JhbmdlJywnYnJvd24nLCdibHVlR3JleSddO1xuXHR2YXIgYmxhY2tMaXN0ID0gWydsaWdodEJsdWUnLCdjeWFuJywnZ3JlZW4nLCdsaWdodEdyZWVuJywnbGltZScsJ3llbGxvdycsJ2FtYmVyJywnb3JhbmdlJywnZ3JleSddO1xuXHRpZihjb21wbGV0ZSl7XG5cdFx0aWYoXy5pbmNsdWRlcyh3aGl0ZUxpc3QsIGNvbG9yVGV4dCkpe1xuXHRcdFx0cmV0dXJuICcjMDAwMDAwJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJyNmZmZmZmYnXG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdFx0aWYoXy5pbmNsdWRlcyh3aGl0ZUxpc3QsIGNvbG9yVGV4dCkpe1xuXHRcdFx0XHRyZXR1cm4gJyNmZmZmZmYnXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAnIzAwMDAwMCdcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjY2VudFRleHRDb2xvclBhcnNlcihjb2xvclRleHQpe1xuXHR2YXIgd2hpdGVMaXN0ID0gWydyZWQnLCdwaW5rJywncHVycGxlJywnZGVlcFB1cnBsZScsICdpbmRpZ28nLCdibHVlJywnZGVlcE9yYW5nZSddXG5cdHZhciBibGFja0xpc3QgPSBbJ2xpZ2h0Qmx1ZScsICdjeWFuJywndGVhbCcsJ2dyZW4nLCdsaWdodEdyZWVuJywnbGltZScsJ3llbGxvdycsJ2FtYmVyJywnb3JhbmdlJ11cblxuXHRpZihfLmluY2x1ZGVzKHdoaXRlTGlzdCwgY29sb3JUZXh0KSl7XG5cdFx0cmV0dXJuICcjZmZmZmZmJ1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAnIzAwMDAwMCdcblx0fVxufVxuXG5leHBvcnQgY29uc3QgcmF3Q29sb3JQYXJzZXIgPSAoY29sb3JUZXh0KSA9PiB7XG5cdFx0XHR2YXIgY29sb3JzID0geyByZWQscGluayxwdXJwbGUsZGVlcFB1cnBsZSxpbmRpZ28sYmx1ZSwgbGlnaHRCbHVlLCBjeWFuLCB0ZWFsLCBncmVlbiwgbGlnaHRHcmVlbiwgbGltZSwgeWVsbG93LCBhbWJlciwgb3JhbmdlLCBkZWVwT3JhbmdlLGdyZXkgfTtcblx0XHRpZiggY29sb3JzLmhhc093blByb3BlcnR5KGNvbG9yVGV4dCkpe1xuXHRcdFx0cmV0dXJuIGNvbG9yc1tjb2xvclRleHRdXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBncmV5XG5cdFx0fVxufVxuXG5leHBvcnQgY29uc3QgcHJpbWFyeUNvbG9yUGFyc2VyID0gY29sb3JQYXJzZXJDb21wb3Nlcig1MDApO1xuXG5leHBvcnQgY29uc3QgYWNjZW50Q29sb3JQYXJzZXIgPSBjb2xvclBhcnNlckNvbXBvc2VyKCdBNDAwJylcblxuZXhwb3J0IGNvbnN0IGZhZGVkQ29sb3JQYXJzZXIgPSBjb2xvclBhcnNlckNvbXBvc2VyKDEwMClcblxuZXhwb3J0IGNvbnN0IGZhZGVkQWNjZW50Q29sb3JQYXJzZXIgPSBjb2xvclBhcnNlckNvbXBvc2VyKCdBMTAwJylcblxuXG5leHBvcnQgY29uc3Qgd2hpdGUgPSB7XG4gIDUwOiBcdCcjZmZmZmZmJyxcbiAgMTAwOiBcdCcjZmZmZmZmJyxcbiAgMjAwOiBcdCcjZmZmZmZmJyxcbiAgMzAwOiBcdCcjZmZmZmZmJyxcbiAgNDAwOiBcdCcjZmZmZmZmJyxcbiAgNTAwOiBcdCcjZmZmZmZmJyxcbiAgNjAwOiBcdCcjZmZmZmZmJyxcbiAgNzAwOiBcdCcjZmZmZmZmJyxcbiAgODAwOiBcdCcjZmZmZmZmJyxcbiAgOTAwOiBcdCcjZmZmZmZmJyxcbiAgQTEwMDogJyNmZmZmZmYnLFxuICBBMjAwOiAnI2ZmZmZmZicsXG4gIEE0MDA6ICcjZmZmZmZmJyxcbiAgQTcwMDogJyNmZmZmZicsXG4gIGNvbnRyYXN0RGVmYXVsdENvbG9yOiAnZGFyaydcbn07XG5cbmV4cG9ydCBjb25zdCBibGFjayA9IHtcbiAgNTA6IFx0JyMwMDAwMDAnLFxuICAxMDA6IFx0JyMwMDAwMDAnLFxuICAyMDA6IFx0JyMwMDAwMDAnLFxuICAzMDA6IFx0JyMwMDAwMDAnLFxuICA0MDA6IFx0JyMwMDAwMDAnLFxuICA1MDA6IFx0JyMwMDAwMDAnLFxuICA2MDA6IFx0JyMwMDAwMDAnLFxuICA3MDA6IFx0JyMwMDAwMDAnLFxuICA4MDA6IFx0JyMwMDAwMDAnLFxuICA5MDA6IFx0JyMwMDAwMDAnLFxuICBBMTAwOiAnIzAwMDAwMCcsXG4gIEEyMDA6ICcjMDAwMDAwJyxcbiAgQTQwMDogJyMwMDAwMDAnLFxuICBBNzAwOiAnIzAwMDAwMCcsXG4gIGNvbnRyYXN0RGVmYXVsdENvbG9yOiAnZGFyaydcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2hlbHBlcnMvY29sb3JQYXJzZXIuanMiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgdGhyb3R0bGVBY3Rpb24gZnJvbSAndGhyb3R0bGUtYWN0aW9uJztcblxuXG4vLyA9PT09PT09PT09PT09PT1cbi8vIEFjdGlvbiBDcmVhdG9yc1xuLy8gPT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjb25zdCBORVdfSVRFTSA9IFwiTkVXX0lURU1cIjtcbmV4cG9ydCBmdW5jdGlvbiBuZXdJdGVtKGNvbnRlbnQgPSBcIlwiLCBwYXJlbnQgPSBcInJvb3RcIikge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE5FV19JVEVNLFxuXHRcdHBheWxvYWQ6IHtcblx0XHRcdGNvbnRlbnQsXG5cdFx0XHRwYXJlbnRcblx0XHR9XG5cdH07XG59XG5leHBvcnQgY29uc3QgQ0hBTkdFX0JBU0UgPSBcIkNIQU5HRV9CQVNFXCI7XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQmFzZUl0ZW0oaWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfQkFTRSxcblx0XHRwYXlsb2FkOiBpZFxuXHR9O1xufVxuXG5leHBvcnQgY29uc3QgQ09NUExFVEVfSVRFTSA9IFwiQ09NUExFVEVfSVRFTVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXRlSXRlbShpZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENPTVBMRVRFX0lURU0sXG5cdFx0cGF5bG9hZDogaWRcblx0fTtcbn1cblxuZXhwb3J0IGNvbnN0IERFTEVURV9JVEVNID0gXCJERUxFVEVfSVRFTVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oaWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBERUxFVEVfSVRFTSxcblx0XHRwYXlsb2FkOiBpZFxuXHR9O1xufVxuXG5leHBvcnQgY29uc3QgUkVPUkRFUl9JVEVNID0gXCJSRU9SREVSX0lURU1cIjtcbmV4cG9ydCBmdW5jdGlvbiByZW9yZGVySXRlbShwYXJlbnRJRCwgb2xkSW5kZXgsIG5ld0luZGV4KSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogUkVPUkRFUl9JVEVNLFxuXHRcdHBheWxvYWQ6IHtcblx0XHRcdHBhcmVudElELFxuXHRcdFx0b2xkSW5kZXgsXG5cdFx0XHRuZXdJbmRleFxuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGNvbnN0IENIQU5HRV9DT0xPUiA9IFwiQ0hBTkdFX0NPTE9SXCI7XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ29sb3IoaWQsY29sb3Ipe1xuXHRyZXR1cm57XG5cdFx0dHlwZTogQ0hBTkdFX0NPTE9SLFxuXHRcdHBheWxvYWQ6IHtcblx0XHRcdGlkLFxuXHRcdFx0Y29sb3Jcblx0XHR9XG5cdH1cbn1cblxuXG5leHBvcnQgY29uc3QgVVBEQVRFX0lURU0gPSBcIlVQREFURV9JVEVNXCI7XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbShpZCxuZXdUZXh0KXtcblx0cmV0dXJuIHtcblx0XHR0eXBlOlVQREFURV9JVEVNLFxuXHRcdHBheWxvYWQ6e1xuXHRcdFx0aWQsXG5cdFx0XHRuZXdUZXh0XG5cdFx0fVxuXHR9XG59XG5cbi8vIGV4cG9ydCBjb25zdCBVUERBVEVfREFUQSA9IFwiVVBEQVRFX0RBVEFcIjtcbi8vIGV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEYXRhKGlkLCBuZXdTdGF0ZSl7XG4vLyBcdHZhciByZXF1ZXN0ID0gYXhpb3MucHV0KGAvdG9kby8ke2lkfWAsIG5ld1N0YXRlKVxuLy8gXHRyZXR1cm57XG4vLyBcdFx0dHlwZTpVUERBVEVfREFUQSxcbi8vIFx0XHRwYXlsb2FkOnJlcXVlc3Rcbi8vIFx0fVxuLy8gfVxuXG5leHBvcnQgY29uc3QgVVBEQVRFX0RBVEEgPSBcIlVQREFURV9EQVRBXCJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEYXRhKGlkLCBuZXdTdGF0ZSl7XG5cdHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0XHRkaXNwYXRjaCh1cGRhdGVQcm9ncmVzcygpKVxuXG5cdFx0cmV0dXJuIGF4aW9zLnB1dChgL3RvZG8vJHtpZH1gLCBuZXdTdGF0ZSlcblx0XHRcdC50aGVuKFxuXG5cdFx0XHRcdHJlc3BvbnNlID0+IHtcblx0XHRcdFx0XHRkaXNwYXRjaCh1cGRhdGVDb21wbGV0ZSgpKVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdGVycm9yID0+IHtcblx0XHRcdFx0XHRkaXNwYXRjaCh1cGRhdGVFcnJvcigpKVxuXHRcdFx0XHR9XG5cdFx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlRGF0YVRocm90dGxlZCA9IHRocm90dGxlQWN0aW9uKHVwZGF0ZURhdGEsIDUwMDApO1xuXG5cbmV4cG9ydCBjb25zdCBVUERBVEVfUFJPR1JFU1MgPSBcIlVQREFURV9QUk9HUkVTU1wiXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3MoKXtcblx0cmV0dXJue1xuXHRcdHR5cGU6VVBEQVRFX1BST0dSRVNTXG5cdH1cbn1cblxuXG5leHBvcnQgY29uc3QgVVBEQVRFX1NVQ0NFU1MgPSBcIlVQREFURV9TVUNDRVNTXCJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb21wbGV0ZSgpe1xuXHRyZXR1cm57XG5cdFx0dHlwZTpVUERBVEVfU1VDQ0VTU1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfRVJST1IgPSBcIlVQREFURV9FUlJPUlwiXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRXJyb3IoKXtcblx0cmV0dXJue1xuXHRcdHR5cGU6VVBEQVRFX0VSUk9SXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2FjdGlvbnMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0LCBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzJ1xuaW1wb3J0IHsgZ2V0RGVmYXVsdENvbnRleHQgfSBmcm9tICcuL3N0eWxlL2NyZWF0ZURlZmF1bHRDb250ZXh0J1xuXG5jb25zdCBzdHlsZVNoZWV0ID0gY3JlYXRlU3R5bGVTaGVldCgnQXBwJywgdGhlbWUgPT4gKHtcbiAgJ0BnbG9iYWwnOiB7XG4gICAgaHRtbDoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsXG4gICAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLCAvLyBBbnRpYWxpYXNpbmcuXG4gICAgICBNb3pPc3hGb250U21vb3RoaW5nOiAnZ3JheXNjYWxlJyAvLyBBbnRpYWxpYXNpbmcuXG4gICAgfSxcbiAgICBib2R5OiB7XG4gICAgICBtYXJnaW46IDBcbiAgICB9LFxuICAgIGE6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgICB9XG4gIH1cbn0pKVxuXG5sZXQgQXBwV3JhcHBlciA9IHByb3BzID0+IDxkaXY+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuXG5BcHBXcmFwcGVyID0gd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShBcHBXcmFwcGVyKVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpXG4gICAgaWYgKGpzc1N0eWxlcyAmJiBqc3NTdHlsZXMucGFyZW50Tm9kZSkge1xuICAgICAganNzU3R5bGVzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBzdHlsZU1hbmFnZXIsIHRoZW1lIH0gPSBnZXREZWZhdWx0Q29udGV4dCgpXG4gICAgcmV0dXJuIChcbiAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHN0eWxlTWFuYWdlcj17c3R5bGVNYW5hZ2VyfSB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8QXBwV3JhcHBlcj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9BcHBXcmFwcGVyPlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuXG5BcHAucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvQXBwLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBTb3J0YWJsZUhhbmRsZSB9IGZyb20gXCJyZWFjdC1zb3J0YWJsZS1ob2NcIjtcbmltcG9ydCB7IExpc3RJdGVtLCBMaXN0SXRlbVRleHQgfSBmcm9tIFwibWF0ZXJpYWwtdWkvTGlzdFwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCJtYXRlcmlhbC11aS9DaGVja2JveFwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b25cIjtcbmltcG9ydCBSZW9yZGVyIGZyb20gXCJtYXRlcmlhbC11aS1pY29ucy9SZW9yZGVyXCI7XG5pbXBvcnQgRG90IGZyb20gJ21hdGVyaWFsLXVpLWljb25zL0JyaWdodG5lc3MxJ1xuaW1wb3J0IERlbGV0ZUZvcmV2ZXIgZnJvbSBcIm1hdGVyaWFsLXVpLWljb25zL0RlbGV0ZUZvcmV2ZXJcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tICdtYXRlcmlhbC11aS1pY29ucy9TZXR0aW5ncydcbmltcG9ydCBGb3JtYXRMaXN0QnVsbGV0ZWQgIGZyb20gXCJtYXRlcmlhbC11aS1pY29ucy9Gb3JtYXRMaXN0QnVsbGV0ZWRcIjtcbmltcG9ydCB7IHJlZCxwaW5rLHB1cnBsZSxkZWVwUHVycGxlLGluZGlnbyxibHVlLCBsaWdodEJsdWUsIGN5YW4sIHRlYWwsIGdyZWVuLCBsaWdodEdyZWVuLCBsaW1lLCB5ZWxsb3csIGFtYmVyLCBvcmFuZ2UsIGRlZXBPcmFuZ2UsIGdyZXkgfSBmcm9tIFwibWF0ZXJpYWwtdWkvY29sb3JzXCJcbmltcG9ydCBCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvQnV0dG9uJztcbmltcG9ydCBNZW51LCB7IE1lbnVJdGVtIH0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdtYXRlcmlhbC11aS9UeXBvZ3JhcGh5JztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL0RpdmlkZXInO1xuaW1wb3J0IHtwcmltYXJ5Q29sb3JQYXJzZXIsIGZhZGVkQ29sb3JQYXJzZXJ9IGZyb20gJy4uL2hlbHBlcnMvY29sb3JQYXJzZXIuanMnXG5pbXBvcnQgTGlzdEl0ZW1UZXh0QXJlYSBmcm9tICcuL0xpc3RJdGVtVGV4dEFyZWEuanMnXG5pbXBvcnQgQ29sb3JNZW51IGZyb20gJy4vQ29sb3JNZW51LmpzJ1xuXG5jb25zdCBEcmFnSGFuZGxlID0gU29ydGFibGVIYW5kbGUoKHByb3BzKSA9PntcblxuXHR2YXIgYWN0aXZlU3R5bGUgPSBwcm9wcy5jb21wbGV0ZSA/IHt9IDoge2N1cnNvcjoncG9pbnRlcid9XG5cdHZhciBjZW50ZXJTdHlsZSA9IHtkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJywgbWFyZ2luOjEyfVxuXG5cdHJldHVybihcblx0XHQ8c3BhbiBzdHlsZT17ey4uLnByb3BzLmNvbXBsZXRlU3R5bGUsIC4uLmFjdGl2ZVN0eWxlLCAuLi5jZW50ZXJTdHlsZX19PlxuXHRcdDxSZW9yZGVyIC8+XG5cdFx0PC9zcGFuPlxuXHRcdCl9XG4pO1xuXG5cbmNsYXNzIEJhc2VMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG9wZW46ZmFsc2UsXG5cdFx0XHRhbmNob3JFbDogdW5kZWZpbmVkXG5cdFx0fVxuXG5cdFx0dGhpcy5jb21wbGV0ZURpc3BsYXkgPSB0aGlzLmNvbXBsZXRlRGlzcGxheS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub3Blbk1lbnUgPSB0aGlzLm9wZW5NZW51LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jbG9zZU1lbnUgPSB0aGlzLmNsb3NlTWVudS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY29sb3JJdGVtQ2xpY2tIYW5kbGVyID0gdGhpcy5jb2xvckl0ZW1DbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcblx0fVxuXG5cdCBpdGVtID0gdGhpcy5wcm9wcy52YWx1ZTtcblxuXHRpbmNvbXBsZXRlTGlzdFN0eWxlID0geyBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvclBhcnNlcih0aGlzLml0ZW0uY29sb3IpIH07XG5cdGNvbXBsZXRlTGlzdFN0eWxlID0geyBiYWNrZ3JvdW5kQ29sb3I6IGZhZGVkQ29sb3JQYXJzZXIodGhpcy5pdGVtLmNvbG9yKSB9O1xuXHQvLyBsaXN0SXRlbVN0eWxlID0gdGhpcy5pdGVtLmNvbXBsZXRlXG5cdC8vIFx0PyB0aGlzLmNvbXBsZXRlTGlzdFN0eWxlXG5cdC8vIFx0OiB0aGlzLmluY29tcGxldGVMaXN0U3R5bGU7XG5cdC8vIGxpc3RJdGVtU3R5bGUgPSB7YmFja2dyb3VuZENvbG9yOnRoaXMuc3RhdGUuYmdDb2xvcn1cblx0Y29tcGxldGVHcmV5ID0gZ3JleVs1MDBdO1xuXHRjb21wbGV0ZUxpbmVTdHlsZSA9IHRoaXMuaXRlbS5jb21wbGV0ZVxuXHRcdD8geyBjb2xvcjogdGhpcy5jb21wbGV0ZUdyZXksIHRleHREZWNvcmF0aW9uOiBcImxpbmUtdGhyb3VnaFwiIH1cblx0XHQ6IHt9O1xuXHRjb21wbGV0ZVN0eWxlID0gdGhpcy5pdGVtLmNvbXBsZXRlXG5cdD8geyBjb2xvcjogdGhpcy5jb21wbGV0ZUdyZXkgfVxuXHQ6IHsgY29sb3I6IHRoaXMudGV4dENvbG9yfTtcblxuXG5cdGNvbXBsZXRlRGlzcGxheSgpIHtcblx0XHR2YXIgY29tcGxldGVkID0gdGhpcy5pdGVtLmNvbXBsZXRlQ2hpbGRyZW4ubGVuZ3RoO1xuXHRcdHZhciB0b3RhbCA9IGNvbXBsZXRlZCArIHRoaXMuaXRlbS5pbmNvbXBsZXRlQ2hpbGRyZW4ubGVuZ3RoO1xuXHRcdHZhciB0ZXh0Q29sb3IgPSB0aGlzLnByb3BzLnZhbHVlLmNvbXBsZXRlPyB0aGlzLmNvbXBsZXRlR3JleSA6IHRoaXMucHJvcHMudGV4dENvbG9yXG5cdFx0dmFyIGRpc3BsYXlUZXh0U3R5bGUgPSB0aGlzLnByb3BzLnZhbHVlLmNvbXBsZXRlXG5cdFx0PyB7IGNvbG9yOiB0aGlzLmNvbXBsZXRlR3JleX1cblx0XHQ6IHsgY29sb3I6IHRoaXMucHJvcHMudGV4dENvbG9yfTtcblx0XHRpZiAodG90YWwgPT09IDApIHtcblx0XHRcdHJldHVybiBcIlwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdHN0eWxlPXtkaXNwbGF5VGV4dFN0eWxlfVxuXHRcdFx0XHQ+e2AoICR7Y29tcGxldGVkfSAvICR7dG90YWx9IGNvbXBsZXRlKWB9PC9zcGFuPlxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRjb250ZW50KCkge1xuXHRcdHZhciB0ZXh0Q29sb3IgPSB0aGlzLnByb3BzLnZhbHVlLmNvbXBsZXRlPyB0aGlzLmNvbXBsZXRlR3JleSA6IHRoaXMucHJvcHMudGV4dENvbG9yXG5cdFx0dmFyIGNvbnRlbnRUZXh0U3R5bGUgPSB0aGlzLnByb3BzLnZhbHVlLmNvbXBsZXRlXG5cdFx0PyB7IGNvbG9yOiB0aGlzLmNvbXBsZXRlR3JleSwgdGV4dERlY29yYXRpb246IFwibGluZS10aHJvdWdoXCIgfVxuXHRcdDogeyBjb2xvcjogdGhpcy5wcm9wcy50ZXh0Q29sb3J9O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c3BhbiBzdHlsZT17ey4uLmNvbnRlbnRUZXh0U3R5bGUsIHdvcmRXcmFwOidicmVhay13b3JkJywgd29yZEJyZWFrOidicmVhay1hbGwnfX0+XG5cdFx0XHRcdHt0aGlzLml0ZW0uY29udGVudH1cblx0XHRcdDwvc3Bhbj5cblx0XHQpO1xuXHR9XG5cblx0b3Blbk1lbnUoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe29wZW46dHJ1ZSwgYW5jaG9yRWw6IGV2ZW50LmN1cnJlbnRUYXJnZXR9KVxuXHR9XG5cblx0Y2xvc2VNZW51KCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7b3BlbjpmYWxzZX0pXG5cdH1cblxuXHRjb2xvckl0ZW1DbGlja0hhbmRsZXIoY29sb3JOYW1lKXtcblx0XHR2YXIgY2xvc2UgPSB0aGlzLmNsb3NlTWVudVxuXHRcdGxldCBjaGFuZ2VDb2xvciA9IHRoaXMucHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcih0aGlzLml0ZW0uaWQsIGNvbG9yTmFtZSlcblx0XHRsZXQgcHJvcHNDb2xvciA9IHRoaXMucHJvcHMuYmdDb2xvclxuXHRcdHJldHVybiBmdW5jdGlvbigpe1xuXHRcdGNoYW5nZUNvbG9yKClcblx0XHRjbG9zZSgpXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0dmFyIHRleHRDb2xvciA9IHRoaXMucHJvcHMudmFsdWUuY29tcGxldGU/IHRoaXMuY29tcGxldGVHcmV5IDogdGhpcy5wcm9wcy50ZXh0Q29sb3Jcblx0cmV0dXJuIChcblx0XHQ8TGlzdEl0ZW0gZGl2aWRlcj17dHJ1ZX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMuaXRlbUNvbG9yLCBwYWRkaW5nOjEyLCB0cmFuc2l0aW9uOidhbGwgMHMsIGJhY2tncm91bmQtY29sb3IgLjVzJ319PlxuXHRcdFx0PERyYWdIYW5kbGVcblx0XHRcdFx0Y29tcGxldGVTdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHRcdGNvbXBsZXRlPXt0aGlzLml0ZW0uY29tcGxldGV9XG5cdFx0XHQvPlxuXHRcdFx0PENoZWNrYm94XG5cdFx0XHRcdGNoZWNrZWQ9e3RoaXMuaXRlbS5jb21wbGV0ZX1cblx0XHRcdFx0b25DbGljaz17dGhpcy5wcm9wcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcih0aGlzLml0ZW0uaWQpfVxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHQvPlxuXG5cdFx0XHQ8TGlzdEl0ZW1UZXh0QXJlYVxuXHRcdFx0cHJpbWFyeT17dGhpcy5jb250ZW50KCl9XG5cdFx0XHRzZWNvbmRhcnk9e3RoaXMuY29tcGxldGVEaXNwbGF5KCl9XG5cdFx0XHR0ZXh0Q29sb3I9e3RleHRDb2xvcn1cblx0XHRcdHJhd1RleHQ9e3RoaXMuaXRlbS5jb250ZW50fVxuXHRcdFx0dXBkYXRlSXRlbT17dGhpcy5wcm9wcy51cGRhdGVJdGVtfVxuXHRcdFx0aWQ9e3RoaXMuaXRlbS5pZH1cblx0XHRcdGNvbXBsZXRlPXt0aGlzLml0ZW0uY29tcGxldGV9XG5cdFx0XHQvPlxuXG5cdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLmNoYW5nZUJhc2VDb21wb3Nlcih0aGlzLml0ZW0uaWQpfVxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHQ+XG5cdFx0XHRcdDxGb3JtYXRMaXN0QnVsbGV0ZWQgLz5cblx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRvbkNsaWNrPXt0aGlzLm9wZW5NZW51fVxuXHRcdFx0c3R5bGU9e3tjb2xvcjp0ZXh0Q29sb3J9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8U2V0dGluZ3MgLz5cblx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdDxNZW51XG5cdFx0XHRpZD17YCR7dGhpcy5pdGVtLmlkfS1tZW51YH1cblx0XHRcdG9wZW49e3RoaXMuc3RhdGUub3Blbn1cblx0XHRcdG9uUmVxdWVzdENsb3NlPXt0aGlzLmNsb3NlTWVudX1cblx0XHRcdGFuY2hvckVsPXt0aGlzLnN0YXRlLmFuY2hvckVsfVxuXHRcdFx0PlxuXHRcdFx0XHQ8VHlwb2dyYXBoeVxuXHRcdFx0XHR0eXBlPXtcInN1YmhlYWRpbmdcIn1cblx0XHRcdFx0YWxpZ249eydjZW50ZXInfVxuXHRcdFx0XHRzdHlsZT17e291dGxpbmU6J25vbmUnLCBwYWRkaW5nTGVmdDoxNn19XG5cdFx0XHRcdD5DaGFuZ2UgQ29sb3I8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdDxEaXZpZGVyIC8+XG5cdFx0XHRcdDxDb2xvck1lbnVcblx0XHRcdFx0Y2xpY2tIYW5kbGVyPXt0aGlzLmNvbG9ySXRlbUNsaWNrSGFuZGxlcn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PERpdmlkZXIgLz5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319XG5cdFx0XHRcdD5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOid3aGl0ZScsIGJhY2tncm91bmRDb2xvcjpyZWRbNTAwXSwgbWFyZ2luVG9wOjh9fVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLmRlbGV0ZUl0ZW1Db21wb3Nlcih0aGlzLml0ZW0uaWQpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PERlbGV0ZUZvcmV2ZXIgLz4geydEZWxldGUgSXRlbSd9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTWVudT5cblx0XHQ8L0xpc3RJdGVtPlxuXHQpO1xuXHR9XG59O1xuXG5CYXNlTGlzdEl0ZW0ucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VMaXN0SXRlbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nXG5pbXBvcnQgRG90IGZyb20gJ21hdGVyaWFsLXVpLWljb25zL0JyaWdodG5lc3MxJ1xuXG5pbXBvcnQge3ByaW1hcnlDb2xvclBhcnNlcn0gZnJvbSAnLi4vaGVscGVycy9jb2xvclBhcnNlci5qcydcblxuY29uc3QgQ29sb3JNZW51ID0gKHByb3BzKSAgPT4ge1xuXHQvLyB2YXIgY29sb3JzID0gWydyZWQnLCAncHVycGxlJywgJ2xpZ2h0Qmx1ZScsICd0ZWFsJywgJ2xpZ2h0R3JlZW4nLCAneWVsbG93JywgJ29yYW5nZScsICdwaW5rJ11cblx0dmFyIGNvbG9ycyA9IFsncmVkJywncGluaycsJ2RlZXBQdXJwbGUnLCAnaW5kaWdvJywgJ2xpZ2h0Qmx1ZScsJ2N5YW4nLCAndGVhbCcsICdncmVlbicsJ2xpZ2h0R3JlZW4nLCd5ZWxsb3cnLCdvcmFuZ2UnLCdkZWVwT3JhbmdlJ11cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0e2NvbG9ycy5tYXAoKGNvbG9yLCBpbmRleCk9PntcblxuXHRcdFx0XHR2YXIgYnJlYWtMaW5lID0gaW5kZXggJSA0ID09PSAzID8gPGJyIC8+IDogXCJcIlxuXG5cdFx0XHRcdHJldHVybihcblx0XHRcdFx0PHNwYW4ga2V5PXtgJHtjb2xvcn0tJHtpbmRleH1gfVxuXHRcdFx0XHRvbkNsaWNrPXtwcm9wcy5jbGlja0hhbmRsZXIoY29sb3IpfT5cblx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0c3R5bGU9e3tjb2xvcjpwcmltYXJ5Q29sb3JQYXJzZXIoY29sb3IpfX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxEb3QgLz5cblx0XHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0XHR7YnJlYWtMaW5lfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdClcblx0XHRcdH0pfVxuXHRcdDwvZGl2PlxuXHRcdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JNZW51XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0NvbG9yTWVudS5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwIGZyb20gJy4uL3RvZG8tbGlzdC9zcmMvQXBwLmpzJ1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4uL3RvZG8tbGlzdC9zcmMvaW5kZXguanMnXG5cblxuXG5cbmNsYXNzIFRvZG8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5IH0pIHtcbiAgICByZXR1cm4geyBxdWVyeSB9XG59XG5cbiAgc2VlZFN0YXRlID0gdGhpcy5wcm9wcy5xdWVyeS5pbml0aWFsU3RhdGVcbiAgbGlzdElEID0gdGhpcy5wcm9wcy5xdWVyeS5pbml0aWFsU3RhdGUuX2lkXG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwcD5cbiAgICAgICAgPFRvZG9MaXN0XG4gICAgICAgIHNlZWRTdGF0ZT17dGhpcy5zZWVkU3RhdGV9XG4gICAgICAgIGxpc3RJRD17dGhpcy5saXN0SUR9XG4gICAgICAgIC8+XG4gICAgICA8L0FwcD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdG9kby5qcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG4vLyBpbXBvcnQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIGZyb20gXCIuL3JlZ2lzdGVyU2VydmljZVdvcmtlclwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCByZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcbmltcG9ydCBSZWR1eFByb21pc2UgZnJvbSBcInJlZHV4LXByb21pc2VcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBUb2RvQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9Ub2RvQ29udGFpbmVyLmpzJ1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuXG5cblxuXG5jb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gY29tcG9zZVdpdGhEZXZUb29scyhcblx0YXBwbHlNaWRkbGV3YXJlKHRodW5rKVxuKShjcmVhdGVTdG9yZSk7XG5cbmNvbnN0IEJvaWxlciA9IChwcm9wcykgPT5cblx0PFByb3ZpZGVyIHN0b3JlPXtjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKHJlZHVjZXJzLCBwcm9wcy5zZWVkU3RhdGUpfT5cblx0XHQ8VG9kb0NvbnRhaW5lclxuXHRcdGxpc3RJRD17cHJvcHMubGlzdElEfVxuXHRcdC8+XG5cdDwvUHJvdmlkZXI+O1xuXG4vLyBSZWFjdERPTS5yZW5kZXIoPEJvaWxlciAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcbi8vIHJlZ2lzdGVyU2VydmljZVdvcmtlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBCb2lsZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2luZGV4LmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgaXRlbXMgZnJvbSBcIi4vaXRlbXNfcmVkdWNlci5qc1wiO1xuaW1wb3J0IGJhc2VJdGVtIGZyb20gXCIuL2Jhc2VJdGVtX3JlZHVjZXIuanNcIjtcbmltcG9ydCBuZXR3b3JrIGZyb20gJy4vbmV0d29ya19yZWR1Y2VyLmpzJ1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG5cdGl0ZW1zLFxuXHRiYXNlSXRlbSxcblx0bmV0d29ya1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IE5FV19JVEVNLCBDT01QTEVURV9JVEVNLCBERUxFVEVfSVRFTSwgUkVPUkRFUl9JVEVNLCBDSEFOR0VfQ09MT1IsIFVQREFURV9JVEVNLCBVUERBVEVfREFUQSB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIGl0ZW1zKHN0YXRlID0gc2VlZERhdGEsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBORVdfSVRFTTpcblx0XHRcdHZhciBuZXdJRCA9IHJhbmRvbUlEKCk7XG5cdFx0XHR2YXIgcGFyZW50SUQgPSBhY3Rpb24ucGF5bG9hZC5wYXJlbnQ7XG5cdFx0XHR2YXIgbmV3SXRlbSA9IHtcblx0XHRcdFx0W25ld0lEXToge1xuXHRcdFx0XHRcdGlkOiBuZXdJRCxcblx0XHRcdFx0XHRjb250ZW50OiBhY3Rpb24ucGF5bG9hZC5jb250ZW50LFxuXHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRcdFx0XHRjb2xvcjonbGlnaHRCbHVlJyxcblx0XHRcdFx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRcdFx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdFx0XHRcdHBhcmVudDogcGFyZW50SURcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHZhciBuZXdQYXJlbnQgPSB7IFtwYXJlbnRJRF06IGFkZENoaWxkKHN0YXRlW3BhcmVudElEXSwgbmV3SUQpIH07XG5cdFx0XHR2YXIgbmV3U3RhdGUgPSBfLm1lcmdlKHt9LCBzdGF0ZSwgbmV3SXRlbSwgbmV3UGFyZW50KTtcblx0XHRcdHJldHVybiBuZXdTdGF0ZTtcblxuXHRcdGNhc2UgQ09NUExFVEVfSVRFTTpcblx0XHRcdHZhciBpZCA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0dmFyIG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUpO1xuXHRcdFx0dmFyIG5ld0l0ZW0gPSB7IFtpZF06IG5ld1N0YXRlW2lkXSB9O1xuXHRcdFx0dmFyIHBhcmVudElEID0gbmV3SXRlbVtpZF0ucGFyZW50O1xuXHRcdFx0bmV3SXRlbVtpZF0uY29tcGxldGUgPSAhbmV3SXRlbVtpZF0uY29tcGxldGU7XG5cdFx0XHRpZiAobmV3SXRlbVtpZF0uY29tcGxldGUpIHtcblx0XHRcdFx0Xy5wdWxsKG5ld1N0YXRlW3BhcmVudElEXS5pbmNvbXBsZXRlQ2hpbGRyZW4sIGlkKTtcblx0XHRcdFx0bmV3U3RhdGVbcGFyZW50SURdLmNvbXBsZXRlQ2hpbGRyZW4udW5zaGlmdChpZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfLnB1bGwobmV3U3RhdGVbcGFyZW50SURdLmNvbXBsZXRlQ2hpbGRyZW4sIGlkKTtcblx0XHRcdFx0bmV3U3RhdGVbcGFyZW50SURdLmluY29tcGxldGVDaGlsZHJlbi5wdXNoKGlkKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBfLm1lcmdlKG5ld1N0YXRlLCBuZXdJdGVtKTtcblxuXHRcdGNhc2UgREVMRVRFX0lURU06XG5cdFx0XHR2YXIgaWQgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHZhciBuZXdTdGF0ZSA9IF8ubWVyZ2Uoe30sIHN0YXRlKTtcblx0XHRcdHZhciBwYXJlbnQgPSBzdGF0ZVtpZF0ucGFyZW50O1xuXHRcdFx0bmV3U3RhdGUgPSBfLm9taXQobmV3U3RhdGUsIGdlbmVyYXRlQ2hpbGRMaXN0KHN0YXRlLCBpZCkpO1xuXHRcdFx0bmV3U3RhdGVbcGFyZW50XS5jb21wbGV0ZUNoaWxkcmVuID0gXy5maWx0ZXIoXG5cdFx0XHRcdG5ld1N0YXRlW3BhcmVudF0uY29tcGxldGVDaGlsZHJlbixcblx0XHRcdFx0biA9PiBuICE9PSBpZFxuXHRcdFx0KTtcblx0XHRcdG5ld1N0YXRlW3BhcmVudF0uaW5jb21wbGV0ZUNoaWxkcmVuID0gXy5maWx0ZXIoXG5cdFx0XHRcdG5ld1N0YXRlW3BhcmVudF0uaW5jb21wbGV0ZUNoaWxkcmVuLFxuXHRcdFx0XHRuID0+IG4gIT09IGlkXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIG5ld1N0YXRlO1xuXG5cdFx0Y2FzZSBSRU9SREVSX0lURU06XG5cdFx0XHR2YXIgbmV3U3RhdGUgPSBfLm1lcmdlKHt9LCBzdGF0ZSk7XG5cdFx0XHR2YXIgcGFyZW50SUQgPSBhY3Rpb24ucGF5bG9hZC5wYXJlbnRJRDtcblx0XHRcdG5ld1N0YXRlW3BhcmVudElEXS5pbmNvbXBsZXRlQ2hpbGRyZW4gPSByZW9yZGVyKFxuXHRcdFx0XHRuZXdTdGF0ZVtwYXJlbnRJRF0uaW5jb21wbGV0ZUNoaWxkcmVuLFxuXHRcdFx0XHRhY3Rpb24ucGF5bG9hZC5vbGRJbmRleCxcblx0XHRcdFx0YWN0aW9uLnBheWxvYWQubmV3SW5kZXhcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gbmV3U3RhdGU7XG5cblx0XHRjYXNlIENIQU5HRV9DT0xPUjpcblx0XHRcdHZhciBuZXdTdGF0ZSA9IF8ubWVyZ2Uoe30sIHN0YXRlKVxuXHRcdFx0bmV3U3RhdGVbYWN0aW9uLnBheWxvYWQuaWRdLmNvbG9yID0gYWN0aW9uLnBheWxvYWQuY29sb3Jcblx0XHRcdHJldHVybiBuZXdTdGF0ZTtcblxuXHRcdGNhc2UgVVBEQVRFX0lURU06XG5cdFx0XHR2YXIgbmV3U3RhdGUgPSBfLm1lcmdlKHt9LCBzdGF0ZSlcblx0XHRcdG5ld1N0YXRlW2FjdGlvbi5wYXlsb2FkLmlkXS5jb250ZW50ID0gYWN0aW9uLnBheWxvYWQubmV3VGV4dFxuXHRcdFx0cmV0dXJuIG5ld1N0YXRlXG5cblx0XHRjYXNlIFVQREFURV9EQVRBOlxuXHRcdFx0Y29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpXG5cdFx0XHRyZXR1cm4gc3RhdGVcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaXRlbXM7XG5cbi8vIC8vIFN0cnVjdHVyZSBvZiBJdGVtc1xuLy8gaWQ6IHtcbi8vIFx0Y29udGVudDpTdHJpbmcsXG4vLyBcdHBhcmVudDppZCxcbi8vIFx0Y2hpbGRyZW46W2lkLGlkLGlkLi4uXVxuLy8gfVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNoaWxkTGlzdChzdGF0ZSwgYmFzZUlEKSB7XG5cdHZhciBsaXN0ID0gW2Jhc2VJRF07XG5cdGxpc3QgPSBsaXN0XG5cdFx0LmNvbmNhdChzdGF0ZVtiYXNlSURdLmNvbXBsZXRlQ2hpbGRyZW4pXG5cdFx0LmNvbmNhdChzdGF0ZVtiYXNlSURdLmluY29tcGxldGVDaGlsZHJlbik7XG5cdGZvciAodmFyIGkgPSAxOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGxpc3QgPSBsaXN0XG5cdFx0XHQuY29uY2F0KHN0YXRlW2xpc3RbaV1dLmNvbXBsZXRlQ2hpbGRyZW4pXG5cdFx0XHQuY29uY2F0KHN0YXRlW2xpc3RbaV1dLmluY29tcGxldGVDaGlsZHJlbik7XG5cdH1cblx0cmV0dXJuIGxpc3Q7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUlEKCkge1xuXHRyZXR1cm4gXy5yYW5kb20oMCwgNjU1MDAsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2hpbGQoaXRlbSwgY2hpbGQpIHtcblx0cmV0dXJuIF8ubWVyZ2Uoe30sIGl0ZW0sIHtcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IGl0ZW0uaW5jb21wbGV0ZUNoaWxkcmVuLmNvbmNhdChjaGlsZClcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHJlb3JkZXIoYXJyLCBvbGRJbmRleCwgbmV3SW5kZXgpIHtcblx0dmFyIHJlbW92ZWQgPSBbXTtcblx0aWYgKG9sZEluZGV4ID09PSAwKSB7XG5cdFx0cmVtb3ZlZCA9IGFyci5zbGljZSgxKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgYmVmb3JlID0gYXJyLnNsaWNlKDAsIG9sZEluZGV4KTtcblx0XHR2YXIgYWZ0ZXIgPSBhcnIuc2xpY2Uob2xkSW5kZXggKyAxLCBhcnIubGVuZ3RoKTtcblx0XHRyZW1vdmVkID0gWy4uLmJlZm9yZSwgLi4uYWZ0ZXJdO1xuXHR9XG5cblx0aWYgKG5ld0luZGV4ID09PSAwKSB7XG5cdFx0cmV0dXJuIFthcnJbb2xkSW5kZXhdLCAuLi5yZW1vdmVkXTtcblx0fSBlbHNlIGlmIChuZXdJbmRleCA9PT0gYXJyLmxlbmd0aCAtIDEpIHtcblx0XHRyZXR1cm4gWy4uLnJlbW92ZWQsIGFycltvbGRJbmRleF1dO1xuXHR9IGVsc2Uge1xuXHRcdGJlZm9yZSA9IHJlbW92ZWQuc2xpY2UoMCwgbmV3SW5kZXgpO1xuXHRcdGFmdGVyID0gcmVtb3ZlZC5zbGljZShuZXdJbmRleCwgcmVtb3ZlZC5sZW5ndGgpO1xuXHRcdHJldHVybiBbLi4uYmVmb3JlLCBhcnJbb2xkSW5kZXhdLCAuLi5hZnRlcl07XG5cdH1cbn1cblxuY29uc3Qgc2VlZERhdGEgPSB7XG5cdDEwMDE6IHtcblx0XHRpZDogMTAwMSxcblx0XHRjb250ZW50OiBcIlJhbmRvbSBzZWVkIDFcIixcblx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0Y29sb3I6J3JlZCcsXG5cdFx0cGFyZW50OiBcInJvb3RcIixcblx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFsxMDA0XVxuXHR9LFxuXHQxMDAyOiB7XG5cdFx0aWQ6IDEwMDIsXG5cdFx0Y29udGVudDogXCJSYW5kb20gc2VlZCAyXCIsXG5cdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdGNvbG9yOidyZWQnLFxuXHRcdHBhcmVudDogXCJyb290XCIsXG5cdFx0Y29tcGxldGVDaGlsZHJlbjogW10sXG5cdFx0aW5jb21wbGV0ZUNoaWxkcmVuOiBbMTAwM11cblx0fSxcblx0MTAwMzoge1xuXHRcdGlkOiAxMDAzLFxuXHRcdGNvbnRlbnQ6IFwiUmFuZG9tIHNlZWQgM1wiLFxuXHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRjb2xvcjoncmVkJyxcblx0XHRwYXJlbnQ6IDEwMDIsXG5cdFx0Y29tcGxldGVDaGlsZHJlbjogW10sXG5cdFx0aW5jb21wbGV0ZUNoaWxkcmVuOiBbXVxuXHR9LFxuXHQxMDA0OiB7XG5cdFx0aWQ6IDEwMDQsXG5cdFx0Y29udGVudDogXCJSYW5kb20gc2VlZCA0XCIsXG5cdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdGNvbG9yOidyZWQnLFxuXHRcdHBhcmVudDogMTAwMSxcblx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFtdXG5cdH0sXG5cdDEwMDU6IHtcblx0XHRpZDogMTAwNSxcblx0XHRjb250ZW50OiBcIlJhbmRvbSBzZWVkIDVcIixcblx0XHRjb21wbGV0ZTogdHJ1ZSxcblx0XHRjb2xvcjoncmVkJyxcblx0XHRwYXJlbnQ6IFwicm9vdFwiLFxuXHRcdGNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdGluY29tcGxldGVDaGlsZHJlbjogW11cblx0fSxcblx0cm9vdDoge1xuXHRcdGNvbG9yOidyZWQnLFxuXHRcdGNvbXBsZXRlQ2hpbGRyZW46IFsxMDA1XSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFsxMDAxLCAxMDAyXVxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9pdGVtc19yZWR1Y2VyLmpzIiwiaW1wb3J0IHsgQ0hBTkdFX0JBU0UgfSBmcm9tIFwiLi4vYWN0aW9ucy9cIjtcblxuZnVuY3Rpb24gYmFzZUl0ZW0oc3RhdGUgPSBcInJvb3RcIiwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIENIQU5HRV9CQVNFOlxuXHRcdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUl0ZW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL2Jhc2VJdGVtX3JlZHVjZXIuanMiLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBVUERBVEVfUFJPR1JFU1MsIFVQREFURV9TVUNDRVNTLCBVUERBVEVfRVJST1IgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXR3b3JrKHN0YXRlID0gXCJzdWNjZXNzXCIsIGFjdGlvbil7XG5cdHN3aXRjaChhY3Rpb24udHlwZSl7XG5cdFx0Y2FzZSBVUERBVEVfRVJST1I6XG5cdFx0XHRyZXR1cm4gXCJlcnJvclwiXG5cblx0XHRjYXNlIFVQREFURV9TVUNDRVNTOlxuXHRcdFx0cmV0dXJuIFwic3VjY2Vzc1wiXG5cblx0XHRjYXNlIFVQREFURV9QUk9HUkVTUzpcblx0XHRcdHJldHVybiBcInByb2dyZXNzXCJcblxuXHRcdGRlZmF1bHQ6XG5cdFx0cmV0dXJuIHN0YXRlXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL25ldHdvcmtfcmVkdWNlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG5cdG5ld0l0ZW0sXG5cdGNoYW5nZUJhc2VJdGVtLFxuXHRjb21wbGV0ZUl0ZW0sXG5cdGRlbGV0ZUl0ZW0sXG5cdHJlb3JkZXJJdGVtLFxuXHRjaGFuZ2VDb2xvcixcblx0dXBkYXRlSXRlbSxcblx0dXBkYXRlRGF0YSxcblx0dXBkYXRlRGF0YVRocm90dGxlZFxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XG4vLyBpbXBvcnQgc3R5bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdEl0ZW0vc3R5bGUuY3NzXCI7XG5pbXBvcnQgTGlzdEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0SGVhZGVyLmpzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwibWF0ZXJpYWwtdWkvQ2FyZFwiO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5cbmNsYXNzIFRvZG9Db250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bmV3SXRlbTogXCJcIlxuXHRcdH07XG5cdFx0dGhpcy5pbnB1dFVwZGF0ZSA9IHRoaXMuaW5wdXRVcGRhdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLm5ld0l0ZW1BY3Rpb24gPSB0aGlzLm5ld0l0ZW1BY3Rpb24uYmluZCh0aGlzKTtcblx0XHR0aGlzLmNoYW5nZUJhc2VDb21wb3NlciA9IHRoaXMuY2hhbmdlQmFzZUNvbXBvc2VyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jb21wbGV0ZUl0ZW1Db21wb3NlciA9IHRoaXMuY29tcGxldGVJdGVtQ29tcG9zZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmRlbGV0ZUl0ZW1Db21wb3NlciA9IHRoaXMuZGVsZXRlSXRlbUNvbXBvc2VyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZW9yZGVySXRlbUNvbXBvc2VyID0gdGhpcy5yZW9yZGVySXRlbUNvbXBvc2VyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5nZW5lcmF0ZUNvbXBsZXRlID0gdGhpcy5nZW5lcmF0ZUNvbXBsZXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jaGFuZ2VDb2xvckNvbXBvc2VyID0gdGhpcy5jaGFuZ2VDb2xvckNvbXBvc2VyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy51cGRhdGVJdGVtRGlzcGF0Y2ggPSB0aGlzLnVwZGF0ZUl0ZW1EaXNwYXRjaC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudXBkYXRlRGF0YURpc3BhdGNoID0gdGhpcy51cGRhdGVEYXRhRGlzcGF0Y2guYmluZCh0aGlzKTtcblx0fVxuXG5cdGlucHV0VXBkYXRlKGV2ZW50KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG5ld0l0ZW06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcblx0fVxuXG5cdG5ld0l0ZW1BY3Rpb24oY29udGVudCkge1xuXHRcdHRoaXMucHJvcHMubmV3SXRlbShjb250ZW50LCB0aGlzLnByb3BzLmJhc2VJdGVtKTtcblx0XHR2YXIgdXBkYXRlRGF0YURpc3BhdGNoID0gdGhpcy51cGRhdGVEYXRhRGlzcGF0Y2hcblx0XHR0aGlzLnNldFN0YXRlKHsgbmV3SXRlbTogXCJcIiB9LCAoKSA9PiB7XG5cblx0XHR9KTtcblx0fVxuXG5cdGNoYW5nZUJhc2VDb21wb3NlcihpZCkge1xuXHRcdHZhciBjaGFuZ2VCYXNlSXRlbSA9IHRoaXMucHJvcHMuY2hhbmdlQmFzZUl0ZW07XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0Y2hhbmdlQmFzZUl0ZW0oaWQpO1xuXHRcdH07XG5cdH1cblxuXHRkZWxldGVJdGVtQ29tcG9zZXIoaWQpIHtcblx0XHRsZXQgZGVsZXRlSXRlbURpc3BhdGNoID0gdGhpcy5wcm9wcy5kZWxldGVJdGVtO1xuXHRcdGxldCB1cGRhdGVEYXRhRGlzcGF0Y2ggPSB0aGlzLnVwZGF0ZURhdGFEaXNwYXRjaFxuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdGRlbGV0ZUl0ZW1EaXNwYXRjaChpZCk7XG5cblx0XHR9O1xuXHR9XG5cblx0Y29tcGxldGVJdGVtQ29tcG9zZXIoaWQpIHtcblx0XHRsZXQgY29tcGxldGVJdGVtRGlzcGF0Y2ggPSB0aGlzLnByb3BzLmNvbXBsZXRlSXRlbTtcblx0XHRsZXQgdXBkYXRlRGF0YURpc3BhdGNoID0gdGhpcy51cGRhdGVEYXRhRGlzcGF0Y2hcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wbGV0ZUl0ZW1EaXNwYXRjaChpZCk7XG5cblx0XHR9O1xuXHR9XG5cblx0cmVvcmRlckl0ZW1Db21wb3NlcihpZCwgb2xkSW5kZXgsIG5ld0luZGV4KSB7XG5cdFx0bGV0IHJlb3JkZXJJdGVtRGlzcGF0Y2ggPSB0aGlzLnByb3BzLnJlb3JkZXJJdGVtO1xuXHRcdGxldCB1cGRhdGVEYXRhRGlzcGF0Y2ggPSB0aGlzLnVwZGF0ZURhdGFEaXNwYXRjaDtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW9yZGVySXRlbURpc3BhdGNoKGlkLCBvbGRJbmRleCwgbmV3SW5kZXgpO1xuXG5cdFx0fTtcblx0fVxuXG5cdGdlbmVyYXRlQ29tcGxldGUoKSB7XG5cdFx0dmFyIGNvbXBsZXRlQ291bnQgPSB0aGlzLnByb3BzLml0ZW1zW3RoaXMucHJvcHMuYmFzZUl0ZW1dXG5cdFx0XHQuY29tcGxldGVDaGlsZHJlbi5sZW5ndGg7XG5cdFx0dmFyIHRvdGFsQ291bnQgPVxuXHRcdFx0dGhpcy5wcm9wcy5pdGVtc1t0aGlzLnByb3BzLmJhc2VJdGVtXS5pbmNvbXBsZXRlQ2hpbGRyZW4ubGVuZ3RoICtcblx0XHRcdGNvbXBsZXRlQ291bnQ7XG5cdFx0cmV0dXJuIGAoICR7Y29tcGxldGVDb3VudH0gLyAke3RvdGFsQ291bnR9IENvbXBsZXRlIClgO1xuXHR9XG5cblx0Y2hhbmdlQ29sb3JDb21wb3NlcihpZCwgY29sb3IpIHtcblx0XHRsZXQgY2hhbmdlQ29sb3JEaXNwYXRjaCA9IHRoaXMucHJvcHMuY2hhbmdlQ29sb3Jcblx0XHRsZXQgdXBkYXRlRGF0YURpc3BhdGNoID0gdGhpcy51cGRhdGVEYXRhRGlzcGF0Y2g7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpe1xuXHRcdFx0Y2hhbmdlQ29sb3JEaXNwYXRjaChpZCwgY29sb3IpXG5cblx0XHR9XG5cdH1cblxuXHR1cGRhdGVJdGVtRGlzcGF0Y2goaWQsIG5ld1RleHQpe1xuXHRcdHRoaXMucHJvcHMudXBkYXRlSXRlbShpZCwgbmV3VGV4dClcblxuXHR9XG5cblx0dXBkYXRlRGF0YURpc3BhdGNoKCl7XG5cdFx0Y29uc3QgaWQgPSB0aGlzLnByb3BzLmxpc3RJRFxuXHRcdGNvbnN0IG5ld1N0YXRlID0ge1xuXHRcdFx0aXRlbXM6dGhpcy5wcm9wcy5pdGVtcyxcblx0XHRcdGJhc2VJdGVtOnRoaXMucHJvcHMuYmFzZUl0ZW1cblx0XHRcdH1cblx0XHR0aGlzLnByb3BzLnVwZGF0ZURhdGEoaWQsIHtpZCwgbmV3U3RhdGV9KVxuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG5cdFx0dGhpcy51cGRhdGVEYXRhRGlzcGF0Y2goKVxuXHR9XG5cblxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgY3VycmVudEl0ZW0gPSB0aGlzLnByb3BzLml0ZW1zW3RoaXMucHJvcHMuYmFzZUl0ZW1dO1xuXHRcdHZhciBwYXJlbnRJdGVtID0gdGhpcy5wcm9wcy5pdGVtc1tjdXJyZW50SXRlbS5wYXJlbnRdO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiYXV0b1wiLCBtYXJnaW46IFwiMTZweFwiIH19PlxuXHRcdFx0XHQ8TGlzdEhlYWRlclxuXHRcdFx0XHRcdGJhc2VJdGVtPXt0aGlzLnByb3BzLmJhc2VJdGVtfVxuXHRcdFx0XHRcdGJhc2VJdGVtVGV4dD17Y3VycmVudEl0ZW0uY29udGVudH1cblx0XHRcdFx0XHRjdXJyZW50UGFyZW50PXtjdXJyZW50SXRlbS5wYXJlbnR9XG5cdFx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXt0aGlzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0XHRjaGFuZ2VDb2xvckNvbXBvc2VyID17dGhpcy5jaGFuZ2VDb2xvckNvbXBvc2VyfVxuXHRcdFx0XHRcdGNvdW50ZXJUZXh0PXt0aGlzLmdlbmVyYXRlQ29tcGxldGUoKX1cblx0XHRcdFx0XHRpdGVtcz17dGhpcy5wcm9wcy5pdGVtc31cblx0XHRcdFx0XHRuZXdJdGVtQWN0aW9uPXt0aGlzLm5ld0l0ZW1BY3Rpb259XG5cdFx0XHRcdFx0dXBkYXRlSXRlbT17dGhpcy51cGRhdGVJdGVtRGlzcGF0Y2h9XG5cdFx0XHRcdFx0dXBkYXRlRGF0YT17dGhpcy51cGRhdGVEYXRhRGlzcGF0Y2h9XG5cdFx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3RoaXMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxMaXN0XG5cdFx0XHRcdFx0bGlzdD17dGhpcy5wcm9wcy5pdGVtc31cblx0XHRcdFx0XHRiYXNlSXRlbT17dGhpcy5wcm9wcy5iYXNlSXRlbX1cblx0XHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3RoaXMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17dGhpcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3RoaXMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0cmVvcmRlckl0ZW1Db21wb3Nlcj17dGhpcy5yZW9yZGVySXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXIgPXt0aGlzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdFx0dXBkYXRlSXRlbT17dGhpcy51cGRhdGVJdGVtRGlzcGF0Y2h9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0NhcmQ+XG5cdFx0KTtcblx0fVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoeyBpdGVtcywgYmFzZUl0ZW0gfSkge1xuXHRyZXR1cm4geyBpdGVtcywgYmFzZUl0ZW19O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcblx0cmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcblx0XHR7IG5ld0l0ZW0sIGNoYW5nZUJhc2VJdGVtLCBjb21wbGV0ZUl0ZW0sIGRlbGV0ZUl0ZW0sIHJlb3JkZXJJdGVtLCBjaGFuZ2VDb2xvciwgdXBkYXRlSXRlbSwgdXBkYXRlRGF0YTp1cGRhdGVEYXRhVGhyb3R0bGVkfSxcblx0XHRkaXNwYXRjaFxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUb2RvQ29udGFpbmVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29udGFpbmVycy9Ub2RvQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBJbmNvbXBsZXRlTGlzdCBmcm9tIFwiLi9JbmNvbXBsZXRlTGlzdC5qc1wiO1xuaW1wb3J0IENvbXBsZXRlTGlzdCBmcm9tIFwiLi9Db21wbGV0ZUxpc3QuanNcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlU2hlZXQgfSBmcm9tIFwibWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5cblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJMaXN0XCIsIHRoZW1lID0+ICh7XG5cdGNvbnRhaW5lcjoge1xuXHR9XG59KSk7XG5cbmNvbnN0IExpc3QgPSBwcm9wcyA9PiB7XG5cdGNvbnN0IGl0ZW1zTGlzdCA9IHByb3BzLmxpc3Q7XG5cdGNvbnN0IGJhc2VJdGVtID0gcHJvcHMuYmFzZUl0ZW07XG5cdGxldCBjb21wbGV0ZUxpc3RJdGVtcyA9IGl0ZW1zTGlzdFtiYXNlSXRlbV0uY29tcGxldGVDaGlsZHJlbjtcblx0bGV0IGluY29tcGxldGVMaXN0SXRlbXMgPSBpdGVtc0xpc3RbYmFzZUl0ZW1dLmluY29tcGxldGVDaGlsZHJlbjtcblxuXHRjb21wbGV0ZUxpc3RJdGVtcyA9IHBvcHVsYXRlTGlzdChjb21wbGV0ZUxpc3RJdGVtcyk7XG5cdGluY29tcGxldGVMaXN0SXRlbXMgPSBwb3B1bGF0ZUxpc3QoaW5jb21wbGV0ZUxpc3RJdGVtcyk7XG5cblx0ZnVuY3Rpb24gcG9wdWxhdGVMaXN0KGxpc3RBcnIpIHtcblx0XHRyZXR1cm4gbGlzdEFyci5tYXAobGlzdElEID0+IGl0ZW1zTGlzdFtsaXN0SURdKTtcblx0fVxuXG5cdGNvbnN0IGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cblx0XHRcdDxJbmNvbXBsZXRlTGlzdFxuXHRcdFx0XHRpdGVtcz17aW5jb21wbGV0ZUxpc3RJdGVtc31cblx0XHRcdFx0cGFyZW50SUQ9e3Byb3BzLmJhc2VJdGVtfVxuXHRcdFx0XHRyZW5kZXJDaGlsZHJlbj17dHJ1ZX1cblx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXtwcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdHJlb3JkZXJJdGVtQ29tcG9zZXI9e3Byb3BzLnJlb3JkZXJJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXIgPXtwcm9wcy5jaGFuZ2VDb2xvckNvbXBvc2VyfVxuXHRcdFx0XHR1cGRhdGVJdGVtPXtwcm9wcy51cGRhdGVJdGVtfVxuXHRcdFx0Lz5cblx0XHRcdDxDb21wbGV0ZUxpc3Rcblx0XHRcdFx0aXRlbXM9e2NvbXBsZXRlTGlzdEl0ZW1zfVxuXHRcdFx0XHRwYXJlbnRJRD17cHJvcHMuYmFzZUl0ZW19XG5cdFx0XHRcdHJlbmRlckNoaWxkcmVuPXt0cnVlfVxuXHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0ZGVsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdGNvbXBsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0cmVvcmRlckl0ZW1Db21wb3Nlcj17cHJvcHMucmVvcmRlckl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3NlciA9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdHVwZGF0ZUl0ZW09e3Byb3BzLnVwZGF0ZUl0ZW19XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuTGlzdC5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShMaXN0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHtcblx0U29ydGFibGVDb250YWluZXIsXG5cdFNvcnRhYmxlRWxlbWVudFxufSBmcm9tIFwicmVhY3Qtc29ydGFibGUtaG9jXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vTGlzdEl0ZW0uanNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCJtYXRlcmlhbC11aS9MaXN0XCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IHtwcmltYXJ5Q29sb3JQYXJzZXIsIGZhZGVkQ29sb3JQYXJzZXIsIHRleHRDb2xvclBhcnNlcn0gZnJvbSAnLi4vaGVscGVycy9jb2xvclBhcnNlci5qcydcblxuXG5jb25zdCBzdHlsZVNoZWV0ID0gY3JlYXRlU3R5bGVTaGVldChcIkluY29tcGxldGVMaXN0XCIsIHRoZW1lID0+ICh7XG5cdGNvbnRhaW5lcjoge1xuXHRcdGxpc3RTdHlsZTogXCJub25lXCIsXG5cdFx0cGFkZGluZzogMCxcblx0XHRtYXJnaW46IDBcblx0fSxcblx0cm9vdDoge1xuXHRcdHBhZGRpbmc6IDBcblx0fSxcblx0aGVscGVyOntcblx0XHR0cmFuc2l0aW9uOjBcblx0fVxufSkpO1xuXG5cbmNvbnN0IFNvcnRhYmxlTGlzdCA9IFNvcnRhYmxlQ29udGFpbmVyKChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxMaXN0IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NGb3JMaXN0fT5cblx0XHRcdHtwcm9wcy5pdGVtcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxTb3J0YWJsZUxpc3RJdGVtXG5cdFx0XHRcdFx0XHRrZXk9e2BpdGVtLSR7dmFsdWUuaWR9YH1cblx0XHRcdFx0XHRcdGluZGV4PXtpbmRleH1cblx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0ZGVsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRjaGFuZ2VDb2xvckNvbXBvc2VyID17cHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0XHRcdGJnQ29sb3JDb21wb3Nlcj17cHJvcHMuYmdDb2xvckNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0dGV4dENvbG9yQ29tcG9zZXI9e3Byb3BzLnRleHRDb2xvckNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0dXBkYXRlSXRlbT17cHJvcHMudXBkYXRlSXRlbX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC9MaXN0PlxuXHQpO1xufSk7XG5cbmNvbnN0IFNvcnRhYmxlTGlzdEl0ZW0gPSBTb3J0YWJsZUVsZW1lbnQoKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PExpc3RJdGVtXG5cdFx0XHR2YWx1ZT17cHJvcHMudmFsdWV9XG5cdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0Y2hhbmdlQ29sb3JDb21wb3NlciA9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRpdGVtQ29sb3I9e3Byb3BzLmJnQ29sb3JDb21wb3Nlcihwcm9wcy52YWx1ZS5jb2xvcil9XG5cdFx0XHR0ZXh0Q29sb3I9e3Byb3BzLnRleHRDb2xvckNvbXBvc2VyKHByb3BzLnZhbHVlLmNvbG9yLCBwcm9wcy52YWx1ZS5jb21wbGV0ZSl9XG5cdFx0XHR1cGRhdGVJdGVtPXtwcm9wcy51cGRhdGVJdGVtfVxuXHRcdC8+XG5cdCk7XG59KTtcblxuY29uc3QgSW5jb21wbGV0ZUxpc3QgPSBwcm9wcyA9PiB7XG5cdGNvbnN0IGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzO1xuXG5cblx0ZnVuY3Rpb24gaGFuZGxlU29ydCh7IG9sZEluZGV4LCBuZXdJbmRleCx9KSB7XG5cdFx0cHJvcHMucmVvcmRlckl0ZW1Db21wb3Nlcihwcm9wcy5wYXJlbnRJRCwgb2xkSW5kZXgsIG5ld0luZGV4KSgpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PFNvcnRhYmxlTGlzdFxuXHRcdFx0XHRpdGVtcz17cHJvcHMuaXRlbXN9XG5cdFx0XHRcdHVzZURyYWdIYW5kbGU9e3RydWV9XG5cdFx0XHRcdG9uU29ydEVuZD17aGFuZGxlU29ydH1cblx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXtwcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdGNsYXNzRm9yTGlzdD17Y2xhc3Nlcy5yb290fVxuXHRcdFx0XHRjaGFuZ2VDb2xvckNvbXBvc2VyID17cHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0YmdDb2xvckNvbXBvc2VyPXtwcmltYXJ5Q29sb3JQYXJzZXJ9XG5cdFx0XHRcdHRleHRDb2xvckNvbXBvc2VyPXt0ZXh0Q29sb3JQYXJzZXJ9XG5cdFx0XHRcdHVwZGF0ZUl0ZW09e3Byb3BzLnVwZGF0ZUl0ZW19XG5cdFx0XHRcdGhlbHBlckNsYXNzPXtwcm9wcy5jbGFzc2VzLmhlbHBlcn1cblx0XHRcdC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5JbmNvbXBsZXRlTGlzdC5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShJbmNvbXBsZXRlTGlzdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvSW5jb21wbGV0ZUxpc3QuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGlzdEl0ZW0sIExpc3RJdGVtVGV4dCB9IGZyb20gXCJtYXRlcmlhbC11aS9MaXN0XCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJtYXRlcmlhbC11aS9UZXh0RmllbGRcIjtcbmltcG9ydCB7IEhvbGRhYmxlLCBkZWZpbmVIb2xkIH0gZnJvbSAncmVhY3QtdG91Y2gnO1xuXG5cbmNsYXNzIExpc3RJdGVtVGV4dEFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLnN0YXRlPXtcblx0XHRcdGVkaXRNb2RlOmZhbHNlLFxuXHRcdFx0ZWRpdFRleHQ6cHJvcHMucmF3VGV4dFxuXHRcdH1cblxuXHRcdHRoaXMuVGV4dENvbnRhaW5lciA9IHRoaXMuVGV4dENvbnRhaW5lci5iaW5kKHRoaXMpXG5cdFx0dGhpcy5kb3VibGVDbGlja0hhbmRsZXIgPSB0aGlzLmRvdWJsZUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpXG5cdFx0dGhpcy5FZGl0SXRlbSA9IHRoaXMuRWRpdEl0ZW0uYmluZCh0aGlzKVxuXHRcdHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuXHRcdHRoaXMuaGFuZGxlQmx1ciA9IHRoaXMuaGFuZGxlQmx1ci5iaW5kKHRoaXMpXG5cdFx0dGhpcy5ub25FZGl0SXRlbSA9IHRoaXMubm9uRWRpdEl0ZW0uYmluZCh0aGlzKVxuXHR9XG5cblx0bm9uRWRpdEl0ZW0ocHJvcHMpe1xuXHRcdHZhciBsaW5lU3R5bGUgPSB0aGlzLnByb3BzLmNvbXBsZXRlID8ge3RleHREZWNvcmF0aW9uOidsaW5lLXRocm91Z2gnfSA6IHt9XG5cdFx0Y29uc3QgaG9sZCA9IGRlZmluZUhvbGQoe3VwZGF0ZUV2ZXJ5OiA1MCwgaG9sZEZvcjogNTAwfSk7XG5cdFx0XHRcdHJldHVybihcblx0XHRcdDxIb2xkYWJsZVxuXHRcdFx0Y29uZmlnPXtob2xkfVxuXHRcdFx0b25Ib2xkQ29tcGxldGU9e3Byb3BzLmRvdWJsZUNsaWNrSGFuZGxlcn1cblx0XHRcdD5cblx0XHRcdDxMaXN0SXRlbVRleHRcblx0XHRcdHByaW1hcnk9eyhcblx0XHRcdFx0PHNwYW5cblx0XHRcdFx0c3R5bGU9e3tjb2xvcjp0aGlzLnByb3BzLnRleHRDb2xvciwgLi4ubGluZVN0eWxlLHdvcmRXcmFwOidub3JtYWwnLCB3b3JkQnJlYWs6J25vcm1hbCd9fVxuXHRcdFx0XHQ+e3Byb3BzLnByaW1hcnl9PC9zcGFuPlxuXHRcdFx0XHQpfVxuXHRcdFx0c2Vjb25kYXJ5PXtwcm9wcy5zZWNvbmRhcnl9XG5cdFx0XHRzdHlsZT17e2NvbG9yOnByb3BzLnRleHRDb2xvcixwYWRkaW5nOicwcHgnLCB3b3JkV3JhcCA6ICdicmVhay13b3JkJ319XG5cdFx0XHRvbkRvdWJsZUNsaWNrPXtwcm9wcy5kb3VibGVDbGlja0hhbmRsZXJ9XG5cdFx0XHQvPlxuXHRcdFx0PC9Ib2xkYWJsZT5cblx0XHRcdClcblx0fVxuXG5cdEVkaXRJdGVtKHByb3BzKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8Zm9ybVxuXHRcdFx0b25TdWJtaXQ9e3RoaXMuaGFuZGxlQmx1cn1cblx0XHRcdHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cblx0XHRcdD5cblx0XHRcdDxUZXh0RmllbGRcblx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmVkaXRUZXh0fVxuXHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuXHRcdFx0b25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG5cdFx0XHRmdWxsV2lkdGg9e3RydWV9XG5cdFx0XHRhdXRvRm9jdXM9e3RydWV9XG5cdFx0XHRJbnB1dFByb3BzPXt7c3R5bGU6e1xuXHRcdFx0XHRcdGNvbG9yOnRoaXMucHJvcHMudGV4dENvbG9yXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0XHQpXG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe2VkaXRUZXh0OmV2ZW50LnRhcmdldC52YWx1ZX0pXG5cdH1cblxuXHRoYW5kbGVCbHVyKGV2ZW50KXtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0dGhpcy5wcm9wcy51cGRhdGVJdGVtKHRoaXMucHJvcHMuaWQsIHRoaXMuc3RhdGUuZWRpdFRleHQpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZWRpdE1vZGU6ZmFsc2V9KVxuXHR9XG5cblx0VGV4dENvbnRhaW5lcihwcm9wcyl7XG5cdFx0dmFyIE5vbkVkaXRJdGVtID0gdGhpcy5ub25FZGl0SXRlbVxuXHRcdHZhciBFZGl0SXRlbSA9IHRoaXMuRWRpdEl0ZW1cblx0XHRpZihwcm9wcy5lZGl0TW9kZSl7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHQ8RWRpdEl0ZW1cblxuXHRcdFx0Lz5cblx0XHRcdClcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8Tm9uRWRpdEl0ZW1cblx0XHRcdFx0ZG91YmxlQ2xpY2tIYW5kbGVyPXtwcm9wcy5kb3VibGVDbGlja0hhbmRsZXJ9XG5cdFx0XHRcdHByaW1hcnk9e3Byb3BzLnByaW1hcnl9XG5cdFx0XHRcdHNlY29uZGFyeT17cHJvcHMuc2Vjb25kYXJ5fVxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnByb3BzLnRleHRDb2xvcixwYWRkaW5nOicwcHgnLCB3b3JkV3JhcCA6ICdicmVhay13b3JkJ319XG5cdFx0XHRcdC8+XG5cdFx0XHQpXG5cdFx0fVxuXHR9XG5cblx0ZG91YmxlQ2xpY2tIYW5kbGVyKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZWRpdE1vZGU6dHJ1ZX0pXG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHR2YXIgVGV4dENvbnRhaW5lciA9IHRoaXMuVGV4dENvbnRhaW5lclxuXHRcdHJldHVybihcblx0XHRcdDxUZXh0Q29udGFpbmVyXG5cdFx0XHRkb3VibGVDbGlja0hhbmRsZXI9e3RoaXMuZG91YmxlQ2xpY2tIYW5kbGVyfVxuXHRcdFx0ZWRpdE1vZGU9e3RoaXMuc3RhdGUuZWRpdE1vZGV9XG5cdFx0XHRwcmltYXJ5PXt0aGlzLnN0YXRlLmVkaXRUZXh0fVxuXHRcdFx0c2Vjb25kYXJ5PXt0aGlzLnByb3BzLnNlY29uZGFyeX1cblx0XHRcdHRleHRDb2xvcj17dGhpcy5wcm9wcy50ZXh0Q29sb3J9XG5cdFx0XHQvPlxuXHRcdFx0KX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW1UZXh0QXJlYVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SXRlbVRleHRBcmVhLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL0xpc3RJdGVtLmpzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwibWF0ZXJpYWwtdWkvTGlzdFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcbmltcG9ydCB7cHJpbWFyeUNvbG9yUGFyc2VyLCBmYWRlZENvbG9yUGFyc2VyLCB0ZXh0Q29sb3JQYXJzZXJ9IGZyb20gJy4uL2hlbHBlcnMvY29sb3JQYXJzZXIuanMnXG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBjcmVhdGVTdHlsZVNoZWV0KFwiQ29tcGxldGVMaXN0XCIsIHRoZW1lID0+ICh7XG5cdGNvbnRhaW5lcjoge1xuXHRcdG1hcmdpbjogMCxcblx0XHRwYWRkaW5nOiAwXG5cdH1cbn0pKTtcblxuY29uc3QgQ29tcGxldGVMaXN0ID0gcHJvcHMgPT4ge1xuXHRjb25zdCBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcztcblxuXHRyZXR1cm4gKFxuXHRcdDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuXHRcdFx0e3Byb3BzLml0ZW1zLm1hcCh2YWx1ZSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PExpc3RJdGVtXG5cdFx0XHRcdFx0XHRrZXk9e2BpdGVtLSR7dmFsdWUuaWR9YH1cblx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0ZGVsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRjaGFuZ2VDb2xvckNvbXBvc2VyID17cHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0XHRcdGl0ZW1Db2xvcj17ZmFkZWRDb2xvclBhcnNlcih2YWx1ZS5jb2xvcil9XG5cdFx0XHRcdFx0XHR0ZXh0Q29sb3I9e3RleHRDb2xvclBhcnNlcih2YWx1ZS5jb2xvcil9XG5cdFx0XHRcdFx0XHR1cGRhdGVJdGVtPXtwcm9wcy51cGRhdGVJdGVtfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9KX1cblx0XHQ8L0xpc3Q+XG5cdCk7XG59O1xuXG5Db21wbGV0ZUxpc3QucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVTaGVldCkoQ29tcGxldGVMaXN0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9Db21wbGV0ZUxpc3QuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIm1hdGVyaWFsLXVpL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJtYXRlcmlhbC11aS9EaXZpZGVyXCI7XG5pbXBvcnQgQ2hldnJvblJpZ2h0IGZyb20gXCJtYXRlcmlhbC11aS1pY29ucy9DaGV2cm9uUmlnaHRcIjtcbmltcG9ydCBOZXdJdGVtRm9ybSBmcm9tIFwiLi9OZXdJdGVtRm9ybS5qc1wiO1xuaW1wb3J0IHtwcmltYXJ5Q29sb3JQYXJzZXIsIGZhZGVkQ29sb3JQYXJzZXIsIHRleHRDb2xvclBhcnNlciwgYWNjZW50Q29sb3JQYXJzZXIsIGFjY2VudFRleHRDb2xvclBhcnNlciwgZmFkZWRBY2NlbnRDb2xvclBhcnNlcn0gZnJvbSAnLi4vaGVscGVycy9jb2xvclBhcnNlci5qcydcbmltcG9ydCBOZXR3b3JrUHJvZ3Jlc3MgZnJvbSAnLi9Qcm9ncmVzcy5qcydcbmltcG9ydCBIZWFkZXJNZW51IGZyb20gJy4vSGVhZGVyTWVudS5qcydcbmltcG9ydCBFZGl0YWJsZVRleHRBcmVhIGZyb20gJy4vRWRpdGFibGVUZXh0QXJlYS5qcydcbmltcG9ydCBDaGVja2JveCBmcm9tIFwibWF0ZXJpYWwtdWkvQ2hlY2tib3hcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nXG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBjcmVhdGVTdHlsZVNoZWV0KFwiSGVhZGVyXCIsIHRoZW1lID0+ICh7XG5cdHRpdGxlQ29udGFpbmVyOiB7XG5cdFx0cGFkZGluZzogMTYsXG5cdFx0ZGlzcGxheTonZmxleCdcblx0fSxcblx0dGl0bGVUZXh0Ontcblx0XHRmbGV4R3JvdzoxXG5cdH0sXG5cdGNydW1iOiB7XG5cdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG5cdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcIiY6aG92ZXJcIjoge1xuXHRcdFx0dGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCJcblx0XHR9XG5cdH0sXG5cdGNydW1iQ29udGFpbmVyOiB7XG5cdFx0cGFkZGluZzogMTZcblx0fVxufSkpO1xuXG5jb25zdCBMaXN0SGVhZGVyID0gcHJvcHMgPT4ge1xuXHRjb25zdCBjbGFzc2VzID0gcHJvcHMuY2xhc3Nlcztcblx0Y29uc3QgY3VycmVudEl0ZW1Db2xvciA9IHByb3BzLml0ZW1zW3Byb3BzLmJhc2VJdGVtXS5jb2xvclxuXHRjb25zdCBpbmNvbXBsZXRlQ29sb3IgPSBwcmltYXJ5Q29sb3JQYXJzZXIoY3VycmVudEl0ZW1Db2xvcilcblx0Y29uc3QgaW5jb21wbGV0ZVRleHRDb2xvciA9IHRleHRDb2xvclBhcnNlcihjdXJyZW50SXRlbUNvbG9yKVxuXHRjb25zdCBpbmNvbXBsZXRlQWNjZW50Q29sb3IgPSBhY2NlbnRDb2xvclBhcnNlcihjdXJyZW50SXRlbUNvbG9yKVxuXHRjb25zdCBjb21wbGV0ZUFjY2VudENvbG9yID0gZmFkZWRBY2NlbnRDb2xvclBhcnNlcihjdXJyZW50SXRlbUNvbG9yKVxuXHRjb25zdCBpbmNvbXBsZXRlQWNjZW50VGV4dENvbG9yID0gYWNjZW50VGV4dENvbG9yUGFyc2VyKGN1cnJlbnRJdGVtQ29sb3IpXG5cdGNvbnN0IGNvbXBsZXRlID0gcHJvcHMuYmFzZUl0ZW0gPT09ICdyb290JyA/IGZhbHNlIDogcHJvcHMuaXRlbXNbcHJvcHMuYmFzZUl0ZW1dLmNvbXBsZXRlXG5cblx0Y29uc3QgY29tcGxldGVDb2xvciA9IGZhZGVkQ29sb3JQYXJzZXIoY3VycmVudEl0ZW1Db2xvcilcblx0Y29uc3QgdGV4dENvbG9yID0gY29tcGxldGUgPyBcIiMwMDAwMDBcIiA6IGluY29tcGxldGVUZXh0Q29sb3Jcblx0Y29uc3QgYmdDb2xvciA9IGNvbXBsZXRlID8gY29tcGxldGVDb2xvciA6IGluY29tcGxldGVDb2xvclxuXHRjb25zdCBhY2NlbnRDb2xvciA9IGNvbXBsZXRlID8gY29tcGxldGVBY2NlbnRDb2xvciA6IGluY29tcGxldGVBY2NlbnRDb2xvclxuXHRjb25zdCBhY2NlbnRUZXh0Q29sb3IgPSBjb21wbGV0ZSA/IFwiIzAwMDAwMFwiIDogaW5jb21wbGV0ZUFjY2VudFRleHRDb2xvclxuXG5cdGNvbnN0IGhlYWRlclRleHQgPSBwcm9wcy5pdGVtc1twcm9wcy5iYXNlSXRlbV0uY29udGVudFxuXG5cdGNvbnN0IEJyZWFkQ3J1bWIgPSAoKSA9PiB7XG5cdFx0bGV0IHRyYWlsID0gW107XG5cdFx0bGV0IGN1cnJlbnQgPSBwcm9wcy5iYXNlSXRlbTtcblx0XHRsZXQgY291bnRlciA9IDA7XG5cdFx0aWYgKGN1cnJlbnQgPT09IFwicm9vdFwiKSB7XG5cdFx0XHR0cmFpbCA9IFtcInJvb3RcIl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdoaWxlIChwcm9wcy5pdGVtc1tjdXJyZW50XS5wYXJlbnQgIT09IFwicm9vdFwiICYmIGNvdW50ZXIgPCAxMCkge1xuXHRcdFx0XHR0cmFpbCA9IFtjdXJyZW50LCAuLi50cmFpbF07XG5cdFx0XHRcdGN1cnJlbnQgPSBwcm9wcy5pdGVtc1tjdXJyZW50XS5wYXJlbnQ7XG5cdFx0XHRcdGNvdW50ZXIrKztcblx0XHRcdH1cblx0XHRcdHRyYWlsID0gW1wicm9vdFwiLCBjdXJyZW50LCAuLi50cmFpbF07XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8VHlwb2dyYXBoeVxuXHRcdFx0dHlwZT17XCJib2R5MVwifVxuXHRcdFx0Y2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmNydW1iQ29udGFpbmVyfVxuXHRcdFx0c3R5bGU9e3tjb2xvcjp0ZXh0Q29sb3J9fVxuXHRcdFx0PlxuXHRcdFx0XHR7dHJhaWwubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0XHRrZXk9e2BicmVhZGNydW1iLSR7aW5kZXh9YH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmNydW1ifVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtwcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXIoaXRlbSl9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtpdGVtID09PSBcInJvb3RcIlxuXHRcdFx0XHRcdFx0XHRcdD8gXCJyb290XCJcblx0XHRcdFx0XHRcdFx0XHQ6IHByb3BzLml0ZW1zW2l0ZW1dLmNvbnRlbnR9XG5cdFx0XHRcdFx0XHRcdHtpbmRleCA8IHRyYWlsLmxlbmd0aCAtIDFcblx0XHRcdFx0XHRcdFx0XHQ/IDxDaGV2cm9uUmlnaHQgLz5cblx0XHRcdFx0XHRcdFx0XHQ6IFwiXCJ9e1wiIFwifVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdCk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0c3R5bGU9e3tcblx0XHRcdGJhY2tncm91bmRDb2xvcjpiZ0NvbG9yLFxuXHRcdFx0Y29sb3I6dGV4dENvbG9yLFxuXHRcdFx0dHJhbnNpdGlvbjonLjVzJ1xuXG5cdFx0fX1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZUNvbnRhaW5lcn0+XG5cdFx0XHR7cHJvcHMuYmFzZUl0ZW0gPT09ICdyb290JyA/XG5cdFx0XHQ8SWNvbkJ1dHRvbiAvPiA6KFxuXHRcdFx0XHQ8Q2hlY2tib3hcblx0XHRcdFx0Y2hlY2tlZD17Y29tcGxldGV9XG5cdFx0XHRcdG9uQ2xpY2s9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyKHByb3BzLmJhc2VJdGVtKX1cblx0XHRcdFx0c3R5bGU9e3tjb2xvcjp0ZXh0Q29sb3J9fVxuXHRcdFx0XHQvPil9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlVGV4dH0+XG5cdFx0XHRcdFx0PEVkaXRhYmxlVGV4dEFyZWFcblx0XHRcdFx0XHRcdHByaW1hcnk9e2hlYWRlclRleHR9XG5cdFx0XHRcdFx0XHRzZWNvbmRhcnk9e3Byb3BzLmNvdW50ZXJUZXh0fVxuXHRcdFx0XHRcdFx0dGV4dENvbG9yPXt0ZXh0Q29sb3J9XG5cdFx0XHRcdFx0XHRyYXdUZXh0PXtoZWFkZXJUZXh0fVxuXHRcdFx0XHRcdFx0dXBkYXRlSXRlbT17cHJvcHMudXBkYXRlSXRlbX1cblx0XHRcdFx0XHRcdGlkPXtwcm9wcy5iYXNlSXRlbX1cblx0XHRcdFx0XHRcdGNvbXBsZXRlPXtjb21wbGV0ZX1cblx0XHRcdFx0XHRcdGhlYWRlcj17dHJ1ZX1cblxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8SGVhZGVyTWVudVxuXHRcdFx0XHR0ZXh0Q29sb3I9e3RleHRDb2xvcn1cblx0XHRcdFx0YmFzZUl0ZW09e3Byb3BzLmJhc2VJdGVtfVxuXHRcdFx0XHRjaGFuZ2VDb2xvckNvbXBvc2VyPXtwcm9wcy5jaGFuZ2VDb2xvckNvbXBvc2VyfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8RGl2aWRlciAvPlxuXHRcdFx0PEJyZWFkQ3J1bWIgLz5cblx0XHRcdDxEaXZpZGVyIC8+XG5cdFx0XHQ8TmV3SXRlbUZvcm1cblx0XHRcdG5ld0l0ZW1BY3Rpb249e3Byb3BzLm5ld0l0ZW1BY3Rpb259XG5cdFx0XHR0ZXh0Q29sb3I9e3RleHRDb2xvcn1cblx0XHRcdGFjY2VudENvbG9yPXthY2NlbnRDb2xvcn1cblx0XHRcdGFjY2VudFRleHRDb2xvcj17YWNjZW50VGV4dENvbG9yfVxuXHRcdFx0Lz5cblx0XHRcdDxEaXZpZGVyIC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5MaXN0SGVhZGVyLnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlU2hlZXQpKExpc3RIZWFkZXIpO1xuXG4vLyA8TmV0d29ya1Byb2dyZXNzXG4vLyB0ZXh0Q29sb3I9e3RleHRDb2xvcn1cbi8vIHVwZGF0ZURhdGE9e3Byb3BzLnVwZGF0ZURhdGF9XG4vLyAvPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIm1hdGVyaWFsLXVpL1RleHRGaWVsZFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvQnV0dG9uXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwibWF0ZXJpYWwtdWkvR3JpZFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcblxuXG5cblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJOZXdJdGVtRm9ybVwiLCB0aGVtZSA9PiAoe1xuXHRjb250YWluZXI6IHtcblx0XHRtYXJnaW46IFwiYXV0b1wiLFxuXHRcdHBhZGRpbmdCb3R0b206IFwiMTZweFwiLFxuXHRcdHBhZGRpbmdUb3A6IFwiMTZweFwiLFxuXHRcdHBhZGRpbmc6IDI0LFxuXHRcdGJveFNpemluZzogXCJib3JkZXItYm94XCJcblx0fSxcblx0dHlwZUl0ZW06IHtcblx0XHRmbGV4R3JvdzogMVxuXHR9LFxuXHR3aGl0ZTp7XG5cdFx0Y29sb3I6JyNmZmZmZmYnXG5cdH0sXG5cdGJsYWNrOntcblx0XHRjb2xvcjonIzAwMDAwMCdcblx0fVxufSkpO1xuXG5jbGFzcyBOZXdJdGVtRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5ld0l0ZW06IFwiXCJcblx0XHR9O1xuXHRcdHRoaXMuaW5wdXRVcGRhdGUgPSB0aGlzLmlucHV0VXBkYXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zdWJtaXRIYW5kbGVyID0gdGhpcy5zdWJtaXRIYW5kbGVyLmJpbmQodGhpcyk7XG5cdH1cblxuXHRzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnByb3BzLm5ld0l0ZW1BY3Rpb24odGhpcy5zdGF0ZS5uZXdJdGVtKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgbmV3SXRlbTogXCJcIiB9KTtcblx0fVxuXG5cdGlucHV0VXBkYXRlKGV2ZW50KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG5ld0l0ZW06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBjbGFzc2VzID0gdGhpcy5wcm9wcy5jbGFzc2VzO1xuXHRcdGNvbnN0IHRleHRDb2xvckNsYXNzID0gdGhpcy5wcm9wcy50ZXh0Q29sb3IgPT09ICcjZmZmZmZmJyA/IGNsYXNzZXMud2hpdGUgOiBjbGFzc2VzLmJsYWNrXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9XG5cdFx0XHQ+XG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEhhbmRsZXJ9PlxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBndXR0ZXI9ezh9IGFsaWduPXtcImNlbnRlclwifT5cblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLnR5cGVJdGVtfT5cblx0XHRcdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0XHRcdGlkPVwibmV3SXRlbVwiXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJOZXcgSXRlbVwiXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdGZ1bGxXaWR0aD17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5uZXdJdGVtfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmlucHV0VXBkYXRlfVxuXHRcdFx0XHRcdFx0XHRcdElucHV0UHJvcHM9e3tcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOntcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6dGhpcy5wcm9wcy50ZXh0Q29sb3Jcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdElucHV0TGFiZWxQcm9wcz17e1xuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjp0aGlzLnByb3BzLnRleHRDb2xvclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRyYWlzZWRcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tjb2xvcjp0aGlzLnByb3BzLmFjY2VudFRleHRDb2xvciwgYmFja2dyb3VuZENvbG9yOnRoaXMucHJvcHMuYWNjZW50Q29sb3J9fT5cblx0XHRcdFx0XHRcdFx0XHRNYWtlIGEgTmV3IEl0ZW1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbk5ld0l0ZW1Gb3JtLnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlU2hlZXQpKE5ld0l0ZW1Gb3JtKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9OZXdJdGVtRm9ybS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xuaW1wb3J0IENoZWNrSWNvbiBmcm9tICdtYXRlcmlhbC11aS1pY29ucy9DaGVjayc7XG5pbXBvcnQgU2F2ZUljb24gZnJvbSAnbWF0ZXJpYWwtdWktaWNvbnMvU2F2ZSc7XG5pbXBvcnQgUmVwb3J0SWNvbiBmcm9tICdtYXRlcmlhbC11aS1pY29ucy9SZXBvcnQnXG5pbXBvcnQgQXV0b3JlbmV3IGZyb20gJ21hdGVyaWFsLXVpLWljb25zL0F1dG9yZW5ldydcbmltcG9ydCBNRFNwaW5uZXIgZnJvbSBcInJlYWN0LW1kLXNwaW5uZXJcIjtcblxuXG5cblxuY29uc3QgTmV0d29ya1Byb2dyZXNzID0gKHByb3BzKSA9PiB7XG5cdGxldCBpY29uID0gJydcblx0c3dpdGNoKHByb3BzLm5ldHdvcmspe1xuXHRcdGNhc2UgJ3Byb2dyZXNzJzpcblx0XHRcdGljb24gPSA8TURTcGlubmVyIHNpbmdsZUNvbG9yPXtwcm9wcy50ZXh0Q29sb3J9Lz5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ3N1Y2Nlc3MnOlxuXHRcdFx0aWNvbiA9IDxDaGVja0ljb24gLz5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2Vycm9yJzpcblx0XHRcdGljb24gPSA8UmVwb3J0SWNvbiAvPlxuXHRcdFx0YnJlYWs7XG5cdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNwYW4+XG5cdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0c3R5bGU9e3tjb2xvcjpwcm9wcy50ZXh0Q29sb3J9fVxuXHRcdFx0b25DbGljaz17cHJvcHMudXBkYXRlRGF0YX1cblx0XHRcdD5cblx0XHRcdFx0e2ljb259XG5cdFx0XHQ8L0ljb25CdXR0b24+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0XHQpXG5cdH1cblxuXG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IG5ldHdvcmsgfSkge1xuXHRyZXR1cm4geyBuZXR3b3JrIH07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE5ldHdvcmtQcm9ncmVzcyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL1Byb2dyZXNzLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUFBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBRUE7QUFGQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7QUFPQTtBQUNBO0FBQUE7O0FBSEE7QUFBQTtBQUFBO0FBQ0E7O0FBSUE7QUFDQTtBQURBO0FBQUE7QUFFQTs7QUFEQTtBQU1BO0FBTkE7QUFDQTs7Ozs7QUFTQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQWxCQTtBQUNBO0FBK0JBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBOztBQU5BO0FBY0E7QUFkQTtBQUNBOzs7O0FBZUE7QUFDQTs7OztBQUdBO0FBRUE7QUFBQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFJQTtBQUpBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFBQTtBQUFBO0FBV0E7Ozs7QUFHQTtBQUFBOzs7O0FBSUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7OztBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUlBO0FBQ0E7QUF0QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQURBO0FBREE7QUFGQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFrQkE7QUFDQTtBQTNDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFOQTtBQU9BO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBakJBO0FBQ0E7QUFnQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFkQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFVQTtBQVFBO0FBUUE7QUFRQTtBQVlBO0FBWUE7QUFvQkE7QUFzQkE7QUFRQTtBQU9BO0FBQ0E7QUE5SEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFHQTtBQUpBO0FBRkE7QUFPQTtBQUFBO0FBQ0E7O0FBR0E7QUFFQTtBQUhBO0FBS0E7QUFDQTtBQURBO0FBQ0E7O0FBR0E7QUFFQTtBQUhBO0FBS0E7QUFDQTtBQURBO0FBQ0E7O0FBR0E7QUFFQTtBQUhBO0FBS0E7QUFDQTtBQURBO0FBQ0E7O0FBR0E7O0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFGQTtBQVNBO0FBQ0E7QUFEQTtBQUNBOztBQUdBOztBQUVBO0FBR0E7QUFKQTtBQUZBO0FBU0E7QUFDQTtBQURBO0FBQ0E7O0FBR0E7O0FBRUE7QUFHQTtBQUpBO0FBRkE7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUtBO0FBTEE7QUFTQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7O0FBSUE7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOztBQUlBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFDQTs7QUFJQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0hBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBUUE7QUFGQTs7QUFHQTtBQUFBO0FBVkE7QUFEQTtBQURBO0FBQ0E7QUFnQkE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7Ozs7O0FBYkE7QUFDQTtBQW9CQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFFQTtBQUZBO0FBQUE7QUFQQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVlBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBekJBO0FBRUE7QUFHQTtBQUpBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBV0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7O0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFJQTs7OztBQUdBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFNQTtBQUNBOzs7O0FBSUE7QUFBQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBSEE7QUFNQTtBQU5BO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFQQTtBQVVBO0FBVkE7QUFDQTtBQVVBO0FBQ0E7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7O0FBR0E7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBRUE7QUFGQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7QUFPQTtBQUNBO0FBQUE7O0FBSEE7QUFBQTtBQUFBO0FBQ0E7O0FBSUE7QUFDQTtBQURBO0FBQUE7QUFFQTs7QUFEQTtBQUdBO0FBSEE7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQURBO0FBR0E7QUFIQTtBQUNBO0FBR0E7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUEzSUE7QUFDQTtBQWlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFMQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFBQTtBQUdBOztBQURBO0FBR0E7QUFIQTtBQUNBOztBQUVBO0FBRUE7QUFGQTtBQUFBO0FBUUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FBS0E7Ozs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7O0FBRkE7QUFNQTtBQU5BO0FBQ0E7Ozs7OztBQVhBOzs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFYQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTs7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBQ0E7QUFNQTtBQUdBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVRBO0FBU0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFSQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVJBOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUkE7O0FBVUE7QUFBQTtBQUNBO0FBRkE7QUE5Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeklBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUpBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7QUFHQTtBQUFBO0FBRUE7QUFHQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7OztBQUVBO0FBQ0E7Ozs7QUFLQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7OztBQUdBO0FBRUE7Ozs7QUFLQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFYQTtBQWFBO0FBYkE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUkE7QUFZQTtBQVpBO0FBQ0E7Ozs7O0FBekhBO0FBQ0E7QUFzSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7O0FBR0E7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4S0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7OztBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7QUFDQTtBQUFBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBO0FBV0E7QUFYQTtBQUNBO0FBWUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBO0FBYUE7QUFiQTtBQUNBO0FBN0JBO0FBQ0E7QUEwQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7OztBQUdBO0FBQ0E7QUFFQTtBQUpBOztBQU9BO0FBRkE7O0FBR0E7QUFBQTtBQVRBO0FBREE7QUFDQTtBQWNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVkE7QUFhQTtBQWJBO0FBQ0E7QUFlQTtBQXJCQTtBQUNBO0FBc0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVJBO0FBV0E7QUFYQTtBQUNBO0FBSEE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBWkE7QUFnQkE7QUFoQkE7QUFDQTtBQVhBO0FBQ0E7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFLQTtBQUNBOztBQURBO0FBRUE7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQVJBO0FBWUE7QUFaQTtBQUNBOzs7O0FBYUE7QUFFQTtBQUNBO0FBQ0E7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBREE7O0FBTkE7QUFjQTtBQWRBO0FBQ0E7Ozs7QUFlQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUFBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBSUE7QUFKQTtBQUFBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBT0E7QUFQQTtBQUNBO0FBT0E7Ozs7QUFHQTtBQUFBOzs7O0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFMQTtBQU9BO0FBUEE7QUFDQTs7Ozs7QUFTQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7QUFHQTtBQUFBO0FBREE7QUFEQTtBQURBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVEE7QUFZQTtBQVpBO0FBQ0E7QUFjQTtBQXRCQTtBQUNBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdBOzs7QUFHQTtBQUVBO0FBSEE7O0FBTUE7QUFGQTs7QUFJQTtBQUNBO0FBQ0E7O0FBSUE7QUFIQTtBQUpBOztBQVFBO0FBQUE7QUFoQkE7QUFEQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQU1BO0FBRUE7QUFBQTtBQUNBOztBQUhBO0FBS0E7QUFMQTtBQUNBOztBQVFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFFQTtBQUNBO0FBQUE7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFIQTs7QUFGQTtBQVFBO0FBUkE7QUFDQTtBQU9BO0FBQ0E7QUFEQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBOztBQUhBO0FBS0E7QUFMQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7O0FBVEE7QUFZQTtBQVpBO0FBQ0E7QUFhQTtBQUFBO0FBQ0E7O0FBSEE7QUFNQTtBQU5BO0FBQ0E7O0FBS0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTs7QUFLQTtBQUdBO0FBSEE7QUFBQTtBQXZHQTtBQUNBO0FBMkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SkE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7OztBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU5BOztBQVNBO0FBRkE7O0FBS0E7QUFGQTs7QUFHQTtBQUFBO0FBZEE7QUFEQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBRkE7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFFQTtBQUFBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFEQTtBQUdBO0FBSEE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBR0E7QUFBQTtBQURBOzs7QUFNQTtBQUFBO0FBREE7O0FBYkE7QUFtQkE7QUFuQkE7QUFDQTtBQWtCQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUNBOzs7OztBQXBEQTtBQUNBO0FBZ0VBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuR0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7O0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBaEJBO0FBQ0E7QUEwQkE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        