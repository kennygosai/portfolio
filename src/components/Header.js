import React from "react";

/**
 * Header section of the webpage
 *
 * @component
 * @example
 * const data = {
 *  name: "Kenny Gosai",
 *  occupation: "Software Developer",
 *  description: "Currently I work at ...",
 *  city: "Toronto",
 *  social : [{
 *    name: "github",
 *    url: "https://github.com/kennygosai",
 *    className: "fa fa-github",
 *  }]
 * }
 * return (
 *   <Footer data={data} />
 * )
 */
function Header(props) {
  const name = props.data.name;
  const occupation = props.data.occupation;
  const description = props.data.description;
  const city = props.data.address.city;
  const networks = props.data.social.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Projects
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>
            I'm a {city} based <span>{occupation}</span>. {description}
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#resume">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}

export default Header;
