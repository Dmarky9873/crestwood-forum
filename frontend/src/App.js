import React from "react";
import Forum from "./components/Forum";
import SignUp from "./components/SignUp";

class App extends React.Component {
  render() {
    return (
      <div>
        <SignUp />
        <Forum />
      </div>
    );
  }
}

export default App;