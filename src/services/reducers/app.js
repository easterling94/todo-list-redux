import { APP_MODE } from '../actions/app';

const appLevelState = {
  modeLight: true,
};

export const changeAppState = (state = appLevelState, action) => {
  switch (action.type) {
    case APP_MODE.type:
      console.log('CHANGING APP MODE');
      break;
    default:
      return state;
  }
}