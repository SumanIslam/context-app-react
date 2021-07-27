import React from 'react';
import { LanguageProvider } from './contexts/language.context';
import { ThemeProvider } from './contexts/theme.contexts';
import Form from './Form';
import Navbar from './Navbar';
import PageContent from './PageContent';

function App() {
  return(
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

export default App;
