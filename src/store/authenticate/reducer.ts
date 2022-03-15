import { AnyAction } from 'redux';

import { KEY } from 'common/constants';

const authenticateState = {
  status: false,
};

function authenticateReducer(state = authenticateState, action: AnyAction) {
  switch (action.type) {
    case KEY.ACTION_STATUS_AUTHENTICATE:
      return {
        status: action.payload.status,
      };
    default:
      return state;
  }
}

export default authenticateReducer;
