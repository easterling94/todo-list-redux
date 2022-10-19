import { getData } from '../../utils/api';

export const DELETE_ITEM = 'DELETE_ITEM';
export const CHANGE_STATUS = 'CHANGE_STATUS';

export const CHANGE_TASK = 'CHANGE_TASK';
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const ADD_ITEM = 'ADD_ITEM';

export const FORM_SUBMIT = 'FORM_SUBMIT';
export const FORM_SUBMIT_SUCCESS = 'FORM_SUBMIT_SUCCESS';
export const FORM_SUBMIT_ERROR = 'FORM_SUBMIT_ERROR';

export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILED = 'API_FAILED';

export function getDataRequest() {
  return function (dispatch) {
    dispatch({
      type: API_REQUEST
    });
    getData().then(res => {
      if(res) {
        dispatch({
          type: API_SUCCESS,
          items: res
        })
      } else {
        dispatch({
          type: API_FAILED
        })
      }
    })
  }
}