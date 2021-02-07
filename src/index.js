import ReactDOM from "react-dom";
import React, { Component } from "react";

import Tabs from "./Tabs";
import Panel from "./Panel";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], userId: 4, array: [5, 1, 3, 4, 6] };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            data: result,
          });
          console.log(this.state.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    const { data, array, userId } = this.state;
    return (
      <div className="main-container">
        <div style={{ marginLeft: "33px" }}>
          <h1>Example Tabs Demo</h1>
        </div>
        <hr />
        <br />
        <Tabs>
          <Panel title="All Names">
            {data.map((event) => {
              return (
                <>
                  <div key={event.id}>
                    <h3>
                      <label>Name : </label>
                      {event.name}
                    </h3>
                  </div>
                  <label>Email: </label>
                  <span>{event.email}</span>
                  <br />
                  <label>Phone: </label>
                  <span>{event.phone}</span>
                  <br />
                </>
              );
            })}
          </Panel>
          <Panel title="In Review Candidates">
            {data
              .filter((event) => event.id !== userId)
              .map((event) => {
                return (
                  <>
                    <div key={event.id}>
                      <h3>
                        <label>Name : </label>
                        {event.name}
                      </h3>
                    </div>
                    <label>Email: </label>
                    <span>{event.email}</span>
                    <br />
                    <label>Phone: </label>
                    <span>{event.phone}</span>
                    <br />
                  </>
                );
              })}
          </Panel>
          <Panel title="Registered Names">
            {data
              .filter((event) => array.includes(event.id))
              .map((event) => {
                return (
                  <>
                    <div key={event.id}>
                      <h3>
                        <label>Name : </label>
                        {event.name}
                      </h3>
                    </div>
                    <label>Email: </label>
                    <span>{event.email}</span>
                    <br />
                    <label>Phone: </label>
                    <span>{event.phone}</span>
                    <br />
                  </>
                );
              })}
          </Panel>
        </Tabs>
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
