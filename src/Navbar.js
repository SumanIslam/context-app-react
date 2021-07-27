import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import withStyles from '@material-ui/core/styles/withStyles';
import React, { Component } from 'react';
import Styles from './styles/Navbar.styles';

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span>🇧🇩</span>
            </IconButton>
            <Typography className={classes.title} variant="h6">
              Light
            </Typography>
            <Switch />
            <div className={classes.grow} />
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}


export default withStyles(Styles, { withTheme: true })(Navbar);
