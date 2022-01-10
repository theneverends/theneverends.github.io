import React from 'react';
import './intro.css';

export default function Intro() {
    return (
        <div className='introduction'>
            <div className="left">
                <div className="left-area">
                    <h2 className='intro'>Hello, my name is </h2>
                    <h1 className='name'>Ricky Wang</h1>
                    <div className="roles">
                        <h1>I'm good at</h1>
                        <div className="role-area">
                            <div className="role">Full Stack Development</div>
                            <div className="role">Web Designing</div>
                            <div className="role">RESTFUL APIs and Web Services</div>
                            <div className="role">Java/J2EE/Spring Boot development</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right">right</div>
        </div>
    )
}
