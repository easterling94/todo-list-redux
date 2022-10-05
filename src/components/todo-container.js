import TodoItem from './todo-item'
import styles from '../assets/todo-container.module.css'
import { useSelector } from 'react-redux'

const TodoContainer = () => {
  
  const { todoList } = useSelector(store => store.todoData)

  return (
    <div className={styles.container}>
      {todoList.map((el) => 
        <TodoItem  id={el.id} key={el.id} text={el.text} statusIsDone={el.statusIsDone}/>
      )}
    </div>
  )
}

export default TodoContainer