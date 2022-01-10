import React from 'react';
import './Navbar.css';

export default function NavBar() {
    return (
        <nav className='navbar'>
            
                <div className='me'>
                    <a href='./'>Ricky Wang</a>
                </div>
                <div className='layout'>
                <ul className='menu'>
                    <li><a className='item1' href='./'>Home</a></li>
                    <li><a className='item2' href='#about'>About</a></li>
                    <li><a className='item3' href='#skills'>Skills</a> </li>
                    <li><a className='item4' href='#projects'>Projects</a> </li>
                    <li><a className='item5' href='#email'>Email</a> </li>
                </ul>
                </div>
                <div className='menu-list'>
                    <i className = 'fas fa-bars'></i>
                </div>
            
        </nav>
    )
}
