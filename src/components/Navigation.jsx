import { motion } from 'framer-motion';

export default function Navigation() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-dark/80 backdrop-blur-sm border-b border-primary/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.a 
          href="#home"
          className="text-2xl font-bold text-primary"
          whileHover={{ scale: 1.05 }}
        >
          JC
        </motion.a>
        <ul className="flex gap-8">
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
      </div>
    </motion.nav>
  );
}


