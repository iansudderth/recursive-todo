"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require("material-ui/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Brightness = require("material-ui-icons/Brightness1");

var _Brightness2 = _interopRequireDefault(_Brightness);

var _colorParser = require("../helpers/colorParser.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ColorMenu.js";


var ColorMenu = function ColorMenu(props) {
	var colors = ["red", "pink", "deepPurple", "indigo", "lightBlue", "cyan", "teal", "green", "lightGreen", "yellow", "orange", "deepOrange"];
	return _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}, colors.map(function (color, index) {
		var breakLine = index % 4 === 3 ? _react2.default.createElement("br", {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 26
			}
		}) : "";

		return _react2.default.createElement("span", {
			key: color + "-" + index,
			onClick: props.clickHandler(color),
			__source: {
				fileName: _jsxFileName,
				lineNumber: 29
			}
		}, _react2.default.createElement(_IconButton2.default, {
			style: { color: (0, _colorParser.primaryColorParser)(color) },
			__source: {
				fileName: _jsxFileName,
				lineNumber: 33
			}
		}, _react2.default.createElement(_Brightness2.default, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 36
			}
		})), breakLine);
	}));
};

ColorMenu.propTypes = {
	clickHandler: _propTypes2.default.func
};

exports.default = ColorMenu;