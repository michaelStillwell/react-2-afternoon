import React, { Component } from 'react';

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <ul className="listContainer">
          { 
            this.props.employees.map(e => {
              <li 
                className='listText' 
                key={employee.id}
                onClick={() => this.props.selectedEmployees(employee)}
              > {employee.name}
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default EmployeeList;