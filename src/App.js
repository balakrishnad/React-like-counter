import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LikeCounter from './components/LikeCounter';
import Timer from './components/Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={'React Sample - Counter & Stop watch'} />

        <div className="mt-5">
          <div className="d-flex flex-row">
            <LikeCounter />
            <Timer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
