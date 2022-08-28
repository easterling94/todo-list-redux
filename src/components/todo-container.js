import TodoItem from './todo-item'
import styles from '../assets/todo-container.module.css'
import data from '../services/test-data'
import { useState } from 'react'

const TodoContainer = () => {
  const [dataList, setDataList] = useState(data);

  const changeItem = (item) => {
    const chosenItem = dataList.filter((el) => el.id === parseInt(item.currentTarget.parentElement.id))[0];
    console.log(item.target);
    switch (item.target.tagName) {
      case 'CHANGE_STATUS':
        
      break;
      case 'DELETE':
        setDataList(dataList.filter((el) => el!== chosenItem))
      default:
        return
    }
  }

  return (
    <div className={styles.container}>
      {dataList.map((el) => 
        <TodoItem changeItem={changeItem} id={el.id} key={el.id} text={el.text} status={el.status}/>
      )}
    </div>
  )
}

export default TodoContainer