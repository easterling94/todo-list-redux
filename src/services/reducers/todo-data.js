import { DELETE_ITEM, CHANGE_STATUS, CHANGE_TASK, CHANGE_TASK_STATUS, ADD_ITEM } from '../actions/todo-data'

const todoInitialState = {
  todoList: [
    {id: 1, status: false, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nulla!'},
    {id: 2, status: true, text: 'Do groceries'},
    {id: 3, status: true, text: 'Iron clothes'}
  ],
  formState: {text: '', status: false}
}

export const changeData = (state = todoInitialState, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      return {...state, todoList: [...state.todoList].filter((el) => el.id !== action.id)}
    case CHANGE_STATUS:
      return {...state, todoList: [...state.todoList].map((el) => el.id !== action.id ? el : {...el, status: !el.status})};
    case CHANGE_TASK:
      return {...state, formState: {...state.formState, text: action.payload}}
    case CHANGE_TASK_STATUS:
      return {...state, formState: {...state.formState, status: !state.formState.status}}
    case ADD_ITEM:
      return {...state, todoList: [...state.todoList, action.payload]}
    default:
      return state;
  }
}