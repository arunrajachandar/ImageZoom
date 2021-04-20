
import React from 'react';
import './App.css';

function App() {

  const imageZoom = () => {
    var mainContainer = document.getElementById('picture');
    let w1 = mainContainer.offsetWidth;
    let h1 =  mainContainer.offsetWidth;
    var rect = document.getElementById("rect");
    var zoom = document.getElementById("zoom");
    function rectEnable(e) {
      rect.classList.add("rect-active")
  }

  function rectDisable(e) {
      rect.classList.remove("rect-active")
  }


  mainContainer.addEventListener('mousemove', function(e) {
      move(e);
      rectEnable(e);
      zoom.style.display = "block";
  })

  mainContainer.addEventListener('mouseout', function(e) {
      rectDisable(e)
      zoom.style.display = "none";
  })
  console.log(mainContainer.src)
  


    zoom.style.backgroundImage = "url('https://i1.adis.ws/i/canon/4147C025_EOS_R5_01/4147c025_eos_r5_01?w=910&bg=white&fmt=jpg')";

    

    let w2 = rect.offsetWidth;
    let h2 = rect.offsetHeight;

    let ratio = 2;

    zoom.style.backgroundSize = w1*ratio +'px'+ h1*ratio +'px';
    zoom.style.backgroundRepeat = 'no-repeat';

    zoom.style.width = w2 * ratio +'px';
    zoom.style.height = h2 * ratio +'px';


    w2 = w2/2;
    h2 = h2/2;


    
    
    let x, y;

    function move(e) {
        let cx = 0;
        let cy = 0;

        x = e.offsetX;
        y = e.offsetY;    

        if( x < w2) {
            x = w2;
        }

        if(x > w1 - w2) {
            x = w1 - w2;
        }

        if (y < h2) {
            y = h2;
        }

        if (y > h1 - h2) {
            y = h1 - h2
        }
        cx = (x - w2) * ratio;
        cy = (y - h2) * ratio;

        rect.style.left = x + 'px';
        rect.style.top = y + 'px';

        zoom.style.backgroundPosition = '-'+ cx + 'px -' + cy + 'px';
    }


  }

  React.useEffect(() => {
    imageZoom()
    return () => {
      document.getElementById('picture').removeEventListener('mousemove', function(e) {})
      document.getElementById('picture').removeEventListener('mouseout', function(e) {})

    }
  }, [])

  return (
    <div class="container">
    <div class="picture" id="picture">
        <div class="rect" id="rect"></div>
        <img id="pic" src="https://i1.adis.ws/i/canon/4147C025_EOS_R5_01/4147c025_eos_r5_01?w=455&bg=white&fmt=jpg" />
    </div>
    <div class="zoom" id="zoom"></div>
</div>

  );
}

export default App;
