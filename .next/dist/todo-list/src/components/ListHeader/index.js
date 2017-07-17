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

var _angleLeft = require("react-icons/lib/fa/angle-left");

var _angleLeft2 = _interopRequireDefault(_angleLeft);

var _styles = require("material-ui/styles");

var _Typography = require("material-ui/Typography");

var _Typography2 = _interopRequireDefault(_Typography);

var _Card = require("material-ui/Card");

var _Card2 = _interopRequireDefault(_Card);

var _Divider = require("material-ui/Divider");

var _Divider2 = _interopRequireDefault(_Divider);

var _materialUiIcons = require("material-ui-icons");

var _NewItemForm = require("../NewItemForm");

var _NewItemForm2 = _interopRequireDefault(_NewItemForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) {
	if (Array.isArray(arr)) {
		for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
			arr2[i] = arr[i];
		}return arr2;
	} else {
		return Array.from(arr);
	}
}
// import style from "./style.css";


var styleSheet = (0, _styles.createStyleSheet)("Header", function (theme) {
	return {
		titleContainer: {
			padding: 16
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
	};
});

var ListHeader = function ListHeader(props) {
	var classes = props.classes;

	var RootLink = function RootLink() {
		if (props.baseItem === "root") {
			return _react2.default.createElement("li", { className: style.navigation });
		}
		return _react2.default.createElement("li", {
			className: style.navigation,
			onClick: props.changeBaseComposer("root")
		}, _react2.default.createElement(_angleLeft2.default, { className: style.icon }), " Back to root");
	};

	var ParentLink = function ParentLink() {
		if (props.baseItem === "root" || props.currentParent === "root") {
			return _react2.default.createElement("li", { className: style.navigation });
		}
		return _react2.default.createElement("li", {
			className: style.navigation,
			onClick: props.changeBaseComposer(props.currentParent)
		}, _react2.default.createElement(_angleLeft2.default, { className: style.icon }), " Back to parent");
	};

	var BreadCrumb = function BreadCrumb() {
		var trail = [];
		var current = props.baseItem;
		var counter = 0;
		if (current === "root") {
			trail = ["root"];
		} else {
			while (props.items[current].parent !== "root" && counter < 10) {
				trail = [current].concat(_toConsumableArray(trail));
				current = props.items[current].parent;
				counter++;
			}
			trail = ["root", current].concat(_toConsumableArray(trail));
		}
		return _react2.default.createElement(_Typography2.default, { type: "body1", className: props.classes.crumbContainer }, trail.map(function (item, index) {
			return _react2.default.createElement("span", {
				key: "breadcrumb-" + index,
				className: props.classes.crumb,
				onClick: props.changeBaseComposer(item)
			}, item == "root" ? "root" : props.items[item].content, index < trail.length - 1 ? _react2.default.createElement(_materialUiIcons.ChevronRight, null) : "", " ");
		}));
	};

	return _react2.default.createElement("div", null, _react2.default.createElement("div", { className: classes.titleContainer }, _react2.default.createElement(_Typography2.default, { type: "headline", align: "center" }, props.baseItem === "root" ? "root" : props.baseItemText), _react2.default.createElement(_Typography2.default, { type: "subheading", align: "center" }, props.counterText)), _react2.default.createElement(_Divider2.default, null), _react2.default.createElement(BreadCrumb, null), _react2.default.createElement(_Divider2.default, null), _react2.default.createElement(_NewItemForm2.default, { newItemAction: props.newItemAction }));
};

ListHeader.propTypes = {};

exports.default = (0, _styles.withStyles)(styleSheet)(ListHeader);