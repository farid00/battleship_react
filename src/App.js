import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tile from './tile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {squares: Array(10).fill(null)}
  }

  onClick(i) {
    
    let squarez = this.state.squares
    squarez[i] = "S"
    this.setState({
      squares: squarez
    });
  }
  renderTile(i) {
    return (
        <Tile state={this.state.squares[i]} handleClick={() => this.onClick(i)}/>
        )
  }
  
  render() {
    return (
      <div className="App">
        <div>
          {this.renderTile(1)}
          {this.renderTile(2)}
          {this.renderTile(3)}
        </div>
        <div>
          {this.renderTile(4)}
          {this.renderTile(5)}
          {this.renderTile(6)}
        </div>
        <div>
          {this.renderTile(7)}
          {this.renderTile(8)}
          {this.renderTile(9)}
        </div>

      </div>
    );
  }
}

export default App;
