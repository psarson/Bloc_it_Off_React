import React from 'react' 

class CreateTaskBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userTask: '',
            timeToComplete: '', 
            timeEntered: Date.now()
        }
    }
    
    handleUserTaskChange(event) {
        this.setState({userTask: event.target.value})
    } 
    
    handleTimeToComplete(event) {
        this.setState({timeToComplete: event.target.value})
    }
    
    handleTimeEntered(event) {
        this.setState({timeEntered: event.target})
    }
    handleSubmit(e) {
        e.preventDefault();
        var userTask = this.state.userTask.trim(); 
        var timeToComplete = Date.parse(this.state.timeToComplete); 
        var timeEntered = Date.parse(this.state.timeEntered);
        if(!userTask || !timeToComplete) {
            return;
        } else if (isNaN(timeToComplete)) {
            alert("Please enter a valid number")
            return;
        } else {
            this.props.onUserInput(
                {userTask, timeToComplete, timeEntered}
            )
        } 
        this.setState({userTask: '', timeToComplete: '', timeEntered: Date.now()});
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
                    onChange={this.handleTimeEntered.bind(this)}
                />
            </form>
        )
    }
} 

export default CreateTaskBar