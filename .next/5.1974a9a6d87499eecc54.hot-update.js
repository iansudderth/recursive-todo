webpackHotUpdate(5,{

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

var _reactTouch = __webpack_require__(718);

var _Typography = __webpack_require__(654);

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
						lineNumber: 91
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
					lineNumber: 97
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
					lineNumber: 117
				}
			});
		}
	}]);

	return EditableTextArea;
}(_react.Component);

exports.default = EditableTextArea;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/EditableTextArea.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/EditableTextArea.js"); } } })();

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

var _lodash = __webpack_require__(653);

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

var _Checkbox = __webpack_require__(832);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _IconButton = __webpack_require__(656);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Reorder = __webpack_require__(844);

var _Reorder2 = _interopRequireDefault(_Reorder);

var _Brightness = __webpack_require__(706);

var _Brightness2 = _interopRequireDefault(_Brightness);

var _DeleteForever = __webpack_require__(845);

var _DeleteForever2 = _interopRequireDefault(_DeleteForever);

var _Settings = __webpack_require__(707);

var _Settings2 = _interopRequireDefault(_Settings);

var _FormatListBulleted = __webpack_require__(846);

var _FormatListBulleted2 = _interopRequireDefault(_FormatListBulleted);

var _colors = __webpack_require__(605);

var _Button = __webpack_require__(678);

var _Button2 = _interopRequireDefault(_Button);

var _Menu = __webpack_require__(708);

var _Menu2 = _interopRequireDefault(_Menu);

var _Typography = __webpack_require__(654);

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = __webpack_require__(679);

var _Divider2 = _interopRequireDefault(_Divider);

var _colorParser = __webpack_require__(657);

var _ListItemTextArea = __webpack_require__(861);

var _ListItemTextArea2 = _interopRequireDefault(_ListItemTextArea);

var _ColorMenu = __webpack_require__(744);

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

/***/ 799:
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

var _List = __webpack_require__(800);

var _List2 = _interopRequireDefault(_List);

var _reactRedux = __webpack_require__(674);

var _actions = __webpack_require__(662);

var _redux = __webpack_require__(652);

var _ListHeader = __webpack_require__(953);

var _ListHeader2 = _interopRequireDefault(_ListHeader);

var _Card = __webpack_require__(1006);

var _Card2 = _interopRequireDefault(_Card);

var _lodash = __webpack_require__(653);

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

var _Typography = __webpack_require__(654);

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

