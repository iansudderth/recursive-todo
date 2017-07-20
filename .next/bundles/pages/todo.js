
          window.__NEXT_REGISTER_PAGE('/todo', function() {
            var comp = module.exports =
webpackJsonp([5],{

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

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.black = exports.white = exports.fadedColorParser = exports.accentColorParser = exports.primaryColorParser = exports.rawColorParser = undefined;
exports.textColorParser = textColorParser;
exports.accentTextColorParser = accentTextColorParser;

var _colors = __webpack_require__(605);

var _lodash = __webpack_require__(684);

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
	var whiteList = ['red', 'pink', 'purple', 'deepPurple', 'indigo', 'blue'];
	var blackList = ['lightBlue', 'cyan', 'teal', 'gren', 'lightGreen', 'lime', 'yellow', 'amber', 'orange', 'deepOrange'];

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

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.UPDATE_DATA = exports.UPDATE_ITEM = exports.CHANGE_COLOR = exports.REORDER_ITEM = exports.DELETE_ITEM = exports.COMPLETE_ITEM = exports.CHANGE_BASE = exports.NEW_ITEM = undefined;
exports.newItem = newItem;
exports.changeBaseItem = changeBaseItem;
exports.completeItem = completeItem;
exports.deleteItem = deleteItem;
exports.reorderItem = reorderItem;
exports.changeColor = changeColor;
exports.updateItem = updateItem;
exports.updateData = updateData;

var _axios = __webpack_require__(754);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NEW_ITEM = exports.NEW_ITEM = "NEW_ITEM";
var CHANGE_BASE = exports.CHANGE_BASE = "CHANGE_BASE";
var COMPLETE_ITEM = exports.COMPLETE_ITEM = "COMPLETE_ITEM";
var DELETE_ITEM = exports.DELETE_ITEM = "DELETE_ITEM";
var REORDER_ITEM = exports.REORDER_ITEM = "REORDER_ITEM";
var CHANGE_COLOR = exports.CHANGE_COLOR = "CHANGE_COLOR";
var UPDATE_ITEM = exports.UPDATE_ITEM = "UPDATE_ITEM";

// ============
// To Implement
// ============

var UPDATE_DATA = exports.UPDATE_DATA = "UPDATE_DATA";

// ===============
// Action Creators
// ===============

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

function changeBaseItem(id) {
	return {
		type: CHANGE_BASE,
		payload: id
	};
}

function completeItem(id) {
	return {
		type: COMPLETE_ITEM,
		payload: id
	};
}

function deleteItem(id) {
	return {
		type: DELETE_ITEM,
		payload: id
	};
}

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

function changeColor(id, color) {
	return {
		type: CHANGE_COLOR,
		payload: {
			id: id,
			color: color
		}
	};
}

function updateItem(id, newText) {
	return {
		type: UPDATE_ITEM,
		payload: {
			id: id,
			newText: newText
		}
	};
}

function updateData(id, newState) {
	console.log("UPDATE_DATA fired");
	var request = _axios2.default.put("/todo/" + id, newState);
	return {
		type: UPDATE_DATA,
		payload: request
	};
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/actions/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/actions/index.js"); } } })();

/***/ }),

/***/ 681:
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

var _styles = __webpack_require__(644);

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

/***/ 692:
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

var _reactSortableHoc = __webpack_require__(691);

var _List = __webpack_require__(651);

var _Checkbox = __webpack_require__(814);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _IconButton = __webpack_require__(697);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Reorder = __webpack_require__(826);

var _Reorder2 = _interopRequireDefault(_Reorder);

var _Brightness = __webpack_require__(827);

var _Brightness2 = _interopRequireDefault(_Brightness);

var _DeleteForever = __webpack_require__(828);

var _DeleteForever2 = _interopRequireDefault(_DeleteForever);

var _Settings = __webpack_require__(829);

var _Settings2 = _interopRequireDefault(_Settings);

var _FormatListBulleted = __webpack_require__(830);

var _FormatListBulleted2 = _interopRequireDefault(_FormatListBulleted);

var _colors = __webpack_require__(605);

var _Button = __webpack_require__(700);

var _Button2 = _interopRequireDefault(_Button);

var _Menu = __webpack_require__(832);

var _Menu2 = _interopRequireDefault(_Menu);

var _Typography = __webpack_require__(659);

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = __webpack_require__(706);

var _Divider2 = _interopRequireDefault(_Divider);

var _colorParser = __webpack_require__(661);

var _ListItemTextArea = __webpack_require__(846);

var _ListItemTextArea2 = _interopRequireDefault(_ListItemTextArea);

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
			lineNumber: 28
		}
	}, _react2.default.createElement(_Reorder2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}));
});

var ColorMenu = function ColorMenu(props) {
	// var colors = ['red', 'purple', 'lightBlue', 'teal', 'lightGreen', 'yellow', 'orange', 'pink']
	var colors = ['red', 'pink', 'deepPurple', 'indigo', 'lightBlue', 'cyan', 'teal', 'green', 'lightGreen', 'yellow', 'orange', 'deepOrange'];
	return _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 38
		}
	}, colors.map(function (color, index) {

		var breakLine = index % 4 === 3 ? _react2.default.createElement("br", {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 41
			}
		}) : "";

		return _react2.default.createElement("span", { key: color + "-" + index,
			onClick: props.clickHandler(color), __source: {
				fileName: _jsxFileName,
				lineNumber: 44
			}
		}, _react2.default.createElement(_IconButton2.default, {
			style: { color: (0, _colorParser.primaryColorParser)(color) },
			__source: {
				fileName: _jsxFileName,
				lineNumber: 46
			}
		}, _react2.default.createElement(_Brightness2.default, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 49
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
						lineNumber: 103
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
					lineNumber: 116
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
			return _react2.default.createElement(_List.ListItem, { divider: true, style: { backgroundColor: this.props.itemColor, padding: 12 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 143
				}
			}, _react2.default.createElement(DragHandle, {
				completeStyle: { color: textColor },
				complete: this.item.complete,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 144
				}
			}), _react2.default.createElement(_Checkbox2.default, {
				checked: this.item.complete,
				onClick: this.props.completeItemComposer(this.item.id),
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 148
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
					lineNumber: 154
				}
			}), _react2.default.createElement(_IconButton2.default, {
				onClick: this.props.changeBaseComposer(this.item.id),
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 164
				}
			}, _react2.default.createElement(_FormatListBulleted2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 168
				}
			})), _react2.default.createElement(_IconButton2.default, {
				onClick: this.openMenu,
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 170
				}
			}, _react2.default.createElement(_Settings2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 174
				}
			})), _react2.default.createElement(_Menu2.default, {
				id: this.item.id + "-menu",
				open: this.state.open,
				onRequestClose: this.closeMenu,
				anchorEl: this.state.anchorEl,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 176
				}
			}, _react2.default.createElement(_Typography2.default, {
				type: "subheading",
				align: 'center',
				style: { outline: 'none', paddingLeft: 16 },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 182
				}
			}, "Change Color"), _react2.default.createElement(_Divider2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 187
				}
			}), _react2.default.createElement(ColorMenu, {
				clickHandler: this.colorItemClickHandler,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 188
				}
			}), _react2.default.createElement(_Divider2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 191
				}
			}), _react2.default.createElement("div", {
				style: { textAlign: 'center' },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 192
				}
			}, _react2.default.createElement(_Button2.default, {
				style: { color: 'white', backgroundColor: _colors.red[500], marginTop: 8 },
				onClick: this.props.deleteItemComposer(this.item.id),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 195
				}
			}, _react2.default.createElement(_DeleteForever2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 199
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

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(741);


/***/ }),

/***/ 741:
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

var _App = __webpack_require__(681);

var _App2 = _interopRequireDefault(_App);

var _index = __webpack_require__(747);

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

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(683);

var _redux = __webpack_require__(650);

var _reducers = __webpack_require__(752);

var _reducers2 = _interopRequireDefault(_reducers);

var _App = __webpack_require__(681);

var _App2 = _interopRequireDefault(_App);

var _reduxPromise = __webpack_require__(774);

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reduxDevtoolsExtension = __webpack_require__(780);

var _styles = __webpack_require__(644);

var _TodoContainer = __webpack_require__(781);

var _TodoContainer2 = _interopRequireDefault(_TodoContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/index.js";
// import ReactDOM from "react-dom";
// import registerServiceWorker from "./registerServiceWorker";


var createStoreWithMiddleware = (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxPromise2.default))(_redux.createStore);

var Boiler = function Boiler(props) {
	return _react2.default.createElement(_reactRedux.Provider, { store: createStoreWithMiddleware(_reducers2.default, props.seedState), __source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, _react2.default.createElement(_TodoContainer2.default, {
		listID: props.listID,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}));
};

// ReactDOM.render(<Boiler />, document.getElementById("root"));
// registerServiceWorker();

exports.default = Boiler;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/index.js"); } } })();

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(650);

var _items_reducer = __webpack_require__(753);

var _items_reducer2 = _interopRequireDefault(_items_reducer);

var _baseItem_reducer = __webpack_require__(773);

var _baseItem_reducer2 = _interopRequireDefault(_baseItem_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	items: _items_reducer2.default,
	baseItem: _baseItem_reducer2.default
});

exports.default = rootReducer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/index.js"); } } })();

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = __webpack_require__(100);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__(637);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _lodash = __webpack_require__(684);

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = __webpack_require__(670);

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

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = __webpack_require__(670);

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

/***/ 781:
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

var _List = __webpack_require__(782);

var _List2 = _interopRequireDefault(_List);

var _reactRedux = __webpack_require__(683);

var _actions = __webpack_require__(670);

var _redux = __webpack_require__(650);

var _ListHeader = __webpack_require__(939);

var _ListHeader2 = _interopRequireDefault(_ListHeader);

var _Card = __webpack_require__(950);

var _Card2 = _interopRequireDefault(_Card);

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
			this.setState({ newItem: "" }, function () {
				updateDataDispatch();
			});
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
			console.log(id);
			var newState = {
				items: this.props.items,
				baseItem: this.props.baseItem
			};
			this.props.updateData(id, { id: id, newState: newState });
		}
	}, {
		key: "render",
		value: function render() {
			var currentItem = this.props.items[this.props.baseItem];
			var parentItem = this.props.items[currentItem.parent];
			return _react2.default.createElement(_Card2.default, { style: (0, _defineProperty3.default)({ margin: "auto" }, "margin", "16px"), __source: {
					fileName: _jsxFileName,
					lineNumber: 111
				}
			}, _react2.default.createElement(_ListHeader2.default, {
				baseItem: this.props.baseItem,
				baseItemText: currentItem.content,
				currentParent: currentItem.parent,
				changeBaseComposer: this.changeBaseComposer,
				counterText: this.generateComplete(),
				items: this.props.items,
				newItemAction: this.newItemAction,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 112
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
					lineNumber: 121
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
	return (0, _redux.bindActionCreators)({ newItem: _actions.newItem, changeBaseItem: _actions.changeBaseItem, completeItem: _actions.completeItem, deleteItem: _actions.deleteItem, reorderItem: _actions.reorderItem, changeColor: _actions.changeColor, updateItem: _actions.updateItem, updateData: _actions.updateData }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TodoContainer);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/containers/TodoContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/containers/TodoContainer.js"); } } })();

/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _IncompleteList = __webpack_require__(783);

var _IncompleteList2 = _interopRequireDefault(_IncompleteList);

var _CompleteList = __webpack_require__(938);

var _CompleteList2 = _interopRequireDefault(_CompleteList);

var _styles = __webpack_require__(644);

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

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactSortableHoc = __webpack_require__(691);

var _ListItem = __webpack_require__(692);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = __webpack_require__(651);

var _List2 = _interopRequireDefault(_List);

var _styles = __webpack_require__(644);

var _colorParser = __webpack_require__(661);

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
		}
	};
});

var SortableList = (0, _reactSortableHoc.SortableContainer)(function (props) {
	return _react2.default.createElement(_List2.default, { className: props.classForList, __source: {
			fileName: _jsxFileName,
			lineNumber: 29
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
				lineNumber: 32
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
			lineNumber: 52
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
			lineNumber: 74
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
		__source: {
			fileName: _jsxFileName,
			lineNumber: 75
		}
	}));
};

IncompleteList.propTypes = {};

exports.default = (0, _styles.withStyles)(styleSheet)(IncompleteList);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/IncompleteList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/IncompleteList.js"); } } })();

/***/ }),

/***/ 846:
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

var _List = __webpack_require__(651);

var _TextField = __webpack_require__(707);

var _TextField2 = _interopRequireDefault(_TextField);

var _reactTouch = __webpack_require__(858);

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

/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _ListItem = __webpack_require__(692);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = __webpack_require__(651);

var _List2 = _interopRequireDefault(_List);

var _styles = __webpack_require__(644);

var _colorParser = __webpack_require__(661);

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

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = __webpack_require__(100);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(644);

var _Typography = __webpack_require__(659);

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = __webpack_require__(706);

var _Divider2 = _interopRequireDefault(_Divider);

var _ChevronRight = __webpack_require__(940);

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

var _NewItemForm = __webpack_require__(941);

var _NewItemForm2 = _interopRequireDefault(_NewItemForm);

var _colorParser = __webpack_require__(661);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListHeader.js";
// import style from "./style.css";
// import PropTypes from "prop-types";
// import _ from "lodash";


