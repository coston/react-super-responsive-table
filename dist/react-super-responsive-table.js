(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SuperResponsiveTable = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _propTypes = (typeof window !== "undefined" ? window['PropTypes'] : typeof global !== "undefined" ? global['PropTypes'] : null);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _provideContext = require('./provideContext');

var _provideContext2 = _interopRequireDefault(_provideContext);

var _withContext = require('./withContext');

var _withContext2 = _interopRequireDefault(_withContext);

var contextShape = _propTypes2['default'].shape({ headers: _propTypes2['default'].object });
var TableContext = (0, _provideContext2['default'])('responsiveTable', contextShape);
var withTableContext = (0, _withContext2['default'])('responsiveTable', contextShape);
var pick = function pick(obj, props) {
  return Array.prototype.reduce.call(props, function (built, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop) ? _extends({}, built, _defineProperty({}, prop, obj[prop])) : built;
  }, {});
};
var allowed = function allowed(props) {
  return pick(props, ['className', 'id', 'style', 'children']);
};

var Table = (function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    _get(Object.getPrototypeOf(Table.prototype), 'constructor', this).call(this, props);
    this.state = {
      headers: {}
    };
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      var headers = this.state.headers;

      var classes = (this.props.className || '') + ' responsiveTable';
      return _react2['default'].createElement(
        TableContext,
        { headers: headers },
        _react2['default'].createElement('table', _extends({}, allowed(this.props), { className: classes }))
      );
    }
  }]);

  return Table;
})(_react2['default'].Component);

exports.Table = Table;
var Thead = function Thead(props) {
  return _react2['default'].createElement(
    'thead',
    allowed(props),
    _react2['default'].cloneElement(props.children, { inHeader: true })
  );
};

exports.Thead = Thead;

var TrInner = (function (_React$Component2) {
  _inherits(TrInner, _React$Component2);

  function TrInner(props) {
    _classCallCheck(this, TrInner);

    _get(Object.getPrototypeOf(TrInner.prototype), 'constructor', this).call(this, props);
    var headers = props.responsiveTable.headers;

    if (headers && props.inHeader) {
      props.children.map(function (child, i) {
        headers[i] = child.props.children;
      });
    }
  }

  _createClass(TrInner, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2['default'].createElement(
        'tr',
        allowed(this.props),
        children && _react2['default'].Children.map(children, function (child, i) {
          return _react2['default'].cloneElement(child, {
            key: i,
            columnKey: i
          });
        })
      );
    }
  }]);

  return TrInner;
})(_react2['default'].Component);

var Tr = withTableContext(TrInner);
exports.Tr = Tr;
var Th = function Th(props) {
  return _react2['default'].createElement('th', allowed(props));
};
exports.Th = Th;
var Tbody = function Tbody(props) {
  return _react2['default'].createElement('tbody', allowed(props));
};

exports.Tbody = Tbody;

var TdInner = (function (_React$Component3) {
  _inherits(TdInner, _React$Component3);

  function TdInner() {
    _classCallCheck(this, TdInner);

    _get(Object.getPrototypeOf(TdInner.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(TdInner, [{
    key: 'render',
    value: function render() {
      if (this.props.colSpan) {
        return _react2['default'].createElement('td', allowed(this.props));
      }
      var _props = this.props;
      var headers = _props.responsiveTable.headers;
      var children = _props.children;
      var columnKey = _props.columnKey;

      return _react2['default'].createElement(
        'td',
        { className: 'pivoted' },
        _react2['default'].createElement(
          'div',
          { className: 'tdBefore' },
          headers[columnKey]
        ),
        children !== undefined ? children : _react2['default'].createElement(
          'div',
          null,
          ' '
        )
      );
    }
  }]);

  return TdInner;
})(_react2['default'].Component);

var Td = withTableContext(TdInner);
exports.Td = Td;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./provideContext":2,"./withContext":3}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var provideContext = function provideContext(contextKey, contextType) {
  var ProvideContext = (function (_React$Component) {
    _inherits(ProvideContext, _React$Component);

    function ProvideContext() {
      _classCallCheck(this, ProvideContext);

      _get(Object.getPrototypeOf(ProvideContext.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ProvideContext, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var _props = this.props;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['children']);

        return _defineProperty({}, contextKey, props);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].Children.only(this.props.children);
      }
    }]);

    return ProvideContext;
  })(_react2['default'].Component);

  ProvideContext.childContextTypes = _defineProperty({}, contextKey, contextType);

  return ProvideContext;
};

exports['default'] = provideContext;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

exports['default'] = function (contextKey, contextType) {
  return function (Component) {
    var WithContext = (function (_React$Component) {
      _inherits(WithContext, _React$Component);

      function WithContext() {
        _classCallCheck(this, WithContext);

        _get(Object.getPrototypeOf(WithContext.prototype), 'constructor', this).apply(this, arguments);
      }

      _createClass(WithContext, [{
        key: 'render',
        value: function render() {
          var props = _extends({}, this.props, _defineProperty({}, contextKey, this.context[contextKey]));
          return _react2['default'].createElement(Component, props);
        }
      }]);

      return WithContext;
    })(_react2['default'].Component);

    var displayName = Component.displayName || Component.name || 'Component';
    WithContext.displayName = 'WithContext(' + displayName + ')';

    WithContext.contextTypes = _defineProperty({}, contextKey, contextType);

    return WithContext;
  };
};

module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});