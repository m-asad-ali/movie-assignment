import React from 'react'
import List from './Pages/List';
import Box from './Components/box';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {

  return (
    <>
      <Box />
      <List />

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
