
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
        primary: _colors.purple,
        accent: _colors.green
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

/***/ 655:
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
var NEW_ITEM = exports.NEW_ITEM = "NEW_ITEM";
var CHANGE_BASE = exports.CHANGE_BASE = "CHANGE_BASE";
var COMPLETE_ITEM = exports.COMPLETE_ITEM = "COMPLETE_ITEM";
var DELETE_ITEM = exports.DELETE_ITEM = "DELETE_ITEM";
var REORDER_ITEM = exports.REORDER_ITEM = "REORDER_ITEM";

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/actions/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/actions/index.js"); } } })();

/***/ }),

/***/ 667:
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

var _styles = __webpack_require__(640);

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

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactSortableHoc = __webpack_require__(670);

var _List = __webpack_require__(656);

var _Checkbox = __webpack_require__(759);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _IconButton = __webpack_require__(673);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Reorder = __webpack_require__(771);

var _Reorder2 = _interopRequireDefault(_Reorder);

var _DeleteForever = __webpack_require__(772);

var _DeleteForever2 = _interopRequireDefault(_DeleteForever);

var _FormatListBulleted = __webpack_require__(773);

var _FormatListBulleted2 = _interopRequireDefault(_FormatListBulleted);

var _colors = __webpack_require__(605);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItem.js";
// import style from "./style.css";
// import PropTypes from 'prop-types'
// import _ from 'lodash';


var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (props) {
	return _react2.default.createElement("span", { style: props.completeStyle, __source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, _react2.default.createElement(_Reorder2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}));
});

var BaseListItem = function BaseListItem(props) {
	var item = props.value;

	var incompleteListStyle = { backgroundColor: _colors.lightBlue[200] };
	var completeListStyle = { backgroundColor: _colors.grey[300] };
	var listItemStyle = item.complete ? completeListStyle : incompleteListStyle;
	var completeGrey = _colors.grey[500];
	var completeLineStyle = item.complete ? { color: completeGrey, textDecoration: "line-through" } : {};
	var completeStyle = item.complete ? { color: completeGrey } : {};

	function completeDisplay() {
		var completed = item.completeChildren.length;
		var total = completed + item.incompleteChildren.length;
		if (total === 0) {
			return "";
		} else {
			return _react2.default.createElement("span", {
				style: completeStyle,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, "( " + completed + " / " + total + " complete)");
		}
	}

	function content() {
		return _react2.default.createElement("span", { style: completeLineStyle, __source: {
				fileName: _jsxFileName,
				lineNumber: 52
			}
		}, item.content);
	}

	return _react2.default.createElement(_List.ListItem, { divider: true, style: listItemStyle, __source: {
			fileName: _jsxFileName,
			lineNumber: 59
		}
	}, _react2.default.createElement(DragHandle, {
		completeStyle: completeStyle,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 60
		}
	}), _react2.default.createElement(_Checkbox2.default, {
		checked: item.complete,
		onClick: props.completeItemComposer(item.id),
		style: completeStyle,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 63
		}
	}), _react2.default.createElement(_List.ListItemText, { primary: content(), secondary: completeDisplay(), __source: {
			fileName: _jsxFileName,
			lineNumber: 69
		}
	}), _react2.default.createElement(_IconButton2.default, {
		onClick: props.changeBaseComposer(item.id),
		style: completeStyle,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 71
		}
	}, _react2.default.createElement(_FormatListBulleted2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 75
		}
	})), _react2.default.createElement(_IconButton2.default, {
		onClick: props.deleteItemComposer(item.id),
		style: completeStyle,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 78
		}
	}, _react2.default.createElement(_DeleteForever2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 82
		}
	})));
};

BaseListItem.propTypes = {};

exports.default = BaseListItem;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItem.js"); } } })();

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(683);


/***/ }),

/***/ 683:
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

var _Button = __webpack_require__(657);

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = __webpack_require__(697);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Typography = __webpack_require__(646);

var _Typography2 = _interopRequireDefault(_Typography);

var _App = __webpack_require__(667);

var _App2 = _interopRequireDefault(_App);

var _index = __webpack_require__(718);

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

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(668);

var _redux = __webpack_require__(647);

var _reducers = __webpack_require__(723);

var _reducers2 = _interopRequireDefault(_reducers);

var _App = __webpack_require__(667);

var _App2 = _interopRequireDefault(_App);

var _reduxPromise = __webpack_require__(727);

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reduxDevtoolsExtension = __webpack_require__(733);

var _styles = __webpack_require__(640);

var _TodoContainer = __webpack_require__(734);

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

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(647);

var _items_reducer = __webpack_require__(724);

var _items_reducer2 = _interopRequireDefault(_items_reducer);

var _baseItem_reducer = __webpack_require__(726);

var _baseItem_reducer2 = _interopRequireDefault(_baseItem_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	items: _items_reducer2.default,
	baseItem: _baseItem_reducer2.default
});

exports.default = rootReducer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/index.js"); } } })();

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = __webpack_require__(100);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__(637);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _lodash = __webpack_require__(725);

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = __webpack_require__(655);

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
		parent: "root",
		completeChildren: [],
		incompleteChildren: [1004]
	},
	1002: {
		id: 1002,
		content: "Random seed 2",
		complete: false,
		parent: "root",
		completeChildren: [],
		incompleteChildren: [1003]
	},
	1003: {
		id: 1003,
		content: "Random seed 3",
		complete: false,
		parent: 1002,
		completeChildren: [],
		incompleteChildren: []
	},
	1004: {
		id: 1004,
		content: "Random seed 4",
		complete: false,
		parent: 1001,
		completeChildren: [],
		incompleteChildren: []
	},
	1005: {
		id: 1005,
		content: "Random seed 5",
		complete: true,
		parent: "root",
		completeChildren: [],
		incompleteChildren: []
	},
	root: {
		completeChildren: [1005],
		incompleteChildren: [1001, 1002]
	}
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/items_reducer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/reducers/items_reducer.js"); } } })();

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = __webpack_require__(655);

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

/***/ 734:
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

var _List = __webpack_require__(735);

var _List2 = _interopRequireDefault(_List);

var _reactRedux = __webpack_require__(668);

var _actions = __webpack_require__(655);

var _redux = __webpack_require__(647);

var _ListHeader = __webpack_require__(775);

var _ListHeader2 = _interopRequireDefault(_ListHeader);

var _Card = __webpack_require__(797);

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
		key: "render",
		value: function render() {
			var currentItem = this.props.items[this.props.baseItem];
			var parentItem = this.props.items[currentItem.parent];
			return _react2.default.createElement(_Card2.default, { style: { width: "85vw", margin: "auto", marginTop: "16px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 81
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
					lineNumber: 82
				}
			}), _react2.default.createElement(_List2.default, {
				list: this.props.items,
				baseItem: this.props.baseItem,
				changeBaseComposer: this.changeBaseComposer,
				deleteItemComposer: this.deleteItemComposer,
				completeItemComposer: this.completeItemComposer,
				reorderItemComposer: this.reorderItemComposer,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 91
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
	return (0, _redux.bindActionCreators)({ newItem: _actions.newItem, changeBaseItem: _actions.changeBaseItem, completeItem: _actions.completeItem, deleteItem: _actions.deleteItem, reorderItem: _actions.reorderItem }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TodoContainer);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/containers/TodoContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/containers/TodoContainer.js"); } } })();

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _IncompleteList = __webpack_require__(736);

var _IncompleteList2 = _interopRequireDefault(_IncompleteList);

var _CompleteList = __webpack_require__(774);

var _CompleteList2 = _interopRequireDefault(_CompleteList);

var _styles = __webpack_require__(640);

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

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactSortableHoc = __webpack_require__(670);

var _ListItem = __webpack_require__(671);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = __webpack_require__(656);

var _List2 = _interopRequireDefault(_List);

var _styles = __webpack_require__(640);

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
			lineNumber: 27
		}
	}, props.items.map(function (value, index) {
		return _react2.default.createElement(SortableListItem, {
			key: "item-" + value.id,
			index: index,
			value: value,
			changeBaseComposer: props.changeBaseComposer,
			deleteItemComposer: props.deleteItemComposer,
			completeItemComposer: props.completeItemComposer,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 30
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
		__source: {
			fileName: _jsxFileName,
			lineNumber: 46
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
			lineNumber: 64
		}
	}, _react2.default.createElement(SortableList, {
		items: props.items,
		useDragHandle: true,
		onSortEnd: handleSort,
		changeBaseComposer: props.changeBaseComposer,
		deleteItemComposer: props.deleteItemComposer,
		completeItemComposer: props.completeItemComposer,
		classForList: classes.root,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 65
		}
	}));
};

IncompleteList.propTypes = {};

exports.default = (0, _styles.withStyles)(styleSheet)(IncompleteList);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/IncompleteList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/IncompleteList.js"); } } })();

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _ListItem = __webpack_require__(671);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = __webpack_require__(656);

var _List2 = _interopRequireDefault(_List);

var _styles = __webpack_require__(640);

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
			lineNumber: 20
		}
	}, props.items.map(function (value) {
		return _react2.default.createElement(_ListItem2.default, {
			key: "item-" + value.id,
			value: value,
			changeBaseComposer: props.changeBaseComposer,
			deleteItemComposer: props.deleteItemComposer,
			completeItemComposer: props.completeItemComposer,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 23
			}
		});
	}));
};

