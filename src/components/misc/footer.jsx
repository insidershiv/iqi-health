import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import colors from "../../theme/colors";
import { pxTorem } from "../../utils/utils";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    fontSize: pxTorem(14),
    lineHeight: pxTorem(18),
    backgroundColor: colors.black,
    borderRadius: 0,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.paper}>© iQi Health PTE LTD</Paper>
      </Grid>
    </Grid>
  );
};

export default Footer;
