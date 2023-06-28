"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../footer/page";
import homeLogo from "../images/logo.jpg";
import Image from "next/image";
export default function HomePage() {
  const handleScrollingEvents = (classEl) => {
    const scrollOffset = 400;
    const scrollElement = document.querySelector(classEl);
    const elementInView = (el, offset = 0) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) - offset
      );
    };
    const displayScrollElement = () => {
      scrollElement.classList.add("scrolled");
    };
    const hideScrollElement = () => {
      scrollElement.classList.remove("scrolled");
    };
    const handleScrollAnimation = () => {
      if (elementInView(scrollElement, scrollOffset)) {
        displayScrollElement();
      } else {
        hideScrollElement();
      }
    };
    window.addEventListener("scroll", () => {
      handleScrollAnimation();
    });
  };
  const openNavLinks = () => {
    const navLinks = document.getElementById("clicked");

    navLinks.style.right = "0%";
  };
  useEffect(() => {
    // handleScrollingEvents();
    handleScrollingEvents(".home-hours-container");
    handleScrollingEvents("#food-one");
    handleScrollingEvents("#food-two");
    handleScrollingEvents("#food-three");
    handleScrollingEvents("#food-four");
  });

  return (
    <>
      <div className="mobile-nav-container">
        <div className="mobile-links-container" id="clicked">
          <Link className="mob-link" href="/">
            HOME
          </Link>
          <Link className="mob-link" href="/about">
            ABOUT
          </Link>
          <Link className="mob-link" href="/menu">
            MENU
          </Link>
          <Link className="mob-link" href="/contact">
            CONTACT
          </Link>
        </div>
        <Image
          src={homeLogo}
          alt="Our breakfast menu"
          className="mobile-logo"
          width={250}
          height={200}
        />
        <div className="bar-container" onClick={() => openNavLinks()}>
          <div className="bar" id="bar-one"></div>
          <div className="bar" id="bar-two"></div>
        </div>
      </div>
      <div className="home-container">
        <div className="home-img-container">
          <div className="home-scroll">
            <div className="scroll"></div>
          </div>
          <div className="home-nav">
            <Link className="link" href="/">
              HOME
            </Link>
            <Link className="link" href="/about">
              ABOUT
            </Link>
            <Link className="link" href="/menu">
              MENU
            </Link>
            <Link className="link" href="/contact">
              CONTACT
            </Link>
          </div>
          <div className="home-bio">
            <h1 className="home-head">- The Yucca Tree Eatery -</h1>
            <p className="home-body">
              Good food and good vibes, that&apos;s what we&apos;re all about!
              After exploring the magic of the desert, come replenish yourself
              with a delicious meal made from all organic ingredients.
            </p>
            <Link id="menu-link" className="link" href="/menu">
              MENU
            </Link>
          </div>
          <Image
            src={homeLogo}
            alt="Our breakfast menu"
            className="logo"
            width={250}
            height={200}
          />
        </div>
        <div className="home-hours-container">
          <h1 className="home-head" id="welcome">
            Welcome!
          </h1>
          <p className="hours-body">
            Here at The Yucca Tree Eatery we want nothing more to satisfy your
            hunger and quench your thirst. We are sharing the magic of the
            desert on a nice, warm plate! These are our restuarant hours:
          </p>
          <div className="day">
            Monday
            <p className="hours">8:00 AM - 3 PM</p>
          </div>
          <div className="day">
            Tuesday
            <p className="hours">8:00 AM - 3 PM</p>
          </div>
          <div className="day">
            Wednesday
            <p className="hours">8:00 AM - 3 PM</p>
          </div>
          <div className="day">
            Thursday
            <p className="hours">8:00 AM - 3 PM</p>
          </div>
          <div className="day">
            Friday
            <p className="hours">8:00 AM - 3 PM</p>
          </div>
          <div className="day">
            Saturday
            <p className="hours">8:00 AM - 3 PM</p>
          </div>
          <div className="day">
            Sunday
            <p className="hours">Closed</p>
          </div>
        </div>
        <div className="home-food-container">
          <div className="home-food" id="food-one">
            SERVING
          </div>
          <div className="home-food" id="food-two">
            MORE
          </div>
          <div className="home-food" id="food-three">
            THAN
          </div>
          <div className="home-food" id="food-four">
            FOOD.
          </div>
        </div>
      </div>
    </>
  );
}
