"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require("redux");

var _items_reducer = require("./items_reducer.js");

var _items_reducer2 = _interopRequireDefault(_items_reducer);

var _baseItem_reducer = require("./baseItem_reducer.js");

var _baseItem_reducer2 = _interopRequireDefault(_baseItem_reducer);

var _network_reducer = require("./network_reducer.js");

var _network_reducer2 = _interopRequireDefault(_network_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	items: _items_reducer2.default,
	baseItem: _baseItem_reducer2.default,
	network: _network_reducer2.default
});

exports.default = rootReducer;