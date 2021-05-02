import React from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json()
      .then((users) => this.setState({ monsters: users }))
    )
  }

  render() {
    return (
      <div className="App">
        <CardList monster={this.state.monsters} />
      </div>
    );
  }
}

export default App;
