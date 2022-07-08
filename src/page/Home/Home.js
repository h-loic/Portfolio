import React,{ useState, useEffect } from 'react'
import './home.scss'

import Header from '../../components/Header/Header'
import ReactPageScroller from 'react-page-scroller';
import Projects from '../../components/Home/Projects/Projects'
import Welcome from '../../components/Home/Welcome/Welcome'
import Skills from '../../components/Home/Skills/Skills';
import Contact from '../../components/Home/Contact/Contact';
import About from '../../components/Home/About/About';
import Presentation from '../../components/Home/Presentation/Presentation';
import { useLanguage } from '../../context/languageContext';

export default function Home() {

  const [currentPage, setCurrentPage] = useState(null);
  const [isSmallScreen,setIsSmallScreen] = useState(false)

  const { dictionary } = useLanguage();

  useEffect(() => {
    if(window.innerWidth < 800){
      setIsSmallScreen(true);
    }
  }, [])

  const handlePageChange = number => {
    setCurrentPage(number)
  };

  return (
    <div className='home-container'>
      <Header goToPage={handlePageChange}/>
      <React.Fragment>
        <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={currentPage}
          animationTimer={700}
          renderAllPagesOnFirstRender={false}
        >
          <Welcome isSmallScreen={isSmallScreen} dictionary={dictionary} />
          {isSmallScreen ?
          <Presentation dictionary={dictionary}/>
          :
          null
          }
          <Skills dictionary={dictionary}/>
          <Projects dictionary={dictionary}/>
          <About dictionary={dictionary}/>
          <Contact dictionary={dictionary}/>
        </ReactPageScroller>
      </React.Fragment>
    </div>
  );
}