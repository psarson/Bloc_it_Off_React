import React from 'react'
import Task from './Task' 

class TaskList extends React.Component {
    render() {
        var taskNode = this.props.data.map(function(task) {
            return (
                <Task time={task.time} key={task.id}>
                    {task.text}
                </Task>
            )
        }); 
        return (
            <div className="taskList"> 
                {taskNode}
            </div>
        );
    }
}

export default TaskList