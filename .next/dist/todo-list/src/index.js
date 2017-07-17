"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _reducers = require("./reducers");

var _reducers2 = _interopRequireDefault(_reducers);

var _App = require("./App");

var _App2 = _interopRequireDefault(_App);

var _reduxPromise = require("redux-promise");

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _styles = require("material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStoreWithMiddleware = (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxPromise2.default))(_redux.createStore);
// import ReactDOM from "react-dom";
// import registerServiceWorker from "./registerServiceWorker";


var Boiler = function Boiler() {
	return _react2.default.createElement(_reactRedux.Provider, { store: createStoreWithMiddleware(_reducers2.default) }, _react2.default.createElement(_styles.MuiThemeProvider, null, _react2.default.createElement(_App2.default, null)));
};

// ReactDOM.render(<Boiler />, document.getElementById("root"));
// registerServiceWorker();

exports.default = Boiler;