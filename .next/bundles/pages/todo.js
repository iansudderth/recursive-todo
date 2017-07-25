
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
	var colors = {
		red: _colors.red,
		pink: _colors.pink,
		purple: _colors.purple,
		deepPurple: _colors.deepPurple,
		indigo: _colors.indigo,
		blue: _colors.blue,
		lightBlue: _colors.lightBlue,
		cyan: _colors.cyan,
		teal: _colors.teal,
		green: _colors.green,
		lightGreen: _colors.lightGreen,
		lime: _colors.lime,
		yellow: _colors.yellow,
		amber: _colors.amber,
		orange: _colors.orange,
		deepOrange: _colors.deepOrange,
		grey: _colors.grey
	};

	return function (colorText) {
		if (colors.hasOwnProperty(colorText)) {
			return colors[colorText][modifier];
		} else {
			return "no match";
		}
	};
}

function textColorParser(colorText, complete) {
	var whiteList = ["red", "pink", "purple", "deepPurple", "indigo", "blue", "teal", "deepOrange", "brown", "blueGrey"];
	var blackList = ["lightBlue", "cyan", "green", "lightGreen", "lime", "yellow", "amber", "orange", "grey"];
	if (complete) {
		if (_lodash2.default.includes(whiteList, colorText)) {
			return "#000000";
		} else {
			return "#ffffff";
		}
	} else {
		if (_lodash2.default.includes(whiteList, colorText)) {
			return "#ffffff";
		} else {
			return "#000000";
		}
	}
}

function accentTextColorParser(colorText) {
	var whiteList = ["red", "pink", "purple", "deepPurple", "indigo", "blue", "deepOrange"];
	var blackList = ["lightBlue", "cyan", "teal", "gren", "lightGreen", "lime", "yellow", "amber", "orange"];

	if (_lodash2.default.includes(whiteList, colorText)) {
		return "#ffffff";
	} else {
		return "#000000";
	}
}

var rawColorParser = exports.rawColorParser = function rawColorParser(colorText) {
	var colors = {
		red: _colors.red,
		pink: _colors.pink,
		purple: _colors.purple,
		deepPurple: _colors.deepPurple,
		indigo: _colors.indigo,
		blue: _colors.blue,
		lightBlue: _colors.lightBlue,
		cyan: _colors.cyan,
		teal: _colors.teal,
		green: _colors.green,
		lightGreen: _colors.lightGreen,
		lime: _colors.lime,
		yellow: _colors.yellow,
		amber: _colors.amber,
		orange: _colors.orange,
		deepOrange: _colors.deepOrange,
		grey: _colors.grey
	};
	if (colors.hasOwnProperty(colorText)) {
		return colors[colorText];
	} else {
		return _colors.grey;
	}
};

var primaryColorParser = exports.primaryColorParser = colorParserComposer(500);

var accentColorParser = exports.accentColorParser = colorParserComposer("A400");

var fadedColorParser = exports.fadedColorParser = colorParserComposer(100);

var fadedAccentColorParser = exports.fadedAccentColorParser = colorParserComposer("A100");

var white = exports.white = {
	50: "#ffffff",
	100: "#ffffff",
	200: "#ffffff",
	300: "#ffffff",
	400: "#ffffff",
	500: "#ffffff",
	600: "#ffffff",
	700: "#ffffff",
	800: "#ffffff",
	900: "#ffffff",
	A100: "#ffffff",
	A200: "#ffffff",
	A400: "#ffffff",
	A700: "#fffff",
	contrastDefaultColor: "dark"
};

var black = exports.black = {
	50: "#000000",
	100: "#000000",
	200: "#000000",
	300: "#000000",
	400: "#000000",
	500: "#000000",
	600: "#000000",
	700: "#000000",
	800: "#000000",
	900: "#000000",
	A100: "#000000",
	A200: "#000000",
	A400: "#000000",
	A700: "#000000",
	contrastDefaultColor: "dark"
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

var _axios = __webpack_require__(769);

var _axios2 = _interopRequireDefault(_axios);

var _throttleAction = __webpack_require__(788);

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

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/App.js";


var styleSheet = (0, _styles.createStyleSheet)("App", function (theme) {
  return {
    "@global": {
      html: {
        background: theme.palette.background.default,
        fontFamily: theme.typography.fontFamily,
        WebkitFontSmoothing: "antialiased", // Antialiasing.
        MozOsxFontSmoothing: "grayscale" // Antialiasing.
      },
      body: {
        margin: 0
      },
      a: {
        color: "inherit"
      }
    }
  };
});

var AppWrapper = function AppWrapper(props) {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
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
    key: "componentDidMount",
    value: function componentDidMount() {
      // Remove the server-side injected CSS.
      var jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _getDefaultContext = (0, _createDefaultContext.getDefaultContext)(),
          styleManager = _getDefaultContext.styleManager,
          theme = _getDefaultContext.theme;

      return _react2.default.createElement(_styles.MuiThemeProvider, { styleManager: styleManager, theme: theme, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(AppWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
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

/***/ 698:
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

var _propTypes = __webpack_require__(31);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSortableHoc = __webpack_require__(697);

var _List = __webpack_require__(649);

var _Checkbox = __webpack_require__(702);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _IconButton = __webpack_require__(651);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Reorder = __webpack_require__(837);

var _Reorder2 = _interopRequireDefault(_Reorder);

var _DeleteForever = __webpack_require__(838);

var _DeleteForever2 = _interopRequireDefault(_DeleteForever);

var _Settings = __webpack_require__(707);

var _Settings2 = _interopRequireDefault(_Settings);

var _FormatListBulleted = __webpack_require__(839);

var _FormatListBulleted2 = _interopRequireDefault(_FormatListBulleted);

var _colors = __webpack_require__(605);

var _Button = __webpack_require__(678);

var _Button2 = _interopRequireDefault(_Button);

var _Menu = __webpack_require__(708);

var _Menu2 = _interopRequireDefault(_Menu);

var _Typography = __webpack_require__(650);

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = __webpack_require__(679);

var _Divider2 = _interopRequireDefault(_Divider);

var _colorParser = __webpack_require__(657);

var _ListItemTextArea = __webpack_require__(854);

var _ListItemTextArea2 = _interopRequireDefault(_ListItemTextArea);

var _ColorMenu = __webpack_require__(744);

var _ColorMenu2 = _interopRequireDefault(_ColorMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItem.js";
// import _ from 'lodash';


var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (props) {
	var activeStyle = props.complete ? {} : { cursor: "pointer" };
	var centerStyle = { display: "flex", alignItems: "center", margin: 12 };

	return _react2.default.createElement("span", {
		style: (0, _extends3.default)({}, props.completeStyle, activeStyle, centerStyle),
		__source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, _react2.default.createElement(_Reorder2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 35
		}
	}));
});

var BaseListItem = function (_Component) {
	(0, _inherits3.default)(BaseListItem, _Component);

	function BaseListItem(props) {
		(0, _classCallCheck3.default)(this, BaseListItem);

		var _this = (0, _possibleConstructorReturn3.default)(this, (BaseListItem.__proto__ || (0, _getPrototypeOf2.default)(BaseListItem)).call(this, props));

		_this.item = _this.props.value;
		_this.incompleteListStyle = {
			backgroundColor: (0, _colorParser.primaryColorParser)(_this.item.color)
		};
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

	(0, _createClass3.default)(BaseListItem, [{
		key: "completeDisplay",
		value: function completeDisplay() {
			var completed = this.item.completeChildren.length;
			var total = completed + this.item.incompleteChildren.length;
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
			var contentTextStyle = this.props.value.complete ? { color: this.completeGrey, textDecoration: "line-through" } : { color: this.props.textColor };
			return _react2.default.createElement("span", {
				style: (0, _extends3.default)({}, contentTextStyle, {
					wordWrap: "break-word",
					wordBreak: "break-all"
				}),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 91
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
				changeColor();
				close();
			};
		}
	}, {
		key: "render",
		value: function render() {
			var textColor = this.props.value.complete ? this.completeGrey : this.props.textColor;
			return _react2.default.createElement(_List.ListItem, {
				divider: true,
				style: {
					transition: "all 0s, background-color .5s",
					backgroundColor: this.props.itemColor,
					padding: 12
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 128
				}
			}, _react2.default.createElement(DragHandle, {
				completeStyle: { color: textColor },
				complete: this.item.complete,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 136
				}
			}), _react2.default.createElement(_Checkbox2.default, {
				checked: this.item.complete,
				onClick: this.props.completeItemComposer(this.item.id),
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 140
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
					lineNumber: 146
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
				align: "center",
				style: { outline: "none", paddingLeft: 16 },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 174
				}
			}, "Change Color"), _react2.default.createElement(_Divider2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 181
				}
			}), _react2.default.createElement(_ColorMenu2.default, { clickHandler: this.colorItemClickHandler, __source: {
					fileName: _jsxFileName,
					lineNumber: 182
				}
			}), _react2.default.createElement(_Divider2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 183
				}
			}), _react2.default.createElement("div", { style: { textAlign: "center" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 184
				}
			}, _react2.default.createElement(_Button2.default, {
				style: {
					color: "white",
					backgroundColor: _colors.red[500],
					marginTop: 8
				},
				onClick: this.props.deleteItemComposer(this.item.id),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 185
				}
			}, _react2.default.createElement(_DeleteForever2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 195
				}
			}), " ", "Delete Item"))));
		}
	}]);

	return BaseListItem;
}(_react.Component);

BaseListItem.propTypes = {
	deleteItemComposer: _propTypes2.default.func,
	changeBaseComposer: _propTypes2.default.func,
	completeItemComposer: _propTypes2.default.func,
	itemColor: _propTypes2.default.string,
	textColor: _propTypes2.default.string,
	value: _propTypes2.default.object,
	bgColor: _propTypes2.default.string,
	updateItem: _propTypes2.default.func,
	changeColorComposer: _propTypes2.default.func
};

exports.default = BaseListItem;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItem.js"); } } })();

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(31);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = __webpack_require__(651);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Brightness = __webpack_require__(706);

var _Brightness2 = _interopRequireDefault(_Brightness);

var _colorParser = __webpack_require__(657);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ColorMenu.js";


var ColorMenu = function ColorMenu(props) {
	var colors = ["red", "pink", "deepPurple", "indigo", "lightBlue", "cyan", "teal", "green", "lightGreen", "yellow", "orange", "deepOrange"];
	return _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}, colors.map(function (color, index) {
		var breakLine = index % 4 === 3 ? _react2.default.createElement("br", {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 26
			}
		}) : "";

		return _react2.default.createElement("span", {
			key: color + "-" + index,
			onClick: props.clickHandler(color),
			__source: {
				fileName: _jsxFileName,
				lineNumber: 29
			}
		}, _react2.default.createElement(_IconButton2.default, {
			style: { color: (0, _colorParser.primaryColorParser)(color) },
			__source: {
				fileName: _jsxFileName,
				lineNumber: 33
			}
		}, _react2.default.createElement(_Brightness2.default, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 36
			}
		})), breakLine);
	}));
};

ColorMenu.propTypes = {
	clickHandler: _propTypes2.default.func
};

exports.default = ColorMenu;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ColorMenu.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ColorMenu.js"); } } })();

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(756);


/***/ }),

/***/ 756:
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

var _index = __webpack_require__(762);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/pages/todo.js?entry";


var Todo = function (_Component) {
  (0, _inherits3.default)(Todo, _Component);

  function Todo() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Todo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Todo.__proto__ || (0, _getPrototypeOf2.default)(Todo)).call.apply(_ref, [this].concat(args))), _this), _this.seedState = {
      items: _this.props.query.initialState.items,
      baseItem: _this.props.query.initialState.baseItem
    }, _this.listID = _this.props.query.initialState._id, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Todo, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_App2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_index2.default, { seedState: this.seedState, listID: this.listID, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var query = _ref2.query;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", { query: query });

              case 1:
              case "end":
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

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(674);

var _redux = __webpack_require__(654);

var _reducers = __webpack_require__(767);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxDevtoolsExtension = __webpack_require__(792);

var _TodoContainer = __webpack_require__(793);

var _TodoContainer2 = _interopRequireDefault(_TodoContainer);

var _reduxThunk = __webpack_require__(1005);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/index.js";
// import ReactDOM from "react-dom";
// import registerServiceWorker from "./registerServiceWorker";


var createStoreWithMiddleware = (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default))(_redux.createStore);

var Boiler = function Boiler(props) {
	return _react2.default.createElement(_reactRedux.Provider, { store: createStoreWithMiddleware(_reducers2.default, props.seedState), __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, _react2.default.createElement(_TodoContainer2.default, { listID: props.listID, __source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}));
};

// ReactDOM.render(<Boiler />, document.getElementById("root"));
// registerServiceWorker();

exports.default = Boiler;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/index.js"); } } })();

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(654);

var _items_reducer = __webpack_require__(768);

var _items_reducer2 = _interopRequireDefault(_items_reducer);

var _baseItem_reducer = __webpack_require__(790);

var _baseItem_reducer2 = _interopRequireDefault(_baseItem_reducer);

var _network_reducer = __webpack_require__(791);

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

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = __webpack_require__(637);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _lodash = __webpack_require__(655);

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = __webpack_require__(662);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function items() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : seedData;
	var action = arguments[1];

	var id, newState, newID, newItem, parentID;
	switch (action.type) {
		case _actions.NEW_ITEM:
			newID = randomID();
			parentID = action.payload.parent;
			newItem = (0, _defineProperty3.default)({}, newID, {
				id: newID,
				content: action.payload.content,
				complete: false,
				color: "lightBlue",
				completeChildren: [],
				incompleteChildren: [],
				parent: parentID
			});
			var newParent = (0, _defineProperty3.default)({}, parentID, addChild(state[parentID], newID));
			newState = _lodash2.default.merge({}, state, newItem, newParent);
			return newState;

		case _actions.COMPLETE_ITEM:
			id = action.payload;
			newState = _lodash2.default.merge({}, state);
			newItem = (0, _defineProperty3.default)({}, id, newState[id]);
			parentID = newItem[id].parent;
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
			id = action.payload;
			newState = _lodash2.default.merge({}, state);
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
			newState = _lodash2.default.merge({}, state);
			parentID = action.payload.parentID;
			newState[parentID].incompleteChildren = reorder(newState[parentID].incompleteChildren, action.payload.oldIndex, action.payload.newIndex);
			return newState;

		case _actions.CHANGE_COLOR:
			newState = _lodash2.default.merge({}, state);
			newState[action.payload.id].color = action.payload.color;
			return newState;

		case _actions.UPDATE_ITEM:
			newState = _lodash2.default.merge({}, state);
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
	var item = arr[oldIndex];
	arr.splice(oldIndex, 1);
	arr.splice(newIndex, 0, item);
	return arr;
}

var seedData = {
	1001: {
		id: 1001,
		content: "Random seed 1",
		complete: false,
		color: "red",
		parent: "root",
		completeChildren: [],
		incompleteChildren: [1004]
	},
	1002: {
		id: 1002,
		content: "Random seed 2",
		complete: false,
		color: "red",
		parent: "root",
		completeChildren: [],
		incompleteChildren: [1003]
	},
	1003: {
		id: 1003,
		content: "Random seed 3",
		complete: false,
		color: "red",
		parent: 1002,
		completeChildren: [],
		incompleteChildren: []
	},
	1004: {
		id: 1004,
		content: "Random seed 4",
		complete: false,
		color: "red",
		parent: 1001,
		completeChildren: [],
		incompleteChildren: []
	},
	1005: {
		id: 1005,
		content: "Random seed 5",
		complete: true,
		color: "red",
		parent: "root",
		completeChildren: [],
		incompleteChildren: []
	},
	root: {
		color: "red",
		completeChildren: [1005],
		incompleteChildren: [1001, 1002]
	}
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/items_reducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/items_reducer.js"); } } })();

/***/ }),

/***/ 790:
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

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = network;

var _actions = __webpack_require__(662);

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

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(31);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IncompleteList = __webpack_require__(795);

var _IncompleteList2 = _interopRequireDefault(_IncompleteList);

var _CompleteList = __webpack_require__(945);

var _CompleteList2 = _interopRequireDefault(_CompleteList);

var _styles = __webpack_require__(645);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/List.js";
// import style from "./style.css";

// import _ from 'lodash';


var styleSheet = (0, _styles.createStyleSheet)("List", {
	container: {}
});

var List = function List(props) {
	var itemsList = props.items;
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
			lineNumber: 29
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
			lineNumber: 30
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
			lineNumber: 41
		}
	}));
};

List.propTypes = {
	items: _propTypes2.default.object,
	baseItem: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	updateItem: _propTypes2.default.func,
	changeColorComposer: _propTypes2.default.func,
	reorderItemComposer: _propTypes2.default.func,
	completeItemComposer: _propTypes2.default.func,
	deleteItemComposer: _propTypes2.default.func,
	changeBaseComposer: _propTypes2.default.func,
	classes: _propTypes2.default.object
};

exports.default = (0, _styles.withStyles)(styleSheet)(List);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/List.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/List.js"); } } })();

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(31);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSortableHoc = __webpack_require__(697);

var _ListItem = __webpack_require__(698);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = __webpack_require__(649);

var _List2 = _interopRequireDefault(_List);

var _styles = __webpack_require__(645);

var _colorParser = __webpack_require__(657);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/IncompleteList.js";
// import _ from "lodash";


var styleSheet = (0, _styles.createStyleSheet)("IncompleteList", {
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
});

var SortableList = (0, _reactSortableHoc.SortableContainer)(function (props) {
	return _react2.default.createElement(_List2.default, { className: props.classForList, __source: {
			fileName: _jsxFileName,
			lineNumber: 26
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
				lineNumber: 29
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
			lineNumber: 49
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
			lineNumber: 73
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
			lineNumber: 74
		}
	}));
};

