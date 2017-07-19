
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
exports.updateItem = updateItem;
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

function updateItem(id, newText) {
	return {
		type: UPDATE_ITEM,
		payload: {
			id: id,
			newText: newText
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
				updateItem: this.props.updateItem,
				id: this.item.id,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 153
				}
			}), _react2.default.createElement(_IconButton2.default, {
				onClick: this.props.changeBaseComposer(this.item.id),
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 162
				}
			}, _react2.default.createElement(_FormatListBulleted2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 166
				}
			})), _react2.default.createElement(_IconButton2.default, {
				onClick: this.openMenu,
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 168
				}
			}, _react2.default.createElement(_Settings2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 172
				}
			})), _react2.default.createElement(_Menu2.default, {
				id: this.item.id + "-menu",
				open: this.state.open,
				onRequestClose: this.closeMenu,
				anchorEl: this.state.anchorEl,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 174
				}
			}, _react2.default.createElement(_Typography2.default, {
				type: "subheading",
				align: 'center',
				style: { outline: 'none', paddingLeft: 16 },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 180
				}
			}, "Change Color"), _react2.default.createElement(_Divider2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 185
				}
			}), _react2.default.createElement(ColorMenu, {
				clickHandler: this.colorItemClickHandler,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 186
				}
			}), _react2.default.createElement(_Divider2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 189
				}
			}), _react2.default.createElement("div", {
				style: { textAlign: 'center' },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 190
				}
			}, _react2.default.createElement(_Button2.default, {
				style: { color: 'white', backgroundColor: _colors.red[500], marginTop: 8 },
				onClick: this.props.deleteItemComposer(this.item.id),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 193
				}
			}, _react2.default.createElement(_DeleteForever2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 197
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

		case _actions.UPDATE_ITEM:
			var newState = _lodash2.default.merge({}, state);
			newState[action.payload.id].content = action.payload.newText;
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
		_this.updateItemDispatch = _this.updateItemDispatch.bind(_this);
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
		key: "updateItemDispatch",
		value: function updateItemDispatch(id, newText) {
			this.props.updateItem(id, newText);
		}
	}, {
		key: "render",
		value: function render() {
			var currentItem = this.props.items[this.props.baseItem];
			var parentItem = this.props.items[currentItem.parent];
			return _react2.default.createElement(_Card2.default, { style: (0, _defineProperty3.default)({ margin: "auto" }, "margin", "16px"), __source: {
					fileName: _jsxFileName,
					lineNumber: 96
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
					lineNumber: 97
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
					lineNumber: 106
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
	return (0, _redux.bindActionCreators)({ newItem: _actions.newItem, changeBaseItem: _actions.changeBaseItem, completeItem: _actions.completeItem, deleteItem: _actions.deleteItem, reorderItem: _actions.reorderItem, changeColor: _actions.changeColor, updateItem: _actions.updateItem }, dispatch);
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
			editText: props.rawText
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
			this.props.updateItem(this.props.id, this.state.editText);
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
						lineNumber: 66
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
						lineNumber: 72
					}
				});
			}
		}
	}, {
		key: "doubleClickHandler",
		value: function doubleClickHandler() {
			console.log("double click!!!");
			var text = this.props.rawText;
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
					lineNumber: 91
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy90b2RvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9zdHlsZS9jcmVhdGVEZWZhdWx0Q29udGV4dC5qcz9lZjgxNWQzIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvaGVscGVycy9jb2xvclBhcnNlci5qcz9lZjgxNWQzIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvYWN0aW9ucy9pbmRleC5qcz9lZjgxNWQzIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvQXBwLmpzP2VmODE1ZDMiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RJdGVtLmpzP2VmODE1ZDMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdG9kby5qcz9lZjgxNWQzIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvaW5kZXguanM/ZWY4MTVkMyIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL2luZGV4LmpzP2VmODE1ZDMiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9pdGVtc19yZWR1Y2VyLmpzP2VmODE1ZDMiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9iYXNlSXRlbV9yZWR1Y2VyLmpzP2VmODE1ZDMiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIuanM/ZWY4MTVkMyIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdC5qcz9lZjgxNWQzIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9JbmNvbXBsZXRlTGlzdC5qcz9lZjgxNWQzIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9Db21wbGV0ZUxpc3QuanM/ZWY4MTVkMyIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdEhlYWRlci5qcz9lZjgxNWQzIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9OZXdJdGVtRm9ybS5qcz9lZjgxNWQzIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SXRlbVRleHRBcmVhLmpzP2VmODE1ZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInXG5pbXBvcnQgY3JlYXRlUGFsZXR0ZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBjcmVhdGVNdWlUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvdGhlbWUnXG5pbXBvcnQgeyBwdXJwbGUsIGdyZWVuLCBncmV5IH0gZnJvbSAnbWF0ZXJpYWwtdWkvY29sb3JzJ1xuXG5jb25zdCBjcmVhdGVEZWZhdWx0Q29udGV4dCA9ICgpID0+XG4gIE11aVRoZW1lUHJvdmlkZXIuY3JlYXRlRGVmYXVsdENvbnRleHQoe1xuICAgIHRoZW1lOiBjcmVhdGVNdWlUaGVtZSh7XG4gICAgICBwYWxldHRlOiBjcmVhdGVQYWxldHRlKHtcbiAgICAgICAgcHJpbWFyeTogZ3JleVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4vLyBTaW5nbGV0b24gaGFjayBhcyB0aGVyZSBpcyBubyB3YXkgdG8gcGFzcyB2YXJpYWJsZXMgZnJvbSBfZG9jdW1lbnQuanMgdG8gcGFnZXMgeWV0LlxubGV0IGNvbnRleHQgPSBudWxsXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0Q29udGV4dCAoKSB7XG4gIGNvbnRleHQgPSBjcmVhdGVEZWZhdWx0Q29udGV4dCgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0Q29udGV4dCAoKSB7XG4gIC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgc3RvcmUgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIGNvbnRleHRcbiAgfVxuXG4gIC8vIFJldXNlIHN0b3JlIG9uIHRoZSBjbGllbnQtc2lkZVxuICBpZiAoIWNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY3JlYXRlRGVmYXVsdENvbnRleHQoKVxuICB9XG5cbiAgcmV0dXJuIGNvbnRleHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGVmYXVsdENvbnRleHRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvc3R5bGUvY3JlYXRlRGVmYXVsdENvbnRleHQuanMiLCJpbXBvcnQgeyByZWQscGluayxwdXJwbGUsZGVlcFB1cnBsZSxpbmRpZ28sYmx1ZSwgbGlnaHRCbHVlLCBjeWFuLCB0ZWFsLCBncmVlbiwgbGlnaHRHcmVlbiwgbGltZSwgeWVsbG93LCBhbWJlciwgb3JhbmdlLCBkZWVwT3JhbmdlLHdoaXRlLGJsYWNrLGdyZXkgfSBmcm9tIFwibWF0ZXJpYWwtdWkvY29sb3JzXCJcblxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuXG4vLyBmdW5jdGlvbiBjb2xvclBhcnNlckNvbXBvc2VyKG1vZGlmaWVyXG4vLyB9XG5cblxuZnVuY3Rpb24gY29sb3JQYXJzZXJDb21wb3Nlcihtb2RpZmllcil7XG5cblx0XHR2YXIgY29sb3JzID0geyByZWQscGluayxwdXJwbGUsZGVlcFB1cnBsZSxpbmRpZ28sYmx1ZSwgbGlnaHRCbHVlLCBjeWFuLCB0ZWFsLCBncmVlbiwgbGlnaHRHcmVlbiwgbGltZSwgeWVsbG93LCBhbWJlciwgb3JhbmdlLCBkZWVwT3JhbmdlIH07XG5cblx0cmV0dXJuIGZ1bmN0aW9uKGNvbG9yVGV4dCl7XG5cblxuXHRcdGlmKCBjb2xvcnMuaGFzT3duUHJvcGVydHkoY29sb3JUZXh0KSl7XG5cdFx0XHRyZXR1cm4gY29sb3JzW2NvbG9yVGV4dF1bbW9kaWZpZXJdXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAnbm8gbWF0Y2gnXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0Q29sb3JQYXJzZXIoY29sb3JUZXh0LCBjb21wbGV0ZSl7XG5cdHZhciB3aGl0ZUxpc3QgPSBbJ3JlZCcsJ3BpbmsnLCdwdXJwbGUnLCdkZWVwUHVycGxlJywnaW5kaWdvJywnYmx1ZScsJ3RlYWwnLCdkZWVwT3JhbmdlJywnYnJvd24nLCdibHVlR3JleSddO1xuXHR2YXIgYmxhY2tMaXN0ID0gWydsaWdodEJsdWUnLCdjeWFuJywnZ3JlZW4nLCdsaWdodEdyZWVuJywnbGltZScsJ3llbGxvdycsJ2FtYmVyJywnb3JhbmdlJywnZ3JleSddO1xuXHRpZihjb21wbGV0ZSl7XG5cdFx0aWYoXy5pbmNsdWRlcyh3aGl0ZUxpc3QsIGNvbG9yVGV4dCkpe1xuXHRcdFx0cmV0dXJuICcjMDAwMDAwJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJyNmZmZmZmYnXG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdFx0aWYoXy5pbmNsdWRlcyh3aGl0ZUxpc3QsIGNvbG9yVGV4dCkpe1xuXHRcdFx0XHRyZXR1cm4gJyNmZmZmZmYnXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAnIzAwMDAwMCdcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjY2VudFRleHRDb2xvclBhcnNlcihjb2xvclRleHQpe1xuXHR2YXIgd2hpdGVMaXN0ID0gWydyZWQnLCdwaW5rJywncHVycGxlJywnZGVlcFB1cnBsZScsICdpbmRpZ28nLCdibHVlJ11cblx0dmFyIGJsYWNrTGlzdCA9IFsnbGlnaHRCbHVlJywgJ2N5YW4nLCd0ZWFsJywnZ3JlbicsJ2xpZ2h0R3JlZW4nLCdsaW1lJywneWVsbG93JywnYW1iZXInLCdvcmFuZ2UnLCdkZWVwT3JhbmdlJ11cblxuXHRpZihfLmluY2x1ZGVzKHdoaXRlTGlzdCwgY29sb3JUZXh0KSl7XG5cdFx0cmV0dXJuICcjZmZmZmZmJ1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAnIzAwMDAwMCdcblx0fVxufVxuXG5leHBvcnQgY29uc3QgcHJpbWFyeUNvbG9yUGFyc2VyID0gY29sb3JQYXJzZXJDb21wb3Nlcig1MDApO1xuXG5leHBvcnQgY29uc3QgYWNjZW50Q29sb3JQYXJzZXIgPSBjb2xvclBhcnNlckNvbXBvc2VyKCdBNDAwJylcblxuZXhwb3J0IGNvbnN0IGZhZGVkQ29sb3JQYXJzZXIgPSBjb2xvclBhcnNlckNvbXBvc2VyKDEwMClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2hlbHBlcnMvY29sb3JQYXJzZXIuanMiLCJleHBvcnQgY29uc3QgTkVXX0lURU0gPSBcIk5FV19JVEVNXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0JBU0UgPSBcIkNIQU5HRV9CQVNFXCI7XG5leHBvcnQgY29uc3QgQ09NUExFVEVfSVRFTSA9IFwiQ09NUExFVEVfSVRFTVwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9JVEVNID0gXCJERUxFVEVfSVRFTVwiO1xuZXhwb3J0IGNvbnN0IFJFT1JERVJfSVRFTSA9IFwiUkVPUkRFUl9JVEVNXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0NPTE9SID0gXCJDSEFOR0VfQ09MT1JcIlxuXG4vLyA9PT09PT09PT09PT1cbi8vIFRvIEltcGxlbWVudFxuLy8gPT09PT09PT09PT09XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfSVRFTSA9IFwiVVBEQVRFX0lURU1cIjtcblxuLy8gPT09PT09PT09PT09PT09XG4vLyBBY3Rpb24gQ3JlYXRvcnNcbi8vID09PT09PT09PT09PT09PVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3SXRlbShjb250ZW50ID0gXCJcIiwgcGFyZW50ID0gXCJyb290XCIpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBORVdfSVRFTSxcblx0XHRwYXlsb2FkOiB7XG5cdFx0XHRjb250ZW50LFxuXHRcdFx0cGFyZW50XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQmFzZUl0ZW0oaWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDSEFOR0VfQkFTRSxcblx0XHRwYXlsb2FkOiBpZFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxldGVJdGVtKGlkKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ09NUExFVEVfSVRFTSxcblx0XHRwYXlsb2FkOiBpZFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlSXRlbShpZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IERFTEVURV9JVEVNLFxuXHRcdHBheWxvYWQ6IGlkXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW9yZGVySXRlbShwYXJlbnRJRCwgb2xkSW5kZXgsIG5ld0luZGV4KSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogUkVPUkRFUl9JVEVNLFxuXHRcdHBheWxvYWQ6IHtcblx0XHRcdHBhcmVudElELFxuXHRcdFx0b2xkSW5kZXgsXG5cdFx0XHRuZXdJbmRleFxuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbG9yKGlkLGNvbG9yKXtcblx0cmV0dXJue1xuXHRcdHR5cGU6IENIQU5HRV9DT0xPUixcblx0XHRwYXlsb2FkOiB7XG5cdFx0XHRpZCxcblx0XHRcdGNvbG9yXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVJdGVtKGlkLG5ld1RleHQpe1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6VVBEQVRFX0lURU0sXG5cdFx0cGF5bG9hZDp7XG5cdFx0XHRpZCxcblx0XHRcdG5ld1RleHRcblx0XHR9XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2FjdGlvbnMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0LCBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzJ1xuaW1wb3J0IHsgZ2V0RGVmYXVsdENvbnRleHQgfSBmcm9tICcuL3N0eWxlL2NyZWF0ZURlZmF1bHRDb250ZXh0J1xuXG5jb25zdCBzdHlsZVNoZWV0ID0gY3JlYXRlU3R5bGVTaGVldCgnQXBwJywgdGhlbWUgPT4gKHtcbiAgJ0BnbG9iYWwnOiB7XG4gICAgaHRtbDoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsXG4gICAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLCAvLyBBbnRpYWxpYXNpbmcuXG4gICAgICBNb3pPc3hGb250U21vb3RoaW5nOiAnZ3JheXNjYWxlJyAvLyBBbnRpYWxpYXNpbmcuXG4gICAgfSxcbiAgICBib2R5OiB7XG4gICAgICBtYXJnaW46IDBcbiAgICB9LFxuICAgIGE6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgICB9XG4gIH1cbn0pKVxuXG5sZXQgQXBwV3JhcHBlciA9IHByb3BzID0+IDxkaXY+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuXG5BcHBXcmFwcGVyID0gd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShBcHBXcmFwcGVyKVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpXG4gICAgaWYgKGpzc1N0eWxlcyAmJiBqc3NTdHlsZXMucGFyZW50Tm9kZSkge1xuICAgICAganNzU3R5bGVzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBzdHlsZU1hbmFnZXIsIHRoZW1lIH0gPSBnZXREZWZhdWx0Q29udGV4dCgpXG4gICAgcmV0dXJuIChcbiAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHN0eWxlTWFuYWdlcj17c3R5bGVNYW5hZ2VyfSB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8QXBwV3JhcHBlcj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9BcHBXcmFwcGVyPlxuICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuXG5BcHAucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvQXBwLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBTb3J0YWJsZUhhbmRsZSB9IGZyb20gXCJyZWFjdC1zb3J0YWJsZS1ob2NcIjtcbmltcG9ydCB7IExpc3RJdGVtLCBMaXN0SXRlbVRleHQgfSBmcm9tIFwibWF0ZXJpYWwtdWkvTGlzdFwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCJtYXRlcmlhbC11aS9DaGVja2JveFwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b25cIjtcbmltcG9ydCBSZW9yZGVyIGZyb20gXCJtYXRlcmlhbC11aS1pY29ucy9SZW9yZGVyXCI7XG5pbXBvcnQgRG90IGZyb20gJ21hdGVyaWFsLXVpLWljb25zL0JyaWdodG5lc3MxJ1xuaW1wb3J0IERlbGV0ZUZvcmV2ZXIgZnJvbSBcIm1hdGVyaWFsLXVpLWljb25zL0RlbGV0ZUZvcmV2ZXJcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tICdtYXRlcmlhbC11aS1pY29ucy9TZXR0aW5ncydcbmltcG9ydCBGb3JtYXRMaXN0QnVsbGV0ZWQgIGZyb20gXCJtYXRlcmlhbC11aS1pY29ucy9Gb3JtYXRMaXN0QnVsbGV0ZWRcIjtcbmltcG9ydCB7IHJlZCxwaW5rLHB1cnBsZSxkZWVwUHVycGxlLGluZGlnbyxibHVlLCBsaWdodEJsdWUsIGN5YW4sIHRlYWwsIGdyZWVuLCBsaWdodEdyZWVuLCBsaW1lLCB5ZWxsb3csIGFtYmVyLCBvcmFuZ2UsIGRlZXBPcmFuZ2UsIGdyZXkgfSBmcm9tIFwibWF0ZXJpYWwtdWkvY29sb3JzXCJcbmltcG9ydCBCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvQnV0dG9uJztcbmltcG9ydCBNZW51LCB7IE1lbnVJdGVtIH0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdtYXRlcmlhbC11aS9UeXBvZ3JhcGh5JztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL0RpdmlkZXInO1xuaW1wb3J0IHtwcmltYXJ5Q29sb3JQYXJzZXIsIGZhZGVkQ29sb3JQYXJzZXJ9IGZyb20gJy4uL2hlbHBlcnMvY29sb3JQYXJzZXIuanMnXG5pbXBvcnQgTGlzdEl0ZW1UZXh0QXJlYSBmcm9tICcuL0xpc3RJdGVtVGV4dEFyZWEuanMnXG5cbmNvbnN0IERyYWdIYW5kbGUgPSBTb3J0YWJsZUhhbmRsZSgocHJvcHMpID0+e1xuXG5cdHZhciBhY3RpdmVTdHlsZSA9IHByb3BzLmNvbXBsZXRlID8ge30gOiB7Y3Vyc29yOidwb2ludGVyJ31cblx0dmFyIGNlbnRlclN0eWxlID0ge2Rpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBtYXJnaW46MTJ9XG5cblx0cmV0dXJuKFxuXHRcdDxzcGFuIHN0eWxlPXt7Li4ucHJvcHMuY29tcGxldGVTdHlsZSwgLi4uYWN0aXZlU3R5bGUsIC4uLmNlbnRlclN0eWxlfX0+XG5cdFx0PFJlb3JkZXIgLz5cblx0XHQ8L3NwYW4+XG5cdFx0KX1cbik7XG5cbmNvbnN0IENvbG9yTWVudSA9IChwcm9wcykgID0+IHtcblx0dmFyIGNvbG9ycyA9IFsncmVkJywgJ3B1cnBsZScsICdsaWdodEJsdWUnLCAndGVhbCcsICdsaWdodEdyZWVuJywgJ3llbGxvdycsICdvcmFuZ2UnLCAncGluayddXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdHtjb2xvcnMubWFwKChjb2xvciwgaW5kZXgpPT57XG5cblx0XHRcdFx0dmFyIGJyZWFrTGluZSA9IGluZGV4ICUgNCA9PT0gMyA/IDxiciAvPiA6IFwiXCJcblxuXHRcdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxzcGFuIGtleT17YCR7Y29sb3J9LSR7aW5kZXh9YH1cblx0XHRcdFx0b25DbGljaz17cHJvcHMuY2xpY2tIYW5kbGVyKGNvbG9yKX0+XG5cdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdHN0eWxlPXt7Y29sb3I6cHJpbWFyeUNvbG9yUGFyc2VyKGNvbG9yKX19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8RG90IC8+XG5cdFx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdFx0e2JyZWFrTGluZX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQpXG5cdFx0XHR9KX1cblx0XHQ8L2Rpdj5cblx0XHQpXG59XG5cblxuY2xhc3MgQmFzZUxpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0b3BlbjpmYWxzZSxcblx0XHRcdGFuY2hvckVsOiB1bmRlZmluZWRcblx0XHR9XG5cblx0XHR0aGlzLmNvbXBsZXRlRGlzcGxheSA9IHRoaXMuY29tcGxldGVEaXNwbGF5LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vcGVuTWVudSA9IHRoaXMub3Blbk1lbnUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNsb3NlTWVudSA9IHRoaXMuY2xvc2VNZW51LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jb2xvckl0ZW1DbGlja0hhbmRsZXIgPSB0aGlzLmNvbG9ySXRlbUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuXHR9XG5cblx0IGl0ZW0gPSB0aGlzLnByb3BzLnZhbHVlO1xuXG5cdGluY29tcGxldGVMaXN0U3R5bGUgPSB7IGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yUGFyc2VyKHRoaXMuaXRlbS5jb2xvcikgfTtcblx0Y29tcGxldGVMaXN0U3R5bGUgPSB7IGJhY2tncm91bmRDb2xvcjogZmFkZWRDb2xvclBhcnNlcih0aGlzLml0ZW0uY29sb3IpIH07XG5cdC8vIGxpc3RJdGVtU3R5bGUgPSB0aGlzLml0ZW0uY29tcGxldGVcblx0Ly8gXHQ/IHRoaXMuY29tcGxldGVMaXN0U3R5bGVcblx0Ly8gXHQ6IHRoaXMuaW5jb21wbGV0ZUxpc3RTdHlsZTtcblx0Ly8gbGlzdEl0ZW1TdHlsZSA9IHtiYWNrZ3JvdW5kQ29sb3I6dGhpcy5zdGF0ZS5iZ0NvbG9yfVxuXHRjb21wbGV0ZUdyZXkgPSBncmV5WzUwMF07XG5cdGNvbXBsZXRlTGluZVN0eWxlID0gdGhpcy5pdGVtLmNvbXBsZXRlXG5cdFx0PyB7IGNvbG9yOiB0aGlzLmNvbXBsZXRlR3JleSwgdGV4dERlY29yYXRpb246IFwibGluZS10aHJvdWdoXCIgfVxuXHRcdDoge307XG5cdGNvbXBsZXRlU3R5bGUgPSB0aGlzLml0ZW0uY29tcGxldGVcblx0PyB7IGNvbG9yOiB0aGlzLmNvbXBsZXRlR3JleSB9XG5cdDogeyBjb2xvcjogdGhpcy50ZXh0Q29sb3J9O1xuXG5cblx0Y29tcGxldGVEaXNwbGF5KCkge1xuXHRcdHZhciBjb21wbGV0ZWQgPSB0aGlzLml0ZW0uY29tcGxldGVDaGlsZHJlbi5sZW5ndGg7XG5cdFx0dmFyIHRvdGFsID0gY29tcGxldGVkICsgdGhpcy5pdGVtLmluY29tcGxldGVDaGlsZHJlbi5sZW5ndGg7XG5cdFx0dmFyIHRleHRDb2xvciA9IHRoaXMucHJvcHMudmFsdWUuY29tcGxldGU/IHRoaXMuY29tcGxldGVHcmV5IDogdGhpcy5wcm9wcy50ZXh0Q29sb3Jcblx0XHR2YXIgZGlzcGxheVRleHRTdHlsZSA9IHRoaXMucHJvcHMudmFsdWUuY29tcGxldGVcblx0XHQ/IHsgY29sb3I6IHRoaXMuY29tcGxldGVHcmV5fVxuXHRcdDogeyBjb2xvcjogdGhpcy5wcm9wcy50ZXh0Q29sb3J9O1xuXHRcdGlmICh0b3RhbCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0c3R5bGU9e2Rpc3BsYXlUZXh0U3R5bGV9XG5cdFx0XHRcdD57YCggJHtjb21wbGV0ZWR9IC8gJHt0b3RhbH0gY29tcGxldGUpYH08L3NwYW4+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnRlbnQoKSB7XG5cdFx0dmFyIHRleHRDb2xvciA9IHRoaXMucHJvcHMudmFsdWUuY29tcGxldGU/IHRoaXMuY29tcGxldGVHcmV5IDogdGhpcy5wcm9wcy50ZXh0Q29sb3Jcblx0XHR2YXIgY29udGVudFRleHRTdHlsZSA9IHRoaXMucHJvcHMudmFsdWUuY29tcGxldGVcblx0XHQ/IHsgY29sb3I6IHRoaXMuY29tcGxldGVHcmV5LCB0ZXh0RGVjb3JhdGlvbjogXCJsaW5lLXRocm91Z2hcIiB9XG5cdFx0OiB7IGNvbG9yOiB0aGlzLnByb3BzLnRleHRDb2xvcn07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzcGFuIHN0eWxlPXt7Li4uY29udGVudFRleHRTdHlsZSwgd29yZFdyYXA6J2JyZWFrLXdvcmQnLCB3b3JkQnJlYWs6J2JyZWFrLWFsbCd9fT5cblx0XHRcdFx0e3RoaXMuaXRlbS5jb250ZW50fVxuXHRcdFx0PC9zcGFuPlxuXHRcdCk7XG5cdH1cblxuXHRvcGVuTWVudShldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7b3Blbjp0cnVlLCBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldH0pXG5cdH1cblxuXHRjbG9zZU1lbnUoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtvcGVuOmZhbHNlfSlcblx0fVxuXG5cdGNvbG9ySXRlbUNsaWNrSGFuZGxlcihjb2xvck5hbWUpe1xuXHRcdHZhciBjbG9zZSA9IHRoaXMuY2xvc2VNZW51XG5cdFx0bGV0IGNoYW5nZUNvbG9yID0gdGhpcy5wcm9wcy5jaGFuZ2VDb2xvckNvbXBvc2VyKHRoaXMuaXRlbS5pZCwgY29sb3JOYW1lKVxuXHRcdGxldCBwcm9wc0NvbG9yID0gdGhpcy5wcm9wcy5iZ0NvbG9yXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCl7XG5cdFx0Y2hhbmdlQ29sb3IoKVxuXHRcdGNsb3NlKClcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHR2YXIgdGV4dENvbG9yID0gdGhpcy5wcm9wcy52YWx1ZS5jb21wbGV0ZT8gdGhpcy5jb21wbGV0ZUdyZXkgOiB0aGlzLnByb3BzLnRleHRDb2xvclxuXHRyZXR1cm4gKFxuXHRcdDxMaXN0SXRlbSBkaXZpZGVyPXt0cnVlfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy5pdGVtQ29sb3IsIHBhZGRpbmc6MTJ9fT5cblx0XHRcdDxEcmFnSGFuZGxlXG5cdFx0XHRcdGNvbXBsZXRlU3R5bGU9e3tjb2xvcjp0ZXh0Q29sb3J9fVxuXHRcdFx0XHRjb21wbGV0ZT17dGhpcy5pdGVtLmNvbXBsZXRlfVxuXHRcdFx0Lz5cblx0XHRcdDxDaGVja2JveFxuXHRcdFx0XHRjaGVja2VkPXt0aGlzLml0ZW0uY29tcGxldGV9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMucHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXIodGhpcy5pdGVtLmlkKX1cblx0XHRcdFx0c3R5bGU9e3tjb2xvcjp0ZXh0Q29sb3J9fVxuXHRcdFx0Lz5cblxuXHRcdFx0PExpc3RJdGVtVGV4dEFyZWFcblx0XHRcdHByaW1hcnk9e3RoaXMuY29udGVudCgpfVxuXHRcdFx0c2Vjb25kYXJ5PXt0aGlzLmNvbXBsZXRlRGlzcGxheSgpfVxuXHRcdFx0dGV4dENvbG9yPXt0ZXh0Q29sb3J9XG5cdFx0XHRyYXdUZXh0PXt0aGlzLml0ZW0uY29udGVudH1cblx0XHRcdHVwZGF0ZUl0ZW09e3RoaXMucHJvcHMudXBkYXRlSXRlbX1cblx0XHRcdGlkPXt0aGlzLml0ZW0uaWR9XG5cdFx0XHQvPlxuXG5cdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLmNoYW5nZUJhc2VDb21wb3Nlcih0aGlzLml0ZW0uaWQpfVxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHQ+XG5cdFx0XHRcdDxGb3JtYXRMaXN0QnVsbGV0ZWQgLz5cblx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRvbkNsaWNrPXt0aGlzLm9wZW5NZW51fVxuXHRcdFx0c3R5bGU9e3tjb2xvcjp0ZXh0Q29sb3J9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8U2V0dGluZ3MgLz5cblx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdDxNZW51XG5cdFx0XHRpZD17YCR7dGhpcy5pdGVtLmlkfS1tZW51YH1cblx0XHRcdG9wZW49e3RoaXMuc3RhdGUub3Blbn1cblx0XHRcdG9uUmVxdWVzdENsb3NlPXt0aGlzLmNsb3NlTWVudX1cblx0XHRcdGFuY2hvckVsPXt0aGlzLnN0YXRlLmFuY2hvckVsfVxuXHRcdFx0PlxuXHRcdFx0XHQ8VHlwb2dyYXBoeVxuXHRcdFx0XHR0eXBlPXtcInN1YmhlYWRpbmdcIn1cblx0XHRcdFx0YWxpZ249eydjZW50ZXInfVxuXHRcdFx0XHRzdHlsZT17e291dGxpbmU6J25vbmUnLCBwYWRkaW5nTGVmdDoxNn19XG5cdFx0XHRcdD5DaGFuZ2UgQ29sb3I8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdDxEaXZpZGVyIC8+XG5cdFx0XHRcdDxDb2xvck1lbnVcblx0XHRcdFx0Y2xpY2tIYW5kbGVyPXt0aGlzLmNvbG9ySXRlbUNsaWNrSGFuZGxlcn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PERpdmlkZXIgLz5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319XG5cdFx0XHRcdD5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOid3aGl0ZScsIGJhY2tncm91bmRDb2xvcjpyZWRbNTAwXSwgbWFyZ2luVG9wOjh9fVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLnByb3BzLmRlbGV0ZUl0ZW1Db21wb3Nlcih0aGlzLml0ZW0uaWQpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PERlbGV0ZUZvcmV2ZXIgLz4geydEZWxldGUgSXRlbSd9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTWVudT5cblx0XHQ8L0xpc3RJdGVtPlxuXHQpO1xuXHR9XG59O1xuXG5CYXNlTGlzdEl0ZW0ucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VMaXN0SXRlbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0J1dHRvbidcbmltcG9ydCBEaWFsb2csIHtcbiAgRGlhbG9nVGl0bGUsXG4gIERpYWxvZ0NvbnRlbnQsXG4gIERpYWxvZ0NvbnRlbnRUZXh0LFxuICBEaWFsb2dBY3Rpb25zXG59IGZyb20gJ21hdGVyaWFsLXVpL0RpYWxvZydcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ21hdGVyaWFsLXVpL1R5cG9ncmFwaHknXG5pbXBvcnQgQXBwIGZyb20gJy4uL3RvZG8tbGlzdC9zcmMvQXBwLmpzJ1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4uL3RvZG8tbGlzdC9zcmMvaW5kZXguanMnXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nVG9wOiAyMDBcbiAgfVxufVxuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlXG4gIH07XG5cbiAgaGFuZGxlUmVxdWVzdENsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9KVxuICB9O1xuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogdHJ1ZVxuICAgIH0pXG4gIH07XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwcD5cbiAgICAgICAgPFRvZG9MaXN0IC8+XG4gICAgICA8L0FwcD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3RvZG8uanM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuLy8gaW1wb3J0IHJlZ2lzdGVyU2VydmljZVdvcmtlciBmcm9tIFwiLi9yZWdpc3RlclNlcnZpY2VXb3JrZXJcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgcmVkdWNlcnMgZnJvbSBcIi4vcmVkdWNlcnNcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5pbXBvcnQgUmVkdXhQcm9taXNlIGZyb20gXCJyZWR1eC1wcm9taXNlXCI7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xuaW1wb3J0IHsgTXVpVGhlbWVQcm92aWRlciB9IGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgVG9kb0NvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcnMvVG9kb0NvbnRhaW5lci5qcydcblxuXG5jb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gY29tcG9zZVdpdGhEZXZUb29scyhcblx0YXBwbHlNaWRkbGV3YXJlKFJlZHV4UHJvbWlzZSlcbikoY3JlYXRlU3RvcmUpO1xuXG5jb25zdCBCb2lsZXIgPSAoKSA9PlxuXHQ8UHJvdmlkZXIgc3RvcmU9e2NyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUocmVkdWNlcnMpfT5cblx0XHQ8VG9kb0NvbnRhaW5lciAvPlxuXHQ8L1Byb3ZpZGVyPjtcblxuLy8gUmVhY3RET00ucmVuZGVyKDxCb2lsZXIgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XG4vLyByZWdpc3RlclNlcnZpY2VXb3JrZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgQm9pbGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9pbmRleC5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IGl0ZW1zIGZyb20gXCIuL2l0ZW1zX3JlZHVjZXIuanNcIjtcbmltcG9ydCBiYXNlSXRlbSBmcm9tIFwiLi9iYXNlSXRlbV9yZWR1Y2VyLmpzXCI7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcblx0aXRlbXMsXG5cdGJhc2VJdGVtXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgTkVXX0lURU0sIENPTVBMRVRFX0lURU0sIERFTEVURV9JVEVNLCBSRU9SREVSX0lURU0sIENIQU5HRV9DT0xPUiwgVVBEQVRFX0lURU0gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuXG5mdW5jdGlvbiBpdGVtcyhzdGF0ZSA9IHNlZWREYXRhLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgTkVXX0lURU06XG5cdFx0XHR2YXIgbmV3SUQgPSByYW5kb21JRCgpO1xuXHRcdFx0dmFyIHBhcmVudElEID0gYWN0aW9uLnBheWxvYWQucGFyZW50O1xuXHRcdFx0dmFyIG5ld0l0ZW0gPSB7XG5cdFx0XHRcdFtuZXdJRF06IHtcblx0XHRcdFx0XHRpZDogbmV3SUQsXG5cdFx0XHRcdFx0Y29udGVudDogYWN0aW9uLnBheWxvYWQuY29udGVudCxcblx0XHRcdFx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0XHRcdFx0Y29sb3I6J2xpZ2h0Qmx1ZScsXG5cdFx0XHRcdFx0Y29tcGxldGVDaGlsZHJlbjogW10sXG5cdFx0XHRcdFx0aW5jb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRcdFx0XHRwYXJlbnQ6IHBhcmVudElEXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHR2YXIgbmV3UGFyZW50ID0geyBbcGFyZW50SURdOiBhZGRDaGlsZChzdGF0ZVtwYXJlbnRJRF0sIG5ld0lEKSB9O1xuXHRcdFx0dmFyIG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUsIG5ld0l0ZW0sIG5ld1BhcmVudCk7XG5cdFx0XHRyZXR1cm4gbmV3U3RhdGU7XG5cblx0XHRjYXNlIENPTVBMRVRFX0lURU06XG5cdFx0XHR2YXIgaWQgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHZhciBuZXdTdGF0ZSA9IF8ubWVyZ2Uoe30sIHN0YXRlKTtcblx0XHRcdHZhciBuZXdJdGVtID0geyBbaWRdOiBuZXdTdGF0ZVtpZF0gfTtcblx0XHRcdHZhciBwYXJlbnRJRCA9IG5ld0l0ZW1baWRdLnBhcmVudDtcblx0XHRcdG5ld0l0ZW1baWRdLmNvbXBsZXRlID0gIW5ld0l0ZW1baWRdLmNvbXBsZXRlO1xuXHRcdFx0aWYgKG5ld0l0ZW1baWRdLmNvbXBsZXRlKSB7XG5cdFx0XHRcdF8ucHVsbChuZXdTdGF0ZVtwYXJlbnRJRF0uaW5jb21wbGV0ZUNoaWxkcmVuLCBpZCk7XG5cdFx0XHRcdG5ld1N0YXRlW3BhcmVudElEXS5jb21wbGV0ZUNoaWxkcmVuLnVuc2hpZnQoaWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Xy5wdWxsKG5ld1N0YXRlW3BhcmVudElEXS5jb21wbGV0ZUNoaWxkcmVuLCBpZCk7XG5cdFx0XHRcdG5ld1N0YXRlW3BhcmVudElEXS5pbmNvbXBsZXRlQ2hpbGRyZW4ucHVzaChpZCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gXy5tZXJnZShuZXdTdGF0ZSwgbmV3SXRlbSk7XG5cblx0XHRjYXNlIERFTEVURV9JVEVNOlxuXHRcdFx0dmFyIGlkID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHR2YXIgbmV3U3RhdGUgPSBfLm1lcmdlKHt9LCBzdGF0ZSk7XG5cdFx0XHR2YXIgcGFyZW50ID0gc3RhdGVbaWRdLnBhcmVudDtcblx0XHRcdG5ld1N0YXRlID0gXy5vbWl0KG5ld1N0YXRlLCBnZW5lcmF0ZUNoaWxkTGlzdChzdGF0ZSwgaWQpKTtcblx0XHRcdG5ld1N0YXRlW3BhcmVudF0uY29tcGxldGVDaGlsZHJlbiA9IF8uZmlsdGVyKFxuXHRcdFx0XHRuZXdTdGF0ZVtwYXJlbnRdLmNvbXBsZXRlQ2hpbGRyZW4sXG5cdFx0XHRcdG4gPT4gbiAhPT0gaWRcblx0XHRcdCk7XG5cdFx0XHRuZXdTdGF0ZVtwYXJlbnRdLmluY29tcGxldGVDaGlsZHJlbiA9IF8uZmlsdGVyKFxuXHRcdFx0XHRuZXdTdGF0ZVtwYXJlbnRdLmluY29tcGxldGVDaGlsZHJlbixcblx0XHRcdFx0biA9PiBuICE9PSBpZFxuXHRcdFx0KTtcblx0XHRcdHJldHVybiBuZXdTdGF0ZTtcblxuXHRcdGNhc2UgUkVPUkRFUl9JVEVNOlxuXHRcdFx0dmFyIG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUpO1xuXHRcdFx0dmFyIHBhcmVudElEID0gYWN0aW9uLnBheWxvYWQucGFyZW50SUQ7XG5cdFx0XHRuZXdTdGF0ZVtwYXJlbnRJRF0uaW5jb21wbGV0ZUNoaWxkcmVuID0gcmVvcmRlcihcblx0XHRcdFx0bmV3U3RhdGVbcGFyZW50SURdLmluY29tcGxldGVDaGlsZHJlbixcblx0XHRcdFx0YWN0aW9uLnBheWxvYWQub2xkSW5kZXgsXG5cdFx0XHRcdGFjdGlvbi5wYXlsb2FkLm5ld0luZGV4XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIG5ld1N0YXRlO1xuXG5cdFx0Y2FzZSBDSEFOR0VfQ09MT1I6XG5cdFx0XHR2YXIgbmV3U3RhdGUgPSBfLm1lcmdlKHt9LCBzdGF0ZSlcblx0XHRcdG5ld1N0YXRlW2FjdGlvbi5wYXlsb2FkLmlkXS5jb2xvciA9IGFjdGlvbi5wYXlsb2FkLmNvbG9yXG5cdFx0XHRyZXR1cm4gbmV3U3RhdGU7XG5cblx0XHRjYXNlIFVQREFURV9JVEVNOlxuXHRcdFx0dmFyIG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUpXG5cdFx0XHRuZXdTdGF0ZVthY3Rpb24ucGF5bG9hZC5pZF0uY29udGVudCA9IGFjdGlvbi5wYXlsb2FkLm5ld1RleHRcblx0XHRcdHJldHVybiBuZXdTdGF0ZVxuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBpdGVtcztcblxuLy8gLy8gU3RydWN0dXJlIG9mIEl0ZW1zXG4vLyBpZDoge1xuLy8gXHRjb250ZW50OlN0cmluZyxcbi8vIFx0cGFyZW50OmlkLFxuLy8gXHRjaGlsZHJlbjpbaWQsaWQsaWQuLi5dXG4vLyB9XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2hpbGRMaXN0KHN0YXRlLCBiYXNlSUQpIHtcblx0dmFyIGxpc3QgPSBbYmFzZUlEXTtcblx0bGlzdCA9IGxpc3Rcblx0XHQuY29uY2F0KHN0YXRlW2Jhc2VJRF0uY29tcGxldGVDaGlsZHJlbilcblx0XHQuY29uY2F0KHN0YXRlW2Jhc2VJRF0uaW5jb21wbGV0ZUNoaWxkcmVuKTtcblx0Zm9yICh2YXIgaSA9IDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bGlzdCA9IGxpc3Rcblx0XHRcdC5jb25jYXQoc3RhdGVbbGlzdFtpXV0uY29tcGxldGVDaGlsZHJlbilcblx0XHRcdC5jb25jYXQoc3RhdGVbbGlzdFtpXV0uaW5jb21wbGV0ZUNoaWxkcmVuKTtcblx0fVxuXHRyZXR1cm4gbGlzdDtcbn1cblxuZnVuY3Rpb24gcmFuZG9tSUQoKSB7XG5cdHJldHVybiBfLnJhbmRvbSgwLCA2NTUwMCwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZChpdGVtLCBjaGlsZCkge1xuXHRyZXR1cm4gXy5tZXJnZSh7fSwgaXRlbSwge1xuXHRcdGluY29tcGxldGVDaGlsZHJlbjogaXRlbS5pbmNvbXBsZXRlQ2hpbGRyZW4uY29uY2F0KGNoaWxkKVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVvcmRlcihhcnIsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuXHR2YXIgcmVtb3ZlZCA9IFtdO1xuXHRpZiAob2xkSW5kZXggPT09IDApIHtcblx0XHRyZW1vdmVkID0gYXJyLnNsaWNlKDEpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBiZWZvcmUgPSBhcnIuc2xpY2UoMCwgb2xkSW5kZXgpO1xuXHRcdHZhciBhZnRlciA9IGFyci5zbGljZShvbGRJbmRleCArIDEsIGFyci5sZW5ndGgpO1xuXHRcdHJlbW92ZWQgPSBbLi4uYmVmb3JlLCAuLi5hZnRlcl07XG5cdH1cblxuXHRpZiAobmV3SW5kZXggPT09IDApIHtcblx0XHRyZXR1cm4gW2FycltvbGRJbmRleF0sIC4uLnJlbW92ZWRdO1xuXHR9IGVsc2UgaWYgKG5ld0luZGV4ID09PSBhcnIubGVuZ3RoIC0gMSkge1xuXHRcdHJldHVybiBbLi4ucmVtb3ZlZCwgYXJyW29sZEluZGV4XV07XG5cdH0gZWxzZSB7XG5cdFx0YmVmb3JlID0gcmVtb3ZlZC5zbGljZSgwLCBuZXdJbmRleCk7XG5cdFx0YWZ0ZXIgPSByZW1vdmVkLnNsaWNlKG5ld0luZGV4LCByZW1vdmVkLmxlbmd0aCk7XG5cdFx0cmV0dXJuIFsuLi5iZWZvcmUsIGFycltvbGRJbmRleF0sIC4uLmFmdGVyXTtcblx0fVxufVxuXG5jb25zdCBzZWVkRGF0YSA9IHtcblx0MTAwMToge1xuXHRcdGlkOiAxMDAxLFxuXHRcdGNvbnRlbnQ6IFwiUmFuZG9tIHNlZWQgMVwiLFxuXHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRjb2xvcjoncmVkJyxcblx0XHRwYXJlbnQ6IFwicm9vdFwiLFxuXHRcdGNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdGluY29tcGxldGVDaGlsZHJlbjogWzEwMDRdXG5cdH0sXG5cdDEwMDI6IHtcblx0XHRpZDogMTAwMixcblx0XHRjb250ZW50OiBcIlJhbmRvbSBzZWVkIDJcIixcblx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0Y29sb3I6J3JlZCcsXG5cdFx0cGFyZW50OiBcInJvb3RcIixcblx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFsxMDAzXVxuXHR9LFxuXHQxMDAzOiB7XG5cdFx0aWQ6IDEwMDMsXG5cdFx0Y29udGVudDogXCJSYW5kb20gc2VlZCAzXCIsXG5cdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdGNvbG9yOidyZWQnLFxuXHRcdHBhcmVudDogMTAwMixcblx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFtdXG5cdH0sXG5cdDEwMDQ6IHtcblx0XHRpZDogMTAwNCxcblx0XHRjb250ZW50OiBcIlJhbmRvbSBzZWVkIDRcIixcblx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0Y29sb3I6J3JlZCcsXG5cdFx0cGFyZW50OiAxMDAxLFxuXHRcdGNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdGluY29tcGxldGVDaGlsZHJlbjogW11cblx0fSxcblx0MTAwNToge1xuXHRcdGlkOiAxMDA1LFxuXHRcdGNvbnRlbnQ6IFwiUmFuZG9tIHNlZWQgNVwiLFxuXHRcdGNvbXBsZXRlOiB0cnVlLFxuXHRcdGNvbG9yOidyZWQnLFxuXHRcdHBhcmVudDogXCJyb290XCIsXG5cdFx0Y29tcGxldGVDaGlsZHJlbjogW10sXG5cdFx0aW5jb21wbGV0ZUNoaWxkcmVuOiBbXVxuXHR9LFxuXHRyb290OiB7XG5cdFx0Y29sb3I6J3JlZCcsXG5cdFx0Y29tcGxldGVDaGlsZHJlbjogWzEwMDVdLFxuXHRcdGluY29tcGxldGVDaGlsZHJlbjogWzEwMDEsIDEwMDJdXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL2l0ZW1zX3JlZHVjZXIuanMiLCJpbXBvcnQgeyBDSEFOR0VfQkFTRSB9IGZyb20gXCIuLi9hY3Rpb25zL1wiO1xuXG5mdW5jdGlvbiBiYXNlSXRlbShzdGF0ZSA9IFwicm9vdFwiLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQ0hBTkdFX0JBU0U6XG5cdFx0XHRyZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlSXRlbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvcmVkdWNlcnMvYmFzZUl0ZW1fcmVkdWNlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG5cdG5ld0l0ZW0sXG5cdGNoYW5nZUJhc2VJdGVtLFxuXHRjb21wbGV0ZUl0ZW0sXG5cdGRlbGV0ZUl0ZW0sXG5cdHJlb3JkZXJJdGVtLFxuXHRjaGFuZ2VDb2xvcixcblx0dXBkYXRlSXRlbVxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XG4vLyBpbXBvcnQgc3R5bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdEl0ZW0vc3R5bGUuY3NzXCI7XG5pbXBvcnQgTGlzdEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0SGVhZGVyLmpzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwibWF0ZXJpYWwtdWkvQ2FyZFwiO1xuXG5jbGFzcyBUb2RvQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5ld0l0ZW06IFwiXCJcblx0XHR9O1xuXHRcdHRoaXMuaW5wdXRVcGRhdGUgPSB0aGlzLmlucHV0VXBkYXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5uZXdJdGVtQWN0aW9uID0gdGhpcy5uZXdJdGVtQWN0aW9uLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jaGFuZ2VCYXNlQ29tcG9zZXIgPSB0aGlzLmNoYW5nZUJhc2VDb21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY29tcGxldGVJdGVtQ29tcG9zZXIgPSB0aGlzLmNvbXBsZXRlSXRlbUNvbXBvc2VyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5kZWxldGVJdGVtQ29tcG9zZXIgPSB0aGlzLmRlbGV0ZUl0ZW1Db21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVvcmRlckl0ZW1Db21wb3NlciA9IHRoaXMucmVvcmRlckl0ZW1Db21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZ2VuZXJhdGVDb21wbGV0ZSA9IHRoaXMuZ2VuZXJhdGVDb21wbGV0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2hhbmdlQ29sb3JDb21wb3NlciA9IHRoaXMuY2hhbmdlQ29sb3JDb21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudXBkYXRlSXRlbURpc3BhdGNoID0gdGhpcy51cGRhdGVJdGVtRGlzcGF0Y2guYmluZCh0aGlzKTtcblx0fVxuXG5cdGlucHV0VXBkYXRlKGV2ZW50KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG5ld0l0ZW06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcblx0fVxuXG5cdG5ld0l0ZW1BY3Rpb24oY29udGVudCkge1xuXHRcdHRoaXMucHJvcHMubmV3SXRlbShjb250ZW50LCB0aGlzLnByb3BzLmJhc2VJdGVtKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgbmV3SXRlbTogXCJcIiB9KTtcblx0fVxuXG5cdGNoYW5nZUJhc2VDb21wb3NlcihpZCkge1xuXHRcdHZhciBjaGFuZ2VCYXNlSXRlbSA9IHRoaXMucHJvcHMuY2hhbmdlQmFzZUl0ZW07XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0Y2hhbmdlQmFzZUl0ZW0oaWQpO1xuXHRcdH07XG5cdH1cblxuXHRkZWxldGVJdGVtQ29tcG9zZXIoaWQpIHtcblx0XHRsZXQgZGVsZXRlSXRlbURpc3BhdGNoID0gdGhpcy5wcm9wcy5kZWxldGVJdGVtO1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdGRlbGV0ZUl0ZW1EaXNwYXRjaChpZCk7XG5cdFx0fTtcblx0fVxuXG5cdGNvbXBsZXRlSXRlbUNvbXBvc2VyKGlkKSB7XG5cdFx0bGV0IGNvbXBsZXRlSXRlbURpc3BhdGNoID0gdGhpcy5wcm9wcy5jb21wbGV0ZUl0ZW07XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcGxldGVJdGVtRGlzcGF0Y2goaWQpO1xuXHRcdH07XG5cdH1cblxuXHRyZW9yZGVySXRlbUNvbXBvc2VyKGlkLCBvbGRJbmRleCwgbmV3SW5kZXgpIHtcblx0XHRsZXQgcmVvcmRlckl0ZW1EaXNwYXRjaCA9IHRoaXMucHJvcHMucmVvcmRlckl0ZW07XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVvcmRlckl0ZW1EaXNwYXRjaChpZCwgb2xkSW5kZXgsIG5ld0luZGV4KTtcblx0XHR9O1xuXHR9XG5cblx0Z2VuZXJhdGVDb21wbGV0ZSgpIHtcblx0XHR2YXIgY29tcGxldGVDb3VudCA9IHRoaXMucHJvcHMuaXRlbXNbdGhpcy5wcm9wcy5iYXNlSXRlbV1cblx0XHRcdC5jb21wbGV0ZUNoaWxkcmVuLmxlbmd0aDtcblx0XHR2YXIgdG90YWxDb3VudCA9XG5cdFx0XHR0aGlzLnByb3BzLml0ZW1zW3RoaXMucHJvcHMuYmFzZUl0ZW1dLmluY29tcGxldGVDaGlsZHJlbi5sZW5ndGggK1xuXHRcdFx0Y29tcGxldGVDb3VudDtcblx0XHRyZXR1cm4gYCggJHtjb21wbGV0ZUNvdW50fSAvICR7dG90YWxDb3VudH0gQ29tcGxldGUgKWA7XG5cdH1cblxuXHRjaGFuZ2VDb2xvckNvbXBvc2VyKGlkLCBjb2xvcikge1xuXHRcdGxldCBjaGFuZ2VDb2xvckRpc3BhdGNoID0gdGhpcy5wcm9wcy5jaGFuZ2VDb2xvclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKXtcblx0XHRcdGNoYW5nZUNvbG9yRGlzcGF0Y2goaWQsIGNvbG9yKVxuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZUl0ZW1EaXNwYXRjaChpZCwgbmV3VGV4dCl7XG5cdFx0dGhpcy5wcm9wcy51cGRhdGVJdGVtKGlkLCBuZXdUZXh0KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjdXJyZW50SXRlbSA9IHRoaXMucHJvcHMuaXRlbXNbdGhpcy5wcm9wcy5iYXNlSXRlbV07XG5cdFx0dmFyIHBhcmVudEl0ZW0gPSB0aGlzLnByb3BzLml0ZW1zW2N1cnJlbnRJdGVtLnBhcmVudF07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxDYXJkIHN0eWxlPXt7IG1hcmdpbjogXCJhdXRvXCIsIG1hcmdpbjogXCIxNnB4XCIgfX0+XG5cdFx0XHRcdDxMaXN0SGVhZGVyXG5cdFx0XHRcdFx0YmFzZUl0ZW09e3RoaXMucHJvcHMuYmFzZUl0ZW19XG5cdFx0XHRcdFx0YmFzZUl0ZW1UZXh0PXtjdXJyZW50SXRlbS5jb250ZW50fVxuXHRcdFx0XHRcdGN1cnJlbnRQYXJlbnQ9e2N1cnJlbnRJdGVtLnBhcmVudH1cblx0XHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3RoaXMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRcdGNvdW50ZXJUZXh0PXt0aGlzLmdlbmVyYXRlQ29tcGxldGUoKX1cblx0XHRcdFx0XHRpdGVtcz17dGhpcy5wcm9wcy5pdGVtc31cblx0XHRcdFx0XHRuZXdJdGVtQWN0aW9uPXt0aGlzLm5ld0l0ZW1BY3Rpb259XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxMaXN0XG5cdFx0XHRcdFx0bGlzdD17dGhpcy5wcm9wcy5pdGVtc31cblx0XHRcdFx0XHRiYXNlSXRlbT17dGhpcy5wcm9wcy5iYXNlSXRlbX1cblx0XHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3RoaXMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17dGhpcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3RoaXMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0cmVvcmRlckl0ZW1Db21wb3Nlcj17dGhpcy5yZW9yZGVySXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXIgPXt0aGlzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdFx0dXBkYXRlSXRlbT17dGhpcy51cGRhdGVJdGVtRGlzcGF0Y2h9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0NhcmQ+XG5cdFx0KTtcblx0fVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoeyBpdGVtcywgYmFzZUl0ZW0gfSkge1xuXHRyZXR1cm4geyBpdGVtcywgYmFzZUl0ZW0gfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG5cdHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoXG5cdFx0eyBuZXdJdGVtLCBjaGFuZ2VCYXNlSXRlbSwgY29tcGxldGVJdGVtLCBkZWxldGVJdGVtLCByZW9yZGVySXRlbSwgY2hhbmdlQ29sb3IsIHVwZGF0ZUl0ZW0gfSxcblx0XHRkaXNwYXRjaFxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUb2RvQ29udGFpbmVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29udGFpbmVycy9Ub2RvQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBJbmNvbXBsZXRlTGlzdCBmcm9tIFwiLi9JbmNvbXBsZXRlTGlzdC5qc1wiO1xuaW1wb3J0IENvbXBsZXRlTGlzdCBmcm9tIFwiLi9Db21wbGV0ZUxpc3QuanNcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlU2hlZXQgfSBmcm9tIFwibWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5cblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJMaXN0XCIsIHRoZW1lID0+ICh7XG5cdGNvbnRhaW5lcjoge1xuXHR9XG59KSk7XG5cbmNvbnN0IExpc3QgPSBwcm9wcyA9PiB7XG5cdGNvbnN0IGl0ZW1zTGlzdCA9IHByb3BzLmxpc3Q7XG5cdGNvbnN0IGJhc2VJdGVtID0gcHJvcHMuYmFzZUl0ZW07XG5cdGxldCBjb21wbGV0ZUxpc3RJdGVtcyA9IGl0ZW1zTGlzdFtiYXNlSXRlbV0uY29tcGxldGVDaGlsZHJlbjtcblx0bGV0IGluY29tcGxldGVMaXN0SXRlbXMgPSBpdGVtc0xpc3RbYmFzZUl0ZW1dLmluY29tcGxldGVDaGlsZHJlbjtcblxuXHRjb21wbGV0ZUxpc3RJdGVtcyA9IHBvcHVsYXRlTGlzdChjb21wbGV0ZUxpc3RJdGVtcyk7XG5cdGluY29tcGxldGVMaXN0SXRlbXMgPSBwb3B1bGF0ZUxpc3QoaW5jb21wbGV0ZUxpc3RJdGVtcyk7XG5cblx0ZnVuY3Rpb24gcG9wdWxhdGVMaXN0KGxpc3RBcnIpIHtcblx0XHRyZXR1cm4gbGlzdEFyci5tYXAobGlzdElEID0+IGl0ZW1zTGlzdFtsaXN0SURdKTtcblx0fVxuXG5cdGNvbnN0IGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cblx0XHRcdDxJbmNvbXBsZXRlTGlzdFxuXHRcdFx0XHRpdGVtcz17aW5jb21wbGV0ZUxpc3RJdGVtc31cblx0XHRcdFx0cGFyZW50SUQ9e3Byb3BzLmJhc2VJdGVtfVxuXHRcdFx0XHRyZW5kZXJDaGlsZHJlbj17dHJ1ZX1cblx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXtwcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdHJlb3JkZXJJdGVtQ29tcG9zZXI9e3Byb3BzLnJlb3JkZXJJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXIgPXtwcm9wcy5jaGFuZ2VDb2xvckNvbXBvc2VyfVxuXHRcdFx0XHR1cGRhdGVJdGVtPXtwcm9wcy51cGRhdGVJdGVtfVxuXHRcdFx0Lz5cblx0XHRcdDxDb21wbGV0ZUxpc3Rcblx0XHRcdFx0aXRlbXM9e2NvbXBsZXRlTGlzdEl0ZW1zfVxuXHRcdFx0XHRwYXJlbnRJRD17cHJvcHMuYmFzZUl0ZW19XG5cdFx0XHRcdHJlbmRlckNoaWxkcmVuPXt0cnVlfVxuXHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0ZGVsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdGNvbXBsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0cmVvcmRlckl0ZW1Db21wb3Nlcj17cHJvcHMucmVvcmRlckl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3NlciA9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdHVwZGF0ZUl0ZW09e3Byb3BzLnVwZGF0ZUl0ZW19XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuTGlzdC5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShMaXN0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHtcblx0U29ydGFibGVDb250YWluZXIsXG5cdFNvcnRhYmxlRWxlbWVudFxufSBmcm9tIFwicmVhY3Qtc29ydGFibGUtaG9jXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vTGlzdEl0ZW0uanNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCJtYXRlcmlhbC11aS9MaXN0XCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IHtwcmltYXJ5Q29sb3JQYXJzZXIsIGZhZGVkQ29sb3JQYXJzZXIsIHRleHRDb2xvclBhcnNlcn0gZnJvbSAnLi4vaGVscGVycy9jb2xvclBhcnNlci5qcydcblxuXG5jb25zdCBzdHlsZVNoZWV0ID0gY3JlYXRlU3R5bGVTaGVldChcIkluY29tcGxldGVMaXN0XCIsIHRoZW1lID0+ICh7XG5cdGNvbnRhaW5lcjoge1xuXHRcdGxpc3RTdHlsZTogXCJub25lXCIsXG5cdFx0cGFkZGluZzogMCxcblx0XHRtYXJnaW46IDBcblx0fSxcblx0cm9vdDoge1xuXHRcdHBhZGRpbmc6IDBcblx0fVxufSkpO1xuXG5cbmNvbnN0IFNvcnRhYmxlTGlzdCA9IFNvcnRhYmxlQ29udGFpbmVyKChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxMaXN0IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NGb3JMaXN0fT5cblx0XHRcdHtwcm9wcy5pdGVtcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxTb3J0YWJsZUxpc3RJdGVtXG5cdFx0XHRcdFx0XHRrZXk9e2BpdGVtLSR7dmFsdWUuaWR9YH1cblx0XHRcdFx0XHRcdGluZGV4PXtpbmRleH1cblx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0ZGVsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRjaGFuZ2VDb2xvckNvbXBvc2VyID17cHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0XHRcdGJnQ29sb3JDb21wb3Nlcj17cHJvcHMuYmdDb2xvckNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0dGV4dENvbG9yQ29tcG9zZXI9e3Byb3BzLnRleHRDb2xvckNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0dXBkYXRlSXRlbT17cHJvcHMudXBkYXRlSXRlbX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC9MaXN0PlxuXHQpO1xufSk7XG5cbmNvbnN0IFNvcnRhYmxlTGlzdEl0ZW0gPSBTb3J0YWJsZUVsZW1lbnQoKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PExpc3RJdGVtXG5cdFx0XHR2YWx1ZT17cHJvcHMudmFsdWV9XG5cdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0Y2hhbmdlQ29sb3JDb21wb3NlciA9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRpdGVtQ29sb3I9e3Byb3BzLmJnQ29sb3JDb21wb3Nlcihwcm9wcy52YWx1ZS5jb2xvcil9XG5cdFx0XHR0ZXh0Q29sb3I9e3Byb3BzLnRleHRDb2xvckNvbXBvc2VyKHByb3BzLnZhbHVlLmNvbG9yLCBwcm9wcy52YWx1ZS5jb21wbGV0ZSl9XG5cdFx0XHR1cGRhdGVJdGVtPXtwcm9wcy51cGRhdGVJdGVtfVxuXHRcdC8+XG5cdCk7XG59KTtcblxuY29uc3QgSW5jb21wbGV0ZUxpc3QgPSBwcm9wcyA9PiB7XG5cdGNvbnN0IGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzO1xuXG5cblx0ZnVuY3Rpb24gaGFuZGxlU29ydCh7IG9sZEluZGV4LCBuZXdJbmRleCx9KSB7XG5cdFx0cHJvcHMucmVvcmRlckl0ZW1Db21wb3Nlcihwcm9wcy5wYXJlbnRJRCwgb2xkSW5kZXgsIG5ld0luZGV4KSgpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PFNvcnRhYmxlTGlzdFxuXHRcdFx0XHRpdGVtcz17cHJvcHMuaXRlbXN9XG5cdFx0XHRcdHVzZURyYWdIYW5kbGU9e3RydWV9XG5cdFx0XHRcdG9uU29ydEVuZD17aGFuZGxlU29ydH1cblx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXtwcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdGNsYXNzRm9yTGlzdD17Y2xhc3Nlcy5yb290fVxuXHRcdFx0XHRjaGFuZ2VDb2xvckNvbXBvc2VyID17cHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0YmdDb2xvckNvbXBvc2VyPXtwcmltYXJ5Q29sb3JQYXJzZXJ9XG5cdFx0XHRcdHRleHRDb2xvckNvbXBvc2VyPXt0ZXh0Q29sb3JQYXJzZXJ9XG5cdFx0XHRcdHVwZGF0ZUl0ZW09e3Byb3BzLnVwZGF0ZUl0ZW19XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuSW5jb21wbGV0ZUxpc3QucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVTaGVldCkoSW5jb21wbGV0ZUxpc3QpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0luY29tcGxldGVMaXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL0xpc3RJdGVtLmpzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwibWF0ZXJpYWwtdWkvTGlzdFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcbmltcG9ydCB7cHJpbWFyeUNvbG9yUGFyc2VyLCBmYWRlZENvbG9yUGFyc2VyLCB0ZXh0Q29sb3JQYXJzZXJ9IGZyb20gJy4uL2hlbHBlcnMvY29sb3JQYXJzZXIuanMnXG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBjcmVhdGVTdHlsZVNoZWV0KFwiQ29tcGxldGVMaXN0XCIsIHRoZW1lID0+ICh7XG5cdGNvbnRhaW5lcjoge1xuXHRcdG1hcmdpbjogMCxcblx0XHRwYWRkaW5nOiAwXG5cdH1cbn0pKTtcblxuY29uc3QgQ29tcGxldGVMaXN0ID0gcHJvcHMgPT4ge1xuXHRjb25zdCBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcztcblxuXHRyZXR1cm4gKFxuXHRcdDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuXHRcdFx0e3Byb3BzLml0ZW1zLm1hcCh2YWx1ZSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PExpc3RJdGVtXG5cdFx0XHRcdFx0XHRrZXk9e2BpdGVtLSR7dmFsdWUuaWR9YH1cblx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0ZGVsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRjaGFuZ2VDb2xvckNvbXBvc2VyID17cHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0XHRcdGl0ZW1Db2xvcj17ZmFkZWRDb2xvclBhcnNlcih2YWx1ZS5jb2xvcil9XG5cdFx0XHRcdFx0XHR0ZXh0Q29sb3I9e3RleHRDb2xvclBhcnNlcih2YWx1ZS5jb2xvcil9XG5cdFx0XHRcdFx0XHR1cGRhdGVJdGVtPXtwcm9wcy51cGRhdGVJdGVtfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9KX1cblx0XHQ8L0xpc3Q+XG5cdCk7XG59O1xuXG5Db21wbGV0ZUxpc3QucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVTaGVldCkoQ29tcGxldGVMaXN0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9Db21wbGV0ZUxpc3QuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIm1hdGVyaWFsLXVpL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJtYXRlcmlhbC11aS9EaXZpZGVyXCI7XG5pbXBvcnQgQ2hldnJvblJpZ2h0IGZyb20gXCJtYXRlcmlhbC11aS1pY29ucy9DaGV2cm9uUmlnaHRcIjtcbmltcG9ydCBOZXdJdGVtRm9ybSBmcm9tIFwiLi9OZXdJdGVtRm9ybS5qc1wiO1xuaW1wb3J0IHtwcmltYXJ5Q29sb3JQYXJzZXIsIGZhZGVkQ29sb3JQYXJzZXIsIHRleHRDb2xvclBhcnNlciwgYWNjZW50Q29sb3JQYXJzZXIsIGFjY2VudFRleHRDb2xvclBhcnNlcn0gZnJvbSAnLi4vaGVscGVycy9jb2xvclBhcnNlci5qcydcblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJIZWFkZXJcIiwgdGhlbWUgPT4gKHtcblx0dGl0bGVDb250YWluZXI6IHtcblx0XHRwYWRkaW5nOiAxNlxuXHR9LFxuXHRjcnVtYjoge1xuXHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0ZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuXHRcdGN1cnNvcjogXCJwb2ludGVyXCIsXG5cdFx0XCImOmhvdmVyXCI6IHtcblx0XHRcdHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiXG5cdFx0fVxuXHR9LFxuXHRjcnVtYkNvbnRhaW5lcjoge1xuXHRcdHBhZGRpbmc6IDE2XG5cdH1cbn0pKTtcblxuY29uc3QgTGlzdEhlYWRlciA9IHByb3BzID0+IHtcblx0Y29uc3QgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXM7XG5cdGNvbnN0IGJnQ29sb3IgPSBwcmltYXJ5Q29sb3JQYXJzZXIocHJvcHMuaXRlbXNbcHJvcHMuYmFzZUl0ZW1dLmNvbG9yKVxuXHRjb25zdCB0ZXh0Q29sb3IgPSB0ZXh0Q29sb3JQYXJzZXIocHJvcHMuaXRlbXNbcHJvcHMuYmFzZUl0ZW1dLmNvbG9yKVxuXHRjb25zdCBhY2NlbnRDb2xvciA9IGFjY2VudENvbG9yUGFyc2VyKHByb3BzLml0ZW1zW3Byb3BzLmJhc2VJdGVtXS5jb2xvcilcblx0Y29uc3QgYWNjZW50VGV4dENvbG9yID0gYWNjZW50VGV4dENvbG9yUGFyc2VyKHByb3BzLml0ZW1zW3Byb3BzLmJhc2VJdGVtXS5jb2xvcilcblxuXHRjb25zdCBCcmVhZENydW1iID0gKCkgPT4ge1xuXHRcdGxldCB0cmFpbCA9IFtdO1xuXHRcdGxldCBjdXJyZW50ID0gcHJvcHMuYmFzZUl0ZW07XG5cdFx0bGV0IGNvdW50ZXIgPSAwO1xuXHRcdGlmIChjdXJyZW50ID09PSBcInJvb3RcIikge1xuXHRcdFx0dHJhaWwgPSBbXCJyb290XCJdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aGlsZSAocHJvcHMuaXRlbXNbY3VycmVudF0ucGFyZW50ICE9PSBcInJvb3RcIiAmJiBjb3VudGVyIDwgMTApIHtcblx0XHRcdFx0dHJhaWwgPSBbY3VycmVudCwgLi4udHJhaWxdO1xuXHRcdFx0XHRjdXJyZW50ID0gcHJvcHMuaXRlbXNbY3VycmVudF0ucGFyZW50O1xuXHRcdFx0XHRjb3VudGVyKys7XG5cdFx0XHR9XG5cdFx0XHR0cmFpbCA9IFtcInJvb3RcIiwgY3VycmVudCwgLi4udHJhaWxdO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFR5cG9ncmFwaHlcblx0XHRcdHR5cGU9e1wiYm9keTFcIn1cblx0XHRcdGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5jcnVtYkNvbnRhaW5lcn1cblx0XHRcdHN0eWxlPXt7Y29sb3I6dGV4dENvbG9yfX1cblx0XHRcdD5cblx0XHRcdFx0e3RyYWlsLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0a2V5PXtgYnJlYWRjcnVtYi0ke2luZGV4fWB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5jcnVtYn1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyKGl0ZW0pfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7aXRlbSA9PT0gXCJyb290XCJcblx0XHRcdFx0XHRcdFx0XHQ/IFwicm9vdFwiXG5cdFx0XHRcdFx0XHRcdFx0OiBwcm9wcy5pdGVtc1tpdGVtXS5jb250ZW50fVxuXHRcdFx0XHRcdFx0XHR7aW5kZXggPCB0cmFpbC5sZW5ndGggLSAxXG5cdFx0XHRcdFx0XHRcdFx0PyA8Q2hldnJvblJpZ2h0IC8+XG5cdFx0XHRcdFx0XHRcdFx0OiBcIlwifXtcIiBcIn1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHQpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdHN0eWxlPXt7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6YmdDb2xvcixcblx0XHRcdGNvbG9yOnRleHRDb2xvcixcblx0XHRcdHRyYW5zaXRpb246Jy41cydcblxuXHRcdH19XG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVDb250YWluZXJ9PlxuXHRcdFx0XHQ8VHlwb2dyYXBoeVxuXHRcdFx0XHR0eXBlPXtcImhlYWRsaW5lXCJ9XG5cdFx0XHRcdGFsaWduPXtcImNlbnRlclwifVxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7cHJvcHMuYmFzZUl0ZW0gPT09IFwicm9vdFwiID8gXCJyb290XCIgOiBwcm9wcy5iYXNlSXRlbVRleHR9XG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0PFR5cG9ncmFwaHlcblx0XHRcdFx0dHlwZT17XCJzdWJoZWFkaW5nXCJ9XG5cdFx0XHRcdGFsaWduPXtcImNlbnRlclwifVxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7cHJvcHMuY291bnRlclRleHR9XG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PERpdmlkZXIgLz5cblx0XHRcdDxCcmVhZENydW1iIC8+XG5cdFx0XHQ8RGl2aWRlciAvPlxuXHRcdFx0PE5ld0l0ZW1Gb3JtXG5cdFx0XHRuZXdJdGVtQWN0aW9uPXtwcm9wcy5uZXdJdGVtQWN0aW9ufVxuXHRcdFx0dGV4dENvbG9yPXt0ZXh0Q29sb3J9XG5cdFx0XHRhY2NlbnRDb2xvcj17YWNjZW50Q29sb3J9XG5cdFx0XHRhY2NlbnRUZXh0Q29sb3I9e2FjY2VudFRleHRDb2xvcn1cblx0XHRcdC8+XG5cdFx0XHQ8RGl2aWRlciAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuTGlzdEhlYWRlci5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShMaXN0SGVhZGVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIm1hdGVyaWFsLXVpL1RleHRGaWVsZFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvQnV0dG9uXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwibWF0ZXJpYWwtdWkvR3JpZFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJOZXdJdGVtRm9ybVwiLCB0aGVtZSA9PiAoe1xuXHRjb250YWluZXI6IHtcblx0XHR3aWR0aDogXCI4NXZ3XCIsXG5cdFx0bWFyZ2luOiBcImF1dG9cIixcblx0XHRwYWRkaW5nQm90dG9tOiBcIjE2cHhcIixcblx0XHRwYWRkaW5nVG9wOiBcIjE2cHhcIixcblx0XHRwYWRkaW5nOiAxNixcblx0XHRib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiXG5cdH0sXG5cdHR5cGVJdGVtOiB7XG5cdFx0ZmxleEdyb3c6IDFcblx0fSxcblx0d2hpdGU6e1xuXHRcdGNvbG9yOicjZmZmZmZmJ1xuXHR9LFxuXHRibGFjazp7XG5cdFx0Y29sb3I6JyMwMDAwMDAnXG5cdH1cbn0pKTtcblxuY2xhc3MgTmV3SXRlbUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuZXdJdGVtOiBcIlwiXG5cdFx0fTtcblx0XHR0aGlzLmlucHV0VXBkYXRlID0gdGhpcy5pbnB1dFVwZGF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc3VibWl0SGFuZGxlciA9IHRoaXMuc3VibWl0SGFuZGxlci5iaW5kKHRoaXMpO1xuXHR9XG5cblx0c3VibWl0SGFuZGxlcihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5wcm9wcy5uZXdJdGVtQWN0aW9uKHRoaXMuc3RhdGUubmV3SXRlbSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG5ld0l0ZW06IFwiXCIgfSk7XG5cdH1cblxuXHRpbnB1dFVwZGF0ZShldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBuZXdJdGVtOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgY2xhc3NlcyA9IHRoaXMucHJvcHMuY2xhc3Nlcztcblx0XHRjb25zdCB0ZXh0Q29sb3JDbGFzcyA9IHRoaXMucHJvcHMudGV4dENvbG9yID09PSAnI2ZmZmZmZicgPyBjbGFzc2VzLndoaXRlIDogY2xhc3Nlcy5ibGFja1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9XG5cdFx0XHQ+XG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEhhbmRsZXJ9PlxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBndXR0ZXI9ezI0fSBhbGlnbj17XCJjZW50ZXJcIn0+XG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBlSXRlbX0+XG5cdFx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0XHRpZD1cIm5ld0l0ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiTmV3IEl0ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRmdWxsV2lkdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubmV3SXRlbX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5pbnB1dFVwZGF0ZX1cblx0XHRcdFx0XHRcdFx0XHRJbnB1dFByb3BzPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZTp7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOnRoaXMucHJvcHMudGV4dENvbG9yXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOntcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6dGhpcy5wcm9wcy50ZXh0Q29sb3Jcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0cmFpc2VkXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7Y29sb3I6dGhpcy5wcm9wcy5hY2NlbnRUZXh0Q29sb3IsIGJhY2tncm91bmRDb2xvcjp0aGlzLnByb3BzLmFjY2VudENvbG9yfX0+XG5cdFx0XHRcdFx0XHRcdFx0TWFrZSBhIE5ldyBJdGVtXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5OZXdJdGVtRm9ybS5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShOZXdJdGVtRm9ybSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTmV3SXRlbUZvcm0uanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGlzdEl0ZW0sIExpc3RJdGVtVGV4dCB9IGZyb20gXCJtYXRlcmlhbC11aS9MaXN0XCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJtYXRlcmlhbC11aS9UZXh0RmllbGRcIjtcblxuXG5jbGFzcyBMaXN0SXRlbVRleHRBcmVhIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5zdGF0ZT17XG5cdFx0XHRlZGl0TW9kZTpmYWxzZSxcblx0XHRcdGVkaXRUZXh0OnByb3BzLnJhd1RleHRcblx0XHR9XG5cblx0XHR0aGlzLlRleHRDb250YWluZXIgPSB0aGlzLlRleHRDb250YWluZXIuYmluZCh0aGlzKVxuXHRcdHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVyID0gdGhpcy5kb3VibGVDbGlja0hhbmRsZXIuYmluZCh0aGlzKVxuXHRcdHRoaXMuRWRpdEl0ZW0gPSB0aGlzLkVkaXRJdGVtLmJpbmQodGhpcylcblx0XHR0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcblx0XHR0aGlzLmhhbmRsZUJsdXIgPSB0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKVxuXHR9XG5cblx0bm9uRWRpdEl0ZW0ocHJvcHMpe1xuXHRcdFx0XHRyZXR1cm4oXG5cdFx0XHQ8TGlzdEl0ZW1UZXh0XG5cdFx0XHRwcmltYXJ5PXtwcm9wcy5wcmltYXJ5fVxuXHRcdFx0c2Vjb25kYXJ5PXtwcm9wcy5zZWNvbmRhcnl9XG5cdFx0XHRzdHlsZT17e2NvbG9yOnByb3BzLnRleHRDb2xvcixwYWRkaW5nOicwcHgnLCB3b3JkV3JhcCA6ICdicmVhay13b3JkJ319XG5cdFx0XHRvbkRvdWJsZUNsaWNrPXtwcm9wcy5kb3VibGVDbGlja0hhbmRsZXJ9XG5cdFx0XHQvPlxuXHRcdFx0KVxuXHR9XG5cblx0RWRpdEl0ZW0ocHJvcHMpe1xuXHRcdHJldHVybihcblx0XHRcdDxmb3JtXG5cdFx0XHRvblN1Ym1pdD17dGhpcy5oYW5kbGVCbHVyfVxuXHRcdFx0c3R5bGU9e3t3aWR0aDonMTAwJSd9fVxuXHRcdFx0PlxuXHRcdFx0PFRleHRGaWVsZFxuXHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZWRpdFRleHR9XG5cdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG5cdFx0XHRvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cblx0XHRcdGZ1bGxXaWR0aD17dHJ1ZX1cblx0XHRcdGF1dG9Gb2N1cz17dHJ1ZX1cblx0XHRcdC8+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0XHQpXG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe2VkaXRUZXh0OmV2ZW50LnRhcmdldC52YWx1ZX0pXG5cdH1cblxuXHRoYW5kbGVCbHVyKGV2ZW50KXtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmVkaXRUZXh0KVxuXHRcdHRoaXMucHJvcHMudXBkYXRlSXRlbSh0aGlzLnByb3BzLmlkLCB0aGlzLnN0YXRlLmVkaXRUZXh0KVxuXHRcdGNvbnNvbGUubG9nKCdibHVycmVkJylcblx0XHR0aGlzLnNldFN0YXRlKHtlZGl0TW9kZTpmYWxzZX0pXG5cdH1cblxuXHRUZXh0Q29udGFpbmVyKHByb3BzKXtcblx0XHR2YXIgTm9uRWRpdEl0ZW0gPSB0aGlzLm5vbkVkaXRJdGVtXG5cdFx0dmFyIEVkaXRJdGVtID0gdGhpcy5FZGl0SXRlbVxuXHRcdGlmKHByb3BzLmVkaXRNb2RlKXtcblx0XHRcdHJldHVybihcblx0XHRcdDxFZGl0SXRlbVxuXG5cdFx0XHQvPlxuXHRcdFx0KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxOb25FZGl0SXRlbVxuXHRcdFx0XHRkb3VibGVDbGlja0hhbmRsZXI9e3Byb3BzLmRvdWJsZUNsaWNrSGFuZGxlcn1cblx0XHRcdFx0cHJpbWFyeT17cHJvcHMucHJpbWFyeX1cblx0XHRcdFx0c2Vjb25kYXJ5PXtwcm9wcy5zZWNvbmRhcnl9XG5cdFx0XHRcdHN0eWxlPXt7Y29sb3I6cHJvcHMudGV4dENvbG9yLHBhZGRpbmc6JzBweCcsIHdvcmRXcmFwIDogJ2JyZWFrLXdvcmQnfX1cblx0XHRcdFx0Lz5cblx0XHRcdClcblx0XHR9XG5cdH1cblxuXHRkb3VibGVDbGlja0hhbmRsZXIoKXtcblx0XHRjb25zb2xlLmxvZyhcImRvdWJsZSBjbGljayEhIVwiKVxuXHRcdHZhciB0ZXh0ID0gdGhpcy5wcm9wcy5yYXdUZXh0XG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZWRpdE1vZGU6dHJ1ZX0pXG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHR2YXIgVGV4dENvbnRhaW5lciA9IHRoaXMuVGV4dENvbnRhaW5lclxuXHRcdHJldHVybihcblx0XHRcdDxUZXh0Q29udGFpbmVyXG5cdFx0XHRkb3VibGVDbGlja0hhbmRsZXI9e3RoaXMuZG91YmxlQ2xpY2tIYW5kbGVyfVxuXHRcdFx0ZWRpdE1vZGU9e3RoaXMuc3RhdGUuZWRpdE1vZGV9XG5cdFx0XHRwcmltYXJ5PXt0aGlzLnN0YXRlLmVkaXRUZXh0fVxuXHRcdFx0c2Vjb25kYXJ5PXt0aGlzLnByb3BzLnNlY29uZGFyeX1cblx0XHRcdHRleHRDb2xvcj17dGhpcy5wcm9wcy50ZXh0Q29sb3J9XG5cdFx0XHQvPlxuXHRcdFx0KX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW1UZXh0QXJlYVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SXRlbVRleHRBcmVhLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7O0FBaUJBO0FBSUE7QUFDQTtBQXRCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBREE7QUFEQTtBQUZBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQWtCQTtBQUNBO0FBM0NBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQU5BO0FBT0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBVUE7QUFPQTtBQU9BO0FBT0E7QUFXQTtBQVVBO0FBckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTs7QUFFQTtBQUdBO0FBSkE7QUFGQTtBQVFBO0FBQ0E7QUFEQTs7QUFHQTtBQUVBO0FBSEE7QUFLQTtBQUNBO0FBREE7O0FBR0E7QUFFQTtBQUhBO0FBS0E7QUFDQTtBQURBOztBQUdBO0FBRUE7QUFIQTtBQUtBO0FBQ0E7QUFEQTs7QUFHQTs7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQUZBO0FBU0E7QUFDQTtBQURBOztBQUdBOztBQUVBO0FBR0E7QUFKQTtBQUZBO0FBUUE7QUFDQTtBQURBOztBQUdBOztBQUVBO0FBR0E7QUFKQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBUUE7QUFGQTs7QUFHQTtBQUFBO0FBVkE7QUFEQTtBQURBO0FBQ0E7QUFnQkE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7Ozs7O0FBYkE7QUFDQTtBQW9CQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFFQTtBQUZBO0FBQUE7QUFQQTtBQUNBO0FBV0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFGQTtBQUFBO0FBR0E7O0FBREE7QUFHQTtBQUhBO0FBQ0E7O0FBRUE7QUFFQTtBQUZBO0FBQUE7QUFRQTtBQXRCQTtBQUNBO0FBd0JBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFZQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQXpCQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQVdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRkE7QUFJQTtBQUNBOztBQURBO0FBQUE7QUFBQTtBQUNBO0FBSUE7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBTUE7QUFDQTs7OztBQUlBO0FBQUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUhBO0FBTUE7QUFOQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBOztBQU5BO0FBU0E7QUFUQTtBQUNBO0FBU0E7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7O0FBR0E7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQU9BO0FBQ0E7QUFBQTs7QUFIQTtBQUFBO0FBQUE7QUFDQTs7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQURBO0FBR0E7QUFIQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBREE7QUFHQTtBQUhBO0FBQ0E7QUFHQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBQUE7QUFBQTtBQUFBOzs7OztBQTFJQTtBQUNBO0FBZ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hOQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFJQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOztBQUdBO0FBQUE7QUFEQTtBQURBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUdBO0FBRkE7QUFJQTtBQUNBO0FBR0E7QUFGQTs7Ozs7O0FBS0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTs7Ozs7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFHQTtBQUpBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBVEE7QUFTQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFSQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVJBOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUkE7O0FBVUE7QUFBQTtBQUNBO0FBRkE7QUE5Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcklBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUhBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFFQTtBQUdBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVJBO0FBWUE7QUFaQTtBQUNBOzs7OztBQXpGQTtBQUNBO0FBc0dBO0FBQUE7QUFBQTtBQUNBO0FBQUE7OztBQUdBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcElBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFUQTtBQVdBO0FBWEE7QUFDQTtBQVlBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFUQTtBQWFBO0FBYkE7QUFDQTtBQTdCQTtBQUNBO0FBMENBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFDQTs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBOzs7QUFHQTtBQUNBO0FBRUE7QUFKQTs7QUFLQTtBQUFBO0FBTkE7QUFEQTtBQUNBO0FBV0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFWQTtBQWFBO0FBYkE7QUFDQTtBQWVBO0FBckJBO0FBQ0E7QUFzQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUkE7QUFXQTtBQVhBO0FBQ0E7QUFIQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7O0FBWEE7QUFlQTtBQWZBO0FBQ0E7QUFYQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5RkE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7OztBQUdBO0FBQUE7QUFEQTtBQURBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFUQTtBQVlBO0FBWkE7QUFDQTtBQWNBO0FBdEJBO0FBQ0E7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7OztBQUlBO0FBRkE7O0FBSUE7QUFDQTtBQUNBOztBQUlBO0FBSEE7QUFKQTs7QUFRQTtBQUFBO0FBWkE7QUFEQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBOztBQUhBO0FBS0E7QUFMQTtBQUNBO0FBTUE7QUFFQTtBQUFBO0FBQ0E7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBQ0E7QUFBQTs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUhBOztBQUZBO0FBUUE7QUFSQTtBQUNBO0FBT0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFRQTtBQUNBO0FBQUE7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7O0FBT0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTs7QUFLQTtBQUdBO0FBSEE7QUFBQTtBQWpGQTtBQUNBO0FBcUZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7O0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFQQTs7QUFVQTtBQUZBOztBQUtBO0FBRkE7O0FBR0E7QUFBQTtBQWZBO0FBREE7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUZBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBRUE7QUFBQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFEQTtBQUdBO0FBSEE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBR0E7QUFBQTtBQURBOzs7QUFNQTtBQUFBO0FBREE7O0FBYkE7QUFtQkE7QUFuQkE7QUFDQTtBQWtCQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUNBOzs7OztBQXJEQTtBQUNBO0FBaUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFPQTtBQVBBO0FBQ0E7Ozs7QUFRQTtBQUVBO0FBQ0E7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBTEE7QUFTQTtBQVRBO0FBQ0E7Ozs7QUFVQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFJQTtBQUpBO0FBQUE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFPQTtBQVBBO0FBQ0E7QUFPQTs7OztBQUdBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFMQTtBQU9BO0FBUEE7QUFDQTs7Ozs7QUFTQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        