import React, { useEffect, useState } from "react";

import "./homepage.css";

import html from "../../Components/HomeImages/html.png";
import css from "../../Components/HomeImages/css.png";
import js from "../../Components/HomeImages/js.png";
import blender from "../../Components/HomeImages/blender.png";
import git from "../../Components/HomeImages/git.png";
import react from "../../Components/HomeImages/react.png";
import redux from "../../Components/HomeImages/redux.png";

import { TechStacks } from "../../Components/Data/techStacks";

import HeaderNAv from "../../Components/Headers/HeaderNAv";
import Works from "../WORKS & CERTIFICATE/Works";
import Contact from "../CONTACT/Contact";

const HomePage = () => {
  useEffect(() => {
    // parallax anim
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".object").forEach(function (move) {
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform =
          "translateX(" + x + "px) translateY(" + y + "px)";
      });
    }

    // pre-writing animation
    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.TxtType = TxtType; // Make TxtType global
  }, []);

  useEffect(() => {
    // Move TxtType initialization logic here
    const elements = document.getElementsByClassName("typewrite");
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute("data-type");
      const period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new window.TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    const css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  }, []);

  const handleClickOutsideDropdown = (event) => {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutsideDropdown);

    return () => {
      window.removeEventListener("click", handleClickOutsideDropdown);
    };
  }, []);

  const [techStack, settechStack] = useState([]);

  useEffect(() => {
    settechStack(TechStacks.map((value) => value.label));
  }, []);

  return (
    <>
      <header>
        <HeaderNAv />
      </header>

      <div className="parentContainer">
        <div className="container" id="home">
          <div className="containerIntro">
            <div className="hubby">
              <h3
                className="typewrite"
                data-period="2000"
                data-type='["React Developer", "Web Developer", 
    "Mobile Developer", "Coffeeholic", "3D Modeling" ]'
              >
                React Developer
              </h3>
              <h2>CEEJAY CABALLERO</h2>
              <p>
                Hey, I'm Ceejay Caballero and I use Cej as a nickname. I am
                actively trying to improve my skills in coding specifically on
                React. I have passion for Web Developement, 3D modeling and I'm
                always curious to learn more about new technologies and creative
                coding.
              </p>
            </div>
          </div>

          <div className="conainerIMG">
            <img src={react} className="react" alt="REACT" />

            <div className="verticalIMG">
              <img src={html} className="object" data-value="5" alt="HTML" />
              <img src={css} className="object" data-value="-5" alt="CSS" />
            </div>

            <div className="sideIMG">
              <img src={redux} className="object" data-value="5" alt="REDUX" />
              <img
                src={blender}
                className="object"
                data-value="-5"
                alt="BLENDER"
              />
            </div>

            <div className="horizontalIMG">
              <img src={git} className="object" data-value="-5" alt="UNITY" />
              <img
                src={js}
                className="object"
                data-value="5"
                alt="JAVASCRIPT"
              />
            </div>
          </div>
        </div>

        <div className="skills">
          <ul>
            {techStack.map((stacks) => (
              <li key={stacks}>{stacks}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="parentContainer works" id="works">
        <Works />
      </div>

      <div className="parentContainer contact" id="contact">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
