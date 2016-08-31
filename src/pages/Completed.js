import React from 'react'; 
import CompletedTask from '../components/CompletedTask';

class Completed extends React.Component { 
    
    render () {
        var completedTaskNodes = this.props.completedArray.map(function(task) { 
            return(
                <CompletedTask 
                      timeToComplete={task.timeToComplete} 
                      key={task.timeEntered} 
                      userTask={task.userTask} />
            )
        }, this) 
        return ( 
            <div>
                <h4>Completed</h4> 
                {completedTaskNodes}
            </div>
        )
    }
} 

export default Completed