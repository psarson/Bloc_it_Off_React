import React, { Component } from 'react';  
import Nav from './components/Nav'
import './App.css';   
import data from './DataBase';

class App extends Component { 
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
    
    remove(key){ 
        console.log("key ", key);
       var newTask = this.state.taskArray;
       var completedTask = newTask.find(function(task){ 
            return task.timeEntered === key
       });
        console.log("completedTask ", completedTask)
       var completedArray = [...this.state.completedArray, completedTask];
       var filterArray = this.state.taskArray.filter(function(task){
           return task.timeEntered !== key
       })  
       this.setState({taskArray: filterArray, completedArray: completedArray}); 
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
        this.setState({taskArray: checkedArray})
    }
    
    componentWillMount() { 
       this.interval = setInterval(this.check.bind(this), 1000) 
    } 
    
    componentWillUnmount() {
        clearInterval(this.interval)
    }
  
   render() {
     var newChildren = React.Children.map(this.props.children, (child)=> {
        return React.cloneElement(child, { 
            expiredArray: this.state.expiredArray,
            completedArray: this.state.completedArray,
            taskArray: this.state.taskArray,
            check: this.check.bind(this), 
            sortByAscd: this.sortByAscd.bind(this), 
            remove: this.remove.bind(this), 
            handleUserInput: this.handleUserInput.bind(this), 
            foo: true })
        });
     return (
       <div> 
         <h1>Bloc it Off</h1>
            <main>
                 <Nav />
                 {newChildren}
            </main>
       </div>
     );
   }
}

export default App 
