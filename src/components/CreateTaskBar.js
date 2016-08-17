import React from 'react' 

//receives user input
class CreateTaskBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userTask: '',
            timeLeft: '', 
        }
    }
    
    handleUserTaskChange(event) {
        this.setState({userTask: event.target.value})
    } 
    
    handleTimeLeft(event) {
        this.setState({timeLeft: event.target.value})
    } 
    
    handleSubmit(e) {
        e.preventDefault();
        var userTask = this.state.userTask.trim(); 
        var timeLeft = this.state.timeLeft.trim(); 
        if(!userTask || !timeLeft) {
            return;
        } else if (isNaN(timeLeft)) {
            alert("Please enter a valid number")
            return;
        } else {
            this.props.onUserInput(
                {userTask, timeLeft}
            )
        } 
        this.setState({userTask: '', timeLeft: ''});
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
                    placeholder="Enter time remaining"  
                    value={this.state.timeLeft}
                    onChange={this.handleTimeLeft.bind(this)}
                />
                <input type="submit" value="Post" />
            </form>
        )
    }
} 

export default CreateTaskBar