"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consumer = exports.Provider = void 0;

var _react = _interopRequireDefault(require("react"));

var _createReactContext = _interopRequireDefault(require("create-react-context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// use the polyfill only if Context API not available (react<16)
var createContext = _react["default"].createContext || _createReactContext["default"];

var _createContext = createContext({}),
    Provider = _createContext.Provider,
    Consumer = _createContext.Consumer;

exports.Consumer = Consumer;
exports.Provider = Provider;