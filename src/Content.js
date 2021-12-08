import "./Content.css";
import IntroLogo from './IntroLogo.png'
import FeaturesLogo from './FeaturesLogo.png'
import FairLaunchLogo from './FairLaunchLogo.png'
import LiquidityLockedLogo from './LiquidityLockedLogo.png'
import AntiSniperLogo from './AntiSniperLogo.png'
import AntiWhaleLogo from './AntiWhaleLogo.png'
import featuresConst from './content_file/features.js';
// import tokenomicsConst from './content_file/tokenomics.js';
// import roadmapConst from './content_file/roadmap.js';
// import tokenInfoConst from './content_file/tokenInfo.js';

function Content() {
  const tokenName = "DOGE.";
  const tokenMotto = "DOGE holders are not only rewarded through static rewards, but also through true automatic burns every trade from within the liquidity pool.";

  return (
    <div className="App">

      <div className="Intro" id='Home'>
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
        <div id="redis-buy" className="bar">2%</div>
        <p className="BarP">8% Dev + Marketing</p>
        <div id="devmarket-buy" className="bar">8%</div>
        <p></p>
        <h3>12% Sell Tax</h3>
        <p className="BarP">2% Redistribution</p>
        <div id="redis-sell" className="bar">2%</div>
        <p className="BarP">10% Dev + Marketing</p>
        <div id="devmarket-sell" className="bar">10%</div>
      </div>

      <div id="Roadmap">
        <h2 id='roadmap'>ROADMAP</h2>
        {/* <p>{roadmapConst}</p> */}

        <div id="phase-one" className="roadmap-div">
          <h3 className="roadmap-h3">Phase 1 (Q4 2021)</h3>
          <ul className="roadmap-list">
            <li>Website Reveal.</li>
            <li>Fair Launch.</li>
            <li>DEX Listing.</li>
            <li>$100K Market Cap.</li>
            <li>100+ Community Members.</li>
          </ul>
        </div>

        <div id="phase-two" className="roadmap-div">
          <h3 className="roadmap-h3">Phase 2 (Q1 2022)</h3>
          <ul className="roadmap-list">
            <li>CG Listing.</li>
            <li>Marketing Mania.</li>
            <li>$500K Market Cap.</li>
            <li>Meme + Artwork Competition.</li>
            <li>500+ Community Members.</li>
          </ul>
        </div>

        <div id="phase-three" className="roadmap-div">
          <h3 className="roadmap-h3">Phase 3 (Q2 2022)</h3>
          <ul className="roadmap-list">
            <li>CMC Listing.</li>
            <li>Major Influence Brand Boost.</li>
            <li>$1M+ Market Cap.</li>
            <li>1K+ Community Members.</li>
            <li>dApp Rollout (DEX, Launchpad, WDOGE Faucet).</li>
          </ul>
        </div>

      </div>

      <div id="Info">
        <h2 id="info-h2">TOKEN INFO</h2>
        {/* <p>{tokenInfoConst}</p> */}
        
        <div className="info-div" id="info-one">
          <img src={FairLaunchLogo} alt="FairLaunchLogo" id="FairLaunchLogo" />
          <h3>Fair Launch</h3>
          <p>No Presales, No Preferential tokens.</p>
        </div>
        <div className="info-div" id="info-two">
          <img src={LiquidityLockedLogo} alt="LiquidityLockedLogo" id="LiquidityLockedLogo" />
          <h3>Liquidity Locked</h3>
          <p>LP Tokens locked on dxSale (1 month)</p>
        </div>
        <div className="info-div" id="info-three">
          <img src={AntiSniperLogo} alt="AntiSniperLogo" id="AntiSniperLogo" />
          <h3>Anti-Sniper Bot</h3>
          <p>Sniper bots get REKT and cannot dump</p>
        </div>
        <div className="info-div" id="info-four">
          <img src={AntiWhaleLogo} alt="AntiWhaleLogo" id="AntiWhaleLogo" />
          <h3>Anti-Whale Protocol</h3>
          <p>Max transaction, max wallet limit set</p>
        </div>
      </div>

    </div>

  )
}

export default Content;