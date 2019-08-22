import React from 'react';
import './App.css';
import { connect } from 'react-redux'

function App(props) {
  console.log(props)
  return (
    <div className="App">      
      <h1>{props.myname}</h1>
      <h2>{props.myactivity}</h2>
      <button onClick={()=> {props.changeName('vicky dhiman')}}>Change name</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myname: state.name,
    myactivity: state.activity
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => {
      dispatch({type:'CHANGE_NAME', payload: name})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
