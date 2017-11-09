'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Td = exports.Tbody = exports.Th = exports.Tr = exports.Thead = exports.Table = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _provideContext = require('./provideContext');

var _provideContext2 = _interopRequireDefault(_provideContext);

var _withContext = require('./withContext');

var _withContext2 = _interopRequireDefault(_withContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var contextShape = _propTypes2.default.shape({ headers: _propTypes2.default.object });
var TableContext = (0, _provideContext2.default)('responsiveTable', contextShape);
var withTableContext = (0, _withContext2.default)('responsiveTable', contextShape);
var omit = function omit(obj, omitProps) {
  return Object.keys(obj).filter(function (key) {
    return omitProps.indexOf(key) === -1;
  }).reduce(function (returnObj, key) {
    return _extends({}, returnObj, _defineProperty({}, key, obj[key]));
  }, {});
};

var allowed = function allowed(props) {
  return omit(props, ['inHeader', 'columnKey', 'responsiveTable']);
};

var Table = exports.Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.state = {
      headers: {}
    };
    return _this;
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      var headers = this.state.headers;

      var classes = (this.props.className || '') + ' responsiveTable';
      return _react2.default.createElement(
        TableContext,
        { headers: headers },
        _react2.default.createElement('table', _extends({}, allowed(this.props), { className: classes }))
      );
    }
  }]);

  return Table;
}(_react2.default.Component);

var Thead = exports.Thead = function Thead(props) {
  return _react2.default.createElement(
    'thead',
    allowed(props),
    _react2.default.cloneElement(props.children, { inHeader: true })
  );
};

var TrInner = function (_React$Component2) {
  _inherits(TrInner, _React$Component2);

  function TrInner(props) {
    _classCallCheck(this, TrInner);

    var _this2 = _possibleConstructorReturn(this, (TrInner.__proto__ || Object.getPrototypeOf(TrInner)).call(this, props));

    var headers = props.responsiveTable.headers;

    if (headers && props.inHeader) {
      props.children.map(function (child, i) {
        headers[i] = child.props.children;
      });
    }
    return _this2;
  }

  _createClass(TrInner, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        'tr',
        allowed(this.props),
        children && _react2.default.Children.map(children, function (child, i) {
          return _react2.default.cloneElement(child, {
            key: i,
            columnKey: i
          });
        })
      );
    }
  }]);

  return TrInner;
}(_react2.default.Component);

var Tr = exports.Tr = withTableContext(TrInner);
var Th = exports.Th = function Th(props) {
  return _react2.default.createElement('th', allowed(props));
};
var Tbody = exports.Tbody = function Tbody(props) {
  return _react2.default.createElement('tbody', allowed(props));
};

var TdInner = function (_React$Component3) {
  _inherits(TdInner, _React$Component3);

  function TdInner() {
    _classCallCheck(this, TdInner);

    return _possibleConstructorReturn(this, (TdInner.__proto__ || Object.getPrototypeOf(TdInner)).apply(this, arguments));
  }

  _createClass(TdInner, [{
    key: 'render',
    value: function render() {
      if (this.props.colSpan) {
        return _react2.default.createElement('td', allowed(this.props));
      }
      var _props = this.props,
          headers = _props.responsiveTable.headers,
          children = _props.children,
          columnKey = _props.columnKey;

      var classes = (this.props.className || '') + ' pivoted';
      return _react2.default.createElement(
        'td',
        { className: classes },
        _react2.default.createElement(
          'div',
          { className: 'tdBefore' },
          headers[columnKey]
        ),
        children !== undefined ? children : _react2.default.createElement(
          'div',
          null,
          '\xA0'
        )
      );
    }
  }]);

  return TdInner;
}(_react2.default.Component);

var Td = exports.Td = withTableContext(TdInner);