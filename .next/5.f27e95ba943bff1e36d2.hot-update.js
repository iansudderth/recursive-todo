webpackHotUpdate(5,{

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = __webpack_require__(100);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(644);

var _Typography = __webpack_require__(661);

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = __webpack_require__(706);

var _Divider2 = _interopRequireDefault(_Divider);

var _ChevronRight = __webpack_require__(943);

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

var _NewItemForm = __webpack_require__(944);

var _NewItemForm2 = _interopRequireDefault(_NewItemForm);

var _colorParser = __webpack_require__(663);

var _Progress = __webpack_require__(953);

var _Progress2 = _interopRequireDefault(_Progress);

var _HeaderMenu = __webpack_require__(1019);

var _HeaderMenu2 = _interopRequireDefault(_HeaderMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListHeader.js";
// import style from "./style.css";
// import PropTypes from "prop-types";
// import _ from "lodash";


var styleSheet = (0, _styles.createStyleSheet)("Header", function (theme) {
	return {
		titleContainer: {
			padding: 16,
			display: 'flex'
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
	};
});

var ListHeader = function ListHeader(props) {
	var classes = props.classes;
	var bgColor = (0, _colorParser.primaryColorParser)(props.items[props.baseItem].color);
	var textColor = (0, _colorParser.textColorParser)(props.items[props.baseItem].color);
	var accentColor = (0, _colorParser.accentColorParser)(props.items[props.baseItem].color);
	var accentTextColor = (0, _colorParser.accentTextColorParser)(props.items[props.baseItem].color);

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
				lineNumber: 57
			}
		}, trail.map(function (item, index) {
			return _react2.default.createElement("span", {
				key: "breadcrumb-" + index,
				className: props.classes.crumb,
				onClick: props.changeBaseComposer(item),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, item === "root" ? "root" : props.items[item].content, index < trail.length - 1 ? _react2.default.createElement(_ChevronRight2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}) : "", " ");
		}));
	};

	return _react2.default.createElement("div", {
		style: {
			backgroundColor: bgColor,
			color: textColor,
			transition: '.5s'

		},
		__source: {
			fileName: _jsxFileName,
			lineNumber: 83
		}
	}, _react2.default.createElement("div", { className: classes.titleContainer, __source: {
			fileName: _jsxFileName,
			lineNumber: 91
		}
	}, _react2.default.createElement(_Progress2.default, {
		textColor: textColor,
		updateData: props.updateData,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 92
		}
	}), _react2.default.createElement("div", { className: classes.titleText, __source: {
			fileName: _jsxFileName,
			lineNumber: 96
		}
	}, _react2.default.createElement(_Typography2.default, {
		type: "headline",
		align: "center",
		style: { color: textColor },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 97
		}
	}, props.baseItem === "root" ? "root" : props.baseItemText), _react2.default.createElement(_Typography2.default, {
		type: "subheading",
		align: "center",
		style: { color: textColor },
		__source: {
			fileName: _jsxFileName,
			lineNumber: 104
		}
	}, props.counterText)), _react2.default.createElement(_HeaderMenu2.default, {
		textColor: textColor,
		baseItem: props.baseItem,
		changeColorComposer: props.changeColorComposer,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 112
		}
	})), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 118
		}
	}), _react2.default.createElement(BreadCrumb, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 119
		}
	}), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 120
		}
	}), _react2.default.createElement(_NewItemForm2.default, {
		newItemAction: props.newItemAction,
		textColor: textColor,
		accentColor: accentColor,
		accentTextColor: accentTextColor,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 121
		}
	}), _react2.default.createElement(_Divider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 127
		}
	}));
};

ListHeader.propTypes = {};

