import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 398,
    position: 'relative'
  },
  cardActions: {
    position: 'absolute',
    bottom: 0
  },
  button: {

  }
});

/**
 * Component used display
 *
 * @component
 * @example
 * const data = {
 *  title: "Portfolio",
 *  category: "Created using ReactJS, See the code of this website!",
 *  image: "portfolio.png",
 *  github: "https://github.com/kennygosai/portfolio",
 * }
 * const image = "images/portfolio/" + data.image
 * return (
 *   <ImgMediaCard image={image} data={data} />
 * )
 */
function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <a
        href={props.data.url !== undefined ? props.data.url : props.data.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Project Image"
            height="140"
            image={props.image}
            title="Project Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.data.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.data.category}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
      <CardActions className={classes.cardActions}>
        {props.data.url !== undefined ? (
          <a href={props.data.url} target="_blank" rel="noopener noreferrer">
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<LanguageIcon />}
            >
              Visit Website
            </Button>
          </a>
        ) : null}
        {props.data.github !== undefined ? (
          <a href={props.data.github} target="_blank" rel="noopener noreferrer">
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<GitHubIcon />}
            >
              See Code
            </Button>
          </a>
        ) : null}
      </CardActions>
    </Card>
  );
}
export default ImgMediaCard;
