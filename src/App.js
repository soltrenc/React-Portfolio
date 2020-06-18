import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/sidebar'
import Introduction from './components/Intro/intro'
import About from './components/About/about'
import Timeline from './components/Timeline/timeline'
import Projects from './components/Projects/projects'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Timeline></Timeline>
            <Projects> </Projects>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
