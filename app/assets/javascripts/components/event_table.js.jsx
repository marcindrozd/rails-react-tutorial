var EventTable = React.createClass({
  handleUpdateRecord: function(old_event, event) {
    this.props.handleUpdateRecord(old_event, event);
  },

  handleDeleteRecord: function(event) {
    this.props.handleDeleteRecord(event);
  },

  handleSortColumn: function(name, order) {
    this.props.handleSortColumn(name, order);
  },

  render: function() {
    var events = [];
    this.props.events.forEach(function(event) {
      events.push(<Event event={event}
                         key={'event' + event.id}
                         handleUpdateRecord={this.handleUpdateRecord}
                         handleDeleteRecord={this.handleDeleteRecord} />);
    }.bind(this));

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-3 sortable">
              <SortColumn name="name"
                          text="Name"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.handleSortColumn} />
            </th>
            <th className="col-md-2 sortable">
              <SortColumn name="event_date"
                          text="Date"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.handleSortColumn} />
            </th>
            <th className="col-md-2 sortable">
              <SortColumn name="place"
                        text="Place"
                        sort={this.props.sort}
                        order={this.props.order}
                        handleSortColumn={this.handleSortColumn} />
            </th>
            <th className="col-md-3 sortable">
              <SortColumn name="description"
                        text="Description"
                        sort={this.props.sort}
                        order={this.props.order}
                        handleSortColumn={this.handleSortColumn} />
            </th>
            <th className="col-md-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events}
        </tbody>
      </table>
    )
  }
})
