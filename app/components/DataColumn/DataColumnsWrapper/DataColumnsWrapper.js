/**
 * @author Ekaterina Marova
 */

'use strict';

import React from 'react';
import { DataColumnsWrapperStyled } from './styles/DataColumnsWrapperStyled';

export const DataColumnsWrapper = props => (
  <DataColumnsWrapperStyled>
    {props.children}
  </DataColumnsWrapperStyled>
);

DataColumnsWrapper.displayName = 'DataColumnsWrapper';
