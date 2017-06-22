import React from "react";
import { Button Panel Form FieldGroup } from "react-bootstrap";

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      startYr: '',
      endYr: ''
    }
  }
  doSearch: function() {
    event.preventDefault();
    helpers.runQuery().then((data) => {
      console.log(data)
    }
    //populate search results
  }

  handleChange: function(event) {
    //update state of a form value when it is changed
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  render() {
    return (
        <div>
          <Panel header="Search Articles">
            <Form>
              <FieldGroup
                id="topic"
                value={this.state.topic}
                type="text"
                label="Text"
                placeholder="Enter search keywords"
                onChange={this.handleChange}
              />
              <FieldGroup
                id="startYr"
                value={this.state.startYr}
                type="number"
                label="Start Year"
                placeholder="Enter year to begin search"
                onChange={this.handleChange}
              />
              <FieldGroup
                id="endYr"
                value={this.state.endYr}
                type="number"
                label="End Year"
                placeholder="Enter year to end search"
                onChange={this.handleChange}
              />
              <Button type="submit" className="btn btn-primary" onClick={doSearch()}>
                Submit
              </Button>
            </Form>
          </Panel>
        </div>  
    );
  },
}

// Export the component back for use in other files
export default Search;