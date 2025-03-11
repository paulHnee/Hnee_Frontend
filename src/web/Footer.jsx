import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../style";
import { footerLinks, socialMedia } from "../types";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col mt-24`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((link) => (
            <div key={link.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {link.title}
              </h4>
              <ul className="list-none mt-3">
                {link.links.map((items, index) => (
                  <li key={items.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== link.links.length - 1 ? 'mb-2' : 'mb-0'}`}>
                    {items.external ? (
                      <a href={items.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary">
                        {items.name}
                      </a>
                    ) : (
                      <Link to={items.link} className="text-white hover:text-secondary">
                        {items.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-white">
          Copyright © 2024 Paul Buchwald.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((media, index) => (
            <a key={media.id} href={media.link} target="_blank" rel="noopener noreferrer">
              <img src={media.icon} alt={media.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
