import React from 'react'
import Remarkable from 'remarkable'

class Task extends React.Component {
    rawMarkup= function() {
            var md = new Remarkable();
            var rawMarkup = md.render(this.props.children.toString());
            return { __html: rawMarkup };
    }
    
    render() {
        return(
            <div className="task">
                <h2 className="timeLeft"> 
                    {this.props.timeLeft} Days Remaining
                </h2> 
                <span dangerouslySetInnerHTML={this.rawMarkup()} />  
                <span>
                    <button onClick={this.onRemove.bind(this)} className="glyphicons glyphicons-remove-sign"/>
                </span>
            </div>
        );

    }
}  

export default Task