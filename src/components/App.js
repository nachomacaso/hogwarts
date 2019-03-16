import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from './Header';
import StudentIndex from './StudentIndex';
import StudentEdit from './StudentEdit';
import StudentCreate from './StudentCreate';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <div>
            <Route exact path="/" render={() => (<Redirect to="/students" />)}/>
            <Route exact path="/students" component={StudentIndex} />
            <Route exact path="/students/create" component={StudentCreate} />
            <Route exact path="/students/:id/edit" component={StudentEdit} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
