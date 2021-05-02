import React from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json()
      .then((users) => this.setState({ monsters: users }))
    )
  }
  
  
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search monsters"
          onChange={e => this.setState({ searchField: e.target.value })} 
        />
        <CardList monster={filteredMonster} />
      </div>
    );
  }
}

export default App;
