import TodoItem from './todo-item'
import styles from '../assets/todo-container.module.css'
import data from '../services/test-data'
import { useState } from 'react'
import { DELETE_ITEM, CHANGE_STATUS } from '../services/actions/todo-data'

const TodoContainer = () => {
  const [dataList, setDataList] = useState(data);

  const changeItem = (item, action) => {
    const chosenItem = item.currentTarget.parentElement.parentElement;
    switch(action.type) {
      case DELETE_ITEM.type:
        setDataList(dataList.filter((el) => el.id !== Number(chosenItem.id)))
        break;
      case CHANGE_STATUS.type:
        setDataList(dataList.map((task) => task.id !== Number(chosenItem.id) ? task : {...task, status: !task.status}))
        break;
      default:
        setDataList(dataList)
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