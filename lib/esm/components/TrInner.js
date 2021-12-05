var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import T from 'prop-types';
import allowed from '../utils/allowed';
var TrInner = /** @class */ (function (_super) {
    __extends(TrInner, _super);
    function TrInner(props) {
        var _this = _super.call(this, props) || this;
        var headers = props.headers;
        if (headers && props.inHeader) {
            React.Children.map(props.children, function (child, i) {
                if (child) {
                    headers[i] = child.props.children;
                }
            });
        }
        return _this;
    }
    TrInner.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement("tr", __assign({ "data-testid": "tr" }, allowed(this.props)), children &&
            React.Children.map(children, function (child, i) {
                return child &&
                    React.cloneElement(child, {
                        // eslint-disable-next-line react/no-array-index-key
                        key: i,
                        columnKey: i,
                    });
            })));
    };
    return TrInner;
}(React.Component));
TrInner.propTypes = {
    children: T.node,
    headers: T.shape({}),
    inHeader: T.bool,
};
TrInner.defaultProps = {
    children: undefined,
    headers: undefined,
    inHeader: undefined,
};
export default TrInner;
