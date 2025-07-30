import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, DollarSign, Clock, MessageCircle, FileText, Star, CheckCircle } from 'lucide-react';

const CounselorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'schedule' | 'clients' | 'earnings'>('overview');

  // Mock data - would come from API in real app
  const counselorData = {
    name: 'Dr. Sarah Chen',
    specialties: ['Anxiety', 'Depression', 'Trauma'],
    rating: 4.9,
    totalClients: 47,
    sessionsThisWeek: 12,
    monthlyEarnings: 3240,
    upcomingSessions: [
      {
        id: '1',
        client: 'Client A',
        date: '2025-01-15',
        time: '2:00 PM',
        type: 'Video Call',
        topic: 'Anxiety Management'
      },
      {
        id: '2',
        client: 'Client B',
        date: '2025-01-15',
        time: '4:00 PM',
        type: 'Phone Call',
        topic: 'Depression Support'
      }
    ],
    recentSessions: [
      {
        id: '1',
        client: 'Client C',
        date: '2025-01-14',
        duration: '50 min',
        notes: 'Progress on breathing techniques',
        rating: 5
      },
      {
        id: '2',
        client: 'Client D',
        date: '2025-01-14',
        duration: '60 min',
        notes: 'Discussed workplace stress management',
        rating: 5
      }
    ],
    weeklySchedule: [
      { day: 'Monday', slots: 6, booked: 4 },
      { day: 'Tuesday', slots: 6, booked: 6 },
      { day: 'Wednesday', slots: 6, booked: 3 },
      { day: 'Thursday', slots: 6, booked: 5 },
      { day: 'Friday', slots: 6, booked: 4 },
      { day: 'Saturday', slots: 4, booked: 2 },
      { day: 'Sunday', slots: 0, booked: 0 }
    ]
  };

  const tabs = [
    { key: 'overview', label: 'Overview', icon: Users },
    { key: 'schedule', label: 'Schedule', icon: Calendar },
    { key: 'clients', label: 'Clients', icon: MessageCircle },
    { key: 'earnings', label: 'Earnings', icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{counselorData.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(counselorData.rating) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-gray-600">{counselorData.rating} rating</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {counselorData.specialties.map((specialty, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
            Update Availability
          </button>
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
                <p className="text-sm text-gray-600">Total Clients</p>
                <p className="text-2xl font-bold text-blue-600">{counselorData.totalClients}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Week</p>
                <p className="text-2xl font-bold text-green-600">{counselorData.sessionsThisWeek} sessions</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Monthly Earnings</p>
                <p className="text-2xl font-bold text-purple-600">${counselorData.monthlyEarnings}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average Rating</p>
                <p className="text-2xl font-bold text-orange-600">{counselorData.rating}/5.0</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Star className="h-6 w-6 text-orange-600" />
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
              {/* Today's Schedule */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Today's Schedule</h3>
                <div className="space-y-4">
                  {counselorData.upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                      <div>
                        <h4 className="font-semibold text-gray-900">{session.client}</h4>
                        <p className="text-sm text-gray-600">{session.topic}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Clock className="h-4 w-4 mr-1" />
                          {session.time}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {session.type}
                        </span>
                        <div className="mt-2">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            Join Session
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Sessions */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Sessions</h3>
                <div className="space-y-4">
                  {counselorData.recentSessions.map((session) => (
                    <div key={session.id} className="p-4 border border-gray-200 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{session.client}</h4>
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
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{new Date(session.date).toLocaleDateString()}</span>
                        <span>{session.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all">
                  View All Sessions
                </button>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Weekly Schedule</h3>
                <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  Update Availability
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {counselorData.weeklySchedule.map((day, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">{day.day}</h4>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-600">
                        Available: {day.slots} slots
                      </div>
                      <div className="text-sm text-green-600">
                        Booked: {day.booked} sessions
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-green-500 h-2 rounded-full" 
                          style={{ width: day.slots > 0 ? `${(day.booked / day.slots) * 100}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 bg-white rounded-lg hover:shadow-sm transition-all">
                      Block time for personal appointments
                    </button>
                    <button className="w-full text-left p-3 bg-white rounded-lg hover:shadow-sm transition-all">
                      Set recurring availability
                    </button>
                    <button className="w-full text-left p-3 bg-white rounded-lg hover:shadow-sm transition-all">
                      Manage session types and pricing
                    </button>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Schedule Statistics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Utilization Rate</span>
                      <span className="font-semibold">78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average Session Length</span>
                      <span className="font-semibold">52 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">No-show Rate</span>
                      <span className="font-semibold">3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'clients' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Client Management</h3>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Search clients..."
                    className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    Add Notes
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { id: 1, name: 'Client A', sessions: 8, lastSeen: '2025-01-14', status: 'Active' },
                  { id: 2, name: 'Client B', sessions: 12, lastSeen: '2025-01-13', status: 'Active' },
                  { id: 3, name: 'Client C', sessions: 5, lastSeen: '2025-01-10', status: 'Inactive' },
                  { id: 4, name: 'Client D', sessions: 15, lastSeen: '2025-01-14', status: 'Active' }
                ].map((client) => (
                  <div key={client.id} className="flex items-center justify-between p-6 border border-gray-200 rounded-xl hover:shadow-sm transition-all">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{client.name}</h4>
                        <p className="text-gray-600">{client.sessions} sessions completed</p>
                        <p className="text-sm text-gray-500">Last seen: {new Date(client.lastSeen).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        client.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {client.status}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'earnings' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Earnings Overview</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                    <div>
                      <p className="text-sm text-gray-600">This Month</p>
                      <p className="text-2xl font-bold text-green-600">${counselorData.monthlyEarnings}</p>
                    </div>
                    <div className="text-green-600">
                      <DollarSign className="h-8 w-8" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <div>
                      <p className="text-sm text-gray-600">Last Month</p>
                      <p className="text-2xl font-bold text-blue-600">$2,890</p>
                    </div>
                    <div className="text-blue-600">
                      <DollarSign className="h-8 w-8" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                    <div>
                      <p className="text-sm text-gray-600">Average per Session</p>
                      <p className="text-2xl font-bold text-purple-600">$120</p>
                    </div>
                    <div className="text-purple-600">
                      <DollarSign className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Information</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Bank Account</span>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-600">****1234</p>
                    <p className="text-sm text-gray-500">Next payout: January 20, 2025</p>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Tax Information</span>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-600">W-9 on file</p>
                    <p className="text-sm text-gray-500">Updated: December 2024</p>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    Download Tax Documents
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CounselorDashboard;