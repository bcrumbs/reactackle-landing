import {
  basicColors,
  themeColors,
  paletteBlueGrey,
} from './constants';

export default {
  colorBorder: paletteBlueGrey[300],
  
  color: {
    main: themeColors.main,
    mainFgTextColor: basicColors.white,
    secondary: themeColors.secondary,
    secondaryFgTextColor: basicColors.white,
  },
  
  fontColor: {
    light: paletteBlueGrey[300],
    medium: paletteBlueGrey[500],
  },

  fontSize: {
    '-2': 11,
    '-1': 13,
    0: 16,
    1: 16,
    2: 18,
    3: 24,
    4: 34,
    5: 45,
    6: 56,
    7: 112,
  }
};
