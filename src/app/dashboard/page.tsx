import React from 'react';
import SkinMonitoring from '../../components/SkinMonitoring';

export const metadata = {
  title: 'Skin Monitoring Dashboard - SkincareEdu',
  description: 'Track your skin progress over time and get personalized recommendations',
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">Skin Monitoring Dashboard</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-3xl">
        Track changes in your skin over time, document your skincare routine, and receive
        AI-powered insights to optimize your results.
      </p>
      
      <SkinMonitoring />
      
      <div className="mt-16 bg-primary/5 rounded-lg p-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Tracking Tips</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3">
              1
            </div>
            <div>
              <h3 className="font-medium">Consistency is Key</h3>
              <p className="text-gray-600">
                Take photos at the same time of day, with similar lighting and distance from the camera.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3">
              2
            </div>
            <div>
              <h3 className="font-medium">Be Patient</h3>
              <p className="text-gray-600">
                Skin changes take time. Most routines need at least 4-6 weeks to show significant results.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3">
              3
            </div>
            <div>
              <h3 className="font-medium">Note External Factors</h3>
              <p className="text-gray-600">
                Record stress levels, diet changes, weather conditions, and other factors that may affect your skin.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3">
              4
            </div>
            <div>
              <h3 className="font-medium">Use Multiple Angles</h3>
              <p className="text-gray-600">
                Capture different angles of your face to track improvements in various areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 