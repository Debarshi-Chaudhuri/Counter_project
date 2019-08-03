import React ,{Component} from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import {Increment} from './actions/increment.js';
import {Decrement} from './actions/decrement.js';
import {Async} from './actions/asyncIncrement.js';
import {connect} from "react-redux";
const mapStateToProps=(store)=>{
  return({
    counter:store.counter
  })
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({
    Increment,Decrement,Async
  },dispatch)
}
class App extends Component {
  render(){
    return(
      <div>
        <h2 >{this.props.counter}</h2>
        <p><button onClick={this.props.Decrement}>-</button>
        <button onClick={this.props.Increment}>+</button>
        <button onClick={this.props.Async}>Async +</button></p>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
