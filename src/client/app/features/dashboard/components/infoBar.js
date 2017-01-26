import React from 'react'

const infoBar = (amount, name) => (
  <div className="col-lg-3 col-md-6 col-xs-12">
    <div className="widget">
      <div className="widget-header">
        <div className="widget-icon green pull-left">
          <i className="fa fa-users"></i>
        </div>
        <div className="title">{amount}</div>
        <div className="comment">{name}</div>
      </div>
    </div>
  </div>
)

export default infoBar;
