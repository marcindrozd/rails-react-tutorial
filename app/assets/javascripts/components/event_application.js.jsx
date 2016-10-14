var EventApplication = React.createClass({
  getInitialState: function() {
    return {
      events: [],
      sort: 'name',
      order: 'asc'
    }
  },

  componentDidMount: function() {
    this.getDataFromApi();
  },

  getDataFromApi: function() {
    var _this = this;
    $.ajax({
      url: 'api/events',
      success: function(data) {
        _this.setState({ events: data });
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from api', error);
      }
    })
  },

  handleSearch: function(events) {
    this.setState({ events: events });
  },

  handleAdd: function(event) {
    this.setState({ events: this.state.events.concat([event]) });
  },

  handleUpdateRecord: function(old_event, event) {
    var events = this.state.events.slice();
    var index = events.indexOf(old_event);
    events.splice(index, 1, event);
    this.setState({ events: events });
  },

  handleDeleteRecord: function(event) {
    var events = this.state.events.slice();
    var index = events.indexOf(event);
    events.splice(index, 1);
    this.setState({ events: events });
  },

  handleSortColumn: function(name, order) {
    if (this.state.sort != name) {
      order = 'asc';
    }
    $.ajax({
      url: '/api/events',
      data: { sort_by: name, order: order },
      method: 'GET',
      success: function(data) {
        this.setState({ events: data, sort: name, order: order });
      }.bind(this),
      error: function(xhr, data, error) {
        alert('Cannot sort events: ', error);
      }
    });
  },

  render: function() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>React Tutorial</h1>
          <p>as seen in the Internet</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <SearchForm handleSearch={this.handleSearch} />
          </div>
          <div className="col-md-8">
            <NewForm handleAdd={this.handleAdd} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <EventTable events={this.state.events}
                        sort={this.state.sort}
                        order={this.state.order}
                        handleUpdateRecord={this.handleUpdateRecord}
                        handleDeleteRecord={this.handleDeleteRecord}
                        handleSortColumn={this.handleSortColumn} />
          </div>
        </div>
      </div>
    );
  }
});
