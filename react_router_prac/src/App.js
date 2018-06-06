import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>TopicID: {match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Title: Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Title: Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/rendering`}>Title: Props vs State</Link>
      </li>
    </ul>
    <Route path={`${match.path}/:topicId/`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      {/* exactがないと、/という文字が入ったら絶対に表示される */}
      {/* 純粋ににアクセスされたときにHomeを表示させたいときはexacをつける */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default App;
