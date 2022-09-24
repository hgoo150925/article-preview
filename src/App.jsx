import { useState } from 'react';
import { Share } from './Share';

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <main>
      <div class="image-container"></div>
      <section>
        <div class="copy">
          <h2>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </div>
        <footer>
          <div class="author">
            <img
              src="./assets/images/drawers.jpg"
              alt="michelle appleton avatar"
            />
            <div class="about">
              <h3>Michelle Appleton</h3>
              <time datetime="2020-06-07">28 Jun 2020</time>
            </div>
          </div>
          <div onClick={() => setIsActive(!isActive)} class="arrow">
            <img src="/src/images/icon-share.svg" alt="share" />
          </div>
          {isActive && <Share />}
        </footer>
      </section>
    </main>
  );
}

export default App;
