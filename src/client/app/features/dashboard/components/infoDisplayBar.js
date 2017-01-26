import React from 'react'

// components
import infoBar from './infoBar'

const infoDisplayBar = ({userAmount, widgetAmount}) => (
  <div className="row">
    {infoBar(userAmount, "Users")}
    {infoBar(widgetAmount, "Widgets")}
  </div>
)

export default infoDisplayBar;
