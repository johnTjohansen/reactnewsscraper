import React from "react";

class Saved extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Panel header="Saved Articles">
              <ListGroup>
                <ShowArticle />
              </ListGroup>
          </Panel>
        </div> 
    );
  }
}

// Export the component back for use in other files
export default Saved;