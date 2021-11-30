import './App.css';
import logo from './logo.png';

function App() {
  const tokenName = "Rugrats Inu";
  const tokenMotto = "It's Not Fun Without The Rugrats!";
  const projectFeatures = "Stuff";
  const tokenomics = "A lot of Info on tokenomics";
  const roadmap = "The project's roadmap";

  return (
    <div className="App">

      <div className="Intro">
        <div id="intro-div"> 
          <img id="Logo" src={ logo } alt="Logo" />       
          <h1>{ tokenName }</h1>
          <h2>{ tokenMotto }</h2>
        </div>

        {/* <img id="Logo" src={ logo } alt="Logo" /> */}

        <div id="button-div">
          <button className="Button">BUY $RUG</button>
          <button className="Button">OUR TELEGRAM</button>
          <button className="Button">OUR TWITTER</button>
        </div>
        
      </div>

      <div className="Features">
        <h3>Project Features</h3>
        <p>{ projectFeatures }</p>
        <h3>Tokenomics</h3>
        <p>{ tokenomics }</p>
      </div>

      <div className="Outro">
        <h3>Roadmap</h3>
        <p>{ roadmap }</p>
      </div>

    </div>
  );
}

export default App;
