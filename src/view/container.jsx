import React, { Component } from "react";
import Hero from '../image/hero.jpeg';
import Indian from '../image/indian.jpeg';
import Fresh from '../image/fresh.jpeg';
import Discount from '../image/discount.png';
import Delivery from '../image/delivery.png';
import Sandwitch from '../image/sandwitch.jpeg';
import Lunch from '../image/lunch.jpeg';
import Snack from '../image/snack.jpeg';
import Thali from '../image/thali.jpeg';
import Burger from '../image/burger.jpeg';
import Dinner from '../image/dinner.jpeg';

class Container extends Component{

    render(){
        return(
            <div>
                {/* <!-- Hero Section --> */}
    <div class="container">
      <div class="hero">
        <div class="hero_image">
          <img src={Hero} alt="hero image" />
        </div>
        <div class="hero_content">
          <div class="tag">50% Off on All Products</div>
          <h1>Enjoy Your Delicious Food</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, iste corporis tempore necessitatibus inventore ex?
          </p>
          <button class="explore_btn">Explore Now</button>
        </div>
      </div>
      <section class="features">
        <div class="feature">
          <img src={Discount} alt="logo" />
          <div class="feature_content">
            <h3>Discount Voucher</h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </div>
        </div>
        <div class="feature">
          <img src={Fresh} alt="logo" />
          <div class="feature_content">
            <h3>Fresh Healthy Food</h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </div>
        </div>
        <div class="feature">
          <img src={Delivery} alt="logo" />
          <div class="feature_content">
            <h3>Fast Home Delivery</h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </div>
        </div>
      </section>
      <div class="divider"></div>
      <div class="menu">
        <div class="tag">Our Menu</div>
        <h2>Explore Our Menu</h2>

        <div class="grid">
          <div class="item1">
            <img
              class="grid-image"
              src={Indian}
              alt="image 1"
            />
          </div>
          <div class="item2">
            <img
              class="grid-image"
              src={Lunch}
              alt="image 2"
            />
          </div>
          <div class="item3">
            <img
              class="grid-image"
              src={Sandwitch}
              alt="image 3"
            />
          </div>
          <div class="item4">
            <img
              class="grid-image"
              src={Thali}
              alt="image 4"
            />
          </div>
          <div class="item5">
            <img
              class="grid-image"
              src={Dinner}
              alt="image 5"
            />
          </div>
          <div class="item6">
            <img
              class="grid-image"
              src={Snack}
              alt="image 6"
            />
          </div>
          <div class="item7">
            <img
              class="grid-image"
              src={Burger}
              alt="image 7"
            />
          </div>
        </div>
      </div>
    </div>
            </div>
    );
    };
};

export default Container;