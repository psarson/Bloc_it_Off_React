import React from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import data from '../data' 

    
class TaskBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: data}
    } 
    
    handleTaskSubmit(task) {
        var tasks = this.state.data 
        task.id = Date.now() 
        var newTasks = tasks.concat([task]);
        this.setState({data: newTasks})
    } 
    
    render() {
        return (
        <div className="TaskBox">
            <h1>Tasks</h1>
                <TaskList data={this.state.data}/>
                <TaskForm onTaskSubmit={this.handleTaskSubmit.bind(this)} />
        </div>
        );
    }
} 

export default TaskBox