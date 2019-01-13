const multiplierFunctions = Object.create(null);

export const baseModule = multiplier => {
  if (!multiplierFunctions[multiplier]) {
    multiplierFunctions[multiplier] =
      ({ theme }) => theme.reactackle.baseModule * multiplier;
  }
  
  return multiplierFunctions[multiplier];
};

export const radiusDefault = ({ theme }) =>
  theme.reactackle.radiusDefault;
export const contentWidth = ({ theme }) =>
  theme.reactackle.contentWidth;

/* Colors */
export const paletteBlueGrey50 = ({ theme }) =>
  theme.reactackleLanding.paletteBlueGrey[50];
export const paletteBlueGrey75 = ({ theme }) =>
  theme.reactackleLanding.paletteBlueGrey[75];
export const paletteBlueGrey100 = ({ theme }) =>
  theme.reactackleLanding.paletteBlueGrey[100];
export const paletteBlueGrey200 = ({ theme }) =>
  theme.reactackleLanding.paletteBlueGrey[200];
export const paletteBlueGrey300 = ({ theme }) =>
  theme.reactackleLanding.paletteBlueGrey[300];
export const paletteBlueGrey400 = ({ theme }) =>
  theme.reactackleLanding.paletteBlueGrey[400];
export const paletteBlueGrey500 = ({ theme }) =>
  theme.reactackleLanding.paletteBlueGrey[500];
export const paletteBlueGrey600 = ({ theme }) =>
  theme.reactackleLanding.paletteBlueGrey[600];
export const paletteBlueGrey700 = ({ theme }) =>
  theme.reactackleLanding.paletteBlueGrey[700];
export const paletteBlueGrey800 = ({ theme }) =>
  theme.reactackleLanding.paletteBlueGrey[800];
export const paletteBlueGrey900 = ({ theme }) =>
  theme.reactackleLanding.paletteBlueGrey[900];

export const colorPurple = ({ theme }) => theme.reactackleLanding.color.purple;
export const colorBlue = ({ theme }) => theme.reactackleLanding.color.blue;
export const colorDarkBlue = ({ theme }) => theme.reactackleLanding.color.darkblue;
export const colorWhite = ({ theme }) => theme.reactackle.color.white;

export const colorBorder = ({ theme }) => theme.reactackle.colorBorder;

export const colorMain = ({ theme }) =>
  theme.reactackle.color.main;
export const colorMainForeground = ({ theme }) =>
  theme.reactackle.color.mainFgTextColor;
export const colorSecondary = ({ theme }) =>
  theme.reactackle.color.secondary;
export const colorSecondaryForeground = ({ theme }) =>
  theme.reactackle.color.secondaryFgTextColor;
export const colorAlert = ({ theme }) =>
  theme.reactackle.color.alert;
export const colorAlertForeground = ({ theme }) =>
  theme.reactackle.color.alertFgTextColor;
export const colorWarning = ({ theme }) =>
  theme.reactackle.color.warning;
export const colorWarningForeground = ({ theme }) =>
  theme.reactackle.color.warningFgTextColor;
export const colorError = ({ theme }) =>
  theme.reactackle.color.alert;
export const colorErrorForeground = ({ theme }) =>
  theme.reactackle.color.alertFgTextColor;
export const colorSuccess = ({ theme }) =>
  theme.reactackle.color.success;
export const colorSuccessForeground = ({ theme }) =>
  theme.reactackle.color.successFgTextColor;
export const colorInfo = ({ theme }) =>
  theme.reactackle.color.info;
export const colorInfoForeground = ({ theme }) =>
  theme.reactackle.color.infoFgTextColor;

/* Font size */
export const fontSizeXSmall = ({ theme }) =>
  theme.reactackle.fontSize[-2];
export const fontSizeSmall = ({ theme }) =>
  theme.reactackle.fontSize[-1];
export const fontSizeBody = ({ theme }) =>
  theme.reactackle.fontSize[0];
export const fontSizeBody2 = ({ theme }) =>
  theme.reactackle.fontSize[1];
export const fontSizeTitle = ({ theme }) =>
  theme.reactackle.fontSize[2];
export const fontSizeHeadline = ({ theme }) =>
  theme.reactackle.fontSize[3];
export const fontSizeDisplay1 = ({ theme }) =>
  theme.reactackle.fontSize[4];
export const fontSizeDisplay2 = ({ theme }) =>
  theme.reactackle.fontSize[5];
export const fontSizeDisplay3 = ({ theme }) =>
  theme.reactackle.fontSize[6];
export const fontSizeDisplay4 = ({ theme }) =>
  theme.reactackle.fontSize[7];

/* Font weight */
export const fontWeightLight = ({ theme }) =>
  theme.reactackle.fontWeight.light;
export const fontWeightNormal = ({ theme }) =>
  theme.reactackle.fontWeight.normal;
export const fontWeightSemibold = ({ theme }) =>
  theme.reactackle.fontWeight.semibold;
export const fontWeightBold = ({ theme }) =>
  theme.reactackle.fontWeight.bold;

export const fontFamilyMonospace = ({ theme }) =>
  theme.reactackle.fontFamily.monospace;
export const bodyFontFamily = ({ theme }) =>
  theme.reactackle.fontFamily.sansSerif;
/* Text color */
export const textColorMedium = paletteBlueGrey400;
export const textColorBody = paletteBlueGrey900;
