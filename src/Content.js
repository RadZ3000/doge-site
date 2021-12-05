import "./Content.css";
import ContentLogo from './ContentLogo.png'
import featuresConst from './content_file/features.js';
import tokenomicsConst from './content_file/tokenomics.js';
import roadmapConst from './content_file/roadmap.js';
import tokenInfoConst from './content_file/tokenInfo.js';

function Content() {
  const tokenName = "Rugrats Inu";
  const tokenMotto = "Crypto's No Fun Without The Rugrats!";

  return (
    <div className="App">

      <div className="Intro" id='home'>
        <div id="intro-div">
          <h1>{tokenName}</h1>
          <img id="ContentLogo" src={ContentLogo} alt="ContentLogo" />
          <h2>{tokenMotto}</h2>
        </div>

        <div id="button-div">
          <button className="Button" id="button-1">BUY $RUG</button>
          <button className="Button" id="button-2">OUR TELEGRAM</button>
          <button className="Button" id="button-3">OUR TWITTER</button>
        </div>

        <div id="credits">
          <h4>Powered by Binance SmartChain</h4>
        </div>

      </div>

      <div className="Features">
        <h3>Project Features</h3>
        <p>{featuresConst}</p>
        <h3 id='tokenomics'>Tokenomics</h3>
        <p>{tokenomicsConst}</p>
      </div>

      <div className="Roadmap">
        <h3 id='roadmap'>Roadmap</h3>
        <p>{roadmapConst}</p>
      </div>

      <div className="Info">
        <h3 id="token-info">Token Info</h3>
        <p>{tokenInfoConst}</p>
      </div>

    </div>

  )
}

export default Content;