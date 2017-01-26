import React, {Component} from 'react'

export default class WidgetEditor extends Component {


  render() {
    return (
      <tr key={widget.id}>
        <td className="text-center">{widget.id}</td>
        <td>{widget.name}</td>
        <td>{widget.color}</td>
        <td>{widget.price}</td>
        <td>{widget.melts ? 'yes' : 'no'}</td>
        <td>{widget.inventory}</td>
        <td><button onClick={() => editor(widget.id)}>Edit</button></td>
      </tr>
    )
  }
}
