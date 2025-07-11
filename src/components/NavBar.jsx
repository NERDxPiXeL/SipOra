import React, { useState, useEffect } from 'react';
import { animate } from 'framer-motion';
import logo from '../assets/image/download.png'
import { 
  Menu, 
  ChevronDown, 
  Square, 
  User, 
  Blocks, 
  BookOpen,
  Home,
 Rocket,
 Contact
} from 'lucide-react';



// Nav List Menu Items
const navListMenuItems = [
  {
    title: "@material-tailwind/html",
    description: "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react", 
    description: "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description: "A complete set of UI Elements for building faster websites in less time.",
  },
];

// Nav List Menu Component
const NavListMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
        className="hidden lg:flex items-center gap-2 font-medium text-gray-700 hover:text-blue-600 px-3 py-2 rounded-full transition-colors duration-200"
      >
        <Square className="h-[18px] w-[18px] text-gray-500" />
        Pages
        <ChevronDown
          className={`h-3 w-3 transition-transform duration-200 ${
            isMenuOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isMenuOpen && (
        <div 
          className="absolute top-full left-0 mt-2 w-[36rem] bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden z-20 hidden lg:grid grid-cols-7 gap-3 p-3"
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <div className="col-span-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center h-full min-h-[200px]">
            <Rocket className="h-28 w-28 text-white" strokeWidth={1} />
          </div>
          <div className="col-span-4 flex flex-col gap-1 py-2">
            {navListMenuItems.map(({ title, description }) => (
              <a
                href="#"
                key={title}
                className="block p-3 rounded-xl hover:bg-gray-50 transition-colors duration-150"
              >
                <h6 className="font-semibold text-gray-900 mb-1">{title}</h6>
                <p className="text-sm text-gray-600 font-normal">{description}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Nav list items
const navListItems = [
  {
    label: "Home",
    icon: Home,
    href: "#home",
  },
  {
    label: "Menu",
    icon: Menu,
    href: "#menu",
  },
  {
    label: "Collection",
    icon: User,
    href: "#collection",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Contact,
  },
  {
    label: "About US",
    icon: BookOpen,
    href: "#about",
  },
];

// Nav List Component
import { useNavigate } from 'react-router-dom';

const NavList = () => {
  const navigate = useNavigate();

  const handleClick = (e, href) => {
    if (href && href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
    } else if (href && href.startsWith('#')) {
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

  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon: Icon, href }) => (
        <li key={label}>
          <a
            href={href || "#"}
            onClick={(e) => handleClick(e, href)}
            className="flex items-center gap-2 font-medium text-black hover:text-white px-3 py-2 rounded-full transition-colors duration-200"
          >
            <Icon className="h-[18px] w-[18px]" />
            <span>{label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

// Mobile Nav List Menu
const MobileNavListMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
         
      {isMenuOpen && (
        <div className="ml-6 flex flex-col gap-1 mt-2 lg:hidden">
          {navListMenuItems.map(({ title, description }) => (
            <a
              href="#"
              key={title}
              className="block p-3 rounded-xl hover:bg-gray-50 transition-colors duration-150"
            >
              <h6 className="font-semibold text-gray-900 mb-1 text-sm">{title}</h6>
              <p className="text-xs text-gray-600 font-normal">{description}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

// Main NavBar Component
const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen(!isNavOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
<nav className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-[20cm] p-2 lg:rounded-full bg-white/30 backdrop-blur-md shadow-none border-0">
<div className="relative mx-auto flex items-center justify-between text-white">
        <a
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-lg hover:text-blue-300 transition-colors duration-200 font-stretch-50%"
        >
          <img src={logo} className="h-15 w-25" />
        </a>
        
        <div className="hidden lg:block">
          <NavList />
        </div>
        
        <button
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden p-2 rounded-xl hover:bg-gray-50 transition-colors duration-200"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Removed ProfileMenu component to remove profile menu items */}
        {/* <div className="flex items-center gap-2">
          <ProfileMenu />
        </div> */}
      </div>
      
      {/* Mobile Navigation */}
{isNavOpen && (
  <div className="lg:hidden border-t border-gray-200 mt-2 pt-2">
    <div className="flex flex-col gap-1">
      <MobileNavListMenu />
      {navListItems.map(({ label, icon: Icon, href }) => (
        <a
          key={label}
          href={href || "#"}
          onClick={(e) => {
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
          }}
          className="flex items-center gap-2 font-medium text-black px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors duration-150"
        >
          <Icon className="h-[18px] w-[18px] text-black" />
          <span>{label}</span>
        </a>
      ))}
    </div>
  </div>
)}
    </nav>
  );
};

export default NavBar;