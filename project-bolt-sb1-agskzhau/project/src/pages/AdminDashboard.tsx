import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, Calendar, DollarSign, Shield, Settings, BarChart3, AlertTriangle } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'content' | 'reports'>('overview');

  // Mock data - would come from API in real app
  const adminData = {
    totalUsers: 10247,
    activeCounselors: 523,
    sessionsToday: 89,
    monthlyRevenue: 124500,
    pendingApprovals: 12,
    recentActivity: [
      { type: 'user_signup', message: 'New user registered: Sarah M.', time: '2 minutes ago' },
      { type: 'counselor_application', message: 'Counselor application submitted: Dr. James Wilson', time: '15 minutes ago' },
      { type: 'session_completed', message: 'Session completed: Client A with Dr. Chen', time: '23 minutes ago' },
      { type: 'payment_processed', message: 'Payment processed: $120 for session #1234', time: '1 hour ago' }
    ],
    userGrowth: [
      { month: 'Jan', users: 8500 },
      { month: 'Feb', users: 9200 },
      { month: 'Mar', users: 9800 },
      { month: 'Apr', users: 10247 }
    ]
  };

  const tabs = [
    { key: 'overview', label: 'Overview', icon: BarChart3 },
    { key: 'users', label: 'User Management', icon: Users },
    { key: 'content', label: 'Content Management', icon: FileText },
    { key: 'reports', label: 'Reports', icon: DollarSign }
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage Feelora platform and monitor system health</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-red-700 transition-all flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4" />
              <span>Emergency Actions</span>
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>System Settings</span>
            </button>
          </div>
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
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-blue-600">{adminData.totalUsers.toLocaleString()}</p>
                <p className="text-sm text-green-600">+12% this month</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Counselors</p>
                <p className="text-2xl font-bold text-green-600">{adminData.activeCounselors}</p>
                <p className="text-sm text-green-600">+8% this month</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Sessions Today</p>
                <p className="text-2xl font-bold text-purple-600">{adminData.sessionsToday}</p>
                <p className="text-sm text-green-600">+5% vs yesterday</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Monthly Revenue</p>
                <p className="text-2xl font-bold text-orange-600">${adminData.monthlyRevenue.toLocaleString()}</p>
                <p className="text-sm text-green-600">+18% this month</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Alerts */}
        {adminData.pendingApprovals > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8"
          >
            <div className="flex items-center space-x-4">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Pending Actions Required</h3>
                <p className="text-gray-700">
                  {adminData.pendingApprovals} counselor applications awaiting review
                </p>
              </div>
              <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-all">
                Review Now
              </button>
            </div>
          </motion.div>
        )}

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
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
          transition={{ delay: 0.4 }}
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  {adminData.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className={`p-2 rounded-full ${
                        activity.type === 'user_signup' ? 'bg-blue-100' :
                        activity.type === 'counselor_application' ? 'bg-green-100' :
                        activity.type === 'session_completed' ? 'bg-purple-100' :
                        'bg-orange-100'
                      }`}>
                        {activity.type === 'user_signup' && <Users className="h-4 w-4 text-blue-600" />}
                        {activity.type === 'counselor_application' && <Shield className="h-4 w-4 text-green-600" />}
                        {activity.type === 'session_completed' && <Calendar className="h-4 w-4 text-purple-600" />}
                        {activity.type === 'payment_processed' && <DollarSign className="h-4 w-4 text-orange-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900">{activity.message}</p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Health */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">System Health</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Server Uptime</span>
                      <span className="text-green-600 font-semibold">99.9%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.9%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Database Performance</span>
                      <span className="text-green-600 font-semibold">Excellent</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">API Response Time</span>
                      <span className="text-yellow-600 font-semibold">120ms</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Storage Usage</span>
                      <span className="text-blue-600 font-semibold">67%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">User Management</h3>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    Export Users
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Regular Users</h4>
                  <p className="text-3xl font-bold text-blue-600">8,947</p>
                  <p className="text-sm text-gray-600">Active accounts</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Counselors</h4>
                  <p className="text-3xl font-bold text-green-600">523</p>
                  <p className="text-sm text-gray-600">Verified professionals</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Admins</h4>
                  <p className="text-3xl font-bold text-purple-600">12</p>
                  <p className="text-sm text-gray-600">Platform administrators</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Recent User Activity</h4>
                {[
                  { name: 'Sarah Johnson', email: 'sarah@email.com', role: 'User', status: 'Active', joined: '2025-01-10' },
                  { name: 'Dr. Michael Chen', email: 'mchen@email.com', role: 'Counselor', status: 'Pending', joined: '2025-01-09' },
                  { name: 'Emily Rodriguez', email: 'emily@email.com', role: 'User', status: 'Active', joined: '2025-01-08' },
                  { name: 'Dr. James Wilson', email: 'jwilson@email.com', role: 'Counselor', status: 'Active', joined: '2025-01-07' }
                ].map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-100 p-3 rounded-full">
                        <Users className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">{user.name}</h5>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <p className="text-xs text-gray-500">Joined: {new Date(user.joined).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        {user.role}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        user.status === 'Active' ? 'bg-green-100 text-green-800' :
                        user.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {user.status}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        Manage
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Content Management</h3>
                <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  Create New Content
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Articles</h4>
                  <p className="text-2xl font-bold text-blue-600">247</p>
                  <button className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Manage Articles
                  </button>
                </div>

                <div className="bg-green-50 rounded-xl p-6 text-center">
                  <Calendar className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Events</h4>
                  <p className="text-2xl font-bold text-green-600">34</p>
                  <button className="mt-3 text-green-600 hover:text-green-700 text-sm font-medium">
                    Manage Events
                  </button>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 text-center">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Resources</h4>
                  <p className="text-2xl font-bold text-purple-600">156</p>
                  <button className="mt-3 text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Manage Resources
                  </button>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 text-center">
                  <Settings className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Pages</h4>
                  <p className="text-2xl font-bold text-orange-600">12</p>
                  <button className="mt-3 text-orange-600 hover:text-orange-700 text-sm font-medium">
                    Manage Pages
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Content Updates</h4>
                  <div className="space-y-3">
                    {[
                      { title: 'Understanding Anxiety: A Complete Guide', type: 'Article', author: 'Dr. Sarah Chen', updated: '2 hours ago' },
                      { title: 'Mindfulness Workshop Series', type: 'Event', author: 'Admin', updated: '1 day ago' },
                      { title: 'Depression Recovery Resources', type: 'Resource', author: 'Dr. Michael Rodriguez', updated: '2 days ago' }
                    ].map((content, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div>
                          <h5 className="font-semibold text-gray-900">{content.title}</h5>
                          <p className="text-sm text-gray-600">
                            {content.type} • By {content.author} • {content.updated}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            Edit
                          </button>
                          <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Financial Reports</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                    <div>
                      <p className="text-sm text-gray-600">Total Revenue (YTD)</p>
                      <p className="text-2xl font-bold text-green-600">$1,247,500</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <div>
                      <p className="text-sm text-gray-600">Platform Fees Collected</p>
                      <p className="text-2xl font-bold text-blue-600">$187,125</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-blue-600" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                    <div>
                      <p className="text-sm text-gray-600">Counselor Payouts</p>
                      <p className="text-2xl font-bold text-purple-600">$1,060,375</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-purple-600" />
                  </div>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  Generate Financial Report
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Usage Analytics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Session Completion Rate</span>
                      <span className="text-green-600 font-semibold">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">User Satisfaction</span>
                      <span className="text-blue-600 font-semibold">4.8/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Platform Uptime</span>
                      <span className="text-green-600 font-semibold">99.9%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.9%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">AI Chat Usage</span>
                      <span className="text-purple-600 font-semibold">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all">
                  View Detailed Analytics
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;