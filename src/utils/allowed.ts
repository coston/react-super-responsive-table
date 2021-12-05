const omit = (obj: any, omitProps: any) =>
  Object.keys(obj)
    .filter((key) => omitProps.indexOf(key) === -1)
    .reduce((returnObj, key) => ({ ...returnObj, [key]: obj[key] }), {});

const allowed = (props: any) =>
  omit(props, ['inHeader', 'columnKey', 'headers', 'forwardedRef']);

export default allowed;
