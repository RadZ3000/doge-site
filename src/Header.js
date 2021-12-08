import './Header.css';
import HeaderLogo from './HeaderLogo.png';

function Header() {

    return (
        <div className="Header" id="Header">

            <img id='HeaderLogo' src={ HeaderLogo } alt="HeaderLogo" />
            <div id="links" className="links">
                <a class="nav-links" href="#Home">Home</a>
                <a class="nav-links" href="#Tokenomics">Tokenomics</a>
                <a class="nav-links" href="#Roadmap">Roadmap</a>
                <a class="nav-links" href="#Info">Token Info</a>
            </div>

        </div>
    )

}


export default Header;