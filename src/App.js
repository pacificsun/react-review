import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    //honor the inheritance of the parent component by including the super() statement
    super(props);
    this.state = {
      count: 0,
    };
  }

  increaseCounter() {
    console.log("cc");
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    // class based component requires render method that returns HTML;

    return (
      <div className="App">
        <h3>Hello world</h3>
        <h5>{this.state.count}</h5>
        <button onClick={() => this.increaseCounter()}>Add</button>
      </div>
    );
  }
}
// To learn more check reference: https://www.w3schools.com/react/react_class.asp

export default App;
