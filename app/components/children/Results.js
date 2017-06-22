import React from "react";
import { Panel ListGroup } from "react-bootstrap";

class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      headlines: []
    };
    this.getArticles = this.getArticles.bind(this);
    
  }
  getArticles: function(articles) {

  };
  render() {
    var articles = this.state.articles;
    listItems = articles.map(function(item, index) {
      return(
        <ListGroupItem item={item} key={index}>/>
        );
    });
    return (
        <div>
          <Panel header="Results">
              <ListGroup>
                <ShowArticle />
              </ListGroup>
          </Panel>
        </div>      
    );
  }
  ShowArticle: function() {
    return(
      <li>
        <div className="art-list">
          <span className="head-line">{this.props.item}</span>
          <Button bsStyle="success" bsSize="small" onClick={SaveIt}>Save</Button>
        </div>
      </li>  
      );
  }
}


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