import React from 'react' 
import CreateTaskBar from './CreateTaskBar' 
import TaskRow from './TaskRow' 
import TaskPrimaryHeadingRow from './TaskPrimaryHeadingRow' 
import TaskSecondaryHeadingRow from './TaskSecondaryHeadingRow'  


class TasksTable extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            taskArray: [], 
        };
    }   
    
    handleUserInput(task) { 
        var tasks = this.state.taskArray;
        task.id = Date.now();
        var newTaskItem = tasks.concat([task])
        this.setState({taskArray: newTaskItem}) 
    } 
    
    /*complete() {
        alert("deleted!")
    }*/
    
    //expire method ** make this higher up!
    
    //arrange array according to time method 
    
    render() {
        return (
            <div> 
                <TaskPrimaryHeadingRow />
                <CreateTaskBar onUserInput={this.handleUserInput.bind(this)} /> 
                <TaskSecondaryHeadingRow />
                <TaskRow taskArray={this.state.taskArray} />
            </div>    
        
        )
    }
} 

export default TasksTable