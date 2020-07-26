const palette = {
  greenPrimary: '#2cb9b0',
  black: '#0c0d34',
  blackLight: 'rgba(12, 13, 52, 0.7)',
  grey: 'rgba(12, 13, 52, 0.05)',
  white: '#fff',
  transparent: 'transparent',
  red: '#FF0058',
};

const theme = {
  colors: {
    primary: palette.greenPrimary,
    secondary: palette.black,
    baseText: palette.blackLight,
    grey: palette.grey,
    white: palette.white,
    transparent: palette.transparent,
    danger: palette.red,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 70,
      color: 'white',
      textAlign: 'center',
    },
    title1: {
      fontFamily: 'SFProDisplay-Semibold',
      fontSize: 28,
      color: 'secondary',
      textAlign: 'center',
    },
    title2: {
      fontFamily: 'SFProDisplay-Semibold',
      fontSize: 24,
      color: 'secondary',
      textAlign: 'center',
    },
    body: {
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 16,
      color: 'baseText',
    },
    button: {
      fontFamily: 'SFProDisplay-Medium',
      fontSize: 15,
      color: 'baseText',
      textAlign: 'center',
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export default theme;
