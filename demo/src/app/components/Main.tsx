'use client';

import React from 'react';
import PkgDemo from 'react-pkg-demo';
import { Table, Thead, Tbody, Tr, Th, Td } from '../../../../src';
import '../../../../src/SuperResponsiveTableStyle.css';

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
