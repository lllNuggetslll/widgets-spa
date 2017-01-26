import React from 'react'

// Components
import userRows from './userRowDispenser'

const userTable = (users) => (
  <div className="table-responsive">
    <table className="table">
      <thead>
        <tr>
          <th className="text-center">ID</th>
          <th>Name</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        {userRows(users)}
      </tbody>
    </table>
  </div>
)

export default userTable
