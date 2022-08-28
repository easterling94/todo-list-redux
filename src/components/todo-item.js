import styles from '../assets/todo-item.module.css'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'
import { AiTwotoneDelete } from 'react-icons/ai'

const TodoItem = ({changeItem, id, text, status}) => {
  return (
    <div className={styles.item} id={id}>
      <div className={styles.text}>
        {text}
      </div>
      <div id={`${id}icons`} onClick={(e) => changeItem(e)} className={styles.icons}>
        {status ? <GrCheckbox className={styles.icon}/> : <GrCheckboxSelected className={styles.icon}/>}
        <AiTwotoneDelete className={styles.icon}/>
      </div>
    </div>
  )
}

export default TodoItem