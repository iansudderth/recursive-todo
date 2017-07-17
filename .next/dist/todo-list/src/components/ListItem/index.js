"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactConfirmAlert = require("react-confirm-alert");

var _reactConfirmAlert2 = _interopRequireDefault(_reactConfirmAlert);

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

var BaseListItem = function BaseListItem(props) {
	var item = props.value;

	var DragHandle = (0, _reactSortableHoc.SortableHandle)(function () {
		return _react2.default.createElement(_IconButton2.default, { disabled: item.complete }, _react2.default.createElement(_Reorder2.default, null));
	});
	var incompleteListStyle = { backgroundColor: _colors.lightBlue[200] };
	var completeListStyle = { backgroundColor: _colors.grey[300] };
	var listItemStyle = item.complete ? completeListStyle : incompleteListStyle;
	var completeGrey = _colors.grey[500];
	var completeLineStyle = item.complete ? { color: completeGrey, textDecoration: "line-through" } : {};
	var completeStyle = item.complete ? { color: completeGrey } : {};

	function handleDelete() {
		(0, _reactConfirmAlert.confirmAlert)({
			title: "Confirm Delete",
			message: "Are you sure you want to delete \"" + item.content + "\" and all its children?",
			confirmLabel: "Confirm",
			cancelLabel: "Cancel",
			onConfirm: props.deleteItemComposer(item.id),
			onCancel: function onCancel() {
				return console.log("cancel");
			}
		});
	}

	function completeDisplay() {
		var completed = item.completeChildren.length;
		var total = completed + item.incompleteChildren.length;
		if (total === 0) {
			return "";
		} else {
			return _react2.default.createElement("span", {
				style: completeStyle
			}, "( " + completed + " / " + total + " complete)");
		}
	}

	function content() {
		return _react2.default.createElement("span", { style: completeLineStyle }, item.content);
	}

	return _react2.default.createElement(_List.ListItem, { divider: true, style: listItemStyle }, _react2.default.createElement(DragHandle, null), _react2.default.createElement(_Checkbox2.default, {
		checked: item.complete,
		onClick: props.completeItemComposer(item.id),
		style: completeStyle
	}), _react2.default.createElement(_List.ListItemText, { primary: content(), secondary: completeDisplay() }), _react2.default.createElement(_IconButton2.default, {
		onClick: props.changeBaseComposer(item.id),
		style: completeStyle
	}, _react2.default.createElement(_FormatListBulleted2.default, null)), _react2.default.createElement(_IconButton2.default, {
		onClick: props.deleteItemComposer(item.id),
		style: completeStyle
	}, _react2.default.createElement(_DeleteForever2.default, null)));
};
// import style from "./style.css";
// import PropTypes from 'prop-types'
// import _ from 'lodash';


BaseListItem.propTypes = {};

exports.default = BaseListItem;