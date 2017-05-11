'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = function (contextKey, contextType) {
  return function (Component) {
    return _react2['default'].createClass({
      contextTypes: _defineProperty({}, contextKey, contextType),

      render: function render() {
        var props = _extends({}, this.props, _defineProperty({}, contextKey, this.context[contextKey]));
        return _react2['default'].createElement(Component, props);
      }
    });
  };
};

module.exports = exports['default'];