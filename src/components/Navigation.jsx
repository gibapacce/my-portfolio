import React from 'react';
import { motion } from 'framer-motion';
import { Code, Calendar, Database, Github, Mail } from 'lucide-react';
import { SECTIONS, ANIMATION_VARIANTS } from '../constants';
import ThemeToggle from './ThemeToggle';

const Navigation = ({ activeSection, setActiveSection, profileName }) => {
  const sections = [
    { id: SECTIONS.ABOUT, label: 'Sobre', icon: Code },
    { id: SECTIONS.EXPERIENCE, label: 'Experiência', icon: Calendar },
    { id: SECTIONS.SKILLS, label: 'Habilidades', icon: Database },
    { id: SECTIONS.PROJECTS, label: 'Projetos', icon: Github },
    { id: SECTIONS.CONTACT, label: 'Contato', icon: Mail }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="text-xl font-bold text-white cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveSection(SECTIONS.ABOUT)}
            >
              {profileName}
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex space-x-8">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <section.icon size={16} />
                    <span>{section.label}</span>
                  </motion.button>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <ThemeToggle />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-t border-slate-700"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-around py-2">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                activeSection === section.id ? 'text-blue-400' : 'text-gray-400'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <section.icon size={20} />
              <span className="text-xs mt-1">{section.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
