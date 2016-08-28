import React, { Component } from 'react';  
import Nav from './components/Nav'
import './App.css';  

class App extends Component {
  
  render() {
    return (
      <div> 
        <h1>Bloc it Off</h1>
            <main>
                 <Nav />
                 {this.props.children}
            </main>
      </div>
    );
  }
}

export default App 
