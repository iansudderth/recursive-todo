"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactSortableHoc = require("react-sortable-hoc");

var _ListItem = require("./ListItem.js");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = require("material-ui/List");

var _List2 = _interopRequireDefault(_List);

var _styles = require("material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/IncompleteList.js",
    _this = undefined;
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

var IncompleteList = function IncompleteList(props) {
	var classes = props.classes;

	var SortableListItem = (0, _reactSortableHoc.SortableElement)(function (_ref) {
		var value = _ref.value;

		return _react2.default.createElement(_ListItem2.default, {
			value: value,
			changeBaseComposer: props.changeBaseComposer,
			deleteItemComposer: props.deleteItemComposer,
			completeItemComposer: props.completeItemComposer,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 30
			},
			__self: _this
		});
	});

	var SortableList = (0, _reactSortableHoc.SortableContainer)(function (_ref2) {
		var items = _ref2.items;

		return _react2.default.createElement(_List2.default, { className: classes.root, __source: {
				fileName: _jsxFileName,
				lineNumber: 41
			},
			__self: _this
		}, items.map(function (value, index) {
			return _react2.default.createElement(SortableListItem, {
				key: "item-" + value.id,
				index: index,
				value: value,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				},
				__self: _this
			});
		}));
	});

	function handleSort(_ref3, e) {
		var oldIndex = _ref3.oldIndex,
		    newIndex = _ref3.newIndex,
		    collection = _ref3.collection;

		props.reorderItemComposer(props.parentID, oldIndex, newIndex)();
	}

	return _react2.default.createElement("ul", { className: classes.container, __source: {
			fileName: _jsxFileName,
			lineNumber: 60
		},
		__self: _this
	}, _react2.default.createElement(SortableList, {
		items: props.items,
		useDragHandle: true,
		onSortEnd: handleSort,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 61
		},
		__self: _this
	}));
};

IncompleteList.propTypes = {};

exports.default = (0, _styles.withStyles)(styleSheet)(IncompleteList);