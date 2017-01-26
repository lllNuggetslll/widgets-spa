import React, { Component } from 'react'

export default class widgetCreator extends Component{
  constructor (props) {
    super(props)

    this.state = {
      id: '',
      name: '',
      price: '',
      color: '',
      melts: false,
      inventory: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, field) {
    let value = field === 'melts' ? event.target.checked: event.target.value

    const newState = Object.assign({}, this.state,
      this.state[field] = value
    )

    this.setState(newState);
  }

  handleSubmit(event) {
    this.props.action(this.state)
    event.preventDefault();
  }

  render(){
    const { id, name, price, color, melts, inventory } = this.state
    const { type } = this.props

    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="widget">
            <div className="widget-body">
              <form
                className="form-horizontal"
                onSubmit={this.handleSubmit}
                >
                <legend>{type} Widget</legend>
                {type === 'Update' && (
                  <div className="controls">
                    ID
                    <input
                      id="widget-name"
                      name="widget-name"
                      type="text"
                      placeholder="id"
                      className="input-medium"
                      value={id}
                      onChange={(event) => this.handleChange(event, 'id')}
                    />
                  </div>
                )}
                <div className="controls">
                  Name
                  <input
                    id="widget-name"
                    name="widget-name"
                    type="text"
                    placeholder="foo-bar"
                    className="input-medium"
                    value={name}
                    onChange={(event) => this.handleChange(event, 'name')}
                  />
                </div>
                <div className="controls">
                  <div className="input-prepend">
                    Price
                    <span className="add-on">$</span>
                    <input
                      id="widget-price"
                      name="widget-price"
                      className="input-medium"
                      placeholder="0.00"
                      type="text"
                      value={price}
                      onChange={(event) => this.handleChange(event, 'price')}
                    />
                  </div>
                </div>
                <div className="controls">
                  Color
                  <select
                    id="widget-color"
                    name="widget-color"
                    className="input-large"
                    value={color}
                    onChange={(event) => this.handleChange(event, 'color')}
                    >
                    <option>red</option>
                    <option>purple</option>
                    <option>black</option>
                    <option>green</option>
                    <option>magenta</option>
                    <option>white</option>
                    <option>depends on the viewing angle</option>
                  </select>
                </div>
                <div className="controls">
                  Melts
                  <input
                    type="checkbox"
                    name="widget-properties"
                    id="widget-properties-0"
                    value={melts}
                    checked={melts}
                    onChange={(event) => this.handleChange(event, 'melts')}
                  />
                </div>
                <div className="controls">
                  Inventory
                  <input
                    id="widget-count"
                    name="widget-count"
                    type="text"
                    placeholder="#?"
                    className="input-small"
                    value={inventory}
                    onChange={(event) => this.handleChange(event, 'inventory')}
                  />
                </div>
                <div>
                  <button className="btn btn-sm btn-info" type='submit' value="Submit">{type}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
