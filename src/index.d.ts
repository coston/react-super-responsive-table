declare module 'react-super-responsive-table' {
  export class Table extends React.Component<TableProps & any, any> {}

  interface TableProps {
    className?: string;
  }

  export class Tbody extends React.Component<TbodyProps & any> {}

  interface TbodyProps {}

  export class Td extends React.Component<TdProps & any> {}

  interface TdProps {}

  export class Th extends React.Component<ThProps & any> {}

  interface ThProps {}

  export class Thead extends React.Component<TheadProps & any> {}

  interface TheadProps {
    children: any;
  }

  export class Tr extends React.Component<TrProps & any> {}

  interface TrProps {}
}
