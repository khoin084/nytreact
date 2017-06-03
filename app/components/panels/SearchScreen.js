// Include React
var React = require("react");

// Create the Adder Component
var SearchScreen = React.createClass({
  render: function() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Search Screen</h3>
        </div>
        <div className="panel-body text-center">

          {/*
            The number of clicks is passed to us from Main.js inside props.
            We use that number to show the value inside of this component
          */}
          {/*<h1>{this.props.clicks}</h1>*/}
          <form> 
            <div className="form-group">
              <lable>Topic</lable>
            </div>
            <div>
              <input type="text" name="topic" />
            </div>
            <div className="form-group">
              <lable>Start Year (mm-dd-yyyy)</lable>
            </div>
            <div>
              <input type="text" name="startYr" />
            </div>
            <div className="form-group">
              <lable>End Year (mm-dd-yyyy)</lable>
            </div>
            <div>
              <input type="text" name="endYr" />
            </div>
          </form>
        </div>
        
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = SearchScreen;
