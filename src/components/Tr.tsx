import React from "react";
import { TableRow } from "../models.interface";

import { HeadersContext } from "../utils/HeadersContext";
import TrInner from "./TrInner";

const Tr = (props: TableRow) => {
  console.log(props)
  return (
  <HeadersContext.Consumer>
    {([headers, setHeaders]) => (
      <TrInner {...props} headers={headers} setHeaders={setHeaders} />
    )}
  </HeadersContext.Consumer>
)};

export default Tr;
