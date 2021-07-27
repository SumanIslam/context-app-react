import React, { Component } from 'react';
import { FormControl, FormControlLabel, Checkbox, Input, InputLabel, Paper, Typography, MenuItem, Select, Avatar, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles/FormStyles';
import { LanguageContext } from './contexts/language.context';

const words = {
  english: {
    signIn: "Sign In",
    email: 'Email',
    password: 'Password',
    remember: 'Remember Me'
  },
  french: {
    signIn: "Se connecter",
    email: 'Adresse Èlectronique',
    password: 'Mot de passe',
    remember: 'Souviens-toi De Moi'
  },
  spanish: {
    signIn: "Registrarse",
    email: 'Correo Electrónico',
    password: 'Contraseña',
    remember: 'Recuérdame'
  }
}


class Form extends Component {
  static contextType = LanguageContext;

  render() {
    const {classes} = this.props;
    const {language, changeLanguage} = this.context;
    const {email, signIn, password, remember} = words[language];
    return (
      <div className={classes.main}>
        <Paper elevation={7} className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">{signIn}</Typography>
          <Select value={language} onChange={changeLanguage}>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="french">French</MenuItem>
            <MenuItem value="spanish">Spanish</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" fullWidth required>
              <InputLabel htmlFor="email">{email}</InputLabel>
              <Input id="email" name="email" autoFocus autoComplete="off" />
            </FormControl>
            <FormControl margin="normal" fullWidth required>
              <InputLabel htmlFor="password">{password}</InputLabel>
              <Input id="password" name="password" autoFocus autoComplete="off" />
            </FormControl>
            <FormControlLabel control={<Checkbox color="primary" />} label={remember} />
            <Button type="submit" variant="contained" color="primary" fullWidth className={classes.submit}>
              {signIn}
            </Button>
          </form>
        </Paper>
      </div>
    )
  }
}
export default withStyles(styles)(Form);
