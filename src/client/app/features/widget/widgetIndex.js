import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import Sidebar from '../shared/sidebar'
import Header from '../shared/header'
import WidgetTable from './components/widgetTable'
import WidgetCreator from './components/widgetCreator'
import SearchBar from '../shared/searchBar'

// Action Creators
import { getWidgets,
         makeWidget,
         updateWidget,
         getOneWidget,
       } from '../../redux/Actions'

class Widget extends Component {
  componentDidMount() {
    this.props.getWidgets()
  }

  render() {
    const { widgets, makeWidget, updateWidget, getOneWidget } = this.props

    return (
      <div id="page-wrapper" className="open">
        {Sidebar("Widget")}
        <div id="content-wrapper">
          <div className="page-content">
            {Header("Widget")}
            <WidgetCreator action={makeWidget} type={"Create"}/>
            <WidgetCreator action={updateWidget} type={"Update"}/>
            <hr/>
            <SearchBar search={getOneWidget} />
            {WidgetTable(widgets, getOneWidget)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    widgets: state.dashReducer.widgets,
  }
}

export default connect(mapStateToProps,{
  getWidgets,
  makeWidget,
  updateWidget,
  getOneWidget,
})(Widget)