exports.default = (0, _styles.withStyles)(styleSheet)(ListHeader);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListHeader.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/ListHeader.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mMjdlOTViYTk0M2JmZjFlMzZkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL0xpc3RIZWFkZXIuanM/ZmJjZTRmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG4vLyBpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIm1hdGVyaWFsLXVpL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJtYXRlcmlhbC11aS9EaXZpZGVyXCI7XG5pbXBvcnQgQ2hldnJvblJpZ2h0IGZyb20gXCJtYXRlcmlhbC11aS1pY29ucy9DaGV2cm9uUmlnaHRcIjtcbmltcG9ydCBOZXdJdGVtRm9ybSBmcm9tIFwiLi9OZXdJdGVtRm9ybS5qc1wiO1xuaW1wb3J0IHtwcmltYXJ5Q29sb3JQYXJzZXIsIGZhZGVkQ29sb3JQYXJzZXIsIHRleHRDb2xvclBhcnNlciwgYWNjZW50Q29sb3JQYXJzZXIsIGFjY2VudFRleHRDb2xvclBhcnNlcn0gZnJvbSAnLi4vaGVscGVycy9jb2xvclBhcnNlci5qcydcbmltcG9ydCBOZXR3b3JrUHJvZ3Jlc3MgZnJvbSAnLi9Qcm9ncmVzcy5qcydcbmltcG9ydCBIZWFkZXJNZW51IGZyb20gJy4vSGVhZGVyTWVudS5qcydcblxuY29uc3Qgc3R5bGVTaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoXCJIZWFkZXJcIiwgdGhlbWUgPT4gKHtcblx0dGl0bGVDb250YWluZXI6IHtcblx0XHRwYWRkaW5nOiAxNixcblx0XHRkaXNwbGF5OidmbGV4J1xuXHR9LFxuXHR0aXRsZVRleHQ6e1xuXHRcdGZsZXhHcm93OjFcblx0fSxcblx0Y3J1bWI6IHtcblx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcblx0XHRjdXJzb3I6IFwicG9pbnRlclwiLFxuXHRcdFwiJjpob3ZlclwiOiB7XG5cdFx0XHR0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIlxuXHRcdH1cblx0fSxcblx0Y3J1bWJDb250YWluZXI6IHtcblx0XHRwYWRkaW5nOiAxNlxuXHR9XG59KSk7XG5cbmNvbnN0IExpc3RIZWFkZXIgPSBwcm9wcyA9PiB7XG5cdGNvbnN0IGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzO1xuXHRjb25zdCBiZ0NvbG9yID0gcHJpbWFyeUNvbG9yUGFyc2VyKHByb3BzLml0ZW1zW3Byb3BzLmJhc2VJdGVtXS5jb2xvcilcblx0Y29uc3QgdGV4dENvbG9yID0gdGV4dENvbG9yUGFyc2VyKHByb3BzLml0ZW1zW3Byb3BzLmJhc2VJdGVtXS5jb2xvcilcblx0Y29uc3QgYWNjZW50Q29sb3IgPSBhY2NlbnRDb2xvclBhcnNlcihwcm9wcy5pdGVtc1twcm9wcy5iYXNlSXRlbV0uY29sb3IpXG5cdGNvbnN0IGFjY2VudFRleHRDb2xvciA9IGFjY2VudFRleHRDb2xvclBhcnNlcihwcm9wcy5pdGVtc1twcm9wcy5iYXNlSXRlbV0uY29sb3IpXG5cblx0Y29uc3QgQnJlYWRDcnVtYiA9ICgpID0+IHtcblx0XHRsZXQgdHJhaWwgPSBbXTtcblx0XHRsZXQgY3VycmVudCA9IHByb3BzLmJhc2VJdGVtO1xuXHRcdGxldCBjb3VudGVyID0gMDtcblx0XHRpZiAoY3VycmVudCA9PT0gXCJyb290XCIpIHtcblx0XHRcdHRyYWlsID0gW1wicm9vdFwiXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2hpbGUgKHByb3BzLml0ZW1zW2N1cnJlbnRdLnBhcmVudCAhPT0gXCJyb290XCIgJiYgY291bnRlciA8IDEwKSB7XG5cdFx0XHRcdHRyYWlsID0gW2N1cnJlbnQsIC4uLnRyYWlsXTtcblx0XHRcdFx0Y3VycmVudCA9IHByb3BzLml0ZW1zW2N1cnJlbnRdLnBhcmVudDtcblx0XHRcdFx0Y291bnRlcisrO1xuXHRcdFx0fVxuXHRcdFx0dHJhaWwgPSBbXCJyb290XCIsIGN1cnJlbnQsIC4uLnRyYWlsXTtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUeXBvZ3JhcGh5XG5cdFx0XHR0eXBlPXtcImJvZHkxXCJ9XG5cdFx0XHRjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuY3J1bWJDb250YWluZXJ9XG5cdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHQ+XG5cdFx0XHRcdHt0cmFpbC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdGtleT17YGJyZWFkY3J1bWItJHtpbmRleH1gfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3Byb3BzLmNsYXNzZXMuY3J1bWJ9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3Byb3BzLmNoYW5nZUJhc2VDb21wb3NlcihpdGVtKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e2l0ZW0gPT09IFwicm9vdFwiXG5cdFx0XHRcdFx0XHRcdFx0PyBcInJvb3RcIlxuXHRcdFx0XHRcdFx0XHRcdDogcHJvcHMuaXRlbXNbaXRlbV0uY29udGVudH1cblx0XHRcdFx0XHRcdFx0e2luZGV4IDwgdHJhaWwubGVuZ3RoIC0gMVxuXHRcdFx0XHRcdFx0XHRcdD8gPENoZXZyb25SaWdodCAvPlxuXHRcdFx0XHRcdFx0XHRcdDogXCJcIn17XCIgXCJ9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRzdHlsZT17e1xuXHRcdFx0YmFja2dyb3VuZENvbG9yOmJnQ29sb3IsXG5cdFx0XHRjb2xvcjp0ZXh0Q29sb3IsXG5cdFx0XHR0cmFuc2l0aW9uOicuNXMnXG5cblx0XHR9fVxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlQ29udGFpbmVyfT5cblx0XHRcdFx0PE5ldHdvcmtQcm9ncmVzc1xuXHRcdFx0XHR0ZXh0Q29sb3I9e3RleHRDb2xvcn1cblx0XHRcdFx0dXBkYXRlRGF0YT17cHJvcHMudXBkYXRlRGF0YX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVUZXh0fT5cblx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxuXHRcdFx0XHRcdHR5cGU9e1wiaGVhZGxpbmVcIn1cblx0XHRcdFx0XHRhbGlnbj17XCJjZW50ZXJcIn1cblx0XHRcdFx0XHRzdHlsZT17e2NvbG9yOnRleHRDb2xvcn19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3Byb3BzLmJhc2VJdGVtID09PSBcInJvb3RcIiA/IFwicm9vdFwiIDogcHJvcHMuYmFzZUl0ZW1UZXh0fVxuXHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxuXHRcdFx0XHRcdHR5cGU9e1wic3ViaGVhZGluZ1wifVxuXHRcdFx0XHRcdGFsaWduPXtcImNlbnRlclwifVxuXHRcdFx0XHRcdHN0eWxlPXt7Y29sb3I6dGV4dENvbG9yfX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7cHJvcHMuY291bnRlclRleHR9XG5cdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PEhlYWRlck1lbnVcblx0XHRcdFx0dGV4dENvbG9yPXt0ZXh0Q29sb3J9XG5cdFx0XHRcdGJhc2VJdGVtPXtwcm9wcy5iYXNlSXRlbX1cblx0XHRcdFx0Y2hhbmdlQ29sb3JDb21wb3Nlcj17cHJvcHMuY2hhbmdlQ29sb3JDb21wb3Nlcn1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PERpdmlkZXIgLz5cblx0XHRcdDxCcmVhZENydW1iIC8+XG5cdFx0XHQ8RGl2aWRlciAvPlxuXHRcdFx0PE5ld0l0ZW1Gb3JtXG5cdFx0XHRuZXdJdGVtQWN0aW9uPXtwcm9wcy5uZXdJdGVtQWN0aW9ufVxuXHRcdFx0dGV4dENvbG9yPXt0ZXh0Q29sb3J9XG5cdFx0XHRhY2NlbnRDb2xvcj17YWNjZW50Q29sb3J9XG5cdFx0XHRhY2NlbnRUZXh0Q29sb3I9e2FjY2VudFRleHRDb2xvcn1cblx0XHRcdC8+XG5cdFx0XHQ8RGl2aWRlciAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuTGlzdEhlYWRlci5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZVNoZWV0KShMaXN0SGVhZGVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9MaXN0SGVhZGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7OztBQUdBO0FBRUE7QUFIQTs7QUFNQTtBQUZBOztBQUlBO0FBQ0E7QUFDQTs7QUFJQTtBQUhBO0FBSkE7O0FBUUE7QUFBQTtBQWhCQTtBQURBO0FBQ0E7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFNQTtBQUVBO0FBQUE7QUFDQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTs7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFDQTtBQUFBOztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBSEE7O0FBRkE7QUFRQTtBQVJBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQVFBO0FBQ0E7QUFBQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQVNBO0FBQUE7QUFDQTs7QUFIQTtBQU1BO0FBTkE7QUFDQTs7QUFLQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBOztBQUpBO0FBTUE7QUFOQTtBQUNBOztBQUtBO0FBR0E7QUFIQTtBQUFBO0FBNUZBO0FBQ0E7QUFnR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=