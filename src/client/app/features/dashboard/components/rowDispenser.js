import React from 'react'

const rowDispenser = (data, search) => (
  data.map(info => (
    <tr key={info.id}>
      <td className="text-center">{info.id}</td>
      <td>{info.name}</td>
      <td><button onClick={() => search(info.id)}>View</button></td>
    </tr>
  ))
)

export default rowDispenser
