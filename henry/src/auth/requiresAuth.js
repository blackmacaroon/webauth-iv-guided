import React from 'react';


const token = localStorage.getItem('jwt');

export default function(Component) {
      return class Authenticated extends React.Component {
            render(){
                  const notLoggedIn = <div>This requires logging in.</div>;
                  return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
            }
      }
}