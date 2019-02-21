import React from 'react';
import Header from './Header.jsx'
import Pokemon from './Pokemon.jsx'
import PlayGame from './PlayGame.jsx'
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Pokemon />
      </div>
    );
  }
}

export default App;