IncompleteList.propTypes = {
	classes: _propTypes2.default.object,
	updateItem: _propTypes2.default.func,
	changeColorComposer: _propTypes2.default.func,
	completeItemComposer: _propTypes2.default.func,
	deleteItemComposer: _propTypes2.default.func,
	changeBaseComposer: _propTypes2.default.func,
	items: _propTypes2.default.array,
	reorderItemComposer: _propTypes2.default.func,
	parentID: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

exports.default = (0, _styles.withStyles)(styleSheet)(IncompleteList);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/IncompleteList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/IncompleteList.js"); } } })();

/***/ }),

/***/ 854:
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

var _propTypes = __webpack_require__(31);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = __webpack_require__(649);

var _TextField = __webpack_require__(680);

var _TextField2 = _interopRequireDefault(_TextField);

var _reactTouch = __webpack_require__(718);

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
			var lineStyle = this.props.complete ? { textDecoration: "line-through" } : {};
			var hold = (0, _reactTouch.defineHold)({ updateEvery: 50, holdFor: 500 });
			return _react2.default.createElement(_reactTouch.Holdable, { config: hold, onHoldComplete: props.doubleClickHandler, __source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			}, _react2.default.createElement(_List.ListItemText, {
				primary: _react2.default.createElement("span", {
					style: (0, _extends3.default)({
						color: this.props.textColor
					}, lineStyle, {
						wordWrap: "normal",
						wordBreak: "normal"
					}),
					__source: {
						fileName: _jsxFileName,
						lineNumber: 33
					}
				}, props.primary),
				secondary: props.secondary,
				style: {
					color: props.textColor,
					padding: "0px",
					wordWrap: "break-word"
				},
				onDoubleClick: props.doubleClickHandler,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}));
		}
	}, {
		key: "EditItem",
		value: function EditItem() {
			return _react2.default.createElement("form", { onSubmit: this.handleBlur, style: { width: "100%" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement(_TextField2.default, {
				value: this.state.editText,
				onChange: this.handleChange,
				onBlur: this.handleBlur,
				fullWidth: true,
				autoFocus: true,
				InputProps: {
					style: {
						color: this.props.textColor
					}
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
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
						lineNumber: 89
					}
				});
			} else {
				return _react2.default.createElement(NonEditItem, {
					doubleClickHandler: props.doubleClickHandler,
					primary: props.primary,
					secondary: props.secondary,
					style: {
						color: props.textColor,
						padding: "0px",
						wordWrap: "break-word"
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 92
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
					lineNumber: 113
				}
			});
		}
	}]);

	return ListItemTextArea;
}(_react.Component);

ListItemTextArea.propTypes = {
	textColor: _propTypes2.default.string,
	primary: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
	secondary: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
	updateItem: _propTypes2.default.func,
	id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	complete: _propTypes2.default.bool,
	rawText: _propTypes2.default.string
};

exports.default = ListItemTextArea;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItemTextArea.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItemTextArea.js"); } } })();

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(31);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ListItem = __webpack_require__(698);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = __webpack_require__(649);

var _List2 = _interopRequireDefault(_List);

var _styles = __webpack_require__(645);

var _colorParser = __webpack_require__(657);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/CompleteList.js";
// import _ from "lodash";


var styleSheet = (0, _styles.createStyleSheet)("CompleteList", {
	container: {
		margin: 0,
		padding: 0
	}
});

var CompleteList = function CompleteList(props) {
	var classes = props.classes;

	return _react2.default.createElement(_List2.default, { className: classes.container, __source: {
			fileName: _jsxFileName,
			lineNumber: 23
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
				lineNumber: 26
			}
		});
	}));
};

CompleteList.propTypes = {
	classes: _propTypes2.default.object,
	updateItem: _propTypes2.default.func,
	items: _propTypes2.default.array
};

exports.default = (0, _styles.withStyles)(styleSheet)(CompleteList);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/CompleteList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/CompleteList.js"); } } })();

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = __webpack_require__(100);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(31);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(645);

var _Typography = __webpack_require__(650);

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = __webpack_require__(679);

var _Divider2 = _interopRequireDefault(_Divider);

var _ChevronRight = __webpack_require__(947);

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

var _NewItemForm = __webpack_require__(948);

var _NewItemForm2 = _interopRequireDefault(_NewItemForm);

var _colorParser = __webpack_require__(657);

var _HeaderMenu = __webpack_require__(997);

var _HeaderMenu2 = _interopRequireDefault(_HeaderMenu);

var _EditableTextArea = __webpack_require__(998);

var _EditableTextArea2 = _interopRequireDefault(_EditableTextArea);

var _Checkbox = __webpack_require__(702);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _IconButton = __webpack_require__(651);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListHeader.js";
// import _ from "lodash";


var styleSheet = (0, _styles.createStyleSheet)("Header", {
	titleContainer: {
		padding: 16,
		display: "flex"
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
});

var ListHeader = function ListHeader(props) {
	var classes = props.classes;
	var currentItemColor = props.items[props.baseItem].color;
	var incompleteColor = (0, _colorParser.primaryColorParser)(currentItemColor);
	var incompleteTextColor = (0, _colorParser.textColorParser)(currentItemColor);
	var incompleteAccentColor = (0, _colorParser.accentColorParser)(currentItemColor);
	var completeAccentColor = (0, _colorParser.fadedAccentColorParser)(currentItemColor);
	var incompleteAccentTextColor = (0, _colorParser.accentTextColorParser)(currentItemColor);
	var complete = props.baseItem === "root" ? false : props.items[props.baseItem].complete;

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
				lineNumber: 79
			}
		}, trail.map(function (item, index) {
			return _react2.default.createElement("span", {
				key: "breadcrumb-" + index,
				className: props.classes.crumb,
				onClick: props.changeBaseComposer(item),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			}, item === "root" ? "root" : props.items[item].content, index < trail.length - 1 ? _react2.default.createElement(_ChevronRight2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 95
				}
			}) : "", " ");
		}));
	};

	return _react2.default.createElement("div", {
		style: {
			backgroundColor: bgColor,
			color: textColor,
			transition: ".5s"
		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 105
		}
	}, _react2.default.createElement("div", { className: classes.titleContainer, __source: {
			fileName: _jsxFileName,
			lineNumber: 112
		}
	}, props.baseItem === "root" ? _react2.default.createElement(_IconButton2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 114
		}
	}) : _react2.default.createElement(_Checkbox2.default, {
		checked: complete,
		onClick: props.completeItemComposer(props.baseItem),
		style: { color: textColor },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 115
		}
	}), _react2.default.createElement("div", { className: classes.titleText, __source: {
			fileName: _jsxFileName,
			lineNumber: 120
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
			lineNumber: 121
		}
	})), _react2.default.createElement(_HeaderMenu2.default, {
		textColor: textColor,
		baseItem: props.baseItem,
		changeColorComposer: props.changeColorComposer,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 132
		}
	})), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 138
		}
	}), _react2.default.createElement(BreadCrumb, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 139
		}
	}), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 140
		}
	}), _react2.default.createElement(_NewItemForm2.default, {
		newItemAction: props.newItemAction,
		textColor: textColor,
		accentColor: accentColor,
		accentTextColor: accentTextColor,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 141
		}
	}), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 147
		}
	}));
};

ListHeader.propTypes = {
	newItemAction: _propTypes2.default.func,
	changeColorComposer: _propTypes2.default.func,
	baseItem: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	updateItem: _propTypes2.default.func,
	counterText: _propTypes2.default.string,
	completeItemComposer: _propTypes2.default.func,
	items: _propTypes2.default.object,
	classes: _propTypes2.default.object
};

exports.default = (0, _styles.withStyles)(styleSheet)(ListHeader);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListHeader.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListHeader.js"); } } })();

/***/ }),

/***/ 948:
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

var _TextField = __webpack_require__(680);

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = __webpack_require__(678);

var _Button2 = _interopRequireDefault(_Button);

var _Grid = __webpack_require__(949);

var _Grid2 = _interopRequireDefault(_Grid);

var _styles = __webpack_require__(645);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/NewItemForm.js";
// import _ from 'lodash';


var styleSheet = (0, _styles.createStyleSheet)("NewItemForm", {
	container: {
		margin: "auto",
		paddingBottom: "16px",
		paddingTop: "16px",
		padding: 24,
		boxSizing: "border-box"
	},
	typeItem: {
		flexGrow: 1
	}
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
			return _react2.default.createElement("div", { className: classes.container, __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement("form", { onSubmit: this.submitHandler, __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement(_Grid2.default, { container: true, gutter: 8, align: "center", __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement(_Grid2.default, { item: true, className: classes.typeItem, __source: {
					fileName: _jsxFileName,
					lineNumber: 49
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
					lineNumber: 50
				}
			})), _react2.default.createElement(_Grid2.default, { item: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}, _react2.default.createElement(_Button2.default, {
				type: "submit",
				raised: true,
				style: {
					color: this.props.accentTextColor,
					backgroundColor: this.props.accentColor
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, "Make a New Item")))));
		}
	}]);

	return NewItemForm;
}(_react.Component);

NewItemForm.propTypes = {
	newItemAction: _propTypes2.default.func,
	accentTextColor: _propTypes2.default.string,
	accentColor: _propTypes2.default.string,
	textColor: _propTypes2.default.string,
	classes: _propTypes2.default.object
};

exports.default = (0, _styles.withStyles)(styleSheet)(NewItemForm);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/NewItemForm.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/NewItemForm.js"); } } })();

/***/ }),

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

var _propTypes = __webpack_require__(31);

var _propTypes2 = _interopRequireDefault(_propTypes);

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

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/HeaderMenu.js";


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
			var changeColor = this.props.changeColorComposer(this.props.baseItem, colorName);
			return function () {
				changeColor();
				close();
			};
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement(_IconButton2.default, {
				onClick: this.openMenu,
				style: { color: this.props.textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement(_Settings2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			})), _react2.default.createElement(_Menu2.default, {
				id: this.props.baseItem + "-menu",
				open: this.state.open,
				onRequestClose: this.closeMenu,
				anchorEl: this.state.anchorEl,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, _react2.default.createElement(_Typography2.default, {
				type: "subheading",
				align: "center",
				style: { outline: "none", paddingLeft: 16 },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, "Change Color"), _react2.default.createElement(_Divider2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}), _react2.default.createElement(_ColorMenu2.default, { clickHandler: this.colorItemClickHandler, __source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			})));
		}
	}]);

	return HeaderMenu;
}(_react.Component);

HeaderMenu.propTypes = {
	baseItem: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	textColor: _propTypes2.default.string,
	bgColor: _propTypes2.default.string,
	changeColorComposer: _propTypes2.default.func
};

exports.default = HeaderMenu;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/HeaderMenu.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/HeaderMenu.js"); } } })();

/***/ }),

/***/ 998:
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

var _TextField = __webpack_require__(680);

var _TextField2 = _interopRequireDefault(_TextField);

var _reactTouch = __webpack_require__(718);

var _Typography = __webpack_require__(650);

var _Typography2 = _interopRequireDefault(_Typography);

var _propTypes = __webpack_require__(31);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/EditableTextArea.js";


var NonEditItem = function NonEditItem(props) {
	var lineStyle = props.complete ? { textDecoration: "line-through" } : {};
	var hold = (0, _reactTouch.defineHold)({ updateEvery: 50, holdFor: 500 });
	return _react2.default.createElement(_reactTouch.Holdable, { config: hold, onHoldComplete: props.updateHandler, __source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement(_Typography2.default, {
		type: "headline",
		align: "center",
		style: (0, _extends3.default)({ color: props.textColor }, lineStyle),
		onDoubleClick: props.updateHandler,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, props.primary), _react2.default.createElement(_Typography2.default, {
		type: "subheading",
		align: "center",
		style: { color: props.textColor },
		onDoubleClick: props.updateHandler,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, props.secondary)));
};

NonEditItem.propTypes = {
	primary: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
	secondary: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
	textColor: _propTypes2.default.string,
	complete: _propTypes2.default.bool,
	updateHandler: _propTypes2.default.func
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
		value: function EditItem() {
			return _react2.default.createElement("form", { onSubmit: this.handleBlur, style: { width: "100%" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, _react2.default.createElement(_TextField2.default, {
				value: this.state.editText,
				onChange: this.handleChange,
				onBlur: this.handleBlur,
				fullWidth: true,
				autoFocus: true,
				InputProps: {
					style: {
						color: this.props.textColor
					}
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
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
						lineNumber: 89
					}
				});
			} else {
				return _react2.default.createElement(NonEditItem, {
					style: {
						color: this.props.textColor,
						padding: "0px",
						wordWrap: "break-word"
					},
					complete: this.props.complete,
					updateHandler: this.doubleClickHandler,
					textColor: this.props.textColor,
					primary: this.props.primary,
					secondary: this.props.secondary,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 92
					}
				});
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
					lineNumber: 114
				}
			});
		}
	}]);

	return EditableTextArea;
}(_react.Component);