var styleSheet = (0, _styles.createStyleSheet)("Header", function (theme) {
	return {
		titleContainer: {
			padding: 16
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
	var bgColor = (0, _colorParser.primaryColorParser)(props.items[props.baseItem].color);
	var textColor = (0, _colorParser.textColorParser)(props.items[props.baseItem].color);
	var accentColor = (0, _colorParser.accentColorParser)(props.items[props.baseItem].color);
	var accentTextColor = (0, _colorParser.accentTextColorParser)(props.items[props.baseItem].color);

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
				lineNumber: 51
			}
		}, trail.map(function (item, index) {
			return _react2.default.createElement("span", {
				key: "breadcrumb-" + index,
				className: props.classes.crumb,
				onClick: props.changeBaseComposer(item),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, item === "root" ? "root" : props.items[item].content, index < trail.length - 1 ? _react2.default.createElement(_ChevronRight2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
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
			lineNumber: 77
		}
	}, _react2.default.createElement("div", { className: classes.titleContainer, __source: {
			fileName: _jsxFileName,
			lineNumber: 85
		}
	}, _react2.default.createElement(_Typography2.default, {
		type: "headline",
		align: "center",
		style: { color: textColor },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 86
		}
	}, props.baseItem === "root" ? "root" : props.baseItemText), _react2.default.createElement(_Typography2.default, {
		type: "subheading",
		align: "center",
		style: { color: textColor },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 93
		}
	}, props.counterText)), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 101
		}
	}), _react2.default.createElement(BreadCrumb, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 102
		}
	}), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 103
		}
	}), _react2.default.createElement(_NewItemForm2.default, {
		newItemAction: props.newItemAction,
		textColor: textColor,
		accentColor: accentColor,
		accentTextColor: accentTextColor,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 104
		}
	}), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 110
		}
	}));
};

ListHeader.propTypes = {};

exports.default = (0, _styles.withStyles)(styleSheet)(ListHeader);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListHeader.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListHeader.js"); } } })();

/***/ }),

/***/ 941:
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

var _TextField = __webpack_require__(707);

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = __webpack_require__(700);

var _Button2 = _interopRequireDefault(_Button);

var _Grid = __webpack_require__(942);

var _Grid2 = _interopRequireDefault(_Grid);

var _styles = __webpack_require__(644);

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

