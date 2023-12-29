import './Main.css';
import databiz from '../../images/client-databiz.svg';
import audiophile from '../../images/client-audiophile.svg';
import meet from '../../images/client-meet.svg';
import maker from '../../images/client-maker.svg';
import heroDesktop from '../../images/image-hero-desktop.png';
import heroMobile from '../../images/image-hero-mobile.png';
import { useEffect, useState } from 'react';

const Main = () => {

    const [windowWidth, setWindowWith] = useState(false);

    useEffect(() => {
        const handleResize = () => { 
            if(window.innerWidth < 901) setWindowWith(true);
            else setWindowWith(false);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])
    return (
        <div className="main">
            <div className="main-left">
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button>Learn more</button>
                <div className="logo-div">
                    <img src={databiz} alt="" />
                    <img src={audiophile} alt="" />
                    <img src={meet} alt="" />
                    <img src={maker} alt="" />
                </div>
            </div>
            <div className="main-right">
                <img 
                    src={windowWidth ? heroMobile : heroDesktop} 
                    className='hero-img' />
            </div>
        </div>
    )
}

export default Main;