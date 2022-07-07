import React from 'react'
import './home.scss'
import Header from '../../components/Header/Header'

import ReactPageScroller from 'react-page-scroller';
import Projects from '../../components/Home/Projects/Projects'
import Welcome from '../../components/Home/Welcome/Welcome'
import Skills from '../../components/Home/Skills/Skills';
import Contact from '../../components/Home/Contact/Contact';
import About from '../../components/Home/About/About';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  handleBeforePageChange = number => {
    console.log(number);
  };

  render() {

    return (
      <div className='home-container'>
        <Header goToPage={this.handlePageChange}/>
        <React.Fragment>
          <ReactPageScroller
            pageOnChange={this.handlePageChange}
            onBeforePageScroll={this.handleBeforePageChange}
            customPageNumber={this.state.currentPage}
            animationTimer={700}
            renderAllPagesOnFirstRender={false}
          >
            <Welcome/>
            <Skills/>
            <Projects/>
            <About/>
            <Contact/>
          </ReactPageScroller>
        </React.Fragment>
      </div>
    );
  }
}