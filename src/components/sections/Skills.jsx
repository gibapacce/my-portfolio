import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, Wrench, Award } from 'lucide-react';
import { ANIMATION_VARIANTS, SKILL_COLORS } from '../../constants';

const Skills = ({ skillsData, certifications }) => {
  const getIcon = (iconName) => {
    const icons = {
      Code,
      Server,
      Database,
      Cloud,
      Wrench
    };
    return icons[iconName] || Code;
  };

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
        Habilidades Técnicas
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {Object.entries(skillsData).map(([category, data], index) => {
          const IconComponent = getIcon(data.icon);
          
          return (
            <motion.div
              key={category}
              className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-colors"
              variants={ANIMATION_VARIANTS.slideIn}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3
                className="text-xl font-semibold text-white mb-4 flex items-center"
                whileHover={{ color: "#60a5fa" }}
              >
                <IconComponent className="mr-2" size={20} />
                {category}
              </motion.h3>
              
              <motion.div
                className="flex flex-wrap gap-2"
                variants={ANIMATION_VARIANTS.stagger}
              >
                {data.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className={`px-3 py-2 rounded-lg text-sm border ${SKILL_COLORS[data.color]} hover:scale-105 transition-transform cursor-default`}
                    variants={ANIMATION_VARIANTS.fadeIn}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={`${skill} - ${category}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications Section */}
      {certifications && certifications.length > 0 && (
        <motion.div
          variants={ANIMATION_VARIANTS.fadeIn}
          className="mt-8"
        >
          <motion.h3
            className="text-2xl font-bold text-white mb-6 flex items-center"
            variants={ANIMATION_VARIANTS.slideIn}
          >
            <Award className="mr-2" size={24} />
            Certificações
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-yellow-500"
                variants={ANIMATION_VARIANTS.slideIn}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: "#fbbf24" }}
              >
                <h4 className="text-lg font-semibold text-white mb-1">
                  {cert.name}
                </h4>
                <p className="text-blue-400 text-sm mb-1">
                  {cert.issuer}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">
                    {cert.date}
                  </span>
                  {cert.credentialId && (
                    <span className="text-xs text-gray-500 font-mono">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Skills Progress Visualization */}
      <motion.div
        variants={ANIMATION_VARIANTS.fadeIn}
        className="mt-8 p-6 bg-slate-800/50 rounded-lg"
      >
        <h3 className="text-xl font-semibold text-white mb-4">
          Nível de Experiência
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(skillsData).map(([category, data]) => (
            <div key={category} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm">{category}</span>
                <span className="text-blue-400 text-sm">
                  {data.skills.length} tecnologias
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <motion.div
                  className="bg-blue-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(data.skills.length * 10, 100)}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
