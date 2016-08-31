import React from 'react' 
import Task from './Task'


class TaskRow extends React.Component {
    render(){ 
       
       var taskNodes = this.props.taskArray.map(function(task) { 
            return(
                <Task timeToComplete={task.timeToComplete}
                      key={task.timeEntered} 
                      val={task.timeEntered}
                      userTask={task.userTask}
                      onRemove={this.props.onRemove} />
            )
        }, this) 
        
        return (
            <div className="taskRow"> 
                {taskNodes} 
            </div> 
        );  
        
    } 
} 
    

export default TaskRow