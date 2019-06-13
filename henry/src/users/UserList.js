import React from 'react';
import axios from 'axios';

class UserList extends React.Component {
      state = {
            users: []
      };

      render() {
            return (
                  <>
                        <h2>User List</h2>
                        <ul>
                              {this.state.users.map(u=> {
                                    <li key={u.id}>{u.username}</li>
                              })}
                        </ul>
                  </>
            )
      }

      componentDidMount() {
            const endpoint = 'http://localhost:5000/api/users';
            // const token = localStorage.getItem('jwt')
            // const options = {
            //       headers: {
            //             authorization: token
            //       }
            // }

            axios
                  .get(endpoint)
                  .then(res => {
                        console.log('user list', res.data)
                        this.setState(() => ({users: res.data}));
                  })
                  .catch(({ response }) => {
                        console.log("user list error", response)
                  })
      }
}

export default requiresAuth(UserList);