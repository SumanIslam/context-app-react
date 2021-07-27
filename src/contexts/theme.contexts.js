import React, { createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  state = {
    isDarkMode: true,
  }
  toggleTheme = () => {
    this.setState({isDarkMode: !this.state.isDarkMode})
  }
  render() {
    return(
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}