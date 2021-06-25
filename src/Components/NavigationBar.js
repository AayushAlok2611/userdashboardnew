import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Navigator() {
  return (
    <div className="Navigator">
        <nav>
            <h2>Surveillance system</h2>
            <ul className="nvlink">
              <Link to="/"><li>Home</li></Link>
              <Link to="/webcamupload"><li>Live Capture</li></Link>
              <Link to="/facerecog"><li>Face Recognition</li></Link>
              <Link to="/licenseplaterecog"><li>License Plate</li></Link>
            </ul>

        </nav>
    </div>
  );
}

export default Navigator;
