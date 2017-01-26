import React from 'react'

const header = (location) => (
  <div className="row header col-xs-12">
    <div className="user pull-right">
      <div className="item dropdown">
        <a href="#" className="dropdown-toggle"><img src="http://codewinds.com/assets/article/reactjs-conf-logo-dsc_5109-800.jpg" alt=""/></a>
      </div>
    </div>
    <div className="meta">
      <div className="page">{location}</div>
      <div className="breadcrumb-links">Home / {location}</div>
    </div>
  </div>
)

export default header
