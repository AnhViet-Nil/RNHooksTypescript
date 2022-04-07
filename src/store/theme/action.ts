import { ThemeEnum } from 'resources/theme';

export const ACTION_THEME_MODE = 'ACTION_THEME_MODE';

/**
 * Change theme mode of app.
 * If mode = ThemeEnum.LIGHT return color light.
 * If mode = ThemeEnum.DARK return color dark
 *
 * @param mode is ThemeEnum
 */
export function changeThemeMode(mode: ThemeEnum) {
  return {
    type: ACTION_THEME_MODE,
    payload: {
      mode,
    },
  };
}
