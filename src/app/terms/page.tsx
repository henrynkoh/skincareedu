import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - SkincareEdu',
  description: 'SkincareEdu terms of service and legal information',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="mb-6">
        <Link href="/" className="text-primary hover:underline">← Back to Home</Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      
      <div className="prose max-w-none">
        <p className="mb-4">
          Welcome to SkincareEdu. Please read these Terms of Service carefully before using our website and services.
          By accessing or using SkincareEdu, you agree to be bound by these Terms.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using SkincareEdu, you agree to these Terms of Service. If you do not agree to all of these terms, 
          you may not use our services.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">2. Description of Service</h2>
        <p>
          SkincareEdu provides educational content related to skincare, ingredient analysis tools, skin monitoring services, 
          and community forums. We offer both free and premium content. We reserve the right to modify, suspend, or discontinue 
          any aspect of our services at any time.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">3. User Accounts</h2>
        <p>
          Some features of SkincareEdu require you to create an account. You agree to provide accurate information when registering
          and to keep your information updated. You are responsible for maintaining the confidentiality of your account credentials 
          and for all activities that occur under your account.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">4. User Content</h2>
        <p>
          Users may post content on our platform, including text, images, and other materials. By posting content, you grant 
          SkincareEdu a non-exclusive, royalty-free, worldwide license to use, modify, publicly display, and distribute such content 
          on our platform.
        </p>
        <p>
          You agree not to post content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, 
          invasive of another's privacy, or otherwise objectionable.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">5. Prohibited Activities</h2>
        <p>
          When using SkincareEdu, you agree not to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Violate any applicable laws or regulations</li>
          <li>Impersonate any person or entity</li>
          <li>Manipulate identifiers to disguise the origin of content</li>
          <li>Engage in any activity that interferes with or disrupts the services</li>
          <li>Upload viruses or malicious code</li>
          <li>Collect user information without consent</li>
          <li>Use the service for any commercial purpose without authorization</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">6. Intellectual Property</h2>
        <p>
          The content, organization, graphics, design, and other matters related to SkincareEdu are protected by applicable 
          copyrights and trademarks. Copying, redistribution, use, or publication of any such content or any part of our services
          is prohibited without express permission.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">7. Disclaimer of Warranties</h2>
        <p>
          SkincareEdu provides content for educational and informational purposes only. We do not provide medical advice. Always 
          consult with a healthcare professional before making any decisions related to your health.
        </p>
        <p>
          Our services are provided "as is" without any warranties, expressed or implied. We do not guarantee that our services 
          will be error-free, uninterrupted, or secure.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
        <p>
          In no event shall SkincareEdu, its operators, or affiliates be liable for any damages whatsoever, including direct, 
          indirect, incidental, special, consequential, or punitive damages, arising out of or related to your use of the service.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">9. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting an 
          announcement on our website or sending an email to registered users. Your continued use of SkincareEdu after any changes
          constitutes your acceptance of the new Terms.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">10. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which SkincareEdu 
          operates, without regard to its conflict of law provisions.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">11. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at support@skincareedu.com.
        </p>
        
        <div className="mt-8 text-sm text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
} 