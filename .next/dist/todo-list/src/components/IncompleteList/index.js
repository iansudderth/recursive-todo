"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _reactSortableHoc = require("react-sortable-hoc");

var _ListItem = require("../ListItem/");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = require("material-ui/List");

var _List2 = _interopRequireDefault(_List);

var _styles = require("material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import style from "./style.css";
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
			completeItemComposer: props.completeItemComposer
		});
	});

	var SortableList = (0, _reactSortableHoc.SortableContainer)(function (_ref2) {
		var items = _ref2.items;

		return _react2.default.createElement(_List2.default, { className: classes.root }, items.map(function (value, index) {
			return _react2.default.createElement(SortableListItem, {
				key: "item-" + value.id,
				index: index,
				value: value
			});
		}));
	});

	function handleSort(_ref3, e) {
		var oldIndex = _ref3.oldIndex,
		    newIndex = _ref3.newIndex,
		    collection = _ref3.collection;

		props.reorderItemComposer(props.parentID, oldIndex, newIndex)();
	}

	return _react2.default.createElement("ul", { className: classes.container }, _react2.default.createElement(SortableList, {
		items: props.items,
		useDragHandle: true,
		onSortEnd: handleSort
	}));
};

IncompleteList.propTypes = {};

exports.default = (0, _styles.withStyles)(styleSheet)(IncompleteList);