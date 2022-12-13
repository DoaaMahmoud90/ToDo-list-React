import React, { Component } from 'react'
import TaskInfo from './TaskInfo';
export default class Tasks extends Component {
  constructor(props){
    super(props);
    this.state = {
      allTasks : [],
      title: "",
      description: "",
      id: 0
    }
  }
  submitForm = (e) => {
    console.log(this.state.allTasks);
    e.preventDefault();
    let newTask = {
      title: this.state.title,
      description: this.state.description,
      id: this.state.id +1
    }
    let oldData = this.state.allTasks;
    oldData.push(newTask);
    this.setState({allTasks: oldData,
      title: "",
      description: "",
      id: newTask.id
    });
  }

  changeInput = (e) => {
  this.setState({[e.target.name] : e.target.value })
  }

  removeTask = (id) => {
    let oldData = this.state.allTasks.filter((task) => { 
      return task.id !== id 
  });
    this.setState({allTasks: oldData});
  }
  render() {
    return (
      <div>
        <h4 className='text-center mt-3'>ToDo List</h4>
        <div className='form-box'>
          <form onSubmit={this.submitForm}>
            <div>
              <input type = "text"  size="20" placeholder='Title' className='mb-3 mt-3' name= "title" value={this.state.title} onChange={this.changeInput}></input>
            </div>
            <div>
              <input type = "text" size="100" placeholder='Description'className='mb-3' name= "description" value={this.state.description} onChange={this.changeInput}></input>
            </div>
            <button onClick={this.submitForm} className="btn btn-outline-success mb-3" >Add a task</button>
          </form>
        </div>
  
          {this.state.allTasks.length > 0 ?
            <div className='tasks-box'> 
                { this.state.allTasks && this.state.allTasks.map( task => {
                  return(
                    <div className="card mt-3" key={task.id}>
                      <div className="card-body">
                        <TaskInfo title={task.title} description = {task.description}></TaskInfo>
                        
                        <button className="btn btn-outline-danger" onClick= {() => this.removeTask(task.id)}>Done</button>
                      </div>
                    </div>
                          
                  )
                }

                )} 
            </div>
              :
          <p>No Task </p>
          }
          
      </div>
    )
  }
}


