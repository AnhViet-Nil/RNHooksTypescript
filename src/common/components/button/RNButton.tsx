import React, { useContext } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

import { ThemeContext } from 'resources/theme';
import { DIMENS, SPACING, FontEnum } from 'common/constants';

import RNText from '../text/RNText';

interface RNButtonProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

/**
 *  Common UI RNButton
 *
 * @require text button
 * @require onPress button
 */
const RNButton: React.FC<RNButtonProps> = ({
  style,
  text,
  textStyle,
  ...props
}) => {
  const { theme } = useContext(ThemeContext);
  const buttonStyle = [{ backgroundColor: theme.button }, styles.button, style];

  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      <RNText size={18} type={FontEnum.BOLD} style={textStyle}>
        {text}
      </RNText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: SPACING.horizontalSmall,
    justifyContent: 'center',
    alignItems: 'center',
    height: DIMENS.button.height,
  },
});

export default RNButton;
