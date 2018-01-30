import React, { Component } from 'react';

import Employee from './models/Employee';

// components
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import EmployeeEditor from './components/EmployeeEditor';

class App extends Component {
  // constructor

  // selectEmployee

  // refresh

  render() {
    return (
      <div id="app">
        <Header />
        <div className="main-container">
          <EmployeeList employees={this.state.employees} selectEmployee={ this.selectEmployee.bind(this) } />
          <EmployeeEditor selected={this.state.selectedEmployrr} refreshLis={ this.refresh.bind(this) } />
        </div>
      </div>
    )
  }
}

export default App;
