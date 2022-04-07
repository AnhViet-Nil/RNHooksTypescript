import { useTheme, Theme, DefaultTheme } from '@react-navigation/native';

import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

enum ThemeEnum {
  LIGHT = 'Light',
  DARK = 'Dark',
}

type ThemeColors = typeof lightTheme;

type ThemeType = {
  colors: ThemeColors;
} & Theme;

const LightTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...lightTheme,
  },
};

const DarkTheme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    ...darkTheme,
  },
};

const useCustomTheme = useTheme as () => ThemeType;

export { LightTheme, DarkTheme, useCustomTheme, ThemeEnum };
