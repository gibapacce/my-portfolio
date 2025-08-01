import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import { ANIMATION_VARIANTS } from '../../constants';

const Experience = ({ experiences }) => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={ANIMATION_VARIANTS.stagger}
    >
      <motion.h2
        className="text-3xl font-bold text-white mb-8"
        variants={ANIMATION_VARIANTS.fadeIn}
      >
        Experiência Profissional
      </motion.h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id || index}
            className="border-l-4 border-blue-500 pl-6 pb-8 relative"
            variants={ANIMATION_VARIANTS.slideIn}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Timeline dot */}
            <motion.div
              className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <div>
                <motion.h3
                  className="text-xl font-semibold text-white"
                  whileHover={{ color: "#60a5fa" }}
                >
                  {exp.title}
                </motion.h3>
                <motion.p
                  className="text-blue-400 font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {exp.company}
                </motion.p>
                {exp.location && (
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <MapPin size={14} className="mr-1" />
                    {exp.location}
                  </div>
                )}
              </div>
              
              <div className="flex items-center text-sm text-gray-400 mt-1 md:mt-0">
                <Calendar size={14} className="mr-1" />
                {exp.period}
              </div>
            </div>
            
            <motion.p
              className="text-gray-300 mb-4"
              variants={ANIMATION_VARIANTS.fadeIn}
            >
              {exp.description}
            </motion.p>
            
            {/* Technologies */}
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              variants={ANIMATION_VARIANTS.stagger}
            >
              {exp.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="px-3 py-1 bg-slate-700 text-blue-300 text-sm rounded-full hover:bg-slate-600 transition-colors"
                  variants={ANIMATION_VARIANTS.fadeIn}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            
            {/* Achievements */}
            {exp.achievements && exp.achievements.length > 0 && (
              <motion.div
                className="mt-4"
                variants={ANIMATION_VARIANTS.fadeIn}
              >
                <div className="flex items-center text-green-400 mb-2">
                  <Award size={16} className="mr-2" />
                  <span className="font-medium">Principais Conquistas:</span>
                </div>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      className="text-gray-300 text-sm flex items-start"
                      variants={ANIMATION_VARIANTS.slideIn}
                      transition={{ delay: achIndex * 0.1 }}
                    >
                      <span className="text-green-400 mr-2">•</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Timeline end */}
      <motion.div
        className="border-l-4 border-gray-600 pl-6 pb-4"
        variants={ANIMATION_VARIANTS.fadeIn}
      >
        <div className="absolute -left-3 w-6 h-6 bg-gray-600 rounded-full border-4 border-slate-900" />
        <p className="text-gray-400 text-sm">Início da jornada profissional</p>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
