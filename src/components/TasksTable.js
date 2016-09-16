import React from 'react'; 
import '../index.css';
import CreateTaskBar from './CreateTaskBar'; 
import TaskRow from './TaskRow';  

class TasksTable extends React.Component {
                             
    render() { 
        return (
            <div> 
                <CreateTaskBar onUserInput={this.props.handleUserInput}/>  
                <div className="sortArray">
                    <button onClick={this.props.sortByAscd}> Newest </button> 
                </div>
                <TaskRow taskArray={this.props.taskArray} onRemove={this.props.remove}/>  
            </div>    
        
        )
    }
} 

export default TasksTable