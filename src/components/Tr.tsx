import React from "react";

import { HeadersContext } from "../utils/HeadersContext";
import TrInner from "./TrInner";

const Tr = (props: any) => {
  console.log(props)
  return (
  <HeadersContext.Consumer>
    {([headers, setHeaders]) => (
      <TrInner {...props} headers={headers} setHeaders={setHeaders} />
    )}
  </HeadersContext.Consumer>
)};

export default Tr;
