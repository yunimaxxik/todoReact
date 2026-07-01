import TasksContext from './TasksContext';
import useTasks from '../hooks/useTasks';
import useIncompleteTaskScroll from '../hooks/useIncompleteTaskScroll';

const TasksProvider = (props) => {
  const { children } = props;
  const {
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,

    newTaskTitle,
    setNewTaskTitle,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask,
    disappearingTaskId,
    appearingTaskId
  } = useTasks();

  const { firstIncompleteTaskRef, firstIncompleteTaskId } =
    useIncompleteTaskScroll(tasks);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filteredTasks,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,

        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
