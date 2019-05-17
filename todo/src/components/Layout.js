import React, { memo } from "react";
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";

const Layout = memo(props => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 20, backgroundColor: "#fafafa" }}
  >
    <AppBar color="primary" position="static" style={{ height: 100 }}>
      <Toolbar style={{ height: 64 }}>
        <Typography color="inherit">TODO with HOOKS</Typography>
      </Toolbar>
    </AppBar>
    {props.children}
  </Paper>
));

export default Layout;