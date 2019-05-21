import React, { Component } from 'react';
import Header from './components/header/header';
import AboutMe from './components/aboutme/aboutme';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import ContactMe from './components/contactme/contactme';
import Footer from './components/footer/footer';
import portData from './portdata';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header portData={portData} />
        <AboutMe portData={portData} />
        <Resume portData={portData} />
        <Portfolio portData={portData} />
        {/* <ContactMe portData={portData} /> */}
        <Footer portData={portData} />
      </div>
    );
  }
}
export default App;
