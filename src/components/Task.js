import React from 'react'
import Remarkable from 'remarkable'

class Task extends React.Component { 
    rawMarkup= function() {
            var md = new Remarkable();
            var rawMarkup = md.render(this.props.toString());
            return { __html: rawMarkup };
    } 
    
    render() {
        return(
            <div className="task">
                <h2 className="timeLeft"> 
                    {this.props.timeToComplete} Remaining
                </h2> 
                <h3 className="userTask">
                    {this.props.userTask}
                </h3> 
                <span>
                    <button onClick={this.props.onRemove.bind(this)} className="glyphicons glyphicons-remove-sign"/>
                </span>
            </div>
        );

    }
}  

export default Task