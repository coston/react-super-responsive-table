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
import { Consumer } from '../utils/tableContext';
import TdInner from './TdInner';
var Td = function (props) { return (React.createElement(Consumer, null, function (headers) { return React.createElement(TdInner, __assign({}, props, { headers: headers })); })); };
export default Td;
