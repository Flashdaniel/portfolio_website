import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container, SkipToContentLink, MainContent } from './LayoutStyles';

export const Layout = ({ children }) => {
  return (
    <Container>
      <SkipToContentLink href="#main-content">
        Skip to main content
      </SkipToContentLink>
      <Header />
      <MainContent id="main-content" tabIndex="-1">
        {children}
      </MainContent>
      <Footer />
    </Container>
  );
};
