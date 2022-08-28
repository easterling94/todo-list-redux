import styles from '../assets/modeToggle.module.css'
import { useState } from 'react'

const ModeToggle = () => {
  const [modeLight, setMode] = useState(true);
  const changeMode = () => {
    setMode(!modeLight)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.mode}>
        <p>Light</p>
        <div className={styles.holder} onClick={changeMode}>
          <div className={styles.ball} style={modeLight ? {left: 0} : {left: 41}}>
          </div>
        </div>
        <p>Dark</p>
      </div>
    </div>
  )
}

export default ModeToggle