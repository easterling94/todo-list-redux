import ModeToggle from './modeToggle';
import TodoContainer from './todo-container';
import { useSelector, shallowEqual } from 'react-redux';


function App() {
  const state = useSelector(store => store, shallowEqual)
  console.log(state)
  return (
    <>
      <ModeToggle />
      <TodoContainer /> 
    </>
  );
}

export default App;