var _Checkbox = __webpack_require__(832);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _IconButton = __webpack_require__(656);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xOTc0YTlhNmQ4NzQ5OWVlY2M1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0VkaXRhYmxlVGV4dEFyZWEuanM/MTMyNjQ5ZSIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2hlbHBlcnMvY29sb3JQYXJzZXIuanM/MTMyNjQ5ZSIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdEl0ZW0uanM/MTMyNjQ5ZSIsIndlYnBhY2s6Ly8vLi90b2RvLWxpc3Qvc3JjL2NvbnRhaW5lcnMvVG9kb0NvbnRhaW5lci5qcz8xMzI2NDllIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9JbmNvbXBsZXRlTGlzdC5qcz8xMzI2NDllIiwid2VicGFjazovLy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SGVhZGVyLmpzPzEzMjY0OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpc3RJdGVtLCBMaXN0SXRlbVRleHQgfSBmcm9tIFwibWF0ZXJpYWwtdWkvTGlzdFwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwibWF0ZXJpYWwtdWkvVGV4dEZpZWxkXCI7XG5pbXBvcnQgeyBIb2xkYWJsZSwgZGVmaW5lSG9sZCB9IGZyb20gJ3JlYWN0LXRvdWNoJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ21hdGVyaWFsLXVpL1R5cG9ncmFwaHknXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cblxuY29uc3QgTm9uRWRpdEl0ZW0gPSAocHJvcHMpID0+IHtcblx0XHR2YXIgbGluZVN0eWxlID0gcHJvcHMuY29tcGxldGUgPyB7dGV4dERlY29yYXRpb246J2xpbmUtdGhyb3VnaCd9IDoge31cblx0XHRjb25zdCBob2xkID0gZGVmaW5lSG9sZCh7dXBkYXRlRXZlcnk6IDUwLCBob2xkRm9yOiA1MDB9KTtcblx0XHRcdFx0cmV0dXJuKFxuXHRcdFx0PEhvbGRhYmxlXG5cdFx0XHRjb25maWc9e2hvbGR9XG5cdFx0XHRvbkhvbGRDb21wbGV0ZT17cHJvcHMudXBkYXRlSGFuZGxlcn1cblx0XHRcdD5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxUeXBvZ3JhcGh5XG5cdFx0XHRcdFx0dHlwZT17XCJoZWFkbGluZVwifVxuXHRcdFx0XHRcdGFsaWduPXtcImNlbnRlclwifVxuXHRcdFx0XHRcdHN0eWxlPXt7Y29sb3I6cHJvcHMudGV4dENvbG9yLCAuLi5saW5lU3R5bGV9fVxuXHRcdFx0XHRcdG9uRG91YmxlQ2xpY2s9e3Byb3BzLnVwZGF0ZUhhbmRsZXJ9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3Byb3BzLnByaW1hcnl9XG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0PFR5cG9ncmFwaHlcblx0XHRcdFx0XHR0eXBlPXtcInN1YmhlYWRpbmdcIn1cblx0XHRcdFx0XHRhbGlnbj17XCJjZW50ZXJcIn1cblx0XHRcdFx0XHRzdHlsZT17e2NvbG9yOnByb3BzLnRleHRDb2xvcn19XG5cdFx0XHRcdFx0b25Eb3VibGVDbGljaz17cHJvcHMudXBkYXRlSGFuZGxlcn1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7cHJvcHMuc2Vjb25kYXJ5fVxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9Ib2xkYWJsZT5cblx0XHRcdClcblx0fVxuXG5cblxuY2xhc3MgRWRpdGFibGVUZXh0QXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMuc3RhdGU9e1xuXHRcdFx0ZWRpdE1vZGU6ZmFsc2UsXG5cdFx0XHRlZGl0VGV4dDpcIlwiXG5cdFx0fVxuXG5cdFx0dGhpcy5UZXh0Q29udGFpbmVyID0gdGhpcy5UZXh0Q29udGFpbmVyLmJpbmQodGhpcylcblx0XHR0aGlzLmRvdWJsZUNsaWNrSGFuZGxlciA9IHRoaXMuZG91YmxlQ2xpY2tIYW5kbGVyLmJpbmQodGhpcylcblx0XHR0aGlzLkVkaXRJdGVtID0gdGhpcy5FZGl0SXRlbS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5oYW5kbGVCbHVyID0gdGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcylcblx0fVxuXHRFZGl0SXRlbShwcm9wcyl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGZvcm1cblx0XHRcdG9uU3VibWl0PXt0aGlzLmhhbmRsZUJsdXJ9XG5cdFx0XHRzdHlsZT17e3dpZHRoOicxMDAlJ319XG5cdFx0XHQ+XG5cdFx0XHQ8VGV4dEZpZWxkXG5cdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5lZGl0VGV4dH1cblx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cblx0XHRcdG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuXHRcdFx0ZnVsbFdpZHRoPXt0cnVlfVxuXHRcdFx0YXV0b0ZvY3VzPXt0cnVlfVxuXHRcdFx0SW5wdXRQcm9wcz17e3N0eWxlOntcblx0XHRcdFx0XHRjb2xvcjp0aGlzLnByb3BzLnRleHRDb2xvclxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvPlxuXHRcdFx0PC9mb3JtPlxuXHRcdFx0KVxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHtlZGl0VGV4dDpldmVudC50YXJnZXQudmFsdWV9KVxuXHR9XG5cblx0aGFuZGxlQmx1cihldmVudCl7XG5cdFx0dGhpcy5wcm9wcy51cGRhdGVJdGVtKHRoaXMucHJvcHMuaWQsIHRoaXMuc3RhdGUuZWRpdFRleHQpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZWRpdE1vZGU6ZmFsc2V9KVxuXHR9XG5cblx0VGV4dENvbnRhaW5lcigpe1xuXHRcdHZhciBFZGl0SXRlbSA9IHRoaXMuRWRpdEl0ZW1cblx0XHRpZih0aGlzLnN0YXRlLmVkaXRNb2RlKXtcblx0XHRcdHJldHVybihcblx0XHRcdDxFZGl0SXRlbVxuXG5cdFx0XHQvPlxuXHRcdFx0KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxOb25FZGl0SXRlbVxuXHRcdFx0XHRzdHlsZT17e2NvbG9yOnRoaXMucHJvcHMudGV4dENvbG9yLHBhZGRpbmc6JzBweCcsIHdvcmRXcmFwIDogJ2JyZWFrLXdvcmQnfX1cblx0XHRcdFx0Y29tcGxldGU9e3RoaXMucHJvcHMuY29tcGxldGV9XG5cdFx0XHRcdHVwZGF0ZUhhbmRsZXI9e3RoaXMuZG91YmxlQ2xpY2tIYW5kbGVyfVxuXHRcdFx0XHR0ZXh0Q29sb3I9e3RoaXMucHJvcHMudGV4dENvbG9yfVxuXHRcdFx0XHRwcmltYXJ5PXt0aGlzLnByb3BzLnByaW1hcnl9XG5cdFx0XHRcdHNlY29uZGFyeT17dGhpcy5wcm9wcy5zZWNvbmRhcnl9XG5cdFx0XHRcdGNvbXBsZXRlPXt0aGlzLnByb3BzLmNvbXBsZXRlfVxuXHRcdFx0XHQvPlxuXHRcdFx0KVxuXHRcdH1cblx0fVxuXG5cdGRvdWJsZUNsaWNrSGFuZGxlcigpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe2VkaXRNb2RlOnRydWUsIGVkaXRUZXh0OnRoaXMucHJvcHMucHJpbWFyeX0pXG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHR2YXIgVGV4dENvbnRhaW5lciA9IHRoaXMuVGV4dENvbnRhaW5lclxuXHRcdHJldHVybihcblx0XHRcdDxUZXh0Q29udGFpbmVyIC8+XG5cdFx0XHQpfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0YWJsZVRleHRBcmVhXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvRWRpdGFibGVUZXh0QXJlYS5qcyIsImltcG9ydCB7IHJlZCxwaW5rLHB1cnBsZSxkZWVwUHVycGxlLGluZGlnbyxibHVlLCBsaWdodEJsdWUsIGN5YW4sIHRlYWwsIGdyZWVuLCBsaWdodEdyZWVuLCBsaW1lLCB5ZWxsb3csIGFtYmVyLCBvcmFuZ2UsIGRlZXBPcmFuZ2UsZ3JleSB9IGZyb20gXCJtYXRlcmlhbC11aS9jb2xvcnNcIlxuXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5cbi8vIGZ1bmN0aW9uIGNvbG9yUGFyc2VyQ29tcG9zZXIobW9kaWZpZXJcbi8vIH1cblxuXG5mdW5jdGlvbiBjb2xvclBhcnNlckNvbXBvc2VyKG1vZGlmaWVyKXtcblxuXHRcdHZhciBjb2xvcnMgPSB7IHJlZCxwaW5rLHB1cnBsZSxkZWVwUHVycGxlLGluZGlnbyxibHVlLCBsaWdodEJsdWUsIGN5YW4sIHRlYWwsIGdyZWVuLCBsaWdodEdyZWVuLCBsaW1lLCB5ZWxsb3csIGFtYmVyLCBvcmFuZ2UsIGRlZXBPcmFuZ2UsIGdyZXkgfTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oY29sb3JUZXh0KXtcblxuXG5cdFx0aWYoIGNvbG9ycy5oYXNPd25Qcm9wZXJ0eShjb2xvclRleHQpKXtcblx0XHRcdHJldHVybiBjb2xvcnNbY29sb3JUZXh0XVttb2RpZmllcl1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuICdubyBtYXRjaCdcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRDb2xvclBhcnNlcihjb2xvclRleHQsIGNvbXBsZXRlKXtcblx0dmFyIHdoaXRlTGlzdCA9IFsncmVkJywncGluaycsJ3B1cnBsZScsJ2RlZXBQdXJwbGUnLCdpbmRpZ28nLCdibHVlJywndGVhbCcsJ2RlZXBPcmFuZ2UnLCdicm93bicsJ2JsdWVHcmV5J107XG5cdHZhciBibGFja0xpc3QgPSBbJ2xpZ2h0Qmx1ZScsJ2N5YW4nLCdncmVlbicsJ2xpZ2h0R3JlZW4nLCdsaW1lJywneWVsbG93JywnYW1iZXInLCdvcmFuZ2UnLCdncmV5J107XG5cdGlmKGNvbXBsZXRlKXtcblx0XHRpZihfLmluY2x1ZGVzKHdoaXRlTGlzdCwgY29sb3JUZXh0KSl7XG5cdFx0XHRyZXR1cm4gJyMwMDAwMDAnXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAnI2ZmZmZmZidcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0XHRpZihfLmluY2x1ZGVzKHdoaXRlTGlzdCwgY29sb3JUZXh0KSl7XG5cdFx0XHRcdHJldHVybiAnI2ZmZmZmZidcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuICcjMDAwMDAwJ1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWNjZW50VGV4dENvbG9yUGFyc2VyKGNvbG9yVGV4dCl7XG5cdHZhciB3aGl0ZUxpc3QgPSBbJ3JlZCcsJ3BpbmsnLCdwdXJwbGUnLCdkZWVwUHVycGxlJywgJ2luZGlnbycsJ2JsdWUnLCdkZWVwT3JhbmdlJ11cblx0dmFyIGJsYWNrTGlzdCA9IFsnbGlnaHRCbHVlJywgJ2N5YW4nLCd0ZWFsJywnZ3JlbicsJ2xpZ2h0R3JlZW4nLCdsaW1lJywneWVsbG93JywnYW1iZXInLCdvcmFuZ2UnXVxuXG5cdGlmKF8uaW5jbHVkZXMod2hpdGVMaXN0LCBjb2xvclRleHQpKXtcblx0XHRyZXR1cm4gJyNmZmZmZmYnXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuICcjMDAwMDAwJ1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCByYXdDb2xvclBhcnNlciA9IChjb2xvclRleHQpID0+IHtcblx0XHRcdHZhciBjb2xvcnMgPSB7IHJlZCxwaW5rLHB1cnBsZSxkZWVwUHVycGxlLGluZGlnbyxibHVlLCBsaWdodEJsdWUsIGN5YW4sIHRlYWwsIGdyZWVuLCBsaWdodEdyZWVuLCBsaW1lLCB5ZWxsb3csIGFtYmVyLCBvcmFuZ2UsIGRlZXBPcmFuZ2UsZ3JleSB9O1xuXHRcdGlmKCBjb2xvcnMuaGFzT3duUHJvcGVydHkoY29sb3JUZXh0KSl7XG5cdFx0XHRyZXR1cm4gY29sb3JzW2NvbG9yVGV4dF1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGdyZXlcblx0XHR9XG59XG5cbmV4cG9ydCBjb25zdCBwcmltYXJ5Q29sb3JQYXJzZXIgPSBjb2xvclBhcnNlckNvbXBvc2VyKDUwMCk7XG5cbmV4cG9ydCBjb25zdCBhY2NlbnRDb2xvclBhcnNlciA9IGNvbG9yUGFyc2VyQ29tcG9zZXIoJ0E0MDAnKVxuXG5leHBvcnQgY29uc3QgZmFkZWRDb2xvclBhcnNlciA9IGNvbG9yUGFyc2VyQ29tcG9zZXIoMTAwKVxuXG5leHBvcnQgY29uc3QgZmFkZWRBY2NlbnRDb2xvclBhcnNlciA9IGNvbG9yUGFyc2VyQ29tcG9zZXIoJ0ExMDAnKVxuXG5cbmV4cG9ydCBjb25zdCB3aGl0ZSA9IHtcbiAgNTA6IFx0JyNmZmZmZmYnLFxuICAxMDA6IFx0JyNmZmZmZmYnLFxuICAyMDA6IFx0JyNmZmZmZmYnLFxuICAzMDA6IFx0JyNmZmZmZmYnLFxuICA0MDA6IFx0JyNmZmZmZmYnLFxuICA1MDA6IFx0JyNmZmZmZmYnLFxuICA2MDA6IFx0JyNmZmZmZmYnLFxuICA3MDA6IFx0JyNmZmZmZmYnLFxuICA4MDA6IFx0JyNmZmZmZmYnLFxuICA5MDA6IFx0JyNmZmZmZmYnLFxuICBBMTAwOiAnI2ZmZmZmZicsXG4gIEEyMDA6ICcjZmZmZmZmJyxcbiAgQTQwMDogJyNmZmZmZmYnLFxuICBBNzAwOiAnI2ZmZmZmJyxcbiAgY29udHJhc3REZWZhdWx0Q29sb3I6ICdkYXJrJ1xufTtcblxuZXhwb3J0IGNvbnN0IGJsYWNrID0ge1xuICA1MDogXHQnIzAwMDAwMCcsXG4gIDEwMDogXHQnIzAwMDAwMCcsXG4gIDIwMDogXHQnIzAwMDAwMCcsXG4gIDMwMDogXHQnIzAwMDAwMCcsXG4gIDQwMDogXHQnIzAwMDAwMCcsXG4gIDUwMDogXHQnIzAwMDAwMCcsXG4gIDYwMDogXHQnIzAwMDAwMCcsXG4gIDcwMDogXHQnIzAwMDAwMCcsXG4gIDgwMDogXHQnIzAwMDAwMCcsXG4gIDkwMDogXHQnIzAwMDAwMCcsXG4gIEExMDA6ICcjMDAwMDAwJyxcbiAgQTIwMDogJyMwMDAwMDAnLFxuICBBNDAwOiAnIzAwMDAwMCcsXG4gIEE3MDA6ICcjMDAwMDAwJyxcbiAgY29udHJhc3REZWZhdWx0Q29sb3I6ICdkYXJrJ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvaGVscGVycy9jb2xvclBhcnNlci5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG4vLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgU29ydGFibGVIYW5kbGUgfSBmcm9tIFwicmVhY3Qtc29ydGFibGUtaG9jXCI7XG5pbXBvcnQgeyBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL0xpc3RcIjtcbmltcG9ydCBDaGVja2JveCBmcm9tIFwibWF0ZXJpYWwtdWkvQ2hlY2tib3hcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgUmVvcmRlciBmcm9tIFwibWF0ZXJpYWwtdWktaWNvbnMvUmVvcmRlclwiO1xuaW1wb3J0IERvdCBmcm9tICdtYXRlcmlhbC11aS1pY29ucy9CcmlnaHRuZXNzMSdcbmltcG9ydCBEZWxldGVGb3JldmVyIGZyb20gXCJtYXRlcmlhbC11aS1pY29ucy9EZWxldGVGb3JldmVyXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnbWF0ZXJpYWwtdWktaWNvbnMvU2V0dGluZ3MnXG5pbXBvcnQgRm9ybWF0TGlzdEJ1bGxldGVkICBmcm9tIFwibWF0ZXJpYWwtdWktaWNvbnMvRm9ybWF0TGlzdEJ1bGxldGVkXCI7XG5pbXBvcnQgeyByZWQscGluayxwdXJwbGUsZGVlcFB1cnBsZSxpbmRpZ28sYmx1ZSwgbGlnaHRCbHVlLCBjeWFuLCB0ZWFsLCBncmVlbiwgbGlnaHRHcmVlbiwgbGltZSwgeWVsbG93LCBhbWJlciwgb3JhbmdlLCBkZWVwT3JhbmdlLCBncmV5IH0gZnJvbSBcIm1hdGVyaWFsLXVpL2NvbG9yc1wiXG5pbXBvcnQgQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0J1dHRvbic7XG5pbXBvcnQgTWVudSwgeyBNZW51SXRlbSB9IGZyb20gJ21hdGVyaWFsLXVpL01lbnUnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnbWF0ZXJpYWwtdWkvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdtYXRlcmlhbC11aS9EaXZpZGVyJztcbmltcG9ydCB7cHJpbWFyeUNvbG9yUGFyc2VyLCBmYWRlZENvbG9yUGFyc2VyfSBmcm9tICcuLi9oZWxwZXJzL2NvbG9yUGFyc2VyLmpzJ1xuaW1wb3J0IExpc3RJdGVtVGV4dEFyZWEgZnJvbSAnLi9MaXN0SXRlbVRleHRBcmVhLmpzJ1xuaW1wb3J0IENvbG9yTWVudSBmcm9tICcuL0NvbG9yTWVudS5qcydcblxuY29uc3QgRHJhZ0hhbmRsZSA9IFNvcnRhYmxlSGFuZGxlKChwcm9wcykgPT57XG5cblx0dmFyIGFjdGl2ZVN0eWxlID0gcHJvcHMuY29tcGxldGUgPyB7fSA6IHtjdXJzb3I6J3BvaW50ZXInfVxuXHR2YXIgY2VudGVyU3R5bGUgPSB7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIG1hcmdpbjoxMn1cblxuXHRyZXR1cm4oXG5cdFx0PHNwYW4gc3R5bGU9e3suLi5wcm9wcy5jb21wbGV0ZVN0eWxlLCAuLi5hY3RpdmVTdHlsZSwgLi4uY2VudGVyU3R5bGV9fT5cblx0XHQ8UmVvcmRlciAvPlxuXHRcdDwvc3Bhbj5cblx0XHQpfVxuKTtcblxuXG5jbGFzcyBCYXNlTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRvcGVuOmZhbHNlLFxuXHRcdFx0YW5jaG9yRWw6IHVuZGVmaW5lZFxuXHRcdH1cblxuXHRcdHRoaXMuY29tcGxldGVEaXNwbGF5ID0gdGhpcy5jb21wbGV0ZURpc3BsYXkuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuYmluZCh0aGlzKTtcblx0XHR0aGlzLm9wZW5NZW51ID0gdGhpcy5vcGVuTWVudS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2xvc2VNZW51ID0gdGhpcy5jbG9zZU1lbnUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNvbG9ySXRlbUNsaWNrSGFuZGxlciA9IHRoaXMuY29sb3JJdGVtQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG5cdH1cblxuXHQgaXRlbSA9IHRoaXMucHJvcHMudmFsdWU7XG5cblx0aW5jb21wbGV0ZUxpc3RTdHlsZSA9IHsgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3JQYXJzZXIodGhpcy5pdGVtLmNvbG9yKSB9O1xuXHRjb21wbGV0ZUxpc3RTdHlsZSA9IHsgYmFja2dyb3VuZENvbG9yOiBmYWRlZENvbG9yUGFyc2VyKHRoaXMuaXRlbS5jb2xvcikgfTtcblx0Ly8gbGlzdEl0ZW1TdHlsZSA9IHRoaXMuaXRlbS5jb21wbGV0ZVxuXHQvLyBcdD8gdGhpcy5jb21wbGV0ZUxpc3RTdHlsZVxuXHQvLyBcdDogdGhpcy5pbmNvbXBsZXRlTGlzdFN0eWxlO1xuXHQvLyBsaXN0SXRlbVN0eWxlID0ge2JhY2tncm91bmRDb2xvcjp0aGlzLnN0YXRlLmJnQ29sb3J9XG5cdGNvbXBsZXRlR3JleSA9IGdyZXlbNTAwXTtcblx0Y29tcGxldGVMaW5lU3R5bGUgPSB0aGlzLml0ZW0uY29tcGxldGVcblx0XHQ/IHsgY29sb3I6IHRoaXMuY29tcGxldGVHcmV5LCB0ZXh0RGVjb3JhdGlvbjogXCJsaW5lLXRocm91Z2hcIiB9XG5cdFx0OiB7fTtcblx0Y29tcGxldGVTdHlsZSA9IHRoaXMuaXRlbS5jb21wbGV0ZVxuXHQ/IHsgY29sb3I6IHRoaXMuY29tcGxldGVHcmV5IH1cblx0OiB7IGNvbG9yOiB0aGlzLnRleHRDb2xvcn07XG5cblxuXHRjb21wbGV0ZURpc3BsYXkoKSB7XG5cdFx0dmFyIGNvbXBsZXRlZCA9IHRoaXMuaXRlbS5jb21wbGV0ZUNoaWxkcmVuLmxlbmd0aDtcblx0XHR2YXIgdG90YWwgPSBjb21wbGV0ZWQgKyB0aGlzLml0ZW0uaW5jb21wbGV0ZUNoaWxkcmVuLmxlbmd0aDtcblx0XHR2YXIgdGV4dENvbG9yID0gdGhpcy5wcm9wcy52YWx1ZS5jb21wbGV0ZT8gdGhpcy5jb21wbGV0ZUdyZXkgOiB0aGlzLnByb3BzLnRleHRDb2xvclxuXHRcdHZhciBkaXNwbGF5VGV4dFN0eWxlID0gdGhpcy5wcm9wcy52YWx1ZS5jb21wbGV0ZVxuXHRcdD8geyBjb2xvcjogdGhpcy5jb21wbGV0ZUdyZXl9XG5cdFx0OiB7IGNvbG9yOiB0aGlzLnByb3BzLnRleHRDb2xvcn07XG5cdFx0aWYgKHRvdGFsID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gXCJcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRzdHlsZT17ZGlzcGxheVRleHRTdHlsZX1cblx0XHRcdFx0PntgKCAke2NvbXBsZXRlZH0gLyAke3RvdGFsfSBjb21wbGV0ZSlgfTwvc3Bhbj5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0Y29udGVudCgpIHtcblx0XHR2YXIgdGV4dENvbG9yID0gdGhpcy5wcm9wcy52YWx1ZS5jb21wbGV0ZT8gdGhpcy5jb21wbGV0ZUdyZXkgOiB0aGlzLnByb3BzLnRleHRDb2xvclxuXHRcdHZhciBjb250ZW50VGV4dFN0eWxlID0gdGhpcy5wcm9wcy52YWx1ZS5jb21wbGV0ZVxuXHRcdD8geyBjb2xvcjogdGhpcy5jb21wbGV0ZUdyZXksIHRleHREZWNvcmF0aW9uOiBcImxpbmUtdGhyb3VnaFwiIH1cblx0XHQ6IHsgY29sb3I6IHRoaXMucHJvcHMudGV4dENvbG9yfTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNwYW4gc3R5bGU9e3suLi5jb250ZW50VGV4dFN0eWxlLCB3b3JkV3JhcDonYnJlYWstd29yZCcsIHdvcmRCcmVhazonYnJlYWstYWxsJ319PlxuXHRcdFx0XHR7dGhpcy5pdGVtLmNvbnRlbnR9XG5cdFx0XHQ8L3NwYW4+XG5cdFx0KTtcblx0fVxuXG5cdG9wZW5NZW51KGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHtvcGVuOnRydWUsIGFuY2hvckVsOiBldmVudC5jdXJyZW50VGFyZ2V0fSlcblx0fVxuXG5cdGNsb3NlTWVudSgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe29wZW46ZmFsc2V9KVxuXHR9XG5cblx0Y29sb3JJdGVtQ2xpY2tIYW5kbGVyKGNvbG9yTmFtZSl7XG5cdFx0dmFyIGNsb3NlID0gdGhpcy5jbG9zZU1lbnVcblx0XHRsZXQgY2hhbmdlQ29sb3IgPSB0aGlzLnByb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXIodGhpcy5pdGVtLmlkLCBjb2xvck5hbWUpXG5cdFx0bGV0IHByb3BzQ29sb3IgPSB0aGlzLnByb3BzLmJnQ29sb3Jcblx0XHRyZXR1cm4gZnVuY3Rpb24oKXtcblx0XHRjaGFuZ2VDb2xvcigpXG5cdFx0Y2xvc2UoKVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHZhciB0ZXh0Q29sb3IgPSB0aGlzLnByb3BzLnZhbHVlLmNvbXBsZXRlPyB0aGlzLmNvbXBsZXRlR3JleSA6IHRoaXMucHJvcHMudGV4dENvbG9yXG5cdHJldHVybiAoXG5cdFx0PExpc3RJdGVtIGRpdmlkZXI9e3RydWV9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLml0ZW1Db2xvciwgcGFkZGluZzoxMiwgdHJhbnNpdGlvbjonYWxsIDBzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cyd9fT5cblx0XHRcdDxEcmFnSGFuZGxlXG5cdFx0XHRcdGNvbXBsZXRlU3R5bGU9e3tjb2xvcjp0ZXh0Q29sb3J9fVxuXHRcdFx0XHRjb21wbGV0ZT17dGhpcy5pdGVtLmNvbXBsZXRlfVxuXHRcdFx0Lz5cblx0XHRcdDxDaGVja2JveFxuXHRcdFx0XHRjaGVja2VkPXt0aGlzLml0ZW0uY29tcGxldGV9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMucHJvcHMuY29tcGxldGVJdGVtQ29tcG9zZXIodGhpcy5pdGVtLmlkKX1cblx0XHRcdFx0c3R5bGU9e3tjb2xvcjp0ZXh0Q29sb3J9fVxuXHRcdFx0Lz5cblxuXHRcdFx0PExpc3RJdGVtVGV4dEFyZWFcblx0XHRcdHByaW1hcnk9e3RoaXMuY29udGVudCgpfVxuXHRcdFx0c2Vjb25kYXJ5PXt0aGlzLmNvbXBsZXRlRGlzcGxheSgpfVxuXHRcdFx0dGV4dENvbG9yPXt0ZXh0Q29sb3J9XG5cdFx0XHRyYXdUZXh0PXt0aGlzLml0ZW0uY29udGVudH1cblx0XHRcdHVwZGF0ZUl0ZW09e3RoaXMucHJvcHMudXBkYXRlSXRlbX1cblx0XHRcdGlkPXt0aGlzLml0ZW0uaWR9XG5cdFx0XHRjb21wbGV0ZT17dGhpcy5pdGVtLmNvbXBsZXRlfVxuXHRcdFx0Lz5cblxuXHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0b25DbGljaz17dGhpcy5wcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXIodGhpcy5pdGVtLmlkKX1cblx0XHRcdFx0c3R5bGU9e3tjb2xvcjp0ZXh0Q29sb3J9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8Rm9ybWF0TGlzdEJ1bGxldGVkIC8+XG5cdFx0XHQ8L0ljb25CdXR0b24+XG5cdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0b25DbGljaz17dGhpcy5vcGVuTWVudX1cblx0XHRcdHN0eWxlPXt7Y29sb3I6dGV4dENvbG9yfX1cblx0XHRcdD5cblx0XHRcdFx0PFNldHRpbmdzIC8+XG5cdFx0XHQ8L0ljb25CdXR0b24+XG5cdFx0XHQ8TWVudVxuXHRcdFx0aWQ9e2Ake3RoaXMuaXRlbS5pZH0tbWVudWB9XG5cdFx0XHRvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG5cdFx0XHRvblJlcXVlc3RDbG9zZT17dGhpcy5jbG9zZU1lbnV9XG5cdFx0XHRhbmNob3JFbD17dGhpcy5zdGF0ZS5hbmNob3JFbH1cblx0XHRcdD5cblx0XHRcdFx0PFR5cG9ncmFwaHlcblx0XHRcdFx0dHlwZT17XCJzdWJoZWFkaW5nXCJ9XG5cdFx0XHRcdGFsaWduPXsnY2VudGVyJ31cblx0XHRcdFx0c3R5bGU9e3tvdXRsaW5lOidub25lJywgcGFkZGluZ0xlZnQ6MTZ9fVxuXHRcdFx0XHQ+Q2hhbmdlIENvbG9yPC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHQ8RGl2aWRlciAvPlxuXHRcdFx0XHQ8Q29sb3JNZW51XG5cdFx0XHRcdGNsaWNrSGFuZGxlcj17dGhpcy5jb2xvckl0ZW1DbGlja0hhbmRsZXJ9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxEaXZpZGVyIC8+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0c3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0c3R5bGU9e3tjb2xvcjond2hpdGUnLCBiYWNrZ3JvdW5kQ29sb3I6cmVkWzUwMF0sIG1hcmdpblRvcDo4fX1cblx0XHRcdFx0b25DbGljaz17dGhpcy5wcm9wcy5kZWxldGVJdGVtQ29tcG9zZXIodGhpcy5pdGVtLmlkKX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxEZWxldGVGb3JldmVyIC8+IHsnRGVsZXRlIEl0ZW0nfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L01lbnU+XG5cdFx0PC9MaXN0SXRlbT5cblx0KTtcblx0fVxufTtcblxuQmFzZUxpc3RJdGVtLnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlTGlzdEl0ZW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdEl0ZW0uanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1xuXHRuZXdJdGVtLFxuXHRjaGFuZ2VCYXNlSXRlbSxcblx0Y29tcGxldGVJdGVtLFxuXHRkZWxldGVJdGVtLFxuXHRyZW9yZGVySXRlbSxcblx0Y2hhbmdlQ29sb3IsXG5cdHVwZGF0ZUl0ZW0sXG5cdHVwZGF0ZURhdGEsXG5cdHVwZGF0ZURhdGFUaHJvdHRsZWRcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gXCJyZWR1eFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RJdGVtL3N0eWxlLmNzc1wiO1xuaW1wb3J0IExpc3RIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdEhlYWRlci5qc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIm1hdGVyaWFsLXVpL0NhcmRcIjtcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuXG5jbGFzcyBUb2RvQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5ld0l0ZW06IFwiXCJcblx0XHR9O1xuXHRcdHRoaXMuaW5wdXRVcGRhdGUgPSB0aGlzLmlucHV0VXBkYXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5uZXdJdGVtQWN0aW9uID0gdGhpcy5uZXdJdGVtQWN0aW9uLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jaGFuZ2VCYXNlQ29tcG9zZXIgPSB0aGlzLmNoYW5nZUJhc2VDb21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY29tcGxldGVJdGVtQ29tcG9zZXIgPSB0aGlzLmNvbXBsZXRlSXRlbUNvbXBvc2VyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5kZWxldGVJdGVtQ29tcG9zZXIgPSB0aGlzLmRlbGV0ZUl0ZW1Db21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVvcmRlckl0ZW1Db21wb3NlciA9IHRoaXMucmVvcmRlckl0ZW1Db21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZ2VuZXJhdGVDb21wbGV0ZSA9IHRoaXMuZ2VuZXJhdGVDb21wbGV0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2hhbmdlQ29sb3JDb21wb3NlciA9IHRoaXMuY2hhbmdlQ29sb3JDb21wb3Nlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudXBkYXRlSXRlbURpc3BhdGNoID0gdGhpcy51cGRhdGVJdGVtRGlzcGF0Y2guYmluZCh0aGlzKTtcblx0XHR0aGlzLnVwZGF0ZURhdGFEaXNwYXRjaCA9IHRoaXMudXBkYXRlRGF0YURpc3BhdGNoLmJpbmQodGhpcyk7XG5cdH1cblxuXHRpbnB1dFVwZGF0ZShldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBuZXdJdGVtOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG5cdH1cblxuXHRuZXdJdGVtQWN0aW9uKGNvbnRlbnQpIHtcblx0XHR0aGlzLnByb3BzLm5ld0l0ZW0oY29udGVudCwgdGhpcy5wcm9wcy5iYXNlSXRlbSk7XG5cdFx0dmFyIHVwZGF0ZURhdGFEaXNwYXRjaCA9IHRoaXMudXBkYXRlRGF0YURpc3BhdGNoXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG5ld0l0ZW06IFwiXCIgfSwgKCkgPT4ge1xuXG5cdFx0fSk7XG5cdH1cblxuXHRjaGFuZ2VCYXNlQ29tcG9zZXIoaWQpIHtcblx0XHR2YXIgY2hhbmdlQmFzZUl0ZW0gPSB0aGlzLnByb3BzLmNoYW5nZUJhc2VJdGVtO1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdGNoYW5nZUJhc2VJdGVtKGlkKTtcblx0XHR9O1xuXHR9XG5cblx0ZGVsZXRlSXRlbUNvbXBvc2VyKGlkKSB7XG5cdFx0bGV0IGRlbGV0ZUl0ZW1EaXNwYXRjaCA9IHRoaXMucHJvcHMuZGVsZXRlSXRlbTtcblx0XHRsZXQgdXBkYXRlRGF0YURpc3BhdGNoID0gdGhpcy51cGRhdGVEYXRhRGlzcGF0Y2hcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRkZWxldGVJdGVtRGlzcGF0Y2goaWQpO1xuXG5cdFx0fTtcblx0fVxuXG5cdGNvbXBsZXRlSXRlbUNvbXBvc2VyKGlkKSB7XG5cdFx0bGV0IGNvbXBsZXRlSXRlbURpc3BhdGNoID0gdGhpcy5wcm9wcy5jb21wbGV0ZUl0ZW07XG5cdFx0bGV0IHVwZGF0ZURhdGFEaXNwYXRjaCA9IHRoaXMudXBkYXRlRGF0YURpc3BhdGNoXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcGxldGVJdGVtRGlzcGF0Y2goaWQpO1xuXG5cdFx0fTtcblx0fVxuXG5cdHJlb3JkZXJJdGVtQ29tcG9zZXIoaWQsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuXHRcdGxldCByZW9yZGVySXRlbURpc3BhdGNoID0gdGhpcy5wcm9wcy5yZW9yZGVySXRlbTtcblx0XHRsZXQgdXBkYXRlRGF0YURpc3BhdGNoID0gdGhpcy51cGRhdGVEYXRhRGlzcGF0Y2g7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVvcmRlckl0ZW1EaXNwYXRjaChpZCwgb2xkSW5kZXgsIG5ld0luZGV4KTtcblxuXHRcdH07XG5cdH1cblxuXHRnZW5lcmF0ZUNvbXBsZXRlKCkge1xuXHRcdHZhciBjb21wbGV0ZUNvdW50ID0gdGhpcy5wcm9wcy5pdGVtc1t0aGlzLnByb3BzLmJhc2VJdGVtXVxuXHRcdFx0LmNvbXBsZXRlQ2hpbGRyZW4ubGVuZ3RoO1xuXHRcdHZhciB0b3RhbENvdW50ID1cblx0XHRcdHRoaXMucHJvcHMuaXRlbXNbdGhpcy5wcm9wcy5iYXNlSXRlbV0uaW5jb21wbGV0ZUNoaWxkcmVuLmxlbmd0aCArXG5cdFx0XHRjb21wbGV0ZUNvdW50O1xuXHRcdHJldHVybiBgKCAke2NvbXBsZXRlQ291bnR9IC8gJHt0b3RhbENvdW50fSBDb21wbGV0ZSApYDtcblx0fVxuXG5cdGNoYW5nZUNvbG9yQ29tcG9zZXIoaWQsIGNvbG9yKSB7XG5cdFx0bGV0IGNoYW5nZUNvbG9yRGlzcGF0Y2ggPSB0aGlzLnByb3BzLmNoYW5nZUNvbG9yXG5cdFx0bGV0IHVwZGF0ZURhdGFEaXNwYXRjaCA9IHRoaXMudXBkYXRlRGF0YURpc3BhdGNoO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKXtcblx0XHRcdGNoYW5nZUNvbG9yRGlzcGF0Y2goaWQsIGNvbG9yKVxuXG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlSXRlbURpc3BhdGNoKGlkLCBuZXdUZXh0KXtcblx0XHR0aGlzLnByb3BzLnVwZGF0ZUl0ZW0oaWQsIG5ld1RleHQpXG5cblx0fVxuXG5cdHVwZGF0ZURhdGFEaXNwYXRjaCgpe1xuXHRcdGNvbnN0IGlkID0gdGhpcy5wcm9wcy5saXN0SURcblx0XHRjb25zdCBuZXdTdGF0ZSA9IHtcblx0XHRcdGl0ZW1zOnRoaXMucHJvcHMuaXRlbXMsXG5cdFx0XHRiYXNlSXRlbTp0aGlzLnByb3BzLmJhc2VJdGVtXG5cdFx0XHR9XG5cdFx0dGhpcy5wcm9wcy51cGRhdGVEYXRhKGlkLCB7aWQsIG5ld1N0YXRlfSlcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuXHRcdHRoaXMudXBkYXRlRGF0YURpc3BhdGNoKClcblx0fVxuXG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIGN1cnJlbnRJdGVtID0gdGhpcy5wcm9wcy5pdGVtc1t0aGlzLnByb3BzLmJhc2VJdGVtXTtcblx0XHR2YXIgcGFyZW50SXRlbSA9IHRoaXMucHJvcHMuaXRlbXNbY3VycmVudEl0ZW0ucGFyZW50XTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcImF1dG9cIiwgbWFyZ2luOiBcIjE2cHhcIiB9fT5cblx0XHRcdFx0PExpc3RIZWFkZXJcblx0XHRcdFx0XHRiYXNlSXRlbT17dGhpcy5wcm9wcy5iYXNlSXRlbX1cblx0XHRcdFx0XHRiYXNlSXRlbVRleHQ9e2N1cnJlbnRJdGVtLmNvbnRlbnR9XG5cdFx0XHRcdFx0Y3VycmVudFBhcmVudD17Y3VycmVudEl0ZW0ucGFyZW50fVxuXHRcdFx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17dGhpcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3NlciA9e3RoaXMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0XHRjb3VudGVyVGV4dD17dGhpcy5nZW5lcmF0ZUNvbXBsZXRlKCl9XG5cdFx0XHRcdFx0aXRlbXM9e3RoaXMucHJvcHMuaXRlbXN9XG5cdFx0XHRcdFx0bmV3SXRlbUFjdGlvbj17dGhpcy5uZXdJdGVtQWN0aW9ufVxuXHRcdFx0XHRcdHVwZGF0ZUl0ZW09e3RoaXMudXBkYXRlSXRlbURpc3BhdGNofVxuXHRcdFx0XHRcdHVwZGF0ZURhdGE9e3RoaXMudXBkYXRlRGF0YURpc3BhdGNofVxuXHRcdFx0XHRcdGNvbXBsZXRlSXRlbUNvbXBvc2VyPXt0aGlzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8TGlzdFxuXHRcdFx0XHRcdGxpc3Q9e3RoaXMucHJvcHMuaXRlbXN9XG5cdFx0XHRcdFx0YmFzZUl0ZW09e3RoaXMucHJvcHMuYmFzZUl0ZW19XG5cdFx0XHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXt0aGlzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0XHRkZWxldGVJdGVtQ29tcG9zZXI9e3RoaXMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdGNvbXBsZXRlSXRlbUNvbXBvc2VyPXt0aGlzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdHJlb3JkZXJJdGVtQ29tcG9zZXI9e3RoaXMucmVvcmRlckl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0XHRjaGFuZ2VDb2xvckNvbXBvc2VyID17dGhpcy5jaGFuZ2VDb2xvckNvbXBvc2VyfVxuXHRcdFx0XHRcdHVwZGF0ZUl0ZW09e3RoaXMudXBkYXRlSXRlbURpc3BhdGNofVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9DYXJkPlxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHsgaXRlbXMsIGJhc2VJdGVtIH0pIHtcblx0cmV0dXJuIHsgaXRlbXMsIGJhc2VJdGVtfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG5cdHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoXG5cdFx0eyBuZXdJdGVtLCBjaGFuZ2VCYXNlSXRlbSwgY29tcGxldGVJdGVtLCBkZWxldGVJdGVtLCByZW9yZGVySXRlbSwgY2hhbmdlQ29sb3IsIHVwZGF0ZUl0ZW0sIHVwZGF0ZURhdGE6dXBkYXRlRGF0YVRocm90dGxlZH0sXG5cdFx0ZGlzcGF0Y2hcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVG9kb0NvbnRhaW5lcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbnRhaW5lcnMvVG9kb0NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbi8vIGltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7XG5cdFNvcnRhYmxlQ29udGFpbmVyLFxuXHRTb3J0YWJsZUVsZW1lbnRcbn0gZnJvbSBcInJlYWN0LXNvcnRhYmxlLWhvY1wiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL0xpc3RJdGVtLmpzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwibWF0ZXJpYWwtdWkvTGlzdFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcbmltcG9ydCB7cHJpbWFyeUNvbG9yUGFyc2VyLCBmYWRlZENvbG9yUGFyc2VyLCB0ZXh0Q29sb3JQYXJzZXJ9IGZyb20gJy4uL2hlbHBlcnMvY29sb3JQYXJzZXIuanMnXG5cblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJJbmNvbXBsZXRlTGlzdFwiLCB0aGVtZSA9PiAoe1xuXHRjb250YWluZXI6IHtcblx0XHRsaXN0U3R5bGU6IFwibm9uZVwiLFxuXHRcdHBhZGRpbmc6IDAsXG5cdFx0bWFyZ2luOiAwXG5cdH0sXG5cdHJvb3Q6IHtcblx0XHRwYWRkaW5nOiAwXG5cdH0sXG5cdGhlbHBlcjp7XG5cdFx0dHJhbnNpdGlvbjowXG5cdH1cbn0pKTtcblxuXG5jb25zdCBTb3J0YWJsZUxpc3QgPSBTb3J0YWJsZUNvbnRhaW5lcigocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8TGlzdCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzRm9yTGlzdH0+XG5cdFx0XHR7cHJvcHMuaXRlbXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8U29ydGFibGVMaXN0SXRlbVxuXHRcdFx0XHRcdFx0a2V5PXtgaXRlbS0ke3ZhbHVlLmlkfWB9XG5cdFx0XHRcdFx0XHRpbmRleD17aW5kZXh9XG5cdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0XHRjaGFuZ2VCYXNlQ29tcG9zZXI9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3Nlcn1cblx0XHRcdFx0XHRcdGRlbGV0ZUl0ZW1Db21wb3Nlcj17cHJvcHMuZGVsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3NlciA9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdFx0XHRiZ0NvbG9yQ29tcG9zZXI9e3Byb3BzLmJnQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0XHRcdHRleHRDb2xvckNvbXBvc2VyPXtwcm9wcy50ZXh0Q29sb3JDb21wb3Nlcn1cblx0XHRcdFx0XHRcdHVwZGF0ZUl0ZW09e3Byb3BzLnVwZGF0ZUl0ZW19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KTtcblx0XHRcdH0pfVxuXHRcdDwvTGlzdD5cblx0KTtcbn0pO1xuXG5jb25zdCBTb3J0YWJsZUxpc3RJdGVtID0gU29ydGFibGVFbGVtZW50KChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxMaXN0SXRlbVxuXHRcdFx0dmFsdWU9e3Byb3BzLnZhbHVlfVxuXHRcdFx0Y2hhbmdlQmFzZUNvbXBvc2VyPXtwcm9wcy5jaGFuZ2VCYXNlQ29tcG9zZXJ9XG5cdFx0XHRkZWxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmRlbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdGNvbXBsZXRlSXRlbUNvbXBvc2VyPXtwcm9wcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdGNoYW5nZUNvbG9yQ29tcG9zZXIgPXtwcm9wcy5jaGFuZ2VDb2xvckNvbXBvc2VyfVxuXHRcdFx0aXRlbUNvbG9yPXtwcm9wcy5iZ0NvbG9yQ29tcG9zZXIocHJvcHMudmFsdWUuY29sb3IpfVxuXHRcdFx0dGV4dENvbG9yPXtwcm9wcy50ZXh0Q29sb3JDb21wb3Nlcihwcm9wcy52YWx1ZS5jb2xvciwgcHJvcHMudmFsdWUuY29tcGxldGUpfVxuXHRcdFx0dXBkYXRlSXRlbT17cHJvcHMudXBkYXRlSXRlbX1cblx0XHQvPlxuXHQpO1xufSk7XG5cbmNvbnN0IEluY29tcGxldGVMaXN0ID0gcHJvcHMgPT4ge1xuXHRjb25zdCBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcztcblxuXG5cdGZ1bmN0aW9uIGhhbmRsZVNvcnQoeyBvbGRJbmRleCwgbmV3SW5kZXgsfSkge1xuXHRcdHByb3BzLnJlb3JkZXJJdGVtQ29tcG9zZXIocHJvcHMucGFyZW50SUQsIG9sZEluZGV4LCBuZXdJbmRleCkoKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxTb3J0YWJsZUxpc3Rcblx0XHRcdFx0aXRlbXM9e3Byb3BzLml0ZW1zfVxuXHRcdFx0XHR1c2VEcmFnSGFuZGxlPXt0cnVlfVxuXHRcdFx0XHRvblNvcnRFbmQ9e2hhbmRsZVNvcnR9XG5cdFx0XHRcdGNoYW5nZUJhc2VDb21wb3Nlcj17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyfVxuXHRcdFx0XHRkZWxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmRlbGV0ZUl0ZW1Db21wb3Nlcn1cblx0XHRcdFx0Y29tcGxldGVJdGVtQ29tcG9zZXI9e3Byb3BzLmNvbXBsZXRlSXRlbUNvbXBvc2VyfVxuXHRcdFx0XHRjbGFzc0Zvckxpc3Q9e2NsYXNzZXMucm9vdH1cblx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3NlciA9e3Byb3BzLmNoYW5nZUNvbG9yQ29tcG9zZXJ9XG5cdFx0XHRcdGJnQ29sb3JDb21wb3Nlcj17cHJpbWFyeUNvbG9yUGFyc2VyfVxuXHRcdFx0XHR0ZXh0Q29sb3JDb21wb3Nlcj17dGV4dENvbG9yUGFyc2VyfVxuXHRcdFx0XHR1cGRhdGVJdGVtPXtwcm9wcy51cGRhdGVJdGVtfVxuXHRcdFx0XHRoZWxwZXJDbGFzcz17cHJvcHMuY2xhc3Nlcy5oZWxwZXJ9XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuSW5jb21wbGV0ZUxpc3QucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVTaGVldCkoSW5jb21wbGV0ZUxpc3QpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0luY29tcGxldGVMaXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXNcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJtYXRlcmlhbC11aS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgRGl2aWRlciBmcm9tIFwibWF0ZXJpYWwtdWkvRGl2aWRlclwiO1xuaW1wb3J0IENoZXZyb25SaWdodCBmcm9tIFwibWF0ZXJpYWwtdWktaWNvbnMvQ2hldnJvblJpZ2h0XCI7XG5pbXBvcnQgTmV3SXRlbUZvcm0gZnJvbSBcIi4vTmV3SXRlbUZvcm0uanNcIjtcbmltcG9ydCB7cHJpbWFyeUNvbG9yUGFyc2VyLCBmYWRlZENvbG9yUGFyc2VyLCB0ZXh0Q29sb3JQYXJzZXIsIGFjY2VudENvbG9yUGFyc2VyLCBhY2NlbnRUZXh0Q29sb3JQYXJzZXIsIGZhZGVkQWNjZW50Q29sb3JQYXJzZXJ9IGZyb20gJy4uL2hlbHBlcnMvY29sb3JQYXJzZXIuanMnXG5pbXBvcnQgTmV0d29ya1Byb2dyZXNzIGZyb20gJy4vUHJvZ3Jlc3MuanMnXG5pbXBvcnQgSGVhZGVyTWVudSBmcm9tICcuL0hlYWRlck1lbnUuanMnXG5pbXBvcnQgRWRpdGFibGVUZXh0QXJlYSBmcm9tICcuL0VkaXRhYmxlVGV4dEFyZWEuanMnXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIm1hdGVyaWFsLXVpL0NoZWNrYm94XCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9JY29uQnV0dG9uJ1xuXG5jb25zdCBzdHlsZVNoZWV0ID0gY3JlYXRlU3R5bGVTaGVldChcIkhlYWRlclwiLCB0aGVtZSA9PiAoe1xuXHR0aXRsZUNvbnRhaW5lcjoge1xuXHRcdHBhZGRpbmc6IDE2LFxuXHRcdGRpc3BsYXk6J2ZsZXgnXG5cdH0sXG5cdHRpdGxlVGV4dDp7XG5cdFx0ZmxleEdyb3c6MVxuXHR9LFxuXHRjcnVtYjoge1xuXHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0ZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuXHRcdGN1cnNvcjogXCJwb2ludGVyXCIsXG5cdFx0XCImOmhvdmVyXCI6IHtcblx0XHRcdHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiXG5cdFx0fVxuXHR9LFxuXHRjcnVtYkNvbnRhaW5lcjoge1xuXHRcdHBhZGRpbmc6IDE2XG5cdH1cbn0pKTtcblxuY29uc3QgTGlzdEhlYWRlciA9IHByb3BzID0+IHtcblx0Y29uc3QgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXM7XG5cdGNvbnN0IGN1cnJlbnRJdGVtQ29sb3IgPSBwcm9wcy5pdGVtc1twcm9wcy5iYXNlSXRlbV0uY29sb3Jcblx0Y29uc3QgaW5jb21wbGV0ZUNvbG9yID0gcHJpbWFyeUNvbG9yUGFyc2VyKGN1cnJlbnRJdGVtQ29sb3IpXG5cdGNvbnN0IGluY29tcGxldGVUZXh0Q29sb3IgPSB0ZXh0Q29sb3JQYXJzZXIoY3VycmVudEl0ZW1Db2xvcilcblx0Y29uc3QgaW5jb21wbGV0ZUFjY2VudENvbG9yID0gYWNjZW50Q29sb3JQYXJzZXIoY3VycmVudEl0ZW1Db2xvcilcblx0Y29uc3QgY29tcGxldGVBY2NlbnRDb2xvciA9IGZhZGVkQWNjZW50Q29sb3JQYXJzZXIoY3VycmVudEl0ZW1Db2xvcilcblx0Y29uc3QgaW5jb21wbGV0ZUFjY2VudFRleHRDb2xvciA9IGFjY2VudFRleHRDb2xvclBhcnNlcihjdXJyZW50SXRlbUNvbG9yKVxuXHRjb25zdCBjb21wbGV0ZSA9IHByb3BzLmJhc2VJdGVtID09PSAncm9vdCcgPyBmYWxzZSA6IHByb3BzLml0ZW1zW3Byb3BzLmJhc2VJdGVtXS5jb21wbGV0ZVxuXG5cdGNvbnN0IGNvbXBsZXRlQ29sb3IgPSBmYWRlZENvbG9yUGFyc2VyKGN1cnJlbnRJdGVtQ29sb3IpXG5cdGNvbnN0IHRleHRDb2xvciA9IGNvbXBsZXRlID8gXCIjMDAwMDAwXCIgOiBpbmNvbXBsZXRlVGV4dENvbG9yXG5cdGNvbnN0IGJnQ29sb3IgPSBjb21wbGV0ZSA/IGNvbXBsZXRlQ29sb3IgOiBpbmNvbXBsZXRlQ29sb3Jcblx0Y29uc3QgYWNjZW50Q29sb3IgPSBjb21wbGV0ZSA/IGNvbXBsZXRlQWNjZW50Q29sb3IgOiBpbmNvbXBsZXRlQWNjZW50Q29sb3Jcblx0Y29uc3QgYWNjZW50VGV4dENvbG9yID0gY29tcGxldGUgPyBcIiMwMDAwMDBcIiA6IGluY29tcGxldGVBY2NlbnRUZXh0Q29sb3JcblxuXHRjb25zdCBoZWFkZXJUZXh0ID0gcHJvcHMuaXRlbXNbcHJvcHMuYmFzZUl0ZW1dLmNvbnRlbnRcblxuXHRjb25zdCBCcmVhZENydW1iID0gKCkgPT4ge1xuXHRcdGxldCB0cmFpbCA9IFtdO1xuXHRcdGxldCBjdXJyZW50ID0gcHJvcHMuYmFzZUl0ZW07XG5cdFx0bGV0IGNvdW50ZXIgPSAwO1xuXHRcdGlmIChjdXJyZW50ID09PSBcInJvb3RcIikge1xuXHRcdFx0dHJhaWwgPSBbXCJyb290XCJdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aGlsZSAocHJvcHMuaXRlbXNbY3VycmVudF0ucGFyZW50ICE9PSBcInJvb3RcIiAmJiBjb3VudGVyIDwgMTApIHtcblx0XHRcdFx0dHJhaWwgPSBbY3VycmVudCwgLi4udHJhaWxdO1xuXHRcdFx0XHRjdXJyZW50ID0gcHJvcHMuaXRlbXNbY3VycmVudF0ucGFyZW50O1xuXHRcdFx0XHRjb3VudGVyKys7XG5cdFx0XHR9XG5cdFx0XHR0cmFpbCA9IFtcInJvb3RcIiwgY3VycmVudCwgLi4udHJhaWxdO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFR5cG9ncmFwaHlcblx0XHRcdHR5cGU9e1wiYm9keTFcIn1cblx0XHRcdGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5jcnVtYkNvbnRhaW5lcn1cblx0XHRcdHN0eWxlPXt7Y29sb3I6dGV4dENvbG9yfX1cblx0XHRcdD5cblx0XHRcdFx0e3RyYWlsLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0a2V5PXtgYnJlYWRjcnVtYi0ke2luZGV4fWB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17cHJvcHMuY2xhc3Nlcy5jcnVtYn1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17cHJvcHMuY2hhbmdlQmFzZUNvbXBvc2VyKGl0ZW0pfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7aXRlbSA9PT0gXCJyb290XCJcblx0XHRcdFx0XHRcdFx0XHQ/IFwicm9vdFwiXG5cdFx0XHRcdFx0XHRcdFx0OiBwcm9wcy5pdGVtc1tpdGVtXS5jb250ZW50fVxuXHRcdFx0XHRcdFx0XHR7aW5kZXggPCB0cmFpbC5sZW5ndGggLSAxXG5cdFx0XHRcdFx0XHRcdFx0PyA8Q2hldnJvblJpZ2h0IC8+XG5cdFx0XHRcdFx0XHRcdFx0OiBcIlwifXtcIiBcIn1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHQpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdHN0eWxlPXt7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6YmdDb2xvcixcblx0XHRcdGNvbG9yOnRleHRDb2xvcixcblx0XHRcdHRyYW5zaXRpb246Jy41cydcblxuXHRcdH19XG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVDb250YWluZXJ9PlxuXHRcdFx0e3Byb3BzLmJhc2VJdGVtID09PSAncm9vdCcgP1xuXHRcdFx0PEljb25CdXR0b24gLz4gOihcblx0XHRcdFx0PENoZWNrYm94XG5cdFx0XHRcdGNoZWNrZWQ9e2NvbXBsZXRlfVxuXHRcdFx0XHRvbkNsaWNrPXtwcm9wcy5jb21wbGV0ZUl0ZW1Db21wb3Nlcihwcm9wcy5iYXNlSXRlbSl9XG5cdFx0XHRcdHN0eWxlPXt7Y29sb3I6dGV4dENvbG9yfX1cblx0XHRcdFx0Lz4pfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZVRleHR9PlxuXHRcdFx0XHRcdDxFZGl0YWJsZVRleHRBcmVhXG5cdFx0XHRcdFx0XHRwcmltYXJ5PXtoZWFkZXJUZXh0fVxuXHRcdFx0XHRcdFx0c2Vjb25kYXJ5PXtwcm9wcy5jb3VudGVyVGV4dH1cblx0XHRcdFx0XHRcdHRleHRDb2xvcj17dGV4dENvbG9yfVxuXHRcdFx0XHRcdFx0cmF3VGV4dD17aGVhZGVyVGV4dH1cblx0XHRcdFx0XHRcdHVwZGF0ZUl0ZW09e3Byb3BzLnVwZGF0ZUl0ZW19XG5cdFx0XHRcdFx0XHRpZD17cHJvcHMuYmFzZUl0ZW19XG5cdFx0XHRcdFx0XHRjb21wbGV0ZT17Y29tcGxldGV9XG5cdFx0XHRcdFx0XHRoZWFkZXI9e3RydWV9XG5cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PEhlYWRlck1lbnVcblx0XHRcdFx0dGV4dENvbG9yPXt0ZXh0Q29sb3J9XG5cdFx0XHRcdGJhc2VJdGVtPXtwcm9wcy5iYXNlSXRlbX1cblx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3Nlcj17cHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PERpdmlkZXIgLz5cblx0XHRcdDxCcmVhZENydW1iIC8+XG5cdFx0XHQ8RGl2aWRlciAvPlxuXHRcdFx0PE5ld0l0ZW1Gb3JtXG5cdFx0XHRuZXdJdGVtQWN0aW9uPXtwcm9wcy5uZXdJdGVtQWN0aW9ufVxuXHRcdFx0dGV4dENvbG9yPXt0ZXh0Q29sb3J9XG5cdFx0XHRhY2NlbnRDb2xvcj17YWNjZW50Q29sb3J9XG5cdFx0XHRhY2NlbnRUZXh0Q29sb3I9e2FjY2VudFRleHRDb2xvcn1cblx0XHRcdC8+XG5cdFx0XHQ8RGl2aWRlciAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuTGlzdEhlYWRlci5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShMaXN0SGVhZGVyKTtcblxuLy8gPE5ldHdvcmtQcm9ncmVzc1xuLy8gdGV4dENvbG9yPXt0ZXh0Q29sb3J9XG4vLyB1cGRhdGVEYXRhPXtwcm9wcy51cGRhdGVEYXRhfVxuLy8gLz5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvTGlzdEhlYWRlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBOztBQUpBO0FBTUE7QUFOQTtBQUNBO0FBbEJBO0FBQ0E7QUErQkE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFHQTtBQUpBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBREE7O0FBTkE7QUFjQTtBQWRBO0FBQ0E7Ozs7QUFlQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFJQTtBQUpBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFBQTtBQUFBO0FBV0E7Ozs7QUFHQTtBQUFBOzs7O0FBSUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7OztBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFrQkE7QUFDQTtBQTNDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFOQTtBQU9BO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBakJBO0FBQ0E7QUFnQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFkQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRkE7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQXBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUFBO0FBUEE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFZQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQXpCQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQVdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRkE7QUFJQTtBQUNBOztBQURBO0FBQUE7QUFBQTtBQUNBO0FBSUE7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBTUE7QUFDQTs7OztBQUlBO0FBQUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUhBO0FBTUE7QUFOQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBUEE7QUFVQTtBQVZBO0FBQ0E7QUFVQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBRUE7QUFGQTtBQUFBO0FBR0E7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBTUE7QUFOQTtBQUNBO0FBT0E7QUFDQTtBQUFBOztBQUhBO0FBQUE7QUFBQTtBQUNBOztBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBREE7QUFHQTtBQUhBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFFQTs7QUFEQTtBQUdBO0FBSEE7QUFDQTtBQUdBO0FBQ0E7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7O0FBR0E7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBM0lBO0FBQ0E7QUFpSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBSkE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7OztBQUdBO0FBQUE7QUFFQTtBQUdBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7O0FBRUE7QUFDQTs7OztBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7O0FBR0E7QUFFQTs7OztBQUtBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVhBO0FBYUE7QUFiQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFSQTtBQVlBO0FBWkE7QUFDQTs7Ozs7QUF6SEE7QUFDQTtBQXNJQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7QUFHQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hLQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7OztBQUdBO0FBQ0E7QUFFQTtBQUpBOztBQU9BO0FBRkE7O0FBR0E7QUFBQTtBQVRBO0FBREE7QUFDQTtBQWNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVkE7QUFhQTtBQWJBO0FBQ0E7QUFlQTtBQXJCQTtBQUNBO0FBc0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVJBO0FBV0E7QUFYQTtBQUNBO0FBSEE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBWkE7QUFnQkE7QUFoQkE7QUFDQTtBQVhBO0FBQ0E7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7OztBQUdBO0FBRUE7QUFIQTs7QUFNQTtBQUZBOztBQUlBO0FBQ0E7QUFDQTs7QUFJQTtBQUhBO0FBSkE7O0FBUUE7QUFBQTtBQWhCQTtBQURBO0FBQ0E7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBOztBQUhBO0FBS0E7QUFMQTtBQUNBO0FBTUE7QUFFQTtBQUFBO0FBQ0E7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBQ0E7QUFBQTs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUhBOztBQUZBO0FBUUE7QUFSQTtBQUNBO0FBT0E7QUFDQTtBQURBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTs7QUFUQTtBQVlBO0FBWkE7QUFDQTtBQWFBO0FBQUE7QUFDQTs7QUFIQTtBQU1BO0FBTkE7QUFDQTs7QUFLQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBOztBQUpBO0FBTUE7QUFOQTtBQUNBOztBQUtBO0FBR0E7QUFIQTtBQUFBO0FBdkdBO0FBQ0E7QUEyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9