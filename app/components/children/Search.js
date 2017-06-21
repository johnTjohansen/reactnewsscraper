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

  callNYTIMES() {
    helpers.runQuery().then(data)
  }

  setParms() {
    this.setState(topic: this.value())
    this.setState(startYr: this.value())
    this.setState(endYr: this.value())
  }

  render() {
    return (
        <div>
          <Panel header="Search Articles">
            <Form onChange={setParms()}>
              <FieldGroup
                id="topic"
                type="text"
                label="Text"
                placeholder="Enter search keywords"
              />
              <FieldGroup
                id="startYr"
                type="number"
                label="Start Year"
                placeholder="Enter year to begin search"
              />
              <FieldGroup
                id="endYr"
                type="number"
                label="End Year"
                placeholder="Enter year to end search"
              />
              <Button type="submit" className="btn btn-primary" onClick={doSearch()}>
                Submit
              </Button>
            </Form>
          </Panel>
        </div>  
    );
  },
  doSearch: function() {
    event.preventDefault();
    helpers.runQuery().then((data) => {
      
    }
    this.refs.topic
    this.refs.startYr
    this.refs.endYr
  }
}

// Export the component back for use in other files
export default Search;