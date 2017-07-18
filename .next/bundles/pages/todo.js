
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

		return _react2.default.createElement("span", { key: color + "-" + index,
			onClick: props.clickHandler(color), __source: {
				fileName: _jsxFileName,
				lineNumber: 36
			}
		}, _react2.default.createElement(_IconButton2.default, {
			style: { color: (0, _colorParser.primaryColorParser)(color) },
			__source: {
				fileName: _jsxFileName,
				lineNumber: 38
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
						lineNumber: 95
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
					lineNumber: 108
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
					lineNumber: 135
				}
			}, _react2.default.createElement(DragHandle, {
				completeStyle: { color: textColor },
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
					lineNumber: 139
				}
			}), _react2.default.createElement(_List.ListItemText, { primary: this.content(),
				secondary: this.completeDisplay(),
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 145
				}
			}), _react2.default.createElement(_IconButton2.default, {
				onClick: this.props.changeBaseComposer(this.item.id),
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 150
				}
			}, _react2.default.createElement(_FormatListBulleted2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 154
				}
			})), _react2.default.createElement(_IconButton2.default, {
				onClick: this.openMenu,
				style: { color: textColor },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 156
				}
			}, _react2.default.createElement(_Settings2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 160
				}
			})), _react2.default.createElement(_Menu2.default, {
				id: this.item.id + "-menu",
				open: this.state.open,
				onRequestClose: this.closeMenu,
				anchorEl: this.state.anchorEl,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 162
				}
			}, _react2.default.createElement(_Typography2.default, {
				type: "subheading",
				align: 'center',
				style: { outline: 'none', paddingLeft: 16 },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 168
				}
			}, "Change Color"), _react2.default.createElement(_Divider2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 173
				}
			}), _react2.default.createElement(ColorMenu, {
				clickHandler: this.colorItemClickHandler,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 174
				}
			})));
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
			return _react2.default.createElement(_Card2.default, { style: { width: "85vw", margin: "auto", marginTop: "16px" }, __source: {
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

function mapStateToProps(_ref) {
	var items = _ref.items,
	    baseItem = _ref.baseItem;

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
		container: {
			width: "85vw",
			margin: "auto"
		}
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
			lineNumber: 33
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
			lineNumber: 34
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
			lineNumber: 44
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
			color: textColor

		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 77
		}
	}, _react2.default.createElement("div", { className: classes.titleContainer, __source: {
			fileName: _jsxFileName,
			lineNumber: 84
		}
	}, _react2.default.createElement(_Typography2.default, {
		type: "headline",
		align: "center",
		style: { color: textColor },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 85
		}
	}, props.baseItem === "root" ? "root" : props.baseItemText), _react2.default.createElement(_Typography2.default, {
		type: "subheading",
		align: "center",
		style: { color: textColor },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 92
		}
	}, props.counterText)), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 100
		}
	}), _react2.default.createElement(BreadCrumb, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 101
		}
	}), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 102
		}
	}), _react2.default.createElement(_NewItemForm2.default, {
		newItemAction: props.newItemAction,
		textColor: textColor,
		accentColor: accentColor,
		accentTextColor: accentTextColor,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 103
		}
	}), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 109
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

