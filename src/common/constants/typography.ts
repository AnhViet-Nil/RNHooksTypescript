import { Platform } from 'react-native';

import { DictionaryFunctionType } from './type';

const fontFamily = Platform.select({
  android: 'sans-serif',
  ios: 'Helvetica',
});
const fontWeightLight = '300';
const fontWeightRegular = '400';
const fontWeightBold = '700';

/**
 * @type typography.js. Possible value of type can be:
 * 1. 'light
 * 2. 'reguler'
 * 3. 'bold'
 */
export enum FontEnum {
  LIGHT = 'Light',
  REGULER = 'Regular',
  BOLD = 'Bold',
}

export const TYPOGRAPHY: DictionaryFunctionType = {
  text18Light: (color: string) => ({
    fontFamily,
    color,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: fontWeightLight,
  }),
  text18Regular: (color: string) => ({
    fontFamily,
    color,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: fontWeightRegular,
  }),
  text18Bold: (color: string) => ({
    fontFamily,
    color,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: fontWeightBold,
  }),
};
