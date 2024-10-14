
export default function BtnAddNew({openNewTodo}){  
  return <button onClick={() => openNewTodo(true)} className="btn btn-sm btn-primary">Add New</button>
}