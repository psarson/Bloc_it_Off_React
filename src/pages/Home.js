import React from 'react'; 
import TaskTable from '../components/TasksTable'; 

class Home extends React.Component {
    render () {
        return ( 
            <div>
                <TaskTable />
            </div>
        )
    }
} 

export default Home