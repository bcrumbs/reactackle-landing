import React from 'react';
import { AppStyled } from './styles/AppStyled';

export const App = props => (
  <AppStyled>
    {props.children}
  </AppStyled>
);

App.displayName = 'App';
