import React from "react";

class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title text-center">Saved Articles</h2>
        </div>
        <div className="panel-body text-center">
          <form id="search-articles" onSubmit={this.doSearch}>
            <h3>Topic</h3>
            <input type="text" required ref="topic" />
            <h3>Start Year</h3>
            <input type="number" ref="startYr" />
            <h3>End Year</h3>
            <input type="number" ref="endYr" />
            <input type="submit" value="Search" />
          </form>  
        </div>
      </div>
    );
  },
  doSearch: function() {
    this.refs.topic
    this.refs.startYr
    this.refs.endYr
  }
}

// Export the component back for use in other files
export default Search;