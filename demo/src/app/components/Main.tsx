'use client';

import React from 'react';
import PkgDemo from 'react-pkg-demo';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function Button({ ...rest }) {
  return <button style={{ background: 'white' }} {...rest} />;
}
const i = 0;
const headers = ['Name', 'Age', 'Address', 'Phone', 'Email', 'Company'];
function HomePage({ content }: { content: string }) {
  return (
    <PkgDemo
      color="#ffa3b3"
      packageName="react-super-responsive-table"
      icon="⌗"
      markdown={content}
      scope={{
        Table,
        Thead,
        Tbody,
        Tr,
        Th,
        Td,
        i,
        headers,
      }}
    />
  );
}

export default HomePage;
