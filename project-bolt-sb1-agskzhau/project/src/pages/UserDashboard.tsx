import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, User, BarChart3, Heart, Clock, Star, CheckCircle } from 'lucide-react';

const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'sessions' | 'progress' | 'profile'>('overview');

  // Mock data - would come from API in real app
  const userData = {
    name: 'Sarah Johnson',
    memberSince: '2024-06-15',
    upcomingSessions: [
      {
        id: '1',
        counselor: 'Dr. Sarah Chen',
        date: '2025-01-15',
        time: '2:00 PM',
        type: 'Video Call',
        topic: 'Anxiety Management'
      },
      {
        id: '2',
        counselor: 'Michael Rodriguez',
        date: '2025-01-18',
        time: '10:00 AM',
        type: 'Phone Call',
        topic: 'Work Stress'
      }
    ],
    recentSessions: [
      {
        id: '1',
        counselor: 'Dr. Sarah Chen',
        date: '2025-01-08',
        rating: 5,
        notes: 'Great session on breathing techniques'
      },
      {
        id: '2',
        counselor: 'Michael Rodriguez',
        date: '2025-01-05',
        rating: 4,
        notes: 'Helpful discussion about workplace boundaries'
      }
    ],
    moodData: [
      { date: '2025-01-01', mood: 7 },
      { date: '2025-01-02', mood: 6 },
      { date: '2025-01-03', mood: 8 },
      { date: '2025-01-04', mood: 7 },
      { date: '2025-01-05', mood: 9 },
      { date: '2025-01-06', mood: 8 },
      { date: '2025-01-07', mood: 7 }
    ],
    streakDays: 12,
    totalSessions: 15,
    aiChats: 47
  };

  const tabs = [
    { key: 'overview', label: 'Overview', icon: BarChart3 },
    { key: 'sessions', label: 'Sessions', icon: Calendar },
    { key: 'progress', label: 'Progress', icon: Heart },
    { key: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {userData.name}!</h1>
          <p className="text-gray-600">Here's your wellness dashboard</p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Wellness Streak</p>
                <p className="text-2xl font-bold text-orange-600">{userData.streakDays} days</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Heart className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Sessions</p>
                <p className="text-2xl font-bold text-blue-600">{userData.totalSessions}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">AI Conversations</p>
                <p className="text-2xl font-bold text-green-600">{userData.aiChats}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Mood</p>
                <p className="text-2xl font-bold text-purple-600">7.4/10</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
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

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upcoming Sessions */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Sessions</h3>
                <div className="space-y-4">
                  {userData.upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                      <div>
                        <h4 className="font-semibold text-gray-900">{session.counselor}</h4>
                        <p className="text-sm text-gray-600">{session.topic}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(session.date).toLocaleDateString()} at {session.time}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {session.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  Book New Session
                </button>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Sessions</h3>
                <div className="space-y-4">
                  {userData.recentSessions.map((session) => (
                    <div key={session.id} className="p-4 border border-gray-200 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{session.counselor}</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < session.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{session.notes}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {new Date(session.date).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sessions' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Session History</h3>
                <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  Book New Session
                </button>
              </div>
              
              <div className="space-y-4">
                {[...userData.recentSessions, ...userData.upcomingSessions].map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-6 border border-gray-200 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <User className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{session.counselor}</h4>
                        <p className="text-gray-600">{session.topic || 'General Session'}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(session.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      {'rating' in session ? (
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < session.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      ) : (
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          Upcoming
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mood Tracking */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Mood Tracking</h3>
                <div className="space-y-4">
                  {userData.moodData.slice(-5).map((entry, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-600">{new Date(entry.date).toLocaleDateString()}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-600 to-green-500 h-2 rounded-full" 
                            style={{ width: `${entry.mood * 10}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{entry.mood}/10</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all">
                  Log Today's Mood
                </button>
              </div>

              {/* Goals & Achievements */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Goals & Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">7-Day Wellness Streak</h4>
                      <p className="text-sm text-gray-600">Completed daily check-ins</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">First Session Complete</h4>
                      <p className="text-sm text-gray-600">Attended your first counseling session</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl">
                    <div className="w-6 h-6 border-2 border-purple-300 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mindfulness Master</h4>
                      <p className="text-sm text-gray-600">Complete 10 meditation sessions</p>
                      <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                        <div className="bg-purple-600 h-1 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Profile Settings</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={userData.name}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value="sarah.johnson@email.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value="+1 (555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Session Type</label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Video Call</option>
                      <option>Phone Call</option>
                      <option>Text Chat</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Eastern Time (ET)</option>
                      <option>Central Time (CT)</option>
                      <option>Mountain Time (MT)</option>
                      <option>Pacific Time (PT)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                    <input
                      type="text"
                      placeholder="Name and phone number"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  Save Changes
                </button>
                <button className="border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                  Cancel
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default UserDashboard;