import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertTriangle, Clock, Shield } from 'lucide-react';

const TermsPage: React.FC = () => {
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
              <FileText className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using Feelora
          </p>
          <div className="flex items-center justify-center text-sm text-gray-500 mt-4">
            <Clock className="h-4 w-4 mr-2" />
            Last updated: January 1, 2025
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-red-50 rounded-2xl p-8 mb-12 border border-red-200"
        >
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-8 w-8 text-red-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Important Notice</h2>
              <p className="text-gray-700 mb-4">
                Feelora provides mental health support services but is not a substitute for emergency medical care. 
                If you are experiencing a mental health emergency or having thoughts of self-harm, please:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Call 911 or go to your nearest emergency room</li>
                <li>Call the 988 Suicide & Crisis Lifeline</li>
                <li>Contact your local emergency services</li>
              </ul>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                By accessing or using Feelora's services, you agree to be bound by these Terms of Service and our Privacy Policy. 
                If you do not agree with any part of these terms, you may not use our services.
              </p>
              <p className="text-gray-700">
                These terms apply to all users of the service, including visitors, registered users, counselors, and administrators.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                Feelora provides online mental health and wellness services, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>AI-powered mental health support and guidance</li>
                <li>Connection with licensed mental health professionals</li>
                <li>Online counseling sessions (video, phone, or text)</li>
                <li>Mental health resources and educational materials</li>
                <li>Group therapy sessions and support communities</li>
                <li>Crisis support and emergency resources</li>
              </ul>
              <p className="text-gray-700">
                Our services are designed to support mental wellness but do not replace in-person emergency care or crisis intervention.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Eligibility</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                To use Feelora, you must:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Be at least 18 years old (minors require parental consent)</li>
                <li>Have the legal capacity to enter into binding agreements</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the service in compliance with applicable laws and regulations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Account Registration & Security</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                When you create an account with Feelora:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>You must provide accurate, current, and complete information</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You must notify us immediately of any unauthorized use</li>
                <li>You may not share your account with others</li>
                <li>You may not create multiple accounts without permission</li>
              </ul>
              <p className="text-gray-700">
                We reserve the right to suspend or terminate accounts that violate these terms or are used inappropriately.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Professional Services & Limitations</h2>
            <div className="prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Licensed Counselors</h3>
              <p className="text-gray-700 mb-4">
                Our licensed mental health professionals are independent contractors who provide services through our platform. 
                Each counselor is responsible for their own professional conduct and adherence to applicable licensing requirements.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Assistant</h3>
              <p className="text-gray-700 mb-4">
                Our AI assistant provides general mental health information and support but cannot:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Provide professional medical or psychiatric diagnoses</li>
                <li>Prescribe medications or treatments</li>
                <li>Replace professional therapy or counseling</li>
                <li>Handle emergency or crisis situations</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Limitations</h3>
              <p className="text-gray-700">
                Feelora is not appropriate for individuals who require emergency psychiatric care, are at risk of self-harm, 
                or need intensive in-person treatment. We may terminate services if we determine our platform cannot adequately 
                meet a user's clinical needs.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Conduct & Responsibilities</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                Users agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Use the service only for lawful purposes</li>
                <li>Treat all staff and other users with respect</li>
                <li>Provide honest and accurate information about their mental health</li>
                <li>Attend scheduled sessions or provide reasonable notice of cancellation</li>
                <li>Maintain appropriate boundaries in professional relationships</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Users agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Harass, threaten, or abuse staff or other users</li>
                <li>Share or distribute content from sessions without consent</li>
                <li>Attempt to contact counselors outside the platform</li>
                <li>Use the service to harm themselves or others</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Reverse engineer or attempt to access unauthorized areas of the platform</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment Terms</h2>
            <div className="prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fees & Billing</h3>
              <p className="text-gray-700 mb-4">
                Service fees are clearly displayed before booking and may vary by counselor and session type. 
                Payment is required at the time of booking unless other arrangements are made.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cancellation & Refunds</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Cancellations made 24+ hours in advance receive full refunds</li>
                <li>Cancellations made less than 24 hours in advance may incur fees</li>
                <li>No-shows are charged the full session fee</li>
                <li>Emergency cancellations are handled case-by-case</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Insurance</h3>
              <p className="text-gray-700">
                We work with many insurance providers and will help verify your benefits. 
                You are responsible for any copays, deductibles, or non-covered services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacy & Confidentiality</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                Your privacy is protected under HIPAA and our Privacy Policy. However, confidentiality has legal limits:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Imminent risk of harm to self or others</li>
                <li>Suspected abuse of children, elderly, or disabled persons</li>
                <li>Court orders or legal proceedings</li>
                <li>When you provide written consent for disclosure</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Intellectual Property</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                All content on Feelora, including text, graphics, logos, software, and other materials, 
                is owned by Feelora or our licensors and protected by copyright and other intellectual property laws.
              </p>
              <p className="text-gray-700">
                You may not reproduce, distribute, modify, or create derivative works of our content without express written permission.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimers & Limitation of Liability</h2>
            <div className="prose prose-gray max-w-none">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Important Disclaimer</h3>
                    <p className="text-gray-700 text-sm">
                      Feelora services are provided "as is" without warranties of any kind. 
                      We cannot guarantee specific outcomes from therapy or counseling services.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                To the fullest extent permitted by law, Feelora and its affiliates disclaim all warranties 
                and limit liability for damages arising from use of our services.
              </p>
              <p className="text-gray-700">
                Our total liability to you for any claims shall not exceed the amount you paid for services 
                in the 12 months preceding the claim.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                Either party may terminate the service relationship:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Users may cancel their account at any time through account settings</li>
                <li>We may terminate accounts for violations of these terms</li>
                <li>Counselors may end therapeutic relationships with appropriate notice</li>
                <li>We may suspend services for non-payment or inappropriate conduct</li>
              </ul>
              <p className="text-gray-700">
                Upon termination, your access to the service will cease, but certain provisions of these terms will survive.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700">
                We may modify these terms at any time by posting updated terms on our website. 
                Continued use of our services after changes become effective constitutes acceptance of the new terms. 
                We will notify users of material changes via email or platform notification.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 mb-2"><strong>Legal Department</strong></p>
                <p className="text-gray-700 mb-1">Email: legal@feelora.com</p>
                <p className="text-gray-700 mb-1">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-700">
                  Mail: Feelora Legal Department<br />
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

export default TermsPage;