'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { 'default': obj } }

function _objectWithoutProperties (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i] } return target }

function _defineProperty (obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }) } else { obj[key] = value } return obj }

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var provideContext = function provideContext (contextKey, contextType) {
  return _react2['default'].createClass({
    childContextTypes: _defineProperty({}, contextKey, contextType),

    getChildContext: function getChildContext () {
      var _props = this.props
      var children = _props.children

      var props = _objectWithoutProperties(_props, ['children'])

      return _defineProperty({}, contextKey, props)
    },

    render: function render () {
      return _react2['default'].Children.only(this.props.children)
    }
  })
}

exports['default'] = provideContext
module.exports = exports['default']
