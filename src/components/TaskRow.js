import React from 'react' 
import Task from './Task'


class TaskRow extends React.Component {
    complete() {
        alert("deleted!")
    }
    render() {
        var taskNodes = this.props.taskArray.map(function(task) {
            return (
                <Task timeLeft={task.timeLeft} key={task.id} onRemove={this.complete.bind(this)}>
                    {task.userTask}
                </Task>
            );
        });
        return (
            <div className="taskRow"> 
                {taskNodes} 
            </div>
        );
    }
}  

export default TaskRow