import React from 'react'; 
import TaskTable from '../components/TasksTable'; 

class Home extends React.Component {
    render () {
        return ( 
            <div> 
                <h4>Home</h4>
                <TaskTable  taskArray={this.props.taskArray}
                            check={this.props.check} 
                            sortByAscd={this.props.sortByAscd} 
                            remove={this.props.remove}
                            handleUserInput={this.props.handleUserInput} 
                            foo={true} />
                </div>
        )
    }
} 

export default Home