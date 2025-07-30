import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Clock } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-green-500 p-3 rounded-xl">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Your privacy and security are fundamental to everything we do at Feelora
          </p>
          <div className="flex items-center justify-center text-sm text-gray-500 mt-4">
            <Clock className="h-4 w-4 mr-2" />
            Last updated: January 1, 2025
          </div>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 rounded-2xl p-8 mb-12 border border-blue-200"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <Lock className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">HIPAA Compliant</h3>
                <p className="text-gray-600 text-sm">All health information is protected under HIPAA regulations</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">End-to-End Encryption</h3>
                <p className="text-gray-600 text-sm">Your conversations are encrypted and secure</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Eye className="h-6 w-6 text-purple-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">No Data Selling</h3>
                <p className="text-gray-600 text-sm">We never sell your personal information to third parties</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-blue-600" />
              Information We Collect
            </h2>
            <div className="prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                When you create an account with Feelora, we collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Name and email address</li>
                <li>Account credentials (encrypted passwords)</li>
                <li>Profile preferences and settings</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Health Information</h3>
              <p className="text-gray-700 mb-4">
                As a healthcare service, we collect protected health information (PHI) including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Session notes and counseling records</li>
                <li>AI chat conversations related to mental health</li>
                <li>Assessment results and progress tracking</li>
                <li>Emergency contact information when provided</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Information</h3>
              <p className="text-gray-700 mb-4">
                We automatically collect certain technical information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Device information and browser type</li>
                <li>IP address and location data (city/state level only)</li>
                <li>Usage patterns and session duration</li>
                <li>Error reports and performance metrics</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                We use your information solely to provide and improve our mental health services:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Service Delivery:</strong> Matching you with appropriate counselors and providing AI support</li>
                <li><strong>Treatment Records:</strong> Maintaining session notes and progress tracking for continuity of care</li>
                <li><strong>Safety & Crisis Support:</strong> Ensuring appropriate emergency response when needed</li>
                <li><strong>Platform Improvement:</strong> Analyzing usage patterns to enhance user experience (anonymized data only)</li>
                <li><strong>Communication:</strong> Sending appointment reminders and important service updates</li>
                <li><strong>Billing:</strong> Processing payments and insurance claims</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing & Disclosure</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                We take your privacy seriously and limit information sharing to these specific circumstances:
              </p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">With Your Consent</h3>
              <p className="text-gray-700 mb-4">
                We may share your information when you explicitly authorize us to do so, such as coordinating care with your other healthcare providers.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Requirements</h3>
              <p className="text-gray-700 mb-4">
                We may disclose information when required by law or to protect safety:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Court orders or legal proceedings</li>
                <li>Imminent threat to self or others</li>
                <li>Suspected child or elder abuse (as required by law)</li>
                <li>Public health emergencies</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Providers</h3>
              <p className="text-gray-700 mb-4">
                We work with trusted third-party providers who assist in delivering our services. These partners are bound by strict confidentiality agreements and can only access information necessary for their specific functions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                We implement industry-leading security measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Encryption:</strong> All data is encrypted in transit and at rest using AES-256 encryption</li>
                <li><strong>Access Controls:</strong> Strict role-based access with multi-factor authentication</li>
                <li><strong>Regular Audits:</strong> Quarterly security assessments and penetration testing</li>
                <li><strong>Staff Training:</strong> Comprehensive privacy and security training for all team members</li>
                <li><strong>Incident Response:</strong> 24/7 monitoring and rapid response protocols</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights & Choices</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                You have important rights regarding your personal and health information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request copies of your information and session records</li>
                <li><strong>Correction:</strong> Request corrections to inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                <li><strong>Portability:</strong> Export your data in a standard format</li>
                <li><strong>Communication Preferences:</strong> Opt-out of non-essential communications</li>
                <li><strong>Restriction:</strong> Request limits on how we use your information</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise any of these rights, please contact our Privacy Officer at privacy@feelora.com.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                We retain your information only as long as necessary:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Active Accounts:</strong> Information is retained while your account is active</li>
                <li><strong>Clinical Records:</strong> Session notes retained for 7 years as required by law</li>
                <li><strong>Billing Records:</strong> Financial information retained for 7 years for tax and audit purposes</li>
                <li><strong>Marketing Data:</strong> Deleted immediately upon opt-out request</li>
                <li><strong>Technical Logs:</strong> Automatically deleted after 90 days</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Users</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                Feelora is based in the United States and operates under U.S. privacy laws. If you are accessing our services from outside the U.S., please be aware that your information will be transferred to and processed in the United States. We implement appropriate safeguards to protect your privacy regardless of location.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes via email and prominently display the updated policy on our website. Your continued use of Feelora after changes become effective constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 mb-2"><strong>Privacy Officer</strong></p>
                <p className="text-gray-700 mb-1">Email: privacy@feelora.com</p>
                <p className="text-gray-700 mb-1">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-700">
                  Mail: Feelora Privacy Officer<br />
                  123 Wellness Street, Suite 456<br />
                  San Francisco, CA 94102
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;