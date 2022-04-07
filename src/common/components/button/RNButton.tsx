import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

import { useCustomTheme } from 'resources/theme';
import { DIMENS, SPACING, FontEnum } from 'common/constants';

import RNText from '../text/RNText';

interface RNButtonProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const defaultProps = {
  style: undefined,
  textStyle: undefined,
};

/**
 *  Common UI RNButton
 *
 * @require text button
 * @require onPress button
 */
const RNButton: React.FC<RNButtonProps> = (props) => {
  const { text, onPress, style, textStyle } = props;
  const { colors } = useCustomTheme();
  const buttonStyle = [
    { backgroundColor: colors.button },
    styles.button,
    style,
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <RNText size={18} type={FontEnum.BOLD} style={textStyle}>
        {text}
      </RNText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    height: DIMENS.button.height,
    justifyContent: 'center',
    paddingHorizontal: SPACING.horizontalSmall,
  },
});

RNButton.defaultProps = defaultProps;

export default RNButton;
