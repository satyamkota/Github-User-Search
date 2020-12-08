import './App.css';
import React from "react";
import GithubAPI from "./component/GithubAPI";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="navbar-brand">React With Github User Search (http calls)</a>
        </nav>

       <GithubAPI />
       

      </div>
    )
  }
}
export default App;
