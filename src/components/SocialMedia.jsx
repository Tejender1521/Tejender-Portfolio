import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaDev } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/tejender-upadhyay/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://dev.to/tejender_upadhyay"
        target="_blank"
        rel="noreferrer"
      >
        <FaDev />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/tarun1521" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        href="https://www.facebook.com/profile.php?id=100009427670523"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        href="https://www.instagram.com/tejender_upadhyay/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
