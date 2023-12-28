import './Header.css';
import iconArrowDown from '../../images/icon-arrow-down.svg';
import iconArrowUp from '../../images/icon-arrow-up.svg';
import { useState } from 'react';
import todoicon from '../../images/icon-todo.svg';
import calendar from '../../images/icon-calendar.svg';
import reminder from '../../images/icon-reminders.svg';
import planning from '../../images/icon-planning.svg';


const Header = () => {

    const [arrowState, setArrowState] = useState([false, false]);

    return (
        <div className="header">
            <div className="header-left">
                <h1 className="logo">snap</h1>
                <div className="navigation">
                    <ul>
                        <li 
                            className='drop-down'
                            onClick={() => setArrowState([!arrowState[0], arrowState[1]])}
                            >
                            <a>Features</a>
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
                            <a>Company</a>
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
        </div>
    )
}

export default Header;