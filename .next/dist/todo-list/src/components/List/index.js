"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ListItem = require("../ListItem/");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _IncompleteList = require("../IncompleteList/");

var _IncompleteList2 = _interopRequireDefault(_IncompleteList);

var _CompleteList = require("../CompleteList/");

var _CompleteList2 = _interopRequireDefault(_CompleteList);

var _styles = require("material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	return _react2.default.createElement("div", { className: classes.container }, _react2.default.createElement(_IncompleteList2.default, {
		items: incompleteListItems,
		parentID: props.baseItem,
		renderChildren: true,
		changeBaseComposer: props.changeBaseComposer,
		deleteItemComposer: props.deleteItemComposer,
		completeItemComposer: props.completeItemComposer,
		reorderItemComposer: props.reorderItemComposer
	}), _react2.default.createElement(_CompleteList2.default, {
		items: completeListItems,
		parentID: props.baseItem,
		renderChildren: true,
		changeBaseComposer: props.changeBaseComposer,
		deleteItemComposer: props.deleteItemComposer,
		completeItemComposer: props.completeItemComposer,
		reorderItemComposer: props.reorderItemComposer
	}));
};

List.propTypes = {};

exports.default = (0, _styles.withStyles)(styleSheet)(List);