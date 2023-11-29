import React from 'react'
import Home from './Pages/Home';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {

  return (
    <>
      <Home />

      {/* <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={MovieDetail} />
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
