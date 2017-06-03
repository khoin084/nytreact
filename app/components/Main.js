// Include React
var React = require("react");

// Here we include all of the sub-components
var SearchScreen = require("./panels/SearchScreen");
var ResultScreen = require("./panels/ResultScreen");
var SavedArticles = require("./panels/SavedArticles");
var Imgr = require("./panels/Imgr");

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {
      clicks: 0
    };
  },

  // Whenever the button is clicked we'll use setState to add to the clickCounter
  // Note the syntax for setting the state
  handleClick: function() {
    this.setState({ clicks: 1 + this.state.clicks });
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1>New York Times Article Scrubber</h1>
            <p>Search for and Annotate Articles of Interest</p>
            <p>
             
              {/*<button className="btn btn-primary btn-lg" onClick={this.handleClick}>CLICK ME!!!!</button>*/}
            </p>
          </div>

          {/*
            Below we add each of the sub components.
            Note how we "pass" in the click count as a prop called "clicks"
          */}
          <div className="col-md-12">

            <SearchScreen/>

          </div>

          <div className="col-md-12">

            <ResultScreen/>

          </div>


          <div className="col-md-12">

            <SavedArticles/>

          </div>

          <div className="col-md-3">

            <Imgr clicks={this.state.clicks} />

          </div>

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
