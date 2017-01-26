import React from 'react'

const widgetRow = (widgets, edit) => (
  widgets.map(widget => (
    <tr key={widget.id}>
      <td className="text-center">{widget.id}</td>
      <td>{widget.name}</td>
      <td>{widget.color}</td>
      <td>{widget.price}</td>
      <td>{widget.melts ? 'yes' : 'no'}</td>
      <td>{widget.inventory}</td>
    </tr>
  ))
)

export default widgetRow
