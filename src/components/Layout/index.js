import React from 'react';
import Helmet from 'react-helmet';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Navbar from '../Navbar';
import '../all.sass';

import PageWrapper from './PageWrapper';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const TemplateWrapper = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <PageWrapper>
      <Helmet>
        <title>Home | Gatsby + Netlify CMS</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
    </PageWrapper>
  </MuiThemeProvider>
);

export default TemplateWrapper;
