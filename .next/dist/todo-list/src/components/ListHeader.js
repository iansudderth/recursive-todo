"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require("material-ui/styles");

var _Typography = require("material-ui/Typography");

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = require("material-ui/Divider");

var _Divider2 = _interopRequireDefault(_Divider);

var _ChevronRight = require("material-ui-icons/ChevronRight");

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

var _NewItemForm = require("./NewItemForm.js");

var _NewItemForm2 = _interopRequireDefault(_NewItemForm);

var _colorParser = require("../helpers/colorParser.js");

var _HeaderMenu = require("./HeaderMenu.js");

var _HeaderMenu2 = _interopRequireDefault(_HeaderMenu);

var _EditableTextArea = require("./EditableTextArea.js");

var _EditableTextArea2 = _interopRequireDefault(_EditableTextArea);

var _Checkbox = require("material-ui/Checkbox");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _IconButton = require("material-ui/IconButton");

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
			}, props.items[item].content, index < trail.length - 1 ? _react2.default.createElement(_ChevronRight2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 93
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
			lineNumber: 103
		}
	}, _react2.default.createElement("div", { className: classes.titleContainer, __source: {
			fileName: _jsxFileName,
			lineNumber: 110
		}
	}, props.baseItem === "root" ? _react2.default.createElement(_IconButton2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 112
		}
	}) : _react2.default.createElement(_Checkbox2.default, {
		checked: complete,
		onClick: props.completeItemComposer(props.baseItem),
		style: { color: textColor },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 113
		}
	}), _react2.default.createElement("div", { className: classes.titleText, __source: {
			fileName: _jsxFileName,
			lineNumber: 118
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
			lineNumber: 119
		}
	})), _react2.default.createElement(_HeaderMenu2.default, {
		textColor: textColor,
		baseItem: props.baseItem,
		changeColorComposer: props.changeColorComposer,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 130
		}
	})), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 136
		}
	}), _react2.default.createElement(BreadCrumb, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 137
		}
	}), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 138
		}
	}), _react2.default.createElement(_NewItemForm2.default, {
		newItemAction: props.newItemAction,
		textColor: textColor,
		accentColor: accentColor,
		accentTextColor: accentTextColor,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 139
		}
	}), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 145
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