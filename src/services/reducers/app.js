import { APP_MODE } from '../actions/app';

const appLevelState = {
  modeLight: true,
};

export const changeAppState = (state = appLevelState, action) => {
  switch (action.type) {
    case APP_MODE:
      return {...state, modeLight: !state.modeLight};
    default:
      return {...state};
  }
}