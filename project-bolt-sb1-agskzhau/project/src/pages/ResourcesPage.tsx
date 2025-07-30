import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, FileText, Play, Download, Clock, User, Tag } from 'lucide-react';

const resources = [
  {
    id: '1',
    title: 'Understanding Anxiety: A Complete Guide',
    type: 'article',
    category: 'Mental Health',
    author: 'Dr. Sarah Chen',
    readTime: '8 min read',
    thumbnail: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'Learn about different types of anxiety disorders, their symptoms, and effective coping strategies.',
    tags: ['anxiety', 'mental health', 'coping strategies']
  },
  {
    id: '2',
    title: 'Mindfulness Meditation for Beginners',
    type: 'video',
    category: 'Self-Care',
    author: 'Michael Rodriguez',
    duration: '15:23',
    thumbnail: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'A guided meditation session perfect for those new to mindfulness practices.',
    tags: ['meditation', 'mindfulness', 'relaxation']
  },
  {
    id: '3',
    title: 'Building Healthy Relationships Workbook',
    type: 'pdf',
    category: 'Relationships',
    author: 'Dr. Ashley Johnson',
    pages: '24 pages',
    thumbnail: 'https://images.pexels.com/photos/7176315/pexels-photo-7176315.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'Interactive exercises and worksheets to improve communication and strengthen relationships.',
    tags: ['relationships', 'communication', 'worksheets']
  },
  {
    id: '4',
    title: 'Stress Management Techniques',
    type: 'article',
    category: 'Mental Health',
    author: 'Dr. James Wilson',
    readTime: '6 min read',
    thumbnail: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'Practical strategies for managing stress in daily life and work environments.',
    tags: ['stress', 'work-life balance', 'productivity']
  },
  {
    id: '5',
    title: 'Depression Recovery: Hope and Healing',
    type: 'video',
    category: 'Mental Health',
    author: 'Dr. Maria Garcia',
    duration: '22:17',
    thumbnail: 'https://images.pexels.com/photos/4101175/pexels-photo-4101175.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'Understanding depression and the journey to recovery with expert insights.',
    tags: ['depression', 'recovery', 'hope']
  },
  {
    id: '6',
    title: 'LGBTQ+ Mental Health Resource Guide',
    type: 'pdf',
    category: 'LGBTQ+ Support',
    author: 'Dr. Alex Thompson',
    pages: '18 pages',
    thumbnail: 'https://images.pexels.com/photos/7176315/pexels-photo-7176315.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'Comprehensive guide addressing unique mental health challenges faced by LGBTQ+ individuals.',
    tags: ['lgbtq+', 'identity', 'support']
  }
];

const categories = ['All', 'Mental Health', 'Self-Care', 'Relationships', 'LGBTQ+ Support', 'Parenting'];
const resourceTypes = ['All', 'article', 'video', 'pdf'];

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesType = selectedType === 'All' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'article': return FileText;
      case 'video': return Play;
      case 'pdf': return Download;
      default: return FileText;
    }
  };

  const getResourceMeta = (resource: any) => {
    switch (resource.type) {
      case 'article':
        return resource.readTime;
      case 'video':
        return resource.duration;
      case 'pdf':
        return resource.pages;
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Wellness Resources</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of articles, videos, and downloadable resources 
            to support your mental health journey.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {resourceTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'All' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-gray-600">
            Showing {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => {
            const ResourceIcon = getResourceIcon(resource.type);
            
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="relative">
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${
                      resource.type === 'article' ? 'bg-blue-100 text-blue-800' :
                      resource.type === 'video' ? 'bg-red-100 text-red-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      <ResourceIcon className="h-3 w-3" />
                      <span className="capitalize">{resource.type}</span>
                    </div>
                  </div>
                  {resource.type === 'video' && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-white bg-opacity-90 p-4 rounded-full">
                        <Play className="h-6 w-6 text-blue-600" />
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {resource.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {getResourceMeta(resource)}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {resource.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {resource.author}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="flex items-center px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    {resource.type === 'video' ? 'Watch Now' :
                     resource.type === 'pdf' ? 'Download' : 'Read Article'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedType('All');
              }}
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;