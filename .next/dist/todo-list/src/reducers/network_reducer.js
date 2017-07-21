"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = network;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = require("../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function network() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "success";
	var action = arguments[1];

	switch (action.type) {
		case _actions.UPDATE_ERROR:
			return "error";

		case _actions.UPDATE_SUCCESS:
			return "success";

		case _actions.UPDATE_PROGRESS:
			return "progress";

		default:
			return state;
	}
}