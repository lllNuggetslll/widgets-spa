import React from 'react'

const widgetRow = (widgets, getOneWidget) => (
  widgets.map(widget => (
    <tr key={widget.id}>
      <td className="text-center">{widget.id}</td>
      <td>{widget.name}</td>
      <td>{widget.color}</td>
      <td>{widget.price}</td>
      <td>{widget.melts ? 'yes' : 'no'}</td>
      <td>{widget.inventory}</td>
      <td><button onClick={() => getOneWidget(widget.id)}>View</button></td>
    </tr>
  ))
)

export default widgetRow
