import React from 'react'
import Board from '../Components/Board'
import ReactModal from 'react-modal';
import Form from '../Components/Form'

const uuidv1 = require('uuid/v1');

class BoardContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false, //isOpen is set to false, due to we want the modal to close when we first render on to page.
      boards: [] // store list of boards
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    // this.renderBoards = this.renderBoards.bind(this)
  }

  handleFormSubmit(boardName) {
    // create new Board Component and add board component to array of boards (in state )
    console.log('boardName:', boardName)

    this.setState({
      boards: [...this.state.boards, boardName ]
    })
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  renderBoards() {
    const { boards } = this.state
    return(
      boards.map(board => <Board name={ board } key={ uuidv1() } />)
    )
  }

  render() {
    const { isOpen } = this.state
    return (
      <div className="board-container">
        <div className="board-header">
          <h1>Board Container</h1>
          <a href="#" onClick={ this.toggleModal }>Add Board</a>
        </div>

        <div className="board-list">
          { this.renderBoards() }
        </div>

        <ReactModal
          isOpen={ isOpen }
          onRequestClose={ this.toggleModal }
        >
          <Form
            submitFormFn={ this.handleFormSubmit } //passing down a function as props.
            closeModalFn={ this.toggleModal }
          />
        </ReactModal>
      </div>
    )
  }
}

export default BoardContainer
