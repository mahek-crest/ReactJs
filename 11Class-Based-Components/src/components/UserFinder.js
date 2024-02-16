import Users from './Users';
import classes from './UserFinder.module.css';
import { Component } from 'react';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';


class UserFinder extends Component {

  static contextType = UsersContext;

  constructor() {
    super()
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    }
  }

  //we use componetDidMount when we wan tto load the state initally when the compoenent loads -- sismilar to empty array in useEffect
  componentDidMount() {
    //sending http request
    this.setState({ filteredUsers: this.context.users })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
      })
    }
  }

  searchChangeHandler(e) {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    return (
      <>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </>
    );
  }

}

export default UserFinder; 