'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Theme, injectGlobalStyle, injectResetStyle } from 'reactackle';
import { App } from './components/App/App';
import { SectionWelcome } from './layouts/SectionWelcome/SectionWelcome';
import { SectionAbout } from './layouts/SectionAbout/SectionAbout';
import { SectionConnect } from './layouts/SectionConnect/SectionConnect';
import reactackleThemeMixin from './assets/styles/reactackleThemeMixin'
import theme from './assets/styles/theme'

injectGlobalStyle();
injectResetStyle();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Theme mixin={reactackleThemeMixin}>
      <ThemeProvider theme={theme}>
        <App>
          <SectionWelcome />
          <SectionAbout />
          <SectionConnect />
        </App>
      </ThemeProvider>
    </Theme>,
    
    document.getElementById('container'),
  );
});
