"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ListItem = require("./ListItem.js");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = require("material-ui/List");

var _List2 = _interopRequireDefault(_List);

var _styles = require("material-ui/styles");

var _colorParser = require("../helpers/colorParser.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/CompleteList.js";
// import _ from "lodash";


var styleSheet = (0, _styles.createStyleSheet)("CompleteList", {
	container: {
		margin: 0,
		padding: 0
	}
});

var CompleteList = function CompleteList(props) {
	var classes = props.classes;

	return _react2.default.createElement(_List2.default, { className: classes.container, __source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}, props.items.map(function (value) {
		return _react2.default.createElement(_ListItem2.default, {
			key: "item-" + value.id,
			value: value,
			changeBaseComposer: props.changeBaseComposer,
			deleteItemComposer: props.deleteItemComposer,
			completeItemComposer: props.completeItemComposer,
			changeColorComposer: props.changeColorComposer,
			itemColor: (0, _colorParser.fadedColorParser)(value.color),
			textColor: (0, _colorParser.textColorParser)(value.color),
			updateItem: props.updateItem,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 26
			}
		});
	}));
};

CompleteList.propTypes = {
	classes: _propTypes2.default.object,
	updateItem: _propTypes2.default.func,
	items: _propTypes2.default.array
};

exports.default = (0, _styles.withStyles)(styleSheet)(CompleteList);