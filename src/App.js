import React, { Component } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Theme } from "reactackle";
import { App } from "./components/App/App";
import { SectionWelcome } from "./layouts/SectionWelcome/SectionWelcome";
import { SectionAbout } from "./layouts/SectionAbout/SectionAbout";
import { SectionConnect } from "./layouts/SectionConnect/SectionConnect";
import reactackleThemeMixin from "./styles/reactackleThemeMixin";
import theme from "./styles/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

class Root extends Component {
  render() {
    return (
      <Theme mixin={reactackleThemeMixin}>
        <>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <App>
              <SectionWelcome />
              <SectionAbout />
              <SectionConnect />
            </App>
          </ThemeProvider>
        </>
      </Theme>
    );
  }
}

export default Root;
