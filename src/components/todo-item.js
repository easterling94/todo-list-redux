import styles from '../assets/todo-item.module.css'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'
import { AiTwotoneDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { DELETE_ITEM, CHANGE_STATUS } from '../services/constants/todo-data'

const TodoItem = ({id, text, statusIsDone}) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch({
      type: DELETE_ITEM,
      id
    })
  }

  const changeStatus = () => {
    dispatch({
      type: CHANGE_STATUS,
      id
    })
  }

  return (
    <div className={styles.item}>
      <div className={styles.text}>
        {text}
      </div>
      <div className={styles.icons}>
        {statusIsDone ? 
          <div className={styles.icon} onClick={changeStatus}>
            <GrCheckboxSelected />
          </div> : 
          <div className={styles.icon} onClick={changeStatus}>
            <GrCheckbox />
          </div>
        }
        <div className={styles.icon} onClick={deleteItem}>
          <AiTwotoneDelete />
        </div>
      </div>
    </div>
  )
}

export default TodoItem