export const ACTION_STATUS_AUTHENTICATE = 'ACTION_STATUS_AUTHENTICATE';

/**
 * Change status authenticate of user.
 * If status = true return MainNavigator.
 * If status = false return AuthenticateNavigator
 *
 * @param status is boolean
 */
export function changeStatusAuthenticate(status: boolean) {
  return {
    type: ACTION_STATUS_AUTHENTICATE,
    payload: {
      status,
    },
  };
}
