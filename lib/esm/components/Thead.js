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
var Thead = function (props) {
    var children = props.children;
    return (React.createElement("thead", __assign({ "data-testid": "thead" }, allowed(props)), React.cloneElement(children, { inHeader: true })));
};
Thead.propTypes = {
    children: T.node,
};
Thead.defaultProps = {
    children: undefined,
};
export default Thead;
