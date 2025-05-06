import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Track Your Progress - Vaseline & Vitamin E Oil Routine - SkincareEdu',
  description: 'Track and monitor your progress with the 30-step Vaseline skincare routine',
};

export default function TrackProgressPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-4">
        <Link href="/classes/vaseline-routine" className="text-primary hover:underline">← Back to Routine Overview</Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Track Your Progress</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Weekly Progress Tracker</h2>
        <p className="mb-6">
          Use this tool to track your progress with the 30-step Vaseline and vitamin E oil routine. 
          Consistency is key to seeing results, so try to follow the routine as closely as possible.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-2 text-left">Week</th>
                <th className="border p-2 text-left">Date</th>
                <th className="border p-2 text-left">Consistency (days/week)</th>
                <th className="border p-2 text-left">Observations</th>
                <th className="border p-2 text-left">Photo</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((week) => (
                <tr key={week}>
                  <td className="border p-2">Week {week}</td>
                  <td className="border p-2">
                    <input type="date" className="w-full p-1 border rounded" />
                  </td>
                  <td className="border p-2">
                    <select className="w-full p-1 border rounded">
                      {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                        <option key={day} value={day}>{day} days</option>
                      ))}
                    </select>
                  </td>
                  <td className="border p-2">
                    <textarea 
                      className="w-full p-1 border rounded h-16" 
                      placeholder="Note changes in skin texture, hydration, fine lines, etc."
                    ></textarea>
                  </td>
                  <td className="border p-2">
                    <button className="btn btn-secondary w-full">
                      Upload Photo
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-end mt-4">
          <button className="btn btn-primary">
            Save Progress
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Skin Measurements</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Hydration Level</h3>
              <div className="relative pt-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-primary">
                      Week 1 Baseline
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold inline-block text-primary">
                      Set a value from 1-10
                    </span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Fine Lines Visibility</h3>
              <div className="relative pt-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-primary">
                      Week 1 Baseline
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold inline-block text-primary">
                      Set a value from 1-10
                    </span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Skin Texture</h3>
              <div className="relative pt-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-primary">
                      Week 1 Baseline
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold inline-block text-primary">
                      Set a value from 1-10
                    </span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Weekly Photos</h2>
          <p className="mb-4">
            Tracking visual progress is one of the most effective ways to see the results 
            of your skincare routine. Upload photos taken in the same lighting and position 
            each week.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((week) => (
              <div key={week} className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Week {week}</h3>
                <div className="aspect-square bg-gray-100 flex items-center justify-center mb-2">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <button className="btn btn-secondary w-full text-sm">
                  Upload Week {week}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-primary text-white rounded-lg p-8 text-center mt-8">
        <h2 className="text-2xl font-bold mb-4">Share Your Progress</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Celebrate your skincare journey by sharing your results with our community. 
          Your experience can inspire others!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn bg-white text-primary hover:bg-gray-100">
            Share Results
          </button>
          <Link href="/community/vaseline-routine" className="btn border border-white text-white hover:bg-primary/80">
            Join Discussion
          </Link>
        </div>
      </div>
    </div>
  );
} 