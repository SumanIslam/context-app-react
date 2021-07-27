import React, { createContext } from 'react'

export const LanguageContext = createContext();

export class LanguageProvider extends React.Component {
  state = {
    language: 'french',
  }
  changeLanguage = (e) => {
    e.preventDefault();

    this.setState({language: e.target.value})
  }
  render() {
    return(
      <LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLanguage}}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
};

export const WithLanguageContext = Component => props => {
  return (
    <LanguageContext.Consumer>
      {value => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
  )
}