import React from "react";
import { resumeData } from "./assets/resumeData";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/**
 * Renders Routes and the components for each route
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Header data={resumeData.main} />
            <Resume data={resumeData.resume} />
            <Portfolio data={resumeData.portfolio} />
            <Contact data={resumeData.main} />
            <Footer data={resumeData.main} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
