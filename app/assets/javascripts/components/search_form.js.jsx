var SearchForm = React.createClass({
  handleSearch: function() {
    var query = ReactDOM.findDOMNode(this.refs.query).value;
    var _this = this;

    $.ajax({
      url: 'api/events/search',
      data: { query: query },
      success: function(data) {
        _this.props.handleSearch(data);
      },
      error: function(xhr, status, error) {
        alert('Search error', status, xhr, error);
      }
    });
  },

  render: function() {
    return (
      <input onChange={this.handleSearch}
             type="text"
             className="form-control"
             placeholder="Type search phrase here"
             ref="query" />
    )
  }
});
