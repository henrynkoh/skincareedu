import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - SkincareEdu',
  description: 'SkincareEdu privacy policy and data protection information',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="mb-6">
        <Link href="/" className="text-primary hover:underline">← Back to Home</Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="prose max-w-none">
        <p className="mb-4">
          At SkincareEdu, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <p>We may collect information about you in a variety of ways:</p>
        
        <h3 className="text-lg font-medium mt-6 mb-3">1.1 Personal Data</h3>
        <p>
          When you register an account, we collect personally identifiable information, such as your name and email address.
          We may also collect demographic information such as your age, gender, skin type, and skincare concerns.
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-3">1.2 Derivative Data</h3>
        <p>
          Our servers automatically collect information when you access our website, such as your IP address, browser type, operating system, access times, and the pages you have viewed.
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-3">1.3 User Content</h3>
        <p>
          We collect information you voluntarily share through our website, including photos, progress tracking data, comments, and forum posts.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
        <p>We may use the information we collect about you for various purposes:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Create and manage your account</li>
          <li>Provide and deliver the services you request</li>
          <li>Personalize your experience</li>
          <li>Improve our website and services</li>
          <li>Communicate with you about your account or our services</li>
          <li>Monitor and analyze usage patterns</li>
          <li>Protect against unauthorized access to our services</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">3. Disclosure of Your Information</h2>
        <p>We may share information we have collected about you in certain situations:</p>
        
        <h3 className="text-lg font-medium mt-6 mb-3">3.1 Service Providers</h3>
        <p>
          We may share your information with third-party service providers to perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-3">3.2 Legal Requirements</h3>
        <p>
          We may disclose your information where required to do so by law or if we believe that such action is necessary to comply with a legal obligation, protect and defend our rights or property, or investigate potential violations of our Terms of Service.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">4. Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to protect your personal information. However, despite our safeguards, no system is completely secure, and we cannot guarantee the security of your information.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">5. Your Choices</h2>
        <h3 className="text-lg font-medium mt-6 mb-3">5.1 Account Information</h3>
        <p>
          You can review and change your account information by logging into your account settings. You may also delete your account, but note that some information may be retained in our files to prevent fraud, troubleshoot problems, assist with investigations, and enforce our Terms of Service.
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-3">5.2 Communications</h3>
        <p>
          You can opt out of receiving promotional emails from us by following the unsubscribe instructions in those emails. You may not opt out of service-related emails.
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-3">5.3 Cookies</h3>
        <p>
          Most web browsers are set to accept cookies by default. You can set your browser to refuse all or some browser cookies or to alert you when cookies are being sent.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">6. Children's Privacy</h2>
        <p>
          Our service is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <address className="not-italic mt-4">
          SkincareEdu<br />
          Email: privacy@skincareedu.com<br />
          1234 Skincare Ave.<br />
          Skincare City, SC 12345
        </address>
        
        <div className="mt-8 text-sm text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
} 