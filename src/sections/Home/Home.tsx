import "./Home.css";
import { tiktok, instagram, telegram, progerLogo } from "../../assets/img";
import React from "react";

interface SocialLink {
  href: string;
  label: string;
  svgPath: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.tiktok.com/@tm_progers?_t=8qmjv1QA44G&_r=1",
    label: "TikTok",
    svgPath: "M196 498.32l1.64 4.63c-.21-.53-.81-2.15-1.64-4.63zM260.9...",
  },
  {
    href: "https://t.me/tmprogers",
    label: "Telegram",
    svgPath: "M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755...",
  },
  {
    href: "https://www.instagram.com/tm_progers/profilecard/?igsh=MWlpaW85bnFpdzQweA==",
    label: "Instagram",
    svgPath: "M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12...",
  },
];

const HomeSection: React.FC = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Salam men tm_progers</h1>
        <h3 className="text-animation">
          Men <span></span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          quibusdam vel enim fugiat eligendi accusantium voluptate nisi
          exercitationem, ea nesciunt blanditiis placeat sint rerum et expedita
          modi rem ad harum.
        </p>

        {/* Social Icons */}
        <div className="social-icons">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <img src={tiktok} alt="" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
