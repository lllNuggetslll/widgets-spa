import React from 'react'

// Components
import WidgetRows from './widgetTableRowDispenser'

const widgetTable = (widgets, editor) => (
  <div className="row">
    <div className="col-lg-12">
      <div className="widget">
        <div className="widget-header">Widgets
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">ID</th>
                <th>Name</th>
                <th>Color</th>
                <th>Price</th>
                <th>Melts?</th>
                <th>Inventory</th>
              </tr>
            </thead>
            <tbody>
              {WidgetRows(widgets, editor)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
)

export default widgetTable
