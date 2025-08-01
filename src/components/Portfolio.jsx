import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import SEO from './SEO';
import Navigation from './Navigation';
import { useActiveSection, useTheme } from '../hooks/useLocalStorage';
import { useGitHub } from '../hooks/useGitHub';
import { profileData } from '../data/profile';
import { experiences } from '../data/experiences';
import { skillsData, certifications } from '../data/skills';
import { SECTIONS, ANIMATION_VARIANTS } from '../constants';

// Lazy load sections for better performance
const About = lazy(() => import('./sections/About'));
const Experience = lazy(() => import('./sections/Experience'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

// Loading component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useActiveSection();
  const [theme] = useTheme();
  const { repos: githubRepos, loading: githubLoading } = useGitHub(profileData.githubUsername);

  const renderActiveSection = () => {
    const sectionProps = {
      profileData,
      experiences,
      skillsData,
      certifications,
      githubRepos: githubLoading ? [] : githubRepos
    };

    switch (activeSection) {
      case SECTIONS.ABOUT:
        return (
          <Suspense fallback={<SectionLoader />}>
            <About {...sectionProps} />
          </Suspense>
        );
      case SECTIONS.EXPERIENCE:
        return (
          <Suspense fallback={<SectionLoader />}>
            <Experience {...sectionProps} />
          </Suspense>
        );
      case SECTIONS.SKILLS:
        return (
          <Suspense fallback={<SectionLoader />}>
            <Skills {...sectionProps} />
          </Suspense>
        );
      case SECTIONS.PROJECTS:
        return (
          <Suspense fallback={<SectionLoader />}>
            <Projects {...sectionProps} />
          </Suspense>
        );
      case SECTIONS.CONTACT:
        return (
          <Suspense fallback={<SectionLoader />}>
            <Contact {...sectionProps} />
          </Suspense>
        );
      default:
        return (
          <Suspense fallback={<SectionLoader />}>
            <About {...sectionProps} />
          </Suspense>
        );
    }
  };

  return (
    <>
      <SEO />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
        {/* Navigation */}
        <Navigation 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          profileName={profileData.name}
        />

        {/* Main Content */}
        <motion.main 
          className="pt-20 pb-20 md:pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Content Container */}
            <motion.div
              className="backdrop-blur-sm rounded-2xl p-8 shadow-2xl bg-white/80 border border-gray-200 dark:bg-slate-800/50 dark:border-slate-700 transition-colors duration-300"
              variants={ANIMATION_VARIANTS.fadeIn}
              initial="hidden"
              animate="visible"
            >
              {renderActiveSection()}
            </motion.div>
          </div>
        </motion.main>

        {/* Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl transition-colors duration-300"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl transition-colors duration-300"></div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;