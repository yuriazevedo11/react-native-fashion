const palette = {
  greenPrimary: '#2cb9b0',
  black: '#0c0d34',
  blackLight: 'rgba(12, 13, 52, 0.7)',
  grey: 'rgba(12, 13, 52, 0.05)',
  white: '#fff',
};

const theme = {
  colors: {
    primary: palette.greenPrimary,
    title: palette.black,
    baseText: palette.blackLight,
    buttonDefaultBackground: palette.grey,
    white: palette.white,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontFamily: 'SFProText-Bold',
      fontSize: 70,
      color: 'white',
      textAlign: 'center',
    },
    title1: {
      fontFamily: 'SFProText-Semibold',
      fontSize: 28,
      color: 'title',
      textAlign: 'center',
    },
    title2: {
      fontFamily: 'SFProText-Semibold',
      fontSize: 24,
      color: 'title',
      textAlign: 'center',
    },
    body: {
      fontFamily: 'SFProText-Regular',
      fontSize: 16,
      color: 'baseText',
    },
    button: {
      fontFamily: 'SFProText-Regular',
      fontSize: 15,
      color: 'baseText',
      textAlign: 'center',
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export default theme;
