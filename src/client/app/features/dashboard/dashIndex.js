import React, { Component } from 'react';
import {connect} from 'react-redux'

// Components
import Sidebar from '../shared/sidebar'
import Header from '../shared/header'
import InfoDisplayBar from './components/infoDisplayBar'
import TableDisplay from './components/tableDisplay'

// Action Creators
import { getUsers,
         getWidgets,
         getOneUser,
         getOneWidget,
       } from '../../redux/Actions'

class Dashboard extends Component {
  componentDidMount(){
    this.props.getUsers()
    this.props.getWidgets()
  }

  render() {
    const userAmount = this.props.users.length;
    const widgetAmount = this.props.widgets.length;
    const { users,
            widgets,
            getOneUser,
            getOneWidget
          } = this.props

    return (
      <div id="page-wrapper" className="open">
        {Sidebar("Dashboard")}
        <div id="content-wrapper">
          <div className="page-content">
            {Header("Dashboard")}
            {InfoDisplayBar({userAmount, widgetAmount})}
            <div className="row">
              {TableDisplay("Users", users, getOneUser)}
              {TableDisplay("Widgets", widgets, getOneWidget)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.dashReducer.users,
    widgets: state.dashReducer.widgets,
  }
}

export default connect(mapStateToProps,{
  getUsers,
  getWidgets,
  getOneUser,
  getOneWidget,
})(Dashboard)
