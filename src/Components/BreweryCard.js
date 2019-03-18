import React from 'react'

class BreweryCard extends React.Component {

  render() {
    return (
      <div className="brewery-card">
        <p onClick={ () => this.props.handleClick(this.props.brew ) }>{ this.props.brew.name }</p>
     </div>
    )
  }
}

export default BreweryCard
