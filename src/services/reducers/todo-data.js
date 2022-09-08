import { DELETE_ITEM, CHANGE_STATUS } from '../actions/todo-data'

const todoInitialState = [
  {id: 1, status: false, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nulla!'},
  {id: 2, status: true, text: 'Do groceries'},
  {id: 3, status: true, text: 'Iron clothes'}
]

export const changeData = (state = todoInitialState, action) => {
  switch (action.type) {
    case DELETE_ITEM.type:
      console.log('DELETE');
      break;
    case CHANGE_STATUS.type:
      console.log('CHANGE STATUS');
      break;
    default:
      return state;
  }
}