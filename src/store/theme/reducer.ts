import { ThemeEnum } from 'resources/theme';

import { ACTION_THEME_MODE } from './action';

const themeState = {
  mode: ThemeEnum.LIGHT,
};

function themeReducer(
  state = themeState,
  action: { type: string; payload: { mode: ThemeEnum } }
) {
  switch (action.type) {
    case ACTION_THEME_MODE:
      return {
        mode: action.payload.mode,
      };
    default:
      return state;
  }
}

export default themeReducer;
