/* eslint-disable @typescript-eslint/no-require-imports */
const { Table, Thead, Tbody, Tr, Th, Td } = require('./src');
require('./src/SuperResponsiveTableStyle.css');

module.exports = {
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
    i: 5,
    headers: ['Name', 'Age'],
  },
};
