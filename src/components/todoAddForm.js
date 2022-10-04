import { useSelector, useDispatch } from 'react-redux'
import { CHANGE_TASK, CHANGE_TASK_STATUS, ADD_ITEM } from '../services/actions/todo-data';
import styles from '../assets/todoAddForm.module.css'

const TodoAddForm = () => {
  const {itemsCollection, formState} = useSelector(store => ({
    itemsCollection: store.todoData.todoList,
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
    dispatch({
      type: ADD_ITEM,
      payload: {
        id: itemsCollection.length + 1,
        status: true,
        text: 'TEST'
      }
    })
    console.log(itemsCollection)
  }

  return (
    <form className={styles.form}>
      <div>
        <label htmlFor='task'>Task:</label>
        <input type='text' name='task' value={formState.text} onChange={changeTask}></input>
      </div>
      
      <div>
        <label htmlFor='status'>Task status:</label>
        <input type='checkbox' name='status' value={formState.status} onChange={changeTaskStatus}></input>  
      </div>
      
      <button type='submit' onSubmit={addItem}>Add Item</button>
    </form>
  )
}

export default TodoAddForm