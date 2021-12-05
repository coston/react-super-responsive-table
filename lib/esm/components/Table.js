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
import React, { useState } from 'react';
import { Provider } from '../utils/tableContext';
import allowed from '../utils/allowed';
var Table = function (_a) {
    var className = _a.className, forwardedRef = _a.forwardedRef;
    var headers = useState({})[0];
    var classes = "".concat(className || '', " responsiveTable");
    return (React.createElement(Provider, { value: headers },
        React.createElement("table", __assign({ "data-testid": "table" }, allowed({ className: className, forwardedRef: forwardedRef }), { className: classes, ref: forwardedRef }))));
};
Table.defaultProps = {
    className: undefined,
    forwardedRef: undefined,
};
var TableForwardRef = React.forwardRef(function (props, ref) { return (React.createElement(Table, __assign({}, props, { forwardedRef: ref }))); });
TableForwardRef.displayName = Table.name;
export default TableForwardRef;
