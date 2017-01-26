import React from 'react'

const rowDispenser = (data) => (
  data.map(info => (
    <tr key={info.id}>
      <td className="text-center">{info.id}</td>
      <td>{info.name}</td>
    </tr>
  ))
)

export default rowDispenser
