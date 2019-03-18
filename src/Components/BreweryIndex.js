import React from 'react'
import BreweryCard from './BreweryCard'


class BreweryIndex extends React.Component {
  renderBreweries() {
    const { breweries, handleClick } = this.props
    return (
      breweries.map(brewObj =>
        <BreweryCard
          handleClick={ handleClick }
          brew={ brewObj }
          key={ brewObj.id }
        />)
    )
  }

  render() {
    return (
      <div className="index-breweries">
        <h1>Index</h1>
        { this.renderBreweries() }
      </div>
    )
  }
}

export default BreweryIndex
