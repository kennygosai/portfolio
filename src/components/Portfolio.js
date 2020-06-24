import React from "react";
import ImgMediaCard from "./ImgMediaCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  imageCard: {
    width: 345,
    height: "auto",
    margin: theme.spacing(3),
  },
}));

/**
 * Footer section of the webpage
 *
 * @component
 * @example
 * const data = {
 *  projects : [{
 *    title: "Portfolio",
 *    category: "Created using ReactJS, See the code of this website!",
 *    image: "portfolio.png",
 *    github: "https://github.com/kennygosai/portfolio",
 *  }]
 * }
 * return (
 *   <Footer data={data} />
 * )
 */

function Portfolio(props) {
  const classes = useStyles();
  var projects = props.data.projects.map(function (projects, index) {
    var projectImage = "images/portfolio/" + projects.image;
    return (
      <div className={classes.imageCard} key={index}>
        <ImgMediaCard image={projectImage} data={projects}></ImgMediaCard>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects.</h1>

          <div className={classes.root}>{projects}</div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
