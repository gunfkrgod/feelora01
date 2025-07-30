import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Briefcase, 
  Heart, 
  Users, 
  Baby, 
  Shield,
  Clock,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 'mental-health',
    title: 'Mental Health Counseling',
    description: 'Professional support for anxiety, depression, stress, and other mental health concerns.',
    icon: Brain,
    color: 'from-blue-500 to-blue-600',
    features: ['Individual Therapy', 'Group Sessions', 'Crisis Support', '24/7 Availability'],
    pricing: 'Starting at $80/session',
    duration: '50-60 minutes'
  },
  {
    id: 'career',
    title: 'Career & Life Coaching',
    description: 'Navigate career transitions, work-life balance, and professional development.',
    icon: Briefcase,
    color: 'from-purple-500 to-purple-600',
    features: ['Career Planning', 'Interview Prep', 'Leadership Coaching', 'Work-Life Balance'],
    pricing: 'Starting at $100/session',
    duration: '60 minutes'
  },
  {
    id: 'relationships',
    title: 'Relationship Counseling',
    description: 'Couples therapy, family counseling, and relationship communication skills.',
    icon: Heart,
    color: 'from-pink-500 to-pink-600',
    features: ['Couples Therapy', 'Family Sessions', 'Communication Skills', 'Conflict Resolution'],
    pricing: 'Starting at $120/session',
    duration: '60-90 minutes'
  },
  {
    id: 'lgbtq',
    title: 'LGBTQ+ Affirming Support',
    description: 'Specialized support for LGBTQ+ individuals and families with affirming counselors.',
    icon: Users,
    color: 'from-indigo-500 to-indigo-600',
    features: ['Identity Exploration', 'Coming Out Support', 'Family Therapy', 'Discrimination Support'],
    pricing: 'Starting at $90/session',
    duration: '50-60 minutes'
  },
  {
    id: 'parenting',
    title: 'Parenting & Family Support',
    description: 'Guidance for parents, child development support, and family dynamics.',
    icon: Baby,
    color: 'from-green-500 to-green-600',
    features: ['Parenting Skills', 'Child Development', 'Teen Support', 'Family Dynamics'],
    pricing: 'Starting at $95/session',
    duration: '50-60 minutes'
  },
  {
    id: 'trauma',
    title: 'Trauma & PTSD Support',
    description: 'Specialized trauma-informed therapy for healing and recovery.',
    icon: Shield,
    color: 'from-red-500 to-red-600',
    features: ['EMDR Therapy', 'CBT for Trauma', 'PTSD Support', 'Healing-Focused'],
    pricing: 'Starting at $110/session',
    duration: '60-75 minutes'
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Professional Wellness Services
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Connect with verified, licensed counselors who specialize in your specific needs. 
              All sessions are confidential and available both online and in-person.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link 
                to="/book" 
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>Book a Session</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/chat" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all"
              >
                Try AI Assistant First
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{service.pricing}</div>
                      <div className="text-sm text-gray-600 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      to={`/category/${service.id}`}
                      className="flex-1 bg-gray-100 text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all text-center"
                    >
                      Learn More
                    </Link>
                    <Link 
                      to="/book"
                      className={`flex-1 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-center`}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Feelora?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality mental health support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Verified Professionals</h3>
              <p className="text-gray-600">All counselors are licensed, verified, and regularly reviewed for quality.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% Confidential</h3>
              <p className="text-gray-600">Your privacy is protected with end-to-end encryption and HIPAA compliance.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Emergency support and AI assistance available around the clock.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Wellness Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards better mental health today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Book Your First Session
            </Link>
            <Link 
              to="/emergency" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              Need Immediate Help?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;