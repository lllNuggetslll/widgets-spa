import React from 'react'

const userRows = (users, getOneUser) => (
  users.map(user => (
    <tr key={user.id}>
      <td className="text-center">{user.id}</td>
      <td>{user.name}</td>
      <td><img src={user.gravatar}/></td>
      <td><button onClick={() => getOneUser(user.id)}>View User</button></td>
    </tr>
  ))
)

export default userRows
