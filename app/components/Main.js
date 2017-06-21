import React from "react";
import ReactDOM from "react-dom";

// Import sub-components
import Search from "./children/Search.js";
import Results from "./children/Results.js";
import Saved from "./children/Saved.js";

// Helper Function
import helpers from "./utils/helpers";

class Main extends React.Component {
  // intialize state
  constructor(props) {

    super(props);
    this.state = {

    }

  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("UPDATED");

      helpers.runQuery(this.state.searchTerm).then((data) => {
        if (data !== this.state.results) {
          console.log(data);

          this.setState({ results: data });
        }
      });
    }
  }

  setTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  render: function() {

    return (

      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">New York Times Article Scrubber</h2>
            <p className="text-center">
              <em>Search for and annotate articles of interest</em>
            </p>
          </div>

          <div className="col-md-12">

            {this.props.search}

          </div>

          <div className="col-md-12">

            {this.props.results}

          </div>

          <div className="col-md-12">

            {this.props.saved}

          </div>

        </div>

      </div>
    );
  }
}

// Export the component back for use in other files
export default Main;