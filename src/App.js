import React, { Component } from 'react';
import Preview from './components/Preview';
import data from '../src/data/giphy';
import './App.css';

export class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = { gifis: data[0].images.original.url };
    this.gifChange = this.gifChange.bind(this);
  }

  gifChange(e) {
    this.setState({ gifis: e.currentTarget.src});
  }

  render() {
      
      const pictures = data.map((el) => {          
        return (
          <img key={el.id} src={el.images.original.url} alt={el.title} onClick={this.gifChange} />
        );
      });     

        console.log(data)
    return (
      <div className="App">      
        <div className="container-fotos">{pictures}</div>
        <Preview data={this.state.gifis}/>
      </div>
    )
  }
}


export default App

