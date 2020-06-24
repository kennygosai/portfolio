import React from "react";

/**
 * Footer section of the webpage
 *
 * @component
 * @example
 * const data = {
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
function Footer(props) {
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
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>&copy; Copyright 2020 Kenny Gosai</li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
