import React from "react";
import Forum from "./components/Forum";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>

        <Router>
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/signup" element={< SignUp />} />
            {/* <Route path="/success" element={<SuccessPage />} /> */}
            <Route path="/messaging" element={<Forum />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;