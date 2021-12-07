import './Header.css';
import HeaderLogo from './HeaderLogo.png';

function Header() {

    return (
        <div className="Header" id="Header">

            <img id='HeaderLogo' src={ HeaderLogo } alt="HeaderLogo" />
            <div id="links" className="links">
                <a class="nav-links" href="#home">Home</a>
                <a class="nav-links" href="#tokenomics">Tokenomics</a>
                <a class="nav-links" href="#roadmap">Roadmap</a>
                <a class="nav-links" href="#token-info">Token Info</a>
            </div>

        </div>
    )

}


export default Header;