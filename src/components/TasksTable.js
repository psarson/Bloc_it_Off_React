import React from 'react' 
import CreateTaskBar from './CreateTaskBar' 
import TaskRow from './TaskRow'  
import data from './data'

class TasksTable extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            taskArray: data, 
            completedArray: [],  
            expiredArray: [],
            active: false,  
            completed: false
        }
    }   
    
    handleUserInput(task) { 
        var tasks = this.state.taskArray;
        var newTaskItem = tasks.concat([task])
        this.setState({taskArray: newTaskItem}) 
    } 
    
    remove(index){
       var newTask = this.state.taskArray.slice(); 
       newTask.splice(index, 1); 
       this.setState({taskArray: newTask});
    }  
    
    sortByAscd(index){
        var sortedArray = this.state.taskArray.sort(function(el1, el2){ 
            if(el1.timeToComplete > el2.timeToComplete) {
                return 1;  
            } else {
                 return -1;
            } 
        }) 
        this.setState({taskArray: sortedArray})
    }
    
    check(index){
       var checkedArray = this.state.taskArray.filter(function(item){
            if (item.timeToComplete < Date.now()) {
                return false
            } else {
                return true
            } 
        });  
        this.setState({taskArray: checkedArray})
    }
    
    componentWillMount() {
        setInterval(this.check.bind(this), 1000)
    }
                             
    render() {

        return (
            <div> 
                <CreateTaskBar onUserInput={this.handleUserInput.bind(this)}/>  
                <div className="sortArray">
                    <h4 onClick={this.sortByAscd.bind(this)}> Sort the Array </h4> 
                    <h4 onClick={this.check.bind(this)}> Remove Expired </h4>
                </div>
                <TaskRow taskArray={this.state.taskArray} onRemove={this.remove.bind(this)}/>  
            </div>    
        
        )
    }
} 

export default TasksTable