import React from 'react';
import './About.css';

import Award from '../../img/award.png'

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src="https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <div className="a-title">About Me</div>

          <p className="a-sub">
          Hello, I'm Vatsal, a passionate web developer with over 2 years of experience in creating dynamic and responsive websites. My journey in web development started with a simple curiosity to learn how websites are built and has since evolved into a full-fledged career.
          </p>

          <p className="a-desc">
          My skills and expertise lie in HTML, CSS, JavaScript, jQuery, and ReactJS. I have also worked with various content management systems such as NextJS and have experience with front-end frameworks like Bootstrap and Foundation.
        </p>

        <div className="a-award">
          <img src={Award} className='a-award-img' alt="error-Award" />
          <div className="a-award-texts">
          <h4 className="a-award-title">InHackathon at Manav Rachna International School 2022</h4>
            <p className="a-award-desc">
            Won the Anubhuti 2022 by developing a OCR Engine. This experience enhanced my tecnical skills and provided me with the opportunity to work in a team and deliver under pressure.
            </p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default About
