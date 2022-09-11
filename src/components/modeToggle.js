import styles from '../assets/modeToggle.module.css'
import { useSelector, shallowEqual } from 'react-redux';
import { useDispatch } from 'react-redux';
import { APP_MODE } from '../services/actions/app';

const ModeToggle = () => {
  const modeLigth = useSelector(store => store.app.modeLight, shallowEqual);
  const dispatch = useDispatch();
  const changeAppState = (action) => {
    dispatch(action);
    console.log(action.payload)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.mode}>
        <p>Light</p>
        <div className={styles.holder} onClick={() => changeAppState(APP_MODE)}>
          <div className={styles.ball} style={modeLigth ? {left: 0} : {left: 41}}>
          </div>
        </div>
        <p>Dark</p>
      </div>
    </div>
  )
}

export default ModeToggle