import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import CountryList from "./countries/CountryList";
import CountryDetail from "./countries/CountryDetail";
import NoMatch from "./NoMatch";
import CountryForm from "./countries/CountryForm";
import CountryCompare from "./countries/CountryCompare";
//import LangList from "./countries/LangList";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/languages" component={LangList} /> */}
          <Route exact path="/countries" component={CountryList} />
          {/* 
          Bien faire attention à l'ordre des routes, sinon le router ne va pas bien les interpréter
          Par exemple : le router pourrait penser que add est un id donc la route doit être avant celle avec l'id, sinon il ne va pas l'interpréter correctement
          */}
          <Route path="/countries/add" component={CountryForm} />
          <Route path="/countries/edit/:id" component={CountryForm} />
          <Route path="/countries/compare" component={CountryCompare} />
          <Route path="/countries/:id" component={CountryDetail} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
