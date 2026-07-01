import { useContext } from 'react';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import SearchTaskForm from '../SearchTaskForm/SearchTaskForm';
import TodoInfo from '../TodoInfo/TodoInfo';
import TodoList from '../TodoList/TodoList';
import Button from '../Button/Button';
import TasksContext from '../../context/TasksContext';
import './Todo.scss';

const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext);

  return (
    <div className="todo">
      <h1 className="todo__title">Список дел</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <Button
        onClick={() =>
          firstIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        Показать первую невыполненную задачу
      </Button>
      <TodoList />
    </div>
  );
};

export default Todo;
