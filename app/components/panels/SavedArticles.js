// Include React
var React = require("react");

// Create the Adder Component
var SavedArticles = React.createClass({
  render: function() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Saved Articles</h3>
        </div>
        <div className="panel-body text-center">

          {/*
            The number of clicks is passed to us from Main.js inside props.
            We use that number to show the value inside of this component
          */}
          {/*<h1>{this.props.clicks}</h1>*/}
          
        </div>
        
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = SavedArticles;
