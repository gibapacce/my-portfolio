import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, Filter, Eye } from 'lucide-react';
import { ANIMATION_VARIANTS, LANGUAGE_COLORS } from '../../constants';
import { projectsData, projectCategories, projectStatus } from '../../data/projects';

const Projects = ({ githubRepos = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showGithubRepos, setShowGithubRepos] = useState(false);

  // Combine project data with GitHub repos
  const allProjects = showGithubRepos ? githubRepos : projectsData;
  
  const filteredProjects = selectedCategory === 'Todos'
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  const getLanguageColor = (language) => {
    return LANGUAGE_COLORS[language] || 'bg-gray-400';
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={ANIMATION_VARIANTS.stagger}
    >
      <motion.div
        className="flex flex-col md:flex-row md:justify-between md:items-center mb-8"
        variants={ANIMATION_VARIANTS.fadeIn}
      >
        <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
          {showGithubRepos ? 'Repositórios GitHub' : 'Meus Projetos'}
        </h2>
        
        <div className="flex flex-wrap gap-2">
          <motion.button
            onClick={() => setShowGithubRepos(!showGithubRepos)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              showGithubRepos
                ? 'bg-green-600 text-white'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} className="inline mr-2" />
            {showGithubRepos ? 'Ver Projetos' : 'Ver GitHub'}
          </motion.button>
        </div>
      </motion.div>

      {/* Category Filter */}
      {!showGithubRepos && (
        <motion.div
          className="flex flex-wrap gap-2 mb-6"
          variants={ANIMATION_VARIANTS.fadeIn}
        >
          <Filter size={16} className="text-gray-400 mt-2 mr-2" />
          {projectCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Projects Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={ANIMATION_VARIANTS.stagger}
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id || project.name}
              className="bg-slate-700/50 rounded-lg overflow-hidden hover:bg-slate-700/70 transition-colors group"
              variants={ANIMATION_VARIANTS.slideIn}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              layout
            >
              {/* Project Image */}
              {project.image && (
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title || project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  
                  {/* Status Badge */}
                  {project.status && (
                    <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${
                      projectStatus[project.status]?.color === 'green' ? 'bg-green-600 text-white' :
                      projectStatus[project.status]?.color === 'yellow' ? 'bg-yellow-600 text-white' :
                      'bg-blue-600 text-white'
                    }`}>
                      {projectStatus[project.status]?.label}
                    </div>
                  )}
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-yellow-500 text-slate-900 px-2 py-1 rounded-full text-xs font-bold">
                      ⭐ Destaque
                    </div>
                  )}
                </div>
              )}

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title || project.name}
                  </h3>
                  
                  <div className="flex space-x-2">
                    {project.demo_url && (
                      <motion.a
                        href={project.demo_url}
                        className="text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        title="Ver Demo"
                      >
                        <Eye size={16} />
                      </motion.a>
                    )}
                    
                    <motion.a
                      href={project.html_url}
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      title="Ver no GitHub"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {(project.technologies || project.topics || []).slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-600 text-xs text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {(project.technologies || project.topics || []).length > 4 && (
                    <span className="px-2 py-1 bg-slate-600 text-xs text-gray-400 rounded">
                      +{(project.technologies || project.topics).length - 4}
                    </span>
                  )}
                </div>
                
                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {project.language && (
                      <>
                        <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`} />
                        <span className="text-sm text-gray-400">{project.language}</span>
                      </>
                    )}
                  </div>
                  
                  {project.stargazers_count !== undefined && (
                    <div className="flex items-center text-gray-400 text-sm">
                      <Star size={14} className="mr-1" />
                      {project.stargazers_count}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-12"
          variants={ANIMATION_VARIANTS.fadeIn}
        >
          <p className="text-gray-400 text-lg">
            Nenhum projeto encontrado para esta categoria.
          </p>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Projects;
