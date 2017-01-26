import React, { Component } from 'react';
import { connect } from 'react-redux'

// Components
import Sidebar from '../shared/sidebar'
import Header from '../shared/header'
import SearchBar from '../shared/searchBar'
import UserTable from './components/userTable'

// Action Creators
import { getUsers,
         getOneUser,
       } from '../../redux/Actions'

class User extends Component {
  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    const { getOneUser, users } = this.props;

    return (
      <div id="page-wrapper" className="open">
        {Sidebar('Users')}
        <div id="content-wrapper">
          <div className="page-content">
            {Header('Users')}
            <div className="row">
              <div className="col-lg-12">
                <div className="widget">
                  <div className="widget-header">Users
                    <div className="pull-right">
                      <SearchBar search={getOneUser} />
                    </div>
                  </div>
                  {UserTable(users)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    users: state.dashReducer.users
  }
}

export default connect (mapStateToProps,{
  getUsers,
  getOneUser,
})(User)
