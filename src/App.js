import React from 'react';

import img2 from './imageInSrc.jpg';
import vid from './myVideo.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 10px black"  , maxWidth:'100vw'}} >

<h1 className="title red">Your name here</h1>

<br />

<img src="./imageInPublic.jpg" alt="img" />

<br />

<img src={img2} alt="img2" />
<video width="320" height="240" controls>

 <source src={vid} type="video/mp4" />
</video>




    </div> </div>
  );
}

export default App;
