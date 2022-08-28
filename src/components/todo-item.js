import styles from '../assets/todo-item.module.css'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'
import { AiTwotoneDelete } from 'react-icons/ai'

import { DELETE_ITEM, CHANGE_STATUS } from '../services/actions/todo-data'

const TodoItem = ({changeItem, id, text, status}) => {
  return (
    <div className={styles.item} id={id}>
      <div className={styles.text}>
        {text}
      </div>
      <div className={styles.icons}>
        {status ? 
          <div className={styles.icon} onClick={(item) => changeItem(item, CHANGE_STATUS)}>
            <GrCheckbox />
          </div> : 
          <div className={styles.icon} onClick={(item) => changeItem(item, CHANGE_STATUS)}>
            <GrCheckboxSelected/>
          </div>
        }
        <div className={styles.icon} onClick={(item) => changeItem(item, DELETE_ITEM)}>
          <AiTwotoneDelete />
        </div>
      </div>
    </div>
  )
}

export default TodoItem