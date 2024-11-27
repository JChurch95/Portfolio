import { motion } from 'framer-motion';

export default function SocialNav() {
  const socialLinks = [
    { icon: "github", href: "https://github.com/JChurch95" },
    { icon: "linkedin", href: "https://www.linkedin.com/in/jordan-a-church/" },
    { icon: "envelope", href: "mailto:jordanchurch95@gmail.com" },
  ];

  return (
    <motion.nav 
      className="fixed left-6 bottom-0 z-50 hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <ul className="flex flex-col gap-6 pb-6">
        {socialLinks.map((link, index) => (
          <motion.li
            key={link.icon}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
          >
            <a 
              href={link.href}
              className="text-light/60 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fas fa-${link.icon} text-xl`}></i>
            </a>
          </motion.li>
        ))}
        <motion.div 
          className="w-px h-24 bg-primary/20 mx-auto"
          initial={{ height: 0 }}
          animate={{ height: 96 }}
          transition={{ delay: 1.5 }}
        />
      </ul>
    </motion.nav>
  );
}
