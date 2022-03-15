import { Alert } from 'react-native';

import { localization } from 'resources/localization';

/**
 *  Show alert error
 *
 * @param message is string
 * @param buttons is array actions alert
 */
export function showError(message: string, buttons?: [any]) {
  const actions = buttons || [{ text: localization.common.cancel }];
  Alert.alert(localization.common.error, message, actions);
}
