
import React, { useState, useEffect, useRef } from 'react';
import { animate, motion } from 'framer-motion';
import Coffecup from '../assets/image/Coffecup.png';
import ColdDrink from '../assets/image/ColdDrink.png';
import Bakery from '../assets/image/Bakery.png';


const collectionItems = [
  {
    label: "Coffee",
    href: "#coffee",
    imgSrc: Coffecup,
  },
  {
    label: "Cold Drinks",
    href: "#cold-drinks",
    imgSrc: ColdDrink,
  },
  {
    label: "Bakery",
    href: "#bakery",
    imgSrc: Bakery,
  },
];

const CollectionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleClick = (e, href) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        animate(window.scrollY, target.offsetTop, {
          duration: 1,
          onUpdate(value) {
            window.scrollTo(0, value);
          },
        });
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="collection" ref={sectionRef} className="py-12 bg-[#fbddc0] relative">
      <div className="container mx-auto text-center">
        <h2 className="text-7xl font-bold mb-20  text-[#4a3c31]"> Find and Get What You Love </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-20 px-4">
          {collectionItems.map(({ label, href, imgSrc }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="w-48 h-48 sm:w-60 sm:h-60 mt-10 rounded-full bg-[#f8d1aa] flex items-center justify-center overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={imgSrc}
                  alt={label}
                  className="object-cover w-32 h-32 sm:w-40 sm:h-40 rounded-full"
                />
              </div>
              <span className="text-3xl sm:text-4xl font-bold text-[#4a3c31] group-hover:text-[#866161]">
                {label}
              </span>
            </a>
          ))}
        </div>
        <div className="mt-10">
            <motion.button
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="px-6 py-3 bg-[#4a3c31] text-white rounded-full text-lg font-semibold hover:bg-[#fad0a5]  transition-colors duration-300"
              onClick={() => {
                const element = document.querySelector('#menu');
                if (element) {
                  const yOffset = -80; // Adjust for fixed navbar height if any
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              Explore Menu
            </motion.button>
        </div>
       
      </div>
    </section>
  );
};

export default CollectionSection;
