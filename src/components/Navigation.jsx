import { motion } from "framer-motion";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: "github", href: "https://github.com/JChurch95" },
    { icon: "linkedin", href: "https://www.linkedin.com/in/jordan-a-church/" },
    { icon: "envelope", href: "mailto:jordanchurch95@gmail.com" },
  ];
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-dark/80 backdrop-blur-sm border-b border-primary/10 font-spotify"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        delay: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center relative">
        <div className="flex items-center gap-6">
          {/* Home button by itself */}
          <motion.a
            href="#home"
            className="text-2xl font-bold text-primary hover:text-light/90 w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary/20 transition-all duration-300 font-spotify"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            JC
          </motion.a>
          {/* Mobile social links */}
          <div className="lg:hidden flex gap-4 justify-center">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.icon}
                href={link.href}
                className="text-light/60 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <i
                  className={`${
                    link.icon === "envelope" ? "fa-solid" : "fa-brands"
                  } fa-${link.icon} text-2xl`}
                ></i>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Desktop Menu - Centered */}
        <ul className="hidden lg:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <a
                href={item.href}
                className="text-light/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Social Links and Resume */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.icon}
                href={link.href}
                className="text-light/60 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <i
                  className={`${
                    link.icon === "envelope" ? "fa-solid" : "fa-brands"
                  } fa-${link.icon} text-2xl`}
                ></i>
              </motion.a>
            ))}
          </div>
          <motion.a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:va6c2:9032c3cb-72a8-4090-b3c7-394d0131f994"
            className="px-4 py-2 bg-primary text-dark rounded-full hover:bg-primary/90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Resume and Hamburger */}
        <div className="lg:hidden flex items-center gap-4">
          <motion.a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:va6c2:9032c3cb-72a8-4090-b3c7-394d0131f994"
            className="px-4 py-2 bg-primary text-dark rounded-full hover:bg-primary/90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
          <button
            className="text-light/80 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.ul
          className={`lg:hidden absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-sm py-4 ${
            isOpen ? "flex" : "hidden"
          } flex-col items-center gap-4`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        >
          {navItems.map((item) => (
            <motion.li key={item.href}>
              <a
                href={item.href}
                className="text-light/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
}
