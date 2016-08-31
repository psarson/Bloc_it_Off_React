import React from 'react'
import Remarkable from 'remarkable'

class CompletedTask extends React.Component { 
    rawMarkup= function() {
            var md = new Remarkable();
            var rawMarkup = md.render(this.props.toString());
            return { __html: rawMarkup };
    } 
    
    render() {
        return(
            <div className="task">
                {this.props.timeEntered}
                <h3 className="userTask">
                    {this.props.userTask}
                </h3> 
            </div>
        );

    }
}  

export default CompletedTask