import { Alert } from 'react-native';

import Localization from 'resources/localization';

/**
 *  Show alert error
 *
 * @param message is string
 * @param buttons is array actions alert
 */
export function showError(message: string, buttons?: [{ text: string }]) {
  const actions = buttons || [{ text: Localization.common.cancel }];
  Alert.alert(Localization.common.error, message, actions);
}

/**
 *  Show alert error
 *
 * @param title is string
 * @param message is string
 * @param buttons is array actions alert
 */
export function show(
  title: string,
  message: string,
  buttons?: [{ text: string }]
) {
  const actions = buttons || [{ text: Localization.common.cancel }];
  Alert.alert(title, message, actions);
}
