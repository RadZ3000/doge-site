import "./Content.css";
import IntroLogo from './IntroLogo.png'
import FeaturesLogo from './FeaturesLogo.png'
import featuresConst from './content_file/features.js';
// import tokenomicsConst from './content_file/tokenomics.js';
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
        <div id="intro-logo">
          <img id="IntroLogo" src={IntroLogo} alt="IntroLogo" />
        </div>
      </div>

      <div id="button-div">
        <button className="Button" id="button-1">BUY $DOGE</button>
        <button className="Button" id="button-2" ><i class="fa fa-telegram" id="telegram"></i>OUR TELEGRAM</button>
        <button className="Button" id="button-3">OUR TWITTER</button>
      </div>

      <div id="Features">
        <div id="features-logo">
          <img id="FeaturesLogo" src={FeaturesLogo} alt="FeaturesLogo" />
        </div>
        <h2>PROJECT FEATURES</h2>
        <p>{featuresConst}</p>
      </div>

      <div id="Tokenomics">
        <h2 id='tokenomics'>TOKENOMICS</h2>
        {/* <p>{tokenomicsConst}</p> */}
        <h3>10% Buy Tax</h3>
        <p className="BarP">2% Redistribution</p>
        <div id="redis" className="bar">2%</div>
        <p className="BarP">8% Dev + Marketing</p>
        <div id="redis" className="bar">8%</div>
        <p></p>
        <h3>12% Sell Tax</h3>
        <p className="BarP">2% Redistribution</p>
        <div id="redis" className="bar">2%</div>
        <p className="BarP">10% Dev + Marketing</p>
        <div id="redis" className="bar">10%</div>
      </div>

      <div id="Roadmap">
        <h2 id='roadmap'>ROADMAP</h2>
        <p>{roadmapConst}</p>
      </div>

      <div id="Info">
        <h2 id="token-info">TOKEN INFO</h2>
        <p>{tokenInfoConst}</p>
      </div>

    </div>

  )
}

export default Content;