import React from 'react';
import EducationClasses from '../../components/EducationClasses';
import Link from 'next/link';

export const metadata = {
  title: 'Skincare Education Classes - SkincareEdu',
  description: 'Learn how to take care of your skin with our step-by-step tutorials and classes',
};

export default function ClassesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">Skincare Education Classes</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-3xl">
        Learn effective skincare techniques and routines through our interactive classes.
        Track your progress and apply what you learn to see real results.
      </p>
      
      <EducationClasses />
      
      <div className="mt-16 bg-primary/5 rounded-lg p-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Why Our Classes?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-lg mb-2">Science-Based Approach</h3>
            <p className="text-gray-600">
              Our content is developed based on dermatological research and 
              proven skincare science, not marketing claims.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-2">Personalized Learning</h3>
            <p className="text-gray-600">
              Classes adapt to your specific skin concerns and type,
              ensuring relevant and effective education.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-2">Practical Application</h3>
            <p className="text-gray-600">
              Step-by-step guidance with visual demonstrations makes
              it easy to apply techniques at home.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-2">Progress Tracking</h3>
            <p className="text-gray-600">
              Monitor your learning journey and skin improvements
              all in one platform for maximum results.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to transform your skincare routine?</h2>
        <Link href="/classes/vaseline-routine" className="btn btn-primary">Start Learning Now</Link>
      </div>
    </div>
  );
} 