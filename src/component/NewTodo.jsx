import { useState, useRef } from "react";
export default function NewTodo({getTodoData}) {

  const [validationError, setValidationError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const toDoVal = useRef('todo');

  const handleTodoSubmit = (event) => {
    event.preventDefault();
    const toDoValue = toDoVal.current.value.trim();
    //do validation    
    setValidationError(false)
    if (toDoValue.length === 0) {
      setErrorMessage("Todo is required");
      setValidationError(true);
      return;
    }
    if (toDoValue.length > 0 && toDoValue.length < 3) {
      setErrorMessage("Todo must be at least 3 characters long");
      setValidationError(true);
      return;
    }
    if (toDoValue.length > 100) {
      setErrorMessage("Todo  cannot exceed 100 characters.");
      setValidationError(true);
      return;
    }
    if (validationError === false) {
      console.log(validationError);
      getTodoData(toDoValue);
    }
    
    return;
  }

  return <form onSubmit={handleTodoSubmit}>
    <div className="mb-3">
      <label htmlFor="todo" className="form-label">ToDo</label>
      <input ref={toDoVal} type="text" className="form-control" id="todo" />
      {validationError && <div className="text-danger">{errorMessage}</div>}
    </div>
    <button type="submit" className="btn btn-primary">Save</button>
  </form>
}