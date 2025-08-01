import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ANIMATION_VARIANTS, FORM_VALIDATION } from '../../constants';

const Contact = ({ profileData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = (name, value) => {
    const validation = FORM_VALIDATION[name];
    if (!validation) return '';

    if (validation.required && !value.trim()) {
      return validation.required;
    }

    if (validation.minLength && value.length < validation.minLength.value) {
      return validation.minLength.message;
    }

    if (validation.pattern && !validation.pattern.value.test(value)) {
      return validation.pattern.message;
    }

    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission (replace with actual implementation)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, open email client as fallback
      const subject = encodeURIComponent(`Contato de ${formData.name}`);
      const body = encodeURIComponent(
        `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
      );
      window.open(`mailto:${profileData.email}?subject=${subject}&body=${body}`, '_blank');
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
        Entre em Contato
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
          <h3 className="text-xl font-semibold text-white mb-6">
            Informações de Contato
          </h3>
          
          <div className="space-y-4">
            <motion.div
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <Mail className="text-blue-400 flex-shrink-0" size={20} />
              <div>
                <p className="text-gray-300 font-medium">{profileData.email}</p>
                <p className="text-gray-400 text-sm">Email principal</p>
              </div>
            </motion.div>
            
            <motion.div
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <MapPin className="text-blue-400 flex-shrink-0" size={20} />
              <div>
                <p className="text-gray-300 font-medium">{profileData.location}</p>
                <p className="text-gray-400 text-sm">Localização</p>
              </div>
            </motion.div>
            
            <motion.a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
              whileHover={{ scale: 1.02 }}
            >
              <Linkedin className="text-blue-400 flex-shrink-0 group-hover:text-blue-300" size={20} />
              <div>
                <p className="text-gray-300 font-medium group-hover:text-white">LinkedIn Profile</p>
                <p className="text-gray-400 text-sm">Conecte-se comigo</p>
              </div>
            </motion.a>
            
            <motion.a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
              whileHover={{ scale: 1.02 }}
            >
              <Github className="text-blue-400 flex-shrink-0 group-hover:text-blue-300" size={20} />
              <div>
                <p className="text-gray-300 font-medium group-hover:text-white">GitHub Profile</p>
                <p className="text-gray-400 text-sm">Veja meus projetos</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
          <h3 className="text-xl font-semibold text-white mb-6">
            Envie uma Mensagem
          </h3>
          
          {submitStatus === 'success' && (
            <motion.div
              className="mb-4 p-3 bg-green-600/20 border border-green-500/30 rounded-lg flex items-center space-x-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <CheckCircle className="text-green-400" size={16} />
              <span className="text-green-300 text-sm">Mensagem enviada com sucesso!</span>
            </motion.div>
          )}
          
          {submitStatus === 'error' && (
            <motion.div
              className="mb-4 p-3 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center space-x-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertCircle className="text-red-400" size={16} />
              <span className="text-red-300 text-sm">Erro ao enviar mensagem. Tente novamente.</span>
            </motion.div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-slate-700 text-white rounded-lg border transition-colors focus:outline-none ${
                  errors.name
                    ? 'border-red-500 focus:border-red-400'
                    : 'border-slate-600 focus:border-blue-500'
                }`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-slate-700 text-white rounded-lg border transition-colors focus:outline-none ${
                  errors.email
                    ? 'border-red-500 focus:border-red-400'
                    : 'border-slate-600 focus:border-blue-500'
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Sua mensagem"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-slate-700 text-white rounded-lg border transition-colors focus:outline-none resize-none ${
                  errors.message
                    ? 'border-red-500 focus:border-red-400'
                    : 'border-slate-600 focus:border-blue-500'
                }`}
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Enviar Mensagem</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
