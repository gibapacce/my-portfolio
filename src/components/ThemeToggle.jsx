import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useLocalStorage';

const ThemeToggle = ({ className = '' }) => {
  const [theme, toggleTheme] = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={`Mudar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
    >
      <motion.div
        className="relative w-6 h-6"
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{ 
            opacity: theme === 'dark' ? 1 : 0,
            scale: theme === 'dark' ? 1 : 0.5
          }}
          transition={{ duration: 0.2 }}
        >
          <Moon className="text-blue-400" size={20} />
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{ 
            opacity: theme === 'light' ? 1 : 0,
            scale: theme === 'light' ? 1 : 0.5
          }}
          transition={{ duration: 0.2 }}
        >
          <Sun className="text-yellow-400" size={20} />
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;