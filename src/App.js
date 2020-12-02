import './App.css';
import React, { Component } from 'react';
import Users from './data'
import UsersList from './Users/UsersList'


class App extends Component {

  state = {
    search: '',
    users: Users
  }
  updateSearchHendler = (event) => {
    this.setState({ search: event.target.value });
  }

  results = () => {
    if (this.state.search.length >= 3) {
      return this.state.users.filter(user => user.firstname.toLowerCase().includes((this.state.search.toLowerCase())))
    } else {
      return this.state.users
    }
  }

  sortByAge = () => {
    let sorted = this.state.users.sort((a, b) => a.age - b.age)
    this.setState({ users: sorted })
  }
  
  hideShowExtraInfo = (event) => {
    let content = event.currentTarget.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }


  render() {

    return (
      <div>
        <section className="user-filter">
          <label htmlFor="input-field">Filter Users by Name</label>
          <input type="text" onChange={this.updateSearchHendler} value={this.state.search} />
          <span className="user-filter__no-users-found">{this.results().length ? this.results().length : 'results are empty'}</span>
          <button className="filter-button" onClick={this.sortByAge}>Sort by Age</button>
        </section>
        <div className="user-list">
          <ul className='dots'>
            <UsersList
              users={this.results()}
              clicked={this.hideShowExtraInfo}
            />
          </ul>
        </div>

      </div>
    )
  }
}

export default App;
