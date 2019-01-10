import React from 'react';
import { CodeBoxStyled } from './styles/CodeBoxStyled';
import { CodeBoxContentStyled } from './styles/CodeBoxContentStyled';

export const CodeBox = props => (
  <CodeBoxStyled>
    <CodeBoxContentStyled>
      {props.children}
    </CodeBoxContentStyled>
  </CodeBoxStyled>
);

CodeBox.displayName = 'CodeBox';
