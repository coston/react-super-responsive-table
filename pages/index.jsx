import React from 'react';
import dynamic from 'next/dynamic';
import path from 'path';
import fs from 'fs';
import { Table, Thead, Tbody, Tr, Th, Td } from '../src/index';

const PkgDemo = dynamic(() => import('react-pkg-demo'), { ssr: false });

export async function getStaticProps() {
  const readFile = (filePath) => {
    const absolutePath = path.resolve(process.cwd(), filePath);
    return fs.readFileSync(absolutePath, 'utf8');
  };

  const content = readFile('./readme.md');

  return {
    props: {
      content,
    },
  };
}

function HomePage({ content }) {
  const i = 5;
  const headers = ['Name', 'Age'];

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
