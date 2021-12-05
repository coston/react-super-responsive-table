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
var omit = function (obj, omitProps) {
    return Object.keys(obj)
        .filter(function (key) { return omitProps.indexOf(key) === -1; })
        .reduce(function (returnObj, key) {
        var _a;
        return (__assign(__assign({}, returnObj), (_a = {}, _a[key] = obj[key], _a)));
    }, {});
};
var allowed = function (props) {
    return omit(props, ['inHeader', 'columnKey', 'headers', 'forwardedRef']);
};
export default allowed;
