import { Table, Thead, Tbody, Tr, Th, Td } from './src';
import './src/SuperResponsiveTableStyle.css';

const i = 5;
const headers = ['Name', 'Age'];

const config = {
  color: '#ffa3b3',
  packageName: 'react-super-responsive-table',
  description:
    'react-super-responsive-table converts your table data to a user-friendly list in mobile view.',
  icon: '⌗',
  scope: {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    i,
    headers,
  },
};

export default config;
