import { useSelector, useDispatch } from 'react-redux'
import { CHANGE_TASK, CHANGE_TASK_STATUS, FORM_SUBMIT_SUCCESS } from '../services/constants/todo-data';
import styles from '../assets/todoAddForm.module.css'

const TodoAddForm = () => {
  const { formState} = useSelector(store => ({
    formState: store.todoData.formState
  }));

  const dispatch = useDispatch();

  const changeTask = (e) => {
    const text = e.target.value;
    dispatch({type: CHANGE_TASK, payload: text})
  }
  const changeTaskStatus = (e) => {
    dispatch({type: CHANGE_TASK_STATUS})
  }

  const addItem = (e) => {
    e.preventDefault();
    dispatch({type: FORM_SUBMIT_SUCCESS})
  }

  return (
    <form className={styles.form} onSubmit={addItem}>
      <div>
        <label htmlFor='task'>Task:</label>
        <input type='text' name='task' value={formState.text} onChange={changeTask}></input>
      </div>
      
      <div>
        <label htmlFor='status'>Task status:</label>
        <input type='checkbox' name='status' value={formState.status} onChange={changeTaskStatus}></input>  
      </div>
      
      <button type='submit'>Add Item</button>
    </form>
  )
}

export default TodoAddForm