CompleteList.propTypes = {};

exports.default = (0, _styles.withStyles)(styleSheet)(CompleteList);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/CompleteList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/CompleteList.js"); } } })();

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = __webpack_require__(100);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(640);

var _Typography = __webpack_require__(646);

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = __webpack_require__(776);

var _Divider2 = _interopRequireDefault(_Divider);

var _ChevronRight = __webpack_require__(778);

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

var _NewItemForm = __webpack_require__(779);

var _NewItemForm2 = _interopRequireDefault(_NewItemForm);

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
		return _react2.default.createElement(_Typography2.default, { type: "body1", className: props.classes.crumbContainer, __source: {
				fileName: _jsxFileName,
				lineNumber: 46
			}
		}, trail.map(function (item, index) {
			return _react2.default.createElement("span", {
				key: "breadcrumb-" + index,
				className: props.classes.crumb,
				onClick: props.changeBaseComposer(item),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, item === "root" ? "root" : props.items[item].content, index < trail.length - 1 ? _react2.default.createElement(_ChevronRight2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}) : "", " ");
		}));
	};

	return _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 68
		}
	}, _react2.default.createElement("div", { className: classes.titleContainer, __source: {
			fileName: _jsxFileName,
			lineNumber: 69
		}
	}, _react2.default.createElement(_Typography2.default, { type: "headline", align: "center", __source: {
			fileName: _jsxFileName,
			lineNumber: 70
		}
	}, props.baseItem === "root" ? "root" : props.baseItemText), _react2.default.createElement(_Typography2.default, { type: "subheading", align: "center", __source: {
			fileName: _jsxFileName,
			lineNumber: 73
		}
	}, props.counterText)), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 77
		}
	}), _react2.default.createElement(BreadCrumb, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 78
		}
	}), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 79
		}
	}), _react2.default.createElement(_NewItemForm2.default, { newItemAction: props.newItemAction, __source: {
			fileName: _jsxFileName,
			lineNumber: 80
		}
	}));
};

ListHeader.propTypes = {};

exports.default = (0, _styles.withStyles)(styleSheet)(ListHeader);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListHeader.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListHeader.js"); } } })();

/***/ }),

/***/ 779:
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

var _TextField = __webpack_require__(780);

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = __webpack_require__(657);

var _Button2 = _interopRequireDefault(_Button);

var _Grid = __webpack_require__(790);

var _Grid2 = _interopRequireDefault(_Grid);

