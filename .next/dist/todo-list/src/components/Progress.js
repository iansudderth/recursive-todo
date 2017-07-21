'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Check = require('material-ui-icons/Check');

var _Check2 = _interopRequireDefault(_Check);

var _Save = require('material-ui-icons/Save');

var _Save2 = _interopRequireDefault(_Save);

var _Report = require('material-ui-icons/Report');

var _Report2 = _interopRequireDefault(_Report);

var _Autorenew = require('material-ui-icons/Autorenew');

var _Autorenew2 = _interopRequireDefault(_Autorenew);

var _reactMdSpinner = require('react-md-spinner');

var _reactMdSpinner2 = _interopRequireDefault(_reactMdSpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iansudderth/Desktop/recursive-to-do/recursive-todo/todo-list/src/components/Progress.js';


var NetworkProgress = function NetworkProgress(props) {
	var icon = '';
	switch (props.network) {
		case 'progress':
			icon = _react2.default.createElement(_reactMdSpinner2.default, { singleColor: props.textColor, __source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			});
			break;
		case 'success':
			icon = _react2.default.createElement(_Check2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			});
			break;
		case 'error':
			icon = _react2.default.createElement(_Report2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			});
			break;
	}
	return _react2.default.createElement('span', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}, _react2.default.createElement(_Button2.default, {
		style: { color: props.textColor },
		onClick: props.updateData,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}, icon));
};

function mapStateToProps(_ref) {
	var network = _ref.network;

	return { network: network };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(NetworkProgress);