/***/ })

},[691]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy90b2RvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9zdHlsZS9jcmVhdGVEZWZhdWx0Q29udGV4dC5qcz8xOWY3YWJkIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvaGVscGVycy9jb2xvclBhcnNlci5qcz8xOWY3YWJkIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvYWN0aW9ucy9pbmRleC5qcz8xOWY3YWJkIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvQXBwLmpzPzE5ZjdhYmQiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RJdGVtLmpzPzE5ZjdhYmQiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdG9kby5qcz8xOWY3YWJkIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvaW5kZXguanM/MTlmN2FiZCIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL2luZGV4LmpzPzE5ZjdhYmQiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9pdGVtc19yZWR1Y2VyLmpzPzE5ZjdhYmQiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9iYXNlSXRlbV9yZWR1Y2VyLmpzPzE5ZjdhYmQiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIuanM/NGIzODkyMiIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdC5qcz80YjM4OTIyIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9JbmNvbXBsZXRlTGlzdC5qcz80YjM4OTIyIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9Db21wbGV0ZUxpc3QuanM/NGIzODkyMiIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdEhlYWRlci5qcz80YjM4OTIyIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9OZXdJdGVtRm9ybS5qcz80YjM4OTIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJ1xuaW1wb3J0IGNyZWF0ZVBhbGV0dGUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgY3JlYXRlTXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IHsgcHVycGxlLCBncmVlbiwgZ3JleSB9IGZyb20gJ21hdGVyaWFsLXVpL2NvbG9ycydcblxuY29uc3QgY3JlYXRlRGVmYXVsdENvbnRleHQgPSAoKSA9PlxuICBNdWlUaGVtZVByb3ZpZGVyLmNyZWF0ZURlZmF1bHRDb250ZXh0KHtcbiAgICB0aGVtZTogY3JlYXRlTXVpVGhlbWUoe1xuICAgICAgcGFsZXR0ZTogY3JlYXRlUGFsZXR0ZSh7XG4gICAgICAgIHByaW1hcnk6IGdyZXlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcblxuLy8gU2luZ2xldG9uIGhhY2sgYXMgdGhlcmUgaXMgbm8gd2F5IHRvIHBhc3MgdmFyaWFibGVzIGZyb20gX2RvY3VtZW50LmpzIHRvIHBhZ2VzIHlldC5cbmxldCBjb250ZXh0ID0gbnVsbFxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdENvbnRleHQgKCkge1xuICBjb250ZXh0ID0gY3JlYXRlRGVmYXVsdENvbnRleHQoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdENvbnRleHQgKCkge1xuICAvLyBNYWtlIHN1cmUgdG8gY3JlYXRlIGEgbmV3IHN0b3JlIGZvciBldmVyeSBzZXJ2ZXItc2lkZSByZXF1ZXN0IHNvIHRoYXQgZGF0YVxuICAvLyBpc24ndCBzaGFyZWQgYmV0d2VlbiBjb25uZWN0aW9ucyAod2hpY2ggd291bGQgYmUgYmFkKVxuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVybiBjb250ZXh0XG4gIH1cblxuICAvLyBSZXVzZSBzdG9yZSBvbiB0aGUgY2xpZW50LXNpZGVcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgY29udGV4dCA9IGNyZWF0ZURlZmF1bHRDb250ZXh0KClcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURlZmF1bHRDb250ZXh0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL3N0eWxlL2NyZWF0ZURlZmF1bHRDb250ZXh0LmpzIiwiaW1wb3J0IHsgcmVkLHBpbmsscHVycGxlLGRlZXBQdXJwbGUsaW5kaWdvLGJsdWUsIGxpZ2h0Qmx1ZSwgY3lhbiwgdGVhbCwgZ3JlZW4sIGxpZ2h0R3JlZW4sIGxpbWUsIHllbGxvdywgYW1iZXIsIG9yYW5nZSwgZGVlcE9yYW5nZSx3aGl0ZSxibGFjayxncmV5IH0gZnJvbSBcIm1hdGVyaWFsLXVpL2NvbG9yc1wiXG5cbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cblxuLy8gZnVuY3Rpb24gY29sb3JQYXJzZXJDb21wb3Nlcihtb2RpZmllclxuLy8gfVxuXG5cbmZ1bmN0aW9uIGNvbG9yUGFyc2VyQ29tcG9zZXIobW9kaWZpZXIpe1xuXG5cdFx0dmFyIGNvbG9ycyA9IHsgcmVkLHBpbmsscHVycGxlLGRlZXBQdXJwbGUsaW5kaWdvLGJsdWUsIGxpZ2h0Qmx1ZSwgY3lhbiwgdGVhbCwgZ3JlZW4sIGxpZ2h0R3JlZW4sIGxpbWUsIHllbGxvdywgYW1iZXIsIG9yYW5nZSwgZGVlcE9yYW5nZSB9O1xuXG5cdHJldHVybiBmdW5jdGlvbihjb2xvclRleHQpe1xuXG5cblx0XHRpZiggY29sb3JzLmhhc093blByb3BlcnR5KGNvbG9yVGV4dCkpe1xuXHRcdFx0cmV0dXJuIGNvbG9yc1tjb2xvclRleHRdW21vZGlmaWVyXVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJ25vIG1hdGNoJ1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGV4dENvbG9yUGFyc2VyKGNvbG9yVGV4dCwgY29tcGxldGUpe1xuXHR2YXIgd2hpdGVMaXN0ID0gWydyZWQnLCdwaW5rJywncHVycGxlJywnZGVlcFB1cnBsZScsJ2luZGlnbycsJ2JsdWUnLCd0ZWFsJywnZGVlcE9yYW5nZScsJ2Jyb3duJywnYmx1ZUdyZXknXTtcblx0dmFyIGJsYWNrTGlzdCA9IFsnbGlnaHRCbHVlJywnY3lhbicsJ2dyZWVuJywnbGlnaHRHcmVlbicsJ2xpbWUnLCd5ZWxsb3cnLCdhbWJlcicsJ29yYW5nZScsJ2dyZXknXTtcblx0aWYoY29tcGxldGUpe1xuXHRcdGlmKF8uaW5jbHVkZXMod2hpdGVMaXN0LCBjb2xvclRleHQpKXtcblx0XHRcdHJldHVybiAnIzAwMDAwMCdcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuICcjZmZmZmZmJ1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRcdGlmKF8uaW5jbHVkZXMod2hpdGVMaXN0LCBjb2xvclRleHQpKXtcblx0XHRcdFx0cmV0dXJuICcjZmZmZmZmJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJyMwMDAwMDAnXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY2NlbnRUZXh0Q29sb3JQYXJzZXIoY29sb3JUZXh0KXtcblx0dmFyIHdoaXRlTGlzdCA9IFsncmVkJywncGluaycsJ3B1cnBsZScsJ2RlZXBQdXJwbGUnLCAnaW5kaWdvJywnYmx1ZSddXG5cdHZhciBibGFja0xpc3QgPSBbJ2xpZ2h0Qmx1ZScsICdjeWFuJywndGVhbCcsJ2dyZW4nLCdsaWdodEdyZWVuJywnbGltZScsJ3llbGxvdycsJ2FtYmVyJywnb3JhbmdlJywnZGVlcE9yYW5nZSddXG5cblx0aWYoXy5pbmNsdWRlcyh3aGl0ZUxpc3QsIGNvbG9yVGV4dCkpe1xuXHRcdHJldHVybiAnI2ZmZmZmZidcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gJyMwMDAwMDAnXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IHByaW1hcnlDb2xvclBhcnNlciA9IGNvbG9yUGFyc2VyQ29tcG9zZXIoNTAwKTtcblxuZXhwb3J0IGNvbnN0IGFjY2VudENvbG9yUGFyc2VyID0gY29sb3JQYXJzZXJDb21wb3NlcignQTQwMCcpXG5cbmV4cG9ydCBjb25zdCBmYWRlZENvbG9yUGFyc2VyID0gY29sb3JQYXJzZXJDb21wb3NlcigxMDApXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9oZWxwZXJzL2NvbG9yUGFyc2VyLmpzIiwiZXhwb3J0IGNvbnN0IE5FV19JVEVNID0gXCJORVdfSVRFTVwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9CQVNFID0gXCJDSEFOR0VfQkFTRVwiO1xuZXhwb3J0IGNvbnN0IENPTVBMRVRFX0lURU0gPSBcIkNPTVBMRVRFX0lURU1cIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfSVRFTSA9IFwiREVMRVRFX0lURU1cIjtcbmV4cG9ydCBjb25zdCBSRU9SREVSX0lURU0gPSBcIlJFT1JERVJfSVRFTVwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9DT0xPUiA9IFwiQ0hBTkdFX0NPTE9SXCJcblxuLy8gPT09PT09PT09PT09XG4vLyBUbyBJbXBsZW1lbnRcbi8vID09PT09PT09PT09PVxuXG5leHBvcnQgY29uc3QgVVBEQVRFX0lURU0gPSBcIlVQREFURV9JVEVNXCI7XG5cbi8vID09PT09PT09PT09PT09PVxuLy8gQWN0aW9uIENyZWF0b3JzXG4vLyA9PT09PT09PT09PT09PT1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0l0ZW0oY29udGVudCA9IFwiXCIsIHBhcmVudCA9IFwicm9vdFwiKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTkVXX0lURU0sXG5cdFx0cGF5bG9hZDoge1xuXHRcdFx0Y29udGVudCxcblx0XHRcdHBhcmVudFxuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUJhc2VJdGVtKGlkKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQ0hBTkdFX0JBU0UsXG5cdFx0cGF5bG9hZDogaWRcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXRlSXRlbShpZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENPTVBMRVRFX0lURU0sXG5cdFx0cGF5bG9hZDogaWRcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oaWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBERUxFVEVfSVRFTSxcblx0XHRwYXlsb2FkOiBpZFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVvcmRlckl0ZW0ocGFyZW50SUQsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFJFT1JERVJfSVRFTSxcblx0XHRwYXlsb2FkOiB7XG5cdFx0XHRwYXJlbnRJRCxcblx0XHRcdG9sZEluZGV4LFxuXHRcdFx0bmV3SW5kZXhcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDb2xvcihpZCxjb2xvcil7XG5cdHJldHVybntcblx0XHR0eXBlOiBDSEFOR0VfQ09MT1IsXG5cdFx0cGF5bG9hZDoge1xuXHRcdFx0aWQsXG5cdFx0XHRjb2xvclxuXHRcdH1cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCwgTXVpVGhlbWVQcm92aWRlciB9IGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcydcbmltcG9ydCB7IGdldERlZmF1bHRDb250ZXh0IH0gZnJvbSAnLi9zdHlsZS9jcmVhdGVEZWZhdWx0Q29udGV4dCdcblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoJ0FwcCcsIHRoZW1lID0+ICh7XG4gICdAZ2xvYmFsJzoge1xuICAgIGh0bWw6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxuICAgICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgICAgV2Via2l0Rm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJywgLy8gQW50aWFsaWFzaW5nLlxuICAgICAgTW96T3N4Rm9udFNtb290aGluZzogJ2dyYXlzY2FsZScgLy8gQW50aWFsaWFzaW5nLlxuICAgIH0sXG4gICAgYm9keToge1xuICAgICAgbWFyZ2luOiAwXG4gICAgfSxcbiAgICBhOiB7XG4gICAgICBjb2xvcjogJ2luaGVyaXQnXG4gICAgfVxuICB9XG59KSlcblxubGV0IEFwcFdyYXBwZXIgPSBwcm9wcyA9PiA8ZGl2Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cblxuQXBwV3JhcHBlciA9IHdpdGhTdHlsZXMoc3R5bGVTaGVldCkoQXBwV3JhcHBlcilcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTLlxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKVxuICAgIGlmIChqc3NTdHlsZXMgJiYganNzU3R5bGVzLnBhcmVudE5vZGUpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGpzc1N0eWxlcylcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgc3R5bGVNYW5hZ2VyLCB0aGVtZSB9ID0gZ2V0RGVmYXVsdENvbnRleHQoKVxuICAgIHJldHVybiAoXG4gICAgICA8TXVpVGhlbWVQcm92aWRlciBzdHlsZU1hbmFnZXI9e3N0eWxlTWFuYWdlcn0gdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPEFwcFdyYXBwZXI+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQXBwV3JhcHBlcj5cbiAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApXG4gIH1cbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL0FwcC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG4vLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgU29ydGFibGVIYW5kbGUgfSBmcm9tIFwicmVhY3Qtc29ydGFibGUtaG9jXCI7XG5pbXBvcnQgeyBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL0xpc3RcIjtcbmltcG9ydCBDaGVja2JveCBmcm9tIFwibWF0ZXJpYWwtdWkvQ2hlY2tib3hcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgUmVvcmRlciBmcm9tIFwibWF0ZXJpYWwtdWktaWNvbnMvUmVvcmRlclwiO1xuaW1wb3J0IERvdCBmcm9tICdtYXRlcmlhbC11aS1pY29ucy9CcmlnaHRuZXNzMSdcbmltcG9ydCBEZWxldGVGb3JldmVyIGZyb20gXCJtYXRlcmlhbC11aS1pY29ucy9EZWxldGVGb3JldmVyXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnbWF0ZXJpYWwtdWktaWNvbnMvU2V0dGluZ3MnXG5pbXBvcnQgRm9ybWF0TGlzdEJ1bGxldGVkICBmcm9tIFwibWF0ZXJpYWwtdWktaWNvbnMvRm9ybWF0TGlzdEJ1bGxldGVkXCI7XG5pbXBvcnQgeyByZWQscGluayxwdXJwbGUsZGVlcFB1cnBsZSxpbmRpZ28sYmx1ZSwgbGlnaHRCbHVlLCBjeWFuLCB0ZWFsLCBncmVlbiwgbGlnaHRHcmVlbiwgbGltZSwgeWVsbG93LCBhbWJlciwgb3JhbmdlLCBkZWVwT3JhbmdlLCBncmV5IH0gZnJvbSBcIm1hdGVyaWFsLXVpL2NvbG9yc1wiXG5pbXBvcnQgQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0J1dHRvbic7XG5pbXBvcnQgTWVudSwgeyBNZW51SXRlbSB9IGZyb20gJ21hdGVyaWFsLXVpL01lbnUnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnbWF0ZXJpYWwtdWkvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdtYXRlcmlhbC11aS9EaXZpZGVyJztcbmltcG9ydCB7cHJpbWFyeUNvbG9yUGFyc2VyLCBmYWRlZENvbG9yUGFyc2VyfSBmcm9tICcuLi9oZWxwZXJzL2NvbG9yUGFyc2VyLmpzJ1xuXG5jb25zdCBEcmFnSGFuZGxlID0gU29ydGFibGVIYW5kbGUoKHByb3BzKSA9PlxuXHRcdDxzcGFuIHN0eWxlPXtwcm9wcy5jb21wbGV0ZVN0eWxlfT5cblx0XHQ8UmVvcmRlciAvPlxuXHRcdDwvc3Bhbj5cbik7XG5cbmNvbnN0IENvbG9yTWVudSA9IChwcm9wcykgID0+IHtcblx0dmFyIGNvbG9ycyA9IFsncmVkJywgJ3B1cnBsZScsICdsaWdodEJsdWUnLCAndGVhbCcsICdsaWdodEdyZWVuJywgJ3llbGxvdycsICdvcmFuZ2UnLCAncGluayddXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdHtjb2xvcnMubWFwKChjb2xvciwgaW5kZXgpPT57XG5cblx0XHRcdFx0dmFyIGJyZWFrTGluZSA9IGluZGV4ICUgNCA9PT0gMyA/IDxiciAvPiA6IFwiXCJcblxuXHRcdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxzcGFuIGtleT17YCR7Y29sb3J9LSR7aW5kZXh9YH1cblx0XHRcdFx0b25DbGljaz17cHJvcHMuY2xpY2tIYW5kbGVyKGNvbG9yKX0+XG5cdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdHN0eWxlPXt7Y29sb3I6cHJpbWFyeUNvbG9yUGFyc2VyKGNvbG9yKX19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8RG90IC8+XG5cdFx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdFx0e2JyZWFrTGluZX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQpXG5cdFx0XHR9KX1cblx0XHQ8L2Rpdj5cblx0XHQpXG59XG5cblxuY2xhc3MgQmFzZUxpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0b3BlbjpmYWxzZSxcblx0XHRcdGFuY2hvckVsOiB1bmRlZmluZWRcblx0XHR9XG5cblx0XHR0aGlzLmNvbXBsZXRlRGlzcGxheSA9IHRoaXMuY29tcGxldGVEaXNwbGF5LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vcGVuTWVudSA9IHRoaXMub3Blbk1lbnUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNsb3NlTWVudSA9IHRoaXMuY2xvc2VNZW51LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jb2xvckl0ZW1DbGlja0hhbmRsZXIgPSB0aGlzLmNvbG9ySXRlbUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuXHR9XG5cblx0IGl0ZW0gPSB0aGlzLnByb3BzLnZhbHVlO1xuXG5cdGluY29tcGxldGVMaXN0U3R5bGUgPSB7IGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yUGFyc2VyKHRoaXMuaXRlbS5jb2xvcikgfTtcblx0Y29tcGxldGVMaXN0U3R5bGUgPSB7IGJhY2tncm91bmRDb2xvcjogZmFkZWRDb2xvclBhcnNlcih0aGlzLml0ZW0uY29sb3IpIH07XG5cdC8vIGxpc3RJdGVtU3R5bGUgPSB0aGlzLml0ZW0uY29tcGxldGVcblx0Ly8gXHQ/IHRoaXMuY29tcGxldGVMaXN0U3R5bGVcblx0Ly8gXHQ6IHRoaXMuaW5jb21wbGV0ZUxpc3RTdHlsZTtcblx0Ly8gbGlzdEl0ZW1TdHlsZSA9IHtiYWNrZ3JvdW5kQ29sb3I6dGhpcy5zdGF0ZS5iZ0NvbG9yfVxuXHRjb21wbGV0ZUdyZXkgPSBncmV5WzUwMF07XG5cdGNvbXBsZXRlTGluZVN0eWxlID0gdGhpcy5pdGVtLmNvbXBsZXRlXG5cdFx0PyB7IGNvbG9yOiB0aGlzLmNvbXBsZXRlR3JleSwgdGV4dERlY29yYXRpb246IFwibGluZS10aHJvdWdoXCIgfVxuXHRcdDoge307XG5cdGNvbXBsZXRlU3R5bGUgPSB0aGlzLml0ZW0uY29tcGxldGVcblx0PyB7IGNvbG9yOiB0aGlzLmNvbXBsZXRlR3JleSB9XG5cdDogeyBjb2xvcjogdGhpcy50ZXh0Q29sb3J9O1xuXG5cblx0Y29tcGxldGVEaXNwbGF5KCkge1xuXHRcdHZhciBjb21wbGV0ZWQgPSB0aGlzLml0ZW0uY29tcGxldGVDaGlsZHJlbi5sZW5ndGg7XG5cdFx0dmFyIHRvdGFsID0gY29tcGxldGVkICsgdGhpcy5pdGVtLmluY29tcGxldGVDaGlsZHJlbi5sZW5ndGg7XG5cdFx0dmFyIHRleHRDb2xvciA9IHRoaXMucHJvcHMudmFsdWUuY29tcGxldGU/IHRoaXMuY29tcGxldGVHcmV5IDogdGhpcy5wcm9wcy50ZXh0Q29sb3Jcblx0XHR2YXIgZGlzcGxheVRleHRTdHlsZSA9IHRoaXMucHJvcHMudmFsdWUuY29tcGxldGVcblx0XHQ/IHsgY29sb3I6IHRoaXMuY29tcGxldGVHcmV5fVxuXHRcdDogeyBjb2xvcjogdGhpcy5wcm9wcy50ZXh0Q29sb3J9O1xuXHRcdGlmICh0b3RhbCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0c3R5bGU9e2Rpc3BsYXlUZXh0U3R5bGV9XG5cdFx0XHRcdD57YCggJHtjb21wbGV0ZWR9IC8gJHt0b3RhbH0gY29tcGxldGUpYH08L3NwYW4+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnRlbnQoKSB7XG5cdFx0dmFyIHRleHRDb2xvciA9IHRoaXMucHJvcHMudmFsdWUuY29tcGxldGU/IHRoaXMuY29tcGxldGVHcmV5IDogdGhpcy5wcm9wcy50ZXh0Q29sb3Jcblx0XHR2YXIgY29udGVudFRleHRTdHlsZSA9IHRoaXMucHJvcHMudmFsdWUuY29tcGxldGVcblx0XHQ/IHsgY29sb3I6IHRoaXMuY29tcGxldGVHcmV5LCB0ZXh0RGVjb3JhdGlvbjogXCJsaW5lLXRocm91Z2hcIiB9XG5cdFx0OiB7IGNvbG9yOiB0aGlzLnByb3BzLnRleHRDb2xvcn07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzcGFuIHN0eWxlPXtjb250ZW50VGV4dFN0eWxlfT5cblx0XHRcdFx0e3RoaXMuaXRlbS5jb250ZW50fVxuXHRcdFx0PC9zcGFuPlxuXHRcdCk7XG5cdH1cblxuXHRvcGVuTWVudShldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7b3Blbjp0cnVlLCBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldH0pXG5cdH1cblxuXHRjbG9zZU1lbnUoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtvcGVuOmZhbHNlfSlcblx0fVxuXG5cdGNvbG9ySXRlbUNsaWNrSGFuZGxlcihjb2xvck5hbWUpe1xuXHRcdHZhciBjbG9zZSA9IHRoaXMuY2xvc2VNZW51XG5cdFx0bGV0IGNoYW5nZUNvbG9yID0gdGhpcy5wcm9wcy5jaGFuZ2VDb2xvckNvbXBvc2VyKHRoaXMuaXRlbS5pZCwgY29sb3JOYW1lKVxuXHRcdGxldCBwcm9wc0NvbG9yID0gdGhpcy5wcm9wcy5iZ0NvbG9yXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCl7XG5cdFx0Y2hhbmdlQ29sb3IoKVxuXHRcdGNsb3NlKClcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHR2YXIgdGV4dENvbG9yID0gdGhpcy5wcm9wcy52YWx1ZS5jb21wbGV0ZT8gdGhpcy5jb21wbGV0ZUdyZXkgOiB0aGlzLnByb3BzLnRleHRDb2xvclxuXHRyZXR1cm4gKFxuXHRcdDxMaXN0SXRlbSBkaXZpZGVyPXt0cnVlfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy5pdGVtQ29sb3J9fT5cblx0XHRcdDxEcmFnSGFuZGxlXG5cdFx0XHRcdGNvbXBsZXRlU3R5bGU9e3tjb2xvcjp0ZXh0Q29sb3J9fVxuXHRcdFx0Lz5cblx0XHRcdDxDaGVja2JveFxuXHRcdFx0XHRjaGVja2VkPXt0aGlzLml0ZW0uY29tcGxldGV9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMucHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXIodGhpcy5pdGVtLmlkKX1cblx0XHRcdFx0c3R5bGU9e3tjb2xvcjp0ZXh0Q29sb3J9fVxuXHRcdFx0Lz5cblxuXHRcdFx0PExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0aGlzLmNvbnRlbnQoKX1cblx0XHRcdHNlY29uZGFyeT17dGhpcy5jb21wbGV0ZURpc3BsYXkoKX1cblx0XHRcdHN0eWxlPXt7Y29sb3I6dGV4dENvbG9yfX1cblx0XHRcdC8+XG5cblx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMucHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyKHRoaXMuaXRlbS5pZCl9XG5cdFx0XHRcdHN0eWxlPXt7Y29sb3I6dGV4dENvbG9yfX1cblx0XHRcdD5cblx0XHRcdFx0PEZvcm1hdExpc3RCdWxsZXRlZCAvPlxuXHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0PEljb25CdXR0b25cblx0XHRcdG9uQ2xpY2s9e3RoaXMub3Blbk1lbnV9XG5cdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHQ+XG5cdFx0XHRcdDxTZXR0aW5ncyAvPlxuXHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0PE1lbnVcblx0XHRcdGlkPXtgJHt0aGlzLml0ZW0uaWR9LW1lbnVgfVxuXHRcdFx0b3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9e3RoaXMuY2xvc2VNZW51fVxuXHRcdFx0YW5jaG9yRWw9e3RoaXMuc3RhdGUuYW5jaG9yRWx9XG5cdFx0XHQ+XG5cdFx0XHRcdDxUeXBvZ3JhcGh5XG5cdFx0XHRcdHR5cGU9e1wic3ViaGVhZGluZ1wifVxuXHRcdFx0XHRhbGlnbj17J2NlbnRlcid9XG5cdFx0XHRcdHN0eWxlPXt7b3V0bGluZTonbm9uZScsIHBhZGRpbmdMZWZ0OjE2fX1cblx0XHRcdFx0PkNoYW5nZSBDb2xvcjwvVHlwb2dyYXBoeT5cblx0XHRcdFx0PERpdmlkZXIgLz5cblx0XHRcdFx0PENvbG9yTWVudVxuXHRcdFx0XHRjbGlja0hhbmRsZXI9e3RoaXMuY29sb3JJdGVtQ2xpY2tIYW5kbGVyfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9NZW51PlxuXHRcdDwvTGlzdEl0ZW0+XG5cdCk7XG5cdH1cbn07XG5cbkJhc2VMaXN0SXRlbS5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZUxpc3RJdGVtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RJdGVtLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvQnV0dG9uJ1xuaW1wb3J0IERpYWxvZywge1xuICBEaWFsb2dUaXRsZSxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nQ29udGVudFRleHQsXG4gIERpYWxvZ0FjdGlvbnNcbn0gZnJvbSAnbWF0ZXJpYWwtdWkvRGlhbG9nJ1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnbWF0ZXJpYWwtdWkvVHlwb2dyYXBoeSdcbmltcG9ydCBBcHAgZnJvbSAnLi4vdG9kby1saXN0L3NyYy9BcHAuanMnXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi4vdG9kby1saXN0L3NyYy9pbmRleC5qcydcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHBhZGRpbmdUb3A6IDIwMFxuICB9XG59XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2VcbiAgfTtcblxuICBoYW5kbGVSZXF1ZXN0Q2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH0pXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiB0cnVlXG4gICAgfSlcbiAgfTtcblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QXBwPlxuICAgICAgICA8VG9kb0xpc3QgLz5cbiAgICAgIDwvQXBwPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdG9kby5qcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG4vLyBpbXBvcnQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIGZyb20gXCIuL3JlZ2lzdGVyU2VydmljZVdvcmtlclwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCByZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcbmltcG9ydCBSZWR1eFByb21pc2UgZnJvbSBcInJlZHV4LXByb21pc2VcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBUb2RvQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9Ub2RvQ29udGFpbmVyLmpzJ1xuXG5cbmNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlV2l0aERldlRvb2xzKFxuXHRhcHBseU1pZGRsZXdhcmUoUmVkdXhQcm9taXNlKVxuKShjcmVhdGVTdG9yZSk7XG5cbmNvbnN0IEJvaWxlciA9ICgpID0+XG5cdDxQcm92aWRlciBzdG9yZT17Y3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZShyZWR1Y2Vycyl9PlxuXHRcdDxUb2RvQ29udGFpbmVyIC8+XG5cdDwvUHJvdmlkZXI+O1xuXG4vLyBSZWFjdERPTS5yZW5kZXIoPEJvaWxlciAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcbi8vIHJlZ2lzdGVyU2VydmljZVdvcmtlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBCb2lsZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2luZGV4LmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgaXRlbXMgZnJvbSBcIi4vaXRlbXNfcmVkdWNlci5qc1wiO1xuaW1wb3J0IGJhc2VJdGVtIGZyb20gXCIuL2Jhc2VJdGVtX3JlZHVjZXIuanNcIjtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuXHRpdGVtcyxcblx0YmFzZUl0ZW1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBORVdfSVRFTSwgQ09NUExFVEVfSVRFTSwgREVMRVRFX0lURU0sIFJFT1JERVJfSVRFTSwgQ0hBTkdFX0NPTE9SIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcblxuZnVuY3Rpb24gaXRlbXMoc3RhdGUgPSBzZWVkRGF0YSwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIE5FV19JVEVNOlxuXHRcdFx0dmFyIG5ld0lEID0gcmFuZG9tSUQoKTtcblx0XHRcdHZhciBwYXJlbnRJRCA9IGFjdGlvbi5wYXlsb2FkLnBhcmVudDtcblx0XHRcdHZhciBuZXdJdGVtID0ge1xuXHRcdFx0XHRbbmV3SURdOiB7XG5cdFx0XHRcdFx0aWQ6IG5ld0lELFxuXHRcdFx0XHRcdGNvbnRlbnQ6IGFjdGlvbi5wYXlsb2FkLmNvbnRlbnQsXG5cdFx0XHRcdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdFx0XHRcdGNvbG9yOidsaWdodEJsdWUnLFxuXHRcdFx0XHRcdGNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdFx0XHRcdGluY29tcGxldGVDaGlsZHJlbjogW10sXG5cdFx0XHRcdFx0cGFyZW50OiBwYXJlbnRJRFxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0dmFyIG5ld1BhcmVudCA9IHsgW3BhcmVudElEXTogYWRkQ2hpbGQoc3RhdGVbcGFyZW50SURdLCBuZXdJRCkgfTtcblx0XHRcdHZhciBuZXdTdGF0ZSA9IF8ubWVyZ2Uoe30sIHN0YXRlLCBuZXdJdGVtLCBuZXdQYXJlbnQpO1xuXHRcdFx0cmV0dXJuIG5ld1N0YXRlO1xuXG5cdFx0Y2FzZSBDT01QTEVURV9JVEVNOlxuXHRcdFx0dmFyIGlkID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHR2YXIgbmV3U3RhdGUgPSBfLm1lcmdlKHt9LCBzdGF0ZSk7XG5cdFx0XHR2YXIgbmV3SXRlbSA9IHsgW2lkXTogbmV3U3RhdGVbaWRdIH07XG5cdFx0XHR2YXIgcGFyZW50SUQgPSBuZXdJdGVtW2lkXS5wYXJlbnQ7XG5cdFx0XHRuZXdJdGVtW2lkXS5jb21wbGV0ZSA9ICFuZXdJdGVtW2lkXS5jb21wbGV0ZTtcblx0XHRcdGlmIChuZXdJdGVtW2lkXS5jb21wbGV0ZSkge1xuXHRcdFx0XHRfLnB1bGwobmV3U3RhdGVbcGFyZW50SURdLmluY29tcGxldGVDaGlsZHJlbiwgaWQpO1xuXHRcdFx0XHRuZXdTdGF0ZVtwYXJlbnRJRF0uY29tcGxldGVDaGlsZHJlbi51bnNoaWZ0KGlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF8ucHVsbChuZXdTdGF0ZVtwYXJlbnRJRF0uY29tcGxldGVDaGlsZHJlbiwgaWQpO1xuXHRcdFx0XHRuZXdTdGF0ZVtwYXJlbnRJRF0uaW5jb21wbGV0ZUNoaWxkcmVuLnB1c2goaWQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIF8ubWVyZ2UobmV3U3RhdGUsIG5ld0l0ZW0pO1xuXG5cdFx0Y2FzZSBERUxFVEVfSVRFTTpcblx0XHRcdHZhciBpZCA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0dmFyIG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUpO1xuXHRcdFx0dmFyIHBhcmVudCA9IHN0YXRlW2lkXS5wYXJlbnQ7XG5cdFx0XHRuZXdTdGF0ZSA9IF8ub21pdChuZXdTdGF0ZSwgZ2VuZXJhdGVDaGlsZExpc3Qoc3RhdGUsIGlkKSk7XG5cdFx0XHRuZXdTdGF0ZVtwYXJlbnRdLmNvbXBsZXRlQ2hpbGRyZW4gPSBfLmZpbHRlcihcblx0XHRcdFx0bmV3U3RhdGVbcGFyZW50XS5jb21wbGV0ZUNoaWxkcmVuLFxuXHRcdFx0XHRuID0+IG4gIT09IGlkXG5cdFx0XHQpO1xuXHRcdFx0bmV3U3RhdGVbcGFyZW50XS5pbmNvbXBsZXRlQ2hpbGRyZW4gPSBfLmZpbHRlcihcblx0XHRcdFx0bmV3U3RhdGVbcGFyZW50XS5pbmNvbXBsZXRlQ2hpbGRyZW4sXG5cdFx0XHRcdG4gPT4gbiAhPT0gaWRcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gbmV3U3RhdGU7XG5cblx0XHRjYXNlIFJFT1JERVJfSVRFTTpcblx0XHRcdHZhciBuZXdTdGF0ZSA9IF8ubWVyZ2Uoe30sIHN0YXRlKTtcblx0XHRcdHZhciBwYXJlbnRJRCA9IGFjdGlvbi5wYXlsb2FkLnBhcmVudElEO1xuXHRcdFx0bmV3U3RhdGVbcGFyZW50SURdLmluY29tcGxldGVDaGlsZHJlbiA9IHJlb3JkZXIoXG5cdFx0XHRcdG5ld1N0YXRlW3BhcmVudElEXS5pbmNvbXBsZXRlQ2hpbGRyZW4sXG5cdFx0XHRcdGFjdGlvbi5wYXlsb2FkLm9sZEluZGV4LFxuXHRcdFx0XHRhY3Rpb24ucGF5bG9hZC5uZXdJbmRleFxuXHRcdFx0KTtcblx0XHRcdHJldHVybiBuZXdTdGF0ZTtcblxuXHRcdGNhc2UgQ0hBTkdFX0NPTE9SOlxuXHRcdFx0dmFyIG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUpXG5cdFx0XHRuZXdTdGF0ZVthY3Rpb24ucGF5bG9hZC5pZF0uY29sb3IgPSBhY3Rpb24ucGF5bG9hZC5jb2xvclxuXHRcdFx0cmV0dXJuIG5ld1N0YXRlO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBpdGVtcztcblxuLy8gLy8gU3RydWN0dXJlIG9mIEl0ZW1zXG4vLyBpZDoge1xuLy8gXHRjb250ZW50OlN0cmluZyxcbi8vIFx0cGFyZW50OmlkLFxuLy8gXHRjaGlsZHJlbjpbaWQsaWQsaWQuLi5dXG4vLyB9XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2hpbGRMaXN0KHN0YXRlLCBiYXNlSUQpIHtcblx0dmFyIGxpc3QgPSBbYmFzZUlEXTtcblx0bGlzdCA9IGxpc3Rcblx0XHQuY29uY2F0KHN0YXRlW2Jhc2VJRF0uY29tcGxldGVDaGlsZHJlbilcblx0XHQuY29uY2F0KHN0YXRlW2Jhc2VJRF0uaW5jb21wbGV0ZUNoaWxkcmVuKTtcblx0Zm9yICh2YXIgaSA9IDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bGlzdCA9IGxpc3Rcblx0XHRcdC5jb25jYXQoc3RhdGVbbGlzdFtpXV0uY29tcGxldGVDaGlsZHJlbilcblx0XHRcdC5jb25jYXQoc3RhdGVbbGlzdFtpXV0uaW5jb21wbGV0ZUNoaWxkcmVuKTtcblx0fVxuXHRyZXR1cm4gbGlzdDtcbn1cblxuZnVuY3Rpb24gcmFuZG9tSUQoKSB7XG5cdHJldHVybiBfLnJhbmRvbSgwLCA2NTUwMCwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZChpdGVtLCBjaGlsZCkge1xuXHRyZXR1cm4gXy5tZXJnZSh7fSwgaXRlbSwge1xuXHRcdGluY29tcGxldGVDaGlsZHJlbjogaXRlbS5pbmNvbXBsZXRlQ2hpbGRyZW4uY29uY2F0KGNoaWxkKVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVvcmRlcihhcnIsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuXHR2YXIgcmVtb3ZlZCA9IFtdO1xuXHRpZiAob2xkSW5kZXggPT09IDApIHtcblx0XHRyZW1vdmVkID0gYXJyLnNsaWNlKDEpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBiZWZvcmUgPSBhcnIuc2xpY2UoMCwgb2xkSW5kZXgpO1xuXHRcdHZhciBhZnRlciA9IGFyci5zbGljZShvbGRJbmRleCArIDEsIGFyci5sZW5ndGgpO1xuXHRcdHJlbW92ZWQgPSBbLi4uYmVmb3JlLCAuLi5hZnRlcl07XG5cdH1cblxuXHRpZiAobmV3SW5kZXggPT09IDApIHtcblx0XHRyZXR1cm4gW2FycltvbGRJbmRleF0sIC4uLnJlbW92ZWRdO1xuXHR9IGVsc2UgaWYgKG5ld0luZGV4ID09PSBhcnIubGVuZ3RoIC0gMSkge1xuXHRcdHJldHVybiBbLi4ucmVtb3ZlZCwgYXJyW29sZEluZGV4XV07XG5cdH0gZWxzZSB7XG5cdFx0YmVmb3JlID0gcmVtb3ZlZC5zbGljZSgwLCBuZXdJbmRleCk7XG5cdFx0YWZ0ZXIgPSByZW1vdmVkLnNsaWNlKG5ld0luZGV4LCByZW1vdmVkLmxlbmd0aCk7XG5cdFx0cmV0dXJuIFsuLi5iZWZvcmUsIGFycltvbGRJbmRleF0sIC4uLmFmdGVyXTtcblx0fVxufVxuXG5jb25zdCBzZWVkRGF0YSA9IHtcblx0MTAwMToge1xuXHRcdGlkOiAxMDAxLFxuXHRcdGNvbnRlbnQ6IFwiUmFuZG9tIHNlZWQgMVwiLFxuXHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRjb2xvcjoncmVkJyxcblx0XHRwYXJlbnQ6IFwicm9vdFwiLFxuXHRcdGNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdGluY29tcGxldGVDaGlsZHJlbjogWzEwMDRdXG5cdH0sXG5cdDEwMDI6IHtcblx0XHRpZDogMTAwMixcblx0XHRjb250ZW50OiBcIlJhbmRvbSBzZWVkIDJcIixcblx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0Y29sb3I6J3JlZCcsXG5cdFx0cGFyZW50OiBcInJvb3RcIixcblx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFsxMDAzXVxuXHR9LFxuXHQxMDAzOiB7XG5cdFx0aWQ6IDEwMDMsXG5cdFx0Y29udGVudDogXCJSYW5kb20gc2VlZCAzXCIsXG5cdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdGNvbG9yOidyZWQnLFxuXHRcdHBhcmVudDogMTAwMixcblx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFtdXG5cdH0sXG5cdDEwMDQ6IHtcblx0XHRpZDogMTAwNCxcblx0XHRjb250ZW50OiBcIlJhbmRvbSBzZWVkIDRcIixcblx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0Y29sb3I6J3JlZCcsXG5cdFx0cGFyZW50OiAxMDAxLFxuXHRcdGNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdGluY29tcGxldGVDaGlsZHJlbjogW11cblx0fSxcblx0MTAwNToge1xuXHRcdGlkOiAxMDA1LFxuXHRcdGNvbnRlbnQ6IFwiUmFuZG9tIHNlZWQgNVwiLFxuXHRcdGNvbXBsZXRlOiB0cnVlLFxuXHRcdGNvbG9yOidyZWQnLFxuXHRcdHBhcmVudDogXCJyb290XCIsXG5cdFx0Y29tcGxldGVDaGlsZHJlbjogW10sXG5cdFx0aW5jb21wbGV0ZUNoaWxkcmVuOiBbXVxuXHR9LFxuXHRyb290OiB7XG5cdFx0Y29sb3I6J3JlZCcsXG5cdFx0Y29tcGxldGVDaGlsZHJlbjogWzEwMDVdLFxuXHRcdGluY29tcGxldGVDaGlsZHJlbjogWzEwMDEsIDEwMDJdXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL2l0ZW1zX3JlZHVjZXIuanMiLCJpbXBvcnQgeyBDSEFOR0VfQkFTRSB9IGZyb20gXCIuLi9hY3Rpb25zL1wiO1xuXG5mdW5jdGlvbiBiYXNlSXRlbShzdGF0ZSA9IFwicm9vdFwiLCBhY3Rpb24pIHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQ0hBTkdFX0JBU0U6XG5cdFx0XHRyZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlSXRlbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvcmVkdWNlcnMvYmFzZUl0ZW1fcmVkdWNlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG5cdG5ld0l0ZW0sXG5cdGNoYW5nZUJhc2VJdGVtLFxuXHRjb21wbGV0ZUl0ZW0sXG5cdGRlbGV0ZUl0ZW0sXG5cdHJlb3JkZXJJdGVtLFxuXHRjaGFuZ2VDb2xvclxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XG4vLyBpbXBvcnQgc3R5bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdEl0ZW0vc3R5bGUuY3NzXCI7XG5pbXBvcnQgTGlzdEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0SGVhZGVyLmpzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwibWF0ZXJpYWwtdWkvQ2FyZFwiO1xuXG5jbGFzcyBUb2RvQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5ld0l0ZW06IFwiXCJcblx0XHR9O1xuXHRcdHRoaXMuaW5wdXRVcGRhdGUgPSB0aGlzLmlucHV0VXBkYXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5uZXdJdGVtQWN0aW9uID0gdGhpcy5uZXdJdGVtQWN0aW9uLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jaGFuZ2VCYXNlQ29tcG9zZXIgPSB0aGlzLmNoYW5nZUJhc2VDb21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY29tcGxldGVJdGVtQ29tcG9zZXIgPSB0aGlzLmNvbXBsZXRlSXRlbUNvbXBvc2VyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5kZWxldGVJdGVtQ29tcG9zZXIgPSB0aGlzLmRlbGV0ZUl0ZW1Db21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVvcmRlckl0ZW1Db21wb3NlciA9IHRoaXMucmVvcmRlckl0ZW1Db21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZ2VuZXJhdGVDb21wbGV0ZSA9IHRoaXMuZ2VuZXJhdGVDb21wbGV0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2hhbmdlQ29sb3JDb21wb3NlciA9IHRoaXMuY2hhbmdlQ29sb3JDb21wb3Nlci5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aW5wdXRVcGRhdGUoZXZlbnQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgbmV3SXRlbTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuXHR9XG5cblx0bmV3SXRlbUFjdGlvbihjb250ZW50KSB7XG5cdFx0dGhpcy5wcm9wcy5uZXdJdGVtKGNvbnRlbnQsIHRoaXMucHJvcHMuYmFzZUl0ZW0pO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBuZXdJdGVtOiBcIlwiIH0pO1xuXHR9XG5cblx0Y2hhbmdlQmFzZUNvbXBvc2VyKGlkKSB7XG5cdFx0dmFyIGNoYW5nZUJhc2VJdGVtID0gdGhpcy5wcm9wcy5jaGFuZ2VCYXNlSXRlbTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRjaGFuZ2VCYXNlSXRlbShpZCk7XG5cdFx0fTtcblx0fVxuXG5cdGRlbGV0ZUl0ZW1Db21wb3NlcihpZCkge1xuXHRcdGxldCBkZWxldGVJdGVtRGlzcGF0Y2ggPSB0aGlzLnByb3BzLmRlbGV0ZUl0ZW07XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZGVsZXRlSXRlbURpc3BhdGNoKGlkKTtcblx0XHR9O1xuXHR9XG5cblx0Y29tcGxldGVJdGVtQ29tcG9zZXIoaWQpIHtcblx0XHRsZXQgY29tcGxldGVJdGVtRGlzcGF0Y2ggPSB0aGlzLnByb3BzLmNvbXBsZXRlSXRlbTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wbGV0ZUl0ZW1EaXNwYXRjaChpZCk7XG5cdFx0fTtcblx0fVxuXG5cdHJlb3JkZXJJdGVtQ29tcG9zZXIoaWQsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuXHRcdGxldCByZW9yZGVySXRlbURpc3BhdGNoID0gdGhpcy5wcm9wcy5yZW9yZGVySXRlbTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW9yZGVySXRlbURpc3BhdGNoKGlkLCBvbGRJbmRleCwgbmV3SW5kZXgpO1xuXHRcdH07XG5cdH1cblxuXHRnZW5lcmF0ZUNvbXBsZXRlKCkge1xuXHRcdHZhciBjb21wbGV0ZUNvdW50ID0gdGhpcy5wcm9wcy5pdGVtc1t0aGlzLnByb3BzLmJhc2VJdGVtXVxuXHRcdFx0LmNvbXBsZXRlQ2hpbGRyZW4ubGVuZ3RoO1xuXHRcdHZhciB0b3RhbENvdW50ID1cblx0XHRcdHRoaXMucHJvcHMuaXRlbXNbdGhpcy5wcm9wcy5iYXNlSXRlbV0uaW5jb21wbGV0ZUNoaWxkcmVuLmxlbmd0aCArXG5cdFx0XHRjb21wbGV0ZUNvdW50O1xuXHRcdHJldHVybiBgKCAke2NvbXBsZXRlQ291bnR9IC8gJHt0b3RhbENvdW50fSBDb21wbGV0ZSApYDtcblx0fVxuXG5cdGNoYW5nZUNvbG9yQ29tcG9zZXIoaWQsIGNvbG9yKSB7XG5cdFx0bGV0IGNoYW5nZUNvbG9yRGlzcGF0Y2ggPSB0aGlzLnByb3BzLmNoYW5nZUNvbG9yXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpe1xuXHRcdFx0Y2hhbmdlQ29sb3JEaXNwYXRjaChpZCwgY29sb3IpXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBjdXJyZW50SXRlbSA9IHRoaXMucHJvcHMuaXRlbXNbdGhpcy5wcm9wcy5iYXNlSXRlbV07XG5cdFx0dmFyIHBhcmVudEl0ZW0gPSB0aGlzLnByb3BzLml0ZW1zW2N1cnJlbnRJdGVtLnBhcmVudF07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxDYXJkIHN0eWxlPXt7IHdpZHRoOiBcIjg1dndcIiwgbWFyZ2luOiBcImF1dG9cIiwgbWFyZ2luVG9wOiBcIjE2cHhcIiB9fT5cblx0XHRcdFx0PExpc3RIZWFkZXJcblx0XHRcdFx0XHRiYXNlSXRlbT17dGhpcy5wcm9wcy5iYXNlSXRlbX1cblx0XHRcdFx0XHRiYXNlSXRlbVRleHQ9e2N1cnJlbnRJdGVtLmNvbnRlbnR9XG5cdFx0XHRcdFx0Y3VycmVudFBhcmVudD17Y3VycmVudEl0ZW0ucGFyZW50fVxuXHRcdFx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17dGhpcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRcdFx0Y291bnRlclRleHQ9e3RoaXMuZ2VuZXJhdGVDb21wbGV0ZSgpfVxuXHRcdFx0XHRcdGl0ZW1zPXt0aGlzLnByb3BzLml0ZW1zfVxuXHRcdFx0XHRcdG5ld0l0ZW1BY3Rpb249e3RoaXMubmV3SXRlbUFjdGlvbn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PExpc3Rcblx0XHRcdFx0XHRsaXN0PXt0aGlzLnByb3BzLml0ZW1zfVxuXHRcdFx0XHRcdGJhc2VJdGVtPXt0aGlzLnByb3BzLmJhc2VJdGVtfVxuXHRcdFx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17dGhpcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRcdFx0ZGVsZXRlSXRlbUNvbXBvc2VyPXt0aGlzLmRlbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17dGhpcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0XHRyZW9yZGVySXRlbUNvbXBvc2VyPXt0aGlzLnJlb3JkZXJJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3NlciA9e3RoaXMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0Lz5cblx0XHRcdDwvQ2FyZD5cblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IGl0ZW1zLCBiYXNlSXRlbSB9KSB7XG5cdHJldHVybiB7IGl0ZW1zLCBiYXNlSXRlbSB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcblx0cmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcblx0XHR7IG5ld0l0ZW0sIGNoYW5nZUJhc2VJdGVtLCBjb21wbGV0ZUl0ZW0sIGRlbGV0ZUl0ZW0sIHJlb3JkZXJJdGVtLCBjaGFuZ2VDb2xvciB9LFxuXHRcdGRpc3BhdGNoXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRvZG9Db250YWluZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG4vLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEluY29tcGxldGVMaXN0IGZyb20gXCIuL0luY29tcGxldGVMaXN0LmpzXCI7XG5pbXBvcnQgQ29tcGxldGVMaXN0IGZyb20gXCIuL0NvbXBsZXRlTGlzdC5qc1wiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcblxuXG5jb25zdCBzdHlsZVNoZWV0ID0gY3JlYXRlU3R5bGVTaGVldChcIkxpc3RcIiwgdGhlbWUgPT4gKHtcblx0Y29udGFpbmVyOiB7XG5cdFx0d2lkdGg6IFwiODV2d1wiLFxuXHRcdG1hcmdpbjogXCJhdXRvXCJcblx0fVxufSkpO1xuXG5jb25zdCBMaXN0ID0gcHJvcHMgPT4ge1xuXHRjb25zdCBpdGVtc0xpc3QgPSBwcm9wcy5saXN0O1xuXHRjb25zdCBiYXNlSXRlbSA9IHByb3BzLmJhc2VJdGVtO1xuXHRsZXQgY29tcGxldGVMaXN0SXRlbXMgPSBpdGVtc0xpc3RbYmFzZUl0ZW1dLmNvbXBsZXRlQ2hpbGRyZW47XG5cdGxldCBpbmNvbXBsZXRlTGlzdEl0ZW1zID0gaXRlbXNMaXN0W2Jhc2VJdGVtXS5pbmNvbXBsZXRlQ2hpbGRyZW47XG5cblx0Y29tcGxldGVMaXN0SXRlbXMgPSBwb3B1bGF0ZUxpc3QoY29tcGxldGVMaXN0SXRlbXMpO1xuXHRpbmNvbXBsZXRlTGlzdEl0ZW1zID0gcG9wdWxhdGVMaXN0KGluY29tcGxldGVMaXN0SXRlbXMpO1xuXG5cdGZ1bmN0aW9uIHBvcHVsYXRlTGlzdChsaXN0QXJyKSB7XG5cdFx0cmV0dXJuIGxpc3RBcnIubWFwKGxpc3RJRCA9PiBpdGVtc0xpc3RbbGlzdElEXSk7XG5cdH1cblxuXHRjb25zdCBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcztcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG5cdFx0XHQ8SW5jb21wbGV0ZUxpc3Rcblx0XHRcdFx0aXRlbXM9e2luY29tcGxldGVMaXN0SXRlbXN9XG5cdFx0XHRcdHBhcmVudElEPXtwcm9wcy5iYXNlSXRlbX1cblx0XHRcdFx0cmVuZGVyQ2hpbGRyZW49e3RydWV9XG5cdFx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRkZWxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmRlbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRyZW9yZGVySXRlbUNvbXBvc2VyPXtwcm9wcy5yZW9yZGVySXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRjaGFuZ2VDb2xvckNvbXBvc2VyID17cHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdC8+XG5cdFx0XHQ8Q29tcGxldGVMaXN0XG5cdFx0XHRcdGl0ZW1zPXtjb21wbGV0ZUxpc3RJdGVtc31cblx0XHRcdFx0cGFyZW50SUQ9e3Byb3BzLmJhc2VJdGVtfVxuXHRcdFx0XHRyZW5kZXJDaGlsZHJlbj17dHJ1ZX1cblx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXtwcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdHJlb3JkZXJJdGVtQ29tcG9zZXI9e3Byb3BzLnJlb3JkZXJJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXIgPXtwcm9wcy5jaGFuZ2VDb2xvckNvbXBvc2VyfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbkxpc3QucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVTaGVldCkoTGlzdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIGltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7XG5cdFNvcnRhYmxlQ29udGFpbmVyLFxuXHRTb3J0YWJsZUVsZW1lbnRcbn0gZnJvbSBcInJlYWN0LXNvcnRhYmxlLWhvY1wiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL0xpc3RJdGVtLmpzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwibWF0ZXJpYWwtdWkvTGlzdFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcbmltcG9ydCB7cHJpbWFyeUNvbG9yUGFyc2VyLCBmYWRlZENvbG9yUGFyc2VyLCB0ZXh0Q29sb3JQYXJzZXJ9IGZyb20gJy4uL2hlbHBlcnMvY29sb3JQYXJzZXIuanMnXG5cblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJJbmNvbXBsZXRlTGlzdFwiLCB0aGVtZSA9PiAoe1xuXHRjb250YWluZXI6IHtcblx0XHRsaXN0U3R5bGU6IFwibm9uZVwiLFxuXHRcdHBhZGRpbmc6IDAsXG5cdFx0bWFyZ2luOiAwXG5cdH0sXG5cdHJvb3Q6IHtcblx0XHRwYWRkaW5nOiAwXG5cdH1cbn0pKTtcblxuXG5jb25zdCBTb3J0YWJsZUxpc3QgPSBTb3J0YWJsZUNvbnRhaW5lcigocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8TGlzdCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzRm9yTGlzdH0+XG5cdFx0XHR7cHJvcHMuaXRlbXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8U29ydGFibGVMaXN0SXRlbVxuXHRcdFx0XHRcdFx0a2V5PXtgaXRlbS0ke3ZhbHVlLmlkfWB9XG5cdFx0XHRcdFx0XHRpbmRleD17aW5kZXh9XG5cdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3NlciA9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRiZ0NvbG9yQ29tcG9zZXI9e3Byb3BzLmJnQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0XHRcdHRleHRDb2xvckNvbXBvc2VyPXtwcm9wcy50ZXh0Q29sb3JDb21wb3Nlcn1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC9MaXN0PlxuXHQpO1xufSk7XG5cbmNvbnN0IFNvcnRhYmxlTGlzdEl0ZW0gPSBTb3J0YWJsZUVsZW1lbnQoKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PExpc3RJdGVtXG5cdFx0XHR2YWx1ZT17cHJvcHMudmFsdWV9XG5cdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0Y2hhbmdlQ29sb3JDb21wb3NlciA9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRpdGVtQ29sb3I9e3Byb3BzLmJnQ29sb3JDb21wb3Nlcihwcm9wcy52YWx1ZS5jb2xvcil9XG5cdFx0XHR0ZXh0Q29sb3I9e3Byb3BzLnRleHRDb2xvckNvbXBvc2VyKHByb3BzLnZhbHVlLmNvbG9yLCBwcm9wcy52YWx1ZS5jb21wbGV0ZSl9XG5cdFx0Lz5cblx0KTtcbn0pO1xuXG5jb25zdCBJbmNvbXBsZXRlTGlzdCA9IHByb3BzID0+IHtcblx0Y29uc3QgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXM7XG5cblxuXHRmdW5jdGlvbiBoYW5kbGVTb3J0KHsgb2xkSW5kZXgsIG5ld0luZGV4LH0pIHtcblx0XHRwcm9wcy5yZW9yZGVySXRlbUNvbXBvc2VyKHByb3BzLnBhcmVudElELCBvbGRJbmRleCwgbmV3SW5kZXgpKCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8U29ydGFibGVMaXN0XG5cdFx0XHRcdGl0ZW1zPXtwcm9wcy5pdGVtc31cblx0XHRcdFx0dXNlRHJhZ0hhbmRsZT17dHJ1ZX1cblx0XHRcdFx0b25Tb3J0RW5kPXtoYW5kbGVTb3J0fVxuXHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0ZGVsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdGNvbXBsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0Y2xhc3NGb3JMaXN0PXtjbGFzc2VzLnJvb3R9XG5cdFx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXIgPXtwcm9wcy5jaGFuZ2VDb2xvckNvbXBvc2VyfVxuXHRcdFx0XHRiZ0NvbG9yQ29tcG9zZXI9e3ByaW1hcnlDb2xvclBhcnNlcn1cblx0XHRcdFx0dGV4dENvbG9yQ29tcG9zZXI9e3RleHRDb2xvclBhcnNlcn1cblx0XHRcdC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5JbmNvbXBsZXRlTGlzdC5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShJbmNvbXBsZXRlTGlzdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvSW5jb21wbGV0ZUxpc3QuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vTGlzdEl0ZW0uanNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCJtYXRlcmlhbC11aS9MaXN0XCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IHtwcmltYXJ5Q29sb3JQYXJzZXIsIGZhZGVkQ29sb3JQYXJzZXIsIHRleHRDb2xvclBhcnNlcn0gZnJvbSAnLi4vaGVscGVycy9jb2xvclBhcnNlci5qcydcblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJDb21wbGV0ZUxpc3RcIiwgdGhlbWUgPT4gKHtcblx0Y29udGFpbmVyOiB7XG5cdFx0bWFyZ2luOiAwLFxuXHRcdHBhZGRpbmc6IDBcblx0fVxufSkpO1xuXG5jb25zdCBDb21wbGV0ZUxpc3QgPSBwcm9wcyA9PiB7XG5cdGNvbnN0IGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzO1xuXG5cdHJldHVybiAoXG5cdFx0PExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG5cdFx0XHR7cHJvcHMuaXRlbXMubWFwKHZhbHVlID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8TGlzdEl0ZW1cblx0XHRcdFx0XHRcdGtleT17YGl0ZW0tJHt2YWx1ZS5pZH1gfVxuXHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXtwcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRkZWxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmRlbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0XHRcdGNvbXBsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXIgPXtwcm9wcy5jaGFuZ2VDb2xvckNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0aXRlbUNvbG9yPXtmYWRlZENvbG9yUGFyc2VyKHZhbHVlLmNvbG9yKX1cblx0XHRcdFx0XHRcdHRleHRDb2xvcj17dGV4dENvbG9yUGFyc2VyKHZhbHVlLmNvbG9yKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC9MaXN0PlxuXHQpO1xufTtcblxuQ29tcGxldGVMaXN0LnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlU2hlZXQpKENvbXBsZXRlTGlzdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvQ29tcGxldGVMaXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJtYXRlcmlhbC11aS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgRGl2aWRlciBmcm9tIFwibWF0ZXJpYWwtdWkvRGl2aWRlclwiO1xuaW1wb3J0IENoZXZyb25SaWdodCBmcm9tIFwibWF0ZXJpYWwtdWktaWNvbnMvQ2hldnJvblJpZ2h0XCI7XG5pbXBvcnQgTmV3SXRlbUZvcm0gZnJvbSBcIi4vTmV3SXRlbUZvcm0uanNcIjtcbmltcG9ydCB7cHJpbWFyeUNvbG9yUGFyc2VyLCBmYWRlZENvbG9yUGFyc2VyLCB0ZXh0Q29sb3JQYXJzZXIsIGFjY2VudENvbG9yUGFyc2VyLCBhY2NlbnRUZXh0Q29sb3JQYXJzZXJ9IGZyb20gJy4uL2hlbHBlcnMvY29sb3JQYXJzZXIuanMnXG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBjcmVhdGVTdHlsZVNoZWV0KFwiSGVhZGVyXCIsIHRoZW1lID0+ICh7XG5cdHRpdGxlQ29udGFpbmVyOiB7XG5cdFx0cGFkZGluZzogMTZcblx0fSxcblx0Y3J1bWI6IHtcblx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcblx0XHRjdXJzb3I6IFwicG9pbnRlclwiLFxuXHRcdFwiJjpob3ZlclwiOiB7XG5cdFx0XHR0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIlxuXHRcdH1cblx0fSxcblx0Y3J1bWJDb250YWluZXI6IHtcblx0XHRwYWRkaW5nOiAxNlxuXHR9XG59KSk7XG5cbmNvbnN0IExpc3RIZWFkZXIgPSBwcm9wcyA9PiB7XG5cdGNvbnN0IGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzO1xuXHRjb25zdCBiZ0NvbG9yID0gcHJpbWFyeUNvbG9yUGFyc2VyKHByb3BzLml0ZW1zW3Byb3BzLmJhc2VJdGVtXS5jb2xvcilcblx0Y29uc3QgdGV4dENvbG9yID0gdGV4dENvbG9yUGFyc2VyKHByb3BzLml0ZW1zW3Byb3BzLmJhc2VJdGVtXS5jb2xvcilcblx0Y29uc3QgYWNjZW50Q29sb3IgPSBhY2NlbnRDb2xvclBhcnNlcihwcm9wcy5pdGVtc1twcm9wcy5iYXNlSXRlbV0uY29sb3IpXG5cdGNvbnN0IGFjY2VudFRleHRDb2xvciA9IGFjY2VudFRleHRDb2xvclBhcnNlcihwcm9wcy5pdGVtc1twcm9wcy5iYXNlSXRlbV0uY29sb3IpXG5cblx0Y29uc3QgQnJlYWRDcnVtYiA9ICgpID0+IHtcblx0XHRsZXQgdHJhaWwgPSBbXTtcblx0XHRsZXQgY3VycmVudCA9IHByb3BzLmJhc2VJdGVtO1xuXHRcdGxldCBjb3VudGVyID0gMDtcblx0XHRpZiAoY3VycmVudCA9PT0gXCJyb290XCIpIHtcblx0XHRcdHRyYWlsID0gW1wicm9vdFwiXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2hpbGUgKHByb3BzLml0ZW1zW2N1cnJlbnRdLnBhcmVudCAhPT0gXCJyb290XCIgJiYgY291bnRlciA8IDEwKSB7XG5cdFx0XHRcdHRyYWlsID0gW2N1cnJlbnQsIC4uLnRyYWlsXTtcblx0XHRcdFx0Y3VycmVudCA9IHByb3BzLml0ZW1zW2N1cnJlbnRdLnBhcmVudDtcblx0XHRcdFx0Y291bnRlcisrO1xuXHRcdFx0fVxuXHRcdFx0dHJhaWwgPSBbXCJyb290XCIsIGN1cnJlbnQsIC4uLnRyYWlsXTtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUeXBvZ3JhcGh5XG5cdFx0XHR0eXBlPXtcImJvZHkxXCJ9XG5cdFx0XHRjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuY3J1bWJDb250YWluZXJ9XG5cdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHQ+XG5cdFx0XHRcdHt0cmFpbC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdGtleT17YGJyZWFkY3J1bWItJHtpbmRleH1gfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuY3J1bWJ9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3NlcihpdGVtKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e2l0ZW0gPT09IFwicm9vdFwiXG5cdFx0XHRcdFx0XHRcdFx0PyBcInJvb3RcIlxuXHRcdFx0XHRcdFx0XHRcdDogcHJvcHMuaXRlbXNbaXRlbV0uY29udGVudH1cblx0XHRcdFx0XHRcdFx0e2luZGV4IDwgdHJhaWwubGVuZ3RoIC0gMVxuXHRcdFx0XHRcdFx0XHRcdD8gPENoZXZyb25SaWdodCAvPlxuXHRcdFx0XHRcdFx0XHRcdDogXCJcIn17XCIgXCJ9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRzdHlsZT17e1xuXHRcdFx0YmFja2dyb3VuZENvbG9yOmJnQ29sb3IsXG5cdFx0XHRjb2xvcjp0ZXh0Q29sb3JcblxuXHRcdH19XG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVDb250YWluZXJ9PlxuXHRcdFx0XHQ8VHlwb2dyYXBoeVxuXHRcdFx0XHR0eXBlPXtcImhlYWRsaW5lXCJ9XG5cdFx0XHRcdGFsaWduPXtcImNlbnRlclwifVxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7cHJvcHMuYmFzZUl0ZW0gPT09IFwicm9vdFwiID8gXCJyb290XCIgOiBwcm9wcy5iYXNlSXRlbVRleHR9XG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0PFR5cG9ncmFwaHlcblx0XHRcdFx0dHlwZT17XCJzdWJoZWFkaW5nXCJ9XG5cdFx0XHRcdGFsaWduPXtcImNlbnRlclwifVxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7cHJvcHMuY291bnRlclRleHR9XG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PERpdmlkZXIgLz5cblx0XHRcdDxCcmVhZENydW1iIC8+XG5cdFx0XHQ8RGl2aWRlciAvPlxuXHRcdFx0PE5ld0l0ZW1Gb3JtXG5cdFx0XHRuZXdJdGVtQWN0aW9uPXtwcm9wcy5uZXdJdGVtQWN0aW9ufVxuXHRcdFx0dGV4dENvbG9yPXt0ZXh0Q29sb3J9XG5cdFx0XHRhY2NlbnRDb2xvcj17YWNjZW50Q29sb3J9XG5cdFx0XHRhY2NlbnRUZXh0Q29sb3I9e2FjY2VudFRleHRDb2xvcn1cblx0XHRcdC8+XG5cdFx0XHQ8RGl2aWRlciAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuTGlzdEhlYWRlci5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShMaXN0SGVhZGVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIm1hdGVyaWFsLXVpL1RleHRGaWVsZFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvQnV0dG9uXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwibWF0ZXJpYWwtdWkvR3JpZFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJOZXdJdGVtRm9ybVwiLCB0aGVtZSA9PiAoe1xuXHRjb250YWluZXI6IHtcblx0XHR3aWR0aDogXCI4NXZ3XCIsXG5cdFx0bWFyZ2luOiBcImF1dG9cIixcblx0XHRwYWRkaW5nQm90dG9tOiBcIjE2cHhcIixcblx0XHRwYWRkaW5nVG9wOiBcIjE2cHhcIixcblx0XHRwYWRkaW5nOiAxNixcblx0XHRib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiXG5cdH0sXG5cdHR5cGVJdGVtOiB7XG5cdFx0ZmxleEdyb3c6IDFcblx0fSxcblx0d2hpdGU6e1xuXHRcdGNvbG9yOicjZmZmZmZmJ1xuXHR9LFxuXHRibGFjazp7XG5cdFx0Y29sb3I6JyMwMDAwMDAnXG5cdH1cbn0pKTtcblxuY2xhc3MgTmV3SXRlbUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuZXdJdGVtOiBcIlwiXG5cdFx0fTtcblx0XHR0aGlzLmlucHV0VXBkYXRlID0gdGhpcy5pbnB1dFVwZGF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc3VibWl0SGFuZGxlciA9IHRoaXMuc3VibWl0SGFuZGxlci5iaW5kKHRoaXMpO1xuXHR9XG5cblx0c3VibWl0SGFuZGxlcihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5wcm9wcy5uZXdJdGVtQWN0aW9uKHRoaXMuc3RhdGUubmV3SXRlbSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG5ld0l0ZW06IFwiXCIgfSk7XG5cdH1cblxuXHRpbnB1dFVwZGF0ZShldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBuZXdJdGVtOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgY2xhc3NlcyA9IHRoaXMucHJvcHMuY2xhc3Nlcztcblx0XHRjb25zdCB0ZXh0Q29sb3JDbGFzcyA9IHRoaXMucHJvcHMudGV4dENvbG9yID09PSAnI2ZmZmZmZicgPyBjbGFzc2VzLndoaXRlIDogY2xhc3Nlcy5ibGFja1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9XG5cdFx0XHQ+XG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEhhbmRsZXJ9PlxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBndXR0ZXI9ezI0fSBhbGlnbj17XCJjZW50ZXJcIn0+XG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBlSXRlbX0+XG5cdFx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0XHRpZD1cIm5ld0l0ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiTmV3IEl0ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRmdWxsV2lkdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubmV3SXRlbX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5pbnB1dFVwZGF0ZX1cblx0XHRcdFx0XHRcdFx0XHRJbnB1dFByb3BzPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZTp7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOnRoaXMucHJvcHMudGV4dENvbG9yXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRJbnB1dExhYmVsUHJvcHM9e3tcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOntcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6dGhpcy5wcm9wcy50ZXh0Q29sb3Jcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0cmFpc2VkXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7Y29sb3I6dGhpcy5wcm9wcy5hY2NlbnRUZXh0Q29sb3IsIGJhY2tncm91bmRDb2xvcjp0aGlzLnByb3BzLmFjY2VudENvbG9yfX0+XG5cdFx0XHRcdFx0XHRcdFx0TWFrZSBhIE5ldyBJdGVtXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5OZXdJdGVtRm9ybS5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShOZXdJdGVtRm9ybSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTmV3SXRlbUZvcm0uanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7QUFpQkE7QUFJQTtBQUNBO0FBdEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFEQTtBQURBO0FBRkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBa0JBO0FBQ0E7QUEzQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBTkE7QUFPQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFVQTtBQU9BO0FBT0E7QUFPQTtBQVdBO0FBM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTs7QUFFQTtBQUdBO0FBSkE7QUFGQTtBQVFBO0FBQ0E7QUFEQTs7QUFHQTtBQUVBO0FBSEE7QUFLQTtBQUNBO0FBREE7O0FBR0E7QUFFQTtBQUhBO0FBS0E7QUFDQTtBQURBOztBQUdBO0FBRUE7QUFIQTtBQUtBO0FBQ0E7QUFEQTs7QUFHQTs7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQUZBO0FBU0E7QUFDQTtBQURBOztBQUdBOztBQUVBO0FBR0E7QUFKQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBUUE7QUFGQTs7QUFHQTtBQUFBO0FBVkE7QUFEQTtBQURBO0FBQ0E7QUFnQkE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7Ozs7O0FBYkE7QUFDQTtBQW9CQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7QUFsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBQUE7QUFHQTs7QUFEQTtBQUdBO0FBSEE7QUFDQTs7QUFFQTtBQUVBO0FBRkE7QUFBQTtBQVFBO0FBdEJBO0FBQ0E7QUF3QkE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVlBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBekJBO0FBRUE7QUFHQTtBQUpBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBV0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7O0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFJQTs7OztBQUdBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFNQTtBQUNBOzs7O0FBSUE7QUFBQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQURBO0FBR0E7QUFIQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUhBO0FBTUE7QUFOQTtBQUNBO0FBTUE7QUFDQTs7QUFGQTtBQUtBO0FBTEE7QUFLQTtBQUNBO0FBQ0E7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7O0FBR0E7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBRUE7QUFGQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7QUFPQTtBQUNBO0FBQUE7O0FBSEE7QUFBQTtBQUFBO0FBQ0E7O0FBSUE7QUFDQTtBQURBO0FBQUE7QUFFQTs7QUFEQTtBQU1BO0FBTkE7QUFDQTs7Ozs7QUEzSEE7QUFDQTtBQWdJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7QUFHQTtBQUFBO0FBREE7QUFEQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFHQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBRkE7Ozs7OztBQUtBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFHQTtBQUhBO0FBQUE7Ozs7O0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVRBO0FBU0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFSQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVJBOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUkE7O0FBVUE7QUFBQTtBQUNBO0FBRkE7QUE5Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaElBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFFQTtBQUdBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVBBO0FBV0E7QUFYQTtBQUNBOzs7OztBQXBGQTtBQUNBO0FBZ0dBO0FBQUE7QUFBQTtBQUNBO0FBQUE7OztBQUdBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0hBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7OztBQUdBO0FBQUE7QUFEQTtBQURBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFSQTtBQVVBO0FBVkE7QUFDQTtBQVdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUkE7QUFZQTtBQVpBO0FBQ0E7QUE1QkE7QUFDQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7OztBQVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTs7O0FBR0E7QUFDQTtBQUVBO0FBSkE7O0FBS0E7QUFBQTtBQU5BO0FBREE7QUFDQTtBQVdBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBO0FBWUE7QUFaQTtBQUNBO0FBY0E7QUFwQkE7QUFDQTtBQXFCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUEE7QUFVQTtBQVZBO0FBQ0E7QUFIQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOztBQVZBO0FBY0E7QUFkQTtBQUNBO0FBWEE7QUFDQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7QUFHQTtBQUFBO0FBREE7QUFEQTtBQURBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVJBO0FBV0E7QUFYQTtBQUNBO0FBYUE7QUFyQkE7QUFDQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7OztBQVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTs7O0FBSUE7QUFGQTs7QUFJQTtBQUNBO0FBQ0E7O0FBSUE7QUFIQTtBQUpBOztBQVFBO0FBQUE7QUFaQTtBQURBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFNQTtBQUVBO0FBQUE7QUFDQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTs7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFDQTtBQUFBOztBQUdBO0FBQUE7QUFDQTtBQUZBOztBQUZBO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFRQTtBQUNBO0FBQUE7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7O0FBT0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTs7QUFLQTtBQUdBO0FBSEE7QUFBQTtBQWhGQTtBQUNBO0FBb0ZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7O0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFQQTs7QUFVQTtBQUZBOztBQUtBO0FBRkE7O0FBR0E7QUFBQTtBQWZBO0FBREE7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUZBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBRUE7QUFBQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFEQTtBQUdBO0FBSEE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBR0E7QUFBQTtBQURBOzs7QUFNQTtBQUFBO0FBREE7O0FBYkE7QUFtQkE7QUFuQkE7QUFDQTtBQWtCQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUNBOzs7OztBQXJEQTtBQUNBO0FBaUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        