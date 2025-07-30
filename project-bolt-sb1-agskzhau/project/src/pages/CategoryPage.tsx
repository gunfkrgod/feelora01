import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Play, FileText, Calendar, Star, Clock, Users } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState<'counselors' | 'articles' | 'videos' | 'tools'>('counselors');

  // Mock data - in a real app, this would come from your API
  const categoryData = {
    'mental-health': {
      title: 'Mental Health Support',
      description: 'Professional support for anxiety, depression, stress, and other mental health concerns.',
      counselors: [
        {
          id: '1',
          name: 'Dr. Sarah Chen',
          title: 'Licensed Clinical Psychologist',
          specialties: ['Anxiety', 'Depression', 'Trauma'],
          rating: 4.9,
          image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300',
          price: 120
        },
        {
          id: '2',
          name: 'Dr. Marcus Johnson',
          title: 'Psychiatrist',
          specialties: ['Depression', 'Bipolar', 'Anxiety'],
          rating: 4.8,
          image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300',
          price: 150
        }
      ],
      articles: [
        {
          id: '1',
          title: 'Understanding Anxiety: Signs, Symptoms, and Solutions',
          excerpt: 'Learn about the different types of anxiety disorders and effective coping strategies.',
          readTime: '5 min read',
          author: 'Dr. Sarah Chen'
        },
        {
          id: '2',
          title: 'Depression vs. Sadness: When to Seek Help',
          excerpt: 'Understanding the difference between temporary sadness and clinical depression.',
          readTime: '7 min read',
          author: 'Dr. Marcus Johnson'
        }
      ],
      videos: [
        {
          id: '1',
          title: 'Breathing Techniques for Anxiety Relief',
          duration: '8:32',
          thumbnail: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=300',
          instructor: 'Dr. Sarah Chen'
        },
        {
          id: '2',
          title: 'Understanding Your Mental Health Journey',
          duration: '12:45',
          thumbnail: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=300',
          instructor: 'Dr. Marcus Johnson'
        }
      ],
      tools: [
        {
          id: '1',
          title: 'Mood Tracker',
          description: 'Track your daily mood and identify patterns over time.',
          type: 'Interactive Tool'
        },
        {
          id: '2',
          title: 'Anxiety Assessment',
          description: 'Quick self-assessment to understand your anxiety levels.',
          type: 'Assessment'
        }
      ]
    }
  };

  const category = categoryData[slug as keyof typeof categoryData] || categoryData['mental-health'];

  const tabs = [
    { key: 'counselors', label: 'Counselors', icon: User },
    { key: 'articles', label: 'Articles', icon: FileText },
    { key: 'videos', label: 'Videos', icon: Play },
    { key: 'tools', label: 'Tools', icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {category.description}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 mb-8"
        >
          <div className="flex flex-col sm:flex-row">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {activeTab === 'counselors' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.counselors.map((counselor) => (
                <div key={counselor.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all">
                  <div className="text-center mb-4">
                    <img
                      src={counselor.image}
                      alt={counselor.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-lg font-bold text-gray-900">{counselor.name}</h3>
                    <p className="text-gray-600 text-sm">{counselor.title}</p>
                  </div>
                  
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(counselor.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{counselor.rating}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {counselor.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900 mb-4">${counselor.price}/session</div>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                      Book Session
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'articles' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.articles.map((article) => (
                <div key={article.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.videos.map((video) => (
                <div key={video.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <button className="bg-white bg-opacity-90 p-4 rounded-full hover:bg-opacity-100 transition-all">
                        <Play className="h-8 w-8 text-blue-600" />
                      </button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-1" />
                      {video.instructor}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tools' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.tools.map((tool) => (
                <div key={tool.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{tool.title}</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {tool.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{tool.description}</p>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    Use Tool
                  </button>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryPage;