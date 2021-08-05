import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
});

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5">Ned-ler</Typography>
        </div>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  );
}

export default Layout;
