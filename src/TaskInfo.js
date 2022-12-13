export default function TaskInfo (props){
  return(
    <div>
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text mb-2">{props.description}</p>
    </div>
    
  );
}