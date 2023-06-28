"use client";
import Link from "next/link";
import Image from "next/image";
import homeLogo from "../images/logo.jpg";
export default function Navigation() {
  const openNavLinks = () => {
    const navLinks = document.getElementById("clicked");

    navLinks.style.right = "0%";
  };
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
      <div className="nav-container">
        <div className="nav-logo"></div>
        <div className="nav-link-container">
          <div className="nav-hover-container">
            <Link className="nav-link" href="/" id="home-link">
              HOME
            </Link>
            <div className="nav-hover" id="home-hover-link"></div>
          </div>
          <div className="nav-hover-container">
            <Link className="nav-link" href="/about" id="about-link">
              ABOUT
            </Link>
            <div className="nav-hover" id="about-hover-link"></div>
          </div>
          <div className="nav-hover-container">
            <Link className="nav-link" href="/menu" id="menu-link-2">
              MENU
            </Link>
            <div className="nav-hover" id="menu-hover-link"></div>
          </div>
          <div className="nav-hover-container">
            <Link className="nav-link" href="/contact" id="contact-link">
              CONTACT
            </Link>
            <div className="nav-hover" id="contact-hover-link"></div>
          </div>
        </div>
      </div>
    </>
  );
}
