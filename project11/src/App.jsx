import React from 'react';
import ImageViewer from './imageViwer';

function App() {
  const images = [
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHN1bnNldHxlbnwwfHx8fDE2MzE2NjI3NjE&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1519608487953-e999c86e7455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGZvcmVzdHxlbnwwfHx8fDE2MzE2NjI3OTY&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1476610182048-b716b8518aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fGxha2V8ZW58MHx8fHwxNjMxNjYyODQ2&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYWNofGVufDB8fHx8MTYzMTY2Mjg1NQ&ixlib=rb-1.2.1&q=80&w=1080',
  ];

  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Images</h1>
      <ImageViewer images={images} />
    </div>
  );
}

export default App;
