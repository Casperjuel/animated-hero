import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <h1>Hva så der!</h1>
        <Footer />
      </div>);
  }
}
