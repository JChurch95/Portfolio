import { motion } from 'framer-motion';

export function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-dark text-light relative overflow-hidden">
      {/* Gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-dark via-dark/95 to-black -z-10" />
      
      {/* Grid overlay */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 -z-10" />
      
      {/* Ambient light effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-20" />
      </div>

      {children}
    </div>
  );
}

export function Section({ children, id, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`min-h-screen py-20 px-6 relative ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
}

export function SectionTitle({ children }) {
  return (
    <motion.h2 
      className="text-4xl font-bold text-light mb-16 text-center"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      <span className="text-primary">&lt;</span>
      {children}
      <span className="text-primary">/&gt;</span>
    </motion.h2>
  );
}