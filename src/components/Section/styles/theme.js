import {
  baseModule,
  fontWeightSemibold,
} from '../../../styles/themeSelectors';

export default {
  breakpoints: {
    base: {
      padding: baseModule(3),
      paddingBottom: baseModule(4),
    },
    medium: {
      padding: baseModule(5),
      paddingBottom: baseModule(6),
    },
    large: {
      padding: baseModule(6),
      paddingBottom: baseModule(8),
      fontWeight: fontWeightSemibold,
    },
  }
};
