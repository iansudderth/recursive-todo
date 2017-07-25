"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IncompleteList = require("./IncompleteList.js");

var _IncompleteList2 = _interopRequireDefault(_IncompleteList);

var _CompleteList = require("./CompleteList.js");

var _CompleteList2 = _interopRequireDefault(_CompleteList);

var _styles = require("material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/List.js";
// import style from "./style.css";

// import _ from 'lodash';


var styleSheet = (0, _styles.createStyleSheet)("List", {
	container: {}
});

var List = function List(props) {
	var itemsList = props.items;
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
			lineNumber: 29
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
			lineNumber: 30
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
			lineNumber: 41
		}
	}));
};

List.propTypes = {
	items: _propTypes2.default.object,
	baseItem: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	updateItem: _propTypes2.default.func,
	changeColorComposer: _propTypes2.default.func,
	reorderItemComposer: _propTypes2.default.func,
	completeItemComposer: _propTypes2.default.func,
	deleteItemComposer: _propTypes2.default.func,
	changeBaseComposer: _propTypes2.default.func,
	classes: _propTypes2.default.object
};

exports.default = (0, _styles.withStyles)(styleSheet)(List);