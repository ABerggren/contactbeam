// react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import Error from "./Pages/Error";
import About from "./Pages/About";
import ContactDetails from "./Pages/ContactDetails";
// components
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route exact path="/contacts/:id">
          <ContactDetails />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
