/**
 * @author Ekaterina Marova
 */

'use strict';

import React from 'react';
import { ColumnDescriptionStyled } from './styles/ColumnDescriptionStyled';

export const DataColumnDescription = props => (
  <ColumnDescriptionStyled>
    {props.children}
  </ColumnDescriptionStyled>
);

DataColumnDescription.displayName = 'DataColumnDescription';
