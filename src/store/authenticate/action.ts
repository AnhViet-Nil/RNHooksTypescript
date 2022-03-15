import { KEY } from 'common/constants';

/**
 * Change status authenticate of user.
 * If status = true return MainNavigator.
 * If status = false return AuthenticateNavigator
 *
 * @param status is boolean
 */
export function changeStatusAuthenticate(status: boolean) {
  return {
    type: KEY.ACTION_STATUS_AUTHENTICATE,
    payload: {
      status,
    },
  };
}
