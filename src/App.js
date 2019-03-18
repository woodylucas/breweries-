import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BreweryIndex from './Components/BreweryIndex'
import BoardContainer from './Containers/BoardContainer'
import Form from "./Components/Form"

class App extends Component {

  state = {
    breweries: [] // want to render a list of items, so we set state with an empty array.
  }

  componentDidMount() {
    fetch('https://api.openbrewerydb.org/breweries')
      .then(resp => resp.json())
      .then(breweries => this.setState({ breweries }))
  }

  handleClick = (brewObj) => {
    console.log('testing, click', brewObj)
  }


  render() {

    console.log(this.state) // testing state here...
    const { breweries } = this.state // deconstruction
    return (
      <div className="App">
        <BreweryIndex
          breweries={ breweries } // props name will be breweries
          handleClick={ this.handleClick } //props name will be handle click 
         />
        <BoardContainer />

      </div>
    );
  }
}

export default App;