/***/ })

},[740]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy90b2RvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9zdHlsZS9jcmVhdGVEZWZhdWx0Q29udGV4dC5qcz81OGMyOTA3Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvaGVscGVycy9jb2xvclBhcnNlci5qcz81OGMyOTA3Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvYWN0aW9ucy9pbmRleC5qcz81OGMyOTA3Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvQXBwLmpzPzU4YzI5MDciLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RJdGVtLmpzPzU4YzI5MDciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdG9kby5qcz81OGMyOTA3Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvaW5kZXguanM/NThjMjkwNyIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL2luZGV4LmpzPzU4YzI5MDciLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9pdGVtc19yZWR1Y2VyLmpzPzU4YzI5MDciLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9iYXNlSXRlbV9yZWR1Y2VyLmpzPzU4YzI5MDciLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIuanM/NThjMjkwNyIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdC5qcz81OGMyOTA3Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9JbmNvbXBsZXRlTGlzdC5qcz81OGMyOTA3Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SXRlbVRleHRBcmVhLmpzPzU4YzI5MDciLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0NvbXBsZXRlTGlzdC5qcz81OGMyOTA3Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SGVhZGVyLmpzPzU4YzI5MDciLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL05ld0l0ZW1Gb3JtLmpzPzU4YzI5MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInXG5pbXBvcnQgY3JlYXRlUGFsZXR0ZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBjcmVhdGVNdWlUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgeyBwdXJwbGUsIGdyZWVuLCBncmV5IH0gZnJvbSAnbWF0ZXJpYWwtdWkvY29sb3JzJ1xuXG5jb25zdCBjcmVhdGVEZWZhdWx0Q29udGV4dCA9ICgpID0+XG4gIE11aVRoZW1lUHJvdmlkZXIuY3JlYXRlRGVmYXVsdENvbnRleHQoe1xuICAgIHRoZW1lOiBjcmVhdGVNdWlUaGVtZSh7XG4gICAgICBwYWxldHRlOiBjcmVhdGVQYWxldHRlKHtcbiAgICAgICAgcHJpbWFyeTogZ3JleVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4vLyBTaW5nbGV0b24gaGFjayBhcyB0aGVyZSBpcyBubyB3YXkgdG8gcGFzcyB2YXJpYWJsZXMgZnJvbSBfZG9jdW1lbnQuanMgdG8gcGFnZXMgeWV0LlxubGV0IGNvbnRleHQgPSBudWxsXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0Q29udGV4dCAoKSB7XG4gIGNvbnRleHQgPSBjcmVhdGVEZWZhdWx0Q29udGV4dCgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0Q29udGV4dCAoKSB7XG4gIC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgc3RvcmUgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIGNvbnRleHRcbiAgfVxuXG4gIC8vIFJldXNlIHN0b3JlIG9uIHRoZSBjbGllbnQtc2lkZVxuICBpZiAoIWNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY3JlYXRlRGVmYXVsdENvbnRleHQoKVxuICB9XG5cbiAgcmV0dXJuIGNvbnRleHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGVmYXVsdENvbnRleHRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvc3R5bGUvY3JlYXRlRGVmYXVsdENvbnRleHQuanMiLCJpbXBvcnQgeyByZWQscGluayxwdXJwbGUsZGVlcFB1cnBsZSxpbmRpZ28sYmx1ZSwgbGlnaHRCbHVlLCBjeWFuLCB0ZWFsLCBncmVlbiwgbGlnaHRHcmVlbiwgbGltZSwgeWVsbG93LCBhbWJlciwgb3JhbmdlLCBkZWVwT3JhbmdlLGdyZXkgfSBmcm9tIFwibWF0ZXJpYWwtdWkvY29sb3JzXCJcblxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuXG4vLyBmdW5jdGlvbiBjb2xvclBhcnNlckNvbXBvc2VyKG1vZGlmaWVyXG4vLyB9XG5cblxuZnVuY3Rpb24gY29sb3JQYXJzZXJDb21wb3Nlcihtb2RpZmllcil7XG5cblx0XHR2YXIgY29sb3JzID0geyByZWQscGluayxwdXJwbGUsZGVlcFB1cnBsZSxpbmRpZ28sYmx1ZSwgbGlnaHRCbHVlLCBjeWFuLCB0ZWFsLCBncmVlbiwgbGlnaHRHcmVlbiwgbGltZSwgeWVsbG93LCBhbWJlciwgb3JhbmdlLCBkZWVwT3JhbmdlLCBncmV5IH07XG5cblx0cmV0dXJuIGZ1bmN0aW9uKGNvbG9yVGV4dCl7XG5cblxuXHRcdGlmKCBjb2xvcnMuaGFzT3duUHJvcGVydHkoY29sb3JUZXh0KSl7XG5cdFx0XHRyZXR1cm4gY29sb3JzW2NvbG9yVGV4dF1bbW9kaWZpZXJdXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAnbm8gbWF0Y2gnXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0Q29sb3JQYXJzZXIoY29sb3JUZXh0LCBjb21wbGV0ZSl7XG5cdHZhciB3aGl0ZUxpc3QgPSBbJ3JlZCcsJ3BpbmsnLCdwdXJwbGUnLCdkZWVwUHVycGxlJywnaW5kaWdvJywnYmx1ZScsJ3RlYWwnLCdkZWVwT3JhbmdlJywnYnJvd24nLCdibHVlR3JleSddO1xuXHR2YXIgYmxhY2tMaXN0ID0gWydsaWdodEJsdWUnLCdjeWFuJywnZ3JlZW4nLCdsaWdodEdyZWVuJywnbGltZScsJ3llbGxvdycsJ2FtYmVyJywnb3JhbmdlJywnZ3JleSddO1xuXHRpZihjb21wbGV0ZSl7XG5cdFx0aWYoXy5pbmNsdWRlcyh3aGl0ZUxpc3QsIGNvbG9yVGV4dCkpe1xuXHRcdFx0cmV0dXJuICcjMDAwMDAwJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJyNmZmZmZmYnXG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdFx0aWYoXy5pbmNsdWRlcyh3aGl0ZUxpc3QsIGNvbG9yVGV4dCkpe1xuXHRcdFx0XHRyZXR1cm4gJyNmZmZmZmYnXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAnIzAwMDAwMCdcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjY2VudFRleHRDb2xvclBhcnNlcihjb2xvclRleHQpe1xuXHR2YXIgd2hpdGVMaXN0ID0gWydyZWQnLCdwaW5rJywncHVycGxlJywnZGVlcFB1cnBsZScsICdpbmRpZ28nLCdibHVlJ11cblx0dmFyIGJsYWNrTGlzdCA9IFsnbGlnaHRCbHVlJywgJ2N5YW4nLCd0ZWFsJywnZ3JlbicsJ2xpZ2h0R3JlZW4nLCdsaW1lJywneWVsbG93JywnYW1iZXInLCdvcmFuZ2UnLCdkZWVwT3JhbmdlJ11cblxuXHRpZihfLmluY2x1ZGVzKHdoaXRlTGlzdCwgY29sb3JUZXh0KSl7XG5cdFx0cmV0dXJuICcjZmZmZmZmJ1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAnIzAwMDAwMCdcblx0fVxufVxuXG5leHBvcnQgY29uc3QgcmF3Q29sb3JQYXJzZXIgPSAoY29sb3JUZXh0KSA9PiB7XG5cdFx0XHR2YXIgY29sb3JzID0geyByZWQscGluayxwdXJwbGUsZGVlcFB1cnBsZSxpbmRpZ28sYmx1ZSwgbGlnaHRCbHVlLCBjeWFuLCB0ZWFsLCBncmVlbiwgbGlnaHRHcmVlbiwgbGltZSwgeWVsbG93LCBhbWJlciwgb3JhbmdlLCBkZWVwT3JhbmdlLGdyZXkgfTtcblx0XHRpZiggY29sb3JzLmhhc093blByb3BlcnR5KGNvbG9yVGV4dCkpe1xuXHRcdFx0cmV0dXJuIGNvbG9yc1tjb2xvclRleHRdXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBncmV5XG5cdFx0fVxufVxuXG5leHBvcnQgY29uc3QgcHJpbWFyeUNvbG9yUGFyc2VyID0gY29sb3JQYXJzZXJDb21wb3Nlcig1MDApO1xuXG5leHBvcnQgY29uc3QgYWNjZW50Q29sb3JQYXJzZXIgPSBjb2xvclBhcnNlckNvbXBvc2VyKCdBNDAwJylcblxuZXhwb3J0IGNvbnN0IGZhZGVkQ29sb3JQYXJzZXIgPSBjb2xvclBhcnNlckNvbXBvc2VyKDEwMClcblxuXG5leHBvcnQgY29uc3Qgd2hpdGUgPSB7XG4gIDUwOiBcdCcjZmZmZmZmJyxcbiAgMTAwOiBcdCcjZmZmZmZmJyxcbiAgMjAwOiBcdCcjZmZmZmZmJyxcbiAgMzAwOiBcdCcjZmZmZmZmJyxcbiAgNDAwOiBcdCcjZmZmZmZmJyxcbiAgNTAwOiBcdCcjZmZmZmZmJyxcbiAgNjAwOiBcdCcjZmZmZmZmJyxcbiAgNzAwOiBcdCcjZmZmZmZmJyxcbiAgODAwOiBcdCcjZmZmZmZmJyxcbiAgOTAwOiBcdCcjZmZmZmZmJyxcbiAgQTEwMDogJyNmZmZmZmYnLFxuICBBMjAwOiAnI2ZmZmZmZicsXG4gIEE0MDA6ICcjZmZmZmZmJyxcbiAgQTcwMDogJyNmZmZmZicsXG4gIGNvbnRyYXN0RGVmYXVsdENvbG9yOiAnZGFyaydcbn07XG5cbmV4cG9ydCBjb25zdCBibGFjayA9IHtcbiAgNTA6IFx0JyMwMDAwMDAnLFxuICAxMDA6IFx0JyMwMDAwMDAnLFxuICAyMDA6IFx0JyMwMDAwMDAnLFxuICAzMDA6IFx0JyMwMDAwMDAnLFxuICA0MDA6IFx0JyMwMDAwMDAnLFxuICA1MDA6IFx0JyMwMDAwMDAnLFxuICA2MDA6IFx0JyMwMDAwMDAnLFxuICA3MDA6IFx0JyMwMDAwMDAnLFxuICA4MDA6IFx0JyMwMDAwMDAnLFxuICA5MDA6IFx0JyMwMDAwMDAnLFxuICBBMTAwOiAnIzAwMDAwMCcsXG4gIEEyMDA6ICcjMDAwMDAwJyxcbiAgQTQwMDogJyMwMDAwMDAnLFxuICBBNzAwOiAnIzAwMDAwMCcsXG4gIGNvbnRyYXN0RGVmYXVsdENvbG9yOiAnZGFyaydcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2hlbHBlcnMvY29sb3JQYXJzZXIuanMiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBjb25zdCBORVdfSVRFTSA9IFwiTkVXX0lURU1cIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfQkFTRSA9IFwiQ0hBTkdFX0JBU0VcIjtcbmV4cG9ydCBjb25zdCBDT01QTEVURV9JVEVNID0gXCJDT01QTEVURV9JVEVNXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0lURU0gPSBcIkRFTEVURV9JVEVNXCI7XG5leHBvcnQgY29uc3QgUkVPUkRFUl9JVEVNID0gXCJSRU9SREVSX0lURU1cIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfQ09MT1IgPSBcIkNIQU5HRV9DT0xPUlwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9JVEVNID0gXCJVUERBVEVfSVRFTVwiO1xuXG5cbi8vID09PT09PT09PT09PVxuLy8gVG8gSW1wbGVtZW50XG4vLyA9PT09PT09PT09PT1cblxuZXhwb3J0IGNvbnN0IFVQREFURV9EQVRBID0gXCJVUERBVEVfREFUQVwiO1xuXG4vLyA9PT09PT09PT09PT09PT1cbi8vIEFjdGlvbiBDcmVhdG9yc1xuLy8gPT09PT09PT09PT09PT09XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdJdGVtKGNvbnRlbnQgPSBcIlwiLCBwYXJlbnQgPSBcInJvb3RcIikge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE5FV19JVEVNLFxuXHRcdHBheWxvYWQ6IHtcblx0XHRcdGNvbnRlbnQsXG5cdFx0XHRwYXJlbnRcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VCYXNlSXRlbShpZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9CQVNFLFxuXHRcdHBheWxvYWQ6IGlkXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0ZUl0ZW0oaWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDT01QTEVURV9JVEVNLFxuXHRcdHBheWxvYWQ6IGlkXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVJdGVtKGlkKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogREVMRVRFX0lURU0sXG5cdFx0cGF5bG9hZDogaWRcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlb3JkZXJJdGVtKHBhcmVudElELCBvbGRJbmRleCwgbmV3SW5kZXgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBSRU9SREVSX0lURU0sXG5cdFx0cGF5bG9hZDoge1xuXHRcdFx0cGFyZW50SUQsXG5cdFx0XHRvbGRJbmRleCxcblx0XHRcdG5ld0luZGV4XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ29sb3IoaWQsY29sb3Ipe1xuXHRyZXR1cm57XG5cdFx0dHlwZTogQ0hBTkdFX0NPTE9SLFxuXHRcdHBheWxvYWQ6IHtcblx0XHRcdGlkLFxuXHRcdFx0Y29sb3Jcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW0oaWQsbmV3VGV4dCl7XG5cdHJldHVybiB7XG5cdFx0dHlwZTpVUERBVEVfSVRFTSxcblx0XHRwYXlsb2FkOntcblx0XHRcdGlkLFxuXHRcdFx0bmV3VGV4dFxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRGF0YShpZCwgbmV3U3RhdGUpe1xuXHRjb25zb2xlLmxvZyhcIlVQREFURV9EQVRBIGZpcmVkXCIpXG5cdHZhciByZXF1ZXN0ID0gYXhpb3MucHV0KGAvdG9kby8ke2lkfWAsIG5ld1N0YXRlKVxuXHRyZXR1cm57XG5cdFx0dHlwZTpVUERBVEVfREFUQSxcblx0XHRwYXlsb2FkOnJlcXVlc3Rcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvYWN0aW9ucy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlU2hlZXQsIE11aVRoZW1lUHJvdmlkZXIgfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMnXG5pbXBvcnQgeyBnZXREZWZhdWx0Q29udGV4dCB9IGZyb20gJy4vc3R5bGUvY3JlYXRlRGVmYXVsdENvbnRleHQnXG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBjcmVhdGVTdHlsZVNoZWV0KCdBcHAnLCB0aGVtZSA9PiAoe1xuICAnQGdsb2JhbCc6IHtcbiAgICBodG1sOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcbiAgICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICAgIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsIC8vIEFudGlhbGlhc2luZy5cbiAgICAgIE1vek9zeEZvbnRTbW9vdGhpbmc6ICdncmF5c2NhbGUnIC8vIEFudGlhbGlhc2luZy5cbiAgICB9LFxuICAgIGJvZHk6IHtcbiAgICAgIG1hcmdpbjogMFxuICAgIH0sXG4gICAgYToge1xuICAgICAgY29sb3I6ICdpbmhlcml0J1xuICAgIH1cbiAgfVxufSkpXG5cbmxldCBBcHBXcmFwcGVyID0gcHJvcHMgPT4gPGRpdj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cbkFwcFdyYXBwZXIgPSB3aXRoU3R5bGVzKHN0eWxlU2hlZXQpKEFwcFdyYXBwZXIpXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJylcbiAgICBpZiAoanNzU3R5bGVzICYmIGpzc1N0eWxlcy5wYXJlbnROb2RlKSB7XG4gICAgICBqc3NTdHlsZXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChqc3NTdHlsZXMpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHN0eWxlTWFuYWdlciwgdGhlbWUgfSA9IGdldERlZmF1bHRDb250ZXh0KClcbiAgICByZXR1cm4gKFxuICAgICAgPE11aVRoZW1lUHJvdmlkZXIgc3R5bGVNYW5hZ2VyPXtzdHlsZU1hbmFnZXJ9IHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxBcHBXcmFwcGVyPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0FwcFdyYXBwZXI+XG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKVxuICB9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9BcHAuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFNvcnRhYmxlSGFuZGxlIH0gZnJvbSBcInJlYWN0LXNvcnRhYmxlLWhvY1wiO1xuaW1wb3J0IHsgTGlzdEl0ZW0sIExpc3RJdGVtVGV4dCB9IGZyb20gXCJtYXRlcmlhbC11aS9MaXN0XCI7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIm1hdGVyaWFsLXVpL0NoZWNrYm94XCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IFJlb3JkZXIgZnJvbSBcIm1hdGVyaWFsLXVpLWljb25zL1Jlb3JkZXJcIjtcbmltcG9ydCBEb3QgZnJvbSAnbWF0ZXJpYWwtdWktaWNvbnMvQnJpZ2h0bmVzczEnXG5pbXBvcnQgRGVsZXRlRm9yZXZlciBmcm9tIFwibWF0ZXJpYWwtdWktaWNvbnMvRGVsZXRlRm9yZXZlclwiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJ21hdGVyaWFsLXVpLWljb25zL1NldHRpbmdzJ1xuaW1wb3J0IEZvcm1hdExpc3RCdWxsZXRlZCAgZnJvbSBcIm1hdGVyaWFsLXVpLWljb25zL0Zvcm1hdExpc3RCdWxsZXRlZFwiO1xuaW1wb3J0IHsgcmVkLHBpbmsscHVycGxlLGRlZXBQdXJwbGUsaW5kaWdvLGJsdWUsIGxpZ2h0Qmx1ZSwgY3lhbiwgdGVhbCwgZ3JlZW4sIGxpZ2h0R3JlZW4sIGxpbWUsIHllbGxvdywgYW1iZXIsIG9yYW5nZSwgZGVlcE9yYW5nZSwgZ3JleSB9IGZyb20gXCJtYXRlcmlhbC11aS9jb2xvcnNcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9CdXR0b24nO1xuaW1wb3J0IE1lbnUsIHsgTWVudUl0ZW0gfSBmcm9tICdtYXRlcmlhbC11aS9NZW51JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ21hdGVyaWFsLXVpL1R5cG9ncmFwaHknO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvRGl2aWRlcic7XG5pbXBvcnQge3ByaW1hcnlDb2xvclBhcnNlciwgZmFkZWRDb2xvclBhcnNlcn0gZnJvbSAnLi4vaGVscGVycy9jb2xvclBhcnNlci5qcydcbmltcG9ydCBMaXN0SXRlbVRleHRBcmVhIGZyb20gJy4vTGlzdEl0ZW1UZXh0QXJlYS5qcydcblxuY29uc3QgRHJhZ0hhbmRsZSA9IFNvcnRhYmxlSGFuZGxlKChwcm9wcykgPT57XG5cblx0dmFyIGFjdGl2ZVN0eWxlID0gcHJvcHMuY29tcGxldGUgPyB7fSA6IHtjdXJzb3I6J3BvaW50ZXInfVxuXHR2YXIgY2VudGVyU3R5bGUgPSB7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIG1hcmdpbjoxMn1cblxuXHRyZXR1cm4oXG5cdFx0PHNwYW4gc3R5bGU9e3suLi5wcm9wcy5jb21wbGV0ZVN0eWxlLCAuLi5hY3RpdmVTdHlsZSwgLi4uY2VudGVyU3R5bGV9fT5cblx0XHQ8UmVvcmRlciAvPlxuXHRcdDwvc3Bhbj5cblx0XHQpfVxuKTtcblxuY29uc3QgQ29sb3JNZW51ID0gKHByb3BzKSAgPT4ge1xuXHQvLyB2YXIgY29sb3JzID0gWydyZWQnLCAncHVycGxlJywgJ2xpZ2h0Qmx1ZScsICd0ZWFsJywgJ2xpZ2h0R3JlZW4nLCAneWVsbG93JywgJ29yYW5nZScsICdwaW5rJ11cblx0dmFyIGNvbG9ycyA9IFsncmVkJywncGluaycsJ2RlZXBQdXJwbGUnLCAnaW5kaWdvJywgJ2xpZ2h0Qmx1ZScsJ2N5YW4nLCAndGVhbCcsICdncmVlbicsJ2xpZ2h0R3JlZW4nLCd5ZWxsb3cnLCdvcmFuZ2UnLCdkZWVwT3JhbmdlJ11cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0e2NvbG9ycy5tYXAoKGNvbG9yLCBpbmRleCk9PntcblxuXHRcdFx0XHR2YXIgYnJlYWtMaW5lID0gaW5kZXggJSA0ID09PSAzID8gPGJyIC8+IDogXCJcIlxuXG5cdFx0XHRcdHJldHVybihcblx0XHRcdFx0PHNwYW4ga2V5PXtgJHtjb2xvcn0tJHtpbmRleH1gfVxuXHRcdFx0XHRvbkNsaWNrPXtwcm9wcy5jbGlja0hhbmRsZXIoY29sb3IpfT5cblx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0c3R5bGU9e3tjb2xvcjpwcmltYXJ5Q29sb3JQYXJzZXIoY29sb3IpfX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxEb3QgLz5cblx0XHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0XHR7YnJlYWtMaW5lfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdClcblx0XHRcdH0pfVxuXHRcdDwvZGl2PlxuXHRcdClcbn1cblxuXG5jbGFzcyBCYXNlTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRvcGVuOmZhbHNlLFxuXHRcdFx0YW5jaG9yRWw6IHVuZGVmaW5lZFxuXHRcdH1cblxuXHRcdHRoaXMuY29tcGxldGVEaXNwbGF5ID0gdGhpcy5jb21wbGV0ZURpc3BsYXkuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuYmluZCh0aGlzKTtcblx0XHR0aGlzLm9wZW5NZW51ID0gdGhpcy5vcGVuTWVudS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2xvc2VNZW51ID0gdGhpcy5jbG9zZU1lbnUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNvbG9ySXRlbUNsaWNrSGFuZGxlciA9IHRoaXMuY29sb3JJdGVtQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG5cdH1cblxuXHQgaXRlbSA9IHRoaXMucHJvcHMudmFsdWU7XG5cblx0aW5jb21wbGV0ZUxpc3RTdHlsZSA9IHsgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3JQYXJzZXIodGhpcy5pdGVtLmNvbG9yKSB9O1xuXHRjb21wbGV0ZUxpc3RTdHlsZSA9IHsgYmFja2dyb3VuZENvbG9yOiBmYWRlZENvbG9yUGFyc2VyKHRoaXMuaXRlbS5jb2xvcikgfTtcblx0Ly8gbGlzdEl0ZW1TdHlsZSA9IHRoaXMuaXRlbS5jb21wbGV0ZVxuXHQvLyBcdD8gdGhpcy5jb21wbGV0ZUxpc3RTdHlsZVxuXHQvLyBcdDogdGhpcy5pbmNvbXBsZXRlTGlzdFN0eWxlO1xuXHQvLyBsaXN0SXRlbVN0eWxlID0ge2JhY2tncm91bmRDb2xvcjp0aGlzLnN0YXRlLmJnQ29sb3J9XG5cdGNvbXBsZXRlR3JleSA9IGdyZXlbNTAwXTtcblx0Y29tcGxldGVMaW5lU3R5bGUgPSB0aGlzLml0ZW0uY29tcGxldGVcblx0XHQ/IHsgY29sb3I6IHRoaXMuY29tcGxldGVHcmV5LCB0ZXh0RGVjb3JhdGlvbjogXCJsaW5lLXRocm91Z2hcIiB9XG5cdFx0OiB7fTtcblx0Y29tcGxldGVTdHlsZSA9IHRoaXMuaXRlbS5jb21wbGV0ZVxuXHQ/IHsgY29sb3I6IHRoaXMuY29tcGxldGVHcmV5IH1cblx0OiB7IGNvbG9yOiB0aGlzLnRleHRDb2xvcn07XG5cblxuXHRjb21wbGV0ZURpc3BsYXkoKSB7XG5cdFx0dmFyIGNvbXBsZXRlZCA9IHRoaXMuaXRlbS5jb21wbGV0ZUNoaWxkcmVuLmxlbmd0aDtcblx0XHR2YXIgdG90YWwgPSBjb21wbGV0ZWQgKyB0aGlzLml0ZW0uaW5jb21wbGV0ZUNoaWxkcmVuLmxlbmd0aDtcblx0XHR2YXIgdGV4dENvbG9yID0gdGhpcy5wcm9wcy52YWx1ZS5jb21wbGV0ZT8gdGhpcy5jb21wbGV0ZUdyZXkgOiB0aGlzLnByb3BzLnRleHRDb2xvclxuXHRcdHZhciBkaXNwbGF5VGV4dFN0eWxlID0gdGhpcy5wcm9wcy52YWx1ZS5jb21wbGV0ZVxuXHRcdD8geyBjb2xvcjogdGhpcy5jb21wbGV0ZUdyZXl9XG5cdFx0OiB7IGNvbG9yOiB0aGlzLnByb3BzLnRleHRDb2xvcn07XG5cdFx0aWYgKHRvdGFsID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gXCJcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRzdHlsZT17ZGlzcGxheVRleHRTdHlsZX1cblx0XHRcdFx0PntgKCAke2NvbXBsZXRlZH0gLyAke3RvdGFsfSBjb21wbGV0ZSlgfTwvc3Bhbj5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0Y29udGVudCgpIHtcblx0XHR2YXIgdGV4dENvbG9yID0gdGhpcy5wcm9wcy52YWx1ZS5jb21wbGV0ZT8gdGhpcy5jb21wbGV0ZUdyZXkgOiB0aGlzLnByb3BzLnRleHRDb2xvclxuXHRcdHZhciBjb250ZW50VGV4dFN0eWxlID0gdGhpcy5wcm9wcy52YWx1ZS5jb21wbGV0ZVxuXHRcdD8geyBjb2xvcjogdGhpcy5jb21wbGV0ZUdyZXksIHRleHREZWNvcmF0aW9uOiBcImxpbmUtdGhyb3VnaFwiIH1cblx0XHQ6IHsgY29sb3I6IHRoaXMucHJvcHMudGV4dENvbG9yfTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNwYW4gc3R5bGU9e3suLi5jb250ZW50VGV4dFN0eWxlLCB3b3JkV3JhcDonYnJlYWstd29yZCcsIHdvcmRCcmVhazonYnJlYWstYWxsJ319PlxuXHRcdFx0XHR7dGhpcy5pdGVtLmNvbnRlbnR9XG5cdFx0XHQ8L3NwYW4+XG5cdFx0KTtcblx0fVxuXG5cdG9wZW5NZW51KGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHtvcGVuOnRydWUsIGFuY2hvckVsOiBldmVudC5jdXJyZW50VGFyZ2V0fSlcblx0fVxuXG5cdGNsb3NlTWVudSgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe29wZW46ZmFsc2V9KVxuXHR9XG5cblx0Y29sb3JJdGVtQ2xpY2tIYW5kbGVyKGNvbG9yTmFtZSl7XG5cdFx0dmFyIGNsb3NlID0gdGhpcy5jbG9zZU1lbnVcblx0XHRsZXQgY2hhbmdlQ29sb3IgPSB0aGlzLnByb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXIodGhpcy5pdGVtLmlkLCBjb2xvck5hbWUpXG5cdFx0bGV0IHByb3BzQ29sb3IgPSB0aGlzLnByb3BzLmJnQ29sb3Jcblx0XHRyZXR1cm4gZnVuY3Rpb24oKXtcblx0XHRjaGFuZ2VDb2xvcigpXG5cdFx0Y2xvc2UoKVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHZhciB0ZXh0Q29sb3IgPSB0aGlzLnByb3BzLnZhbHVlLmNvbXBsZXRlPyB0aGlzLmNvbXBsZXRlR3JleSA6IHRoaXMucHJvcHMudGV4dENvbG9yXG5cdHJldHVybiAoXG5cdFx0PExpc3RJdGVtIGRpdmlkZXI9e3RydWV9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLml0ZW1Db2xvciwgcGFkZGluZzoxMn19PlxuXHRcdFx0PERyYWdIYW5kbGVcblx0XHRcdFx0Y29tcGxldGVTdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHRcdGNvbXBsZXRlPXt0aGlzLml0ZW0uY29tcGxldGV9XG5cdFx0XHQvPlxuXHRcdFx0PENoZWNrYm94XG5cdFx0XHRcdGNoZWNrZWQ9e3RoaXMuaXRlbS5jb21wbGV0ZX1cblx0XHRcdFx0b25DbGljaz17dGhpcy5wcm9wcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcih0aGlzLml0ZW0uaWQpfVxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHQvPlxuXG5cdFx0XHQ8TGlzdEl0ZW1UZXh0QXJlYVxuXHRcdFx0cHJpbWFyeT17dGhpcy5jb250ZW50KCl9XG5cdFx0XHRzZWNvbmRhcnk9e3RoaXMuY29tcGxldGVEaXNwbGF5KCl9XG5cdFx0XHR0ZXh0Q29sb3I9e3RleHRDb2xvcn1cblx0XHRcdHJhd1RleHQ9e3RoaXMuaXRlbS5jb250ZW50fVxuXHRcdFx0dXBkYXRlSXRlbT17dGhpcy5wcm9wcy51cGRhdGVJdGVtfVxuXHRcdFx0aWQ9e3RoaXMuaXRlbS5pZH1cblx0XHRcdGNvbXBsZXRlPXt0aGlzLml0ZW0uY29tcGxldGV9XG5cdFx0XHQvPlxuXG5cdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLmNoYW5nZUJhc2VDb21wb3Nlcih0aGlzLml0ZW0uaWQpfVxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHQ+XG5cdFx0XHRcdDxGb3JtYXRMaXN0QnVsbGV0ZWQgLz5cblx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRvbkNsaWNrPXt0aGlzLm9wZW5NZW51fVxuXHRcdFx0c3R5bGU9e3tjb2xvcjp0ZXh0Q29sb3J9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8U2V0dGluZ3MgLz5cblx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdDxNZW51XG5cdFx0XHRpZD17YCR7dGhpcy5pdGVtLmlkfS1tZW51YH1cblx0XHRcdG9wZW49e3RoaXMuc3RhdGUub3Blbn1cblx0XHRcdG9uUmVxdWVzdENsb3NlPXt0aGlzLmNsb3NlTWVudX1cblx0XHRcdGFuY2hvckVsPXt0aGlzLnN0YXRlLmFuY2hvckVsfVxuXHRcdFx0PlxuXHRcdFx0XHQ8VHlwb2dyYXBoeVxuXHRcdFx0XHR0eXBlPXtcInN1YmhlYWRpbmdcIn1cblx0XHRcdFx0YWxpZ249eydjZW50ZXInfVxuXHRcdFx0XHRzdHlsZT17e291dGxpbmU6J25vbmUnLCBwYWRkaW5nTGVmdDoxNn19XG5cdFx0XHRcdD5DaGFuZ2UgQ29sb3I8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdDxEaXZpZGVyIC8+XG5cdFx0XHRcdDxDb2xvck1lbnVcblx0XHRcdFx0Y2xpY2tIYW5kbGVyPXt0aGlzLmNvbG9ySXRlbUNsaWNrSGFuZGxlcn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PERpdmlkZXIgLz5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319XG5cdFx0XHRcdD5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOid3aGl0ZScsIGJhY2tncm91bmRDb2xvcjpyZWRbNTAwXSwgbWFyZ2luVG9wOjh9fVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLmRlbGV0ZUl0ZW1Db21wb3Nlcih0aGlzLml0ZW0uaWQpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PERlbGV0ZUZvcmV2ZXIgLz4geydEZWxldGUgSXRlbSd9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTWVudT5cblx0XHQ8L0xpc3RJdGVtPlxuXHQpO1xuXHR9XG59O1xuXG5CYXNlTGlzdEl0ZW0ucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VMaXN0SXRlbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwIGZyb20gJy4uL3RvZG8tbGlzdC9zcmMvQXBwLmpzJ1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4uL3RvZG8tbGlzdC9zcmMvaW5kZXguanMnXG5cblxuXG5cbmNsYXNzIFRvZG8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5IH0pIHtcbiAgICByZXR1cm4geyBxdWVyeSB9XG59XG5cbiAgc2VlZFN0YXRlID0gdGhpcy5wcm9wcy5xdWVyeS5pbml0aWFsU3RhdGVcbiAgbGlzdElEID0gdGhpcy5wcm9wcy5xdWVyeS5pbml0aWFsU3RhdGUuX2lkXG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwcD5cbiAgICAgICAgPFRvZG9MaXN0XG4gICAgICAgIHNlZWRTdGF0ZT17dGhpcy5zZWVkU3RhdGV9XG4gICAgICAgIGxpc3RJRD17dGhpcy5saXN0SUR9XG4gICAgICAgIC8+XG4gICAgICA8L0FwcD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdG9kby5qcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG4vLyBpbXBvcnQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIGZyb20gXCIuL3JlZ2lzdGVyU2VydmljZVdvcmtlclwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCByZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcbmltcG9ydCBSZWR1eFByb21pc2UgZnJvbSBcInJlZHV4LXByb21pc2VcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBUb2RvQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9Ub2RvQ29udGFpbmVyLmpzJ1xuXG5cblxuY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGNvbXBvc2VXaXRoRGV2VG9vbHMoXG5cdGFwcGx5TWlkZGxld2FyZShSZWR1eFByb21pc2UpXG4pKGNyZWF0ZVN0b3JlKTtcblxuY29uc3QgQm9pbGVyID0gKHByb3BzKSA9PlxuXHQ8UHJvdmlkZXIgc3RvcmU9e2NyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUocmVkdWNlcnMsIHByb3BzLnNlZWRTdGF0ZSl9PlxuXHRcdDxUb2RvQ29udGFpbmVyXG5cdFx0bGlzdElEPXtwcm9wcy5saXN0SUR9XG5cdFx0Lz5cblx0PC9Qcm92aWRlcj47XG5cbi8vIFJlYWN0RE9NLnJlbmRlcig8Qm9pbGVyIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xuLy8gcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJvaWxlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvaW5kZXguanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBpdGVtcyBmcm9tIFwiLi9pdGVtc19yZWR1Y2VyLmpzXCI7XG5pbXBvcnQgYmFzZUl0ZW0gZnJvbSBcIi4vYmFzZUl0ZW1fcmVkdWNlci5qc1wiO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG5cdGl0ZW1zLFxuXHRiYXNlSXRlbVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IE5FV19JVEVNLCBDT01QTEVURV9JVEVNLCBERUxFVEVfSVRFTSwgUkVPUkRFUl9JVEVNLCBDSEFOR0VfQ09MT1IsIFVQREFURV9JVEVNLCBVUERBVEVfREFUQSB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIGl0ZW1zKHN0YXRlID0gc2VlZERhdGEsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBORVdfSVRFTTpcblx0XHRcdHZhciBuZXdJRCA9IHJhbmRvbUlEKCk7XG5cdFx0XHR2YXIgcGFyZW50SUQgPSBhY3Rpb24ucGF5bG9hZC5wYXJlbnQ7XG5cdFx0XHR2YXIgbmV3SXRlbSA9IHtcblx0XHRcdFx0W25ld0lEXToge1xuXHRcdFx0XHRcdGlkOiBuZXdJRCxcblx0XHRcdFx0XHRjb250ZW50OiBhY3Rpb24ucGF5bG9hZC5jb250ZW50LFxuXHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRcdFx0XHRjb2xvcjonbGlnaHRCbHVlJyxcblx0XHRcdFx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRcdFx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdFx0XHRcdHBhcmVudDogcGFyZW50SURcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHZhciBuZXdQYXJlbnQgPSB7IFtwYXJlbnRJRF06IGFkZENoaWxkKHN0YXRlW3BhcmVudElEXSwgbmV3SUQpIH07XG5cdFx0XHR2YXIgbmV3U3RhdGUgPSBfLm1lcmdlKHt9LCBzdGF0ZSwgbmV3SXRlbSwgbmV3UGFyZW50KTtcblx0XHRcdHJldHVybiBuZXdTdGF0ZTtcblxuXHRcdGNhc2UgQ09NUExFVEVfSVRFTTpcblx0XHRcdHZhciBpZCA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0dmFyIG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUpO1xuXHRcdFx0dmFyIG5ld0l0ZW0gPSB7IFtpZF06IG5ld1N0YXRlW2lkXSB9O1xuXHRcdFx0dmFyIHBhcmVudElEID0gbmV3SXRlbVtpZF0ucGFyZW50O1xuXHRcdFx0bmV3SXRlbVtpZF0uY29tcGxldGUgPSAhbmV3SXRlbVtpZF0uY29tcGxldGU7XG5cdFx0XHRpZiAobmV3SXRlbVtpZF0uY29tcGxldGUpIHtcblx0XHRcdFx0Xy5wdWxsKG5ld1N0YXRlW3BhcmVudElEXS5pbmNvbXBsZXRlQ2hpbGRyZW4sIGlkKTtcblx0XHRcdFx0bmV3U3RhdGVbcGFyZW50SURdLmNvbXBsZXRlQ2hpbGRyZW4udW5zaGlmdChpZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfLnB1bGwobmV3U3RhdGVbcGFyZW50SURdLmNvbXBsZXRlQ2hpbGRyZW4sIGlkKTtcblx0XHRcdFx0bmV3U3RhdGVbcGFyZW50SURdLmluY29tcGxldGVDaGlsZHJlbi5wdXNoKGlkKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBfLm1lcmdlKG5ld1N0YXRlLCBuZXdJdGVtKTtcblxuXHRcdGNhc2UgREVMRVRFX0lURU06XG5cdFx0XHR2YXIgaWQgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHZhciBuZXdTdGF0ZSA9IF8ubWVyZ2Uoe30sIHN0YXRlKTtcblx0XHRcdHZhciBwYXJlbnQgPSBzdGF0ZVtpZF0ucGFyZW50O1xuXHRcdFx0bmV3U3RhdGUgPSBfLm9taXQobmV3U3RhdGUsIGdlbmVyYXRlQ2hpbGRMaXN0KHN0YXRlLCBpZCkpO1xuXHRcdFx0bmV3U3RhdGVbcGFyZW50XS5jb21wbGV0ZUNoaWxkcmVuID0gXy5maWx0ZXIoXG5cdFx0XHRcdG5ld1N0YXRlW3BhcmVudF0uY29tcGxldGVDaGlsZHJlbixcblx0XHRcdFx0biA9PiBuICE9PSBpZFxuXHRcdFx0KTtcblx0XHRcdG5ld1N0YXRlW3BhcmVudF0uaW5jb21wbGV0ZUNoaWxkcmVuID0gXy5maWx0ZXIoXG5cdFx0XHRcdG5ld1N0YXRlW3BhcmVudF0uaW5jb21wbGV0ZUNoaWxkcmVuLFxuXHRcdFx0XHRuID0+IG4gIT09IGlkXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIG5ld1N0YXRlO1xuXG5cdFx0Y2FzZSBSRU9SREVSX0lURU06XG5cdFx0XHR2YXIgbmV3U3RhdGUgPSBfLm1lcmdlKHt9LCBzdGF0ZSk7XG5cdFx0XHR2YXIgcGFyZW50SUQgPSBhY3Rpb24ucGF5bG9hZC5wYXJlbnRJRDtcblx0XHRcdG5ld1N0YXRlW3BhcmVudElEXS5pbmNvbXBsZXRlQ2hpbGRyZW4gPSByZW9yZGVyKFxuXHRcdFx0XHRuZXdTdGF0ZVtwYXJlbnRJRF0uaW5jb21wbGV0ZUNoaWxkcmVuLFxuXHRcdFx0XHRhY3Rpb24ucGF5bG9hZC5vbGRJbmRleCxcblx0XHRcdFx0YWN0aW9uLnBheWxvYWQubmV3SW5kZXhcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gbmV3U3RhdGU7XG5cblx0XHRjYXNlIENIQU5HRV9DT0xPUjpcblx0XHRcdHZhciBuZXdTdGF0ZSA9IF8ubWVyZ2Uoe30sIHN0YXRlKVxuXHRcdFx0bmV3U3RhdGVbYWN0aW9uLnBheWxvYWQuaWRdLmNvbG9yID0gYWN0aW9uLnBheWxvYWQuY29sb3Jcblx0XHRcdHJldHVybiBuZXdTdGF0ZTtcblxuXHRcdGNhc2UgVVBEQVRFX0lURU06XG5cdFx0XHR2YXIgbmV3U3RhdGUgPSBfLm1lcmdlKHt9LCBzdGF0ZSlcblx0XHRcdG5ld1N0YXRlW2FjdGlvbi5wYXlsb2FkLmlkXS5jb250ZW50ID0gYWN0aW9uLnBheWxvYWQubmV3VGV4dFxuXHRcdFx0cmV0dXJuIG5ld1N0YXRlXG5cblx0XHRjYXNlIFVQREFURV9EQVRBOlxuXHRcdFx0Y29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpXG5cdFx0XHRyZXR1cm4gc3RhdGVcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaXRlbXM7XG5cbi8vIC8vIFN0cnVjdHVyZSBvZiBJdGVtc1xuLy8gaWQ6IHtcbi8vIFx0Y29udGVudDpTdHJpbmcsXG4vLyBcdHBhcmVudDppZCxcbi8vIFx0Y2hpbGRyZW46W2lkLGlkLGlkLi4uXVxuLy8gfVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNoaWxkTGlzdChzdGF0ZSwgYmFzZUlEKSB7XG5cdHZhciBsaXN0ID0gW2Jhc2VJRF07XG5cdGxpc3QgPSBsaXN0XG5cdFx0LmNvbmNhdChzdGF0ZVtiYXNlSURdLmNvbXBsZXRlQ2hpbGRyZW4pXG5cdFx0LmNvbmNhdChzdGF0ZVtiYXNlSURdLmluY29tcGxldGVDaGlsZHJlbik7XG5cdGZvciAodmFyIGkgPSAxOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGxpc3QgPSBsaXN0XG5cdFx0XHQuY29uY2F0KHN0YXRlW2xpc3RbaV1dLmNvbXBsZXRlQ2hpbGRyZW4pXG5cdFx0XHQuY29uY2F0KHN0YXRlW2xpc3RbaV1dLmluY29tcGxldGVDaGlsZHJlbik7XG5cdH1cblx0cmV0dXJuIGxpc3Q7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUlEKCkge1xuXHRyZXR1cm4gXy5yYW5kb20oMCwgNjU1MDAsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2hpbGQoaXRlbSwgY2hpbGQpIHtcblx0cmV0dXJuIF8ubWVyZ2Uoe30sIGl0ZW0sIHtcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IGl0ZW0uaW5jb21wbGV0ZUNoaWxkcmVuLmNvbmNhdChjaGlsZClcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHJlb3JkZXIoYXJyLCBvbGRJbmRleCwgbmV3SW5kZXgpIHtcblx0dmFyIHJlbW92ZWQgPSBbXTtcblx0aWYgKG9sZEluZGV4ID09PSAwKSB7XG5cdFx0cmVtb3ZlZCA9IGFyci5zbGljZSgxKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgYmVmb3JlID0gYXJyLnNsaWNlKDAsIG9sZEluZGV4KTtcblx0XHR2YXIgYWZ0ZXIgPSBhcnIuc2xpY2Uob2xkSW5kZXggKyAxLCBhcnIubGVuZ3RoKTtcblx0XHRyZW1vdmVkID0gWy4uLmJlZm9yZSwgLi4uYWZ0ZXJdO1xuXHR9XG5cblx0aWYgKG5ld0luZGV4ID09PSAwKSB7XG5cdFx0cmV0dXJuIFthcnJbb2xkSW5kZXhdLCAuLi5yZW1vdmVkXTtcblx0fSBlbHNlIGlmIChuZXdJbmRleCA9PT0gYXJyLmxlbmd0aCAtIDEpIHtcblx0XHRyZXR1cm4gWy4uLnJlbW92ZWQsIGFycltvbGRJbmRleF1dO1xuXHR9IGVsc2Uge1xuXHRcdGJlZm9yZSA9IHJlbW92ZWQuc2xpY2UoMCwgbmV3SW5kZXgpO1xuXHRcdGFmdGVyID0gcmVtb3ZlZC5zbGljZShuZXdJbmRleCwgcmVtb3ZlZC5sZW5ndGgpO1xuXHRcdHJldHVybiBbLi4uYmVmb3JlLCBhcnJbb2xkSW5kZXhdLCAuLi5hZnRlcl07XG5cdH1cbn1cblxuY29uc3Qgc2VlZERhdGEgPSB7XG5cdDEwMDE6IHtcblx0XHRpZDogMTAwMSxcblx0XHRjb250ZW50OiBcIlJhbmRvbSBzZWVkIDFcIixcblx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0Y29sb3I6J3JlZCcsXG5cdFx0cGFyZW50OiBcInJvb3RcIixcblx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFsxMDA0XVxuXHR9LFxuXHQxMDAyOiB7XG5cdFx0aWQ6IDEwMDIsXG5cdFx0Y29udGVudDogXCJSYW5kb20gc2VlZCAyXCIsXG5cdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdGNvbG9yOidyZWQnLFxuXHRcdHBhcmVudDogXCJyb290XCIsXG5cdFx0Y29tcGxldGVDaGlsZHJlbjogW10sXG5cdFx0aW5jb21wbGV0ZUNoaWxkcmVuOiBbMTAwM11cblx0fSxcblx0MTAwMzoge1xuXHRcdGlkOiAxMDAzLFxuXHRcdGNvbnRlbnQ6IFwiUmFuZG9tIHNlZWQgM1wiLFxuXHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRjb2xvcjoncmVkJyxcblx0XHRwYXJlbnQ6IDEwMDIsXG5cdFx0Y29tcGxldGVDaGlsZHJlbjogW10sXG5cdFx0aW5jb21wbGV0ZUNoaWxkcmVuOiBbXVxuXHR9LFxuXHQxMDA0OiB7XG5cdFx0aWQ6IDEwMDQsXG5cdFx0Y29udGVudDogXCJSYW5kb20gc2VlZCA0XCIsXG5cdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdGNvbG9yOidyZWQnLFxuXHRcdHBhcmVudDogMTAwMSxcblx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFtdXG5cdH0sXG5cdDEwMDU6IHtcblx0XHRpZDogMTAwNSxcblx0XHRjb250ZW50OiBcIlJhbmRvbSBzZWVkIDVcIixcblx0XHRjb21wbGV0ZTogdHJ1ZSxcblx0XHRjb2xvcjoncmVkJyxcblx0XHRwYXJlbnQ6IFwicm9vdFwiLFxuXHRcdGNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdGluY29tcGxldGVDaGlsZHJlbjogW11cblx0fSxcblx0cm9vdDoge1xuXHRcdGNvbG9yOidyZWQnLFxuXHRcdGNvbXBsZXRlQ2hpbGRyZW46IFsxMDA1XSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFsxMDAxLCAxMDAyXVxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9pdGVtc19yZWR1Y2VyLmpzIiwiaW1wb3J0IHsgQ0hBTkdFX0JBU0UgfSBmcm9tIFwiLi4vYWN0aW9ucy9cIjtcblxuZnVuY3Rpb24gYmFzZUl0ZW0oc3RhdGUgPSBcInJvb3RcIiwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIENIQU5HRV9CQVNFOlxuXHRcdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUl0ZW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL2Jhc2VJdGVtX3JlZHVjZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1xuXHRuZXdJdGVtLFxuXHRjaGFuZ2VCYXNlSXRlbSxcblx0Y29tcGxldGVJdGVtLFxuXHRkZWxldGVJdGVtLFxuXHRyZW9yZGVySXRlbSxcblx0Y2hhbmdlQ29sb3IsXG5cdHVwZGF0ZUl0ZW0sXG5cdHVwZGF0ZURhdGFcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RJdGVtL3N0eWxlLmNzc1wiO1xuaW1wb3J0IExpc3RIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdEhlYWRlci5qc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIm1hdGVyaWFsLXVpL0NhcmRcIjtcblxuY2xhc3MgVG9kb0NvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuZXdJdGVtOiBcIlwiXG5cdFx0fTtcblx0XHR0aGlzLmlucHV0VXBkYXRlID0gdGhpcy5pbnB1dFVwZGF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMubmV3SXRlbUFjdGlvbiA9IHRoaXMubmV3SXRlbUFjdGlvbi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2hhbmdlQmFzZUNvbXBvc2VyID0gdGhpcy5jaGFuZ2VCYXNlQ29tcG9zZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNvbXBsZXRlSXRlbUNvbXBvc2VyID0gdGhpcy5jb21wbGV0ZUl0ZW1Db21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZGVsZXRlSXRlbUNvbXBvc2VyID0gdGhpcy5kZWxldGVJdGVtQ29tcG9zZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlb3JkZXJJdGVtQ29tcG9zZXIgPSB0aGlzLnJlb3JkZXJJdGVtQ29tcG9zZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmdlbmVyYXRlQ29tcGxldGUgPSB0aGlzLmdlbmVyYXRlQ29tcGxldGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNoYW5nZUNvbG9yQ29tcG9zZXIgPSB0aGlzLmNoYW5nZUNvbG9yQ29tcG9zZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLnVwZGF0ZUl0ZW1EaXNwYXRjaCA9IHRoaXMudXBkYXRlSXRlbURpc3BhdGNoLmJpbmQodGhpcyk7XG5cdFx0dGhpcy51cGRhdGVEYXRhRGlzcGF0Y2ggPSB0aGlzLnVwZGF0ZURhdGFEaXNwYXRjaC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aW5wdXRVcGRhdGUoZXZlbnQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgbmV3SXRlbTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuXHR9XG5cblx0bmV3SXRlbUFjdGlvbihjb250ZW50KSB7XG5cdFx0dGhpcy5wcm9wcy5uZXdJdGVtKGNvbnRlbnQsIHRoaXMucHJvcHMuYmFzZUl0ZW0pO1xuXHRcdHZhciB1cGRhdGVEYXRhRGlzcGF0Y2ggPSB0aGlzLnVwZGF0ZURhdGFEaXNwYXRjaFxuXHRcdHRoaXMuc2V0U3RhdGUoeyBuZXdJdGVtOiBcIlwiIH0sICgpID0+IHtcblx0XHRcdHVwZGF0ZURhdGFEaXNwYXRjaCgpXG5cdFx0fSk7XG5cdH1cblxuXHRjaGFuZ2VCYXNlQ29tcG9zZXIoaWQpIHtcblx0XHR2YXIgY2hhbmdlQmFzZUl0ZW0gPSB0aGlzLnByb3BzLmNoYW5nZUJhc2VJdGVtO1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdGNoYW5nZUJhc2VJdGVtKGlkKTtcblx0XHR9O1xuXHR9XG5cblx0ZGVsZXRlSXRlbUNvbXBvc2VyKGlkKSB7XG5cdFx0bGV0IGRlbGV0ZUl0ZW1EaXNwYXRjaCA9IHRoaXMucHJvcHMuZGVsZXRlSXRlbTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRkZWxldGVJdGVtRGlzcGF0Y2goaWQpO1xuXHRcdH07XG5cdH1cblxuXHRjb21wbGV0ZUl0ZW1Db21wb3NlcihpZCkge1xuXHRcdGxldCBjb21wbGV0ZUl0ZW1EaXNwYXRjaCA9IHRoaXMucHJvcHMuY29tcGxldGVJdGVtO1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbXBsZXRlSXRlbURpc3BhdGNoKGlkKTtcblx0XHR9O1xuXHR9XG5cblx0cmVvcmRlckl0ZW1Db21wb3NlcihpZCwgb2xkSW5kZXgsIG5ld0luZGV4KSB7XG5cdFx0bGV0IHJlb3JkZXJJdGVtRGlzcGF0Y2ggPSB0aGlzLnByb3BzLnJlb3JkZXJJdGVtO1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdHJlb3JkZXJJdGVtRGlzcGF0Y2goaWQsIG9sZEluZGV4LCBuZXdJbmRleCk7XG5cdFx0fTtcblx0fVxuXG5cdGdlbmVyYXRlQ29tcGxldGUoKSB7XG5cdFx0dmFyIGNvbXBsZXRlQ291bnQgPSB0aGlzLnByb3BzLml0ZW1zW3RoaXMucHJvcHMuYmFzZUl0ZW1dXG5cdFx0XHQuY29tcGxldGVDaGlsZHJlbi5sZW5ndGg7XG5cdFx0dmFyIHRvdGFsQ291bnQgPVxuXHRcdFx0dGhpcy5wcm9wcy5pdGVtc1t0aGlzLnByb3BzLmJhc2VJdGVtXS5pbmNvbXBsZXRlQ2hpbGRyZW4ubGVuZ3RoICtcblx0XHRcdGNvbXBsZXRlQ291bnQ7XG5cdFx0cmV0dXJuIGAoICR7Y29tcGxldGVDb3VudH0gLyAke3RvdGFsQ291bnR9IENvbXBsZXRlIClgO1xuXHR9XG5cblx0Y2hhbmdlQ29sb3JDb21wb3NlcihpZCwgY29sb3IpIHtcblx0XHRsZXQgY2hhbmdlQ29sb3JEaXNwYXRjaCA9IHRoaXMucHJvcHMuY2hhbmdlQ29sb3Jcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCl7XG5cdFx0XHRjaGFuZ2VDb2xvckRpc3BhdGNoKGlkLCBjb2xvcilcblx0XHR9XG5cdH1cblxuXHR1cGRhdGVJdGVtRGlzcGF0Y2goaWQsIG5ld1RleHQpe1xuXHRcdHRoaXMucHJvcHMudXBkYXRlSXRlbShpZCwgbmV3VGV4dClcblx0fVxuXG5cdHVwZGF0ZURhdGFEaXNwYXRjaCgpe1xuXHRcdGNvbnN0IGlkID0gdGhpcy5wcm9wcy5saXN0SURcblx0XHRjb25zb2xlLmxvZyhpZClcblx0XHRjb25zdCBuZXdTdGF0ZSA9IHtcblx0XHRcdGl0ZW1zOnRoaXMucHJvcHMuaXRlbXMsXG5cdFx0XHRiYXNlSXRlbTp0aGlzLnByb3BzLmJhc2VJdGVtXG5cdFx0fVxuXHRcdHRoaXMucHJvcHMudXBkYXRlRGF0YShpZCwge2lkLG5ld1N0YXRlfSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgY3VycmVudEl0ZW0gPSB0aGlzLnByb3BzLml0ZW1zW3RoaXMucHJvcHMuYmFzZUl0ZW1dO1xuXHRcdHZhciBwYXJlbnRJdGVtID0gdGhpcy5wcm9wcy5pdGVtc1tjdXJyZW50SXRlbS5wYXJlbnRdO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiYXV0b1wiLCBtYXJnaW46IFwiMTZweFwiIH19PlxuXHRcdFx0XHQ8TGlzdEhlYWRlclxuXHRcdFx0XHRcdGJhc2VJdGVtPXt0aGlzLnByb3BzLmJhc2VJdGVtfVxuXHRcdFx0XHRcdGJhc2VJdGVtVGV4dD17Y3VycmVudEl0ZW0uY29udGVudH1cblx0XHRcdFx0XHRjdXJyZW50UGFyZW50PXtjdXJyZW50SXRlbS5wYXJlbnR9XG5cdFx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXt0aGlzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0XHRjb3VudGVyVGV4dD17dGhpcy5nZW5lcmF0ZUNvbXBsZXRlKCl9XG5cdFx0XHRcdFx0aXRlbXM9e3RoaXMucHJvcHMuaXRlbXN9XG5cdFx0XHRcdFx0bmV3SXRlbUFjdGlvbj17dGhpcy5uZXdJdGVtQWN0aW9ufVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8TGlzdFxuXHRcdFx0XHRcdGxpc3Q9e3RoaXMucHJvcHMuaXRlbXN9XG5cdFx0XHRcdFx0YmFzZUl0ZW09e3RoaXMucHJvcHMuYmFzZUl0ZW19XG5cdFx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXt0aGlzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0XHRkZWxldGVJdGVtQ29tcG9zZXI9e3RoaXMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdGNvbXBsZXRlSXRlbUNvbXBvc2VyPXt0aGlzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdHJlb3JkZXJJdGVtQ29tcG9zZXI9e3RoaXMucmVvcmRlckl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0XHRjaGFuZ2VDb2xvckNvbXBvc2VyID17dGhpcy5jaGFuZ2VDb2xvckNvbXBvc2VyfVxuXHRcdFx0XHRcdHVwZGF0ZUl0ZW09e3RoaXMudXBkYXRlSXRlbURpc3BhdGNofVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9DYXJkPlxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHsgaXRlbXMsIGJhc2VJdGVtIH0pIHtcblx0cmV0dXJuIHsgaXRlbXMsIGJhc2VJdGVtIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuXHRyZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKFxuXHRcdHsgbmV3SXRlbSwgY2hhbmdlQmFzZUl0ZW0sIGNvbXBsZXRlSXRlbSwgZGVsZXRlSXRlbSwgcmVvcmRlckl0ZW0sIGNoYW5nZUNvbG9yLCB1cGRhdGVJdGVtLCB1cGRhdGVEYXRhIH0sXG5cdFx0ZGlzcGF0Y2hcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVG9kb0NvbnRhaW5lcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbnRhaW5lcnMvVG9kb0NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgSW5jb21wbGV0ZUxpc3QgZnJvbSBcIi4vSW5jb21wbGV0ZUxpc3QuanNcIjtcbmltcG9ydCBDb21wbGV0ZUxpc3QgZnJvbSBcIi4vQ29tcGxldGVMaXN0LmpzXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuXG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBjcmVhdGVTdHlsZVNoZWV0KFwiTGlzdFwiLCB0aGVtZSA9PiAoe1xuXHRjb250YWluZXI6IHtcblx0fVxufSkpO1xuXG5jb25zdCBMaXN0ID0gcHJvcHMgPT4ge1xuXHRjb25zdCBpdGVtc0xpc3QgPSBwcm9wcy5saXN0O1xuXHRjb25zdCBiYXNlSXRlbSA9IHByb3BzLmJhc2VJdGVtO1xuXHRsZXQgY29tcGxldGVMaXN0SXRlbXMgPSBpdGVtc0xpc3RbYmFzZUl0ZW1dLmNvbXBsZXRlQ2hpbGRyZW47XG5cdGxldCBpbmNvbXBsZXRlTGlzdEl0ZW1zID0gaXRlbXNMaXN0W2Jhc2VJdGVtXS5pbmNvbXBsZXRlQ2hpbGRyZW47XG5cblx0Y29tcGxldGVMaXN0SXRlbXMgPSBwb3B1bGF0ZUxpc3QoY29tcGxldGVMaXN0SXRlbXMpO1xuXHRpbmNvbXBsZXRlTGlzdEl0ZW1zID0gcG9wdWxhdGVMaXN0KGluY29tcGxldGVMaXN0SXRlbXMpO1xuXG5cdGZ1bmN0aW9uIHBvcHVsYXRlTGlzdChsaXN0QXJyKSB7XG5cdFx0cmV0dXJuIGxpc3RBcnIubWFwKGxpc3RJRCA9PiBpdGVtc0xpc3RbbGlzdElEXSk7XG5cdH1cblxuXHRjb25zdCBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcztcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG5cdFx0XHQ8SW5jb21wbGV0ZUxpc3Rcblx0XHRcdFx0aXRlbXM9e2luY29tcGxldGVMaXN0SXRlbXN9XG5cdFx0XHRcdHBhcmVudElEPXtwcm9wcy5iYXNlSXRlbX1cblx0XHRcdFx0cmVuZGVyQ2hpbGRyZW49e3RydWV9XG5cdFx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRkZWxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmRlbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRyZW9yZGVySXRlbUNvbXBvc2VyPXtwcm9wcy5yZW9yZGVySXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRjaGFuZ2VDb2xvckNvbXBvc2VyID17cHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0dXBkYXRlSXRlbT17cHJvcHMudXBkYXRlSXRlbX1cblx0XHRcdC8+XG5cdFx0XHQ8Q29tcGxldGVMaXN0XG5cdFx0XHRcdGl0ZW1zPXtjb21wbGV0ZUxpc3RJdGVtc31cblx0XHRcdFx0cGFyZW50SUQ9e3Byb3BzLmJhc2VJdGVtfVxuXHRcdFx0XHRyZW5kZXJDaGlsZHJlbj17dHJ1ZX1cblx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXtwcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdHJlb3JkZXJJdGVtQ29tcG9zZXI9e3Byb3BzLnJlb3JkZXJJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXIgPXtwcm9wcy5jaGFuZ2VDb2xvckNvbXBvc2VyfVxuXHRcdFx0XHR1cGRhdGVJdGVtPXtwcm9wcy51cGRhdGVJdGVtfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbkxpc3QucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVTaGVldCkoTGlzdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIGltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7XG5cdFNvcnRhYmxlQ29udGFpbmVyLFxuXHRTb3J0YWJsZUVsZW1lbnRcbn0gZnJvbSBcInJlYWN0LXNvcnRhYmxlLWhvY1wiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL0xpc3RJdGVtLmpzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwibWF0ZXJpYWwtdWkvTGlzdFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcbmltcG9ydCB7cHJpbWFyeUNvbG9yUGFyc2VyLCBmYWRlZENvbG9yUGFyc2VyLCB0ZXh0Q29sb3JQYXJzZXJ9IGZyb20gJy4uL2hlbHBlcnMvY29sb3JQYXJzZXIuanMnXG5cblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJJbmNvbXBsZXRlTGlzdFwiLCB0aGVtZSA9PiAoe1xuXHRjb250YWluZXI6IHtcblx0XHRsaXN0U3R5bGU6IFwibm9uZVwiLFxuXHRcdHBhZGRpbmc6IDAsXG5cdFx0bWFyZ2luOiAwXG5cdH0sXG5cdHJvb3Q6IHtcblx0XHRwYWRkaW5nOiAwXG5cdH1cbn0pKTtcblxuXG5jb25zdCBTb3J0YWJsZUxpc3QgPSBTb3J0YWJsZUNvbnRhaW5lcigocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8TGlzdCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzRm9yTGlzdH0+XG5cdFx0XHR7cHJvcHMuaXRlbXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8U29ydGFibGVMaXN0SXRlbVxuXHRcdFx0XHRcdFx0a2V5PXtgaXRlbS0ke3ZhbHVlLmlkfWB9XG5cdFx0XHRcdFx0XHRpbmRleD17aW5kZXh9XG5cdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3NlciA9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRiZ0NvbG9yQ29tcG9zZXI9e3Byb3BzLmJnQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0XHRcdHRleHRDb2xvckNvbXBvc2VyPXtwcm9wcy50ZXh0Q29sb3JDb21wb3Nlcn1cblx0XHRcdFx0XHRcdHVwZGF0ZUl0ZW09e3Byb3BzLnVwZGF0ZUl0ZW19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH0pfVxuXHRcdDwvTGlzdD5cblx0KTtcbn0pO1xuXG5jb25zdCBTb3J0YWJsZUxpc3RJdGVtID0gU29ydGFibGVFbGVtZW50KChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxMaXN0SXRlbVxuXHRcdFx0dmFsdWU9e3Byb3BzLnZhbHVlfVxuXHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXtwcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRkZWxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmRlbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdGNvbXBsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXIgPXtwcm9wcy5jaGFuZ2VDb2xvckNvbXBvc2VyfVxuXHRcdFx0aXRlbUNvbG9yPXtwcm9wcy5iZ0NvbG9yQ29tcG9zZXIocHJvcHMudmFsdWUuY29sb3IpfVxuXHRcdFx0dGV4dENvbG9yPXtwcm9wcy50ZXh0Q29sb3JDb21wb3Nlcihwcm9wcy52YWx1ZS5jb2xvciwgcHJvcHMudmFsdWUuY29tcGxldGUpfVxuXHRcdFx0dXBkYXRlSXRlbT17cHJvcHMudXBkYXRlSXRlbX1cblx0XHQvPlxuXHQpO1xufSk7XG5cbmNvbnN0IEluY29tcGxldGVMaXN0ID0gcHJvcHMgPT4ge1xuXHRjb25zdCBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcztcblxuXG5cdGZ1bmN0aW9uIGhhbmRsZVNvcnQoeyBvbGRJbmRleCwgbmV3SW5kZXgsfSkge1xuXHRcdHByb3BzLnJlb3JkZXJJdGVtQ29tcG9zZXIocHJvcHMucGFyZW50SUQsIG9sZEluZGV4LCBuZXdJbmRleCkoKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxTb3J0YWJsZUxpc3Rcblx0XHRcdFx0aXRlbXM9e3Byb3BzLml0ZW1zfVxuXHRcdFx0XHR1c2VEcmFnSGFuZGxlPXt0cnVlfVxuXHRcdFx0XHRvblNvcnRFbmQ9e2hhbmRsZVNvcnR9XG5cdFx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRkZWxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmRlbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRjbGFzc0Zvckxpc3Q9e2NsYXNzZXMucm9vdH1cblx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3NlciA9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdGJnQ29sb3JDb21wb3Nlcj17cHJpbWFyeUNvbG9yUGFyc2VyfVxuXHRcdFx0XHR0ZXh0Q29sb3JDb21wb3Nlcj17dGV4dENvbG9yUGFyc2VyfVxuXHRcdFx0XHR1cGRhdGVJdGVtPXtwcm9wcy51cGRhdGVJdGVtfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbkluY29tcGxldGVMaXN0LnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlU2hlZXQpKEluY29tcGxldGVMaXN0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9JbmNvbXBsZXRlTGlzdC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL0xpc3RcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIm1hdGVyaWFsLXVpL1RleHRGaWVsZFwiO1xuaW1wb3J0IHsgSG9sZGFibGUsIGRlZmluZUhvbGQgfSBmcm9tICdyZWFjdC10b3VjaCc7XG5cblxuY2xhc3MgTGlzdEl0ZW1UZXh0QXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMuc3RhdGU9e1xuXHRcdFx0ZWRpdE1vZGU6ZmFsc2UsXG5cdFx0XHRlZGl0VGV4dDpwcm9wcy5yYXdUZXh0XG5cdFx0fVxuXG5cdFx0dGhpcy5UZXh0Q29udGFpbmVyID0gdGhpcy5UZXh0Q29udGFpbmVyLmJpbmQodGhpcylcblx0XHR0aGlzLmRvdWJsZUNsaWNrSGFuZGxlciA9IHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVyLmJpbmQodGhpcylcblx0XHR0aGlzLkVkaXRJdGVtID0gdGhpcy5FZGl0SXRlbS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5oYW5kbGVCbHVyID0gdGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcylcblx0XHR0aGlzLm5vbkVkaXRJdGVtID0gdGhpcy5ub25FZGl0SXRlbS5iaW5kKHRoaXMpXG5cdH1cblxuXHRub25FZGl0SXRlbShwcm9wcyl7XG5cdFx0dmFyIGxpbmVTdHlsZSA9IHRoaXMucHJvcHMuY29tcGxldGUgPyB7dGV4dERlY29yYXRpb246J2xpbmUtdGhyb3VnaCd9IDoge31cblx0XHRjb25zdCBob2xkID0gZGVmaW5lSG9sZCh7dXBkYXRlRXZlcnk6IDUwLCBob2xkRm9yOiA1MDB9KTtcblx0XHRcdFx0cmV0dXJuKFxuXHRcdFx0PEhvbGRhYmxlXG5cdFx0XHRjb25maWc9e2hvbGR9XG5cdFx0XHRvbkhvbGRDb21wbGV0ZT17cHJvcHMuZG91YmxlQ2xpY2tIYW5kbGVyfVxuXHRcdFx0PlxuXHRcdFx0PExpc3RJdGVtVGV4dFxuXHRcdFx0cHJpbWFyeT17KFxuXHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnRoaXMucHJvcHMudGV4dENvbG9yLCAuLi5saW5lU3R5bGUsd29yZFdyYXA6J25vcm1hbCcsIHdvcmRCcmVhazonbm9ybWFsJ319XG5cdFx0XHRcdD57cHJvcHMucHJpbWFyeX08L3NwYW4+XG5cdFx0XHRcdCl9XG5cdFx0XHRzZWNvbmRhcnk9e3Byb3BzLnNlY29uZGFyeX1cblx0XHRcdHN0eWxlPXt7Y29sb3I6cHJvcHMudGV4dENvbG9yLHBhZGRpbmc6JzBweCcsIHdvcmRXcmFwIDogJ2JyZWFrLXdvcmQnfX1cblx0XHRcdG9uRG91YmxlQ2xpY2s9e3Byb3BzLmRvdWJsZUNsaWNrSGFuZGxlcn1cblx0XHRcdC8+XG5cdFx0XHQ8L0hvbGRhYmxlPlxuXHRcdFx0KVxuXHR9XG5cblx0RWRpdEl0ZW0ocHJvcHMpe1xuXHRcdHJldHVybihcblx0XHRcdDxmb3JtXG5cdFx0XHRvblN1Ym1pdD17dGhpcy5oYW5kbGVCbHVyfVxuXHRcdFx0c3R5bGU9e3t3aWR0aDonMTAwJSd9fVxuXHRcdFx0PlxuXHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZWRpdFRleHR9XG5cdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG5cdFx0XHRvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cblx0XHRcdGZ1bGxXaWR0aD17dHJ1ZX1cblx0XHRcdGF1dG9Gb2N1cz17dHJ1ZX1cblx0XHRcdElucHV0UHJvcHM9e3tzdHlsZTp7XG5cdFx0XHRcdFx0Y29sb3I6dGhpcy5wcm9wcy50ZXh0Q29sb3Jcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Lz5cblx0XHRcdDwvZm9ybT5cblx0XHRcdClcblx0fVxuXG5cdGhhbmRsZUNoYW5nZShldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZWRpdFRleHQ6ZXZlbnQudGFyZ2V0LnZhbHVlfSlcblx0fVxuXG5cdGhhbmRsZUJsdXIoZXZlbnQpe1xuXHRcdHRoaXMucHJvcHMudXBkYXRlSXRlbSh0aGlzLnByb3BzLmlkLCB0aGlzLnN0YXRlLmVkaXRUZXh0KVxuXHRcdHRoaXMuc2V0U3RhdGUoe2VkaXRNb2RlOmZhbHNlfSlcblx0fVxuXG5cdFRleHRDb250YWluZXIocHJvcHMpe1xuXHRcdHZhciBOb25FZGl0SXRlbSA9IHRoaXMubm9uRWRpdEl0ZW1cblx0XHR2YXIgRWRpdEl0ZW0gPSB0aGlzLkVkaXRJdGVtXG5cdFx0aWYocHJvcHMuZWRpdE1vZGUpe1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0PEVkaXRJdGVtXG5cblx0XHRcdC8+XG5cdFx0XHQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PE5vbkVkaXRJdGVtXG5cdFx0XHRcdGRvdWJsZUNsaWNrSGFuZGxlcj17cHJvcHMuZG91YmxlQ2xpY2tIYW5kbGVyfVxuXHRcdFx0XHRwcmltYXJ5PXtwcm9wcy5wcmltYXJ5fVxuXHRcdFx0XHRzZWNvbmRhcnk9e3Byb3BzLnNlY29uZGFyeX1cblx0XHRcdFx0c3R5bGU9e3tjb2xvcjpwcm9wcy50ZXh0Q29sb3IscGFkZGluZzonMHB4Jywgd29yZFdyYXAgOiAnYnJlYWstd29yZCd9fVxuXHRcdFx0XHQvPlxuXHRcdFx0KVxuXHRcdH1cblx0fVxuXG5cdGRvdWJsZUNsaWNrSGFuZGxlcigpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe2VkaXRNb2RlOnRydWV9KVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0dmFyIFRleHRDb250YWluZXIgPSB0aGlzLlRleHRDb250YWluZXJcblx0XHRyZXR1cm4oXG5cdFx0XHQ8VGV4dENvbnRhaW5lclxuXHRcdFx0ZG91YmxlQ2xpY2tIYW5kbGVyPXt0aGlzLmRvdWJsZUNsaWNrSGFuZGxlcn1cblx0XHRcdGVkaXRNb2RlPXt0aGlzLnN0YXRlLmVkaXRNb2RlfVxuXHRcdFx0cHJpbWFyeT17dGhpcy5zdGF0ZS5lZGl0VGV4dH1cblx0XHRcdHNlY29uZGFyeT17dGhpcy5wcm9wcy5zZWNvbmRhcnl9XG5cdFx0XHR0ZXh0Q29sb3I9e3RoaXMucHJvcHMudGV4dENvbG9yfVxuXHRcdFx0Lz5cblx0XHRcdCl9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtVGV4dEFyZWFcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdEl0ZW1UZXh0QXJlYS5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIGltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi9MaXN0SXRlbS5qc1wiO1xuaW1wb3J0IExpc3QgZnJvbSBcIm1hdGVyaWFsLXVpL0xpc3RcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlU2hlZXQgfSBmcm9tIFwibWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5pbXBvcnQge3ByaW1hcnlDb2xvclBhcnNlciwgZmFkZWRDb2xvclBhcnNlciwgdGV4dENvbG9yUGFyc2VyfSBmcm9tICcuLi9oZWxwZXJzL2NvbG9yUGFyc2VyLmpzJ1xuXG5jb25zdCBzdHlsZVNoZWV0ID0gY3JlYXRlU3R5bGVTaGVldChcIkNvbXBsZXRlTGlzdFwiLCB0aGVtZSA9PiAoe1xuXHRjb250YWluZXI6IHtcblx0XHRtYXJnaW46IDAsXG5cdFx0cGFkZGluZzogMFxuXHR9XG59KSk7XG5cbmNvbnN0IENvbXBsZXRlTGlzdCA9IHByb3BzID0+IHtcblx0Y29uc3QgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXM7XG5cblx0cmV0dXJuIChcblx0XHQ8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cblx0XHRcdHtwcm9wcy5pdGVtcy5tYXAodmFsdWUgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxMaXN0SXRlbVxuXHRcdFx0XHRcdFx0a2V5PXtgaXRlbS0ke3ZhbHVlLmlkfWB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3NlciA9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRpdGVtQ29sb3I9e2ZhZGVkQ29sb3JQYXJzZXIodmFsdWUuY29sb3IpfVxuXHRcdFx0XHRcdFx0dGV4dENvbG9yPXt0ZXh0Q29sb3JQYXJzZXIodmFsdWUuY29sb3IpfVxuXHRcdFx0XHRcdFx0dXBkYXRlSXRlbT17cHJvcHMudXBkYXRlSXRlbX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC9MaXN0PlxuXHQpO1xufTtcblxuQ29tcGxldGVMaXN0LnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlU2hlZXQpKENvbXBsZXRlTGlzdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvQ29tcGxldGVMaXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJtYXRlcmlhbC11aS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgRGl2aWRlciBmcm9tIFwibWF0ZXJpYWwtdWkvRGl2aWRlclwiO1xuaW1wb3J0IENoZXZyb25SaWdodCBmcm9tIFwibWF0ZXJpYWwtdWktaWNvbnMvQ2hldnJvblJpZ2h0XCI7XG5pbXBvcnQgTmV3SXRlbUZvcm0gZnJvbSBcIi4vTmV3SXRlbUZvcm0uanNcIjtcbmltcG9ydCB7cHJpbWFyeUNvbG9yUGFyc2VyLCBmYWRlZENvbG9yUGFyc2VyLCB0ZXh0Q29sb3JQYXJzZXIsIGFjY2VudENvbG9yUGFyc2VyLCBhY2NlbnRUZXh0Q29sb3JQYXJzZXJ9IGZyb20gJy4uL2hlbHBlcnMvY29sb3JQYXJzZXIuanMnXG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBjcmVhdGVTdHlsZVNoZWV0KFwiSGVhZGVyXCIsIHRoZW1lID0+ICh7XG5cdHRpdGxlQ29udGFpbmVyOiB7XG5cdFx0cGFkZGluZzogMTZcblx0fSxcblx0Y3J1bWI6IHtcblx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcblx0XHRjdXJzb3I6IFwicG9pbnRlclwiLFxuXHRcdFwiJjpob3ZlclwiOiB7XG5cdFx0XHR0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIlxuXHRcdH1cblx0fSxcblx0Y3J1bWJDb250YWluZXI6IHtcblx0XHRwYWRkaW5nOiAxNlxuXHR9XG59KSk7XG5cbmNvbnN0IExpc3RIZWFkZXIgPSBwcm9wcyA9PiB7XG5cdGNvbnN0IGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzO1xuXHRjb25zdCBiZ0NvbG9yID0gcHJpbWFyeUNvbG9yUGFyc2VyKHByb3BzLml0ZW1zW3Byb3BzLmJhc2VJdGVtXS5jb2xvcilcblx0Y29uc3QgdGV4dENvbG9yID0gdGV4dENvbG9yUGFyc2VyKHByb3BzLml0ZW1zW3Byb3BzLmJhc2VJdGVtXS5jb2xvcilcblx0Y29uc3QgYWNjZW50Q29sb3IgPSBhY2NlbnRDb2xvclBhcnNlcihwcm9wcy5pdGVtc1twcm9wcy5iYXNlSXRlbV0uY29sb3IpXG5cdGNvbnN0IGFjY2VudFRleHRDb2xvciA9IGFjY2VudFRleHRDb2xvclBhcnNlcihwcm9wcy5pdGVtc1twcm9wcy5iYXNlSXRlbV0uY29sb3IpXG5cblx0Y29uc3QgQnJlYWRDcnVtYiA9ICgpID0+IHtcblx0XHRsZXQgdHJhaWwgPSBbXTtcblx0XHRsZXQgY3VycmVudCA9IHByb3BzLmJhc2VJdGVtO1xuXHRcdGxldCBjb3VudGVyID0gMDtcblx0XHRpZiAoY3VycmVudCA9PT0gXCJyb290XCIpIHtcblx0XHRcdHRyYWlsID0gW1wicm9vdFwiXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2hpbGUgKHByb3BzLml0ZW1zW2N1cnJlbnRdLnBhcmVudCAhPT0gXCJyb290XCIgJiYgY291bnRlciA8IDEwKSB7XG5cdFx0XHRcdHRyYWlsID0gW2N1cnJlbnQsIC4uLnRyYWlsXTtcblx0XHRcdFx0Y3VycmVudCA9IHByb3BzLml0ZW1zW2N1cnJlbnRdLnBhcmVudDtcblx0XHRcdFx0Y291bnRlcisrO1xuXHRcdFx0fVxuXHRcdFx0dHJhaWwgPSBbXCJyb290XCIsIGN1cnJlbnQsIC4uLnRyYWlsXTtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUeXBvZ3JhcGh5XG5cdFx0XHR0eXBlPXtcImJvZHkxXCJ9XG5cdFx0XHRjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuY3J1bWJDb250YWluZXJ9XG5cdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHQ+XG5cdFx0XHRcdHt0cmFpbC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdGtleT17YGJyZWFkY3J1bWItJHtpbmRleH1gfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuY3J1bWJ9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3NlcihpdGVtKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e2l0ZW0gPT09IFwicm9vdFwiXG5cdFx0XHRcdFx0XHRcdFx0PyBcInJvb3RcIlxuXHRcdFx0XHRcdFx0XHRcdDogcHJvcHMuaXRlbXNbaXRlbV0uY29udGVudH1cblx0XHRcdFx0XHRcdFx0e2luZGV4IDwgdHJhaWwubGVuZ3RoIC0gMVxuXHRcdFx0XHRcdFx0XHRcdD8gPENoZXZyb25SaWdodCAvPlxuXHRcdFx0XHRcdFx0XHRcdDogXCJcIn17XCIgXCJ9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRzdHlsZT17e1xuXHRcdFx0YmFja2dyb3VuZENvbG9yOmJnQ29sb3IsXG5cdFx0XHRjb2xvcjp0ZXh0Q29sb3IsXG5cdFx0XHR0cmFuc2l0aW9uOicuNXMnXG5cblx0XHR9fVxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlQ29udGFpbmVyfT5cblx0XHRcdFx0PFR5cG9ncmFwaHlcblx0XHRcdFx0dHlwZT17XCJoZWFkbGluZVwifVxuXHRcdFx0XHRhbGlnbj17XCJjZW50ZXJcIn1cblx0XHRcdFx0c3R5bGU9e3tjb2xvcjp0ZXh0Q29sb3J9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3Byb3BzLmJhc2VJdGVtID09PSBcInJvb3RcIiA/IFwicm9vdFwiIDogcHJvcHMuYmFzZUl0ZW1UZXh0fVxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdDxUeXBvZ3JhcGh5XG5cdFx0XHRcdHR5cGU9e1wic3ViaGVhZGluZ1wifVxuXHRcdFx0XHRhbGlnbj17XCJjZW50ZXJcIn1cblx0XHRcdFx0c3R5bGU9e3tjb2xvcjp0ZXh0Q29sb3J9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3Byb3BzLmNvdW50ZXJUZXh0fVxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxEaXZpZGVyIC8+XG5cdFx0XHQ8QnJlYWRDcnVtYiAvPlxuXHRcdFx0PERpdmlkZXIgLz5cblx0XHRcdDxOZXdJdGVtRm9ybVxuXHRcdFx0bmV3SXRlbUFjdGlvbj17cHJvcHMubmV3SXRlbUFjdGlvbn1cblx0XHRcdHRleHRDb2xvcj17dGV4dENvbG9yfVxuXHRcdFx0YWNjZW50Q29sb3I9e2FjY2VudENvbG9yfVxuXHRcdFx0YWNjZW50VGV4dENvbG9yPXthY2NlbnRUZXh0Q29sb3J9XG5cdFx0XHQvPlxuXHRcdFx0PERpdmlkZXIgLz5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbkxpc3RIZWFkZXIucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVTaGVldCkoTGlzdEhlYWRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdEhlYWRlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJtYXRlcmlhbC11aS9UZXh0RmllbGRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0J1dHRvblwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIm1hdGVyaWFsLXVpL0dyaWRcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlU2hlZXQgfSBmcm9tIFwibWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5cblxuXG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBjcmVhdGVTdHlsZVNoZWV0KFwiTmV3SXRlbUZvcm1cIiwgdGhlbWUgPT4gKHtcblx0Y29udGFpbmVyOiB7XG5cdFx0bWFyZ2luOiBcImF1dG9cIixcblx0XHRwYWRkaW5nQm90dG9tOiBcIjE2cHhcIixcblx0XHRwYWRkaW5nVG9wOiBcIjE2cHhcIixcblx0XHRwYWRkaW5nOiAyNCxcblx0XHRib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiXG5cdH0sXG5cdHR5cGVJdGVtOiB7XG5cdFx0ZmxleEdyb3c6IDFcblx0fSxcblx0d2hpdGU6e1xuXHRcdGNvbG9yOicjZmZmZmZmJ1xuXHR9LFxuXHRibGFjazp7XG5cdFx0Y29sb3I6JyMwMDAwMDAnXG5cdH1cbn0pKTtcblxuY2xhc3MgTmV3SXRlbUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuZXdJdGVtOiBcIlwiXG5cdFx0fTtcblx0XHR0aGlzLmlucHV0VXBkYXRlID0gdGhpcy5pbnB1dFVwZGF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc3VibWl0SGFuZGxlciA9IHRoaXMuc3VibWl0SGFuZGxlci5iaW5kKHRoaXMpO1xuXHR9XG5cblx0c3VibWl0SGFuZGxlcihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5wcm9wcy5uZXdJdGVtQWN0aW9uKHRoaXMuc3RhdGUubmV3SXRlbSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG5ld0l0ZW06IFwiXCIgfSk7XG5cdH1cblxuXHRpbnB1dFVwZGF0ZShldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBuZXdJdGVtOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgY2xhc3NlcyA9IHRoaXMucHJvcHMuY2xhc3Nlcztcblx0XHRjb25zdCB0ZXh0Q29sb3JDbGFzcyA9IHRoaXMucHJvcHMudGV4dENvbG9yID09PSAnI2ZmZmZmZicgPyBjbGFzc2VzLndoaXRlIDogY2xhc3Nlcy5ibGFja1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfVxuXHRcdFx0PlxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRIYW5kbGVyfT5cblx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgZ3V0dGVyPXs4fSBhbGlnbj17XCJjZW50ZXJcIn0+XG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBlSXRlbX0+XG5cdFx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0XHRpZD1cIm5ld0l0ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiTmV3IEl0ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRmdWxsV2lkdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubmV3SXRlbX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5pbnB1dFVwZGF0ZX1cblx0XHRcdFx0XHRcdFx0XHRJbnB1dFByb3BzPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZTp7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOnRoaXMucHJvcHMudGV4dENvbG9yXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOntcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6dGhpcy5wcm9wcy50ZXh0Q29sb3Jcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0cmFpc2VkXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7Y29sb3I6dGhpcy5wcm9wcy5hY2NlbnRUZXh0Q29sb3IsIGJhY2tncm91bmRDb2xvcjp0aGlzLnByb3BzLmFjY2VudENvbG9yfX0+XG5cdFx0XHRcdFx0XHRcdFx0TWFrZSBhIE5ldyBJdGVtXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5OZXdJdGVtRm9ybS5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShOZXdJdGVtRm9ybSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTmV3SXRlbUZvcm0uanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7QUFpQkE7QUFJQTtBQUNBO0FBdEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFEQTtBQURBO0FBRkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBa0JBO0FBQ0E7QUEzQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBTkE7QUFPQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBakJBO0FBQ0E7QUFnQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFkQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFVQTtBQU9BO0FBT0E7QUFPQTtBQVdBO0FBVUE7QUFVQTtBQUNBO0FBbEZBO0FBQ0E7Ozs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFHQTtBQUpBO0FBRkE7QUFRQTtBQUNBO0FBREE7O0FBR0E7QUFFQTtBQUhBO0FBS0E7QUFDQTtBQURBOztBQUdBO0FBRUE7QUFIQTtBQUtBO0FBQ0E7QUFEQTs7QUFHQTtBQUVBO0FBSEE7QUFLQTtBQUNBO0FBREE7O0FBR0E7O0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFGQTtBQVNBO0FBQ0E7QUFEQTs7QUFHQTs7QUFFQTtBQUdBO0FBSkE7QUFGQTtBQVFBO0FBQ0E7QUFEQTs7QUFHQTs7QUFFQTtBQUdBO0FBSkE7QUFGQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7O0FBR0E7QUFFQTtBQUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBUUE7QUFGQTs7QUFHQTtBQUFBO0FBVkE7QUFEQTtBQURBO0FBQ0E7QUFnQkE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7Ozs7O0FBYkE7QUFDQTtBQW9CQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFFQTtBQUZBO0FBQUE7QUFQQTtBQUNBO0FBV0E7QUFFQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBQUE7QUFHQTs7QUFEQTtBQUdBO0FBSEE7QUFDQTs7QUFFQTtBQUVBO0FBRkE7QUFBQTtBQVFBO0FBdkJBO0FBQ0E7QUF5QkE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVlBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBekJBO0FBRUE7QUFHQTtBQUpBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBV0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7O0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFJQTs7OztBQUdBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFNQTtBQUNBOzs7O0FBSUE7QUFBQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBSEE7QUFNQTtBQU5BO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFQQTtBQVVBO0FBVkE7QUFDQTtBQVVBO0FBQ0E7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7O0FBR0E7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBRUE7QUFGQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7QUFPQTtBQUNBO0FBQUE7O0FBSEE7QUFBQTtBQUFBO0FBQ0E7O0FBSUE7QUFDQTtBQURBO0FBQUE7QUFFQTs7QUFEQTtBQUdBO0FBSEE7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQURBO0FBR0E7QUFIQTtBQUNBO0FBR0E7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUEzSUE7QUFDQTtBQWlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xOQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUlBOzs7Ozs7Ozs7Ozs7OztBQUtBOzs7OztBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBOztBQUZBO0FBTUE7QUFOQTtBQUNBOzs7Ozs7QUFYQTs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFHQTtBQUpBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBVEE7QUFTQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVJBOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUkE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFSQTs7QUFVQTtBQUFBO0FBQ0E7QUFGQTtBQTlDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6SUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBRUE7QUFHQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7OztBQUlBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUkE7QUFZQTtBQVpBO0FBQ0E7Ozs7O0FBdkdBO0FBQ0E7QUFvSEE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7O0FBR0E7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuSkE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7OztBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7QUFDQTtBQUFBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBO0FBV0E7QUFYQTtBQUNBO0FBWUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBO0FBYUE7QUFiQTtBQUNBO0FBN0JBO0FBQ0E7QUEwQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7OztBQUdBO0FBQ0E7QUFFQTtBQUpBOztBQUtBO0FBQUE7QUFOQTtBQURBO0FBQ0E7QUFXQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVZBO0FBYUE7QUFiQTtBQUNBO0FBZUE7QUFyQkE7QUFDQTtBQXNCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFSQTtBQVdBO0FBWEE7QUFDQTtBQUhBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7QUFYQTtBQWVBO0FBZkE7QUFDQTtBQVhBO0FBQ0E7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFLQTtBQUNBOztBQURBO0FBRUE7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQVJBO0FBWUE7QUFaQTtBQUNBOzs7O0FBYUE7QUFFQTtBQUNBO0FBQ0E7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBREE7O0FBTkE7QUFjQTtBQWRBO0FBQ0E7Ozs7QUFlQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUlBO0FBSkE7QUFBQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFKQTtBQU9BO0FBUEE7QUFDQTtBQU9BOzs7O0FBR0E7QUFBQTs7OztBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTEE7QUFPQTtBQVBBO0FBQ0E7Ozs7O0FBU0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25IQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7OztBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7O0FBR0E7QUFBQTtBQURBO0FBREE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBO0FBWUE7QUFaQTtBQUNBO0FBY0E7QUF0QkE7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7OztBQVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTs7O0FBSUE7QUFGQTs7QUFJQTtBQUNBO0FBQ0E7O0FBSUE7QUFIQTtBQUpBOztBQVFBO0FBQUE7QUFaQTtBQURBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFNQTtBQUVBO0FBQUE7QUFDQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTs7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFDQTtBQUFBOztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBSEE7O0FBRkE7QUFRQTtBQVJBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQVFBO0FBQ0E7QUFBQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTs7QUFPQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBOztBQUpBO0FBTUE7QUFOQTtBQUNBOztBQUtBO0FBR0E7QUFIQTtBQUFBO0FBakZBO0FBQ0E7QUFxRkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckhBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFOQTs7QUFTQTtBQUZBOztBQUtBO0FBRkE7O0FBR0E7QUFBQTtBQWRBO0FBREE7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUZBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBRUE7QUFBQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUlBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBREE7QUFHQTtBQUhBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUdBO0FBQUE7QUFEQTs7O0FBTUE7QUFBQTtBQURBOztBQWJBO0FBbUJBO0FBbkJBO0FBQ0E7QUFrQkE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFDQTs7Ozs7QUFwREE7QUFDQTtBQWdFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        