import React, { Component } from 'react';
import { CssBaseline, FormControl, FormControlLabel, Checkbox, Input, InputLabel, Paper, Typography, MenuItem, Select, Avatar, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles/FormStyles';

class Form extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Sign in</Typography>
          <Select value="English">
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Bangla">Bangla</MenuItem>
            <MenuItem value="Hindi">Hindi</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" fullWidth required>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" name="email" autoFocus autoComplete="off" />
            </FormControl>
            <FormControl margin="normal" fullWidth required>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" name="password" autoFocus autoComplete="off" />
            </FormControl>
            <FormControlLabel control={<Checkbox color="primary" />} label="Remember Me" />
            <Button type="submit" variant="contained" color="primary" fullWidth className={classes.submit}>
              Sign In
            </Button>
          </form>
        </Paper>
      </div>
    )
  }
}
export default withStyles(styles)(Form);
