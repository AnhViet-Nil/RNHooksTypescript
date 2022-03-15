import React, { useState } from 'react';

import { ThemeType, ThemeContext } from './ThemeContext';

interface ThemeProps {
  type: ThemeType;
  children: Element;
}

const ThemeProvider: React.FC<ThemeProps> = ({ type, children }) => {
  const [theme, setTheme] = useState(type);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
