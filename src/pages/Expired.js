import React from 'react';
import CompletedTask from '../components/CompletedTask';

class Expired extends React.Component {
    render () {
        var taskNodes = this.props.expiredArray.map(function(task) { 
            return(
                <CompletedTask timeToComplete={task.timeToComplete} 
                      key={task.uniqueID} 
                      userTask={task.userTask} />
            )
        }, this) 
        return ( 
            <div> 
                <h4>Expired: </h4> 
                {taskNodes}
            </div>
        )
    }
} 

export default Expired