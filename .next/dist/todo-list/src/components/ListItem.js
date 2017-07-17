"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _DeleteForever = require("material-ui-icons/DeleteForever");

var _DeleteForever2 = _interopRequireDefault(_DeleteForever);

var _FormatListBulleted = require("material-ui-icons/FormatListBulleted");

var _FormatListBulleted2 = _interopRequireDefault(_FormatListBulleted);

var _colors = require("material-ui/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListItem.js",
    _this = undefined;
// import style from "./style.css";
// import PropTypes from 'prop-types'
// import _ from 'lodash';


var BaseListItem = function BaseListItem(props) {
	var item = props.value;

	var DragHandle = (0, _reactSortableHoc.SortableHandle)(function () {
		return _react2.default.createElement(_IconButton2.default, { disabled: item.complete, __source: {
				fileName: _jsxFileName,
				lineNumber: 18
			},
			__self: _this
		}, _react2.default.createElement(_Reorder2.default, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 19
			},
			__self: _this
		}));
	});
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
					lineNumber: 41
				},
				__self: this
			}, "( " + completed + " / " + total + " complete)");
		}
	}

	function content() {
		return _react2.default.createElement("span", { style: completeLineStyle, __source: {
				fileName: _jsxFileName,
				lineNumber: 50
			},
			__self: this
		}, item.content);
	}

	return _react2.default.createElement(_List.ListItem, { divider: true, style: listItemStyle, __source: {
			fileName: _jsxFileName,
			lineNumber: 57
		},
		__self: _this
	}, _react2.default.createElement(DragHandle, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 58
		},
		__self: _this
	}), _react2.default.createElement(_Checkbox2.default, {
		checked: item.complete,
		onClick: props.completeItemComposer(item.id),
		style: completeStyle,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 59
		},
		__self: _this
	}), _react2.default.createElement(_List.ListItemText, { primary: content(), secondary: completeDisplay(), __source: {
			fileName: _jsxFileName,
			lineNumber: 65
		},
		__self: _this
	}), _react2.default.createElement(_IconButton2.default, {
		onClick: props.changeBaseComposer(item.id),
		style: completeStyle,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 67
		},
		__self: _this
	}, _react2.default.createElement(_FormatListBulleted2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 71
		},
		__self: _this
	})), _react2.default.createElement(_IconButton2.default, {
		onClick: props.deleteItemComposer(item.id),
		style: completeStyle,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 74
		},
		__self: _this
	}, _react2.default.createElement(_DeleteForever2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 78
		},
		__self: _this
	})));
};

BaseListItem.propTypes = {};

exports.default = BaseListItem;