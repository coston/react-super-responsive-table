"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Td = exports.Tbody = exports.Th = exports.Tr = exports.Thead = exports.Table = void 0;

var _react = _interopRequireDefault(require("react"));

var _tableContext = require("./tableContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var omit = function omit(obj, omitProps) {
  return Object.keys(obj).filter(function (key) {
    return omitProps.indexOf(key) === -1;
  }).reduce(function (returnObj, key) {
    return _objectSpread({}, returnObj, _defineProperty({}, key, obj[key]));
  }, {});
};

var allowed = function allowed(props) {
  return omit(props, ['inHeader', 'columnKey', 'headers']);
};

var Table =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Table).call(this, props));
    _this.state = {
      headers: {}
    };
    return _this;
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var headers = this.state.headers;
      var classes = (this.props.className || '') + ' responsiveTable';
      return _react["default"].createElement(_tableContext.Provider, {
        value: headers
      }, _react["default"].createElement("table", _extends({}, allowed(this.props), {
        className: classes
      })));
    }
  }]);

  return Table;
}(_react["default"].Component);

exports.Table = Table;

var Thead = function Thead(props) {
  return _react["default"].createElement("thead", allowed(props), _react["default"].cloneElement(props.children, {
    inHeader: true
  }));
};

exports.Thead = Thead;

var TrInner =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(TrInner, _React$Component2);

  function TrInner(props) {
    var _this2;

    _classCallCheck(this, TrInner);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(TrInner).call(this, props));
    var headers = props.headers;

    if (headers && props.inHeader) {
      _react["default"].Children.map(props.children, function (child, i) {
        if (child) {
          headers[i] = child.props.children;
        }
      });
    }

    return _this2;
  }

  _createClass(TrInner, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react["default"].createElement("tr", allowed(this.props), children && _react["default"].Children.map(children, function (child, i) {
        return child && _react["default"].cloneElement(child, {
          key: i,
          columnKey: i
        });
      }));
    }
  }]);

  return TrInner;
}(_react["default"].Component);

var Tr = function Tr(props) {
  return _react["default"].createElement(_tableContext.Consumer, null, function (headers) {
    return _react["default"].createElement(TrInner, _extends({}, props, {
      headers: headers
    }));
  });
};

exports.Tr = Tr;

var Th = function Th(props) {
  return _react["default"].createElement("th", allowed(props));
};

exports.Th = Th;

var Tbody = function Tbody(props) {
  return _react["default"].createElement("tbody", allowed(props));
};

exports.Tbody = Tbody;

var TdInner =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(TdInner, _React$Component3);

  function TdInner() {
    _classCallCheck(this, TdInner);

    return _possibleConstructorReturn(this, _getPrototypeOf(TdInner).apply(this, arguments));
  }

  _createClass(TdInner, [{
    key: "render",
    value: function render() {
      if (this.props.colSpan) {
        return _react["default"].createElement("td", allowed(this.props));
      }

      var _this$props = this.props,
          headers = _this$props.headers,
          children = _this$props.children,
          columnKey = _this$props.columnKey;
      var classes = (this.props.className || '') + ' pivoted';
      return _react["default"].createElement("td", _extends({}, allowed(this.props), {
        className: classes
      }), _react["default"].createElement("div", {
        className: "tdBefore"
      }, headers[columnKey]), children || _react["default"].createElement("div", null, "\xA0"));
    }
  }]);

  return TdInner;
}(_react["default"].Component);

var Td = function Td(props) {
  return _react["default"].createElement(_tableContext.Consumer, null, function (headers) {
    return _react["default"].createElement(TdInner, _extends({}, props, {
      headers: headers
    }));
  });
};

exports.Td = Td;