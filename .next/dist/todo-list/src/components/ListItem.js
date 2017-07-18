"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactSortableHoc = require("react-sortable-hoc");

var _List = require("material-ui/List");

var _Checkbox = require("material-ui/Checkbox");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _IconButton = require("material-ui/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Reorder = require("material-ui-icons/Reorder");

var _Reorder2 = _interopRequireDefault(_Reorder);

var _Brightness = require("material-ui-icons/Brightness1");

var _Brightness2 = _interopRequireDefault(_Brightness);

var _DeleteForever = require("material-ui-icons/DeleteForever");

var _DeleteForever2 = _interopRequireDefault(_DeleteForever);

var _Settings = require("material-ui-icons/Settings");

var _Settings2 = _interopRequireDefault(_Settings);

var _FormatListBulleted = require("material-ui-icons/FormatListBulleted");

var _FormatListBulleted2 = _interopRequireDefault(_FormatListBulleted);

var _colors = require("material-ui/colors");

var _Button = require("material-ui/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Menu = require("material-ui/Menu");

var _Menu2 = _interopRequireDefault(_Menu);

var _Typography = require("material-ui/Typography");

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = require("material-ui/Divider");

var _Divider2 = _interopRequireDefault(_Divider);

var _colorParser = require("../helpers/colorParser.js");

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