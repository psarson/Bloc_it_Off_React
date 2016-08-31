import React from 'react'; 
import '../index.css';
import CreateTaskBar from './CreateTaskBar'; 
import TaskRow from './TaskRow';  

class TasksTable extends React.Component {
    /*constructor(props) {
        super(props) 
        this.state = {
            taskArray: data,
            completed: [], 
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
       newTask.splice(index, 1);  
       this.setState({taskArray: newTask }); 
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
       this.interval = setInterval(this.check.bind(this), 1000) 
    } 
    
    componentWillUnmount() {
        clearInterval(this.interval)
    }*/
                             
    render() { 
        return (
            <div> 
                <CreateTaskBar onUserInput={this.props.handleUserInput}/>  
                <div className="sortArray">
                    <button onClick={this.props.sortByAscd}> Newest </button> 
                </div>
                <TaskRow taskArray={this.props.taskArray} onRemove={this.props.remove}/>  
            </div>    
        
        )
    }
} 

export default TasksTable