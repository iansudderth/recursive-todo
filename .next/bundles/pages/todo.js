
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

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fadedColorParser = exports.accentColorParser = exports.primaryColorParser = undefined;
exports.textColorParser = textColorParser;
exports.accentTextColorParser = accentTextColorParser;

var _colors = __webpack_require__(605);

var _lodash = __webpack_require__(674);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function colorParserComposer(modifier
// }


function colorParserComposer(modifier) {

	var colors = { red: _colors.red, pink: _colors.pink, purple: _colors.purple, deepPurple: _colors.deepPurple, indigo: _colors.indigo, blue: _colors.blue, lightBlue: _colors.lightBlue, cyan: _colors.cyan, teal: _colors.teal, green: _colors.green, lightGreen: _colors.lightGreen, lime: _colors.lime, yellow: _colors.yellow, amber: _colors.amber, orange: _colors.orange, deepOrange: _colors.deepOrange };

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

var primaryColorParser = exports.primaryColorParser = colorParserComposer(500);

var accentColorParser = exports.accentColorParser = colorParserComposer('A400');

var fadedColorParser = exports.fadedColorParser = colorParserComposer(100);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/helpers/colorParser.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/helpers/colorParser.js"); } } })();

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.newItem = newItem;
exports.changeBaseItem = changeBaseItem;
exports.completeItem = completeItem;
exports.deleteItem = deleteItem;
exports.reorderItem = reorderItem;
exports.changeColor = changeColor;
var NEW_ITEM = exports.NEW_ITEM = "NEW_ITEM";
var CHANGE_BASE = exports.CHANGE_BASE = "CHANGE_BASE";
var COMPLETE_ITEM = exports.COMPLETE_ITEM = "COMPLETE_ITEM";
var DELETE_ITEM = exports.DELETE_ITEM = "DELETE_ITEM";
var REORDER_ITEM = exports.REORDER_ITEM = "REORDER_ITEM";
var CHANGE_COLOR = exports.CHANGE_COLOR = "CHANGE_COLOR";

// ============
// To Implement
// ============

var UPDATE_ITEM = exports.UPDATE_ITEM = "UPDATE_ITEM";

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/actions/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/actions/index.js"); } } })();

/***/ }),

/***/ 672:
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

var _styles = __webpack_require__(642);

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

var _ListItemTextArea = __webpack_require__(811);

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
	var colors = ['red', 'purple', 'lightBlue', 'teal', 'lightGreen', 'yellow', 'orange', 'pink'];
	return _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 37
		}
	}, colors.map(function (color, index) {

		var breakLine = index % 4 === 3 ? _react2.default.createElement("br", {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 40
			}
		}) : "";

		return _react2.default.createElement("span", { key: color + "-" + index,
			onClick: props.clickHandler(color), __source: {
				fileName: _jsxFileName,
				lineNumber: 43
			}
		}, _react2.default.createElement(_IconButton2.default, {
			style: { color: (0, _colorParser.primaryColorParser)(color) },
			__source: {
				fileName: _jsxFileName,
				lineNumber: 45
			}
		}, _react2.default.createElement(_Brightness2.default, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 48
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
						lineNumber: 102
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
					lineNumber: 115
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
					lineNumber: 142
				}
			}, _react2.default.createElement(DragHandle, {
				completeStyle: { color: textColor },
				complete: this.item.complete,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 143
				}
			}), _react2.default.createElement(_Checkbox2.default, {
				checked: this.item.complete,
				onClick: this.props.completeItemComposer(this.item.id),
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 147
				}
			}), _react2.default.createElement(_ListItemTextArea2.default, {
				primary: this.content(),
				secondary: this.completeDisplay(),
				textColor: textColor,
				rawText: this.item.content,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 153
				}
			}), _react2.default.createElement(_IconButton2.default, {
				onClick: this.props.changeBaseComposer(this.item.id),
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 160
				}
			}, _react2.default.createElement(_FormatListBulleted2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 164
				}
			})), _react2.default.createElement(_IconButton2.default, {
				onClick: this.openMenu,
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 166
				}
			}, _react2.default.createElement(_Settings2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 170
				}
			})), _react2.default.createElement(_Menu2.default, {
				id: this.item.id + "-menu",
				open: this.state.open,
				onRequestClose: this.closeMenu,
				anchorEl: this.state.anchorEl,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 172
				}
			}, _react2.default.createElement(_Typography2.default, {
				type: "subheading",
				align: 'center',
				style: { outline: 'none', paddingLeft: 16 },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 178
				}
			}, "Change Color"), _react2.default.createElement(_Divider2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 183
				}
			}), _react2.default.createElement(ColorMenu, {
				clickHandler: this.colorItemClickHandler,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 184
				}
			}), _react2.default.createElement(_Divider2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 187
				}
			}), _react2.default.createElement("div", {
				style: { textAlign: 'center' },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 188
				}
			}, _react2.default.createElement(_Button2.default, {
				style: { color: 'white', backgroundColor: _colors.red[500], marginTop: 8 },
				onClick: this.props.deleteItemComposer(this.item.id),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 191
				}
			}, _react2.default.createElement(_DeleteForever2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 195
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

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(692);


/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

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

var _Button = __webpack_require__(655);

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = __webpack_require__(706);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Typography = __webpack_require__(645);

var _Typography2 = _interopRequireDefault(_Typography);

var _App = __webpack_require__(672);

var _App2 = _interopRequireDefault(_App);

var _index = __webpack_require__(723);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/pages/todo.js?entry';


var styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
  }
};

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleRequestClose = function () {
      _this.setState({
        open: false
      });
    }, _this.handleClick = function () {
      _this.setState({
        open: true
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_App2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_index2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

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

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(673);

var _redux = __webpack_require__(647);

var _reducers = __webpack_require__(728);

var _reducers2 = _interopRequireDefault(_reducers);

var _App = __webpack_require__(672);

var _App2 = _interopRequireDefault(_App);

var _reduxPromise = __webpack_require__(731);

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reduxDevtoolsExtension = __webpack_require__(737);

var _styles = __webpack_require__(642);

var _TodoContainer = __webpack_require__(738);

var _TodoContainer2 = _interopRequireDefault(_TodoContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/index.js";
// import ReactDOM from "react-dom";
// import registerServiceWorker from "./registerServiceWorker";


var createStoreWithMiddleware = (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxPromise2.default))(_redux.createStore);

var Boiler = function Boiler() {
	return _react2.default.createElement(_reactRedux.Provider, { store: createStoreWithMiddleware(_reducers2.default), __source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}, _react2.default.createElement(_TodoContainer2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}));
};

// ReactDOM.render(<Boiler />, document.getElementById("root"));
// registerServiceWorker();

exports.default = Boiler;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/index.js"); } } })();

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(647);

var _items_reducer = __webpack_require__(729);

var _items_reducer2 = _interopRequireDefault(_items_reducer);

var _baseItem_reducer = __webpack_require__(730);

var _baseItem_reducer2 = _interopRequireDefault(_baseItem_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	items: _items_reducer2.default,
	baseItem: _baseItem_reducer2.default
});

exports.default = rootReducer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/index.js"); } } })();

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = __webpack_require__(100);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__(637);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _lodash = __webpack_require__(674);

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = __webpack_require__(660);

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

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = __webpack_require__(660);

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

/***/ 738:
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

var _List = __webpack_require__(739);

var _List2 = _interopRequireDefault(_List);

var _reactRedux = __webpack_require__(673);

var _actions = __webpack_require__(660);

var _redux = __webpack_require__(647);

var _ListHeader = __webpack_require__(785);

var _ListHeader2 = _interopRequireDefault(_ListHeader);

var _Card = __webpack_require__(805);

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
			this.setState({ newItem: "" });
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
		key: "render",
		value: function render() {
			var currentItem = this.props.items[this.props.baseItem];
			var parentItem = this.props.items[currentItem.parent];
			return _react2.default.createElement(_Card2.default, { style: (0, _defineProperty3.default)({ margin: "auto" }, "margin", "16px"), __source: {
					fileName: _jsxFileName,
					lineNumber: 90
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
					lineNumber: 91
				}
			}), _react2.default.createElement(_List2.default, {
				list: this.props.items,
				baseItem: this.props.baseItem,
				changeBaseComposer: this.changeBaseComposer,
				deleteItemComposer: this.deleteItemComposer,
				completeItemComposer: this.completeItemComposer,
				reorderItemComposer: this.reorderItemComposer,
				changeColorComposer: this.changeColorComposer,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 100
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
	return (0, _redux.bindActionCreators)({ newItem: _actions.newItem, changeBaseItem: _actions.changeBaseItem, completeItem: _actions.completeItem, deleteItem: _actions.deleteItem, reorderItem: _actions.reorderItem, changeColor: _actions.changeColor }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TodoContainer);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/containers/TodoContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/containers/TodoContainer.js"); } } })();

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _IncompleteList = __webpack_require__(740);

var _IncompleteList2 = _interopRequireDefault(_IncompleteList);

var _CompleteList = __webpack_require__(784);

var _CompleteList2 = _interopRequireDefault(_CompleteList);

var _styles = __webpack_require__(642);

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
		__source: {
			fileName: _jsxFileName,
			lineNumber: 42
		}
	}));
};

List.propTypes = {};

exports.default = (0, _styles.withStyles)(styleSheet)(List);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/List.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/List.js"); } } })();

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactSortableHoc = __webpack_require__(676);

var _ListItem = __webpack_require__(677);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = __webpack_require__(653);

var _List2 = _interopRequireDefault(_List);

var _styles = __webpack_require__(642);

var _colorParser = __webpack_require__(654);

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
		__source: {
			fileName: _jsxFileName,
			lineNumber: 51
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
			lineNumber: 72
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
		__source: {
			fileName: _jsxFileName,
			lineNumber: 73
		}
	}));
};

IncompleteList.propTypes = {};

exports.default = (0, _styles.withStyles)(styleSheet)(IncompleteList);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/IncompleteList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/IncompleteList.js"); } } })();

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _ListItem = __webpack_require__(677);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = __webpack_require__(653);

var _List2 = _interopRequireDefault(_List);

var _styles = __webpack_require__(642);

var _colorParser = __webpack_require__(654);

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

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = __webpack_require__(100);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(642);

var _Typography = __webpack_require__(645);

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = __webpack_require__(684);

var _Divider2 = _interopRequireDefault(_Divider);

var _ChevronRight = __webpack_require__(786);

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

var _NewItemForm = __webpack_require__(787);

var _NewItemForm2 = _interopRequireDefault(_NewItemForm);

var _colorParser = __webpack_require__(654);

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

/***/ 787:
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

var _TextField = __webpack_require__(788);

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = __webpack_require__(655);

var _Button2 = _interopRequireDefault(_Button);

var _Grid = __webpack_require__(798);

var _Grid2 = _interopRequireDefault(_Grid);

var _styles = __webpack_require__(642);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/NewItemForm.js";
// import style from "./style.css";
// import PropTypes from 'prop-types'
// import _ from 'lodash';


