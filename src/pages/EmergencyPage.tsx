import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Shield, Clock, Heart, AlertTriangle } from 'lucide-react';

const emergencyContacts = [
  {
    name: 'National Suicide Prevention Lifeline',
    number: '988',
    description: '24/7 free and confidential support for people in distress',
    type: 'Crisis'
  },
  {
    name: 'Crisis Text Line',
    number: 'Text HOME to 741741',
    description: 'Free, 24/7 support via text message',
    type: 'Text'
  },
  {
    name: 'National Domestic Violence Hotline',
    number: '1-800-799-7233',
    description: '24/7 confidential support for domestic violence survivors',
    type: 'Crisis'
  },
  {
    name: 'SAMHSA National Helpline',
    number: '1-800-662-4357',
    description: 'Treatment referral and information service',
    type: 'Support'
  },
  {
    name: 'Emergency Services',
    number: '911',
    description: 'For immediate life-threatening emergencies',
    type: 'Emergency'
  }
];

const warningSignsList = [
  'Thoughts of suicide or self-harm',
  'Feeling hopeless or trapped',
  'Extreme mood swings',
  'Talking about being a burden to others',
  'Increasing use of alcohol or drugs',
  'Withdrawing from friends and activities',
  'Giving away prized possessions',
  'Saying goodbye to loved ones'
];

const EmergencyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
            <h1 className="text-xl font-bold">Emergency Mental Health Support</h1>
            <p className="mt-2 opacity-90">If you're in immediate danger, call 911 or go to your nearest emergency room</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Immediate Help Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500"
          >
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Immediate Crisis Support</h2>
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              If you're having thoughts of suicide or self-harm, please reach out for help immediately. 
              You are not alone, and support is available 24/7.
            </p>
            
            <div className="bg-red-50 rounded-xl p-6 mb-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-red-800 mb-3">Crisis Hotline</h3>
                <a 
                  href="tel:988" 
                  className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-2xl hover:bg-red-700 transition-all"
                >
                  <Phone className="h-6 w-6 mr-3" />
                  988
                </a>
                <p className="text-red-700 mt-3 font-medium">Suicide & Crisis Lifeline - Free & Confidential</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="sms:741741?body=HOME"
                className="flex items-center justify-center bg-blue-100 text-blue-800 p-4 rounded-xl hover:bg-blue-200 transition-all"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                <span className="font-semibold">Text HOME to 741741</span>
              </a>
              <a 
                href="tel:911"
                className="flex items-center justify-center bg-red-100 text-red-800 p-4 rounded-xl hover:bg-red-200 transition-all"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span className="font-semibold">Call 911 (Emergencies)</span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Emergency Contacts */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Crisis Support Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyContacts.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{contact.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      contact.type === 'Emergency' ? 'bg-red-100 text-red-800' :
                      contact.type === 'Crisis' ? 'bg-orange-100 text-orange-800' :
                      contact.type === 'Text' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {contact.type}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <a 
                      href={contact.number.includes('Text') ? `sms:741741?body=HOME` : `tel:${contact.number.replace(/[^\d]/g, '')}`}
                      className="text-2xl font-bold text-blue-600 hover:text-blue-700"
                    >
                      {contact.number}
                    </a>
                  </div>
                  
                  <p className="text-gray-600">{contact.description}</p>
                  
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Available 24/7</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Warning Signs */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 text-orange-500 mr-3" />
                Warning Signs to Watch For
              </h2>
              
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <p className="text-gray-700 mb-6">
                  If you or someone you know is experiencing these signs, it's important to seek help immediately:
                </p>
                
                <ul className="space-y-3">
                  {warningSignsList.map((sign, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="h-6 w-6 text-green-500 mr-3" />
                How to Help Someone
              </h2>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <p className="text-gray-700 mb-6">
                  If someone you care about is struggling, here's how you can help:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Listen without judgment</h4>
                      <p className="text-gray-600 text-sm">Give them your full attention and let them know you care.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ask directly about suicide</h4>
                      <p className="text-gray-600 text-sm">It's okay to ask "Are you thinking about suicide?"</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Help them connect to support</h4>
                      <p className="text-gray-600 text-sm">Offer to help them call a crisis line or seek professional help.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Stay with them</h4>
                      <p className="text-gray-600 text-sm">Don't leave them alone if they're in immediate danger.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Self-Care */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Remember: You Are Not Alone</h2>
            <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
              Mental health struggles are real, but they are treatable. Seeking help is a sign of strength, 
              not weakness. Recovery is possible, and there are people who want to help you through this difficult time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:988"
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call 988 Now
              </a>
              <a 
                href="sms:741741?body=HOME"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all inline-flex items-center justify-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Text for Help
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default EmergencyPage;