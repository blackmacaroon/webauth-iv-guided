import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {

      state = {
            username: 'sam',
            password: 'pass'
      }

      render() {
            return (
                  <>
                  <h2>Login</h2>
                  {/* form>((div>(label+input)*2)+div>button) */}
                  <form onSubmit={this.handleSubmit}>
                        <div>
                              <label htmlFor="username">Username</label>
                              <input id="username" onChange={this.handleChange} value={this.state.username} type="text"></input>
                        </div>
                        <div>
                              <label htmlFor="password">Password</label>
                              <input id="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
                        </div>
                        <div>
                              <button type="submit">Login</button>
                        </div>

                  </form>

                  </>
        
            )
      }

      handleChange = e => {
            // capture the values first 
            const { id, value } = e.target;
            // this id comes from the attribute in the input 
            this.setState({ [id]:value });
      }
      handleSubmit = e => {
            e.preventDefault();
            const endpoint = 'http://localhost:3000/api/auth/login';
            axios
                  .post(endpoint, this.state)
                  .then(res => {
                        console.log(res);
                        localStorage.setItem('jwt', res.data.token);
                        this.props.history.push('/users');
                  })
                  .catch(err => {
                        console.error('Login Failure', err)
                  })
      }
}

