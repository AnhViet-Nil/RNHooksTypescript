import { TextStyle } from 'react-native';

export type DictionaryStringType = {
  [key: string]: string;
};

export type DictionaryNumberType = {
  [key: string]: number;
};

export type DictionaryFunctionType = {
  [key: string]: (color: string) => TextStyle;
};
