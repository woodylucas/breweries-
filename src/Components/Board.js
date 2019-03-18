import React from 'react'
import BreweryCard from './BreweryCard'
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
};

class Board extends React.Component {
  render() {
    const { name } = this.props
    console.log('name in board component:', name)
    return(
      <div className='board'>
        <p>{ name }</p>
      </div>
    )

  }
}

Board.propTypes = propTypes;

export default Board
