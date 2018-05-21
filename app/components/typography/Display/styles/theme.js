'use strict';

import {
  fontSizeTitle,
  fontSizeHeadline,
  fontSizeDisplay1,
  fontSizeDisplay2,
  fontSizeDisplay3,
  fontSizeDisplay4,
  fontWeightNormal,
  fontWeightSemibold,
  colorWhite,
  colorSecondary,
  textColorBody,
} from '../../../../assets/styles/themeSelectors';

export const displayDefaults = {
  level: {
    1: {
      fontSize: fontSizeTitle,
      fontWeight: fontWeightSemibold,
      
      color: {
        light: colorWhite,
        dark: textColorBody,
      },

      breakpoints: [
        {
          breakpoint: '60em',
          fontSize: fontSizeDisplay1,
          fontWeight: fontWeightSemibold,
  
          color: {
            light: colorWhite,
            dark: textColorBody,
          },
        },
      ],
    },
    
    2: {
      fontSize: fontSizeHeadline,
      fontWeight: fontWeightSemibold,
  
      color: {
        light: colorWhite,
        dark: textColorBody,
      },

      breakpoints: [
        {
          breakpoint: '20em',
          fontSize: fontSizeDisplay1,
          fontWeight: fontWeightSemibold,
  
          color: {
            light: colorWhite,
            dark: textColorBody,
          },
        },
        {
          breakpoint: '40em',
          fontSize: fontSizeDisplay2,
          fontWeight: fontWeightSemibold,
  
          color: {
            light: colorWhite,
            dark: textColorBody,
          },
        },
      ],
    },
    
    3: {
      fontSize: fontSizeDisplay1,
      fontWeight: fontWeightSemibold,
  
      color: {
        light: colorWhite,
        dark: colorSecondary,
      },

      breakpoints: [
        {
          breakpoint: '20em',
          fontSize: fontSizeDisplay2,
          fontWeight: fontWeightSemibold,
  
          color: {
            light: colorWhite,
            dark: colorSecondary,
          },
        },
        {
          breakpoint: '40em',
          fontSize: fontSizeDisplay3,
          fontWeight: fontWeightNormal,
  
          color: {
            light: colorWhite,
            dark: colorSecondary,
          },
        },
      ],
    },
    
    4: {
      fontSize: fontSizeDisplay2,
      fontWeight: fontWeightSemibold,
  
      color: {
        light: colorWhite,
        dark: textColorBody,
      },

      breakpoints: [
        {
          breakpoint: '40em',
          fontSize: fontSizeDisplay2,
          fontWeight: fontWeightSemibold,
  
          color: {
            light: colorWhite,
            dark: textColorBody,
          },
        },
        {
          breakpoint: '65em',
          fontSize: fontSizeDisplay3,
          fontWeight: fontWeightSemibold,
  
          color: {
            light: colorWhite,
            dark: textColorBody,
          },
        },
        {
          breakpoint: '75em',
          fontSize: fontSizeDisplay4,
          fontWeight: fontWeightSemibold,
  
          color: {
            light: colorWhite,
            dark: textColorBody,
          },
        },
      ],
    },
  }
};
