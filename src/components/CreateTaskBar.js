import React from 'react' 

class CreateTaskBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userTask: '',
            timeToComplete: '', 
            uniqueID: 0 
        }
    }
    
    handleUserTaskChange(event) {
        this.setState({userTask: event.target.value})
    } 
    
    handleTimeToComplete(event) {
        this.setState({timeToComplete: event.target.value})
    }
    
    handleUniqueID(event) {
        this.setState({uniqueID: event.target})
    } 
    
    handleSubmit(e) {
        e.preventDefault();
        var userTask = this.state.userTask.trim(); 
        var timeToComplete = Date.parse(this.state.timeToComplete); 
        var uniqueID = this.state.uniqueID + Math.random();
        if(!userTask || !timeToComplete) {
            return;
        } else if (isNaN(timeToComplete)) {
            alert("Please enter a valid number")
            return;
        } else {
            this.props.onUserInput(
                {userTask, timeToComplete, uniqueID}
            )
        } 
        this.setState({userTask: '', timeToComplete: ''});
    }
    
    render() {
        return(
            <form className="taskBox" onSubmit={this.handleSubmit.bind(this)}>
                <input 
                    type="text" 
                    placeholder="Enter new Task"
                    value={this.state.userTask}
                    onChange={this.handleUserTaskChange.bind(this)} 
                /> 
                <input 
                    type="text"
                    placeholder="Month Day, Year"  
                    value={this.state.timeToComplete}
                    onChange={this.handleTimeToComplete.bind(this)}
                    
                />
                <input 
                    type="submit" 
                    value="Post"
                    onChange={this.handleUniqueID.bind(this)} 
                />
            </form>
        )
    }
} 

export default CreateTaskBar