EditableTextArea.propTypes = {
	primary: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
	secondary: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
	textColor: _propTypes2.default.string,
	complete: _propTypes2.default.bool,
	updateItem: _propTypes2.default.func,
	id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

exports.default = EditableTextArea;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/EditableTextArea.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/EditableTextArea.js"); } } })();

/***/ })

},[755]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy90b2RvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9zdHlsZS9jcmVhdGVEZWZhdWx0Q29udGV4dC5qcz84MGFmNWY1Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvaGVscGVycy9jb2xvclBhcnNlci5qcz84MGFmNWY1Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvYWN0aW9ucy9pbmRleC5qcz84MGFmNWY1Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvQXBwLmpzPzgwYWY1ZjUiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RJdGVtLmpzPzgwYWY1ZjUiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0NvbG9yTWVudS5qcz84MGFmNWY1Iiwid2VicGFjazovLy8uL3BhZ2VzL3RvZG8uanM/ODBhZjVmNSIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2luZGV4LmpzPzgwYWY1ZjUiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9pbmRleC5qcz84MGFmNWY1Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvcmVkdWNlcnMvaXRlbXNfcmVkdWNlci5qcz84MGFmNWY1Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvcmVkdWNlcnMvYmFzZUl0ZW1fcmVkdWNlci5qcz84MGFmNWY1Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvcmVkdWNlcnMvbmV0d29ya19yZWR1Y2VyLmpzPzgwYWY1ZjUiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIuanM/ODBhZjVmNSIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdC5qcz84MGFmNWY1Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9JbmNvbXBsZXRlTGlzdC5qcz84MGFmNWY1Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SXRlbVRleHRBcmVhLmpzPzgwYWY1ZjUiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0NvbXBsZXRlTGlzdC5qcz84MGFmNWY1Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SGVhZGVyLmpzPzgwYWY1ZjUiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL05ld0l0ZW1Gb3JtLmpzPzgwYWY1ZjUiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0hlYWRlck1lbnUuanM/ODBhZjVmNSIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvRWRpdGFibGVUZXh0QXJlYS5qcz84MGFmNWY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlclwiO1xuaW1wb3J0IGNyZWF0ZVBhbGV0dGUgZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlcy9wYWxldHRlXCI7XG5pbXBvcnQgY3JlYXRlTXVpVGhlbWUgZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgZ3JleSB9IGZyb20gXCJtYXRlcmlhbC11aS9jb2xvcnNcIjtcblxuY29uc3QgY3JlYXRlRGVmYXVsdENvbnRleHQgPSAoKSA9PlxuICBNdWlUaGVtZVByb3ZpZGVyLmNyZWF0ZURlZmF1bHRDb250ZXh0KHtcbiAgICB0aGVtZTogY3JlYXRlTXVpVGhlbWUoe1xuICAgICAgcGFsZXR0ZTogY3JlYXRlUGFsZXR0ZSh7XG4gICAgICAgIHByaW1hcnk6IGdyZXlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSk7XG5cbi8vIFNpbmdsZXRvbiBoYWNrIGFzIHRoZXJlIGlzIG5vIHdheSB0byBwYXNzIHZhcmlhYmxlcyBmcm9tIF9kb2N1bWVudC5qcyB0byBwYWdlcyB5ZXQuXG5sZXQgY29udGV4dCA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0Q29udGV4dCgpIHtcbiAgY29udGV4dCA9IGNyZWF0ZURlZmF1bHRDb250ZXh0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0Q29udGV4dCgpIHtcbiAgLy8gTWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyBzdG9yZSBmb3IgZXZlcnkgc2VydmVyLXNpZGUgcmVxdWVzdCBzbyB0aGF0IGRhdGFcbiAgLy8gaXNuJ3Qgc2hhcmVkIGJldHdlZW4gY29ubmVjdGlvbnMgKHdoaWNoIHdvdWxkIGJlIGJhZClcbiAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIC8vIFJldXNlIHN0b3JlIG9uIHRoZSBjbGllbnQtc2lkZVxuICBpZiAoIWNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY3JlYXRlRGVmYXVsdENvbnRleHQoKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEZWZhdWx0Q29udGV4dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvc3R5bGUvY3JlYXRlRGVmYXVsdENvbnRleHQuanMiLCJpbXBvcnQge1xuXHRyZWQsXG5cdHBpbmssXG5cdHB1cnBsZSxcblx0ZGVlcFB1cnBsZSxcblx0aW5kaWdvLFxuXHRibHVlLFxuXHRsaWdodEJsdWUsXG5cdGN5YW4sXG5cdHRlYWwsXG5cdGdyZWVuLFxuXHRsaWdodEdyZWVuLFxuXHRsaW1lLFxuXHR5ZWxsb3csXG5cdGFtYmVyLFxuXHRvcmFuZ2UsXG5cdGRlZXBPcmFuZ2UsXG5cdGdyZXlcbn0gZnJvbSBcIm1hdGVyaWFsLXVpL2NvbG9yc1wiO1xuXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8vIGZ1bmN0aW9uIGNvbG9yUGFyc2VyQ29tcG9zZXIobW9kaWZpZXJcbi8vIH1cblxuZnVuY3Rpb24gY29sb3JQYXJzZXJDb21wb3Nlcihtb2RpZmllcikge1xuXHR2YXIgY29sb3JzID0ge1xuXHRcdHJlZCxcblx0XHRwaW5rLFxuXHRcdHB1cnBsZSxcblx0XHRkZWVwUHVycGxlLFxuXHRcdGluZGlnbyxcblx0XHRibHVlLFxuXHRcdGxpZ2h0Qmx1ZSxcblx0XHRjeWFuLFxuXHRcdHRlYWwsXG5cdFx0Z3JlZW4sXG5cdFx0bGlnaHRHcmVlbixcblx0XHRsaW1lLFxuXHRcdHllbGxvdyxcblx0XHRhbWJlcixcblx0XHRvcmFuZ2UsXG5cdFx0ZGVlcE9yYW5nZSxcblx0XHRncmV5XG5cdH07XG5cblx0cmV0dXJuIGZ1bmN0aW9uKGNvbG9yVGV4dCkge1xuXHRcdGlmIChjb2xvcnMuaGFzT3duUHJvcGVydHkoY29sb3JUZXh0KSkge1xuXHRcdFx0cmV0dXJuIGNvbG9yc1tjb2xvclRleHRdW21vZGlmaWVyXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFwibm8gbWF0Y2hcIjtcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0Q29sb3JQYXJzZXIoY29sb3JUZXh0LCBjb21wbGV0ZSkge1xuXHR2YXIgd2hpdGVMaXN0ID0gW1xuXHRcdFwicmVkXCIsXG5cdFx0XCJwaW5rXCIsXG5cdFx0XCJwdXJwbGVcIixcblx0XHRcImRlZXBQdXJwbGVcIixcblx0XHRcImluZGlnb1wiLFxuXHRcdFwiYmx1ZVwiLFxuXHRcdFwidGVhbFwiLFxuXHRcdFwiZGVlcE9yYW5nZVwiLFxuXHRcdFwiYnJvd25cIixcblx0XHRcImJsdWVHcmV5XCJcblx0XTtcblx0dmFyIGJsYWNrTGlzdCA9IFtcblx0XHRcImxpZ2h0Qmx1ZVwiLFxuXHRcdFwiY3lhblwiLFxuXHRcdFwiZ3JlZW5cIixcblx0XHRcImxpZ2h0R3JlZW5cIixcblx0XHRcImxpbWVcIixcblx0XHRcInllbGxvd1wiLFxuXHRcdFwiYW1iZXJcIixcblx0XHRcIm9yYW5nZVwiLFxuXHRcdFwiZ3JleVwiXG5cdF07XG5cdGlmIChjb21wbGV0ZSkge1xuXHRcdGlmIChfLmluY2x1ZGVzKHdoaXRlTGlzdCwgY29sb3JUZXh0KSkge1xuXHRcdFx0cmV0dXJuIFwiIzAwMDAwMFwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gXCIjZmZmZmZmXCI7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGlmIChfLmluY2x1ZGVzKHdoaXRlTGlzdCwgY29sb3JUZXh0KSkge1xuXHRcdFx0cmV0dXJuIFwiI2ZmZmZmZlwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gXCIjMDAwMDAwXCI7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY2NlbnRUZXh0Q29sb3JQYXJzZXIoY29sb3JUZXh0KSB7XG5cdHZhciB3aGl0ZUxpc3QgPSBbXG5cdFx0XCJyZWRcIixcblx0XHRcInBpbmtcIixcblx0XHRcInB1cnBsZVwiLFxuXHRcdFwiZGVlcFB1cnBsZVwiLFxuXHRcdFwiaW5kaWdvXCIsXG5cdFx0XCJibHVlXCIsXG5cdFx0XCJkZWVwT3JhbmdlXCJcblx0XTtcblx0dmFyIGJsYWNrTGlzdCA9IFtcblx0XHRcImxpZ2h0Qmx1ZVwiLFxuXHRcdFwiY3lhblwiLFxuXHRcdFwidGVhbFwiLFxuXHRcdFwiZ3JlblwiLFxuXHRcdFwibGlnaHRHcmVlblwiLFxuXHRcdFwibGltZVwiLFxuXHRcdFwieWVsbG93XCIsXG5cdFx0XCJhbWJlclwiLFxuXHRcdFwib3JhbmdlXCJcblx0XTtcblxuXHRpZiAoXy5pbmNsdWRlcyh3aGl0ZUxpc3QsIGNvbG9yVGV4dCkpIHtcblx0XHRyZXR1cm4gXCIjZmZmZmZmXCI7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIFwiIzAwMDAwMFwiO1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCByYXdDb2xvclBhcnNlciA9IGNvbG9yVGV4dCA9PiB7XG5cdHZhciBjb2xvcnMgPSB7XG5cdFx0cmVkLFxuXHRcdHBpbmssXG5cdFx0cHVycGxlLFxuXHRcdGRlZXBQdXJwbGUsXG5cdFx0aW5kaWdvLFxuXHRcdGJsdWUsXG5cdFx0bGlnaHRCbHVlLFxuXHRcdGN5YW4sXG5cdFx0dGVhbCxcblx0XHRncmVlbixcblx0XHRsaWdodEdyZWVuLFxuXHRcdGxpbWUsXG5cdFx0eWVsbG93LFxuXHRcdGFtYmVyLFxuXHRcdG9yYW5nZSxcblx0XHRkZWVwT3JhbmdlLFxuXHRcdGdyZXlcblx0fTtcblx0aWYgKGNvbG9ycy5oYXNPd25Qcm9wZXJ0eShjb2xvclRleHQpKSB7XG5cdFx0cmV0dXJuIGNvbG9yc1tjb2xvclRleHRdO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBncmV5O1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgcHJpbWFyeUNvbG9yUGFyc2VyID0gY29sb3JQYXJzZXJDb21wb3Nlcig1MDApO1xuXG5leHBvcnQgY29uc3QgYWNjZW50Q29sb3JQYXJzZXIgPSBjb2xvclBhcnNlckNvbXBvc2VyKFwiQTQwMFwiKTtcblxuZXhwb3J0IGNvbnN0IGZhZGVkQ29sb3JQYXJzZXIgPSBjb2xvclBhcnNlckNvbXBvc2VyKDEwMCk7XG5cbmV4cG9ydCBjb25zdCBmYWRlZEFjY2VudENvbG9yUGFyc2VyID0gY29sb3JQYXJzZXJDb21wb3NlcihcIkExMDBcIik7XG5cbmV4cG9ydCBjb25zdCB3aGl0ZSA9IHtcblx0NTA6IFwiI2ZmZmZmZlwiLFxuXHQxMDA6IFwiI2ZmZmZmZlwiLFxuXHQyMDA6IFwiI2ZmZmZmZlwiLFxuXHQzMDA6IFwiI2ZmZmZmZlwiLFxuXHQ0MDA6IFwiI2ZmZmZmZlwiLFxuXHQ1MDA6IFwiI2ZmZmZmZlwiLFxuXHQ2MDA6IFwiI2ZmZmZmZlwiLFxuXHQ3MDA6IFwiI2ZmZmZmZlwiLFxuXHQ4MDA6IFwiI2ZmZmZmZlwiLFxuXHQ5MDA6IFwiI2ZmZmZmZlwiLFxuXHRBMTAwOiBcIiNmZmZmZmZcIixcblx0QTIwMDogXCIjZmZmZmZmXCIsXG5cdEE0MDA6IFwiI2ZmZmZmZlwiLFxuXHRBNzAwOiBcIiNmZmZmZlwiLFxuXHRjb250cmFzdERlZmF1bHRDb2xvcjogXCJkYXJrXCJcbn07XG5cbmV4cG9ydCBjb25zdCBibGFjayA9IHtcblx0NTA6IFwiIzAwMDAwMFwiLFxuXHQxMDA6IFwiIzAwMDAwMFwiLFxuXHQyMDA6IFwiIzAwMDAwMFwiLFxuXHQzMDA6IFwiIzAwMDAwMFwiLFxuXHQ0MDA6IFwiIzAwMDAwMFwiLFxuXHQ1MDA6IFwiIzAwMDAwMFwiLFxuXHQ2MDA6IFwiIzAwMDAwMFwiLFxuXHQ3MDA6IFwiIzAwMDAwMFwiLFxuXHQ4MDA6IFwiIzAwMDAwMFwiLFxuXHQ5MDA6IFwiIzAwMDAwMFwiLFxuXHRBMTAwOiBcIiMwMDAwMDBcIixcblx0QTIwMDogXCIjMDAwMDAwXCIsXG5cdEE0MDA6IFwiIzAwMDAwMFwiLFxuXHRBNzAwOiBcIiMwMDAwMDBcIixcblx0Y29udHJhc3REZWZhdWx0Q29sb3I6IFwiZGFya1wiXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9oZWxwZXJzL2NvbG9yUGFyc2VyLmpzIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHRocm90dGxlQWN0aW9uIGZyb20gJ3Rocm90dGxlLWFjdGlvbic7XG5cblxuLy8gPT09PT09PT09PT09PT09XG4vLyBBY3Rpb24gQ3JlYXRvcnNcbi8vID09PT09PT09PT09PT09PVxuXG5leHBvcnQgY29uc3QgTkVXX0lURU0gPSBcIk5FV19JVEVNXCI7XG5leHBvcnQgZnVuY3Rpb24gbmV3SXRlbShjb250ZW50ID0gXCJcIiwgcGFyZW50ID0gXCJyb290XCIpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBORVdfSVRFTSxcblx0XHRwYXlsb2FkOiB7XG5cdFx0XHRjb250ZW50LFxuXHRcdFx0cGFyZW50XG5cdFx0fVxuXHR9O1xufVxuZXhwb3J0IGNvbnN0IENIQU5HRV9CQVNFID0gXCJDSEFOR0VfQkFTRVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUJhc2VJdGVtKGlkKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0JBU0UsXG5cdFx0cGF5bG9hZDogaWRcblx0fTtcbn1cblxuZXhwb3J0IGNvbnN0IENPTVBMRVRFX0lURU0gPSBcIkNPTVBMRVRFX0lURU1cIjtcbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0ZUl0ZW0oaWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDT01QTEVURV9JVEVNLFxuXHRcdHBheWxvYWQ6IGlkXG5cdH07XG59XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfSVRFTSA9IFwiREVMRVRFX0lURU1cIjtcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVJdGVtKGlkKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogREVMRVRFX0lURU0sXG5cdFx0cGF5bG9hZDogaWRcblx0fTtcbn1cblxuZXhwb3J0IGNvbnN0IFJFT1JERVJfSVRFTSA9IFwiUkVPUkRFUl9JVEVNXCI7XG5leHBvcnQgZnVuY3Rpb24gcmVvcmRlckl0ZW0ocGFyZW50SUQsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFJFT1JERVJfSVRFTSxcblx0XHRwYXlsb2FkOiB7XG5cdFx0XHRwYXJlbnRJRCxcblx0XHRcdG9sZEluZGV4LFxuXHRcdFx0bmV3SW5kZXhcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfQ09MT1IgPSBcIkNIQU5HRV9DT0xPUlwiO1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbG9yKGlkLGNvbG9yKXtcblx0cmV0dXJue1xuXHRcdHR5cGU6IENIQU5HRV9DT0xPUixcblx0XHRwYXlsb2FkOiB7XG5cdFx0XHRpZCxcblx0XHRcdGNvbG9yXG5cdFx0fVxuXHR9XG59XG5cblxuZXhwb3J0IGNvbnN0IFVQREFURV9JVEVNID0gXCJVUERBVEVfSVRFTVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW0oaWQsbmV3VGV4dCl7XG5cdHJldHVybiB7XG5cdFx0dHlwZTpVUERBVEVfSVRFTSxcblx0XHRwYXlsb2FkOntcblx0XHRcdGlkLFxuXHRcdFx0bmV3VGV4dFxuXHRcdH1cblx0fVxufVxuXG5cblxuZXhwb3J0IGNvbnN0IFVQREFURV9EQVRBID0gXCJVUERBVEVfREFUQVwiXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRGF0YShpZCwgbmV3U3RhdGUpe1xuXHRyZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG5cdFx0ZGlzcGF0Y2godXBkYXRlUHJvZ3Jlc3MoKSlcblxuXHRcdHJldHVybiBheGlvcy5wdXQoYC90b2RvLyR7aWR9YCwgbmV3U3RhdGUpXG5cdFx0XHQudGhlbihcblxuXHRcdFx0XHRyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2godXBkYXRlQ29tcGxldGUoKSlcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRlcnJvciA9PiB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2godXBkYXRlRXJyb3IoKSlcblx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZURhdGFUaHJvdHRsZWQgPSB0aHJvdHRsZUFjdGlvbih1cGRhdGVEYXRhLCA1MDAwKTtcblxuXG5leHBvcnQgY29uc3QgVVBEQVRFX1BST0dSRVNTID0gXCJVUERBVEVfUFJPR1JFU1NcIlxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKCl7XG5cdHJldHVybntcblx0XHR0eXBlOlVQREFURV9QUk9HUkVTU1xuXHR9XG59XG5cblxuZXhwb3J0IGNvbnN0IFVQREFURV9TVUNDRVNTID0gXCJVUERBVEVfU1VDQ0VTU1wiXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29tcGxldGUoKXtcblx0cmV0dXJue1xuXHRcdHR5cGU6VVBEQVRFX1NVQ0NFU1Ncblx0fVxufVxuXG5leHBvcnQgY29uc3QgVVBEQVRFX0VSUk9SID0gXCJVUERBVEVfRVJST1JcIlxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVycm9yKCl7XG5cdHJldHVybntcblx0XHR0eXBlOlVQREFURV9FUlJPUlxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtcbiAgd2l0aFN0eWxlcyxcbiAgY3JlYXRlU3R5bGVTaGVldCxcbiAgTXVpVGhlbWVQcm92aWRlclxufSBmcm9tIFwibWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0Q29udGV4dCB9IGZyb20gXCIuL3N0eWxlL2NyZWF0ZURlZmF1bHRDb250ZXh0XCI7XG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBjcmVhdGVTdHlsZVNoZWV0KFwiQXBwXCIsIHRoZW1lID0+ICh7XG4gIFwiQGdsb2JhbFwiOiB7XG4gICAgaHRtbDoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsXG4gICAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgICBXZWJraXRGb250U21vb3RoaW5nOiBcImFudGlhbGlhc2VkXCIsIC8vIEFudGlhbGlhc2luZy5cbiAgICAgIE1vek9zeEZvbnRTbW9vdGhpbmc6IFwiZ3JheXNjYWxlXCIgLy8gQW50aWFsaWFzaW5nLlxuICAgIH0sXG4gICAgYm9keToge1xuICAgICAgbWFyZ2luOiAwXG4gICAgfSxcbiAgICBhOiB7XG4gICAgICBjb2xvcjogXCJpbmhlcml0XCJcbiAgICB9XG4gIH1cbn0pKTtcblxubGV0IEFwcFdyYXBwZXIgPSBwcm9wcyA9PlxuICA8ZGl2PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9kaXY+O1xuXG5BcHBXcmFwcGVyID0gd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShBcHBXcmFwcGVyKTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqc3Mtc2VydmVyLXNpZGVcIik7XG4gICAgaWYgKGpzc1N0eWxlcyAmJiBqc3NTdHlsZXMucGFyZW50Tm9kZSkge1xuICAgICAganNzU3R5bGVzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdHlsZU1hbmFnZXIsIHRoZW1lIH0gPSBnZXREZWZhdWx0Q29udGV4dCgpO1xuICAgIHJldHVybiAoXG4gICAgICA8TXVpVGhlbWVQcm92aWRlciBzdHlsZU1hbmFnZXI9e3N0eWxlTWFuYWdlcn0gdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPEFwcFdyYXBwZXI+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQXBwV3JhcHBlcj5cbiAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL0FwcC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBTb3J0YWJsZUhhbmRsZSB9IGZyb20gXCJyZWFjdC1zb3J0YWJsZS1ob2NcIjtcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSBcIm1hdGVyaWFsLXVpL0xpc3RcIjtcbmltcG9ydCBDaGVja2JveCBmcm9tIFwibWF0ZXJpYWwtdWkvQ2hlY2tib3hcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgUmVvcmRlciBmcm9tIFwibWF0ZXJpYWwtdWktaWNvbnMvUmVvcmRlclwiO1xuaW1wb3J0IERlbGV0ZUZvcmV2ZXIgZnJvbSBcIm1hdGVyaWFsLXVpLWljb25zL0RlbGV0ZUZvcmV2ZXJcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwibWF0ZXJpYWwtdWktaWNvbnMvU2V0dGluZ3NcIjtcbmltcG9ydCBGb3JtYXRMaXN0QnVsbGV0ZWQgZnJvbSBcIm1hdGVyaWFsLXVpLWljb25zL0Zvcm1hdExpc3RCdWxsZXRlZFwiO1xuaW1wb3J0IHtcblx0cmVkLFxuXHRncmV5XG59IGZyb20gXCJtYXRlcmlhbC11aS9jb2xvcnNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0J1dHRvblwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIm1hdGVyaWFsLXVpL01lbnVcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJtYXRlcmlhbC11aS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgRGl2aWRlciBmcm9tIFwibWF0ZXJpYWwtdWkvRGl2aWRlclwiO1xuaW1wb3J0IHtcblx0cHJpbWFyeUNvbG9yUGFyc2VyLFxuXHRmYWRlZENvbG9yUGFyc2VyXG59IGZyb20gXCIuLi9oZWxwZXJzL2NvbG9yUGFyc2VyLmpzXCI7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0QXJlYSBmcm9tIFwiLi9MaXN0SXRlbVRleHRBcmVhLmpzXCI7XG5pbXBvcnQgQ29sb3JNZW51IGZyb20gXCIuL0NvbG9yTWVudS5qc1wiO1xuXG5jb25zdCBEcmFnSGFuZGxlID0gU29ydGFibGVIYW5kbGUocHJvcHMgPT4ge1xuXHR2YXIgYWN0aXZlU3R5bGUgPSBwcm9wcy5jb21wbGV0ZSA/IHt9IDogeyBjdXJzb3I6IFwicG9pbnRlclwiIH07XG5cdHZhciBjZW50ZXJTdHlsZSA9IHsgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIG1hcmdpbjogMTIgfTtcblxuXHRyZXR1cm4gKFxuXHRcdDxzcGFuXG5cdFx0XHRzdHlsZT17eyAuLi5wcm9wcy5jb21wbGV0ZVN0eWxlLCAuLi5hY3RpdmVTdHlsZSwgLi4uY2VudGVyU3R5bGUgfX1cblx0XHQ+XG5cdFx0XHQ8UmVvcmRlciAvPlxuXHRcdDwvc3Bhbj5cblx0KTtcbn0pO1xuXG5jbGFzcyBCYXNlTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0b3BlbjogZmFsc2UsXG5cdFx0XHRhbmNob3JFbDogdW5kZWZpbmVkXG5cdFx0fTtcblxuXHRcdHRoaXMuY29tcGxldGVEaXNwbGF5ID0gdGhpcy5jb21wbGV0ZURpc3BsYXkuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuYmluZCh0aGlzKTtcblx0XHR0aGlzLm9wZW5NZW51ID0gdGhpcy5vcGVuTWVudS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2xvc2VNZW51ID0gdGhpcy5jbG9zZU1lbnUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNvbG9ySXRlbUNsaWNrSGFuZGxlciA9IHRoaXMuY29sb3JJdGVtQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG5cdH1cblxuXHRpdGVtID0gdGhpcy5wcm9wcy52YWx1ZTtcblxuXHRpbmNvbXBsZXRlTGlzdFN0eWxlID0ge1xuXHRcdGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yUGFyc2VyKHRoaXMuaXRlbS5jb2xvcilcblx0fTtcblx0Y29tcGxldGVMaXN0U3R5bGUgPSB7IGJhY2tncm91bmRDb2xvcjogZmFkZWRDb2xvclBhcnNlcih0aGlzLml0ZW0uY29sb3IpIH07XG5cdGNvbXBsZXRlR3JleSA9IGdyZXlbNTAwXTtcblx0Y29tcGxldGVMaW5lU3R5bGUgPSB0aGlzLml0ZW0uY29tcGxldGVcblx0XHQ/IHsgY29sb3I6IHRoaXMuY29tcGxldGVHcmV5LCB0ZXh0RGVjb3JhdGlvbjogXCJsaW5lLXRocm91Z2hcIiB9XG5cdFx0OiB7fTtcblx0Y29tcGxldGVTdHlsZSA9IHRoaXMuaXRlbS5jb21wbGV0ZVxuXHRcdD8geyBjb2xvcjogdGhpcy5jb21wbGV0ZUdyZXkgfVxuXHRcdDogeyBjb2xvcjogdGhpcy50ZXh0Q29sb3IgfTtcblxuXHRjb21wbGV0ZURpc3BsYXkoKSB7XG5cdFx0dmFyIGNvbXBsZXRlZCA9IHRoaXMuaXRlbS5jb21wbGV0ZUNoaWxkcmVuLmxlbmd0aDtcblx0XHR2YXIgdG90YWwgPSBjb21wbGV0ZWQgKyB0aGlzLml0ZW0uaW5jb21wbGV0ZUNoaWxkcmVuLmxlbmd0aDtcblx0XHR2YXIgZGlzcGxheVRleHRTdHlsZSA9IHRoaXMucHJvcHMudmFsdWUuY29tcGxldGVcblx0XHRcdD8geyBjb2xvcjogdGhpcy5jb21wbGV0ZUdyZXkgfVxuXHRcdFx0OiB7IGNvbG9yOiB0aGlzLnByb3BzLnRleHRDb2xvciB9O1xuXHRcdGlmICh0b3RhbCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0c3R5bGU9e2Rpc3BsYXlUZXh0U3R5bGV9XG5cdFx0XHRcdD57YCggJHtjb21wbGV0ZWR9IC8gJHt0b3RhbH0gY29tcGxldGUpYH08L3NwYW4+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnRlbnQoKSB7XG5cdFx0dmFyIGNvbnRlbnRUZXh0U3R5bGUgPSB0aGlzLnByb3BzLnZhbHVlLmNvbXBsZXRlXG5cdFx0XHQ/IHsgY29sb3I6IHRoaXMuY29tcGxldGVHcmV5LCB0ZXh0RGVjb3JhdGlvbjogXCJsaW5lLXRocm91Z2hcIiB9XG5cdFx0XHQ6IHsgY29sb3I6IHRoaXMucHJvcHMudGV4dENvbG9yIH07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzcGFuXG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0Li4uY29udGVudFRleHRTdHlsZSxcblx0XHRcdFx0XHR3b3JkV3JhcDogXCJicmVhay13b3JkXCIsXG5cdFx0XHRcdFx0d29yZEJyZWFrOiBcImJyZWFrLWFsbFwiXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdHt0aGlzLml0ZW0uY29udGVudH1cblx0XHRcdDwvc3Bhbj5cblx0XHQpO1xuXHR9XG5cblx0b3Blbk1lbnUoZXZlbnQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSwgYW5jaG9yRWw6IGV2ZW50LmN1cnJlbnRUYXJnZXQgfSk7XG5cdH1cblxuXHRjbG9zZU1lbnUoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuXHR9XG5cblx0Y29sb3JJdGVtQ2xpY2tIYW5kbGVyKGNvbG9yTmFtZSkge1xuXHRcdHZhciBjbG9zZSA9IHRoaXMuY2xvc2VNZW51O1xuXHRcdGxldCBjaGFuZ2VDb2xvciA9IHRoaXMucHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcihcblx0XHRcdHRoaXMuaXRlbS5pZCxcblx0XHRcdGNvbG9yTmFtZVxuXHRcdCk7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0Y2hhbmdlQ29sb3IoKTtcblx0XHRcdGNsb3NlKCk7XG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgdGV4dENvbG9yID0gdGhpcy5wcm9wcy52YWx1ZS5jb21wbGV0ZVxuXHRcdFx0PyB0aGlzLmNvbXBsZXRlR3JleVxuXHRcdFx0OiB0aGlzLnByb3BzLnRleHRDb2xvcjtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExpc3RJdGVtXG5cdFx0XHRcdGRpdmlkZXI9e3RydWV9XG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogXCJhbGwgMHMsIGJhY2tncm91bmQtY29sb3IgLjVzXCIsXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLml0ZW1Db2xvcixcblx0XHRcdFx0XHRwYWRkaW5nOiAxMlxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8RHJhZ0hhbmRsZVxuXHRcdFx0XHRcdGNvbXBsZXRlU3R5bGU9e3sgY29sb3I6IHRleHRDb2xvciB9fVxuXHRcdFx0XHRcdGNvbXBsZXRlPXt0aGlzLml0ZW0uY29tcGxldGV9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxDaGVja2JveFxuXHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuaXRlbS5jb21wbGV0ZX1cblx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyKHRoaXMuaXRlbS5pZCl9XG5cdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6IHRleHRDb2xvciB9fVxuXHRcdFx0XHQvPlxuXG5cdFx0XHRcdDxMaXN0SXRlbVRleHRBcmVhXG5cdFx0XHRcdFx0cHJpbWFyeT17dGhpcy5jb250ZW50KCl9XG5cdFx0XHRcdFx0c2Vjb25kYXJ5PXt0aGlzLmNvbXBsZXRlRGlzcGxheSgpfVxuXHRcdFx0XHRcdHRleHRDb2xvcj17dGV4dENvbG9yfVxuXHRcdFx0XHRcdHJhd1RleHQ9e3RoaXMuaXRlbS5jb250ZW50fVxuXHRcdFx0XHRcdHVwZGF0ZUl0ZW09e3RoaXMucHJvcHMudXBkYXRlSXRlbX1cblx0XHRcdFx0XHRpZD17dGhpcy5pdGVtLmlkfVxuXHRcdFx0XHRcdGNvbXBsZXRlPXt0aGlzLml0ZW0uY29tcGxldGV9XG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLmNoYW5nZUJhc2VDb21wb3Nlcih0aGlzLml0ZW0uaWQpfVxuXHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiB0ZXh0Q29sb3IgfX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxGb3JtYXRMaXN0QnVsbGV0ZWQgLz5cblx0XHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMub3Blbk1lbnV9XG5cdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6IHRleHRDb2xvciB9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFNldHRpbmdzIC8+XG5cdFx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdFx0PE1lbnVcblx0XHRcdFx0XHRpZD17YCR7dGhpcy5pdGVtLmlkfS1tZW51YH1cblx0XHRcdFx0XHRvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG5cdFx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9e3RoaXMuY2xvc2VNZW51fVxuXHRcdFx0XHRcdGFuY2hvckVsPXt0aGlzLnN0YXRlLmFuY2hvckVsfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFR5cG9ncmFwaHlcblx0XHRcdFx0XHRcdHR5cGU9e1wic3ViaGVhZGluZ1wifVxuXHRcdFx0XHRcdFx0YWxpZ249e1wiY2VudGVyXCJ9XG5cdFx0XHRcdFx0XHRzdHlsZT17eyBvdXRsaW5lOiBcIm5vbmVcIiwgcGFkZGluZ0xlZnQ6IDE2IH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0Q2hhbmdlIENvbG9yXG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHRcdDxEaXZpZGVyIC8+XG5cdFx0XHRcdFx0PENvbG9yTWVudSBjbGlja0hhbmRsZXI9e3RoaXMuY29sb3JJdGVtQ2xpY2tIYW5kbGVyfSAvPlxuXHRcdFx0XHRcdDxEaXZpZGVyIC8+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHJlZFs1MDBdLFxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogOFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLmRlbGV0ZUl0ZW1Db21wb3Nlcihcblx0XHRcdFx0XHRcdFx0XHR0aGlzLml0ZW0uaWRcblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PERlbGV0ZUZvcmV2ZXIgLz4ge1wiRGVsZXRlIEl0ZW1cIn1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHQ8L0xpc3RJdGVtPlxuXHRcdCk7XG5cdH1cbn1cblxuQmFzZUxpc3RJdGVtLnByb3BUeXBlcyA9IHtcbmRlbGV0ZUl0ZW1Db21wb3NlcjogUHJvcFR5cGVzLmZ1bmMsXG5jaGFuZ2VCYXNlQ29tcG9zZXI6IFByb3BUeXBlcy5mdW5jLFxuY29tcGxldGVJdGVtQ29tcG9zZXI6IFByb3BUeXBlcy5mdW5jLFxuaXRlbUNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxudGV4dENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxudmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG5iZ0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxudXBkYXRlSXRlbTogUHJvcFR5cGVzLmZ1bmMsXG5jaGFuZ2VDb2xvckNvbXBvc2VyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZUxpc3RJdGVtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RJdGVtLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b25cIjtcbmltcG9ydCBEb3QgZnJvbSBcIm1hdGVyaWFsLXVpLWljb25zL0JyaWdodG5lc3MxXCI7XG5cbmltcG9ydCB7IHByaW1hcnlDb2xvclBhcnNlciB9IGZyb20gXCIuLi9oZWxwZXJzL2NvbG9yUGFyc2VyLmpzXCI7XG5cbmNvbnN0IENvbG9yTWVudSA9IHByb3BzID0+IHtcblx0dmFyIGNvbG9ycyA9IFtcblx0XHRcInJlZFwiLFxuXHRcdFwicGlua1wiLFxuXHRcdFwiZGVlcFB1cnBsZVwiLFxuXHRcdFwiaW5kaWdvXCIsXG5cdFx0XCJsaWdodEJsdWVcIixcblx0XHRcImN5YW5cIixcblx0XHRcInRlYWxcIixcblx0XHRcImdyZWVuXCIsXG5cdFx0XCJsaWdodEdyZWVuXCIsXG5cdFx0XCJ5ZWxsb3dcIixcblx0XHRcIm9yYW5nZVwiLFxuXHRcdFwiZGVlcE9yYW5nZVwiXG5cdF07XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdHtjb2xvcnMubWFwKChjb2xvciwgaW5kZXgpID0+IHtcblx0XHRcdFx0dmFyIGJyZWFrTGluZSA9IGluZGV4ICUgNCA9PT0gMyA/IDxiciAvPiA6IFwiXCI7XG5cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0a2V5PXtgJHtjb2xvcn0tJHtpbmRleH1gfVxuXHRcdFx0XHRcdFx0b25DbGljaz17cHJvcHMuY2xpY2tIYW5kbGVyKGNvbG9yKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogcHJpbWFyeUNvbG9yUGFyc2VyKGNvbG9yKSB9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8RG90IC8+XG5cdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XG5cdFx0XHRcdFx0XHR7YnJlYWtMaW5lfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KTtcblx0XHRcdH0pfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuQ29sb3JNZW51LnByb3BUeXBlcyA9IHtcblx0Y2xpY2tIYW5kbGVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JNZW51O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0NvbG9yTWVudS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL3RvZG8tbGlzdC9zcmMvQXBwLmpzXCI7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4uL3RvZG8tbGlzdC9zcmMvaW5kZXguanNcIjtcblxuY2xhc3MgVG9kbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XG4gICAgcmV0dXJuIHsgcXVlcnkgfTtcbiAgfVxuXG4gIHNlZWRTdGF0ZSA9IHtcbiAgICBpdGVtczogdGhpcy5wcm9wcy5xdWVyeS5pbml0aWFsU3RhdGUuaXRlbXMsXG4gICAgYmFzZUl0ZW06IHRoaXMucHJvcHMucXVlcnkuaW5pdGlhbFN0YXRlLmJhc2VJdGVtXG4gIH07XG4gIGxpc3RJRCA9IHRoaXMucHJvcHMucXVlcnkuaW5pdGlhbFN0YXRlLl9pZDtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcHA+XG4gICAgICAgIDxUb2RvTGlzdCBzZWVkU3RhdGU9e3RoaXMuc2VlZFN0YXRlfSBsaXN0SUQ9e3RoaXMubGlzdElEfSAvPlxuICAgICAgPC9BcHA+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdG9kby5qcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG4vLyBpbXBvcnQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIGZyb20gXCIuL3JlZ2lzdGVyU2VydmljZVdvcmtlclwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCByZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcbmltcG9ydCBUb2RvQ29udGFpbmVyIGZyb20gXCIuL2NvbnRhaW5lcnMvVG9kb0NvbnRhaW5lci5qc1wiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuXG5jb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmspKShcblx0Y3JlYXRlU3RvcmVcbik7XG5cbmNvbnN0IEJvaWxlciA9IHByb3BzID0+XG5cdDxQcm92aWRlciBzdG9yZT17Y3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZShyZWR1Y2VycywgcHJvcHMuc2VlZFN0YXRlKX0+XG5cdFx0PFRvZG9Db250YWluZXIgbGlzdElEPXtwcm9wcy5saXN0SUR9IC8+XG5cdDwvUHJvdmlkZXI+O1xuXG4vLyBSZWFjdERPTS5yZW5kZXIoPEJvaWxlciAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcbi8vIHJlZ2lzdGVyU2VydmljZVdvcmtlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBCb2lsZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2luZGV4LmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgaXRlbXMgZnJvbSBcIi4vaXRlbXNfcmVkdWNlci5qc1wiO1xuaW1wb3J0IGJhc2VJdGVtIGZyb20gXCIuL2Jhc2VJdGVtX3JlZHVjZXIuanNcIjtcbmltcG9ydCBuZXR3b3JrIGZyb20gXCIuL25ldHdvcmtfcmVkdWNlci5qc1wiO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG5cdGl0ZW1zLFxuXHRiYXNlSXRlbSxcblx0bmV0d29ya1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7XG5cdE5FV19JVEVNLFxuXHRDT01QTEVURV9JVEVNLFxuXHRERUxFVEVfSVRFTSxcblx0UkVPUkRFUl9JVEVNLFxuXHRDSEFOR0VfQ09MT1IsXG5cdFVQREFURV9JVEVNLFxuXHRVUERBVEVfREFUQVxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuXG5mdW5jdGlvbiBpdGVtcyhzdGF0ZSA9IHNlZWREYXRhLCBhY3Rpb24pIHtcblx0dmFyIGlkLCBuZXdTdGF0ZSwgbmV3SUQsIG5ld0l0ZW0sIHBhcmVudElEO1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBORVdfSVRFTTpcblx0XHRcdG5ld0lEID0gcmFuZG9tSUQoKTtcblx0XHRcdHBhcmVudElEID0gYWN0aW9uLnBheWxvYWQucGFyZW50O1xuXHRcdFx0bmV3SXRlbSA9IHtcblx0XHRcdFx0W25ld0lEXToge1xuXHRcdFx0XHRcdGlkOiBuZXdJRCxcblx0XHRcdFx0XHRjb250ZW50OiBhY3Rpb24ucGF5bG9hZC5jb250ZW50LFxuXHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRcdFx0XHRjb2xvcjogXCJsaWdodEJsdWVcIixcblx0XHRcdFx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRcdFx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdFx0XHRcdHBhcmVudDogcGFyZW50SURcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHZhciBuZXdQYXJlbnQgPSB7IFtwYXJlbnRJRF06IGFkZENoaWxkKHN0YXRlW3BhcmVudElEXSwgbmV3SUQpIH07XG5cdFx0XHRuZXdTdGF0ZSA9IF8ubWVyZ2Uoe30sIHN0YXRlLCBuZXdJdGVtLCBuZXdQYXJlbnQpO1xuXHRcdFx0cmV0dXJuIG5ld1N0YXRlO1xuXG5cdFx0Y2FzZSBDT01QTEVURV9JVEVNOlxuXHRcdFx0aWQgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUpO1xuXHRcdFx0bmV3SXRlbSA9IHsgW2lkXTogbmV3U3RhdGVbaWRdIH07XG5cdFx0XHRwYXJlbnRJRCA9IG5ld0l0ZW1baWRdLnBhcmVudDtcblx0XHRcdG5ld0l0ZW1baWRdLmNvbXBsZXRlID0gIW5ld0l0ZW1baWRdLmNvbXBsZXRlO1xuXHRcdFx0aWYgKG5ld0l0ZW1baWRdLmNvbXBsZXRlKSB7XG5cdFx0XHRcdF8ucHVsbChuZXdTdGF0ZVtwYXJlbnRJRF0uaW5jb21wbGV0ZUNoaWxkcmVuLCBpZCk7XG5cdFx0XHRcdG5ld1N0YXRlW3BhcmVudElEXS5jb21wbGV0ZUNoaWxkcmVuLnVuc2hpZnQoaWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Xy5wdWxsKG5ld1N0YXRlW3BhcmVudElEXS5jb21wbGV0ZUNoaWxkcmVuLCBpZCk7XG5cdFx0XHRcdG5ld1N0YXRlW3BhcmVudElEXS5pbmNvbXBsZXRlQ2hpbGRyZW4ucHVzaChpZCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gXy5tZXJnZShuZXdTdGF0ZSwgbmV3SXRlbSk7XG5cblx0XHRjYXNlIERFTEVURV9JVEVNOlxuXHRcdFx0aWQgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUpO1xuXHRcdFx0dmFyIHBhcmVudCA9IHN0YXRlW2lkXS5wYXJlbnQ7XG5cdFx0XHRuZXdTdGF0ZSA9IF8ub21pdChuZXdTdGF0ZSwgZ2VuZXJhdGVDaGlsZExpc3Qoc3RhdGUsIGlkKSk7XG5cdFx0XHRuZXdTdGF0ZVtwYXJlbnRdLmNvbXBsZXRlQ2hpbGRyZW4gPSBfLmZpbHRlcihcblx0XHRcdFx0bmV3U3RhdGVbcGFyZW50XS5jb21wbGV0ZUNoaWxkcmVuLFxuXHRcdFx0XHRuID0+IG4gIT09IGlkXG5cdFx0XHQpO1xuXHRcdFx0bmV3U3RhdGVbcGFyZW50XS5pbmNvbXBsZXRlQ2hpbGRyZW4gPSBfLmZpbHRlcihcblx0XHRcdFx0bmV3U3RhdGVbcGFyZW50XS5pbmNvbXBsZXRlQ2hpbGRyZW4sXG5cdFx0XHRcdG4gPT4gbiAhPT0gaWRcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gbmV3U3RhdGU7XG5cblx0XHRjYXNlIFJFT1JERVJfSVRFTTpcblx0XHRcdG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUpO1xuXHRcdFx0cGFyZW50SUQgPSBhY3Rpb24ucGF5bG9hZC5wYXJlbnRJRDtcblx0XHRcdG5ld1N0YXRlW3BhcmVudElEXS5pbmNvbXBsZXRlQ2hpbGRyZW4gPSByZW9yZGVyKFxuXHRcdFx0XHRuZXdTdGF0ZVtwYXJlbnRJRF0uaW5jb21wbGV0ZUNoaWxkcmVuLFxuXHRcdFx0XHRhY3Rpb24ucGF5bG9hZC5vbGRJbmRleCxcblx0XHRcdFx0YWN0aW9uLnBheWxvYWQubmV3SW5kZXhcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gbmV3U3RhdGU7XG5cblx0XHRjYXNlIENIQU5HRV9DT0xPUjpcblx0XHRcdG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUpO1xuXHRcdFx0bmV3U3RhdGVbYWN0aW9uLnBheWxvYWQuaWRdLmNvbG9yID0gYWN0aW9uLnBheWxvYWQuY29sb3I7XG5cdFx0XHRyZXR1cm4gbmV3U3RhdGU7XG5cblx0XHRjYXNlIFVQREFURV9JVEVNOlxuXHRcdFx0bmV3U3RhdGUgPSBfLm1lcmdlKHt9LCBzdGF0ZSk7XG5cdFx0XHRuZXdTdGF0ZVthY3Rpb24ucGF5bG9hZC5pZF0uY29udGVudCA9IGFjdGlvbi5wYXlsb2FkLm5ld1RleHQ7XG5cdFx0XHRyZXR1cm4gbmV3U3RhdGU7XG5cblx0XHRjYXNlIFVQREFURV9EQVRBOlxuXHRcdFx0Y29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpO1xuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBpdGVtcztcblxuLy8gLy8gU3RydWN0dXJlIG9mIEl0ZW1zXG4vLyBpZDoge1xuLy8gXHRjb250ZW50OlN0cmluZyxcbi8vIFx0cGFyZW50OmlkLFxuLy8gXHRjaGlsZHJlbjpbaWQsaWQsaWQuLi5dXG4vLyB9XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2hpbGRMaXN0KHN0YXRlLCBiYXNlSUQpIHtcblx0dmFyIGxpc3QgPSBbYmFzZUlEXTtcblx0bGlzdCA9IGxpc3Rcblx0XHQuY29uY2F0KHN0YXRlW2Jhc2VJRF0uY29tcGxldGVDaGlsZHJlbilcblx0XHQuY29uY2F0KHN0YXRlW2Jhc2VJRF0uaW5jb21wbGV0ZUNoaWxkcmVuKTtcblx0Zm9yICh2YXIgaSA9IDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bGlzdCA9IGxpc3Rcblx0XHRcdC5jb25jYXQoc3RhdGVbbGlzdFtpXV0uY29tcGxldGVDaGlsZHJlbilcblx0XHRcdC5jb25jYXQoc3RhdGVbbGlzdFtpXV0uaW5jb21wbGV0ZUNoaWxkcmVuKTtcblx0fVxuXHRyZXR1cm4gbGlzdDtcbn1cblxuZnVuY3Rpb24gcmFuZG9tSUQoKSB7XG5cdHJldHVybiBfLnJhbmRvbSgwLCA2NTUwMCwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZChpdGVtLCBjaGlsZCkge1xuXHRyZXR1cm4gXy5tZXJnZSh7fSwgaXRlbSwge1xuXHRcdGluY29tcGxldGVDaGlsZHJlbjogaXRlbS5pbmNvbXBsZXRlQ2hpbGRyZW4uY29uY2F0KGNoaWxkKVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVvcmRlcihhcnIsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuXHR2YXIgaXRlbSA9IGFycltvbGRJbmRleF07XG5cdGFyci5zcGxpY2Uob2xkSW5kZXgsIDEpO1xuXHRhcnIuc3BsaWNlKG5ld0luZGV4LCAwLCBpdGVtKTtcblx0cmV0dXJuIGFycjtcbn1cblxuY29uc3Qgc2VlZERhdGEgPSB7XG5cdDEwMDE6IHtcblx0XHRpZDogMTAwMSxcblx0XHRjb250ZW50OiBcIlJhbmRvbSBzZWVkIDFcIixcblx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0Y29sb3I6IFwicmVkXCIsXG5cdFx0cGFyZW50OiBcInJvb3RcIixcblx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFsxMDA0XVxuXHR9LFxuXHQxMDAyOiB7XG5cdFx0aWQ6IDEwMDIsXG5cdFx0Y29udGVudDogXCJSYW5kb20gc2VlZCAyXCIsXG5cdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdGNvbG9yOiBcInJlZFwiLFxuXHRcdHBhcmVudDogXCJyb290XCIsXG5cdFx0Y29tcGxldGVDaGlsZHJlbjogW10sXG5cdFx0aW5jb21wbGV0ZUNoaWxkcmVuOiBbMTAwM11cblx0fSxcblx0MTAwMzoge1xuXHRcdGlkOiAxMDAzLFxuXHRcdGNvbnRlbnQ6IFwiUmFuZG9tIHNlZWQgM1wiLFxuXHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRjb2xvcjogXCJyZWRcIixcblx0XHRwYXJlbnQ6IDEwMDIsXG5cdFx0Y29tcGxldGVDaGlsZHJlbjogW10sXG5cdFx0aW5jb21wbGV0ZUNoaWxkcmVuOiBbXVxuXHR9LFxuXHQxMDA0OiB7XG5cdFx0aWQ6IDEwMDQsXG5cdFx0Y29udGVudDogXCJSYW5kb20gc2VlZCA0XCIsXG5cdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdGNvbG9yOiBcInJlZFwiLFxuXHRcdHBhcmVudDogMTAwMSxcblx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFtdXG5cdH0sXG5cdDEwMDU6IHtcblx0XHRpZDogMTAwNSxcblx0XHRjb250ZW50OiBcIlJhbmRvbSBzZWVkIDVcIixcblx0XHRjb21wbGV0ZTogdHJ1ZSxcblx0XHRjb2xvcjogXCJyZWRcIixcblx0XHRwYXJlbnQ6IFwicm9vdFwiLFxuXHRcdGNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdGluY29tcGxldGVDaGlsZHJlbjogW11cblx0fSxcblx0cm9vdDoge1xuXHRcdGNvbG9yOiBcInJlZFwiLFxuXHRcdGNvbXBsZXRlQ2hpbGRyZW46IFsxMDA1XSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFsxMDAxLCAxMDAyXVxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9pdGVtc19yZWR1Y2VyLmpzIiwiaW1wb3J0IHsgQ0hBTkdFX0JBU0UgfSBmcm9tIFwiLi4vYWN0aW9ucy9cIjtcblxuZnVuY3Rpb24gYmFzZUl0ZW0oc3RhdGUgPSBcInJvb3RcIiwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIENIQU5HRV9CQVNFOlxuXHRcdFx0cmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUl0ZW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL2Jhc2VJdGVtX3JlZHVjZXIuanMiLCJpbXBvcnQgeyBVUERBVEVfUFJPR1JFU1MsIFVQREFURV9TVUNDRVNTLCBVUERBVEVfRVJST1IgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXR3b3JrKHN0YXRlID0gXCJzdWNjZXNzXCIsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBVUERBVEVfRVJST1I6XG5cdFx0XHRyZXR1cm4gXCJlcnJvclwiO1xuXG5cdFx0Y2FzZSBVUERBVEVfU1VDQ0VTUzpcblx0XHRcdHJldHVybiBcInN1Y2Nlc3NcIjtcblxuXHRcdGNhc2UgVVBEQVRFX1BST0dSRVNTOlxuXHRcdFx0cmV0dXJuIFwicHJvZ3Jlc3NcIjtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvcmVkdWNlcnMvbmV0d29ya19yZWR1Y2VyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcblx0bmV3SXRlbSxcblx0Y2hhbmdlQmFzZUl0ZW0sXG5cdGNvbXBsZXRlSXRlbSxcblx0ZGVsZXRlSXRlbSxcblx0cmVvcmRlckl0ZW0sXG5cdGNoYW5nZUNvbG9yLFxuXHR1cGRhdGVJdGVtLFxuXHR1cGRhdGVEYXRhVGhyb3R0bGVkXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0SXRlbS9zdHlsZS5jc3NcIjtcbmltcG9ydCBMaXN0SGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RIZWFkZXIuanNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCJtYXRlcmlhbC11aS9DYXJkXCI7XG4vLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuXG5jb25zdCBzdHlsZVNoZWV0ID0gY3JlYXRlU3R5bGVTaGVldChcIkNhcmRDb250YWluZXJcIiwge1xuXHRjYXJkOiB7XG5cdFx0bWFyZ2luOiAwXG5cdH0sXG5cdFwiQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpXCI6IHtcblx0XHRjYXJkOiB7XG5cdFx0XHRtYXJnaW46IDE2XG5cdFx0fVxuXHR9XG59KTtcblxuY2xhc3MgVG9kb0NvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuZXdJdGVtOiBcIlwiXG5cdFx0fTtcblx0XHR0aGlzLmlucHV0VXBkYXRlID0gdGhpcy5pbnB1dFVwZGF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMubmV3SXRlbUFjdGlvbiA9IHRoaXMubmV3SXRlbUFjdGlvbi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2hhbmdlQmFzZUNvbXBvc2VyID0gdGhpcy5jaGFuZ2VCYXNlQ29tcG9zZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNvbXBsZXRlSXRlbUNvbXBvc2VyID0gdGhpcy5jb21wbGV0ZUl0ZW1Db21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZGVsZXRlSXRlbUNvbXBvc2VyID0gdGhpcy5kZWxldGVJdGVtQ29tcG9zZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlb3JkZXJJdGVtQ29tcG9zZXIgPSB0aGlzLnJlb3JkZXJJdGVtQ29tcG9zZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmdlbmVyYXRlQ29tcGxldGUgPSB0aGlzLmdlbmVyYXRlQ29tcGxldGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNoYW5nZUNvbG9yQ29tcG9zZXIgPSB0aGlzLmNoYW5nZUNvbG9yQ29tcG9zZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLnVwZGF0ZUl0ZW1EaXNwYXRjaCA9IHRoaXMudXBkYXRlSXRlbURpc3BhdGNoLmJpbmQodGhpcyk7XG5cdFx0dGhpcy51cGRhdGVEYXRhRGlzcGF0Y2ggPSB0aGlzLnVwZGF0ZURhdGFEaXNwYXRjaC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aW5wdXRVcGRhdGUoZXZlbnQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgbmV3SXRlbTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuXHR9XG5cblx0bmV3SXRlbUFjdGlvbihjb250ZW50KSB7XG5cdFx0dGhpcy5wcm9wcy5uZXdJdGVtKGNvbnRlbnQsIHRoaXMucHJvcHMuYmFzZUl0ZW0pO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBuZXdJdGVtOiBcIlwiIH0sICgpID0+IHt9KTtcblx0fVxuXG5cdGNoYW5nZUJhc2VDb21wb3NlcihpZCkge1xuXHRcdHZhciBjaGFuZ2VCYXNlSXRlbSA9IHRoaXMucHJvcHMuY2hhbmdlQmFzZUl0ZW07XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0Y2hhbmdlQmFzZUl0ZW0oaWQpO1xuXHRcdH07XG5cdH1cblxuXHRkZWxldGVJdGVtQ29tcG9zZXIoaWQpIHtcblx0XHRsZXQgZGVsZXRlSXRlbURpc3BhdGNoID0gdGhpcy5wcm9wcy5kZWxldGVJdGVtO1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdGRlbGV0ZUl0ZW1EaXNwYXRjaChpZCk7XG5cdFx0fTtcblx0fVxuXG5cdGNvbXBsZXRlSXRlbUNvbXBvc2VyKGlkKSB7XG5cdFx0bGV0IGNvbXBsZXRlSXRlbURpc3BhdGNoID0gdGhpcy5wcm9wcy5jb21wbGV0ZUl0ZW07XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcGxldGVJdGVtRGlzcGF0Y2goaWQpO1xuXHRcdH07XG5cdH1cblxuXHRyZW9yZGVySXRlbUNvbXBvc2VyKGlkLCBvbGRJbmRleCwgbmV3SW5kZXgpIHtcblx0XHRsZXQgcmVvcmRlckl0ZW1EaXNwYXRjaCA9IHRoaXMucHJvcHMucmVvcmRlckl0ZW07XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVvcmRlckl0ZW1EaXNwYXRjaChpZCwgb2xkSW5kZXgsIG5ld0luZGV4KTtcblx0XHR9O1xuXHR9XG5cblx0Z2VuZXJhdGVDb21wbGV0ZSgpIHtcblx0XHR2YXIgY29tcGxldGVDb3VudCA9IHRoaXMucHJvcHMuaXRlbXNbdGhpcy5wcm9wcy5iYXNlSXRlbV1cblx0XHRcdC5jb21wbGV0ZUNoaWxkcmVuLmxlbmd0aDtcblx0XHR2YXIgdG90YWxDb3VudCA9XG5cdFx0XHR0aGlzLnByb3BzLml0ZW1zW3RoaXMucHJvcHMuYmFzZUl0ZW1dLmluY29tcGxldGVDaGlsZHJlbi5sZW5ndGggK1xuXHRcdFx0Y29tcGxldGVDb3VudDtcblx0XHRyZXR1cm4gYCggJHtjb21wbGV0ZUNvdW50fSAvICR7dG90YWxDb3VudH0gQ29tcGxldGUgKWA7XG5cdH1cblxuXHRjaGFuZ2VDb2xvckNvbXBvc2VyKGlkLCBjb2xvcikge1xuXHRcdGxldCBjaGFuZ2VDb2xvckRpc3BhdGNoID0gdGhpcy5wcm9wcy5jaGFuZ2VDb2xvcjtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRjaGFuZ2VDb2xvckRpc3BhdGNoKGlkLCBjb2xvcik7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZUl0ZW1EaXNwYXRjaChpZCwgbmV3VGV4dCkge1xuXHRcdHRoaXMucHJvcHMudXBkYXRlSXRlbShpZCwgbmV3VGV4dCk7XG5cdH1cblxuXHR1cGRhdGVEYXRhRGlzcGF0Y2goKSB7XG5cdFx0Y29uc3QgaWQgPSB0aGlzLnByb3BzLmxpc3RJRDtcblx0XHRjb25zdCBuZXdTdGF0ZSA9IHtcblx0XHRcdGl0ZW1zOiB0aGlzLnByb3BzLml0ZW1zLFxuXHRcdFx0YmFzZUl0ZW06IHRoaXMucHJvcHMuYmFzZUl0ZW1cblx0XHR9O1xuXHRcdHRoaXMucHJvcHMudXBkYXRlRGF0YShpZCwgeyBpZCwgbmV3U3RhdGUgfSk7XG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0dGhpcy51cGRhdGVEYXRhRGlzcGF0Y2goKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgY3VycmVudEl0ZW0gPSB0aGlzLnByb3BzLml0ZW1zW3RoaXMucHJvcHMuYmFzZUl0ZW1dO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Q2FyZCBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3Nlcy5jYXJkfT5cblx0XHRcdFx0PExpc3RIZWFkZXJcblx0XHRcdFx0XHRiYXNlSXRlbT17dGhpcy5wcm9wcy5iYXNlSXRlbX1cblx0XHRcdFx0XHRiYXNlSXRlbVRleHQ9e2N1cnJlbnRJdGVtLmNvbnRlbnR9XG5cdFx0XHRcdFx0Y3VycmVudFBhcmVudD17Y3VycmVudEl0ZW0ucGFyZW50fVxuXHRcdFx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17dGhpcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3Nlcj17dGhpcy5jaGFuZ2VDb2xvckNvbXBvc2VyfVxuXHRcdFx0XHRcdGNvdW50ZXJUZXh0PXt0aGlzLmdlbmVyYXRlQ29tcGxldGUoKX1cblx0XHRcdFx0XHRpdGVtcz17dGhpcy5wcm9wcy5pdGVtc31cblx0XHRcdFx0XHRuZXdJdGVtQWN0aW9uPXt0aGlzLm5ld0l0ZW1BY3Rpb259XG5cdFx0XHRcdFx0dXBkYXRlSXRlbT17dGhpcy51cGRhdGVJdGVtRGlzcGF0Y2h9XG5cdFx0XHRcdFx0dXBkYXRlRGF0YT17dGhpcy51cGRhdGVEYXRhRGlzcGF0Y2h9XG5cdFx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3RoaXMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxMaXN0XG5cdFx0XHRcdFx0aXRlbXM9e3RoaXMucHJvcHMuaXRlbXN9XG5cdFx0XHRcdFx0YmFzZUl0ZW09e3RoaXMucHJvcHMuYmFzZUl0ZW19XG5cdFx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXt0aGlzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0XHRkZWxldGVJdGVtQ29tcG9zZXI9e3RoaXMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdGNvbXBsZXRlSXRlbUNvbXBvc2VyPXt0aGlzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdHJlb3JkZXJJdGVtQ29tcG9zZXI9e3RoaXMucmVvcmRlckl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0XHRjaGFuZ2VDb2xvckNvbXBvc2VyPXt0aGlzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdFx0dXBkYXRlSXRlbT17dGhpcy51cGRhdGVJdGVtRGlzcGF0Y2h9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0NhcmQ+XG5cdFx0KTtcblx0fVxufVxuXG5Ub2RvQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcblx0YmFzZUl0ZW06IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblx0aXRlbXM6IFByb3BUeXBlcy5vYmplY3QsXG5cdGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cdGxpc3RJRDogUHJvcFR5cGVzLnN0cmluZyxcblx0bmV3SXRlbTogUHJvcFR5cGVzLmZ1bmMsXG5cdGNoYW5nZUJhc2VJdGVtOiBQcm9wVHlwZXMuZnVuYyxcblx0Y29tcGxldGVJdGVtOiBQcm9wVHlwZXMuZnVuYyxcblx0ZGVsZXRlSXRlbTogUHJvcFR5cGVzLmZ1bmMsXG5cdHJlb3JkZXJJdGVtOiBQcm9wVHlwZXMuZnVuYyxcblx0Y2hhbmdlQ29sb3I6IFByb3BUeXBlcy5mdW5jLFxuXHR1cGRhdGVJdGVtOiBQcm9wVHlwZXMuZnVuYyxcblx0dXBkYXRlRGF0YTogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IGl0ZW1zLCBiYXNlSXRlbSB9KSB7XG5cdHJldHVybiB7IGl0ZW1zLCBiYXNlSXRlbSB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcblx0cmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcblx0XHR7XG5cdFx0XHRuZXdJdGVtLFxuXHRcdFx0Y2hhbmdlQmFzZUl0ZW0sXG5cdFx0XHRjb21wbGV0ZUl0ZW0sXG5cdFx0XHRkZWxldGVJdGVtLFxuXHRcdFx0cmVvcmRlckl0ZW0sXG5cdFx0XHRjaGFuZ2VDb2xvcixcblx0XHRcdHVwZGF0ZUl0ZW0sXG5cdFx0XHR1cGRhdGVEYXRhOiB1cGRhdGVEYXRhVGhyb3R0bGVkXG5cdFx0fSxcblx0XHRkaXNwYXRjaFxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlU2hlZXQpKFxuXHRjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUb2RvQ29udGFpbmVyKVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29udGFpbmVycy9Ub2RvQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBJbmNvbXBsZXRlTGlzdCBmcm9tIFwiLi9JbmNvbXBsZXRlTGlzdC5qc1wiO1xuaW1wb3J0IENvbXBsZXRlTGlzdCBmcm9tIFwiLi9Db21wbGV0ZUxpc3QuanNcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlU2hlZXQgfSBmcm9tIFwibWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBjcmVhdGVTdHlsZVNoZWV0KFwiTGlzdFwiLCB7XG5cdGNvbnRhaW5lcjoge31cbn0pO1xuXG5jb25zdCBMaXN0ID0gcHJvcHMgPT4ge1xuXHRjb25zdCBpdGVtc0xpc3QgPSBwcm9wcy5pdGVtcztcblx0Y29uc3QgYmFzZUl0ZW0gPSBwcm9wcy5iYXNlSXRlbTtcblx0bGV0IGNvbXBsZXRlTGlzdEl0ZW1zID0gaXRlbXNMaXN0W2Jhc2VJdGVtXS5jb21wbGV0ZUNoaWxkcmVuO1xuXHRsZXQgaW5jb21wbGV0ZUxpc3RJdGVtcyA9IGl0ZW1zTGlzdFtiYXNlSXRlbV0uaW5jb21wbGV0ZUNoaWxkcmVuO1xuXG5cdGNvbXBsZXRlTGlzdEl0ZW1zID0gcG9wdWxhdGVMaXN0KGNvbXBsZXRlTGlzdEl0ZW1zKTtcblx0aW5jb21wbGV0ZUxpc3RJdGVtcyA9IHBvcHVsYXRlTGlzdChpbmNvbXBsZXRlTGlzdEl0ZW1zKTtcblxuXHRmdW5jdGlvbiBwb3B1bGF0ZUxpc3QobGlzdEFycikge1xuXHRcdHJldHVybiBsaXN0QXJyLm1hcChsaXN0SUQgPT4gaXRlbXNMaXN0W2xpc3RJRF0pO1xuXHR9XG5cblx0Y29uc3QgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXM7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuXHRcdFx0PEluY29tcGxldGVMaXN0XG5cdFx0XHRcdGl0ZW1zPXtpbmNvbXBsZXRlTGlzdEl0ZW1zfVxuXHRcdFx0XHRwYXJlbnRJRD17cHJvcHMuYmFzZUl0ZW19XG5cdFx0XHRcdHJlbmRlckNoaWxkcmVuPXt0cnVlfVxuXHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0ZGVsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdGNvbXBsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0cmVvcmRlckl0ZW1Db21wb3Nlcj17cHJvcHMucmVvcmRlckl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3Nlcj17cHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0dXBkYXRlSXRlbT17cHJvcHMudXBkYXRlSXRlbX1cblx0XHRcdC8+XG5cdFx0XHQ8Q29tcGxldGVMaXN0XG5cdFx0XHRcdGl0ZW1zPXtjb21wbGV0ZUxpc3RJdGVtc31cblx0XHRcdFx0cGFyZW50SUQ9e3Byb3BzLmJhc2VJdGVtfVxuXHRcdFx0XHRyZW5kZXJDaGlsZHJlbj17dHJ1ZX1cblx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXtwcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdHJlb3JkZXJJdGVtQ29tcG9zZXI9e3Byb3BzLnJlb3JkZXJJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdHVwZGF0ZUl0ZW09e3Byb3BzLnVwZGF0ZUl0ZW19XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuTGlzdC5wcm9wVHlwZXMgPSB7XG5cdGl0ZW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRiYXNlSXRlbTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXHR1cGRhdGVJdGVtOiBQcm9wVHlwZXMuZnVuYyxcblx0Y2hhbmdlQ29sb3JDb21wb3NlcjogUHJvcFR5cGVzLmZ1bmMsXG5cdHJlb3JkZXJJdGVtQ29tcG9zZXI6IFByb3BUeXBlcy5mdW5jLFxuXHRjb21wbGV0ZUl0ZW1Db21wb3NlcjogUHJvcFR5cGVzLmZ1bmMsXG5cdGRlbGV0ZUl0ZW1Db21wb3NlcjogUHJvcFR5cGVzLmZ1bmMsXG5cdGNoYW5nZUJhc2VDb21wb3NlcjogUHJvcFR5cGVzLmZ1bmMsXG5cdGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVTaGVldCkoTGlzdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIGltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IFNvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUVsZW1lbnQgfSBmcm9tIFwicmVhY3Qtc29ydGFibGUtaG9jXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vTGlzdEl0ZW0uanNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCJtYXRlcmlhbC11aS9MaXN0XCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IHsgcHJpbWFyeUNvbG9yUGFyc2VyLCB0ZXh0Q29sb3JQYXJzZXIgfSBmcm9tIFwiLi4vaGVscGVycy9jb2xvclBhcnNlci5qc1wiO1xuXG5jb25zdCBzdHlsZVNoZWV0ID0gY3JlYXRlU3R5bGVTaGVldChcIkluY29tcGxldGVMaXN0XCIsIHtcblx0Y29udGFpbmVyOiB7XG5cdFx0bGlzdFN0eWxlOiBcIm5vbmVcIixcblx0XHRwYWRkaW5nOiAwLFxuXHRcdG1hcmdpbjogMFxuXHR9LFxuXHRyb290OiB7XG5cdFx0cGFkZGluZzogMFxuXHR9LFxuXHRoZWxwZXI6IHtcblx0XHR0cmFuc2l0aW9uOiAwXG5cdH1cbn0pO1xuXG5jb25zdCBTb3J0YWJsZUxpc3QgPSBTb3J0YWJsZUNvbnRhaW5lcihwcm9wcyA9PiB7XG5cdHJldHVybiAoXG5cdFx0PExpc3QgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc0Zvckxpc3R9PlxuXHRcdFx0e3Byb3BzLml0ZW1zLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PFNvcnRhYmxlTGlzdEl0ZW1cblx0XHRcdFx0XHRcdGtleT17YGl0ZW0tJHt2YWx1ZS5pZH1gfVxuXHRcdFx0XHRcdFx0aW5kZXg9e2luZGV4fVxuXHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXtwcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRkZWxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmRlbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0XHRcdGNvbXBsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRiZ0NvbG9yQ29tcG9zZXI9e3Byb3BzLmJnQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0XHRcdHRleHRDb2xvckNvbXBvc2VyPXtwcm9wcy50ZXh0Q29sb3JDb21wb3Nlcn1cblx0XHRcdFx0XHRcdHVwZGF0ZUl0ZW09e3Byb3BzLnVwZGF0ZUl0ZW19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH0pfVxuXHRcdDwvTGlzdD5cblx0KTtcbn0pO1xuXG5jb25zdCBTb3J0YWJsZUxpc3RJdGVtID0gU29ydGFibGVFbGVtZW50KHByb3BzID0+IHtcblx0cmV0dXJuIChcblx0XHQ8TGlzdEl0ZW1cblx0XHRcdHZhbHVlPXtwcm9wcy52YWx1ZX1cblx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0ZGVsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRjaGFuZ2VDb2xvckNvbXBvc2VyPXtwcm9wcy5jaGFuZ2VDb2xvckNvbXBvc2VyfVxuXHRcdFx0aXRlbUNvbG9yPXtwcm9wcy5iZ0NvbG9yQ29tcG9zZXIocHJvcHMudmFsdWUuY29sb3IpfVxuXHRcdFx0dGV4dENvbG9yPXtwcm9wcy50ZXh0Q29sb3JDb21wb3Nlcihcblx0XHRcdFx0cHJvcHMudmFsdWUuY29sb3IsXG5cdFx0XHRcdHByb3BzLnZhbHVlLmNvbXBsZXRlXG5cdFx0XHQpfVxuXHRcdFx0dXBkYXRlSXRlbT17cHJvcHMudXBkYXRlSXRlbX1cblx0XHQvPlxuXHQpO1xufSk7XG5cbmNvbnN0IEluY29tcGxldGVMaXN0ID0gcHJvcHMgPT4ge1xuXHRjb25zdCBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcztcblxuXHRmdW5jdGlvbiBoYW5kbGVTb3J0KHsgb2xkSW5kZXgsIG5ld0luZGV4IH0pIHtcblx0XHRwcm9wcy5yZW9yZGVySXRlbUNvbXBvc2VyKHByb3BzLnBhcmVudElELCBvbGRJbmRleCwgbmV3SW5kZXgpKCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8U29ydGFibGVMaXN0XG5cdFx0XHRcdGl0ZW1zPXtwcm9wcy5pdGVtc31cblx0XHRcdFx0dXNlRHJhZ0hhbmRsZT17dHJ1ZX1cblx0XHRcdFx0b25Tb3J0RW5kPXtoYW5kbGVTb3J0fVxuXHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0ZGVsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdGNvbXBsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0Y2xhc3NGb3JMaXN0PXtjbGFzc2VzLnJvb3R9XG5cdFx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdGJnQ29sb3JDb21wb3Nlcj17cHJpbWFyeUNvbG9yUGFyc2VyfVxuXHRcdFx0XHR0ZXh0Q29sb3JDb21wb3Nlcj17dGV4dENvbG9yUGFyc2VyfVxuXHRcdFx0XHR1cGRhdGVJdGVtPXtwcm9wcy51cGRhdGVJdGVtfVxuXHRcdFx0XHRoZWxwZXJDbGFzcz17cHJvcHMuY2xhc3Nlcy5oZWxwZXJ9XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuSW5jb21wbGV0ZUxpc3QucHJvcFR5cGVzID0ge1xuXHRjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXHR1cGRhdGVJdGVtOiBQcm9wVHlwZXMuZnVuYyxcblx0Y2hhbmdlQ29sb3JDb21wb3NlcjogUHJvcFR5cGVzLmZ1bmMsXG5cdGNvbXBsZXRlSXRlbUNvbXBvc2VyOiBQcm9wVHlwZXMuZnVuYyxcblx0ZGVsZXRlSXRlbUNvbXBvc2VyOiBQcm9wVHlwZXMuZnVuYyxcblx0Y2hhbmdlQmFzZUNvbXBvc2VyOiBQcm9wVHlwZXMuZnVuYyxcblx0aXRlbXM6IFByb3BUeXBlcy5hcnJheSxcblx0cmVvcmRlckl0ZW1Db21wb3NlcjogUHJvcFR5cGVzLmZ1bmMsXG5cdHBhcmVudElEOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVTaGVldCkoSW5jb21wbGV0ZUxpc3QpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0luY29tcGxldGVMaXN0LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgTGlzdEl0ZW1UZXh0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL0xpc3RcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIm1hdGVyaWFsLXVpL1RleHRGaWVsZFwiO1xuaW1wb3J0IHsgSG9sZGFibGUsIGRlZmluZUhvbGQgfSBmcm9tIFwicmVhY3QtdG91Y2hcIjtcblxuY2xhc3MgTGlzdEl0ZW1UZXh0QXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGVkaXRNb2RlOiBmYWxzZSxcblx0XHRcdGVkaXRUZXh0OiBwcm9wcy5yYXdUZXh0XG5cdFx0fTtcblxuXHRcdHRoaXMuVGV4dENvbnRhaW5lciA9IHRoaXMuVGV4dENvbnRhaW5lci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVyID0gdGhpcy5kb3VibGVDbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLkVkaXRJdGVtID0gdGhpcy5FZGl0SXRlbS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUJsdXIgPSB0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLm5vbkVkaXRJdGVtID0gdGhpcy5ub25FZGl0SXRlbS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0bm9uRWRpdEl0ZW0ocHJvcHMpIHtcblx0XHR2YXIgbGluZVN0eWxlID0gdGhpcy5wcm9wcy5jb21wbGV0ZVxuXHRcdFx0PyB7IHRleHREZWNvcmF0aW9uOiBcImxpbmUtdGhyb3VnaFwiIH1cblx0XHRcdDoge307XG5cdFx0Y29uc3QgaG9sZCA9IGRlZmluZUhvbGQoeyB1cGRhdGVFdmVyeTogNTAsIGhvbGRGb3I6IDUwMCB9KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEhvbGRhYmxlIGNvbmZpZz17aG9sZH0gb25Ib2xkQ29tcGxldGU9e3Byb3BzLmRvdWJsZUNsaWNrSGFuZGxlcn0+XG5cdFx0XHRcdDxMaXN0SXRlbVRleHRcblx0XHRcdFx0XHRwcmltYXJ5PXtcblx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHRoaXMucHJvcHMudGV4dENvbG9yLFxuXHRcdFx0XHRcdFx0XHRcdC4uLmxpbmVTdHlsZSxcblx0XHRcdFx0XHRcdFx0XHR3b3JkV3JhcDogXCJub3JtYWxcIixcblx0XHRcdFx0XHRcdFx0XHR3b3JkQnJlYWs6IFwibm9ybWFsXCJcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e3Byb3BzLnByaW1hcnl9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNlY29uZGFyeT17cHJvcHMuc2Vjb25kYXJ5fVxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRjb2xvcjogcHJvcHMudGV4dENvbG9yLFxuXHRcdFx0XHRcdFx0cGFkZGluZzogXCIwcHhcIixcblx0XHRcdFx0XHRcdHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIlxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0b25Eb3VibGVDbGljaz17cHJvcHMuZG91YmxlQ2xpY2tIYW5kbGVyfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9Ib2xkYWJsZT5cblx0XHQpO1xuXHR9XG5cblx0RWRpdEl0ZW0oKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUJsdXJ9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cblx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmVkaXRUZXh0fVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cblx0XHRcdFx0XHRmdWxsV2lkdGg9e3RydWV9XG5cdFx0XHRcdFx0YXV0b0ZvY3VzPXt0cnVlfVxuXHRcdFx0XHRcdElucHV0UHJvcHM9e3tcblx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB0aGlzLnByb3BzLnRleHRDb2xvclxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0KTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZShldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBlZGl0VGV4dDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuXHR9XG5cblx0aGFuZGxlQmx1cihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5wcm9wcy51cGRhdGVJdGVtKHRoaXMucHJvcHMuaWQsIHRoaXMuc3RhdGUuZWRpdFRleHQpO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBlZGl0TW9kZTogZmFsc2UgfSk7XG5cdH1cblxuXHRUZXh0Q29udGFpbmVyKHByb3BzKSB7XG5cdFx0dmFyIE5vbkVkaXRJdGVtID0gdGhpcy5ub25FZGl0SXRlbTtcblx0XHR2YXIgRWRpdEl0ZW0gPSB0aGlzLkVkaXRJdGVtO1xuXHRcdGlmIChwcm9wcy5lZGl0TW9kZSkge1xuXHRcdFx0cmV0dXJuIDxFZGl0SXRlbSAvPjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE5vbkVkaXRJdGVtXG5cdFx0XHRcdFx0ZG91YmxlQ2xpY2tIYW5kbGVyPXtwcm9wcy5kb3VibGVDbGlja0hhbmRsZXJ9XG5cdFx0XHRcdFx0cHJpbWFyeT17cHJvcHMucHJpbWFyeX1cblx0XHRcdFx0XHRzZWNvbmRhcnk9e3Byb3BzLnNlY29uZGFyeX1cblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Y29sb3I6IHByb3BzLnRleHRDb2xvcixcblx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiMHB4XCIsXG5cdFx0XHRcdFx0XHR3b3JkV3JhcDogXCJicmVhay13b3JkXCJcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRkb3VibGVDbGlja0hhbmRsZXIoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGVkaXRNb2RlOiB0cnVlIH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBUZXh0Q29udGFpbmVyID0gdGhpcy5UZXh0Q29udGFpbmVyO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8VGV4dENvbnRhaW5lclxuXHRcdFx0XHRkb3VibGVDbGlja0hhbmRsZXI9e3RoaXMuZG91YmxlQ2xpY2tIYW5kbGVyfVxuXHRcdFx0XHRlZGl0TW9kZT17dGhpcy5zdGF0ZS5lZGl0TW9kZX1cblx0XHRcdFx0cHJpbWFyeT17dGhpcy5zdGF0ZS5lZGl0VGV4dH1cblx0XHRcdFx0c2Vjb25kYXJ5PXt0aGlzLnByb3BzLnNlY29uZGFyeX1cblx0XHRcdFx0dGV4dENvbG9yPXt0aGlzLnByb3BzLnRleHRDb2xvcn1cblx0XHRcdC8+XG5cdFx0KTtcblx0fVxufVxuXG5MaXN0SXRlbVRleHRBcmVhLnByb3BUeXBlcyA9IHtcblx0dGV4dENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRwcmltYXJ5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG5cdHNlY29uZGFyeTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuXHR1cGRhdGVJdGVtOiBQcm9wVHlwZXMuZnVuYyxcblx0aWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblx0Y29tcGxldGU6IFByb3BUeXBlcy5ib29sLFxuXHRyYXdUZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbVRleHRBcmVhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RJdGVtVGV4dEFyZWEuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vTGlzdEl0ZW0uanNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCJtYXRlcmlhbC11aS9MaXN0XCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IHtcblx0ZmFkZWRDb2xvclBhcnNlcixcblx0dGV4dENvbG9yUGFyc2VyXG59IGZyb20gXCIuLi9oZWxwZXJzL2NvbG9yUGFyc2VyLmpzXCI7XG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBjcmVhdGVTdHlsZVNoZWV0KFwiQ29tcGxldGVMaXN0XCIsIHtcblx0Y29udGFpbmVyOiB7XG5cdFx0bWFyZ2luOiAwLFxuXHRcdHBhZGRpbmc6IDBcblx0fVxufSk7XG5cbmNvbnN0IENvbXBsZXRlTGlzdCA9IHByb3BzID0+IHtcblx0Y29uc3QgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXM7XG5cblx0cmV0dXJuIChcblx0XHQ8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cblx0XHRcdHtwcm9wcy5pdGVtcy5tYXAodmFsdWUgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxMaXN0SXRlbVxuXHRcdFx0XHRcdFx0a2V5PXtgaXRlbS0ke3ZhbHVlLmlkfWB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3Nlcj17cHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0XHRcdGl0ZW1Db2xvcj17ZmFkZWRDb2xvclBhcnNlcih2YWx1ZS5jb2xvcil9XG5cdFx0XHRcdFx0XHR0ZXh0Q29sb3I9e3RleHRDb2xvclBhcnNlcih2YWx1ZS5jb2xvcil9XG5cdFx0XHRcdFx0XHR1cGRhdGVJdGVtPXtwcm9wcy51cGRhdGVJdGVtfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9KX1cblx0XHQ8L0xpc3Q+XG5cdCk7XG59O1xuXG5Db21wbGV0ZUxpc3QucHJvcFR5cGVzID0ge1xuXHRjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXHR1cGRhdGVJdGVtOiBQcm9wVHlwZXMuZnVuYyxcblx0aXRlbXM6IFByb3BUeXBlcy5hcnJheVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShDb21wbGV0ZUxpc3QpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0NvbXBsZXRlTGlzdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIGltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlU2hlZXQgfSBmcm9tIFwibWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwibWF0ZXJpYWwtdWkvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIm1hdGVyaWFsLXVpL0RpdmlkZXJcIjtcbmltcG9ydCBDaGV2cm9uUmlnaHQgZnJvbSBcIm1hdGVyaWFsLXVpLWljb25zL0NoZXZyb25SaWdodFwiO1xuaW1wb3J0IE5ld0l0ZW1Gb3JtIGZyb20gXCIuL05ld0l0ZW1Gb3JtLmpzXCI7XG5pbXBvcnQge1xuXHRwcmltYXJ5Q29sb3JQYXJzZXIsXG5cdGZhZGVkQ29sb3JQYXJzZXIsXG5cdHRleHRDb2xvclBhcnNlcixcblx0YWNjZW50Q29sb3JQYXJzZXIsXG5cdGFjY2VudFRleHRDb2xvclBhcnNlcixcblx0ZmFkZWRBY2NlbnRDb2xvclBhcnNlclxufSBmcm9tIFwiLi4vaGVscGVycy9jb2xvclBhcnNlci5qc1wiO1xuaW1wb3J0IEhlYWRlck1lbnUgZnJvbSBcIi4vSGVhZGVyTWVudS5qc1wiO1xuaW1wb3J0IEVkaXRhYmxlVGV4dEFyZWEgZnJvbSBcIi4vRWRpdGFibGVUZXh0QXJlYS5qc1wiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCJtYXRlcmlhbC11aS9DaGVja2JveFwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b25cIjtcblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJIZWFkZXJcIiwge1xuXHR0aXRsZUNvbnRhaW5lcjoge1xuXHRcdHBhZGRpbmc6IDE2LFxuXHRcdGRpc3BsYXk6IFwiZmxleFwiXG5cdH0sXG5cdHRpdGxlVGV4dDoge1xuXHRcdGZsZXhHcm93OiAxXG5cdH0sXG5cdGNydW1iOiB7XG5cdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG5cdFx0Y3Vyc29yOiBcInBvaW50ZXJcIixcblx0XHRcIiY6aG92ZXJcIjoge1xuXHRcdFx0dGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCJcblx0XHR9XG5cdH0sXG5cdGNydW1iQ29udGFpbmVyOiB7XG5cdFx0cGFkZGluZzogMTZcblx0fVxufSk7XG5cbmNvbnN0IExpc3RIZWFkZXIgPSBwcm9wcyA9PiB7XG5cdGNvbnN0IGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzO1xuXHRjb25zdCBjdXJyZW50SXRlbUNvbG9yID0gcHJvcHMuaXRlbXNbcHJvcHMuYmFzZUl0ZW1dLmNvbG9yO1xuXHRjb25zdCBpbmNvbXBsZXRlQ29sb3IgPSBwcmltYXJ5Q29sb3JQYXJzZXIoY3VycmVudEl0ZW1Db2xvcik7XG5cdGNvbnN0IGluY29tcGxldGVUZXh0Q29sb3IgPSB0ZXh0Q29sb3JQYXJzZXIoY3VycmVudEl0ZW1Db2xvcik7XG5cdGNvbnN0IGluY29tcGxldGVBY2NlbnRDb2xvciA9IGFjY2VudENvbG9yUGFyc2VyKGN1cnJlbnRJdGVtQ29sb3IpO1xuXHRjb25zdCBjb21wbGV0ZUFjY2VudENvbG9yID0gZmFkZWRBY2NlbnRDb2xvclBhcnNlcihjdXJyZW50SXRlbUNvbG9yKTtcblx0Y29uc3QgaW5jb21wbGV0ZUFjY2VudFRleHRDb2xvciA9IGFjY2VudFRleHRDb2xvclBhcnNlcihjdXJyZW50SXRlbUNvbG9yKTtcblx0Y29uc3QgY29tcGxldGUgPVxuXHRcdHByb3BzLmJhc2VJdGVtID09PSBcInJvb3RcIlxuXHRcdFx0PyBmYWxzZVxuXHRcdFx0OiBwcm9wcy5pdGVtc1twcm9wcy5iYXNlSXRlbV0uY29tcGxldGU7XG5cblx0Y29uc3QgY29tcGxldGVDb2xvciA9IGZhZGVkQ29sb3JQYXJzZXIoY3VycmVudEl0ZW1Db2xvcik7XG5cdGNvbnN0IHRleHRDb2xvciA9IGNvbXBsZXRlID8gXCIjMDAwMDAwXCIgOiBpbmNvbXBsZXRlVGV4dENvbG9yO1xuXHRjb25zdCBiZ0NvbG9yID0gY29tcGxldGUgPyBjb21wbGV0ZUNvbG9yIDogaW5jb21wbGV0ZUNvbG9yO1xuXHRjb25zdCBhY2NlbnRDb2xvciA9IGNvbXBsZXRlID8gY29tcGxldGVBY2NlbnRDb2xvciA6IGluY29tcGxldGVBY2NlbnRDb2xvcjtcblx0Y29uc3QgYWNjZW50VGV4dENvbG9yID0gY29tcGxldGUgPyBcIiMwMDAwMDBcIiA6IGluY29tcGxldGVBY2NlbnRUZXh0Q29sb3I7XG5cblx0Y29uc3QgaGVhZGVyVGV4dCA9IHByb3BzLml0ZW1zW3Byb3BzLmJhc2VJdGVtXS5jb250ZW50O1xuXG5cdGNvbnN0IEJyZWFkQ3J1bWIgPSAoKSA9PiB7XG5cdFx0bGV0IHRyYWlsID0gW107XG5cdFx0bGV0IGN1cnJlbnQgPSBwcm9wcy5iYXNlSXRlbTtcblx0XHRsZXQgY291bnRlciA9IDA7XG5cdFx0aWYgKGN1cnJlbnQgPT09IFwicm9vdFwiKSB7XG5cdFx0XHR0cmFpbCA9IFtcInJvb3RcIl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdoaWxlIChwcm9wcy5pdGVtc1tjdXJyZW50XS5wYXJlbnQgIT09IFwicm9vdFwiICYmIGNvdW50ZXIgPCAxMCkge1xuXHRcdFx0XHR0cmFpbCA9IFtjdXJyZW50LCAuLi50cmFpbF07XG5cdFx0XHRcdGN1cnJlbnQgPSBwcm9wcy5pdGVtc1tjdXJyZW50XS5wYXJlbnQ7XG5cdFx0XHRcdGNvdW50ZXIrKztcblx0XHRcdH1cblx0XHRcdHRyYWlsID0gW1wicm9vdFwiLCBjdXJyZW50LCAuLi50cmFpbF07XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8VHlwb2dyYXBoeVxuXHRcdFx0XHR0eXBlPXtcImJvZHkxXCJ9XG5cdFx0XHRcdGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5jcnVtYkNvbnRhaW5lcn1cblx0XHRcdFx0c3R5bGU9e3sgY29sb3I6IHRleHRDb2xvciB9fVxuXHRcdFx0PlxuXHRcdFx0XHR7dHJhaWwubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0XHRrZXk9e2BicmVhZGNydW1iLSR7aW5kZXh9YH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmNydW1ifVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtwcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXIoaXRlbSl9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtpdGVtID09PSBcInJvb3RcIlxuXHRcdFx0XHRcdFx0XHRcdD8gXCJyb290XCJcblx0XHRcdFx0XHRcdFx0XHQ6IHByb3BzLml0ZW1zW2l0ZW1dLmNvbnRlbnR9XG5cdFx0XHRcdFx0XHRcdHtpbmRleCA8IHRyYWlsLmxlbmd0aCAtIDFcblx0XHRcdFx0XHRcdFx0XHQ/IDxDaGV2cm9uUmlnaHQgLz5cblx0XHRcdFx0XHRcdFx0XHQ6IFwiXCJ9e1wiIFwifVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdCk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3IsXG5cdFx0XHRcdGNvbG9yOiB0ZXh0Q29sb3IsXG5cdFx0XHRcdHRyYW5zaXRpb246IFwiLjVzXCJcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVDb250YWluZXJ9PlxuXHRcdFx0XHR7cHJvcHMuYmFzZUl0ZW0gPT09IFwicm9vdFwiXG5cdFx0XHRcdFx0PyA8SWNvbkJ1dHRvbiAvPlxuXHRcdFx0XHRcdDogPENoZWNrYm94XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2NvbXBsZXRlfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtwcm9wcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcihwcm9wcy5iYXNlSXRlbSl9XG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiB0ZXh0Q29sb3IgfX1cblx0XHRcdFx0XHRcdC8+fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZVRleHR9PlxuXHRcdFx0XHRcdDxFZGl0YWJsZVRleHRBcmVhXG5cdFx0XHRcdFx0XHRwcmltYXJ5PXtoZWFkZXJUZXh0fVxuXHRcdFx0XHRcdFx0c2Vjb25kYXJ5PXtwcm9wcy5jb3VudGVyVGV4dH1cblx0XHRcdFx0XHRcdHRleHRDb2xvcj17dGV4dENvbG9yfVxuXHRcdFx0XHRcdFx0cmF3VGV4dD17aGVhZGVyVGV4dH1cblx0XHRcdFx0XHRcdHVwZGF0ZUl0ZW09e3Byb3BzLnVwZGF0ZUl0ZW19XG5cdFx0XHRcdFx0XHRpZD17cHJvcHMuYmFzZUl0ZW19XG5cdFx0XHRcdFx0XHRjb21wbGV0ZT17Y29tcGxldGV9XG5cdFx0XHRcdFx0XHRoZWFkZXI9e3RydWV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxIZWFkZXJNZW51XG5cdFx0XHRcdFx0dGV4dENvbG9yPXt0ZXh0Q29sb3J9XG5cdFx0XHRcdFx0YmFzZUl0ZW09e3Byb3BzLmJhc2VJdGVtfVxuXHRcdFx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxEaXZpZGVyIC8+XG5cdFx0XHQ8QnJlYWRDcnVtYiAvPlxuXHRcdFx0PERpdmlkZXIgLz5cblx0XHRcdDxOZXdJdGVtRm9ybVxuXHRcdFx0XHRuZXdJdGVtQWN0aW9uPXtwcm9wcy5uZXdJdGVtQWN0aW9ufVxuXHRcdFx0XHR0ZXh0Q29sb3I9e3RleHRDb2xvcn1cblx0XHRcdFx0YWNjZW50Q29sb3I9e2FjY2VudENvbG9yfVxuXHRcdFx0XHRhY2NlbnRUZXh0Q29sb3I9e2FjY2VudFRleHRDb2xvcn1cblx0XHRcdC8+XG5cdFx0XHQ8RGl2aWRlciAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuTGlzdEhlYWRlci5wcm9wVHlwZXMgPSB7XG5cdG5ld0l0ZW1BY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuXHRjaGFuZ2VDb2xvckNvbXBvc2VyOiBQcm9wVHlwZXMuZnVuYyxcblx0YmFzZUl0ZW06IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblx0dXBkYXRlSXRlbTogUHJvcFR5cGVzLmZ1bmMsXG5cdGNvdW50ZXJUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRjb21wbGV0ZUl0ZW1Db21wb3NlcjogUHJvcFR5cGVzLmZ1bmMsXG5cdGl0ZW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlU2hlZXQpKExpc3RIZWFkZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RIZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwibWF0ZXJpYWwtdWkvVGV4dEZpZWxkXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9CdXR0b25cIjtcbmltcG9ydCBHcmlkIGZyb20gXCJtYXRlcmlhbC11aS9HcmlkXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuXG5jb25zdCBzdHlsZVNoZWV0ID0gY3JlYXRlU3R5bGVTaGVldChcIk5ld0l0ZW1Gb3JtXCIsIHtcblx0Y29udGFpbmVyOiB7XG5cdFx0bWFyZ2luOiBcImF1dG9cIixcblx0XHRwYWRkaW5nQm90dG9tOiBcIjE2cHhcIixcblx0XHRwYWRkaW5nVG9wOiBcIjE2cHhcIixcblx0XHRwYWRkaW5nOiAyNCxcblx0XHRib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiXG5cdH0sXG5cdHR5cGVJdGVtOiB7XG5cdFx0ZmxleEdyb3c6IDFcblx0fVxufSk7XG5cbmNsYXNzIE5ld0l0ZW1Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bmV3SXRlbTogXCJcIlxuXHRcdH07XG5cdFx0dGhpcy5pbnB1dFVwZGF0ZSA9IHRoaXMuaW5wdXRVcGRhdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnN1Ym1pdEhhbmRsZXIgPSB0aGlzLnN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKTtcblx0fVxuXG5cdHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMucHJvcHMubmV3SXRlbUFjdGlvbih0aGlzLnN0YXRlLm5ld0l0ZW0pO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBuZXdJdGVtOiBcIlwiIH0pO1xuXHR9XG5cblx0aW5wdXRVcGRhdGUoZXZlbnQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgbmV3SXRlbTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGNsYXNzZXMgPSB0aGlzLnByb3BzLmNsYXNzZXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEhhbmRsZXJ9PlxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBndXR0ZXI9ezh9IGFsaWduPXtcImNlbnRlclwifT5cblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLnR5cGVJdGVtfT5cblx0XHRcdFx0XHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0XHRcdFx0XHRcdGlkPVwibmV3SXRlbVwiXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJOZXcgSXRlbVwiXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdGZ1bGxXaWR0aD17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5uZXdJdGVtfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmlucHV0VXBkYXRlfVxuXHRcdFx0XHRcdFx0XHRcdElucHV0UHJvcHM9e3tcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB0aGlzLnByb3BzLnRleHRDb2xvclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0SW5wdXRMYWJlbFByb3BzPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdGhpcy5wcm9wcy50ZXh0Q29sb3Jcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRcdHJhaXNlZFxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdGhpcy5wcm9wcy5hY2NlbnRUZXh0Q29sb3IsXG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMuYWNjZW50Q29sb3Jcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0TWFrZSBhIE5ldyBJdGVtXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5OZXdJdGVtRm9ybS5wcm9wVHlwZXMgPSB7XG5cdG5ld0l0ZW1BY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuXHRhY2NlbnRUZXh0Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGFjY2VudENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHR0ZXh0Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVTaGVldCkoTmV3SXRlbUZvcm0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL05ld0l0ZW1Gb3JtLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b25cIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwibWF0ZXJpYWwtdWktaWNvbnMvU2V0dGluZ3NcIjtcbmltcG9ydCBNZW51IGZyb20gXCJtYXRlcmlhbC11aS9NZW51XCI7XG5pbXBvcnQgQ29sb3JNZW51IGZyb20gXCIuL0NvbG9yTWVudS5qc1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIm1hdGVyaWFsLXVpL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJtYXRlcmlhbC11aS9EaXZpZGVyXCI7XG5cbmNsYXNzIEhlYWRlck1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRvcGVuOiBmYWxzZSxcblx0XHRcdGFuY2hvckVsOiB1bmRlZmluZWRcblx0XHR9O1xuXG5cdFx0dGhpcy5vcGVuTWVudSA9IHRoaXMub3Blbk1lbnUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNsb3NlTWVudSA9IHRoaXMuY2xvc2VNZW51LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jb2xvckl0ZW1DbGlja0hhbmRsZXIgPSB0aGlzLmNvbG9ySXRlbUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuXHR9XG5cblx0b3Blbk1lbnUoZXZlbnQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSwgYW5jaG9yRWw6IGV2ZW50LmN1cnJlbnRUYXJnZXQgfSk7XG5cdH1cblxuXHRjbG9zZU1lbnUoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuXHR9XG5cblx0Y29sb3JJdGVtQ2xpY2tIYW5kbGVyKGNvbG9yTmFtZSkge1xuXHRcdHZhciBjbG9zZSA9IHRoaXMuY2xvc2VNZW51O1xuXHRcdGxldCBjaGFuZ2VDb2xvciA9IHRoaXMucHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcihcblx0XHRcdHRoaXMucHJvcHMuYmFzZUl0ZW0sXG5cdFx0XHRjb2xvck5hbWVcblx0XHQpO1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdGNoYW5nZUNvbG9yKCk7XG5cdFx0XHRjbG9zZSgpO1xuXHRcdH07XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5vcGVuTWVudX1cblx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogdGhpcy5wcm9wcy50ZXh0Q29sb3IgfX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxTZXR0aW5ncyAvPlxuXHRcdFx0XHQ8L0ljb25CdXR0b24+XG5cdFx0XHRcdDxNZW51XG5cdFx0XHRcdFx0aWQ9e2Ake3RoaXMucHJvcHMuYmFzZUl0ZW19LW1lbnVgfVxuXHRcdFx0XHRcdG9wZW49e3RoaXMuc3RhdGUub3Blbn1cblx0XHRcdFx0XHRvblJlcXVlc3RDbG9zZT17dGhpcy5jbG9zZU1lbnV9XG5cdFx0XHRcdFx0YW5jaG9yRWw9e3RoaXMuc3RhdGUuYW5jaG9yRWx9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxuXHRcdFx0XHRcdFx0dHlwZT17XCJzdWJoZWFkaW5nXCJ9XG5cdFx0XHRcdFx0XHRhbGlnbj17XCJjZW50ZXJcIn1cblx0XHRcdFx0XHRcdHN0eWxlPXt7IG91dGxpbmU6IFwibm9uZVwiLCBwYWRkaW5nTGVmdDogMTYgfX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRDaGFuZ2UgQ29sb3Jcblx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0PERpdmlkZXIgLz5cblx0XHRcdFx0XHQ8Q29sb3JNZW51IGNsaWNrSGFuZGxlcj17dGhpcy5jb2xvckl0ZW1DbGlja0hhbmRsZXJ9IC8+XG5cdFx0XHRcdDwvTWVudT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuSGVhZGVyTWVudS5wcm9wVHlwZXMgPSB7XG5cdGJhc2VJdGVtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cdHRleHRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblx0YmdDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblx0Y2hhbmdlQ29sb3JDb21wb3NlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlck1lbnU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvSGVhZGVyTWVudS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIm1hdGVyaWFsLXVpL1RleHRGaWVsZFwiO1xuaW1wb3J0IHsgSG9sZGFibGUsIGRlZmluZUhvbGQgfSBmcm9tIFwicmVhY3QtdG91Y2hcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJtYXRlcmlhbC11aS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNvbnN0IE5vbkVkaXRJdGVtID0gcHJvcHMgPT4ge1xuXHR2YXIgbGluZVN0eWxlID0gcHJvcHMuY29tcGxldGUgPyB7IHRleHREZWNvcmF0aW9uOiBcImxpbmUtdGhyb3VnaFwiIH0gOiB7fTtcblx0Y29uc3QgaG9sZCA9IGRlZmluZUhvbGQoeyB1cGRhdGVFdmVyeTogNTAsIGhvbGRGb3I6IDUwMCB9KTtcblx0cmV0dXJuIChcblx0XHQ8SG9sZGFibGUgY29uZmlnPXtob2xkfSBvbkhvbGRDb21wbGV0ZT17cHJvcHMudXBkYXRlSGFuZGxlcn0+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8VHlwb2dyYXBoeVxuXHRcdFx0XHRcdHR5cGU9e1wiaGVhZGxpbmVcIn1cblx0XHRcdFx0XHRhbGlnbj17XCJjZW50ZXJcIn1cblx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogcHJvcHMudGV4dENvbG9yLCAuLi5saW5lU3R5bGUgfX1cblx0XHRcdFx0XHRvbkRvdWJsZUNsaWNrPXtwcm9wcy51cGRhdGVIYW5kbGVyfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3Byb3BzLnByaW1hcnl9XG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0PFR5cG9ncmFwaHlcblx0XHRcdFx0XHR0eXBlPXtcInN1YmhlYWRpbmdcIn1cblx0XHRcdFx0XHRhbGlnbj17XCJjZW50ZXJcIn1cblx0XHRcdFx0XHRzdHlsZT17eyBjb2xvcjogcHJvcHMudGV4dENvbG9yIH19XG5cdFx0XHRcdFx0b25Eb3VibGVDbGljaz17cHJvcHMudXBkYXRlSGFuZGxlcn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtwcm9wcy5zZWNvbmRhcnl9XG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvSG9sZGFibGU+XG5cdCk7XG59O1xuXG5Ob25FZGl0SXRlbS5wcm9wVHlwZXMgPSB7XG5cdHByaW1hcnk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5zdHJpbmddKSxcblx0c2Vjb25kYXJ5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cdHRleHRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblx0Y29tcGxldGU6IFByb3BUeXBlcy5ib29sLFxuXHR1cGRhdGVIYW5kbGVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuY2xhc3MgRWRpdGFibGVUZXh0QXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGVkaXRNb2RlOiBmYWxzZSxcblx0XHRcdGVkaXRUZXh0OiBcIlwiXG5cdFx0fTtcblxuXHRcdHRoaXMuVGV4dENvbnRhaW5lciA9IHRoaXMuVGV4dENvbnRhaW5lci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVyID0gdGhpcy5kb3VibGVDbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLkVkaXRJdGVtID0gdGhpcy5FZGl0SXRlbS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUJsdXIgPSB0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKTtcblx0fVxuXHRFZGl0SXRlbSgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlQmx1cn0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuXHRcdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZWRpdFRleHR9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuXHRcdFx0XHRcdGZ1bGxXaWR0aD17dHJ1ZX1cblx0XHRcdFx0XHRhdXRvRm9jdXM9e3RydWV9XG5cdFx0XHRcdFx0SW5wdXRQcm9wcz17e1xuXHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHRoaXMucHJvcHMudGV4dENvbG9yXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZm9ybT5cblx0XHQpO1xuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGVkaXRUZXh0OiBldmVudC50YXJnZXQudmFsdWUgfSk7XG5cdH1cblxuXHRoYW5kbGVCbHVyKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnByb3BzLnVwZGF0ZUl0ZW0odGhpcy5wcm9wcy5pZCwgdGhpcy5zdGF0ZS5lZGl0VGV4dCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGVkaXRNb2RlOiBmYWxzZSB9KTtcblx0fVxuXG5cdFRleHRDb250YWluZXIoKSB7XG5cdFx0dmFyIEVkaXRJdGVtID0gdGhpcy5FZGl0SXRlbTtcblx0XHRpZiAodGhpcy5zdGF0ZS5lZGl0TW9kZSkge1xuXHRcdFx0cmV0dXJuIDxFZGl0SXRlbSAvPjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PE5vbkVkaXRJdGVtXG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdGNvbG9yOiB0aGlzLnByb3BzLnRleHRDb2xvcixcblx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiMHB4XCIsXG5cdFx0XHRcdFx0XHR3b3JkV3JhcDogXCJicmVhay13b3JkXCJcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdGNvbXBsZXRlPXt0aGlzLnByb3BzLmNvbXBsZXRlfVxuXHRcdFx0XHRcdHVwZGF0ZUhhbmRsZXI9e3RoaXMuZG91YmxlQ2xpY2tIYW5kbGVyfVxuXHRcdFx0XHRcdHRleHRDb2xvcj17dGhpcy5wcm9wcy50ZXh0Q29sb3J9XG5cdFx0XHRcdFx0cHJpbWFyeT17dGhpcy5wcm9wcy5wcmltYXJ5fVxuXHRcdFx0XHRcdHNlY29uZGFyeT17dGhpcy5wcm9wcy5zZWNvbmRhcnl9XG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdGRvdWJsZUNsaWNrSGFuZGxlcigpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgZWRpdE1vZGU6IHRydWUsIGVkaXRUZXh0OiB0aGlzLnByb3BzLnByaW1hcnkgfSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIFRleHRDb250YWluZXIgPSB0aGlzLlRleHRDb250YWluZXI7XG5cdFx0cmV0dXJuIDxUZXh0Q29udGFpbmVyIC8+O1xuXHR9XG59XG5cbkVkaXRhYmxlVGV4dEFyZWEucHJvcFR5cGVzID0ge1xuXHRwcmltYXJ5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cdHNlY29uZGFyeTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXHR0ZXh0Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGNvbXBsZXRlOiBQcm9wVHlwZXMuYm9vbCxcblx0dXBkYXRlSXRlbTogUHJvcFR5cGVzLmZ1bmMsXG5cdGlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRhYmxlVGV4dEFyZWE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvRWRpdGFibGVUZXh0QXJlYS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7OztBQWlCQTtBQUlBO0FBQ0E7QUF0QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQURBO0FBREE7QUFGQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDa0JBO0FBdUNBO0FBQ0E7QUE5RUE7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFuQkE7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBWUE7QUFXQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFOQTtBQU9BO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBU0E7QUFDQTtBQVdBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFsQkE7QUFrQkE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFqQkE7QUFDQTtBQWdCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pLQTtBQVVBO0FBUUE7QUFRQTtBQVFBO0FBWUE7QUFZQTtBQWFBO0FBc0JBO0FBUUE7QUFPQTtBQUNBO0FBdEhBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBR0E7QUFKQTtBQUZBO0FBT0E7QUFBQTtBQUNBOztBQUdBO0FBRUE7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOztBQUdBO0FBRUE7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOztBQUdBO0FBRUE7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOztBQUdBOztBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBRkE7QUFTQTtBQUNBO0FBREE7QUFDQTs7QUFHQTs7QUFFQTtBQUdBO0FBSkE7QUFGQTtBQVNBO0FBQ0E7QUFEQTtBQUNBOztBQUdBOztBQUVBO0FBR0E7QUFKQTtBQUZBO0FBVUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUtBO0FBTEE7QUFTQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7O0FBSUE7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOztBQUlBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFDQTs7QUFJQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBUUE7QUFGQTs7QUFHQTtBQUFBO0FBVkE7QUFEQTtBQURBO0FBQ0E7QUFnQkE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7Ozs7O0FBYkE7QUFDQTtBQW9CQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBdkJBO0FBQ0E7QUFDQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBREE7QUFHQTtBQUhBO0FBQ0E7O0FBRUE7QUFHQTtBQUhBO0FBQUE7QUFSQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVlBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQXZCQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQWlCQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7O0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFJQTs7OztBQUdBO0FBQUE7QUFJQTtBQUVBO0FBRUE7QUFBQTtBQURBOztBQUhBO0FBT0E7QUFQQTtBQUNBOzs7O0FBV0E7QUFDQTs7OztBQUlBO0FBQUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQUE7QUFJQTtBQUVBOztBQUVBO0FBQUE7QUFDQTtBQUZBOztBQUhBO0FBUUE7QUFSQTtBQUNBO0FBUUE7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFIQTtBQU1BO0FBTkE7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQVBBO0FBVUE7QUFWQTtBQUNBO0FBVUE7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7O0FBR0E7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQU9BO0FBQ0E7QUFBQTs7QUFIQTtBQUFBO0FBQUE7QUFDQTs7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBR0E7QUFBQTtBQUdBO0FBSkE7QUFJQTs7QUFOQTtBQVVBO0FBVkE7QUFDQTs7QUFTQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUEzSkE7QUFDQTtBQW1LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4TkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQWVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUlBOztBQURBO0FBR0E7QUFIQTtBQUNBOztBQUVBO0FBRUE7QUFGQTtBQUFBO0FBUUE7QUFwQ0E7QUFDQTtBQXFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQURBOzs7OztBQU1BO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBSEE7Ozs7Ozs7QUFiQTs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFSQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRkE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7O0FBT0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVRBO0FBU0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVJBOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUkE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFSQTs7QUFVQTtBQUFBO0FBQ0E7QUFGQTtBQTlDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7OztBQUxBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTtBQUZBOzs7QUFJQTtBQUFBO0FBREE7QUFKQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBRUE7QUFHQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7Ozs7QUFJQTtBQUNBOzs7O0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVhBO0FBYUE7QUFiQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFSQTtBQVlBO0FBWkE7QUFDQTs7Ozs7QUExR0E7QUFDQTtBQXVIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7QUFHQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUEE7QUFhQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUxBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFUQTtBQVdBO0FBWEE7QUFDQTtBQVlBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFUQTtBQWFBO0FBYkE7QUFDQTtBQTdCQTtBQUNBO0FBMENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFOQTtBQUNBO0FBQ0E7QUFLQTs7QUFHQTtBQUNBO0FBRUE7QUFKQTs7QUFPQTtBQUZBOztBQUdBO0FBQUE7QUFUQTtBQUNBO0FBWUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFWQTtBQWFBO0FBYkE7QUFDQTtBQWVBO0FBckJBO0FBQ0E7QUFzQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBWEE7QUFjQTtBQWRBO0FBQ0E7QUFIQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBWkE7QUFnQkE7QUFoQkE7QUFDQTtBQVZBO0FBQ0E7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTs7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQURBOztBQUpBO0FBUUE7QUFSQTtBQUNBO0FBVUE7O0FBRUE7QUFFQTtBQUVBO0FBSkE7QUFJQTs7QUFuQkE7QUF1QkE7QUF2QkE7QUFDQTs7OztBQXlCQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBREE7O0FBUEE7QUFjQTtBQWRBO0FBQ0E7Ozs7QUFlQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUFBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQUE7QUFGQTs7QUFMQTtBQVdBO0FBWEE7QUFDQTtBQVdBOzs7O0FBR0E7QUFBQTs7OztBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTEE7QUFRQTtBQVJBO0FBQ0E7Ozs7O0FBM0dBO0FBQ0E7QUFvSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0SUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFQQTtBQUNBO0FBQ0E7QUFPQTs7QUFHQTtBQUFBO0FBREE7QUFEQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBO0FBWUE7QUFaQTtBQUNBO0FBY0E7QUF0QkE7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBbEJBO0FBQ0E7QUFDQTtBQWlCQTs7QUFHQTtBQUVBO0FBSEE7O0FBTUE7QUFGQTs7QUFJQTtBQUNBO0FBQ0E7O0FBSUE7QUFIQTtBQUpBOztBQVFBO0FBQUE7QUFoQkE7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFNQTtBQUVBO0FBQUE7QUFDQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTs7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFDQTtBQUFBOztBQUdBO0FBQ0E7QUFBQTtBQUZBOztBQUZBO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7O0FBUkE7QUFXQTtBQVhBO0FBQ0E7QUFZQTtBQUFBO0FBQ0E7O0FBSEE7QUFNQTtBQU5BO0FBQ0E7O0FBS0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTs7QUFLQTtBQUdBO0FBSEE7QUFBQTtBQXhHQTtBQUNBO0FBNEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25LQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7O0FBTEE7QUFDQTtBQUNBO0FBSUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU5BOztBQU9BO0FBQUE7QUFSQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFGQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUVBO0FBQUE7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBR0E7QUFBQTtBQURBOzs7QUFNQTtBQUFBO0FBREE7O0FBYkE7QUFtQkE7QUFuQkE7QUFDQTtBQWtCQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQURBOztBQUpBO0FBQUE7QUFBQTtBQUNBOzs7OztBQWpEQTtBQUNBO0FBaUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7OztBQUlBO0FBQUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBRUE7QUFGQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7QUFPQTtBQUNBO0FBQUE7O0FBSEE7QUFBQTtBQUFBO0FBQ0E7O0FBTUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUlBO0FBSkE7Ozs7OztBQXpEQTtBQUNBO0FBK0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBOztBQUpBO0FBTUE7QUFOQTtBQUNBO0FBZkE7QUFDQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFHQTtBQUpBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQURBOztBQVBBO0FBY0E7QUFkQTtBQUNBOzs7O0FBZUE7QUFDQTs7OztBQUdBO0FBRUE7QUFBQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUlBOztBQUVBO0FBRUE7QUFFQTtBQUpBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFWQTtBQWFBO0FBYkE7QUFDQTtBQWFBOzs7O0FBR0E7QUFBQTs7OztBQUlBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7Ozs7QUF4RUE7QUFDQTtBQTJFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        