import React, {
Fragment,
Component
  } from 'react';
// import {Link} from "react-router-dom"; use after Router is add


class Sidebar extends Component {  
    render(){
      return <Fragment>
        {/* <h1>wyszukaj posiłek</h1><Link></link>
        <h1>wyszukaj trening</h1><Link></link>
        <h1>zaplanuj trening ze znajomym</h1><link></link> */}
        {/* replace to Link after routing is added */}
        <p><a href="/search">ZAPLANUJ DIETĘ</a></p>
        <p><a href="/search">WYSZUKAJ TRENING</a></p>
        <p><a href="/search">ZAPLANUJ TRENING ZE ZNAJOMYM</a></p>
        <button type = "logout" >WYLOGUJ</button>
        
        </Fragment>
        
        
        
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

