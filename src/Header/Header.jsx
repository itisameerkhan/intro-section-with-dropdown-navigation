import './Header.css';
import iconArrowDown from '../../images/icon-arrow-down.svg';
import iconArrowUp from '../../images/icon-arrow-up.svg';
import { useState } from 'react';
import todoicon from '../../images/icon-todo.svg';
import calendar from '../../images/icon-calendar.svg';
import reminder from '../../images/icon-reminders.svg';
import planning from '../../images/icon-planning.svg';
import burgerClose from '../../images/icon-close-menu.svg';
import burgerMenu from '../../images/icon-menu.svg';


const Header = () => {

    const [arrowState, setArrowState] = useState([false, false]);
    const [burgerState, setBurgerState] = useState(false);

    return (
        <div className='header-outer'>
            <div 
                className="header-overlay" 
                style={{display: burgerState ? 'block' : 'none'}}>
            </div>
            <div className="header">
                <div className="header-left">
                    <h1 className="logo">snap</h1>
                    <div className="navigation">
                        <ul>
                            <li 
                                className='drop-down'
                                onClick={() => setArrowState([!arrowState[0], arrowState[1]])}
                                >
                                <a style={{color: arrowState[0] ? 'black' : 'gray'}}>Features</a>
                                <img 
                                    src={arrowState[0] == true ? iconArrowUp : iconArrowDown} 
                                    className='icon-arrow'
                                />
                                <div 
                                    className="drop-down-content"
                                    style={{display: arrowState[0] ? 'flex' : 'none'}}
                                >
                                    <li>
                                        <img src={todoicon} alt="" />
                                        <p>Todo List</p>
                                    </li>
                                    <li>
                                        <img src={calendar} alt="" />
                                        <p>Calendar</p>
                                    </li>
                                    <li>
                                        <img src={reminder} alt="" />
                                        <p>Reminders</p>
                                    </li>
                                    <li>
                                        <img src={planning} alt="" />
                                        <p>Planning</p>
                                    </li>
                                </div>
                            </li>
                            <li 
                                className='drop-down'
                                onClick={() => setArrowState([arrowState[0], !arrowState[1]])}
                            >
                                <a style={{color: arrowState[1] ? 'black' : 'gray'}}>Company</a>
                                <img 
                                    src={arrowState[1] ? iconArrowUp : iconArrowDown} 
                                    className='icon-arrow'
                                />
                                <div 
                                    className="drop-down-content-2"
                                    style={{display: arrowState[1] ? 'flex' : 'none'}}
                                >
                                    <li>History</li>
                                    <li>OurTeam</li>
                                    <li>Blog</li>
                                </div>
                            </li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="header-right">
                    <p className='login'>Login</p>
                    <p className='register'>Register</p>
                </div>
                <div className="header-mobile">
                    <img 
                        className='burger-menu' 
                        src={burgerState ? burgerClose : burgerMenu} 
                        onClick={() => setBurgerState(!burgerState)} />
                    <div 
                        className="header-mobile-content"
                        style={{
                            display: burgerState ? 'block' : 'none',
                            right: burgerState ? '-30px' : '-300px'
                            }}>
                        <ul>
                            <li 
                                className='drop-down'
                                onClick={() => setArrowState([!arrowState[0], arrowState[1]])}
                                >
                                <a style={{color: arrowState[0] ? 'black' : 'gray'}}>Features</a>
                                <img 
                                    src={arrowState[0] == true ? iconArrowUp : iconArrowDown} 
                                    className='icon-arrow'
                                />
                            </li>
                                <div 
                                    className="drop-down-content-3"
                                    style={{
                                        visibility: arrowState[0] ? 'visible' : 'hidden',
                                        maxHeight: arrowState[0] ? '200px' : '0',
                                        padding: arrowState[0] ? '20px 0' : '0'
                                     }}>
                                    <li>
                                        <img src={todoicon} alt="" />
                                        <p>Todo List</p>
                                    </li>
                                    <li>
                                        <img src={calendar} alt="" />
                                        <p>Calendar</p>
                                    </li>
                                    <li>
                                        <img src={reminder} alt="" />
                                        <p>Reminders</p>
                                    </li>
                                    <li>
                                        <img src={planning} alt="" />
                                        <p>Planning</p>
                                    </li>
                                </div>
                                <li 
                                className='drop-down'
                                onClick={() => setArrowState([arrowState[0], !arrowState[1]])}
                            >
                                <a style={{color: arrowState[1] ? 'black' : 'gray'}}>Company</a>
                                <img 
                                    src={arrowState[1] ? iconArrowUp : iconArrowDown} 
                                    className='icon-arrow'
                                />
                                </li>
                                <div 
                                    className="drop-down-content-4"
                                    style={{
                                        visibility: arrowState[1] ? 'visible' : 'hidden',
                                        maxHeight: arrowState[1] ? '200px' : '0',
                                        padding: arrowState[1] ? '20px 0' : '0'
                                     }}>
                                    <li>History</li>
                                    <li>OurTeam</li>
                                    <li>Blog</li>
                                </div>
                            <li className='drop-down'><a href="">Careers</a></li>
                            <li className='drop-down'><a href="">About</a></li>
                        </ul>
                        <div className="btn-container">
                            <li className='login'>Login</li>
                            <li className="register">Register</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;