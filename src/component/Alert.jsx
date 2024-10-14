export default function Alert({message}) {
  return <div className="alert alert-success fade show" role="alert">
    {message}    
  </div>
}