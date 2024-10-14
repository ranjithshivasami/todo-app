import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ToDoList from './component/ToDoList';
import ModalPopup from './component/ModalPopup';
import { useEffect, useState } from 'react';
import NewTodo from './component/NewTodo';
import Alert from './component/Alert';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [toDos, setTodos] = useState([]);
  const [notification, setNotification] = useState(null);

  const handleModalToggle = (isOpen) => {
    setShowModal(isOpen);
  };

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const loadedTodos = localStorage.getItem('todos');
    if (loadedTodos) {
      try {
        // Parse the JSON string from localStorage
        const parsedTodos = JSON.parse(loadedTodos);
        setTodos(Array.isArray(parsedTodos) ? parsedTodos : []);
      } catch (error) {
        console.error("Error parsing stored todos:", error);
        setTodos([]); // Set to empty array if parsing fails
      }
    } else {
      setTodos([]); // Set to empty array if nothing is in localStorage
    }
  }, []);

  // Save todos to localStorage whenever the toDos state changes
  useEffect(() => {
    // Only save valid data to localStorage
    if (toDos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(toDos));
    }
  }, [toDos]);

  const handleNewTodo = (newToDo) => {
    setTodos((previousState) => {
      const newId = `todo${previousState.length + 1}`;
      return [...previousState, { id: newId, description: newToDo, isCompleted: false }];
    });
    setShowModal(false);
    setNotification('New To-do created.');
  };

  const handleRemoveTodo = (todoId) => {
    setTodos((previousState) => {
      return previousState.filter((todo) => todo.id !== todoId);
    });
    setNotification('To-do removed.');
  };

  const handleCompletionStatus = (todoId) => {
    setTodos((previousState) => {
      return previousState.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: true } : todo
      );
    });
    setNotification('Status Changed.');
  };

  return (
    <>
      {notification && <Alert message={notification} />}
      {showModal && (
        <ModalPopup handleClick={handleModalToggle} title={'New To-do'}>
          <NewTodo getTodoData={handleNewTodo} />
        </ModalPopup>
      )}
      <div className='container d-flex justify-content-center'>
        <ToDoList
          removeTodo={handleRemoveTodo}
          toDos={toDos}
          openNewTodo={handleModalToggle}
          changeCompete={handleCompletionStatus}
        />
      </div>
    </>
  );
}

export default App;
