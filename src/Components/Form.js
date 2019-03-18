import React from 'react'

class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      newBoardName: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState( { newBoardName: event.target.value } )
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.newBoardName);
    const { submitFormFn, closeModalFn } = this.props
    const { newBoardName } = this.state

    console.log('newBoardName in form Component:', newBoardName)
    submitFormFn(newBoardName)
    closeModalFn()
    event.preventDefault();
  }

  render() {
    const { newBoardName } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Board Name:
          <input type="text" value={ newBoardName } onChange={ this.handleChange } />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;
