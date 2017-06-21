import React from "react";

class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      headlines: []
    }

  }
  getArticles: function() {

  };
  render() {
    var articles = this.state.articles;
    articles = articles.map(function(item, index) {
      return(
        <ShowArticle item={item} key={index}/>
        );
    });
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title text-center">Results</h2>
        </div>
        <div className="panel-body text-left">
          <ul>{articles}</ul>
        </div>
      </div>
    );
  }
}

var ShowArticle = React.createClass({
  render: function(){
    return(
      <li>
        <div className="art-list">
          <span className="head-line">{this.props.item}</span>
          <Button bsStyle="success" bsSize="small" onClick={SaveIt}>Save</Button>
        </div>
      </li>  
      );
  };
});

// Export the component back for use in other files
export default Results;