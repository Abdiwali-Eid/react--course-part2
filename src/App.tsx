import './App.css';
import HomePage from './routing/HomePage';
import NavBar from './state-management/NavBar';
import TaskList from './state-management/TaskList';
import TodoList from './react-query/TodoList';


function App() {
  return (
    <div>
      <NavBar />
      <TaskList />
      
    </div>
  );
}

export default App;
