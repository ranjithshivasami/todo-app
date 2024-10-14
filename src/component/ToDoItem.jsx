export default function ToDoItem({snNo, removeTodo, toDo, changeCompete }) {

  const { id, description, isCompleted } = toDo;

  return <li className="list-group-item d-flex justify-content-between" >
    <div>{snNo} - {description}</div>
    <div className="d-flex align-items-center gap-5">
      <div className="d-flex status-wrapper justify-content-between">
        <span className={`badge ${isCompleted ? 'text-bg-success' : 'text-bg-warning'}`}>
          {isCompleted ? 'Completed' : 'New'}
        </span>
        {!isCompleted && <div className="form-check">
          <input onClick={() => changeCompete(id)} className="form-check-input" type="checkbox" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Change to Complete
          </label>
        </div>}
      </div>
      <button onClick={() => removeTodo(id)} className="btn btn-sm btn-danger">Remove</button>
    </div>
  </li>
}