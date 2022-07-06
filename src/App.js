// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [isActive, setisActive] = useState(false);
//   const handleClick = () => {
//     setisActive(!isActive);
//   };
//   return (
//     <div className="App">
//       <button onClick={()=>handleClick()}>{isActive ? "hide" : "show"}</button>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';

class App extends Component {

  state = {
    isActive: false
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive })
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>
          {this.props.show ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}
export default App;