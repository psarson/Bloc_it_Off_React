import React from 'react'
import Remarkable from 'remarkable'

class Task extends React.Component {
    
    rawMarkup= function() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    }
    
    render() {
        return ( 
            <div className="task"> 
                <h2 className="taskTime">
                    {this.props.time}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
} 

export default Task