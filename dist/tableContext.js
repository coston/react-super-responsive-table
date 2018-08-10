'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consumer = exports.Provider = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactContext = require('create-react-context');

var _createReactContext2 = _interopRequireDefault(_createReactContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// use the polyfill only if Context API not available (react<16)
var createContext = _react2.default.createContext || _createReactContext2.default;

var _React$createContext = _react2.default.createContext({}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

exports.Provider = Provider;
exports.Consumer = Consumer;