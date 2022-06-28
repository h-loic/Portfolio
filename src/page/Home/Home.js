import React from 'react'
import './home.scss'
import Header from '../../components/Header/Header'

import ReactPageScroller from 'react-page-scroller';
import Projects from '../../components/Home/Projects/Projects'
import Welcome from '../../components/Home/Welcome/Welcome'

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
        <Header/>
        <React.Fragment>
          <ReactPageScroller
            pageOnChange={this.handlePageChange}
            onBeforePageScroll={this.handleBeforePageChange}
            customPageNumber={this.state.currentPage}
          >
            <Welcome />
            <Projects />
          </ReactPageScroller>
        </React.Fragment>
      </div>
    );
  }
}