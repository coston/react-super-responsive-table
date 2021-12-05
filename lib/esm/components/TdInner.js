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
var TdInner = function (props) {
    var headers = props.headers, children = props.children, columnKey = props.columnKey, className = props.className, colSpan = props.colSpan;
    var classes = "".concat(className || '', " pivoted");
    if (colSpan) {
        return React.createElement("td", __assign({ "data-testid": "td" }, allowed(props)));
    }
    return (React.createElement("td", __assign({ "data-testid": "td" }, allowed(props), { className: classes }),
        React.createElement("div", { "data-testid": "td-before", className: "tdBefore" }, headers[columnKey]), children !== null && children !== void 0 ? children : React.createElement("div", null, "\u00A0")));
};
TdInner.propTypes = {
    children: T.node,
    headers: T.shape({}),
    columnKey: T.number,
    className: T.string,
    colSpan: T.oneOfType([T.number, T.string]),
};
TdInner.defaultProps = {
    children: undefined,
    headers: undefined,
    columnKey: undefined,
    className: undefined,
    colSpan: undefined,
};
export default TdInner;
