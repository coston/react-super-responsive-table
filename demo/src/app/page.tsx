import React from 'react';
import Main from './components/Main';
import fs from 'fs';
import path from 'path';

const readFile = (filePath: string): string => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  return fs.readFileSync(absolutePath, 'utf8');
};

function HomePage() {
  const content = readFile('../README.md');
  return <Main content={content} />;
}

export default HomePage;
