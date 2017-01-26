import React from 'react'
import iconLibrary from '../../utils/iconLibrary'

const sidebar = (location) => (
  <div id="sidebar-wrapper">
    <ul className="sidebar">
      <li className="sidebar-main"><a href="/">{location} <span className={iconLibrary[location]}></span></a></li>
      <li className="sidebar-title"><span>NAVIGATION</span></li>
      <li className="sidebar-list"><a href="/">Dashboard <span className="menu-icon fa fa-tachometer"></span></a></li>
      <li className="sidebar-list"><a href="/user">Users <span className="menu-icon fa fa-users"></span></a></li>
      <li className="sidebar-list"><a href="/widget">Widgets <span className="menu-icon fa fa-cubes"></span></a></li>
    </ul>
    <div className="sidebar-footer col-xs-12"><a href="#" target="_blank">&copy; 2015 Red Ventures</a></div>
  </div>
)

export default sidebar
