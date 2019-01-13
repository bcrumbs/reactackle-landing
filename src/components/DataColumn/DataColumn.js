import React from 'react';
import { DataColumnStyled } from './styles/DataColumnStyled';

export const DataColumn = props => (
  <DataColumnStyled>{props.children}</DataColumnStyled>
);

DataColumn.displayName = 'DataColumn';

export * from './DataColumnsWrapper/DataColumnsWrapper';
export * from './DataColumnTitle/DataColumnTitle';
export * from './DataColumnDescription/DataColumnDescription';
