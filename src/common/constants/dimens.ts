import { Dimensions } from 'react-native';

const screen = Dimensions.get('window');

type DimensType = {
  deviceWidth: number;
  deviceHeight: number;
  button: {
    height: number;
    borderRadius: number;
  };
  image: {
    icon: number;
    avatar: number;
  };
};

const DIMENS: DimensType = {
  /**
   * Dimensions Device
   */
  deviceWidth: screen.width,
  deviceHeight: screen.height,
  /**
   * Dimensions Button
   */
  button: {
    height: 50,
    borderRadius: 5,
  },
  /**
   * Dimensions, Image
   */
  image: {
    icon: 24,
    avatar: 40,
  },
};

export default DIMENS;
