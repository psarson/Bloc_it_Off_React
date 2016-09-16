import React from 'react'; 
import CompletedTask from '../components/CompletedTask';

class Completed extends React.Component { 
    
    render () {
        var completedTaskNodes = this.props.completedArray.map((task) => { 
            return(
                <CompletedTask 
                      key={task.uniqueID}
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