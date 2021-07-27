import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Navbar from './Navbar';
import PageContent from './PageContent';
import { ThemeProvider } from './contexts/theme.contexts';
import { LanguageProvider } from './contexts/language.context';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <LanguageProvider>
            <Navbar />
            <Form />
          </LanguageProvider>
        </PageContent> 
      </ThemeProvider>
      
    );
  };
};

export default App;
