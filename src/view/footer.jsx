import React, { Component } from "react";
import Footlogo from '../image/footlogo.png';
class Footer extends Component{

    render(){
        return(
            <div>
                <footer>
      <div class="footer_container container">
        <div class="footer_logo">
          <img src={Footlogo} alt="logo" />
        </div>
        <div class="link_lists">
          <h3>Main Links</h3>
          <ul>
            <li>Order Tracking</li>
            <li>New Order</li>
            <li>Contact Us</li>
            <li>News & Blogs</li>
          </ul>
        </div>
        <div class="link_lists">
          <h3>Support</h3>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditons</li>
          </ul>
        </div>
        <div class="news_letter">
          <h3>Support</h3>
          <input type="email" placeholder="Enter your Email..." />
          <h3>Follow Us</h3>
          <div class="icon_container">
            <div class="icon">
              <i class="fa fa-facebook"></i>
            </div>
            <div class="icon">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </div>
            <div class="icon">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
            <div class="icon">
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
            </div>
    );
    };
};

export default Footer;