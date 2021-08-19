import {colors} from './colors';

export const Fonts = {
  xxs: 12,
  sm: 16,
  md: 20,
  lg: 28,
  xl: 32,
  xxl: 40,
};

export const typography = {
  heading1: {
    color: colors.gray.dark,
    fontFamily: 'Futura-Book-Bold',
    fontSize: Fonts.xxl,
    lineHeight: Fonts.xxl,
  },
  heading2: {
    color: colors.gray.dark,
    fontFamily: 'Futura-Book-Bold',
    fontSize: Fonts.xl,
    lineHeight: Fonts.xl,
  },
  heading3: {
    color: colors.gray.dark,
    fontFamily: 'Futura-Book',
    fontSize: Fonts.lg,
    lineHeight: Fonts.xl,
  },
  heading4: {
    color: colors.gray.dark,
    fontFamily: 'Futura-Book',
    fontSize: Fonts.md,
    lineHeight: Fonts.md,
  },
  heading5: {
    color: colors.gray.dark,
    fontFamily: 'Futura-Book',
    fontSize: Fonts.sm,
    lineHeight: Fonts.md,
  },
  heading6: {
    color: colors.gray.dark,
    fontFamily: 'Futura-Book',
    fontSize: Fonts.xxs,
    lineHeight: Fonts.xxs,
  },
};
