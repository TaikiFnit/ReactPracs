import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>TopicID: {match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Title: Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Title: Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/rendering`}>
          Title: Props vs State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/`}
    
);

class App extends Component {
  render() {
    return (
      
    );
  }
}

export default App;
