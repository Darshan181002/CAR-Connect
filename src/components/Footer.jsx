import { IconMail, IconPhoneCall } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useState } from "react";



function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Connect
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:123456789">
                  <IconPhoneCall /> &nbsp; (123) -456-789
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com"
                >
                  <IconMail />
                  &nbsp; carconnect@gmail.com
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="/Faq">How we work</a>
              </li>
              <li>
                <a href="/TestimonialsPage">Testimonials</a>
              </li>
              <li>
                <a href="/Team">Our Team</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>

            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Sun: </li>
              <li>9:00AM - 9:00PM</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                
                <Link className="submit-email" onClick={() => window.scrollTo(0, 0)} to="/">
                  Submit
                </Link>

              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;