import TodoItem from './todo-item'
import styles from '../assets/todo-container.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getDataRequest } from '../services/actions/todo-data'


const TodoContainer = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector(store => store.todoData);
  
  useEffect(() => {
    dispatch(getDataRequest());
  },
  [dispatch]);

  return (
    <div className={styles.container}>
      {todoList.map((el) => 
        <TodoItem  id={el.id} key={el.id} text={el.text} statusIsDone={el.statusIsDone}/>
      )}
    </div>
  );
}

export default TodoContainer