import React from 'react'; 
import '../index.css';
import CreateTaskBar from './CreateTaskBar'; 
import TaskRow from './TaskRow';  
import data from '../DataBase'; 

class TasksTable extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            taskArray: data,
            completedArray: [], 
            expiredArray: []
        }
    }   
    
    handleUserInput(task) { 
        var tasks = this.state.taskArray;
        var newTaskItem = tasks.concat([task])
        this.setState({taskArray: newTaskItem}) 
    } 
    
    remove(index){
       var newTask = this.state.taskArray.slice(); 
       var oldTask = this.state.completedArray;
       var toOldTask = newTask.splice(index, 1);  
       oldTask.push(toOldTask);
       this.setState({taskArray: newTask, completedArray: oldTask }); 
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
       var expiredTask = this.state.expiredArray;
       var checkedArray = this.state.taskArray.filter(function(item){
            if (item.timeToComplete < Date.now()) {
                expiredTask.push(item);
                return false
            } else {
                return true
            } 
        });  
        this.setState({taskArray: checkedArray, expiredArray: expiredTask})
    }
    
    componentWillMount() { 
       this.interval = setInterval(this.check.bind(this), 1000) 
    } 
    
    componentWillUnmount() {
        clearInterval(this.interval)
    }
                             
    render() {
        return (
            <div> 
                <CreateTaskBar onUserInput={this.handleUserInput.bind(this)}/>  
                <div className="sortArray">
                    <button onClick={this.sortByAscd.bind(this)}> Newest </button> 
                </div>
                <TaskRow taskArray={this.state.taskArray} onRemove={this.remove.bind(this)}/>  
            </div>    
        
        )
    }
} 

export default TasksTable