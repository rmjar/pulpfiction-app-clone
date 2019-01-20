import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import classNames from 'classnames';
import './Sidebar.css'


class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: true,
    }
  }

  handleClick = (event) => {
    event.stopPropagation()
    this.setState({
      hidden: !this.state.hidden,
    })
    console.log(this.state)
  }

  handleClickContent = (event) => {
    event.stopPropagation();
  }

  render() {
    return (
      <div className={classNames('sidebar', { sidebar__shown: !this.state.hidden })} onClick={this.handleClick}>
        <div className="sidebar__title" onClick={this.handleClick}>Navigation</div>
        <div className="sidebar__content" onClick={this.handleClickContent}>
          <p><NavLink to="/favourites">FAVOURITES</NavLink></p>
          <p><Link to="/search">ZAPLANUJ DIETĘ</Link></p>
          <p><Link to="/search">WYSZUKAJ TRENING</Link></p>
          <p><Link to="/search">ZAPLANUJ TRENING ZE ZNAJOMYM</Link></p>
        </div>
      </div>
    )

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

