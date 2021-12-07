import "./Content.css";
import ContentLogo from './ContentLogo.png'
import featuresConst from './content_file/features.js';
import tokenomicsConst from './content_file/tokenomics.js';
import roadmapConst from './content_file/roadmap.js';
import tokenInfoConst from './content_file/tokenInfo.js';

function Content() {
  const tokenName = "DOGE";
  const tokenMotto = "DOGE holders are not only rewarded through static rewards, but also through true automatic burns every trade from within the liquidity pool.";

  return (
    <div className="App">

      <div className="Intro" id='home'>
        <div id="token-name">
          <h1>{tokenName}</h1>
        </div>
        <div id="token-motto">
          <p>{tokenMotto}</p>
        </div>
        <div id="content-logo">
          <img id="ContentLogo" src={ContentLogo} alt="ContentLogo" />
        </div>
      </div>

      <div id="button-div">
        <button className="Button" id="button-1">BUY $RUG</button>
        <button className="Button" id="button-2">OUR TELEGRAM</button>
        <button className="Button" id="button-3">OUR TWITTER</button>
      </div>

      <div id="credits">
        <h4>Powered by Binance SmartChain</h4>
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