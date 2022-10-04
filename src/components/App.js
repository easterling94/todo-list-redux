import ModeToggle from './modeToggle';
import TodoContainer from './todo-container';
import TodoAddForm from './todoAddForm';
import styles from '../assets/app.module.css'

function App() {
  return (
    <div className={styles.app}>
      <ModeToggle />
      <TodoAddForm />
      <TodoContainer /> 
    </div>
  );
}

export default App;