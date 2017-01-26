import React from 'react'

// Components
import rowDispenser from './rowDispenser'
import SearchBar from '../../shared/searchBar'

const tableDisplay = (name, data, search) => (
  <div className="col-lg-6">
    <div className="widget">
      <div className="widget-header">{name}
        <div className="pull-right">
          <SearchBar search={search} />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {rowDispenser(data)}
          </tbody>
        </table>
      </div>
    </div>
  </div>

)

export default tableDisplay
