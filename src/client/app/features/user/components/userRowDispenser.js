import React from 'react'

const userRows = (users) => (
  users.map(user => (
    <tr key={user.id}>
      <td className="text-center">{user.id}</td>
      <td>{user.name}</td>
      <td><img src={user.gravatar}/></td>
    </tr>
  ))
)

export default userRows
