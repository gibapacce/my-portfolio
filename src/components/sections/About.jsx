import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Github, Linkedin, Mail } from 'lucide-react';
import { ANIMATION_VARIANTS } from '../../constants';
import { useTheme } from '../../hooks/useLocalStorage';

const About = ({ profileData }) => {
  const [theme] = useTheme();
  const handleDownloadCV = () => {
    if (profileData.resumeUrl) {
      window.open(profileData.resumeUrl, '_blank');
    } else {
      // Fallback to mailto if no CV is available
      window.open(`mailto:${profileData.email}?subject=Solicitação de CV`, '_blank');
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={ANIMATION_VARIANTS.stagger}
      className="space-y-8"
    >
      {/* Hero Section */}
      <motion.div
        className="text-center mb-12"
        variants={ANIMATION_VARIANTS.fadeIn}
      >
        <motion.div
          className="relative inline-block mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={profileData.avatar}
            alt={`${profileData.name} - Desenvolvedor Full Stack`}
            className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-lg object-cover"
            loading="lazy"
          />
          <motion.div
            className="absolute -bottom-2 -right-2 bg-green-400 w-8 h-8 rounded-full border-4 border-white dark:border-slate-900 transition-colors duration-300"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            title="Disponível para trabalho"
          />
        </motion.div>
        
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
          variants={ANIMATION_VARIANTS.fadeIn}
        >
          {profileData.name}
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-blue-400 mb-4"
          variants={ANIMATION_VARIANTS.fadeIn}
        >
          {profileData.title}
        </motion.p>
        
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300"
          variants={ANIMATION_VARIANTS.fadeIn}
        >
          {profileData.bio}
        </motion.p>
        
        <motion.div
          className="flex justify-center items-center space-x-6 mt-6"
          variants={ANIMATION_VARIANTS.fadeIn}
        >
          <div className="flex items-center text-gray-600 dark:text-gray-300 transition-colors duration-300">
            <MapPin size={16} className="mr-1" />
            {profileData.location}
          </div>
          
          <motion.a
            href={profileData.github}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </motion.a>
          
          <motion.a
            href={profileData.linkedin}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </motion.a>
          
          <motion.a
            href={`mailto:${profileData.email}`}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Send Email"
          >
            <Mail size={20} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* About Content */}
      <motion.div variants={ANIMATION_VARIANTS.fadeIn}>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Sobre Mim</h2>
        <div className="prose prose-lg text-gray-700 dark:text-gray-300 max-w-none space-y-4 transition-colors duration-300">
          {profileData.aboutText?.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={ANIMATION_VARIANTS.slideIn}
              transition={{ delay: index * 0.2 }}
            >
              {paragraph}
            </motion.p>
          )) || (
            <motion.p variants={ANIMATION_VARIANTS.slideIn}>
              {profileData.bio}
            </motion.p>
          )}
          
          <motion.div
            className="mt-8"
            variants={ANIMATION_VARIANTS.fadeIn}
          >
            <motion.button
              onClick={handleDownloadCV}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              <span>Download CV</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
