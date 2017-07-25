"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.black = exports.white = exports.fadedAccentColorParser = exports.fadedColorParser = exports.accentColorParser = exports.primaryColorParser = exports.rawColorParser = undefined;
exports.textColorParser = textColorParser;
exports.accentTextColorParser = accentTextColorParser;

var _colors = require("material-ui/colors");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function colorParserComposer(modifier
// }

function colorParserComposer(modifier) {
	var colors = {
		red: _colors.red,
		pink: _colors.pink,
		purple: _colors.purple,
		deepPurple: _colors.deepPurple,
		indigo: _colors.indigo,
		blue: _colors.blue,
		lightBlue: _colors.lightBlue,
		cyan: _colors.cyan,
		teal: _colors.teal,
		green: _colors.green,
		lightGreen: _colors.lightGreen,
		lime: _colors.lime,
		yellow: _colors.yellow,
		amber: _colors.amber,
		orange: _colors.orange,
		deepOrange: _colors.deepOrange,
		grey: _colors.grey
	};

	return function (colorText) {
		if (colors.hasOwnProperty(colorText)) {
			return colors[colorText][modifier];
		} else {
			return "no match";
		}
	};
}

function textColorParser(colorText, complete) {
	var whiteList = ["red", "pink", "purple", "deepPurple", "indigo", "blue", "teal", "deepOrange", "brown", "blueGrey"];
	var blackList = ["lightBlue", "cyan", "green", "lightGreen", "lime", "yellow", "amber", "orange", "grey"];
	if (complete) {
		if (_lodash2.default.includes(whiteList, colorText)) {
			return "#000000";
		} else {
			return "#ffffff";
		}
	} else {
		if (_lodash2.default.includes(whiteList, colorText)) {
			return "#ffffff";
		} else {
			return "#000000";
		}
	}
}

function accentTextColorParser(colorText) {
	var whiteList = ["red", "pink", "purple", "deepPurple", "indigo", "blue", "deepOrange"];
	var blackList = ["lightBlue", "cyan", "teal", "gren", "lightGreen", "lime", "yellow", "amber", "orange"];

	if (_lodash2.default.includes(whiteList, colorText)) {
		return "#ffffff";
	} else {
		return "#000000";
	}
}

var rawColorParser = exports.rawColorParser = function rawColorParser(colorText) {
	var colors = {
		red: _colors.red,
		pink: _colors.pink,
		purple: _colors.purple,
		deepPurple: _colors.deepPurple,
		indigo: _colors.indigo,
		blue: _colors.blue,
		lightBlue: _colors.lightBlue,
		cyan: _colors.cyan,
		teal: _colors.teal,
		green: _colors.green,
		lightGreen: _colors.lightGreen,
		lime: _colors.lime,
		yellow: _colors.yellow,
		amber: _colors.amber,
		orange: _colors.orange,
		deepOrange: _colors.deepOrange,
		grey: _colors.grey
	};
	if (colors.hasOwnProperty(colorText)) {
		return colors[colorText];
	} else {
		return _colors.grey;
	}
};

var primaryColorParser = exports.primaryColorParser = colorParserComposer(500);

var accentColorParser = exports.accentColorParser = colorParserComposer("A400");

var fadedColorParser = exports.fadedColorParser = colorParserComposer(100);

var fadedAccentColorParser = exports.fadedAccentColorParser = colorParserComposer("A100");

var white = exports.white = {
	50: "#ffffff",
	100: "#ffffff",
	200: "#ffffff",
	300: "#ffffff",
	400: "#ffffff",
	500: "#ffffff",
	600: "#ffffff",
	700: "#ffffff",
	800: "#ffffff",
	900: "#ffffff",
	A100: "#ffffff",
	A200: "#ffffff",
	A400: "#ffffff",
	A700: "#fffff",
	contrastDefaultColor: "dark"
};

var black = exports.black = {
	50: "#000000",
	100: "#000000",
	200: "#000000",
	300: "#000000",
	400: "#000000",
	500: "#000000",
	600: "#000000",
	700: "#000000",
	800: "#000000",
	900: "#000000",
	A100: "#000000",
	A200: "#000000",
	A400: "#000000",
	A700: "#000000",
	contrastDefaultColor: "dark"
};