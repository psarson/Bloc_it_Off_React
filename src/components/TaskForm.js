import React from 'react'

class TaskForm extends React.Component {
    
     constructor(props) {
         super(props)
         this.state = {time: '', text: ''};
      }
      
      handleTimeChange(e) {
        this.setState({time: e.target.value});
          console.log(time)
      }
      
      handleTextChange(e) {
        this.setState({text: e.target.value});
      }

      handleSubmit(e) {
        e.preventDefault();
        var time = this.state.time.trim();
        var text = this.state.text.trim();
        if (!text || !time) {
          return;
        } 
        this.props.onTaskSubmit({time: time, text: text});
        this.setState({time: '', text: ''});
      }
  
  render() {
    return (
      <form className="taskForm" onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Days Left"
          value={this.state.time}
          onChange={this.handleTimeChange.bind(this)}
        />
        <input
          type="text"
          placeholder="To do"
          value={this.state.text}
          onChange={this.handleTextChange.bind(this)}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}; 

export default TaskForm;