var styleSheet = (0, _styles.createStyleSheet)("NewItemForm", function (theme) {
	return {
		container: {
			width: "85vw",
			margin: "auto",
			paddingBottom: "16px",
			paddingTop: "16px",
			padding: 16,
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
					lineNumber: 56
				}
			}, _react2.default.createElement("form", { onSubmit: this.submitHandler, __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, _react2.default.createElement(_Grid2.default, { container: true, gutter: 24, align: "center", __source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, _react2.default.createElement(_Grid2.default, { item: true, className: classes.typeItem, __source: {
					fileName: _jsxFileName,
					lineNumber: 61
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
					lineNumber: 62
				}
			})), _react2.default.createElement(_Grid2.default, { item: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			}, _react2.default.createElement(_Button2.default, {
				type: "submit",
				raised: true,
				style: { color: this.props.accentTextColor, backgroundColor: this.props.accentColor }, __source: {
					fileName: _jsxFileName,
					lineNumber: 82
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

},[691]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy90b2RvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9zdHlsZS9jcmVhdGVEZWZhdWx0Q29udGV4dC5qcz9iOTU3ZjgyIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvaGVscGVycy9jb2xvclBhcnNlci5qcz9iOTU3ZjgyIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvYWN0aW9ucy9pbmRleC5qcz9iOTU3ZjgyIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvQXBwLmpzP2I5NTdmODIiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RJdGVtLmpzP2I5NTdmODIiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdG9kby5qcz9iOTU3ZjgyIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvaW5kZXguanM/Yjk1N2Y4MiIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL2luZGV4LmpzP2I5NTdmODIiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9pdGVtc19yZWR1Y2VyLmpzP2I5NTdmODIiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9iYXNlSXRlbV9yZWR1Y2VyLmpzP2I5NTdmODIiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIuanM/Yjk1N2Y4MiIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdC5qcz9iOTU3ZjgyIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9JbmNvbXBsZXRlTGlzdC5qcz9iOTU3ZjgyIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9Db21wbGV0ZUxpc3QuanM/Yjk1N2Y4MiIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdEhlYWRlci5qcz9iOTU3ZjgyIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9OZXdJdGVtRm9ybS5qcz9iOTU3ZjgyIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SXRlbVRleHRBcmVhLmpzP2I5NTdmODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInXG5pbXBvcnQgY3JlYXRlUGFsZXR0ZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBjcmVhdGVNdWlUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgeyBwdXJwbGUsIGdyZWVuLCBncmV5IH0gZnJvbSAnbWF0ZXJpYWwtdWkvY29sb3JzJ1xuXG5jb25zdCBjcmVhdGVEZWZhdWx0Q29udGV4dCA9ICgpID0+XG4gIE11aVRoZW1lUHJvdmlkZXIuY3JlYXRlRGVmYXVsdENvbnRleHQoe1xuICAgIHRoZW1lOiBjcmVhdGVNdWlUaGVtZSh7XG4gICAgICBwYWxldHRlOiBjcmVhdGVQYWxldHRlKHtcbiAgICAgICAgcHJpbWFyeTogZ3JleVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4vLyBTaW5nbGV0b24gaGFjayBhcyB0aGVyZSBpcyBubyB3YXkgdG8gcGFzcyB2YXJpYWJsZXMgZnJvbSBfZG9jdW1lbnQuanMgdG8gcGFnZXMgeWV0LlxubGV0IGNvbnRleHQgPSBudWxsXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0Q29udGV4dCAoKSB7XG4gIGNvbnRleHQgPSBjcmVhdGVEZWZhdWx0Q29udGV4dCgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0Q29udGV4dCAoKSB7XG4gIC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgc3RvcmUgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIGNvbnRleHRcbiAgfVxuXG4gIC8vIFJldXNlIHN0b3JlIG9uIHRoZSBjbGllbnQtc2lkZVxuICBpZiAoIWNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY3JlYXRlRGVmYXVsdENvbnRleHQoKVxuICB9XG5cbiAgcmV0dXJuIGNvbnRleHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGVmYXVsdENvbnRleHRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvc3R5bGUvY3JlYXRlRGVmYXVsdENvbnRleHQuanMiLCJpbXBvcnQgeyByZWQscGluayxwdXJwbGUsZGVlcFB1cnBsZSxpbmRpZ28sYmx1ZSwgbGlnaHRCbHVlLCBjeWFuLCB0ZWFsLCBncmVlbiwgbGlnaHRHcmVlbiwgbGltZSwgeWVsbG93LCBhbWJlciwgb3JhbmdlLCBkZWVwT3JhbmdlLHdoaXRlLGJsYWNrLGdyZXkgfSBmcm9tIFwibWF0ZXJpYWwtdWkvY29sb3JzXCJcblxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuXG4vLyBmdW5jdGlvbiBjb2xvclBhcnNlckNvbXBvc2VyKG1vZGlmaWVyXG4vLyB9XG5cblxuZnVuY3Rpb24gY29sb3JQYXJzZXJDb21wb3Nlcihtb2RpZmllcil7XG5cblx0XHR2YXIgY29sb3JzID0geyByZWQscGluayxwdXJwbGUsZGVlcFB1cnBsZSxpbmRpZ28sYmx1ZSwgbGlnaHRCbHVlLCBjeWFuLCB0ZWFsLCBncmVlbiwgbGlnaHRHcmVlbiwgbGltZSwgeWVsbG93LCBhbWJlciwgb3JhbmdlLCBkZWVwT3JhbmdlIH07XG5cblx0cmV0dXJuIGZ1bmN0aW9uKGNvbG9yVGV4dCl7XG5cblxuXHRcdGlmKCBjb2xvcnMuaGFzT3duUHJvcGVydHkoY29sb3JUZXh0KSl7XG5cdFx0XHRyZXR1cm4gY29sb3JzW2NvbG9yVGV4dF1bbW9kaWZpZXJdXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAnbm8gbWF0Y2gnXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0Q29sb3JQYXJzZXIoY29sb3JUZXh0LCBjb21wbGV0ZSl7XG5cdHZhciB3aGl0ZUxpc3QgPSBbJ3JlZCcsJ3BpbmsnLCdwdXJwbGUnLCdkZWVwUHVycGxlJywnaW5kaWdvJywnYmx1ZScsJ3RlYWwnLCdkZWVwT3JhbmdlJywnYnJvd24nLCdibHVlR3JleSddO1xuXHR2YXIgYmxhY2tMaXN0ID0gWydsaWdodEJsdWUnLCdjeWFuJywnZ3JlZW4nLCdsaWdodEdyZWVuJywnbGltZScsJ3llbGxvdycsJ2FtYmVyJywnb3JhbmdlJywnZ3JleSddO1xuXHRpZihjb21wbGV0ZSl7XG5cdFx0aWYoXy5pbmNsdWRlcyh3aGl0ZUxpc3QsIGNvbG9yVGV4dCkpe1xuXHRcdFx0cmV0dXJuICcjMDAwMDAwJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJyNmZmZmZmYnXG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdFx0aWYoXy5pbmNsdWRlcyh3aGl0ZUxpc3QsIGNvbG9yVGV4dCkpe1xuXHRcdFx0XHRyZXR1cm4gJyNmZmZmZmYnXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAnIzAwMDAwMCdcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjY2VudFRleHRDb2xvclBhcnNlcihjb2xvclRleHQpe1xuXHR2YXIgd2hpdGVMaXN0ID0gWydyZWQnLCdwaW5rJywncHVycGxlJywnZGVlcFB1cnBsZScsICdpbmRpZ28nLCdibHVlJ11cblx0dmFyIGJsYWNrTGlzdCA9IFsnbGlnaHRCbHVlJywgJ2N5YW4nLCd0ZWFsJywnZ3JlbicsJ2xpZ2h0R3JlZW4nLCdsaW1lJywneWVsbG93JywnYW1iZXInLCdvcmFuZ2UnLCdkZWVwT3JhbmdlJ11cblxuXHRpZihfLmluY2x1ZGVzKHdoaXRlTGlzdCwgY29sb3JUZXh0KSl7XG5cdFx0cmV0dXJuICcjZmZmZmZmJ1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAnIzAwMDAwMCdcblx0fVxufVxuXG5leHBvcnQgY29uc3QgcHJpbWFyeUNvbG9yUGFyc2VyID0gY29sb3JQYXJzZXJDb21wb3Nlcig1MDApO1xuXG5leHBvcnQgY29uc3QgYWNjZW50Q29sb3JQYXJzZXIgPSBjb2xvclBhcnNlckNvbXBvc2VyKCdBNDAwJylcblxuZXhwb3J0IGNvbnN0IGZhZGVkQ29sb3JQYXJzZXIgPSBjb2xvclBhcnNlckNvbXBvc2VyKDEwMClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2hlbHBlcnMvY29sb3JQYXJzZXIuanMiLCJleHBvcnQgY29uc3QgTkVXX0lURU0gPSBcIk5FV19JVEVNXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0JBU0UgPSBcIkNIQU5HRV9CQVNFXCI7XG5leHBvcnQgY29uc3QgQ09NUExFVEVfSVRFTSA9IFwiQ09NUExFVEVfSVRFTVwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9JVEVNID0gXCJERUxFVEVfSVRFTVwiO1xuZXhwb3J0IGNvbnN0IFJFT1JERVJfSVRFTSA9IFwiUkVPUkRFUl9JVEVNXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0NPTE9SID0gXCJDSEFOR0VfQ09MT1JcIlxuXG4vLyA9PT09PT09PT09PT1cbi8vIFRvIEltcGxlbWVudFxuLy8gPT09PT09PT09PT09XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfSVRFTSA9IFwiVVBEQVRFX0lURU1cIjtcblxuLy8gPT09PT09PT09PT09PT09XG4vLyBBY3Rpb24gQ3JlYXRvcnNcbi8vID09PT09PT09PT09PT09PVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3SXRlbShjb250ZW50ID0gXCJcIiwgcGFyZW50ID0gXCJyb290XCIpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBORVdfSVRFTSxcblx0XHRwYXlsb2FkOiB7XG5cdFx0XHRjb250ZW50LFxuXHRcdFx0cGFyZW50XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQmFzZUl0ZW0oaWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfQkFTRSxcblx0XHRwYXlsb2FkOiBpZFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxldGVJdGVtKGlkKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ09NUExFVEVfSVRFTSxcblx0XHRwYXlsb2FkOiBpZFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlSXRlbShpZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IERFTEVURV9JVEVNLFxuXHRcdHBheWxvYWQ6IGlkXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW9yZGVySXRlbShwYXJlbnRJRCwgb2xkSW5kZXgsIG5ld0luZGV4KSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogUkVPUkRFUl9JVEVNLFxuXHRcdHBheWxvYWQ6IHtcblx0XHRcdHBhcmVudElELFxuXHRcdFx0b2xkSW5kZXgsXG5cdFx0XHRuZXdJbmRleFxuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbG9yKGlkLGNvbG9yKXtcblx0cmV0dXJue1xuXHRcdHR5cGU6IENIQU5HRV9DT0xPUixcblx0XHRwYXlsb2FkOiB7XG5cdFx0XHRpZCxcblx0XHRcdGNvbG9yXG5cdFx0fVxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2FjdGlvbnMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0LCBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzJ1xuaW1wb3J0IHsgZ2V0RGVmYXVsdENvbnRleHQgfSBmcm9tICcuL3N0eWxlL2NyZWF0ZURlZmF1bHRDb250ZXh0J1xuXG5jb25zdCBzdHlsZVNoZWV0ID0gY3JlYXRlU3R5bGVTaGVldCgnQXBwJywgdGhlbWUgPT4gKHtcbiAgJ0BnbG9iYWwnOiB7XG4gICAgaHRtbDoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsXG4gICAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLCAvLyBBbnRpYWxpYXNpbmcuXG4gICAgICBNb3pPc3hGb250U21vb3RoaW5nOiAnZ3JheXNjYWxlJyAvLyBBbnRpYWxpYXNpbmcuXG4gICAgfSxcbiAgICBib2R5OiB7XG4gICAgICBtYXJnaW46IDBcbiAgICB9LFxuICAgIGE6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgICB9XG4gIH1cbn0pKVxuXG5sZXQgQXBwV3JhcHBlciA9IHByb3BzID0+IDxkaXY+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuXG5BcHBXcmFwcGVyID0gd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShBcHBXcmFwcGVyKVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpXG4gICAgaWYgKGpzc1N0eWxlcyAmJiBqc3NTdHlsZXMucGFyZW50Tm9kZSkge1xuICAgICAganNzU3R5bGVzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBzdHlsZU1hbmFnZXIsIHRoZW1lIH0gPSBnZXREZWZhdWx0Q29udGV4dCgpXG4gICAgcmV0dXJuIChcbiAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHN0eWxlTWFuYWdlcj17c3R5bGVNYW5hZ2VyfSB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8QXBwV3JhcHBlcj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9BcHBXcmFwcGVyPlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuXG5BcHAucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvQXBwLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBTb3J0YWJsZUhhbmRsZSB9IGZyb20gXCJyZWFjdC1zb3J0YWJsZS1ob2NcIjtcbmltcG9ydCB7IExpc3RJdGVtLCBMaXN0SXRlbVRleHQgfSBmcm9tIFwibWF0ZXJpYWwtdWkvTGlzdFwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCJtYXRlcmlhbC11aS9DaGVja2JveFwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b25cIjtcbmltcG9ydCBSZW9yZGVyIGZyb20gXCJtYXRlcmlhbC11aS1pY29ucy9SZW9yZGVyXCI7XG5pbXBvcnQgRG90IGZyb20gJ21hdGVyaWFsLXVpLWljb25zL0JyaWdodG5lc3MxJ1xuaW1wb3J0IERlbGV0ZUZvcmV2ZXIgZnJvbSBcIm1hdGVyaWFsLXVpLWljb25zL0RlbGV0ZUZvcmV2ZXJcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tICdtYXRlcmlhbC11aS1pY29ucy9TZXR0aW5ncydcbmltcG9ydCBGb3JtYXRMaXN0QnVsbGV0ZWQgIGZyb20gXCJtYXRlcmlhbC11aS1pY29ucy9Gb3JtYXRMaXN0QnVsbGV0ZWRcIjtcbmltcG9ydCB7IHJlZCxwaW5rLHB1cnBsZSxkZWVwUHVycGxlLGluZGlnbyxibHVlLCBsaWdodEJsdWUsIGN5YW4sIHRlYWwsIGdyZWVuLCBsaWdodEdyZWVuLCBsaW1lLCB5ZWxsb3csIGFtYmVyLCBvcmFuZ2UsIGRlZXBPcmFuZ2UsIGdyZXkgfSBmcm9tIFwibWF0ZXJpYWwtdWkvY29sb3JzXCJcbmltcG9ydCBCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvQnV0dG9uJztcbmltcG9ydCBNZW51LCB7IE1lbnVJdGVtIH0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdtYXRlcmlhbC11aS9UeXBvZ3JhcGh5JztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL0RpdmlkZXInO1xuaW1wb3J0IHtwcmltYXJ5Q29sb3JQYXJzZXIsIGZhZGVkQ29sb3JQYXJzZXJ9IGZyb20gJy4uL2hlbHBlcnMvY29sb3JQYXJzZXIuanMnXG5pbXBvcnQgTGlzdEl0ZW1UZXh0QXJlYSBmcm9tICcuL0xpc3RJdGVtVGV4dEFyZWEuanMnXG5cbmNvbnN0IERyYWdIYW5kbGUgPSBTb3J0YWJsZUhhbmRsZSgocHJvcHMpID0+e1xuXG5cdHZhciBhY3RpdmVTdHlsZSA9IHByb3BzLmNvbXBsZXRlID8ge30gOiB7Y3Vyc29yOidwb2ludGVyJ31cblx0dmFyIGNlbnRlclN0eWxlID0ge2Rpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBtYXJnaW46MTJ9XG5cblx0cmV0dXJuKFxuXHRcdDxzcGFuIHN0eWxlPXt7Li4ucHJvcHMuY29tcGxldGVTdHlsZSwgLi4uYWN0aXZlU3R5bGUsIC4uLmNlbnRlclN0eWxlfX0+XG5cdFx0PFJlb3JkZXIgLz5cblx0XHQ8L3NwYW4+XG5cdFx0KX1cbik7XG5cbmNvbnN0IENvbG9yTWVudSA9IChwcm9wcykgID0+IHtcblx0dmFyIGNvbG9ycyA9IFsncmVkJywgJ3B1cnBsZScsICdsaWdodEJsdWUnLCAndGVhbCcsICdsaWdodEdyZWVuJywgJ3llbGxvdycsICdvcmFuZ2UnLCAncGluayddXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdHtjb2xvcnMubWFwKChjb2xvciwgaW5kZXgpPT57XG5cblx0XHRcdFx0dmFyIGJyZWFrTGluZSA9IGluZGV4ICUgNCA9PT0gMyA/IDxiciAvPiA6IFwiXCJcblxuXHRcdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxzcGFuIGtleT17YCR7Y29sb3J9LSR7aW5kZXh9YH1cblx0XHRcdFx0b25DbGljaz17cHJvcHMuY2xpY2tIYW5kbGVyKGNvbG9yKX0+XG5cdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdHN0eWxlPXt7Y29sb3I6cHJpbWFyeUNvbG9yUGFyc2VyKGNvbG9yKX19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8RG90IC8+XG5cdFx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdFx0e2JyZWFrTGluZX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQpXG5cdFx0XHR9KX1cblx0XHQ8L2Rpdj5cblx0XHQpXG59XG5cblxuY2xhc3MgQmFzZUxpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0b3BlbjpmYWxzZSxcblx0XHRcdGFuY2hvckVsOiB1bmRlZmluZWRcblx0XHR9XG5cblx0XHR0aGlzLmNvbXBsZXRlRGlzcGxheSA9IHRoaXMuY29tcGxldGVEaXNwbGF5LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vcGVuTWVudSA9IHRoaXMub3Blbk1lbnUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNsb3NlTWVudSA9IHRoaXMuY2xvc2VNZW51LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jb2xvckl0ZW1DbGlja0hhbmRsZXIgPSB0aGlzLmNvbG9ySXRlbUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuXHR9XG5cblx0IGl0ZW0gPSB0aGlzLnByb3BzLnZhbHVlO1xuXG5cdGluY29tcGxldGVMaXN0U3R5bGUgPSB7IGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yUGFyc2VyKHRoaXMuaXRlbS5jb2xvcikgfTtcblx0Y29tcGxldGVMaXN0U3R5bGUgPSB7IGJhY2tncm91bmRDb2xvcjogZmFkZWRDb2xvclBhcnNlcih0aGlzLml0ZW0uY29sb3IpIH07XG5cdC8vIGxpc3RJdGVtU3R5bGUgPSB0aGlzLml0ZW0uY29tcGxldGVcblx0Ly8gXHQ/IHRoaXMuY29tcGxldGVMaXN0U3R5bGVcblx0Ly8gXHQ6IHRoaXMuaW5jb21wbGV0ZUxpc3RTdHlsZTtcblx0Ly8gbGlzdEl0ZW1TdHlsZSA9IHtiYWNrZ3JvdW5kQ29sb3I6dGhpcy5zdGF0ZS5iZ0NvbG9yfVxuXHRjb21wbGV0ZUdyZXkgPSBncmV5WzUwMF07XG5cdGNvbXBsZXRlTGluZVN0eWxlID0gdGhpcy5pdGVtLmNvbXBsZXRlXG5cdFx0PyB7IGNvbG9yOiB0aGlzLmNvbXBsZXRlR3JleSwgdGV4dERlY29yYXRpb246IFwibGluZS10aHJvdWdoXCIgfVxuXHRcdDoge307XG5cdGNvbXBsZXRlU3R5bGUgPSB0aGlzLml0ZW0uY29tcGxldGVcblx0PyB7IGNvbG9yOiB0aGlzLmNvbXBsZXRlR3JleSB9XG5cdDogeyBjb2xvcjogdGhpcy50ZXh0Q29sb3J9O1xuXG5cblx0Y29tcGxldGVEaXNwbGF5KCkge1xuXHRcdHZhciBjb21wbGV0ZWQgPSB0aGlzLml0ZW0uY29tcGxldGVDaGlsZHJlbi5sZW5ndGg7XG5cdFx0dmFyIHRvdGFsID0gY29tcGxldGVkICsgdGhpcy5pdGVtLmluY29tcGxldGVDaGlsZHJlbi5sZW5ndGg7XG5cdFx0dmFyIHRleHRDb2xvciA9IHRoaXMucHJvcHMudmFsdWUuY29tcGxldGU/IHRoaXMuY29tcGxldGVHcmV5IDogdGhpcy5wcm9wcy50ZXh0Q29sb3Jcblx0XHR2YXIgZGlzcGxheVRleHRTdHlsZSA9IHRoaXMucHJvcHMudmFsdWUuY29tcGxldGVcblx0XHQ/IHsgY29sb3I6IHRoaXMuY29tcGxldGVHcmV5fVxuXHRcdDogeyBjb2xvcjogdGhpcy5wcm9wcy50ZXh0Q29sb3J9O1xuXHRcdGlmICh0b3RhbCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0c3R5bGU9e2Rpc3BsYXlUZXh0U3R5bGV9XG5cdFx0XHRcdD57YCggJHtjb21wbGV0ZWR9IC8gJHt0b3RhbH0gY29tcGxldGUpYH08L3NwYW4+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnRlbnQoKSB7XG5cdFx0dmFyIHRleHRDb2xvciA9IHRoaXMucHJvcHMudmFsdWUuY29tcGxldGU/IHRoaXMuY29tcGxldGVHcmV5IDogdGhpcy5wcm9wcy50ZXh0Q29sb3Jcblx0XHR2YXIgY29udGVudFRleHRTdHlsZSA9IHRoaXMucHJvcHMudmFsdWUuY29tcGxldGVcblx0XHQ/IHsgY29sb3I6IHRoaXMuY29tcGxldGVHcmV5LCB0ZXh0RGVjb3JhdGlvbjogXCJsaW5lLXRocm91Z2hcIiB9XG5cdFx0OiB7IGNvbG9yOiB0aGlzLnByb3BzLnRleHRDb2xvcn07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzcGFuIHN0eWxlPXt7Li4uY29udGVudFRleHRTdHlsZSwgd29yZFdyYXA6J2JyZWFrLXdvcmQnLCB3b3JkQnJlYWs6J2JyZWFrLWFsbCd9fT5cblx0XHRcdFx0e3RoaXMuaXRlbS5jb250ZW50fVxuXHRcdFx0PC9zcGFuPlxuXHRcdCk7XG5cdH1cblxuXHRvcGVuTWVudShldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7b3Blbjp0cnVlLCBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldH0pXG5cdH1cblxuXHRjbG9zZU1lbnUoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtvcGVuOmZhbHNlfSlcblx0fVxuXG5cdGNvbG9ySXRlbUNsaWNrSGFuZGxlcihjb2xvck5hbWUpe1xuXHRcdHZhciBjbG9zZSA9IHRoaXMuY2xvc2VNZW51XG5cdFx0bGV0IGNoYW5nZUNvbG9yID0gdGhpcy5wcm9wcy5jaGFuZ2VDb2xvckNvbXBvc2VyKHRoaXMuaXRlbS5pZCwgY29sb3JOYW1lKVxuXHRcdGxldCBwcm9wc0NvbG9yID0gdGhpcy5wcm9wcy5iZ0NvbG9yXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCl7XG5cdFx0Y2hhbmdlQ29sb3IoKVxuXHRcdGNsb3NlKClcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHR2YXIgdGV4dENvbG9yID0gdGhpcy5wcm9wcy52YWx1ZS5jb21wbGV0ZT8gdGhpcy5jb21wbGV0ZUdyZXkgOiB0aGlzLnByb3BzLnRleHRDb2xvclxuXHRyZXR1cm4gKFxuXHRcdDxMaXN0SXRlbSBkaXZpZGVyPXt0cnVlfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy5pdGVtQ29sb3IsIHBhZGRpbmc6MTJ9fT5cblx0XHRcdDxEcmFnSGFuZGxlXG5cdFx0XHRcdGNvbXBsZXRlU3R5bGU9e3tjb2xvcjp0ZXh0Q29sb3J9fVxuXHRcdFx0XHRjb21wbGV0ZT17dGhpcy5pdGVtLmNvbXBsZXRlfVxuXHRcdFx0Lz5cblx0XHRcdDxDaGVja2JveFxuXHRcdFx0XHRjaGVja2VkPXt0aGlzLml0ZW0uY29tcGxldGV9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMucHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXIodGhpcy5pdGVtLmlkKX1cblx0XHRcdFx0c3R5bGU9e3tjb2xvcjp0ZXh0Q29sb3J9fVxuXHRcdFx0Lz5cblxuXHRcdFx0PExpc3RJdGVtVGV4dEFyZWFcblx0XHRcdHByaW1hcnk9e3RoaXMuY29udGVudCgpfVxuXHRcdFx0c2Vjb25kYXJ5PXt0aGlzLmNvbXBsZXRlRGlzcGxheSgpfVxuXHRcdFx0dGV4dENvbG9yPXt0ZXh0Q29sb3J9XG5cdFx0XHRyYXdUZXh0PXt0aGlzLml0ZW0uY29udGVudH1cblx0XHRcdC8+XG5cblx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMucHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyKHRoaXMuaXRlbS5pZCl9XG5cdFx0XHRcdHN0eWxlPXt7Y29sb3I6dGV4dENvbG9yfX1cblx0XHRcdD5cblx0XHRcdFx0PEZvcm1hdExpc3RCdWxsZXRlZCAvPlxuXHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0PEljb25CdXR0b25cblx0XHRcdG9uQ2xpY2s9e3RoaXMub3Blbk1lbnV9XG5cdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHQ+XG5cdFx0XHRcdDxTZXR0aW5ncyAvPlxuXHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0PE1lbnVcblx0XHRcdGlkPXtgJHt0aGlzLml0ZW0uaWR9LW1lbnVgfVxuXHRcdFx0b3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9e3RoaXMuY2xvc2VNZW51fVxuXHRcdFx0YW5jaG9yRWw9e3RoaXMuc3RhdGUuYW5jaG9yRWx9XG5cdFx0XHQ+XG5cdFx0XHRcdDxUeXBvZ3JhcGh5XG5cdFx0XHRcdHR5cGU9e1wic3ViaGVhZGluZ1wifVxuXHRcdFx0XHRhbGlnbj17J2NlbnRlcid9XG5cdFx0XHRcdHN0eWxlPXt7b3V0bGluZTonbm9uZScsIHBhZGRpbmdMZWZ0OjE2fX1cblx0XHRcdFx0PkNoYW5nZSBDb2xvcjwvVHlwb2dyYXBoeT5cblx0XHRcdFx0PERpdmlkZXIgLz5cblx0XHRcdFx0PENvbG9yTWVudVxuXHRcdFx0XHRjbGlja0hhbmRsZXI9e3RoaXMuY29sb3JJdGVtQ2xpY2tIYW5kbGVyfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8RGl2aWRlciAvPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX1cblx0XHRcdFx0PlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdHN0eWxlPXt7Y29sb3I6J3doaXRlJywgYmFja2dyb3VuZENvbG9yOnJlZFs1MDBdLCBtYXJnaW5Ub3A6OH19XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMucHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyKHRoaXMuaXRlbS5pZCl9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8RGVsZXRlRm9yZXZlciAvPiB7J0RlbGV0ZSBJdGVtJ31cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9NZW51PlxuXHRcdDwvTGlzdEl0ZW0+XG5cdCk7XG5cdH1cbn07XG5cbkJhc2VMaXN0SXRlbS5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZUxpc3RJdGVtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RJdGVtLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvQnV0dG9uJ1xuaW1wb3J0IERpYWxvZywge1xuICBEaWFsb2dUaXRsZSxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nQ29udGVudFRleHQsXG4gIERpYWxvZ0FjdGlvbnNcbn0gZnJvbSAnbWF0ZXJpYWwtdWkvRGlhbG9nJ1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnbWF0ZXJpYWwtdWkvVHlwb2dyYXBoeSdcbmltcG9ydCBBcHAgZnJvbSAnLi4vdG9kby1saXN0L3NyYy9BcHAuanMnXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi4vdG9kby1saXN0L3NyYy9pbmRleC5qcydcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHBhZGRpbmdUb3A6IDIwMFxuICB9XG59XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2VcbiAgfTtcblxuICBoYW5kbGVSZXF1ZXN0Q2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH0pXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiB0cnVlXG4gICAgfSlcbiAgfTtcblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QXBwPlxuICAgICAgICA8VG9kb0xpc3QgLz5cbiAgICAgIDwvQXBwPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdG9kby5qcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG4vLyBpbXBvcnQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIGZyb20gXCIuL3JlZ2lzdGVyU2VydmljZVdvcmtlclwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCByZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcbmltcG9ydCBSZWR1eFByb21pc2UgZnJvbSBcInJlZHV4LXByb21pc2VcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBUb2RvQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9Ub2RvQ29udGFpbmVyLmpzJ1xuXG5cbmNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlV2l0aERldlRvb2xzKFxuXHRhcHBseU1pZGRsZXdhcmUoUmVkdXhQcm9taXNlKVxuKShjcmVhdGVTdG9yZSk7XG5cbmNvbnN0IEJvaWxlciA9ICgpID0+XG5cdDxQcm92aWRlciBzdG9yZT17Y3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZShyZWR1Y2Vycyl9PlxuXHRcdDxUb2RvQ29udGFpbmVyIC8+XG5cdDwvUHJvdmlkZXI+O1xuXG4vLyBSZWFjdERPTS5yZW5kZXIoPEJvaWxlciAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcbi8vIHJlZ2lzdGVyU2VydmljZVdvcmtlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBCb2lsZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2luZGV4LmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgaXRlbXMgZnJvbSBcIi4vaXRlbXNfcmVkdWNlci5qc1wiO1xuaW1wb3J0IGJhc2VJdGVtIGZyb20gXCIuL2Jhc2VJdGVtX3JlZHVjZXIuanNcIjtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuXHRpdGVtcyxcblx0YmFzZUl0ZW1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBORVdfSVRFTSwgQ09NUExFVEVfSVRFTSwgREVMRVRFX0lURU0sIFJFT1JERVJfSVRFTSwgQ0hBTkdFX0NPTE9SIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcblxuZnVuY3Rpb24gaXRlbXMoc3RhdGUgPSBzZWVkRGF0YSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIE5FV19JVEVNOlxuXHRcdFx0dmFyIG5ld0lEID0gcmFuZG9tSUQoKTtcblx0XHRcdHZhciBwYXJlbnRJRCA9IGFjdGlvbi5wYXlsb2FkLnBhcmVudDtcblx0XHRcdHZhciBuZXdJdGVtID0ge1xuXHRcdFx0XHRbbmV3SURdOiB7XG5cdFx0XHRcdFx0aWQ6IG5ld0lELFxuXHRcdFx0XHRcdGNvbnRlbnQ6IGFjdGlvbi5wYXlsb2FkLmNvbnRlbnQsXG5cdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdFx0XHRcdGNvbG9yOidsaWdodEJsdWUnLFxuXHRcdFx0XHRcdGNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdFx0XHRcdGluY29tcGxldGVDaGlsZHJlbjogW10sXG5cdFx0XHRcdFx0cGFyZW50OiBwYXJlbnRJRFxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0dmFyIG5ld1BhcmVudCA9IHsgW3BhcmVudElEXTogYWRkQ2hpbGQoc3RhdGVbcGFyZW50SURdLCBuZXdJRCkgfTtcblx0XHRcdHZhciBuZXdTdGF0ZSA9IF8ubWVyZ2Uoe30sIHN0YXRlLCBuZXdJdGVtLCBuZXdQYXJlbnQpO1xuXHRcdFx0cmV0dXJuIG5ld1N0YXRlO1xuXG5cdFx0Y2FzZSBDT01QTEVURV9JVEVNOlxuXHRcdFx0dmFyIGlkID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHR2YXIgbmV3U3RhdGUgPSBfLm1lcmdlKHt9LCBzdGF0ZSk7XG5cdFx0XHR2YXIgbmV3SXRlbSA9IHsgW2lkXTogbmV3U3RhdGVbaWRdIH07XG5cdFx0XHR2YXIgcGFyZW50SUQgPSBuZXdJdGVtW2lkXS5wYXJlbnQ7XG5cdFx0XHRuZXdJdGVtW2lkXS5jb21wbGV0ZSA9ICFuZXdJdGVtW2lkXS5jb21wbGV0ZTtcblx0XHRcdGlmIChuZXdJdGVtW2lkXS5jb21wbGV0ZSkge1xuXHRcdFx0XHRfLnB1bGwobmV3U3RhdGVbcGFyZW50SURdLmluY29tcGxldGVDaGlsZHJlbiwgaWQpO1xuXHRcdFx0XHRuZXdTdGF0ZVtwYXJlbnRJRF0uY29tcGxldGVDaGlsZHJlbi51bnNoaWZ0KGlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF8ucHVsbChuZXdTdGF0ZVtwYXJlbnRJRF0uY29tcGxldGVDaGlsZHJlbiwgaWQpO1xuXHRcdFx0XHRuZXdTdGF0ZVtwYXJlbnRJRF0uaW5jb21wbGV0ZUNoaWxkcmVuLnB1c2goaWQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIF8ubWVyZ2UobmV3U3RhdGUsIG5ld0l0ZW0pO1xuXG5cdFx0Y2FzZSBERUxFVEVfSVRFTTpcblx0XHRcdHZhciBpZCA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0dmFyIG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUpO1xuXHRcdFx0dmFyIHBhcmVudCA9IHN0YXRlW2lkXS5wYXJlbnQ7XG5cdFx0XHRuZXdTdGF0ZSA9IF8ub21pdChuZXdTdGF0ZSwgZ2VuZXJhdGVDaGlsZExpc3Qoc3RhdGUsIGlkKSk7XG5cdFx0XHRuZXdTdGF0ZVtwYXJlbnRdLmNvbXBsZXRlQ2hpbGRyZW4gPSBfLmZpbHRlcihcblx0XHRcdFx0bmV3U3RhdGVbcGFyZW50XS5jb21wbGV0ZUNoaWxkcmVuLFxuXHRcdFx0XHRuID0+IG4gIT09IGlkXG5cdFx0XHQpO1xuXHRcdFx0bmV3U3RhdGVbcGFyZW50XS5pbmNvbXBsZXRlQ2hpbGRyZW4gPSBfLmZpbHRlcihcblx0XHRcdFx0bmV3U3RhdGVbcGFyZW50XS5pbmNvbXBsZXRlQ2hpbGRyZW4sXG5cdFx0XHRcdG4gPT4gbiAhPT0gaWRcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gbmV3U3RhdGU7XG5cblx0XHRjYXNlIFJFT1JERVJfSVRFTTpcblx0XHRcdHZhciBuZXdTdGF0ZSA9IF8ubWVyZ2Uoe30sIHN0YXRlKTtcblx0XHRcdHZhciBwYXJlbnRJRCA9IGFjdGlvbi5wYXlsb2FkLnBhcmVudElEO1xuXHRcdFx0bmV3U3RhdGVbcGFyZW50SURdLmluY29tcGxldGVDaGlsZHJlbiA9IHJlb3JkZXIoXG5cdFx0XHRcdG5ld1N0YXRlW3BhcmVudElEXS5pbmNvbXBsZXRlQ2hpbGRyZW4sXG5cdFx0XHRcdGFjdGlvbi5wYXlsb2FkLm9sZEluZGV4LFxuXHRcdFx0XHRhY3Rpb24ucGF5bG9hZC5uZXdJbmRleFxuXHRcdFx0KTtcblx0XHRcdHJldHVybiBuZXdTdGF0ZTtcblxuXHRcdGNhc2UgQ0hBTkdFX0NPTE9SOlxuXHRcdFx0dmFyIG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUpXG5cdFx0XHRuZXdTdGF0ZVthY3Rpb24ucGF5bG9hZC5pZF0uY29sb3IgPSBhY3Rpb24ucGF5bG9hZC5jb2xvclxuXHRcdFx0cmV0dXJuIG5ld1N0YXRlO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBpdGVtcztcblxuLy8gLy8gU3RydWN0dXJlIG9mIEl0ZW1zXG4vLyBpZDoge1xuLy8gXHRjb250ZW50OlN0cmluZyxcbi8vIFx0cGFyZW50OmlkLFxuLy8gXHRjaGlsZHJlbjpbaWQsaWQsaWQuLi5dXG4vLyB9XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2hpbGRMaXN0KHN0YXRlLCBiYXNlSUQpIHtcblx0dmFyIGxpc3QgPSBbYmFzZUlEXTtcblx0bGlzdCA9IGxpc3Rcblx0XHQuY29uY2F0KHN0YXRlW2Jhc2VJRF0uY29tcGxldGVDaGlsZHJlbilcblx0XHQuY29uY2F0KHN0YXRlW2Jhc2VJRF0uaW5jb21wbGV0ZUNoaWxkcmVuKTtcblx0Zm9yICh2YXIgaSA9IDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bGlzdCA9IGxpc3Rcblx0XHRcdC5jb25jYXQoc3RhdGVbbGlzdFtpXV0uY29tcGxldGVDaGlsZHJlbilcblx0XHRcdC5jb25jYXQoc3RhdGVbbGlzdFtpXV0uaW5jb21wbGV0ZUNoaWxkcmVuKTtcblx0fVxuXHRyZXR1cm4gbGlzdDtcbn1cblxuZnVuY3Rpb24gcmFuZG9tSUQoKSB7XG5cdHJldHVybiBfLnJhbmRvbSgwLCA2NTUwMCwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZChpdGVtLCBjaGlsZCkge1xuXHRyZXR1cm4gXy5tZXJnZSh7fSwgaXRlbSwge1xuXHRcdGluY29tcGxldGVDaGlsZHJlbjogaXRlbS5pbmNvbXBsZXRlQ2hpbGRyZW4uY29uY2F0KGNoaWxkKVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVvcmRlcihhcnIsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuXHR2YXIgcmVtb3ZlZCA9IFtdO1xuXHRpZiAob2xkSW5kZXggPT09IDApIHtcblx0XHRyZW1vdmVkID0gYXJyLnNsaWNlKDEpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBiZWZvcmUgPSBhcnIuc2xpY2UoMCwgb2xkSW5kZXgpO1xuXHRcdHZhciBhZnRlciA9IGFyci5zbGljZShvbGRJbmRleCArIDEsIGFyci5sZW5ndGgpO1xuXHRcdHJlbW92ZWQgPSBbLi4uYmVmb3JlLCAuLi5hZnRlcl07XG5cdH1cblxuXHRpZiAobmV3SW5kZXggPT09IDApIHtcblx0XHRyZXR1cm4gW2FycltvbGRJbmRleF0sIC4uLnJlbW92ZWRdO1xuXHR9IGVsc2UgaWYgKG5ld0luZGV4ID09PSBhcnIubGVuZ3RoIC0gMSkge1xuXHRcdHJldHVybiBbLi4ucmVtb3ZlZCwgYXJyW29sZEluZGV4XV07XG5cdH0gZWxzZSB7XG5cdFx0YmVmb3JlID0gcmVtb3ZlZC5zbGljZSgwLCBuZXdJbmRleCk7XG5cdFx0YWZ0ZXIgPSByZW1vdmVkLnNsaWNlKG5ld0luZGV4LCByZW1vdmVkLmxlbmd0aCk7XG5cdFx0cmV0dXJuIFsuLi5iZWZvcmUsIGFycltvbGRJbmRleF0sIC4uLmFmdGVyXTtcblx0fVxufVxuXG5jb25zdCBzZWVkRGF0YSA9IHtcblx0MTAwMToge1xuXHRcdGlkOiAxMDAxLFxuXHRcdGNvbnRlbnQ6IFwiUmFuZG9tIHNlZWQgMVwiLFxuXHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRjb2xvcjoncmVkJyxcblx0XHRwYXJlbnQ6IFwicm9vdFwiLFxuXHRcdGNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdGluY29tcGxldGVDaGlsZHJlbjogWzEwMDRdXG5cdH0sXG5cdDEwMDI6IHtcblx0XHRpZDogMTAwMixcblx0XHRjb250ZW50OiBcIlJhbmRvbSBzZWVkIDJcIixcblx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0Y29sb3I6J3JlZCcsXG5cdFx0cGFyZW50OiBcInJvb3RcIixcblx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFsxMDAzXVxuXHR9LFxuXHQxMDAzOiB7XG5cdFx0aWQ6IDEwMDMsXG5cdFx0Y29udGVudDogXCJSYW5kb20gc2VlZCAzXCIsXG5cdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdGNvbG9yOidyZWQnLFxuXHRcdHBhcmVudDogMTAwMixcblx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFtdXG5cdH0sXG5cdDEwMDQ6IHtcblx0XHRpZDogMTAwNCxcblx0XHRjb250ZW50OiBcIlJhbmRvbSBzZWVkIDRcIixcblx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0Y29sb3I6J3JlZCcsXG5cdFx0cGFyZW50OiAxMDAxLFxuXHRcdGNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdGluY29tcGxldGVDaGlsZHJlbjogW11cblx0fSxcblx0MTAwNToge1xuXHRcdGlkOiAxMDA1LFxuXHRcdGNvbnRlbnQ6IFwiUmFuZG9tIHNlZWQgNVwiLFxuXHRcdGNvbXBsZXRlOiB0cnVlLFxuXHRcdGNvbG9yOidyZWQnLFxuXHRcdHBhcmVudDogXCJyb290XCIsXG5cdFx0Y29tcGxldGVDaGlsZHJlbjogW10sXG5cdFx0aW5jb21wbGV0ZUNoaWxkcmVuOiBbXVxuXHR9LFxuXHRyb290OiB7XG5cdFx0Y29sb3I6J3JlZCcsXG5cdFx0Y29tcGxldGVDaGlsZHJlbjogWzEwMDVdLFxuXHRcdGluY29tcGxldGVDaGlsZHJlbjogWzEwMDEsIDEwMDJdXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL2l0ZW1zX3JlZHVjZXIuanMiLCJpbXBvcnQgeyBDSEFOR0VfQkFTRSB9IGZyb20gXCIuLi9hY3Rpb25zL1wiO1xuXG5mdW5jdGlvbiBiYXNlSXRlbShzdGF0ZSA9IFwicm9vdFwiLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQ0hBTkdFX0JBU0U6XG5cdFx0XHRyZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlSXRlbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvcmVkdWNlcnMvYmFzZUl0ZW1fcmVkdWNlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG5cdG5ld0l0ZW0sXG5cdGNoYW5nZUJhc2VJdGVtLFxuXHRjb21wbGV0ZUl0ZW0sXG5cdGRlbGV0ZUl0ZW0sXG5cdHJlb3JkZXJJdGVtLFxuXHRjaGFuZ2VDb2xvclxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XG4vLyBpbXBvcnQgc3R5bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdEl0ZW0vc3R5bGUuY3NzXCI7XG5pbXBvcnQgTGlzdEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0SGVhZGVyLmpzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwibWF0ZXJpYWwtdWkvQ2FyZFwiO1xuXG5jbGFzcyBUb2RvQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5ld0l0ZW06IFwiXCJcblx0XHR9O1xuXHRcdHRoaXMuaW5wdXRVcGRhdGUgPSB0aGlzLmlucHV0VXBkYXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5uZXdJdGVtQWN0aW9uID0gdGhpcy5uZXdJdGVtQWN0aW9uLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jaGFuZ2VCYXNlQ29tcG9zZXIgPSB0aGlzLmNoYW5nZUJhc2VDb21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY29tcGxldGVJdGVtQ29tcG9zZXIgPSB0aGlzLmNvbXBsZXRlSXRlbUNvbXBvc2VyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5kZWxldGVJdGVtQ29tcG9zZXIgPSB0aGlzLmRlbGV0ZUl0ZW1Db21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVvcmRlckl0ZW1Db21wb3NlciA9IHRoaXMucmVvcmRlckl0ZW1Db21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZ2VuZXJhdGVDb21wbGV0ZSA9IHRoaXMuZ2VuZXJhdGVDb21wbGV0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2hhbmdlQ29sb3JDb21wb3NlciA9IHRoaXMuY2hhbmdlQ29sb3JDb21wb3Nlci5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aW5wdXRVcGRhdGUoZXZlbnQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgbmV3SXRlbTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuXHR9XG5cblx0bmV3SXRlbUFjdGlvbihjb250ZW50KSB7XG5cdFx0dGhpcy5wcm9wcy5uZXdJdGVtKGNvbnRlbnQsIHRoaXMucHJvcHMuYmFzZUl0ZW0pO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBuZXdJdGVtOiBcIlwiIH0pO1xuXHR9XG5cblx0Y2hhbmdlQmFzZUNvbXBvc2VyKGlkKSB7XG5cdFx0dmFyIGNoYW5nZUJhc2VJdGVtID0gdGhpcy5wcm9wcy5jaGFuZ2VCYXNlSXRlbTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRjaGFuZ2VCYXNlSXRlbShpZCk7XG5cdFx0fTtcblx0fVxuXG5cdGRlbGV0ZUl0ZW1Db21wb3NlcihpZCkge1xuXHRcdGxldCBkZWxldGVJdGVtRGlzcGF0Y2ggPSB0aGlzLnByb3BzLmRlbGV0ZUl0ZW07XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZGVsZXRlSXRlbURpc3BhdGNoKGlkKTtcblx0XHR9O1xuXHR9XG5cblx0Y29tcGxldGVJdGVtQ29tcG9zZXIoaWQpIHtcblx0XHRsZXQgY29tcGxldGVJdGVtRGlzcGF0Y2ggPSB0aGlzLnByb3BzLmNvbXBsZXRlSXRlbTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wbGV0ZUl0ZW1EaXNwYXRjaChpZCk7XG5cdFx0fTtcblx0fVxuXG5cdHJlb3JkZXJJdGVtQ29tcG9zZXIoaWQsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuXHRcdGxldCByZW9yZGVySXRlbURpc3BhdGNoID0gdGhpcy5wcm9wcy5yZW9yZGVySXRlbTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW9yZGVySXRlbURpc3BhdGNoKGlkLCBvbGRJbmRleCwgbmV3SW5kZXgpO1xuXHRcdH07XG5cdH1cblxuXHRnZW5lcmF0ZUNvbXBsZXRlKCkge1xuXHRcdHZhciBjb21wbGV0ZUNvdW50ID0gdGhpcy5wcm9wcy5pdGVtc1t0aGlzLnByb3BzLmJhc2VJdGVtXVxuXHRcdFx0LmNvbXBsZXRlQ2hpbGRyZW4ubGVuZ3RoO1xuXHRcdHZhciB0b3RhbENvdW50ID1cblx0XHRcdHRoaXMucHJvcHMuaXRlbXNbdGhpcy5wcm9wcy5iYXNlSXRlbV0uaW5jb21wbGV0ZUNoaWxkcmVuLmxlbmd0aCArXG5cdFx0XHRjb21wbGV0ZUNvdW50O1xuXHRcdHJldHVybiBgKCAke2NvbXBsZXRlQ291bnR9IC8gJHt0b3RhbENvdW50fSBDb21wbGV0ZSApYDtcblx0fVxuXG5cdGNoYW5nZUNvbG9yQ29tcG9zZXIoaWQsIGNvbG9yKSB7XG5cdFx0bGV0IGNoYW5nZUNvbG9yRGlzcGF0Y2ggPSB0aGlzLnByb3BzLmNoYW5nZUNvbG9yXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpe1xuXHRcdFx0Y2hhbmdlQ29sb3JEaXNwYXRjaChpZCwgY29sb3IpXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjdXJyZW50SXRlbSA9IHRoaXMucHJvcHMuaXRlbXNbdGhpcy5wcm9wcy5iYXNlSXRlbV07XG5cdFx0dmFyIHBhcmVudEl0ZW0gPSB0aGlzLnByb3BzLml0ZW1zW2N1cnJlbnRJdGVtLnBhcmVudF07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCJhdXRvXCIsIG1hcmdpbjogXCIxNnB4XCIgfX0+XG5cdFx0XHRcdDxMaXN0SGVhZGVyXG5cdFx0XHRcdFx0YmFzZUl0ZW09e3RoaXMucHJvcHMuYmFzZUl0ZW19XG5cdFx0XHRcdFx0YmFzZUl0ZW1UZXh0PXtjdXJyZW50SXRlbS5jb250ZW50fVxuXHRcdFx0XHRcdGN1cnJlbnRQYXJlbnQ9e2N1cnJlbnRJdGVtLnBhcmVudH1cblx0XHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3RoaXMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRcdGNvdW50ZXJUZXh0PXt0aGlzLmdlbmVyYXRlQ29tcGxldGUoKX1cblx0XHRcdFx0XHRpdGVtcz17dGhpcy5wcm9wcy5pdGVtc31cblx0XHRcdFx0XHRuZXdJdGVtQWN0aW9uPXt0aGlzLm5ld0l0ZW1BY3Rpb259XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxMaXN0XG5cdFx0XHRcdFx0bGlzdD17dGhpcy5wcm9wcy5pdGVtc31cblx0XHRcdFx0XHRiYXNlSXRlbT17dGhpcy5wcm9wcy5iYXNlSXRlbX1cblx0XHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3RoaXMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17dGhpcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3RoaXMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0cmVvcmRlckl0ZW1Db21wb3Nlcj17dGhpcy5yZW9yZGVySXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXIgPXt0aGlzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0NhcmQ+XG5cdFx0KTtcblx0fVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoeyBpdGVtcywgYmFzZUl0ZW0gfSkge1xuXHRyZXR1cm4geyBpdGVtcywgYmFzZUl0ZW0gfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG5cdHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoXG5cdFx0eyBuZXdJdGVtLCBjaGFuZ2VCYXNlSXRlbSwgY29tcGxldGVJdGVtLCBkZWxldGVJdGVtLCByZW9yZGVySXRlbSwgY2hhbmdlQ29sb3IgfSxcblx0XHRkaXNwYXRjaFxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUb2RvQ29udGFpbmVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29udGFpbmVycy9Ub2RvQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBJbmNvbXBsZXRlTGlzdCBmcm9tIFwiLi9JbmNvbXBsZXRlTGlzdC5qc1wiO1xuaW1wb3J0IENvbXBsZXRlTGlzdCBmcm9tIFwiLi9Db21wbGV0ZUxpc3QuanNcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlU2hlZXQgfSBmcm9tIFwibWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5cblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJMaXN0XCIsIHRoZW1lID0+ICh7XG5cdGNvbnRhaW5lcjoge1xuXHR9XG59KSk7XG5cbmNvbnN0IExpc3QgPSBwcm9wcyA9PiB7XG5cdGNvbnN0IGl0ZW1zTGlzdCA9IHByb3BzLmxpc3Q7XG5cdGNvbnN0IGJhc2VJdGVtID0gcHJvcHMuYmFzZUl0ZW07XG5cdGxldCBjb21wbGV0ZUxpc3RJdGVtcyA9IGl0ZW1zTGlzdFtiYXNlSXRlbV0uY29tcGxldGVDaGlsZHJlbjtcblx0bGV0IGluY29tcGxldGVMaXN0SXRlbXMgPSBpdGVtc0xpc3RbYmFzZUl0ZW1dLmluY29tcGxldGVDaGlsZHJlbjtcblxuXHRjb21wbGV0ZUxpc3RJdGVtcyA9IHBvcHVsYXRlTGlzdChjb21wbGV0ZUxpc3RJdGVtcyk7XG5cdGluY29tcGxldGVMaXN0SXRlbXMgPSBwb3B1bGF0ZUxpc3QoaW5jb21wbGV0ZUxpc3RJdGVtcyk7XG5cblx0ZnVuY3Rpb24gcG9wdWxhdGVMaXN0KGxpc3RBcnIpIHtcblx0XHRyZXR1cm4gbGlzdEFyci5tYXAobGlzdElEID0+IGl0ZW1zTGlzdFtsaXN0SURdKTtcblx0fVxuXG5cdGNvbnN0IGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cblx0XHRcdDxJbmNvbXBsZXRlTGlzdFxuXHRcdFx0XHRpdGVtcz17aW5jb21wbGV0ZUxpc3RJdGVtc31cblx0XHRcdFx0cGFyZW50SUQ9e3Byb3BzLmJhc2VJdGVtfVxuXHRcdFx0XHRyZW5kZXJDaGlsZHJlbj17dHJ1ZX1cblx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXtwcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdHJlb3JkZXJJdGVtQ29tcG9zZXI9e3Byb3BzLnJlb3JkZXJJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXIgPXtwcm9wcy5jaGFuZ2VDb2xvckNvbXBvc2VyfVxuXHRcdFx0Lz5cblx0XHRcdDxDb21wbGV0ZUxpc3Rcblx0XHRcdFx0aXRlbXM9e2NvbXBsZXRlTGlzdEl0ZW1zfVxuXHRcdFx0XHRwYXJlbnRJRD17cHJvcHMuYmFzZUl0ZW19XG5cdFx0XHRcdHJlbmRlckNoaWxkcmVuPXt0cnVlfVxuXHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0ZGVsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdGNvbXBsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0cmVvcmRlckl0ZW1Db21wb3Nlcj17cHJvcHMucmVvcmRlckl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3NlciA9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuTGlzdC5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShMaXN0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHtcblx0U29ydGFibGVDb250YWluZXIsXG5cdFNvcnRhYmxlRWxlbWVudFxufSBmcm9tIFwicmVhY3Qtc29ydGFibGUtaG9jXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vTGlzdEl0ZW0uanNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCJtYXRlcmlhbC11aS9MaXN0XCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IHtwcmltYXJ5Q29sb3JQYXJzZXIsIGZhZGVkQ29sb3JQYXJzZXIsIHRleHRDb2xvclBhcnNlcn0gZnJvbSAnLi4vaGVscGVycy9jb2xvclBhcnNlci5qcydcblxuXG5jb25zdCBzdHlsZVNoZWV0ID0gY3JlYXRlU3R5bGVTaGVldChcIkluY29tcGxldGVMaXN0XCIsIHRoZW1lID0+ICh7XG5cdGNvbnRhaW5lcjoge1xuXHRcdGxpc3RTdHlsZTogXCJub25lXCIsXG5cdFx0cGFkZGluZzogMCxcblx0XHRtYXJnaW46IDBcblx0fSxcblx0cm9vdDoge1xuXHRcdHBhZGRpbmc6IDBcblx0fVxufSkpO1xuXG5cbmNvbnN0IFNvcnRhYmxlTGlzdCA9IFNvcnRhYmxlQ29udGFpbmVyKChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxMaXN0IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NGb3JMaXN0fT5cblx0XHRcdHtwcm9wcy5pdGVtcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxTb3J0YWJsZUxpc3RJdGVtXG5cdFx0XHRcdFx0XHRrZXk9e2BpdGVtLSR7dmFsdWUuaWR9YH1cblx0XHRcdFx0XHRcdGluZGV4PXtpbmRleH1cblx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0ZGVsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRjaGFuZ2VDb2xvckNvbXBvc2VyID17cHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0XHRcdGJnQ29sb3JDb21wb3Nlcj17cHJvcHMuYmdDb2xvckNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0dGV4dENvbG9yQ29tcG9zZXI9e3Byb3BzLnRleHRDb2xvckNvbXBvc2VyfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9KX1cblx0XHQ8L0xpc3Q+XG5cdCk7XG59KTtcblxuY29uc3QgU29ydGFibGVMaXN0SXRlbSA9IFNvcnRhYmxlRWxlbWVudCgocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8TGlzdEl0ZW1cblx0XHRcdHZhbHVlPXtwcm9wcy52YWx1ZX1cblx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0ZGVsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRjaGFuZ2VDb2xvckNvbXBvc2VyID17cHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdGl0ZW1Db2xvcj17cHJvcHMuYmdDb2xvckNvbXBvc2VyKHByb3BzLnZhbHVlLmNvbG9yKX1cblx0XHRcdHRleHRDb2xvcj17cHJvcHMudGV4dENvbG9yQ29tcG9zZXIocHJvcHMudmFsdWUuY29sb3IsIHByb3BzLnZhbHVlLmNvbXBsZXRlKX1cblx0XHQvPlxuXHQpO1xufSk7XG5cbmNvbnN0IEluY29tcGxldGVMaXN0ID0gcHJvcHMgPT4ge1xuXHRjb25zdCBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcztcblxuXG5cdGZ1bmN0aW9uIGhhbmRsZVNvcnQoeyBvbGRJbmRleCwgbmV3SW5kZXgsfSkge1xuXHRcdHByb3BzLnJlb3JkZXJJdGVtQ29tcG9zZXIocHJvcHMucGFyZW50SUQsIG9sZEluZGV4LCBuZXdJbmRleCkoKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxTb3J0YWJsZUxpc3Rcblx0XHRcdFx0aXRlbXM9e3Byb3BzLml0ZW1zfVxuXHRcdFx0XHR1c2VEcmFnSGFuZGxlPXt0cnVlfVxuXHRcdFx0XHRvblNvcnRFbmQ9e2hhbmRsZVNvcnR9XG5cdFx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRkZWxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmRlbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRjbGFzc0Zvckxpc3Q9e2NsYXNzZXMucm9vdH1cblx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3NlciA9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdGJnQ29sb3JDb21wb3Nlcj17cHJpbWFyeUNvbG9yUGFyc2VyfVxuXHRcdFx0XHR0ZXh0Q29sb3JDb21wb3Nlcj17dGV4dENvbG9yUGFyc2VyfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbkluY29tcGxldGVMaXN0LnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlU2hlZXQpKEluY29tcGxldGVMaXN0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9JbmNvbXBsZXRlTGlzdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIGltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi9MaXN0SXRlbS5qc1wiO1xuaW1wb3J0IExpc3QgZnJvbSBcIm1hdGVyaWFsLXVpL0xpc3RcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlU2hlZXQgfSBmcm9tIFwibWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5pbXBvcnQge3ByaW1hcnlDb2xvclBhcnNlciwgZmFkZWRDb2xvclBhcnNlciwgdGV4dENvbG9yUGFyc2VyfSBmcm9tICcuLi9oZWxwZXJzL2NvbG9yUGFyc2VyLmpzJ1xuXG5jb25zdCBzdHlsZVNoZWV0ID0gY3JlYXRlU3R5bGVTaGVldChcIkNvbXBsZXRlTGlzdFwiLCB0aGVtZSA9PiAoe1xuXHRjb250YWluZXI6IHtcblx0XHRtYXJnaW46IDAsXG5cdFx0cGFkZGluZzogMFxuXHR9XG59KSk7XG5cbmNvbnN0IENvbXBsZXRlTGlzdCA9IHByb3BzID0+IHtcblx0Y29uc3QgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXM7XG5cblx0cmV0dXJuIChcblx0XHQ8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cblx0XHRcdHtwcm9wcy5pdGVtcy5tYXAodmFsdWUgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxMaXN0SXRlbVxuXHRcdFx0XHRcdFx0a2V5PXtgaXRlbS0ke3ZhbHVlLmlkfWB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3NlciA9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRpdGVtQ29sb3I9e2ZhZGVkQ29sb3JQYXJzZXIodmFsdWUuY29sb3IpfVxuXHRcdFx0XHRcdFx0dGV4dENvbG9yPXt0ZXh0Q29sb3JQYXJzZXIodmFsdWUuY29sb3IpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9KX1cblx0XHQ8L0xpc3Q+XG5cdCk7XG59O1xuXG5Db21wbGV0ZUxpc3QucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVTaGVldCkoQ29tcGxldGVMaXN0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9Db21wbGV0ZUxpc3QuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIm1hdGVyaWFsLXVpL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJtYXRlcmlhbC11aS9EaXZpZGVyXCI7XG5pbXBvcnQgQ2hldnJvblJpZ2h0IGZyb20gXCJtYXRlcmlhbC11aS1pY29ucy9DaGV2cm9uUmlnaHRcIjtcbmltcG9ydCBOZXdJdGVtRm9ybSBmcm9tIFwiLi9OZXdJdGVtRm9ybS5qc1wiO1xuaW1wb3J0IHtwcmltYXJ5Q29sb3JQYXJzZXIsIGZhZGVkQ29sb3JQYXJzZXIsIHRleHRDb2xvclBhcnNlciwgYWNjZW50Q29sb3JQYXJzZXIsIGFjY2VudFRleHRDb2xvclBhcnNlcn0gZnJvbSAnLi4vaGVscGVycy9jb2xvclBhcnNlci5qcydcblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJIZWFkZXJcIiwgdGhlbWUgPT4gKHtcblx0dGl0bGVDb250YWluZXI6IHtcblx0XHRwYWRkaW5nOiAxNlxuXHR9LFxuXHRjcnVtYjoge1xuXHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0ZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuXHRcdGN1cnNvcjogXCJwb2ludGVyXCIsXG5cdFx0XCImOmhvdmVyXCI6IHtcblx0XHRcdHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiXG5cdFx0fVxuXHR9LFxuXHRjcnVtYkNvbnRhaW5lcjoge1xuXHRcdHBhZGRpbmc6IDE2XG5cdH1cbn0pKTtcblxuY29uc3QgTGlzdEhlYWRlciA9IHByb3BzID0+IHtcblx0Y29uc3QgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXM7XG5cdGNvbnN0IGJnQ29sb3IgPSBwcmltYXJ5Q29sb3JQYXJzZXIocHJvcHMuaXRlbXNbcHJvcHMuYmFzZUl0ZW1dLmNvbG9yKVxuXHRjb25zdCB0ZXh0Q29sb3IgPSB0ZXh0Q29sb3JQYXJzZXIocHJvcHMuaXRlbXNbcHJvcHMuYmFzZUl0ZW1dLmNvbG9yKVxuXHRjb25zdCBhY2NlbnRDb2xvciA9IGFjY2VudENvbG9yUGFyc2VyKHByb3BzLml0ZW1zW3Byb3BzLmJhc2VJdGVtXS5jb2xvcilcblx0Y29uc3QgYWNjZW50VGV4dENvbG9yID0gYWNjZW50VGV4dENvbG9yUGFyc2VyKHByb3BzLml0ZW1zW3Byb3BzLmJhc2VJdGVtXS5jb2xvcilcblxuXHRjb25zdCBCcmVhZENydW1iID0gKCkgPT4ge1xuXHRcdGxldCB0cmFpbCA9IFtdO1xuXHRcdGxldCBjdXJyZW50ID0gcHJvcHMuYmFzZUl0ZW07XG5cdFx0bGV0IGNvdW50ZXIgPSAwO1xuXHRcdGlmIChjdXJyZW50ID09PSBcInJvb3RcIikge1xuXHRcdFx0dHJhaWwgPSBbXCJyb290XCJdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aGlsZSAocHJvcHMuaXRlbXNbY3VycmVudF0ucGFyZW50ICE9PSBcInJvb3RcIiAmJiBjb3VudGVyIDwgMTApIHtcblx0XHRcdFx0dHJhaWwgPSBbY3VycmVudCwgLi4udHJhaWxdO1xuXHRcdFx0XHRjdXJyZW50ID0gcHJvcHMuaXRlbXNbY3VycmVudF0ucGFyZW50O1xuXHRcdFx0XHRjb3VudGVyKys7XG5cdFx0XHR9XG5cdFx0XHR0cmFpbCA9IFtcInJvb3RcIiwgY3VycmVudCwgLi4udHJhaWxdO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFR5cG9ncmFwaHlcblx0XHRcdHR5cGU9e1wiYm9keTFcIn1cblx0XHRcdGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5jcnVtYkNvbnRhaW5lcn1cblx0XHRcdHN0eWxlPXt7Y29sb3I6dGV4dENvbG9yfX1cblx0XHRcdD5cblx0XHRcdFx0e3RyYWlsLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0a2V5PXtgYnJlYWRjcnVtYi0ke2luZGV4fWB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5jcnVtYn1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyKGl0ZW0pfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7aXRlbSA9PT0gXCJyb290XCJcblx0XHRcdFx0XHRcdFx0XHQ/IFwicm9vdFwiXG5cdFx0XHRcdFx0XHRcdFx0OiBwcm9wcy5pdGVtc1tpdGVtXS5jb250ZW50fVxuXHRcdFx0XHRcdFx0XHR7aW5kZXggPCB0cmFpbC5sZW5ndGggLSAxXG5cdFx0XHRcdFx0XHRcdFx0PyA8Q2hldnJvblJpZ2h0IC8+XG5cdFx0XHRcdFx0XHRcdFx0OiBcIlwifXtcIiBcIn1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHQpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdHN0eWxlPXt7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6YmdDb2xvcixcblx0XHRcdGNvbG9yOnRleHRDb2xvcixcblx0XHRcdHRyYW5zaXRpb246Jy41cydcblxuXHRcdH19XG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVDb250YWluZXJ9PlxuXHRcdFx0XHQ8VHlwb2dyYXBoeVxuXHRcdFx0XHR0eXBlPXtcImhlYWRsaW5lXCJ9XG5cdFx0XHRcdGFsaWduPXtcImNlbnRlclwifVxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7cHJvcHMuYmFzZUl0ZW0gPT09IFwicm9vdFwiID8gXCJyb290XCIgOiBwcm9wcy5iYXNlSXRlbVRleHR9XG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0PFR5cG9ncmFwaHlcblx0XHRcdFx0dHlwZT17XCJzdWJoZWFkaW5nXCJ9XG5cdFx0XHRcdGFsaWduPXtcImNlbnRlclwifVxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7cHJvcHMuY291bnRlclRleHR9XG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PERpdmlkZXIgLz5cblx0XHRcdDxCcmVhZENydW1iIC8+XG5cdFx0XHQ8RGl2aWRlciAvPlxuXHRcdFx0PE5ld0l0ZW1Gb3JtXG5cdFx0XHRuZXdJdGVtQWN0aW9uPXtwcm9wcy5uZXdJdGVtQWN0aW9ufVxuXHRcdFx0dGV4dENvbG9yPXt0ZXh0Q29sb3J9XG5cdFx0XHRhY2NlbnRDb2xvcj17YWNjZW50Q29sb3J9XG5cdFx0XHRhY2NlbnRUZXh0Q29sb3I9e2FjY2VudFRleHRDb2xvcn1cblx0XHRcdC8+XG5cdFx0XHQ8RGl2aWRlciAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuTGlzdEhlYWRlci5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShMaXN0SGVhZGVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIm1hdGVyaWFsLXVpL1RleHRGaWVsZFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvQnV0dG9uXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwibWF0ZXJpYWwtdWkvR3JpZFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJOZXdJdGVtRm9ybVwiLCB0aGVtZSA9PiAoe1xuXHRjb250YWluZXI6IHtcblx0XHR3aWR0aDogXCI4NXZ3XCIsXG5cdFx0bWFyZ2luOiBcImF1dG9cIixcblx0XHRwYWRkaW5nQm90dG9tOiBcIjE2cHhcIixcblx0XHRwYWRkaW5nVG9wOiBcIjE2cHhcIixcblx0XHRwYWRkaW5nOiAxNixcblx0XHRib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiXG5cdH0sXG5cdHR5cGVJdGVtOiB7XG5cdFx0ZmxleEdyb3c6IDFcblx0fSxcblx0d2hpdGU6e1xuXHRcdGNvbG9yOicjZmZmZmZmJ1xuXHR9LFxuXHRibGFjazp7XG5cdFx0Y29sb3I6JyMwMDAwMDAnXG5cdH1cbn0pKTtcblxuY2xhc3MgTmV3SXRlbUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuZXdJdGVtOiBcIlwiXG5cdFx0fTtcblx0XHR0aGlzLmlucHV0VXBkYXRlID0gdGhpcy5pbnB1dFVwZGF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc3VibWl0SGFuZGxlciA9IHRoaXMuc3VibWl0SGFuZGxlci5iaW5kKHRoaXMpO1xuXHR9XG5cblx0c3VibWl0SGFuZGxlcihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5wcm9wcy5uZXdJdGVtQWN0aW9uKHRoaXMuc3RhdGUubmV3SXRlbSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG5ld0l0ZW06IFwiXCIgfSk7XG5cdH1cblxuXHRpbnB1dFVwZGF0ZShldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBuZXdJdGVtOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgY2xhc3NlcyA9IHRoaXMucHJvcHMuY2xhc3Nlcztcblx0XHRjb25zdCB0ZXh0Q29sb3JDbGFzcyA9IHRoaXMucHJvcHMudGV4dENvbG9yID09PSAnI2ZmZmZmZicgPyBjbGFzc2VzLndoaXRlIDogY2xhc3Nlcy5ibGFja1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9XG5cdFx0XHQ+XG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEhhbmRsZXJ9PlxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBndXR0ZXI9ezI0fSBhbGlnbj17XCJjZW50ZXJcIn0+XG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBlSXRlbX0+XG5cdFx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0XHRpZD1cIm5ld0l0ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiTmV3IEl0ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRmdWxsV2lkdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubmV3SXRlbX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5pbnB1dFVwZGF0ZX1cblx0XHRcdFx0XHRcdFx0XHRJbnB1dFByb3BzPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZTp7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOnRoaXMucHJvcHMudGV4dENvbG9yXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOntcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6dGhpcy5wcm9wcy50ZXh0Q29sb3Jcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0cmFpc2VkXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7Y29sb3I6dGhpcy5wcm9wcy5hY2NlbnRUZXh0Q29sb3IsIGJhY2tncm91bmRDb2xvcjp0aGlzLnByb3BzLmFjY2VudENvbG9yfX0+XG5cdFx0XHRcdFx0XHRcdFx0TWFrZSBhIE5ldyBJdGVtXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5OZXdJdGVtRm9ybS5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShOZXdJdGVtRm9ybSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTmV3SXRlbUZvcm0uanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGlzdEl0ZW0sIExpc3RJdGVtVGV4dCB9IGZyb20gXCJtYXRlcmlhbC11aS9MaXN0XCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJtYXRlcmlhbC11aS9UZXh0RmllbGRcIjtcblxuXG5jbGFzcyBMaXN0SXRlbVRleHRBcmVhIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5zdGF0ZT17XG5cdFx0XHRlZGl0TW9kZTpmYWxzZSxcblx0XHRcdGVkaXRUZXh0OicnXG5cdFx0fVxuXG5cdFx0dGhpcy5UZXh0Q29udGFpbmVyID0gdGhpcy5UZXh0Q29udGFpbmVyLmJpbmQodGhpcylcblx0XHR0aGlzLmRvdWJsZUNsaWNrSGFuZGxlciA9IHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVyLmJpbmQodGhpcylcblx0XHR0aGlzLkVkaXRJdGVtID0gdGhpcy5FZGl0SXRlbS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5oYW5kbGVCbHVyID0gdGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcylcblx0fVxuXG5cdG5vbkVkaXRJdGVtKHByb3BzKXtcblx0XHRcdFx0cmV0dXJuKFxuXHRcdFx0PExpc3RJdGVtVGV4dFxuXHRcdFx0cHJpbWFyeT17cHJvcHMucHJpbWFyeX1cblx0XHRcdHNlY29uZGFyeT17cHJvcHMuc2Vjb25kYXJ5fVxuXHRcdFx0c3R5bGU9e3tjb2xvcjpwcm9wcy50ZXh0Q29sb3IscGFkZGluZzonMHB4Jywgd29yZFdyYXAgOiAnYnJlYWstd29yZCd9fVxuXHRcdFx0b25Eb3VibGVDbGljaz17cHJvcHMuZG91YmxlQ2xpY2tIYW5kbGVyfVxuXHRcdFx0Lz5cblx0XHRcdClcblx0fVxuXG5cdEVkaXRJdGVtKHByb3BzKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8Zm9ybVxuXHRcdFx0b25TdWJtaXQ9e3RoaXMuaGFuZGxlQmx1cn1cblx0XHRcdHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cblx0XHRcdD5cblx0XHRcdDxUZXh0RmllbGRcblx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmVkaXRUZXh0fVxuXHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuXHRcdFx0b25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG5cdFx0XHRmdWxsV2lkdGg9e3RydWV9XG5cdFx0XHRhdXRvRm9jdXM9e3RydWV9XG5cdFx0XHQvPlxuXHRcdFx0PC9mb3JtPlxuXHRcdFx0KVxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHtlZGl0VGV4dDpldmVudC50YXJnZXQudmFsdWV9KVxuXHR9XG5cblx0aGFuZGxlQmx1cihldmVudCl7XG5cdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS5lZGl0VGV4dClcblx0XHRjb25zb2xlLmxvZygnYmx1cnJlZCcpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZWRpdE1vZGU6ZmFsc2V9KVxuXHR9XG5cblx0VGV4dENvbnRhaW5lcihwcm9wcyl7XG5cdFx0dmFyIE5vbkVkaXRJdGVtID0gdGhpcy5ub25FZGl0SXRlbVxuXHRcdHZhciBFZGl0SXRlbSA9IHRoaXMuRWRpdEl0ZW1cblx0XHRpZihwcm9wcy5lZGl0TW9kZSl7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHQ8RWRpdEl0ZW1cblxuXHRcdFx0Lz5cblx0XHRcdClcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8Tm9uRWRpdEl0ZW1cblx0XHRcdFx0ZG91YmxlQ2xpY2tIYW5kbGVyPXtwcm9wcy5kb3VibGVDbGlja0hhbmRsZXJ9XG5cdFx0XHRcdHByaW1hcnk9e3Byb3BzLnByaW1hcnl9XG5cdFx0XHRcdHNlY29uZGFyeT17cHJvcHMuc2Vjb25kYXJ5fVxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnByb3BzLnRleHRDb2xvcixwYWRkaW5nOicwcHgnLCB3b3JkV3JhcCA6ICdicmVhay13b3JkJ319XG5cdFx0XHRcdC8+XG5cdFx0XHQpXG5cdFx0fVxuXHR9XG5cblx0ZG91YmxlQ2xpY2tIYW5kbGVyKCl7XG5cdFx0Y29uc29sZS5sb2coXCJkb3VibGUgY2xpY2shISFcIilcblx0XHR2YXIgdGV4dCA9IHRoaXMucHJvcHMucmF3VGV4dFxuXHRcdHRoaXMuc2V0U3RhdGUoe2VkaXRUZXh0OnRleHQsIGVkaXRNb2RlOnRydWV9KVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0dmFyIFRleHRDb250YWluZXIgPSB0aGlzLlRleHRDb250YWluZXJcblx0XHRyZXR1cm4oXG5cdFx0XHQ8VGV4dENvbnRhaW5lclxuXHRcdFx0ZG91YmxlQ2xpY2tIYW5kbGVyPXt0aGlzLmRvdWJsZUNsaWNrSGFuZGxlcn1cblx0XHRcdGVkaXRNb2RlPXt0aGlzLnN0YXRlLmVkaXRNb2RlfVxuXHRcdFx0cHJpbWFyeT17dGhpcy5wcm9wcy5wcmltYXJ5fVxuXHRcdFx0c2Vjb25kYXJ5PXt0aGlzLnByb3BzLnNlY29uZGFyeX1cblx0XHRcdHRleHRDb2xvcj17dGhpcy5wcm9wcy50ZXh0Q29sb3J9XG5cdFx0XHQvPlxuXHRcdFx0KX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW1UZXh0QXJlYVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SXRlbVRleHRBcmVhLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7O0FBaUJBO0FBSUE7QUFDQTtBQXRCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBREE7QUFEQTtBQUZBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQWtCQTtBQUNBO0FBM0NBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQU5BO0FBT0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBVUE7QUFPQTtBQU9BO0FBT0E7QUFXQTtBQTNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFHQTtBQUpBO0FBRkE7QUFRQTtBQUNBO0FBREE7O0FBR0E7QUFFQTtBQUhBO0FBS0E7QUFDQTtBQURBOztBQUdBO0FBRUE7QUFIQTtBQUtBO0FBQ0E7QUFEQTs7QUFHQTtBQUVBO0FBSEE7QUFLQTtBQUNBO0FBREE7O0FBR0E7O0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFGQTtBQVNBO0FBQ0E7QUFEQTs7QUFHQTs7QUFFQTtBQUdBO0FBSkE7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOztBQVFBO0FBRkE7O0FBR0E7QUFBQTtBQVZBO0FBREE7QUFEQTtBQUNBO0FBZ0JBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOzs7OztBQWJBO0FBQ0E7QUFvQkE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQW5CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUFBO0FBUEE7QUFDQTtBQVdBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFBQTtBQUdBOztBQURBO0FBR0E7QUFIQTtBQUNBOztBQUVBO0FBRUE7QUFGQTtBQUFBO0FBUUE7QUF0QkE7QUFDQTtBQXdCQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBWUE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUF6QkE7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFXQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUZBO0FBSUE7QUFDQTs7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUlBOzs7O0FBR0E7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQU1BO0FBQ0E7Ozs7QUFJQTtBQUFBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFIQTtBQU1BO0FBTkE7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUFBOztBQUpBO0FBT0E7QUFQQTtBQUNBO0FBT0E7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7O0FBR0E7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQU9BO0FBQ0E7QUFBQTs7QUFIQTtBQUFBO0FBQUE7QUFDQTs7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQURBO0FBR0E7QUFIQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBREE7QUFHQTtBQUhBO0FBQ0E7QUFHQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBQUE7QUFBQTtBQUFBOzs7OztBQXhJQTtBQUNBO0FBOElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlNQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFJQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOztBQUdBO0FBQUE7QUFEQTtBQURBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUdBO0FBRkE7QUFJQTtBQUNBO0FBR0E7QUFGQTs7Ozs7O0FBS0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTs7Ozs7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFHQTtBQUpBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBVEE7QUFTQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVJBOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUkE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFSQTs7QUFVQTtBQUFBO0FBQ0E7QUFGQTtBQTlDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFFQTtBQUdBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVBBO0FBV0E7QUFYQTtBQUNBOzs7OztBQXBGQTtBQUNBO0FBZ0dBO0FBQUE7QUFBQTtBQUNBO0FBQUE7OztBQUdBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0hBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUkE7QUFVQTtBQVZBO0FBQ0E7QUFXQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVJBO0FBWUE7QUFaQTtBQUNBO0FBNUJBO0FBQ0E7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7OztBQUdBO0FBQ0E7QUFFQTtBQUpBOztBQUtBO0FBQUE7QUFOQTtBQURBO0FBQ0E7QUFXQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFUQTtBQVlBO0FBWkE7QUFDQTtBQWNBO0FBcEJBO0FBQ0E7QUFxQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVBBO0FBVUE7QUFWQTtBQUNBO0FBSEE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTs7QUFWQTtBQWNBO0FBZEE7QUFDQTtBQVhBO0FBQ0E7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7OztBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7O0FBR0E7QUFBQTtBQURBO0FBREE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFSQTtBQVdBO0FBWEE7QUFDQTtBQWFBO0FBckJBO0FBQ0E7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7OztBQUlBO0FBRkE7O0FBSUE7QUFDQTtBQUNBOztBQUlBO0FBSEE7QUFKQTs7QUFRQTtBQUFBO0FBWkE7QUFEQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBOztBQUhBO0FBS0E7QUFMQTtBQUNBO0FBTUE7QUFFQTtBQUFBO0FBQ0E7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBQ0E7QUFBQTs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUhBOztBQUZBO0FBUUE7QUFSQTtBQUNBO0FBT0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFRQTtBQUNBO0FBQUE7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7O0FBT0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTs7QUFLQTtBQUdBO0FBSEE7QUFBQTtBQWpGQTtBQUNBO0FBcUZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7O0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFQQTs7QUFVQTtBQUZBOztBQUtBO0FBRkE7O0FBR0E7QUFBQTtBQWZBO0FBREE7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUZBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBRUE7QUFBQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFEQTtBQUdBO0FBSEE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBR0E7QUFBQTtBQURBOzs7QUFNQTtBQUFBO0FBREE7O0FBYkE7QUFtQkE7QUFuQkE7QUFDQTtBQWtCQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUNBOzs7OztBQXJEQTtBQUNBO0FBaUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFPQTtBQVBBO0FBQ0E7Ozs7QUFRQTtBQUVBO0FBQ0E7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBTEE7QUFTQTtBQVRBO0FBQ0E7Ozs7QUFVQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBSUE7QUFKQTtBQUFBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBT0E7QUFQQTtBQUNBO0FBT0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTEE7QUFPQTtBQVBBO0FBQ0E7Ozs7O0FBU0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        