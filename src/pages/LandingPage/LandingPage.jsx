import React from 'react';
import {Link} from 'react-router-dom';
import '../LandingPage/LandingPage.css';

const LandingPage = (props) => {
    let landing = props.user ?
        <div>
            <Link to="/dank-diary" className="Link landing-link">Welcome! Check out your Dank Diary!</Link>
        </div>
        :
        <div>
            <Link to="/login" className="Link landing-link">Welcome, Log In</Link>
        </div>;

    return (
        <div className="landing">
            {landing}
        </div>
    )
}

export default LandingPage;