import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, Video, Filter, Search } from 'lucide-react';

const events = [
  {
    id: '1',
    title: 'Managing Anxiety in Daily Life',
    type: 'webinar',
    date: '2025-01-15',
    time: '7:00 PM EST',
    duration: '60 minutes',
    instructor: 'Dr. Sarah Chen',
    capacity: 100,
    registered: 67,
    price: 'Free',
    description: 'Join us for an interactive webinar on practical strategies for managing anxiety in everyday situations.',
    image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Online',
    category: 'Mental Health'
  },
  {
    id: '2',
    title: 'Couples Communication Workshop',
    type: 'workshop',
    date: '2025-01-18',
    time: '2:00 PM EST',
    duration: '2 hours',
    instructor: 'Michael Rodriguez',
    capacity: 20,
    registered: 14,
    price: '$49',
    description: 'Interactive workshop for couples to improve communication skills and strengthen relationships.',
    image: 'https://images.pexels.com/photos/7176315/pexels-photo-7176315.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Online',
    category: 'Relationships'
  },
  {
    id: '3',
    title: 'LGBTQ+ Support Group Meeting',
    type: 'support-group',
    date: '2025-01-20',
    time: '6:00 PM EST',
    duration: '90 minutes',
    instructor: 'Dr. Ashley Johnson',
    capacity: 15,
    registered: 8,
    price: 'Free',
    description: 'Safe space for LGBTQ+ individuals to share experiences and support each other.',
    image: 'https://images.pexels.com/photos/5327589/pexels-photo-5327589.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Online',
    category: 'LGBTQ+ Support'
  },
  {
    id: '4',
    title: 'Mindfulness Meditation Session',
    type: 'group-session',
    date: '2025-01-22',
    time: '8:00 AM EST',
    duration: '45 minutes',
    instructor: 'Dr. Maria Garcia',
    capacity: 50,
    registered: 23,
    price: '$15',
    description: 'Start your week with a guided mindfulness meditation session to reduce stress and increase focus.',
    image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Online',
    category: 'Self-Care'
  },
  {
    id: '5',
    title: 'Parenting Teens: Navigating Challenges',
    type: 'webinar',
    date: '2025-01-25',
    time: '7:30 PM EST',
    duration: '90 minutes',
    instructor: 'Dr. James Wilson',
    capacity: 75,
    registered: 42,
    price: '$25',
    description: 'Expert guidance for parents dealing with teenage challenges and improving family communication.',
    image: 'https://images.pexels.com/photos/4101175/pexels-photo-4101175.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Online',
    category: 'Parenting'
  },
  {
    id: '6',
    title: 'Trauma Recovery Workshop',
    type: 'workshop',
    date: '2025-01-28',
    time: '1:00 PM EST',
    duration: '3 hours',
    instructor: 'Dr. Alex Thompson',
    capacity: 12,
    registered: 7,
    price: '$75',
    description: 'Intensive workshop focusing on healing strategies and building resilience after trauma.',
    image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Online',
    category: 'Trauma Support'
  }
];

const categories = ['All', 'Mental Health', 'Relationships', 'LGBTQ+ Support', 'Self-Care', 'Parenting', 'Trauma Support'];
const eventTypes = ['All', 'webinar', 'workshop', 'support-group', 'group-session'];

const EventsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesType = selectedType === 'All' || event.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case 'webinar': return 'Webinar';
      case 'workshop': return 'Workshop';
      case 'support-group': return 'Support Group';
      case 'group-session': return 'Group Session';
      default: return type;
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'webinar': return 'bg-blue-100 text-blue-800';
      case 'workshop': return 'bg-green-100 text-green-800';
      case 'support-group': return 'bg-purple-100 text-purple-800';
      case 'group-session': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Wellness Events & Workshops</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our community events, workshops, and support groups. Connect with others 
            on similar journeys and learn from expert facilitators.
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
                  placeholder="Search events..."
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
                {eventTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'All' ? 'All Types' : getEventTypeLabel(type)}
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
            Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                    {getEventTypeLabel(event.type)}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {event.price}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {event.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    {event.registered}/{event.capacity}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-3 text-blue-500" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-3 text-green-500" />
                    <span>{event.time} • {event.duration}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Video className="h-4 w-4 mr-3 text-purple-500" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-3 text-orange-500" />
                    <span>Facilitated by {event.instructor}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    Register Now
                  </button>
                  <button className="flex-1 border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                    Learn More
                  </button>
                </div>
                
                {event.registered >= event.capacity * 0.8 && (
                  <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <p className="text-sm text-orange-700 font-medium">
                      ⚡ Almost full! Only {event.capacity - event.registered} spots remaining
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters to find events that match your interests.
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

        {/* Upcoming Events CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-lg mb-6 opacity-90">
            Subscribe to our newsletter to get notified about new events and workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventsPage;