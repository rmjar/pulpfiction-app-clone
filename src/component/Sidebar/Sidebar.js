import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Sidebar.css'


class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__title">Navigation</div>
        <div className="sidebar__content">
          <p><Link to="/search">ZAPLANUJ DIETĘ</Link></p>
          <p><Link to="/search">WYSZUKAJ TRENING</Link></p>
          <p><Link to="/search">ZAPLANUJ TRENING ZE ZNAJOMYM</Link></p>
        </div>
      </div>)

  }

}

export default Sidebar;

// $primaryColor:white;
// $fontColor:#565b60;
// $accentColor:#ff7500;
// $backgroudColor:white;
// $borderColor:black;
// $backgroundSecondColor:#b1b1ac;
// $borderColorNav: #565b60;
// $backgroundfooter: #ff7500;
// $backgroundfooterHover:#565b60;



// $backGroundColor: #565b60;
// $colorTeamFont: #565b60;
// $accentSecondColor: #0C6BA1;

