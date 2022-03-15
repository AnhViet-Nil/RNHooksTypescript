import React, { useContext } from 'react';
import { Text, TextStyle } from 'react-native';

import { ThemeContext } from 'resources/theme';
import { TYPOGRAPHY, FontEnum } from 'common/constants';

function getTextStyle(size: Number, type: FontEnum, color: string) {
  const style: string = `text${size}${type}`;
  return TYPOGRAPHY[style](color);
}

interface RNTextProps {
  size: number;
  type?: FontEnum;
  color?: string;
  style?: TextStyle;
}

/**
 *  Common UI RNText
 *
 * @require font size
 */
const RNText: React.FC<RNTextProps> = ({
  size,
  type = FontEnum.REGULER,
  color,
  style,
  ...props
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Text
      style={[getTextStyle(size, type, (color = theme.text)), style]}
      {...props}
    />
  );
};

export default RNText;
