import React from 'react';
import { motion } from 'framer-motion';

const Loading = ({ size = 'md', text = 'Carregando...', className = '' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  return (
    <motion.div 
      className={`flex flex-col items-center justify-center py-8 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={`${sizeClasses[size]} border-2 border-blue-500 border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      {text && (
        <motion.p 
          className={`mt-4 text-gray-400 ${textSizes[size]}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </motion.div>
  );
};

// Skeleton loader for better UX
export const SkeletonLoader = ({ className = '', lines = 3 }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`bg-slate-700 rounded h-4 mb-3 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

// Card skeleton for project cards
export const CardSkeleton = ({ className = '' }) => {
  return (
    <div className={`bg-slate-700/50 rounded-lg p-6 animate-pulse ${className}`}>
      <div className="h-48 bg-slate-600 rounded mb-4" />
      <div className="h-6 bg-slate-600 rounded mb-2" />
      <div className="h-4 bg-slate-600 rounded mb-4 w-3/4" />
      <div className="flex gap-2">
        <div className="h-6 bg-slate-600 rounded w-16" />
        <div className="h-6 bg-slate-600 rounded w-20" />
        <div className="h-6 bg-slate-600 rounded w-14" />
      </div>
    </div>
  );
};

export default Loading;