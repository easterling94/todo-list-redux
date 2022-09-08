import { combineReducers } from 'redux'
import { changeAppState } from './app'
import { changeData } from './todo-data'

export const rootReducer = combineReducers({
  app: changeAppState,
  todoData: changeData
})