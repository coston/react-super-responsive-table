/// <reference types="react" />
import T from 'prop-types';
declare const TdInner: {
    (props: any): JSX.Element;
    propTypes: {
        children: T.Requireable<T.ReactNodeLike>;
        headers: T.Requireable<T.InferProps<{}>>;
        columnKey: T.Requireable<number>;
        className: T.Requireable<string>;
        colSpan: T.Requireable<string | number>;
    };
    defaultProps: {
        children: undefined;
        headers: undefined;
        columnKey: undefined;
        className: undefined;
        colSpan: undefined;
    };
};
export default TdInner;