var _styles = __webpack_require__(640);

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

			return _react2.default.createElement("div", { className: classes.container, __source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, _react2.default.createElement("form", { onSubmit: this.submitHandler, __source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement(_Grid2.default, { container: true, gutter: 24, align: "center", __source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, _react2.default.createElement(_Grid2.default, { item: true, className: classes.typeItem, __source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, _react2.default.createElement(_TextField2.default, {
				id: "newItem",
				label: "New Item",
				type: "text",
				fullWidth: true,
				value: this.state.newItem,
				onChange: this.inputUpdate,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			})), _react2.default.createElement(_Grid2.default, { item: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, _react2.default.createElement(_Button2.default, { type: "submit", raised: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 63
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

},[682]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy90b2RvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9zdHlsZS9jcmVhdGVEZWZhdWx0Q29udGV4dC5qcz9kNDUzMmU5Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvYWN0aW9ucy9pbmRleC5qcz9kNDUzMmU5Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvQXBwLmpzP2Q0NTMyZTkiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RJdGVtLmpzP2Q0NTMyZTkiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdG9kby5qcz9kNDUzMmU5Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvaW5kZXguanM/ZDQ1MzJlOSIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL3JlZHVjZXJzL2luZGV4LmpzP2Q0NTMyZTkiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9pdGVtc19yZWR1Y2VyLmpzP2Q0NTMyZTkiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9iYXNlSXRlbV9yZWR1Y2VyLmpzP2Q0NTMyZTkiLCJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb250YWluZXJzL1RvZG9Db250YWluZXIuanM/ZDQ1MzJlOSIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdC5qcz9kNDUzMmU5Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9JbmNvbXBsZXRlTGlzdC5qcz9kNDUzMmU5Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9Db21wbGV0ZUxpc3QuanM/ZDQ1MzJlOSIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdEhlYWRlci5qcz9kNDUzMmU5Iiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9OZXdJdGVtRm9ybS5qcz9kNDUzMmU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNdWlUaGVtZVByb3ZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9NdWlUaGVtZVByb3ZpZGVyJ1xuaW1wb3J0IGNyZWF0ZVBhbGV0dGUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgY3JlYXRlTXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IHsgcHVycGxlLCBncmVlbiB9IGZyb20gJ21hdGVyaWFsLXVpL2NvbG9ycydcblxuY29uc3QgY3JlYXRlRGVmYXVsdENvbnRleHQgPSAoKSA9PlxuICBNdWlUaGVtZVByb3ZpZGVyLmNyZWF0ZURlZmF1bHRDb250ZXh0KHtcbiAgICB0aGVtZTogY3JlYXRlTXVpVGhlbWUoe1xuICAgICAgcGFsZXR0ZTogY3JlYXRlUGFsZXR0ZSh7XG4gICAgICAgIHByaW1hcnk6IHB1cnBsZSxcbiAgICAgICAgYWNjZW50OiBncmVlblxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4vLyBTaW5nbGV0b24gaGFjayBhcyB0aGVyZSBpcyBubyB3YXkgdG8gcGFzcyB2YXJpYWJsZXMgZnJvbSBfZG9jdW1lbnQuanMgdG8gcGFnZXMgeWV0LlxubGV0IGNvbnRleHQgPSBudWxsXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0Q29udGV4dCAoKSB7XG4gIGNvbnRleHQgPSBjcmVhdGVEZWZhdWx0Q29udGV4dCgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0Q29udGV4dCAoKSB7XG4gIC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgc3RvcmUgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIGNvbnRleHRcbiAgfVxuXG4gIC8vIFJldXNlIHN0b3JlIG9uIHRoZSBjbGllbnQtc2lkZVxuICBpZiAoIWNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY3JlYXRlRGVmYXVsdENvbnRleHQoKVxuICB9XG5cbiAgcmV0dXJuIGNvbnRleHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGVmYXVsdENvbnRleHRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvc3R5bGUvY3JlYXRlRGVmYXVsdENvbnRleHQuanMiLCJleHBvcnQgY29uc3QgTkVXX0lURU0gPSBcIk5FV19JVEVNXCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0JBU0UgPSBcIkNIQU5HRV9CQVNFXCI7XG5leHBvcnQgY29uc3QgQ09NUExFVEVfSVRFTSA9IFwiQ09NUExFVEVfSVRFTVwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9JVEVNID0gXCJERUxFVEVfSVRFTVwiO1xuZXhwb3J0IGNvbnN0IFJFT1JERVJfSVRFTSA9IFwiUkVPUkRFUl9JVEVNXCI7XG5cbi8vID09PT09PT09PT09PVxuLy8gVG8gSW1wbGVtZW50XG4vLyA9PT09PT09PT09PT1cblxuZXhwb3J0IGNvbnN0IFVQREFURV9JVEVNID0gXCJVUERBVEVfSVRFTVwiO1xuXG4vLyA9PT09PT09PT09PT09PT1cbi8vIEFjdGlvbiBDcmVhdG9yc1xuLy8gPT09PT09PT09PT09PT09XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdJdGVtKGNvbnRlbnQgPSBcIlwiLCBwYXJlbnQgPSBcInJvb3RcIikge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE5FV19JVEVNLFxuXHRcdHBheWxvYWQ6IHtcblx0XHRcdGNvbnRlbnQsXG5cdFx0XHRwYXJlbnRcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VCYXNlSXRlbShpZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IENIQU5HRV9CQVNFLFxuXHRcdHBheWxvYWQ6IGlkXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0ZUl0ZW0oaWQpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBDT01QTEVURV9JVEVNLFxuXHRcdHBheWxvYWQ6IGlkXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVJdGVtKGlkKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogREVMRVRFX0lURU0sXG5cdFx0cGF5bG9hZDogaWRcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlb3JkZXJJdGVtKHBhcmVudElELCBvbGRJbmRleCwgbmV3SW5kZXgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBSRU9SREVSX0lURU0sXG5cdFx0cGF5bG9hZDoge1xuXHRcdFx0cGFyZW50SUQsXG5cdFx0XHRvbGRJbmRleCxcblx0XHRcdG5ld0luZGV4XG5cdFx0fVxuXHR9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCwgTXVpVGhlbWVQcm92aWRlciB9IGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcydcbmltcG9ydCB7IGdldERlZmF1bHRDb250ZXh0IH0gZnJvbSAnLi9zdHlsZS9jcmVhdGVEZWZhdWx0Q29udGV4dCdcblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoJ0FwcCcsIHRoZW1lID0+ICh7XG4gICdAZ2xvYmFsJzoge1xuICAgIGh0bWw6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxuICAgICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgICAgV2Via2l0Rm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJywgLy8gQW50aWFsaWFzaW5nLlxuICAgICAgTW96T3N4Rm9udFNtb290aGluZzogJ2dyYXlzY2FsZScgLy8gQW50aWFsaWFzaW5nLlxuICAgIH0sXG4gICAgYm9keToge1xuICAgICAgbWFyZ2luOiAwXG4gICAgfSxcbiAgICBhOiB7XG4gICAgICBjb2xvcjogJ2luaGVyaXQnXG4gICAgfVxuICB9XG59KSlcblxubGV0IEFwcFdyYXBwZXIgPSBwcm9wcyA9PiA8ZGl2Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cblxuQXBwV3JhcHBlciA9IHdpdGhTdHlsZXMoc3R5bGVTaGVldCkoQXBwV3JhcHBlcilcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTLlxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKVxuICAgIGlmIChqc3NTdHlsZXMgJiYganNzU3R5bGVzLnBhcmVudE5vZGUpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGpzc1N0eWxlcylcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgc3R5bGVNYW5hZ2VyLCB0aGVtZSB9ID0gZ2V0RGVmYXVsdENvbnRleHQoKVxuICAgIHJldHVybiAoXG4gICAgICA8TXVpVGhlbWVQcm92aWRlciBzdHlsZU1hbmFnZXI9e3N0eWxlTWFuYWdlcn0gdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPEFwcFdyYXBwZXI+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQXBwV3JhcHBlcj5cbiAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICApXG4gIH1cbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL0FwcC5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBTb3J0YWJsZUhhbmRsZSB9IGZyb20gXCJyZWFjdC1zb3J0YWJsZS1ob2NcIjtcbmltcG9ydCB7IExpc3RJdGVtLCBMaXN0SXRlbVRleHQgfSBmcm9tIFwibWF0ZXJpYWwtdWkvTGlzdFwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCJtYXRlcmlhbC11aS9DaGVja2JveFwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b25cIjtcbmltcG9ydCBSZW9yZGVyIGZyb20gXCJtYXRlcmlhbC11aS1pY29ucy9SZW9yZGVyXCI7XG5pbXBvcnQgRGVsZXRlRm9yZXZlciBmcm9tIFwibWF0ZXJpYWwtdWktaWNvbnMvRGVsZXRlRm9yZXZlclwiO1xuaW1wb3J0IEZvcm1hdExpc3RCdWxsZXRlZCAgZnJvbSBcIm1hdGVyaWFsLXVpLWljb25zL0Zvcm1hdExpc3RCdWxsZXRlZFwiO1xuaW1wb3J0IHsgYmxhY2ssIGdyZXksIGxpZ2h0Qmx1ZSwgd2hpdGUgfSBmcm9tIFwibWF0ZXJpYWwtdWkvY29sb3JzXCI7XG5cbmNvbnN0IERyYWdIYW5kbGUgPSBTb3J0YWJsZUhhbmRsZSgocHJvcHMpID0+XG5cdFx0PHNwYW4gc3R5bGU9e3Byb3BzLmNvbXBsZXRlU3R5bGV9PlxuXHRcdDxSZW9yZGVyIC8+XG5cdFx0PC9zcGFuPlxuKTtcblxuXG5jb25zdCBCYXNlTGlzdEl0ZW0gPSBwcm9wcyA9PiB7XG5cdGNvbnN0IGl0ZW0gPSBwcm9wcy52YWx1ZTtcblxuXHRjb25zdCBpbmNvbXBsZXRlTGlzdFN0eWxlID0geyBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0Qmx1ZVsyMDBdIH07XG5cdGNvbnN0IGNvbXBsZXRlTGlzdFN0eWxlID0geyBiYWNrZ3JvdW5kQ29sb3I6IGdyZXlbMzAwXSB9O1xuXHRjb25zdCBsaXN0SXRlbVN0eWxlID0gaXRlbS5jb21wbGV0ZVxuXHRcdD8gY29tcGxldGVMaXN0U3R5bGVcblx0XHQ6IGluY29tcGxldGVMaXN0U3R5bGU7XG5cdGNvbnN0IGNvbXBsZXRlR3JleSA9IGdyZXlbNTAwXTtcblx0Y29uc3QgY29tcGxldGVMaW5lU3R5bGUgPSBpdGVtLmNvbXBsZXRlXG5cdFx0PyB7IGNvbG9yOiBjb21wbGV0ZUdyZXksIHRleHREZWNvcmF0aW9uOiBcImxpbmUtdGhyb3VnaFwiIH1cblx0XHQ6IHt9O1xuXHRjb25zdCBjb21wbGV0ZVN0eWxlID0gaXRlbS5jb21wbGV0ZSA/IHsgY29sb3I6IGNvbXBsZXRlR3JleSB9IDoge307XG5cblxuXHRmdW5jdGlvbiBjb21wbGV0ZURpc3BsYXkoKSB7XG5cdFx0dmFyIGNvbXBsZXRlZCA9IGl0ZW0uY29tcGxldGVDaGlsZHJlbi5sZW5ndGg7XG5cdFx0dmFyIHRvdGFsID0gY29tcGxldGVkICsgaXRlbS5pbmNvbXBsZXRlQ2hpbGRyZW4ubGVuZ3RoO1xuXHRcdGlmICh0b3RhbCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0c3R5bGU9e2NvbXBsZXRlU3R5bGV9XG5cdFx0XHRcdD57YCggJHtjb21wbGV0ZWR9IC8gJHt0b3RhbH0gY29tcGxldGUpYH08L3NwYW4+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNvbnRlbnQoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzcGFuIHN0eWxlPXtjb21wbGV0ZUxpbmVTdHlsZX0+XG5cdFx0XHRcdHtpdGVtLmNvbnRlbnR9XG5cdFx0XHQ8L3NwYW4+XG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PExpc3RJdGVtIGRpdmlkZXI9e3RydWV9IHN0eWxlPXtsaXN0SXRlbVN0eWxlfT5cblx0XHRcdDxEcmFnSGFuZGxlXG5cdFx0XHRcdGNvbXBsZXRlU3R5bGU9e2NvbXBsZXRlU3R5bGV9XG5cdFx0XHQvPlxuXHRcdFx0PENoZWNrYm94XG5cdFx0XHRcdGNoZWNrZWQ9e2l0ZW0uY29tcGxldGV9XG5cdFx0XHRcdG9uQ2xpY2s9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyKGl0ZW0uaWQpfVxuXHRcdFx0XHRzdHlsZT17Y29tcGxldGVTdHlsZX1cblx0XHRcdC8+XG5cblx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT17Y29udGVudCgpfSBzZWNvbmRhcnk9e2NvbXBsZXRlRGlzcGxheSgpfSAvPlxuXG5cdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXtwcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXIoaXRlbS5pZCl9XG5cdFx0XHRcdHN0eWxlPXtjb21wbGV0ZVN0eWxlfVxuXHRcdFx0PlxuXHRcdFx0XHQ8Rm9ybWF0TGlzdEJ1bGxldGVkIC8+XG5cdFx0XHQ8L0ljb25CdXR0b24+XG5cblx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdG9uQ2xpY2s9e3Byb3BzLmRlbGV0ZUl0ZW1Db21wb3NlcihpdGVtLmlkKX1cblx0XHRcdFx0c3R5bGU9e2NvbXBsZXRlU3R5bGV9XG5cdFx0XHQ+XG5cdFx0XHRcdDxEZWxldGVGb3JldmVyIC8+XG5cdFx0XHQ8L0ljb25CdXR0b24+XG5cdFx0PC9MaXN0SXRlbT5cblx0KTtcbn07XG5cbkJhc2VMaXN0SXRlbS5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZUxpc3RJdGVtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RJdGVtLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvQnV0dG9uJ1xuaW1wb3J0IERpYWxvZywge1xuICBEaWFsb2dUaXRsZSxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nQ29udGVudFRleHQsXG4gIERpYWxvZ0FjdGlvbnNcbn0gZnJvbSAnbWF0ZXJpYWwtdWkvRGlhbG9nJ1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnbWF0ZXJpYWwtdWkvVHlwb2dyYXBoeSdcbmltcG9ydCBBcHAgZnJvbSAnLi4vdG9kby1saXN0L3NyYy9BcHAuanMnXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi4vdG9kby1saXN0L3NyYy9pbmRleC5qcydcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXI6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHBhZGRpbmdUb3A6IDIwMFxuICB9XG59XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2VcbiAgfTtcblxuICBoYW5kbGVSZXF1ZXN0Q2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH0pXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiB0cnVlXG4gICAgfSlcbiAgfTtcblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QXBwPlxuICAgICAgICA8VG9kb0xpc3QgLz5cbiAgICAgIDwvQXBwPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdG9kby5qcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG4vLyBpbXBvcnQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIGZyb20gXCIuL3JlZ2lzdGVyU2VydmljZVdvcmtlclwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCByZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcbmltcG9ydCBSZWR1eFByb21pc2UgZnJvbSBcInJlZHV4LXByb21pc2VcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBUb2RvQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9Ub2RvQ29udGFpbmVyLmpzJ1xuXG5cbmNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlV2l0aERldlRvb2xzKFxuXHRhcHBseU1pZGRsZXdhcmUoUmVkdXhQcm9taXNlKVxuKShjcmVhdGVTdG9yZSk7XG5cbmNvbnN0IEJvaWxlciA9ICgpID0+XG5cdDxQcm92aWRlciBzdG9yZT17Y3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZShyZWR1Y2Vycyl9PlxuXHRcdDxUb2RvQ29udGFpbmVyIC8+XG5cdDwvUHJvdmlkZXI+O1xuXG4vLyBSZWFjdERPTS5yZW5kZXIoPEJvaWxlciAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcbi8vIHJlZ2lzdGVyU2VydmljZVdvcmtlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBCb2lsZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2luZGV4LmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgaXRlbXMgZnJvbSBcIi4vaXRlbXNfcmVkdWNlci5qc1wiO1xuaW1wb3J0IGJhc2VJdGVtIGZyb20gXCIuL2Jhc2VJdGVtX3JlZHVjZXIuanNcIjtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuXHRpdGVtcyxcblx0YmFzZUl0ZW1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBORVdfSVRFTSwgQ09NUExFVEVfSVRFTSwgREVMRVRFX0lURU0sIFJFT1JERVJfSVRFTSB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIGl0ZW1zKHN0YXRlID0gc2VlZERhdGEsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBORVdfSVRFTTpcblx0XHRcdHZhciBuZXdJRCA9IHJhbmRvbUlEKCk7XG5cdFx0XHR2YXIgcGFyZW50SUQgPSBhY3Rpb24ucGF5bG9hZC5wYXJlbnQ7XG5cdFx0XHR2YXIgbmV3SXRlbSA9IHtcblx0XHRcdFx0W25ld0lEXToge1xuXHRcdFx0XHRcdGlkOiBuZXdJRCxcblx0XHRcdFx0XHRjb250ZW50OiBhY3Rpb24ucGF5bG9hZC5jb250ZW50LFxuXHRcdFx0XHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRcdFx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRcdFx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdFx0XHRcdHBhcmVudDogcGFyZW50SURcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHZhciBuZXdQYXJlbnQgPSB7IFtwYXJlbnRJRF06IGFkZENoaWxkKHN0YXRlW3BhcmVudElEXSwgbmV3SUQpIH07XG5cdFx0XHR2YXIgbmV3U3RhdGUgPSBfLm1lcmdlKHt9LCBzdGF0ZSwgbmV3SXRlbSwgbmV3UGFyZW50KTtcblx0XHRcdHJldHVybiBuZXdTdGF0ZTtcblxuXHRcdGNhc2UgQ09NUExFVEVfSVRFTTpcblx0XHRcdHZhciBpZCA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0dmFyIG5ld1N0YXRlID0gXy5tZXJnZSh7fSwgc3RhdGUpO1xuXHRcdFx0dmFyIG5ld0l0ZW0gPSB7IFtpZF06IG5ld1N0YXRlW2lkXSB9O1xuXHRcdFx0dmFyIHBhcmVudElEID0gbmV3SXRlbVtpZF0ucGFyZW50O1xuXHRcdFx0bmV3SXRlbVtpZF0uY29tcGxldGUgPSAhbmV3SXRlbVtpZF0uY29tcGxldGU7XG5cdFx0XHRpZiAobmV3SXRlbVtpZF0uY29tcGxldGUpIHtcblx0XHRcdFx0Xy5wdWxsKG5ld1N0YXRlW3BhcmVudElEXS5pbmNvbXBsZXRlQ2hpbGRyZW4sIGlkKTtcblx0XHRcdFx0bmV3U3RhdGVbcGFyZW50SURdLmNvbXBsZXRlQ2hpbGRyZW4udW5zaGlmdChpZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfLnB1bGwobmV3U3RhdGVbcGFyZW50SURdLmNvbXBsZXRlQ2hpbGRyZW4sIGlkKTtcblx0XHRcdFx0bmV3U3RhdGVbcGFyZW50SURdLmluY29tcGxldGVDaGlsZHJlbi5wdXNoKGlkKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBfLm1lcmdlKG5ld1N0YXRlLCBuZXdJdGVtKTtcblxuXHRcdGNhc2UgREVMRVRFX0lURU06XG5cdFx0XHR2YXIgaWQgPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHZhciBuZXdTdGF0ZSA9IF8ubWVyZ2Uoe30sIHN0YXRlKTtcblx0XHRcdHZhciBwYXJlbnQgPSBzdGF0ZVtpZF0ucGFyZW50O1xuXHRcdFx0bmV3U3RhdGUgPSBfLm9taXQobmV3U3RhdGUsIGdlbmVyYXRlQ2hpbGRMaXN0KHN0YXRlLCBpZCkpO1xuXHRcdFx0bmV3U3RhdGVbcGFyZW50XS5jb21wbGV0ZUNoaWxkcmVuID0gXy5maWx0ZXIoXG5cdFx0XHRcdG5ld1N0YXRlW3BhcmVudF0uY29tcGxldGVDaGlsZHJlbixcblx0XHRcdFx0biA9PiBuICE9PSBpZFxuXHRcdFx0KTtcblx0XHRcdG5ld1N0YXRlW3BhcmVudF0uaW5jb21wbGV0ZUNoaWxkcmVuID0gXy5maWx0ZXIoXG5cdFx0XHRcdG5ld1N0YXRlW3BhcmVudF0uaW5jb21wbGV0ZUNoaWxkcmVuLFxuXHRcdFx0XHRuID0+IG4gIT09IGlkXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIG5ld1N0YXRlO1xuXG5cdFx0Y2FzZSBSRU9SREVSX0lURU06XG5cdFx0XHR2YXIgbmV3U3RhdGUgPSBfLm1lcmdlKHt9LCBzdGF0ZSk7XG5cdFx0XHR2YXIgcGFyZW50SUQgPSBhY3Rpb24ucGF5bG9hZC5wYXJlbnRJRDtcblx0XHRcdG5ld1N0YXRlW3BhcmVudElEXS5pbmNvbXBsZXRlQ2hpbGRyZW4gPSByZW9yZGVyKFxuXHRcdFx0XHRuZXdTdGF0ZVtwYXJlbnRJRF0uaW5jb21wbGV0ZUNoaWxkcmVuLFxuXHRcdFx0XHRhY3Rpb24ucGF5bG9hZC5vbGRJbmRleCxcblx0XHRcdFx0YWN0aW9uLnBheWxvYWQubmV3SW5kZXhcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gbmV3U3RhdGU7XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZW1zO1xuXG4vLyAvLyBTdHJ1Y3R1cmUgb2YgSXRlbXNcbi8vIGlkOiB7XG4vLyBcdGNvbnRlbnQ6U3RyaW5nLFxuLy8gXHRwYXJlbnQ6aWQsXG4vLyBcdGNoaWxkcmVuOltpZCxpZCxpZC4uLl1cbi8vIH1cblxuZnVuY3Rpb24gZ2VuZXJhdGVDaGlsZExpc3Qoc3RhdGUsIGJhc2VJRCkge1xuXHR2YXIgbGlzdCA9IFtiYXNlSURdO1xuXHRsaXN0ID0gbGlzdFxuXHRcdC5jb25jYXQoc3RhdGVbYmFzZUlEXS5jb21wbGV0ZUNoaWxkcmVuKVxuXHRcdC5jb25jYXQoc3RhdGVbYmFzZUlEXS5pbmNvbXBsZXRlQ2hpbGRyZW4pO1xuXHRmb3IgKHZhciBpID0gMTsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRsaXN0ID0gbGlzdFxuXHRcdFx0LmNvbmNhdChzdGF0ZVtsaXN0W2ldXS5jb21wbGV0ZUNoaWxkcmVuKVxuXHRcdFx0LmNvbmNhdChzdGF0ZVtsaXN0W2ldXS5pbmNvbXBsZXRlQ2hpbGRyZW4pO1xuXHR9XG5cdHJldHVybiBsaXN0O1xufVxuXG5mdW5jdGlvbiByYW5kb21JRCgpIHtcblx0cmV0dXJuIF8ucmFuZG9tKDAsIDY1NTAwLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIGFkZENoaWxkKGl0ZW0sIGNoaWxkKSB7XG5cdHJldHVybiBfLm1lcmdlKHt9LCBpdGVtLCB7XG5cdFx0aW5jb21wbGV0ZUNoaWxkcmVuOiBpdGVtLmluY29tcGxldGVDaGlsZHJlbi5jb25jYXQoY2hpbGQpXG5cdH0pO1xufVxuXG5mdW5jdGlvbiByZW9yZGVyKGFyciwgb2xkSW5kZXgsIG5ld0luZGV4KSB7XG5cdHZhciByZW1vdmVkID0gW107XG5cdGlmIChvbGRJbmRleCA9PT0gMCkge1xuXHRcdHJlbW92ZWQgPSBhcnIuc2xpY2UoMSk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGJlZm9yZSA9IGFyci5zbGljZSgwLCBvbGRJbmRleCk7XG5cdFx0dmFyIGFmdGVyID0gYXJyLnNsaWNlKG9sZEluZGV4ICsgMSwgYXJyLmxlbmd0aCk7XG5cdFx0cmVtb3ZlZCA9IFsuLi5iZWZvcmUsIC4uLmFmdGVyXTtcblx0fVxuXG5cdGlmIChuZXdJbmRleCA9PT0gMCkge1xuXHRcdHJldHVybiBbYXJyW29sZEluZGV4XSwgLi4ucmVtb3ZlZF07XG5cdH0gZWxzZSBpZiAobmV3SW5kZXggPT09IGFyci5sZW5ndGggLSAxKSB7XG5cdFx0cmV0dXJuIFsuLi5yZW1vdmVkLCBhcnJbb2xkSW5kZXhdXTtcblx0fSBlbHNlIHtcblx0XHRiZWZvcmUgPSByZW1vdmVkLnNsaWNlKDAsIG5ld0luZGV4KTtcblx0XHRhZnRlciA9IHJlbW92ZWQuc2xpY2UobmV3SW5kZXgsIHJlbW92ZWQubGVuZ3RoKTtcblx0XHRyZXR1cm4gWy4uLmJlZm9yZSwgYXJyW29sZEluZGV4XSwgLi4uYWZ0ZXJdO1xuXHR9XG59XG5cbmNvbnN0IHNlZWREYXRhID0ge1xuXHQxMDAxOiB7XG5cdFx0aWQ6IDEwMDEsXG5cdFx0Y29udGVudDogXCJSYW5kb20gc2VlZCAxXCIsXG5cdFx0Y29tcGxldGU6IGZhbHNlLFxuXHRcdHBhcmVudDogXCJyb290XCIsXG5cdFx0Y29tcGxldGVDaGlsZHJlbjogW10sXG5cdFx0aW5jb21wbGV0ZUNoaWxkcmVuOiBbMTAwNF1cblx0fSxcblx0MTAwMjoge1xuXHRcdGlkOiAxMDAyLFxuXHRcdGNvbnRlbnQ6IFwiUmFuZG9tIHNlZWQgMlwiLFxuXHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRwYXJlbnQ6IFwicm9vdFwiLFxuXHRcdGNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdGluY29tcGxldGVDaGlsZHJlbjogWzEwMDNdXG5cdH0sXG5cdDEwMDM6IHtcblx0XHRpZDogMTAwMyxcblx0XHRjb250ZW50OiBcIlJhbmRvbSBzZWVkIDNcIixcblx0XHRjb21wbGV0ZTogZmFsc2UsXG5cdFx0cGFyZW50OiAxMDAyLFxuXHRcdGNvbXBsZXRlQ2hpbGRyZW46IFtdLFxuXHRcdGluY29tcGxldGVDaGlsZHJlbjogW11cblx0fSxcblx0MTAwNDoge1xuXHRcdGlkOiAxMDA0LFxuXHRcdGNvbnRlbnQ6IFwiUmFuZG9tIHNlZWQgNFwiLFxuXHRcdGNvbXBsZXRlOiBmYWxzZSxcblx0XHRwYXJlbnQ6IDEwMDEsXG5cdFx0Y29tcGxldGVDaGlsZHJlbjogW10sXG5cdFx0aW5jb21wbGV0ZUNoaWxkcmVuOiBbXVxuXHR9LFxuXHQxMDA1OiB7XG5cdFx0aWQ6IDEwMDUsXG5cdFx0Y29udGVudDogXCJSYW5kb20gc2VlZCA1XCIsXG5cdFx0Y29tcGxldGU6IHRydWUsXG5cdFx0cGFyZW50OiBcInJvb3RcIixcblx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbXSxcblx0XHRpbmNvbXBsZXRlQ2hpbGRyZW46IFtdXG5cdH0sXG5cdHJvb3Q6IHtcblx0XHRjb21wbGV0ZUNoaWxkcmVuOiBbMTAwNV0sXG5cdFx0aW5jb21wbGV0ZUNoaWxkcmVuOiBbMTAwMSwgMTAwMl1cblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvcmVkdWNlcnMvaXRlbXNfcmVkdWNlci5qcyIsImltcG9ydCB7IENIQU5HRV9CQVNFIH0gZnJvbSBcIi4uL2FjdGlvbnMvXCI7XG5cbmZ1bmN0aW9uIGJhc2VJdGVtKHN0YXRlID0gXCJyb290XCIsIGFjdGlvbikge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBDSEFOR0VfQkFTRTpcblx0XHRcdHJldHVybiBhY3Rpb24ucGF5bG9hZDtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VJdGVtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9yZWR1Y2Vycy9iYXNlSXRlbV9yZWR1Y2VyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcblx0bmV3SXRlbSxcblx0Y2hhbmdlQmFzZUl0ZW0sXG5cdGNvbXBsZXRlSXRlbSxcblx0ZGVsZXRlSXRlbSxcblx0cmVvcmRlckl0ZW1cbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RJdGVtL3N0eWxlLmNzc1wiO1xuaW1wb3J0IExpc3RIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdEhlYWRlci5qc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIm1hdGVyaWFsLXVpL0NhcmRcIjtcblxuY2xhc3MgVG9kb0NvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuZXdJdGVtOiBcIlwiXG5cdFx0fTtcblx0XHR0aGlzLmlucHV0VXBkYXRlID0gdGhpcy5pbnB1dFVwZGF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMubmV3SXRlbUFjdGlvbiA9IHRoaXMubmV3SXRlbUFjdGlvbi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2hhbmdlQmFzZUNvbXBvc2VyID0gdGhpcy5jaGFuZ2VCYXNlQ29tcG9zZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNvbXBsZXRlSXRlbUNvbXBvc2VyID0gdGhpcy5jb21wbGV0ZUl0ZW1Db21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZGVsZXRlSXRlbUNvbXBvc2VyID0gdGhpcy5kZWxldGVJdGVtQ29tcG9zZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlb3JkZXJJdGVtQ29tcG9zZXIgPSB0aGlzLnJlb3JkZXJJdGVtQ29tcG9zZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmdlbmVyYXRlQ29tcGxldGUgPSB0aGlzLmdlbmVyYXRlQ29tcGxldGUuYmluZCh0aGlzKTtcblx0fVxuXG5cdGlucHV0VXBkYXRlKGV2ZW50KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG5ld0l0ZW06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcblx0fVxuXG5cdG5ld0l0ZW1BY3Rpb24oY29udGVudCkge1xuXHRcdHRoaXMucHJvcHMubmV3SXRlbShjb250ZW50LCB0aGlzLnByb3BzLmJhc2VJdGVtKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgbmV3SXRlbTogXCJcIiB9KTtcblx0fVxuXG5cdGNoYW5nZUJhc2VDb21wb3NlcihpZCkge1xuXHRcdHZhciBjaGFuZ2VCYXNlSXRlbSA9IHRoaXMucHJvcHMuY2hhbmdlQmFzZUl0ZW07XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0Y2hhbmdlQmFzZUl0ZW0oaWQpO1xuXHRcdH07XG5cdH1cblxuXHRkZWxldGVJdGVtQ29tcG9zZXIoaWQpIHtcblx0XHRsZXQgZGVsZXRlSXRlbURpc3BhdGNoID0gdGhpcy5wcm9wcy5kZWxldGVJdGVtO1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdGRlbGV0ZUl0ZW1EaXNwYXRjaChpZCk7XG5cdFx0fTtcblx0fVxuXG5cdGNvbXBsZXRlSXRlbUNvbXBvc2VyKGlkKSB7XG5cdFx0bGV0IGNvbXBsZXRlSXRlbURpc3BhdGNoID0gdGhpcy5wcm9wcy5jb21wbGV0ZUl0ZW07XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcGxldGVJdGVtRGlzcGF0Y2goaWQpO1xuXHRcdH07XG5cdH1cblxuXHRyZW9yZGVySXRlbUNvbXBvc2VyKGlkLCBvbGRJbmRleCwgbmV3SW5kZXgpIHtcblx0XHRsZXQgcmVvcmRlckl0ZW1EaXNwYXRjaCA9IHRoaXMucHJvcHMucmVvcmRlckl0ZW07XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVvcmRlckl0ZW1EaXNwYXRjaChpZCwgb2xkSW5kZXgsIG5ld0luZGV4KTtcblx0XHR9O1xuXHR9XG5cblx0Z2VuZXJhdGVDb21wbGV0ZSgpIHtcblx0XHR2YXIgY29tcGxldGVDb3VudCA9IHRoaXMucHJvcHMuaXRlbXNbdGhpcy5wcm9wcy5iYXNlSXRlbV1cblx0XHRcdC5jb21wbGV0ZUNoaWxkcmVuLmxlbmd0aDtcblx0XHR2YXIgdG90YWxDb3VudCA9XG5cdFx0XHR0aGlzLnByb3BzLml0ZW1zW3RoaXMucHJvcHMuYmFzZUl0ZW1dLmluY29tcGxldGVDaGlsZHJlbi5sZW5ndGggK1xuXHRcdFx0Y29tcGxldGVDb3VudDtcblx0XHRyZXR1cm4gYCggJHtjb21wbGV0ZUNvdW50fSAvICR7dG90YWxDb3VudH0gQ29tcGxldGUgKWA7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIGN1cnJlbnRJdGVtID0gdGhpcy5wcm9wcy5pdGVtc1t0aGlzLnByb3BzLmJhc2VJdGVtXTtcblx0XHR2YXIgcGFyZW50SXRlbSA9IHRoaXMucHJvcHMuaXRlbXNbY3VycmVudEl0ZW0ucGFyZW50XTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PENhcmQgc3R5bGU9e3sgd2lkdGg6IFwiODV2d1wiLCBtYXJnaW46IFwiYXV0b1wiLCBtYXJnaW5Ub3A6IFwiMTZweFwiIH19PlxuXHRcdFx0XHQ8TGlzdEhlYWRlclxuXHRcdFx0XHRcdGJhc2VJdGVtPXt0aGlzLnByb3BzLmJhc2VJdGVtfVxuXHRcdFx0XHRcdGJhc2VJdGVtVGV4dD17Y3VycmVudEl0ZW0uY29udGVudH1cblx0XHRcdFx0XHRjdXJyZW50UGFyZW50PXtjdXJyZW50SXRlbS5wYXJlbnR9XG5cdFx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXt0aGlzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0XHRjb3VudGVyVGV4dD17dGhpcy5nZW5lcmF0ZUNvbXBsZXRlKCl9XG5cdFx0XHRcdFx0aXRlbXM9e3RoaXMucHJvcHMuaXRlbXN9XG5cdFx0XHRcdFx0bmV3SXRlbUFjdGlvbj17dGhpcy5uZXdJdGVtQWN0aW9ufVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8TGlzdFxuXHRcdFx0XHRcdGxpc3Q9e3RoaXMucHJvcHMuaXRlbXN9XG5cdFx0XHRcdFx0YmFzZUl0ZW09e3RoaXMucHJvcHMuYmFzZUl0ZW19XG5cdFx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXt0aGlzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0XHRkZWxldGVJdGVtQ29tcG9zZXI9e3RoaXMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdGNvbXBsZXRlSXRlbUNvbXBvc2VyPXt0aGlzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdHJlb3JkZXJJdGVtQ29tcG9zZXI9e3RoaXMucmVvcmRlckl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0Lz5cblx0XHRcdDwvQ2FyZD5cblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IGl0ZW1zLCBiYXNlSXRlbSB9KSB7XG5cdHJldHVybiB7IGl0ZW1zLCBiYXNlSXRlbSB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcblx0cmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhcblx0XHR7IG5ld0l0ZW0sIGNoYW5nZUJhc2VJdGVtLCBjb21wbGV0ZUl0ZW0sIGRlbGV0ZUl0ZW0sIHJlb3JkZXJJdGVtIH0sXG5cdFx0ZGlzcGF0Y2hcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVG9kb0NvbnRhaW5lcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbnRhaW5lcnMvVG9kb0NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgSW5jb21wbGV0ZUxpc3QgZnJvbSBcIi4vSW5jb21wbGV0ZUxpc3QuanNcIjtcbmltcG9ydCBDb21wbGV0ZUxpc3QgZnJvbSBcIi4vQ29tcGxldGVMaXN0LmpzXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuXG5cbmNvbnN0IHN0eWxlU2hlZXQgPSBjcmVhdGVTdHlsZVNoZWV0KFwiTGlzdFwiLCB0aGVtZSA9PiAoe1xuXHRjb250YWluZXI6IHtcblx0XHR3aWR0aDogXCI4NXZ3XCIsXG5cdFx0bWFyZ2luOiBcImF1dG9cIlxuXHR9XG59KSk7XG5cbmNvbnN0IExpc3QgPSBwcm9wcyA9PiB7XG5cdGNvbnN0IGl0ZW1zTGlzdCA9IHByb3BzLmxpc3Q7XG5cdGNvbnN0IGJhc2VJdGVtID0gcHJvcHMuYmFzZUl0ZW07XG5cdGxldCBjb21wbGV0ZUxpc3RJdGVtcyA9IGl0ZW1zTGlzdFtiYXNlSXRlbV0uY29tcGxldGVDaGlsZHJlbjtcblx0bGV0IGluY29tcGxldGVMaXN0SXRlbXMgPSBpdGVtc0xpc3RbYmFzZUl0ZW1dLmluY29tcGxldGVDaGlsZHJlbjtcblxuXHRjb21wbGV0ZUxpc3RJdGVtcyA9IHBvcHVsYXRlTGlzdChjb21wbGV0ZUxpc3RJdGVtcyk7XG5cdGluY29tcGxldGVMaXN0SXRlbXMgPSBwb3B1bGF0ZUxpc3QoaW5jb21wbGV0ZUxpc3RJdGVtcyk7XG5cblx0ZnVuY3Rpb24gcG9wdWxhdGVMaXN0KGxpc3RBcnIpIHtcblx0XHRyZXR1cm4gbGlzdEFyci5tYXAobGlzdElEID0+IGl0ZW1zTGlzdFtsaXN0SURdKTtcblx0fVxuXG5cdGNvbnN0IGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cblx0XHRcdDxJbmNvbXBsZXRlTGlzdFxuXHRcdFx0XHRpdGVtcz17aW5jb21wbGV0ZUxpc3RJdGVtc31cblx0XHRcdFx0cGFyZW50SUQ9e3Byb3BzLmJhc2VJdGVtfVxuXHRcdFx0XHRyZW5kZXJDaGlsZHJlbj17dHJ1ZX1cblx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXtwcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdHJlb3JkZXJJdGVtQ29tcG9zZXI9e3Byb3BzLnJlb3JkZXJJdGVtQ29tcG9zZXJ9XG5cdFx0XHQvPlxuXHRcdFx0PENvbXBsZXRlTGlzdFxuXHRcdFx0XHRpdGVtcz17Y29tcGxldGVMaXN0SXRlbXN9XG5cdFx0XHRcdHBhcmVudElEPXtwcm9wcy5iYXNlSXRlbX1cblx0XHRcdFx0cmVuZGVyQ2hpbGRyZW49e3RydWV9XG5cdFx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRkZWxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmRlbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRyZW9yZGVySXRlbUNvbXBvc2VyPXtwcm9wcy5yZW9yZGVySXRlbUNvbXBvc2VyfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbkxpc3QucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVTaGVldCkoTGlzdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIGltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7XG5cdFNvcnRhYmxlQ29udGFpbmVyLFxuXHRTb3J0YWJsZUVsZW1lbnRcbn0gZnJvbSBcInJlYWN0LXNvcnRhYmxlLWhvY1wiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL0xpc3RJdGVtLmpzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwibWF0ZXJpYWwtdWkvTGlzdFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJJbmNvbXBsZXRlTGlzdFwiLCB0aGVtZSA9PiAoe1xuXHRjb250YWluZXI6IHtcblx0XHRsaXN0U3R5bGU6IFwibm9uZVwiLFxuXHRcdHBhZGRpbmc6IDAsXG5cdFx0bWFyZ2luOiAwXG5cdH0sXG5cdHJvb3Q6IHtcblx0XHRwYWRkaW5nOiAwXG5cdH1cbn0pKTtcblxuXG5jb25zdCBTb3J0YWJsZUxpc3QgPSBTb3J0YWJsZUNvbnRhaW5lcigocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8TGlzdCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzRm9yTGlzdH0+XG5cdFx0XHR7cHJvcHMuaXRlbXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8U29ydGFibGVMaXN0SXRlbVxuXHRcdFx0XHRcdFx0a2V5PXtgaXRlbS0ke3ZhbHVlLmlkfWB9XG5cdFx0XHRcdFx0XHRpbmRleD17aW5kZXh9XG5cdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9KX1cblx0XHQ8L0xpc3Q+XG5cdCk7XG59KTtcblxuY29uc3QgU29ydGFibGVMaXN0SXRlbSA9IFNvcnRhYmxlRWxlbWVudCgocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8TGlzdEl0ZW1cblx0XHRcdHZhbHVlPXtwcm9wcy52YWx1ZX1cblx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0ZGVsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRjb21wbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0Lz5cblx0KTtcbn0pO1xuXG5jb25zdCBJbmNvbXBsZXRlTGlzdCA9IHByb3BzID0+IHtcblx0Y29uc3QgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXM7XG5cblxuXHRmdW5jdGlvbiBoYW5kbGVTb3J0KHsgb2xkSW5kZXgsIG5ld0luZGV4LH0pIHtcblx0XHRwcm9wcy5yZW9yZGVySXRlbUNvbXBvc2VyKHByb3BzLnBhcmVudElELCBvbGRJbmRleCwgbmV3SW5kZXgpKCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8U29ydGFibGVMaXN0XG5cdFx0XHRcdGl0ZW1zPXtwcm9wcy5pdGVtc31cblx0XHRcdFx0dXNlRHJhZ0hhbmRsZT17dHJ1ZX1cblx0XHRcdFx0b25Tb3J0RW5kPXtoYW5kbGVTb3J0fVxuXHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0ZGVsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5kZWxldGVJdGVtQ29tcG9zZXJ9XG5cdFx0XHRcdGNvbXBsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0Y2xhc3NGb3JMaXN0PXtjbGFzc2VzLnJvb3R9XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuSW5jb21wbGV0ZUxpc3QucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVTaGVldCkoSW5jb21wbGV0ZUxpc3QpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0luY29tcGxldGVMaXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL0xpc3RJdGVtLmpzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwibWF0ZXJpYWwtdWkvTGlzdFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJDb21wbGV0ZUxpc3RcIiwgdGhlbWUgPT4gKHtcblx0Y29udGFpbmVyOiB7XG5cdFx0bWFyZ2luOiAwLFxuXHRcdHBhZGRpbmc6IDBcblx0fVxufSkpO1xuXG5jb25zdCBDb21wbGV0ZUxpc3QgPSBwcm9wcyA9PiB7XG5cdGNvbnN0IGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzO1xuXG5cdHJldHVybiAoXG5cdFx0PExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG5cdFx0XHR7cHJvcHMuaXRlbXMubWFwKHZhbHVlID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8TGlzdEl0ZW1cblx0XHRcdFx0XHRcdGtleT17YGl0ZW0tJHt2YWx1ZS5pZH1gfVxuXHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXtwcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRkZWxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmRlbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0XHRcdGNvbXBsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC9MaXN0PlxuXHQpO1xufTtcblxuQ29tcGxldGVMaXN0LnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlU2hlZXQpKENvbXBsZXRlTGlzdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvQ29tcGxldGVMaXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJtYXRlcmlhbC11aS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgRGl2aWRlciBmcm9tIFwibWF0ZXJpYWwtdWkvRGl2aWRlclwiO1xuaW1wb3J0IENoZXZyb25SaWdodCBmcm9tIFwibWF0ZXJpYWwtdWktaWNvbnMvQ2hldnJvblJpZ2h0XCI7XG5pbXBvcnQgTmV3SXRlbUZvcm0gZnJvbSBcIi4vTmV3SXRlbUZvcm0uanNcIjtcblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJIZWFkZXJcIiwgdGhlbWUgPT4gKHtcblx0dGl0bGVDb250YWluZXI6IHtcblx0XHRwYWRkaW5nOiAxNlxuXHR9LFxuXHRjcnVtYjoge1xuXHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0ZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuXHRcdGN1cnNvcjogXCJwb2ludGVyXCIsXG5cdFx0XCImOmhvdmVyXCI6IHtcblx0XHRcdHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiXG5cdFx0fVxuXHR9LFxuXHRjcnVtYkNvbnRhaW5lcjoge1xuXHRcdHBhZGRpbmc6IDE2XG5cdH1cbn0pKTtcblxuY29uc3QgTGlzdEhlYWRlciA9IHByb3BzID0+IHtcblx0Y29uc3QgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXM7XG5cblx0Y29uc3QgQnJlYWRDcnVtYiA9ICgpID0+IHtcblx0XHRsZXQgdHJhaWwgPSBbXTtcblx0XHRsZXQgY3VycmVudCA9IHByb3BzLmJhc2VJdGVtO1xuXHRcdGxldCBjb3VudGVyID0gMDtcblx0XHRpZiAoY3VycmVudCA9PT0gXCJyb290XCIpIHtcblx0XHRcdHRyYWlsID0gW1wicm9vdFwiXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2hpbGUgKHByb3BzLml0ZW1zW2N1cnJlbnRdLnBhcmVudCAhPT0gXCJyb290XCIgJiYgY291bnRlciA8IDEwKSB7XG5cdFx0XHRcdHRyYWlsID0gW2N1cnJlbnQsIC4uLnRyYWlsXTtcblx0XHRcdFx0Y3VycmVudCA9IHByb3BzLml0ZW1zW2N1cnJlbnRdLnBhcmVudDtcblx0XHRcdFx0Y291bnRlcisrO1xuXHRcdFx0fVxuXHRcdFx0dHJhaWwgPSBbXCJyb290XCIsIGN1cnJlbnQsIC4uLnRyYWlsXTtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUeXBvZ3JhcGh5IHR5cGU9e1wiYm9keTFcIn0gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc2VzLmNydW1iQ29udGFpbmVyfT5cblx0XHRcdFx0e3RyYWlsLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0a2V5PXtgYnJlYWRjcnVtYi0ke2luZGV4fWB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5jcnVtYn1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyKGl0ZW0pfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7aXRlbSA9PT0gXCJyb290XCJcblx0XHRcdFx0XHRcdFx0XHQ/IFwicm9vdFwiXG5cdFx0XHRcdFx0XHRcdFx0OiBwcm9wcy5pdGVtc1tpdGVtXS5jb250ZW50fVxuXHRcdFx0XHRcdFx0XHR7aW5kZXggPCB0cmFpbC5sZW5ndGggLSAxXG5cdFx0XHRcdFx0XHRcdFx0PyA8Q2hldnJvblJpZ2h0IC8+XG5cdFx0XHRcdFx0XHRcdFx0OiBcIlwifXtcIiBcIn1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHQpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlQ29udGFpbmVyfT5cblx0XHRcdFx0PFR5cG9ncmFwaHkgdHlwZT17XCJoZWFkbGluZVwifSBhbGlnbj17XCJjZW50ZXJcIn0+XG5cdFx0XHRcdFx0e3Byb3BzLmJhc2VJdGVtID09PSBcInJvb3RcIiA/IFwicm9vdFwiIDogcHJvcHMuYmFzZUl0ZW1UZXh0fVxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdDxUeXBvZ3JhcGh5IHR5cGU9e1wic3ViaGVhZGluZ1wifSBhbGlnbj17XCJjZW50ZXJcIn0+XG5cdFx0XHRcdFx0e3Byb3BzLmNvdW50ZXJUZXh0fVxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxEaXZpZGVyIC8+XG5cdFx0XHQ8QnJlYWRDcnVtYiAvPlxuXHRcdFx0PERpdmlkZXIgLz5cblx0XHRcdDxOZXdJdGVtRm9ybSBuZXdJdGVtQWN0aW9uPXtwcm9wcy5uZXdJdGVtQWN0aW9ufSAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuTGlzdEhlYWRlci5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShMaXN0SGVhZGVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIm1hdGVyaWFsLXVpL1RleHRGaWVsZFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwibWF0ZXJpYWwtdWkvQnV0dG9uXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwibWF0ZXJpYWwtdWkvR3JpZFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJOZXdJdGVtRm9ybVwiLCB0aGVtZSA9PiAoe1xuXHRjb250YWluZXI6IHtcblx0XHR3aWR0aDogXCI4NXZ3XCIsXG5cdFx0bWFyZ2luOiBcImF1dG9cIixcblx0XHRwYWRkaW5nQm90dG9tOiBcIjE2cHhcIixcblx0XHRwYWRkaW5nVG9wOiBcIjE2cHhcIixcblx0XHRwYWRkaW5nOiAxNixcblx0XHRib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiXG5cdH0sXG5cdHR5cGVJdGVtOiB7XG5cdFx0ZmxleEdyb3c6IDFcblx0fVxufSkpO1xuXG5jbGFzcyBOZXdJdGVtRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5ld0l0ZW06IFwiXCJcblx0XHR9O1xuXHRcdHRoaXMuaW5wdXRVcGRhdGUgPSB0aGlzLmlucHV0VXBkYXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zdWJtaXRIYW5kbGVyID0gdGhpcy5zdWJtaXRIYW5kbGVyLmJpbmQodGhpcyk7XG5cdH1cblxuXHRzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnByb3BzLm5ld0l0ZW1BY3Rpb24odGhpcy5zdGF0ZS5uZXdJdGVtKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgbmV3SXRlbTogXCJcIiB9KTtcblx0fVxuXG5cdGlucHV0VXBkYXRlKGV2ZW50KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG5ld0l0ZW06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBjbGFzc2VzID0gdGhpcy5wcm9wcy5jbGFzc2VzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEhhbmRsZXJ9PlxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBndXR0ZXI9ezI0fSBhbGlnbj17XCJjZW50ZXJcIn0+XG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBlSXRlbX0+XG5cdFx0XHRcdFx0XHRcdDxUZXh0RmllbGRcblx0XHRcdFx0XHRcdFx0XHRpZD1cIm5ld0l0ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiTmV3IEl0ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRmdWxsV2lkdGg9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubmV3SXRlbX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5pbnB1dFVwZGF0ZX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHJhaXNlZD5cblx0XHRcdFx0XHRcdFx0XHRNYWtlIGEgTmV3IEl0ZW1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbk5ld0l0ZW1Gb3JtLnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlU2hlZXQpKE5ld0l0ZW1Gb3JtKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9OZXdJdGVtRm9ybS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7OztBQWtCQTtBQUlBO0FBQ0E7QUF2QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBSUE7QUFBQTtBQURBO0FBREE7QUFEQTtBQUZBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQVVBO0FBT0E7QUFPQTtBQU9BO0FBL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFHQTtBQUpBO0FBRkE7QUFRQTtBQUNBO0FBREE7O0FBR0E7QUFFQTtBQUhBO0FBS0E7QUFDQTtBQURBOztBQUdBO0FBRUE7QUFIQTtBQUtBO0FBQ0E7QUFEQTs7QUFHQTtBQUVBO0FBSEE7QUFLQTtBQUNBO0FBREE7O0FBR0E7O0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOztBQVFBO0FBRkE7O0FBR0E7QUFBQTtBQVZBO0FBREE7QUFEQTtBQUNBO0FBZ0JBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOzs7OztBQWJBO0FBQ0E7QUFvQkE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7O0FBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7O0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQURBO0FBR0E7QUFIQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUhBO0FBTUE7QUFOQTtBQUNBO0FBS0E7QUFFQTtBQUZBO0FBRUE7QUFDQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBR0E7QUFIQTtBQUFBO0FBSUE7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUlBO0FBSkE7QUFBQTtBQTdEQTtBQUNBO0FBa0VBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7O0FBR0E7QUFBQTtBQURBO0FBREE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBR0E7QUFGQTtBQUlBO0FBQ0E7QUFHQTtBQUZBOzs7Ozs7QUFLQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBOzs7OztBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBUkE7QUFRQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFFQTs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUEE7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUEE7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUEE7O0FBUUE7QUFDQTtBQURBO0FBekNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFIQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUhBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUVBO0FBR0E7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTkE7QUFVQTtBQVZBO0FBQ0E7Ozs7O0FBNUVBO0FBQ0E7QUF1RkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7O0FBR0E7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuSEE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7OztBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7O0FBR0E7QUFBQTtBQURBO0FBREE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQVBBO0FBV0E7QUFYQTtBQUNBO0FBM0JBO0FBQ0E7QUFzQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7OztBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7O0FBR0E7QUFDQTtBQUVBO0FBSkE7O0FBS0E7QUFBQTtBQU5BO0FBREE7QUFDQTtBQVdBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQU5BO0FBU0E7QUFUQTtBQUNBO0FBV0E7QUFqQkE7QUFDQTtBQWtCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFPQTtBQVBBO0FBQ0E7QUFIQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQVBBO0FBV0E7QUFYQTtBQUNBO0FBWEE7QUFDQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7OztBQUdBO0FBQUE7QUFEQTtBQURBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7O0FBTEE7QUFRQTtBQVJBO0FBQ0E7QUFVQTtBQWxCQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7OztBQUlBO0FBRkE7O0FBSUE7QUFDQTtBQUNBOztBQUlBO0FBSEE7QUFKQTs7QUFRQTtBQUFBO0FBWkE7QUFEQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFIQTs7QUFwREE7QUFDQTtBQXdEQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7OztBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUEE7O0FBUUE7QUFBQTtBQVRBO0FBREE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBRkE7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFFQTtBQUFBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFOQTtBQVNBO0FBVEE7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBUUE7Ozs7O0FBL0NBO0FBQ0E7QUFpREE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        