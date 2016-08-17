import React, { Component } from 'react';
import TasksTable from './components/TasksTable'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Bloc It Off!</h1>
        <TasksTable /> 
      </div>
    );
  }
}

export default App;
