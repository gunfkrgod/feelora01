import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Star, Filter, Search, MapPin, Video, MessageCircle } from 'lucide-react';

interface Counselor {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  image: string;
  availability: string[];
  price: number;
  location: string;
  sessionTypes: ('video' | 'phone' | 'in-person')[];
  languages: string[];
}

const counselors: Counselor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    title: 'Licensed Clinical Psychologist',
    specialties: ['Anxiety', 'Depression', 'Trauma'],
    rating: 4.9,
    reviewCount: 127,
    image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: ['Today 2:00 PM', 'Tomorrow 10:00 AM', 'Friday 3:00 PM'],
    price: 120,
    location: 'San Francisco, CA',
    sessionTypes: ['video', 'phone', 'in-person'],
    languages: ['English', 'Mandarin']
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    title: 'Licensed Marriage & Family Therapist',
    specialties: ['Relationships', 'Couples Therapy', 'Family Counseling'],
    rating: 4.8,
    reviewCount: 89,
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: ['Today 4:00 PM', 'Tomorrow 2:00 PM', 'Monday 11:00 AM'],
    price: 110,
    location: 'Los Angeles, CA',
    sessionTypes: ['video', 'in-person'],
    languages: ['English', 'Spanish']
  },
  {
    id: '3',
    name: 'Dr. Ashley Johnson',
    title: 'Clinical Social Worker',
    specialties: ['LGBTQ+ Support', 'Identity', 'Coming Out'],
    rating: 5.0,
    reviewCount: 156,
    image: 'https://images.pexels.com/photos/5327589/pexels-photo-5327589.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: ['Tomorrow 9:00 AM', 'Friday 1:00 PM', 'Saturday 10:00 AM'],
    price: 95,
    location: 'Seattle, WA',
    sessionTypes: ['video', 'phone'],
    languages: ['English']
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    title: 'Psychiatrist & Therapist',
    specialties: ['Career Counseling', 'Work Stress', 'Leadership'],
    rating: 4.7,
    reviewCount: 73,
    image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
    availability: ['Today 6:00 PM', 'Monday 9:00 AM', 'Tuesday 3:00 PM'],
    price: 140,
    location: 'New York, NY',
    sessionTypes: ['video', 'phone', 'in-person'],
    languages: ['English']
  }
];

const BookingPage: React.FC = () => {
  const [selectedCounselor, setSelectedCounselor] = useState<Counselor | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [sessionType, setSessionType] = useState<'video' | 'phone' | 'in-person'>('video');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const specialties = ['All', 'Anxiety', 'Depression', 'Trauma', 'Relationships', 'LGBTQ+ Support', 'Career Counseling'];

  const filteredCounselors = counselors.filter(counselor => {
    const matchesSearch = counselor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         counselor.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSpecialty = selectedSpecialty === '' || selectedSpecialty === 'All' ||
                            counselor.specialties.includes(selectedSpecialty);
    return matchesSearch && matchesSpecialty;
  });

  const handleBookSession = () => {
    if (selectedCounselor && selectedTime) {
      alert(`Booking confirmed with ${selectedCounselor.name} on ${selectedTime} via ${sessionType}`);
      // Here you would typically integrate with a booking system
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Counseling Session</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with verified, licensed counselors who specialize in your needs. 
            All sessions are confidential and available online or in-person.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty === 'All' ? '' : specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Counselors List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Available Counselors</h2>
            
            {filteredCounselors.map((counselor, index) => (
              <motion.div
                key={counselor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-sm border-2 transition-all cursor-pointer ${
                  selectedCounselor?.id === counselor.id 
                    ? 'border-blue-500 shadow-lg' 
                    : 'border-gray-100 hover:border-blue-200 hover:shadow-md'
                }`}
                onClick={() => setSelectedCounselor(counselor)}
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={counselor.image}
                      alt={counselor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{counselor.name}</h3>
                          <p className="text-gray-600 text-sm">{counselor.title}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-gray-900">${counselor.price}</div>
                          <div className="text-sm text-gray-600">per session</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center mt-2 mb-3">
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
                        <span className="ml-2 text-sm text-gray-600">
                          {counselor.rating} ({counselor.reviewCount} reviews)
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {counselor.specialties.slice(0, 3).map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {counselor.location}
                        </div>
                        <div className="flex items-center space-x-3">
                          {counselor.sessionTypes.includes('video') && (
                            <Video className="h-4 w-4 text-blue-600" title="Video sessions" />
                          )}
                          {counselor.sessionTypes.includes('phone') && (
                            <MessageCircle className="h-4 w-4 text-green-600" title="Phone sessions" />
                          )}
                          {counselor.sessionTypes.includes('in-person') && (
                            <User className="h-4 w-4 text-purple-600" title="In-person sessions" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Booking Panel */}
          <div className="lg:sticky lg:top-6">
            {selectedCounselor ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Book with {selectedCounselor.name}</h3>
                
                {/* Session Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Session Type</label>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedCounselor.sessionTypes.map((type) => (
                      <label
                        key={type}
                        className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                          sessionType === type
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="sessionType"
                          value={type}
                          checked={sessionType === type}
                          onChange={(e) => setSessionType(e.target.value as any)}
                          className="mr-3"
                        />
                        <span className="capitalize font-medium">{type.replace('-', ' ')}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Available Times */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Available Times</label>
                  <div className="space-y-2">
                    {selectedCounselor.availability.map((time, idx) => (
                      <label
                        key={idx}
                        className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                          selectedTime === time
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="time"
                          value={time}
                          checked={selectedTime === time}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="mr-3"
                        />
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{time}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Booking Summary */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Booking Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Counselor:</span>
                      <span>{selectedCounselor.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Session Type:</span>
                      <span className="capitalize">{sessionType.replace('-', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span>{selectedTime || 'Not selected'}</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Total:</span>
                      <span>${selectedCounselor.price}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleBookSession}
                  disabled={!selectedTime}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Book Session
                </button>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  You can cancel or reschedule up to 24 hours before your session
                </p>
              </motion.div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
                <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a Counselor</h3>
                <p className="text-gray-600">Choose a counselor from the list to view available times and book your session.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;