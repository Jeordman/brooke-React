import React, { Component } from "react";
import List from "./Components/List";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Brooke",
      list: ["Sunday", "Monday", "Tuesday"]
    };
  }

  delete = index => {
    let listCopy = [...this.state.list];
    listCopy.splice(index, 1);
    console.log(listCopy)
    this.setState({
      list: listCopy
    })
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div>{this.state.name}</div>
        {this.state.list.map((element, index) => {
          return <List day={element} index={index} delete={this.delete}/>;
        })}
      </div>
    );
  }
}

export default App;
