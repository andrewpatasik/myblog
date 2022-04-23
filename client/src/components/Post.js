import React, { useEffect } from 'react';
import Quill from 'quill';

function Post({ content }) {
  useEffect(() => {
    const quill = new Quill('#content-box', {
      theme: 'bubble',
      readOnly: true
    })

    quill.setContents(JSON.parse(content.postContent))
  }, []);

  return ( 
    <div className='w-2/5'>
      <h1 className='text-3xl'>{content.postTitle}</h1>
      <div id='content-box'></div>
    </div>
   );
}

export default Post;