import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    //honor the inheritance of the parent component by including the super() statement
    super();
  }
  render() {
    // class based component requires render method that returns HTML;
    return (
      <div className="App">
        <h3>Hello world</h3>
      </div>
    );
  }
}
// To learn more check reference: https://www.w3schools.com/react/react_class.asp

export default App;
