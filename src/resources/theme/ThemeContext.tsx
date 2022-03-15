import { createContext } from 'react';

import lightTheme from './lightTheme';

export type ThemeType = {
  transparent: string;
  button: string;
  text: string;
  successColor: string;
  errorColor: string;
  navigationbar: {
    barStyle: string;
  };
  tabbar: {
    active: string;
    inactive: string;
  };
};

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (type: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme,
  setTheme: (type) => console.warn('no theme provider'),
});
