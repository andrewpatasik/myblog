import React from 'react';
import ContentList from './components/ContentList';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  
  return ( 
    <div className='flex flex-col justify-center items-center'>
      <Header />
      <ContentList />
      <Footer />
    </div>
      
   );
}

export default App;