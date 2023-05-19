import './App.css';
import HomePage from './routing/HomePage';
// import NavBar from './state-management/NavBar';
// import TaskList from './state-management/tasks/TaskList';
import { TaskList } from './state-management/tasks';
import TodoList from './react-query/TodoList';
import {TasksProvider} from './state-management/tasks';
import NavBar from './state-management/NavBar';
import Counter from './state-management/counter/Counter';

function App() {
  return (
    <TasksProvider>
      <h1>React Query Todo List</h1>
      <NavBar/>
      <Counter/>
      <HomePage />
    </TasksProvider>
  );
}

export default App;
