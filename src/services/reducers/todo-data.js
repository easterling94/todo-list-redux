import {
  DELETE_ITEM, 
  CHANGE_STATUS, 
  CHANGE_TASK, 
  CHANGE_TASK_STATUS, 
  FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_ERROR,
  API_FAILED,
  API_REQUEST,
  API_SUCCESS
} from '../actions/todo-data'

const todoInitialState = {
  todoList: [],
  todoRequest: false,
  todoRequestFailed: false,
  formState: {
    form: {
      text: '', 
      statusIsDone: false
    },
    submitRequest: false,
    submitFailed: false
  }
}

export const changeData = (state = todoInitialState, action) => {
  switch (action.type) {
    case API_REQUEST: {
      return {
        ...state,
        todoRequest: true
      }
    }
    case API_SUCCESS: {
      return {
        ...state,
        todoList: action.items,
        todoRequest: false,
        todoRequestFailed: false
      }
    }
    case API_FAILED: {
      return {
        ...state,
        todoRequest: false,
        todoRequestFailed: true
      }
    }
    case DELETE_ITEM:
      return {...state, todoList: [...state.todoList].filter((el) => el.id !== action.id)}
    case CHANGE_STATUS:
      return {...state, todoList: [...state.todoList].map((el) => el.id !== action.id ? el : {...el, statusIsDone: !el.statusIsDone})};
    case CHANGE_TASK:
      return {...state, formState: {...state.formState, form: {...state.formState.form, text: action.payload}}}
    case CHANGE_TASK_STATUS:
      return {...state, formState: {...state.formState, form: {...state.formState.form, statusIsDone: !state.formState.form.statusIsDone}}}
    case FORM_SUBMIT:
      return {...state, formState: {...state.formState, submitRequest: true, submitFailed: false}}
    case FORM_SUBMIT_SUCCESS:
      const newItem = {
        id: state.todoList.length + 1,
        statusIsDone: state.formState.form.statusIsDone,
        text: state.formState.form.text
      };
      return {...state, todoList: [...state.todoList, newItem]}
    default:
      return state;
  }
}