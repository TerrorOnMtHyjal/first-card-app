import React, { Component } from 'react';
import './App.css';
import Main from './containers/MainContainer';
import Form from './containers/FormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Main />
      </div>
    );
  }
}

export default App;
