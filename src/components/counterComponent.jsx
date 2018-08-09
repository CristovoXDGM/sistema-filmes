
import React, { Component } from 'react';
class Counter extends Component {
    state = {  }
    render() { 
       return <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button type="button" class="btn btn-primary" onClick={this.teste}>Primary</button>
                </nav>
                 
    }
    

}

 
export default Counter;
