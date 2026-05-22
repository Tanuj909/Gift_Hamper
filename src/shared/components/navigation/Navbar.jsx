import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/shared/constants/navigationLinks";
import logo from "@/assets/logo/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    const handleDocClick = () => {
      setTimeout(() => {
        setCurrentPath(window.location.pathname);
      }, 50);
    };
    document.addEventListener("click", handleDocClick);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("click", handleDocClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${isScrolled 
          ? "bg-[#FAF4E8] shadow-sm border-b border-primary/10 py-1" 
          : "bg-[#FAF4E8]/60 backdrop-blur-md py-2"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic height: 72px when unscrolled (10% smaller than 80px), 64px when scrolled */}
        <div 
          className={`flex items-center justify-between transition-all duration-300 
            ${isScrolled ? "h-16" : "h-[72px]"}
          `}
        >
          
          {/* Logo */}
          <a href="/" className="shrink-0 flex items-center focus:outline-none">
            <img 
              src={logo} 
              alt="Sajjao Logo" 
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "h-12 md:h-14" : "h-14 md:h-16"
              }`}
            />
          </a>


          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.label}
                  href={link.path}
                  className={`
                    font-lora
                    text-[14px] xl:text-[15px]
                    font-semibold
                    transition-all
                    duration-300
                    hover:opacity-70
                    whitespace-nowrap
                    relative
                    py-1
                    ${isActive ? "text-accent" : "text-primary"}
                  `}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full animate-in fade-in zoom-in duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <a
              href="/contact"
              className="
                hidden md:block
                bg-primary
                text-[#FAF4E8]
                px-6
                py-2.5
                rounded-full
                font-lora
                text-xs
                font-bold
                uppercase
                tracking-wider
                transition-all
                duration-300
                hover:scale-[1.03]
                cursor-pointer
                text-center
              "
            >
              Contact Us
            </a>

            {/* Mobile Menu Trigger */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden text-primary focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#FAF4E8] shadow-md border-t border-primary/5 z-40 transition-all duration-300">
          <nav className="flex flex-col p-6 space-y-4">
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    font-lora
                    text-[16px]
                    font-semibold
                    py-1.5
                    border-b border-primary/5
                    transition-all
                    duration-300
                    hover:pl-2
                    ${isActive ? "text-accent pl-2 font-bold" : "text-primary"}
                  `}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="
                md:hidden
                w-full
                bg-primary
                text-[#FAF4E8]
                py-2.5
                rounded-full
                font-lora
                text-xs
                font-bold
                uppercase
                tracking-wider
                mt-2
                cursor-pointer
                text-center
              "
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;