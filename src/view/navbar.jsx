import React, { Component } from "react";
import Logo  from "../image/logo.png";

class Navbar extends Component{

    render(){
        return(
            <div>
                <nav class = "navbarone">
                    <div class="navigation container">
                
                        <div class="logo_container">
                            <img src={Logo} height="100px"alt="logo" />
                        </div>
                        <div class="bar_icon">
                            <a href="#"><i class="fa fa-bars"></i></a>
                        </div>
                    </div>
                </nav>
            </div>
             
    );
    };
};

export default Navbar;