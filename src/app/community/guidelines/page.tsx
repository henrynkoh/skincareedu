import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Community Guidelines - SkincareEdu',
  description: 'Rules and expectations for participating in the SkincareEdu community',
};

export default function CommunityGuidelinesPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="mb-6">
        <Link href="/community" className="text-primary hover:underline">← Back to Community</Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Community Guidelines</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="mb-6">
          Welcome to the SkincareEdu community! Our goal is to create a supportive, informative, and positive environment 
          where members can discuss skincare routines, share experiences, and learn from each other. To ensure 
          this space remains beneficial for everyone, please follow these guidelines.
        </p>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-3">Be Respectful and Supportive</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium mb-2">Do:</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Treat all community members with respect and kindness</li>
                <li>Be supportive of others on their skincare journey</li>
                <li>Consider different perspectives and experiences</li>
                <li>Use constructive language when offering feedback</li>
              </ul>
              
              <h3 className="font-medium mb-2">Don't:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use hostile, offensive, or discriminatory language</li>
                <li>Mock or belittle others for their questions or experiences</li>
                <li>Engage in personal attacks or harassment</li>
                <li>Use sarcasm that might be misinterpreted as criticism</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3">Share Honestly and Accurately</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium mb-2">Do:</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Share your genuine experiences with skincare products and routines</li>
                <li>Be clear when distinguishing between facts and personal opinions</li>
                <li>Provide sources for scientific claims when possible</li>
                <li>Be transparent about your skin type when sharing results</li>
              </ul>
              
              <h3 className="font-medium mb-2">Don't:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Make exaggerated claims about products or routines</li>
                <li>Present personal experiences as universal truths</li>
                <li>Share misleading information about ingredients or treatments</li>
                <li>Make definitive medical claims without appropriate qualifications</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3">No Spam or Self-Promotion</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium mb-2">Do:</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Recommend products based on genuine experience when relevant to discussions</li>
                <li>Share helpful resources and information</li>
                <li>Disclose any potential conflicts of interest</li>
                <li>Focus on contributing value to discussions</li>
              </ul>
              
              <h3 className="font-medium mb-2">Don't:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Post promotional content or advertisements</li>
                <li>Create multiple threads about the same topic</li>
                <li>Post affiliate links without disclosure</li>
                <li>Use the community primarily for promoting personal blogs/channels/businesses</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3">Protect Privacy and Safety</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium mb-2">Do:</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Respect others' privacy</li>
                <li>Get permission before sharing someone else's content or photos</li>
                <li>Use content warnings for potentially sensitive images (e.g., severe skin conditions)</li>
                <li>Report concerns about harmful advice or content to moderators</li>
              </ul>
              
              <h3 className="font-medium mb-2">Don't:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Share personal information about others without consent</li>
                <li>Post content that could trigger or harm vulnerable users</li>
                <li>Recommend dangerous DIY treatments or practices</li>
                <li>Diagnose medical conditions (suggest seeing a professional instead)</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3">Before and After Photos</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium mb-2">Do:</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Use consistent lighting, angles, and distances between photos</li>
                <li>Include information about the timeframe and routine used</li>
                <li>Be honest about any filters or editing</li>
                <li>Respect that results vary based on individual factors</li>
              </ul>
              
              <h3 className="font-medium mb-2">Don't:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Manipulate images to exaggerate results</li>
                <li>Post misleading comparison photos with different conditions</li>
                <li>Share before/after photos of others without permission</li>
                <li>Make guarantees that others will achieve the same results</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Important Note</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Remember that SkincareEdu is an educational platform, not a substitute for professional medical advice. 
                  Always consult with a dermatologist or healthcare provider for skin concerns that may require medical attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Moderation and Enforcement</h2>
        <p className="mb-4">
          Our moderators work to maintain a positive community environment. Guidelines are enforced through a series of actions:
        </p>
        
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-medium">1. Friendly Reminder</h3>
            <p className="text-gray-600 text-sm">
              First-time or minor violations will receive a friendly reminder about our guidelines.
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-medium">2. Content Removal</h3>
            <p className="text-gray-600 text-sm">
              Content that violates our guidelines may be removed at moderator discretion.
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-medium">3. Temporary Restriction</h3>
            <p className="text-gray-600 text-sm">
              Repeated violations may result in temporary restrictions from community participation.
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-medium">4. Account Review</h3>
            <p className="text-gray-600 text-sm">
              Severe or persistent violations will trigger a full account review that may result in permanent restrictions.
            </p>
          </div>
        </div>
        
        <div className="mt-6">
          <p className="text-sm text-gray-600">
            If you believe a post violates these guidelines, please use the report feature or contact our moderators.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            For questions about moderation decisions, contact <a href="mailto:community@skincareedu.com" className="text-primary hover:underline">community@skincareedu.com</a>.
          </p>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">These guidelines may be updated periodically. Last revised: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        <Link href="/community" className="btn btn-primary">
          Return to Community
        </Link>
      </div>
    </div>
  );
} 