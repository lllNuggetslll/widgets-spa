import React, { Component } from 'react'

export default class searchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  this.setState({value: event.target.value});
}

  handleSubmit(event) {
  this.props.search(this.state.value)
  event.preventDefault();
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control input-sm"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type='submit' value="Submit">Submit</button>
      </form>
    )
  }
}
