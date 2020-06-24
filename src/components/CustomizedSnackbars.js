import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

/**
 * Error/Success message used in Contact
 *
 * @component
 * @example
 * const type = "success"
 * const message = "Message Sent"
 * const emptyString= () => {
 *  message = "";
 * }
 * return (
 *   <CustomizedSnackbars type={type} message={message} emptyString={emptyString} />
 * )
 */
export default function CustomizedSnackbars(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    props.emptyString();
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.type}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
