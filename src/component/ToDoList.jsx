import BtnAddNew from "./BtnAddNew";
import ToDoItem from "./ToDoItem";



export default function ToDoList({toDos, openNewTodo, removeTodo, changeCompete}) {

  let listItems = <li className="list-group-item d-flex justify-content-center">No Todo found</li>;
  if(toDos.length > 0){
    listItems=  toDos.map((todo, index) =>
      <ToDoItem snNo={index+1} key={todo.id} removeTodo={removeTodo} toDo={todo} changeCompete={changeCompete} />
    );
  }
  return <div className="card w-100 mt-5">
    <div className="card-header d-flex justify-content-between">
      <h5 className="card-title">Todo List</h5>
      <BtnAddNew openNewTodo={openNewTodo} />
    </div>
    <div className="card-body">
      <ul className="list-group list-group-flush">
        {listItems}
      </ul>
    </div>
  </div>
}