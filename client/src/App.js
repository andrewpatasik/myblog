import React, { useState } from 'react';
import ContentList from './components/ContentList';
import Footer from './components/Footer';
import Header from './components/Header';
import Route from './components/Route';

function App() {
  const [postPath, setPostPath] = useState('');
  
  return ( 
    <div className='flex flex-col justify-center items-center'>
      <Header />
      <Route path={"/"}>
      <ContentList setPostPath={setPostPath} />
      </Route>
      <Route path={postPath}>
        <h1>Post</h1>
      </Route>
      <Footer />
    </div>
      
   );
}

export default App;