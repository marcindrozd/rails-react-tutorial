var NewForm = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    event_date: React.PropTypes.string,
    place: React.PropTypes.string,
    description: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      name: '',
      event_date: '',
      place: '',
      description: ''
    }
  },

  handleAdd: function(event) {
    event.preventDefault();
    var _this = this;
    if (this.validForm()) {
      $.ajax({
        url: '/api/events',
        method: 'POST',
        data: { event: _this.state },
        success: function(data) {
          _this.props.handleAdd(data);
          _this.setState(_this.getInitialState());
        },
        error: function(xhr, status, error) {
          alert('Cannot add a new record', error);
        }
      });
    } else {
      alert('Please fill in all fields');
    }
  },

  validForm: function() {
    if (this.state.name && this.state.description && this.state.place && this.state.event_date) {
      return true;
    } else {
      return false;
    }
  },

  handleChange: function(event) {
    var input_name = event.target.name;
    var value = event.target.value;
    this.setState({ [input_name] : value });
  },

  render: function() {
    return(
      <form className="form-inline" onSubmit={this.handleAdd}>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="name"
                 placeholder="Name"
                 ref="name"
                 value={this.state.name}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="place"
                 placeholder="Place"
                 ref="place"
                 value={this.state.place}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="date"
                 className="form-control"
                 name="event_date"
                 placeholder="Event Date"
                 ref="event_date"
                 value={this.state.event_date}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="description"
                 className="form-control"
                 name="description"
                 placeholder="Description"
                 ref="description"
                 value={this.state.description}
                 onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    );
  }
});
