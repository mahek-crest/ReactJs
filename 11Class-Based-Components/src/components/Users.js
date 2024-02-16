import { Component } from 'react';
import User from './User';
import classes from './Users.module.css';


class Users extends Component {
  // to define state we use constructor
  constructor() {
    super()
    // this should always be an object and also should be named State only  -- one state object which groups all the state together
    this.state = {
      showUsers: true,
      more: 'Test'
    }

  }

  toggleUsersHandler() {

    //Correct way -- only use setState and it aslo takes Object only
    this.setState((curSate) => {
      return { showUsers: !curSate.showUsers }
    })


  }

  render() {

    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}



export default Users;


// this is example state..if we were to change the state of above this wil not change until it is asked to change  hence it is not over written 

//difference in the useState in hook in functional component is that it merges all the states if they are declare d together or overwrite it 
// to change the state we have to use specific methods -- we cannot directly use dot notation as shown below
// this.state.showUsers=false
