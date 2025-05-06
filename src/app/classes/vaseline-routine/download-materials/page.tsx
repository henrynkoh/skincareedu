import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Download Materials - Vaseline & Vitamin E Oil Routine - SkincareEdu',
  description: 'Download materials and resources for the 30-step Vaseline and vitamin E oil skincare routine',
};

export default function DownloadMaterialsPage() {
  // Sample materials data
  const materials = [
    {
      id: 1,
      title: "Complete 30-Step Routine Guide",
      description: "Comprehensive PDF guide with detailed instructions for all 30 steps of the Vaseline and vitamin E oil routine.",
      format: "PDF",
      size: "2.4 MB",
      icon: "document"
    },
    {
      id: 2,
      title: "Quick Reference Checklist",
      description: "A printable checklist to track your daily and weekly routine steps.",
      format: "PDF",
      size: "845 KB",
      icon: "checklist"
    },
    {
      id: 3,
      title: "Progress Tracking Journal",
      description: "Printable journal pages for documenting your skincare journey and results.",
      format: "PDF",
      size: "1.2 MB",
      icon: "journal"
    },
    {
      id: 4,
      title: "Ingredient Mixing Guide",
      description: "Detailed instructions for mixing the perfect Vaseline and vitamin E oil combination for your skin type.",
      format: "PDF",
      size: "1.8 MB",
      icon: "beaker"
    },
    {
      id: 5,
      title: "Troubleshooting Common Issues",
      description: "Solutions for common challenges when implementing the routine.",
      format: "PDF",
      size: "980 KB",
      icon: "question"
    },
    {
      id: 6,
      title: "Scientific Research Summary",
      description: "Simplified overview of the scientific research supporting the effectiveness of this routine.",
      format: "PDF",
      size: "1.5 MB",
      icon: "academic"
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-4">
        <Link href="/classes/vaseline-routine" className="text-primary hover:underline">← Back to Routine Overview</Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Download Materials</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Resources for Your Skincare Journey</h2>
        <p className="mb-6">
          Download these helpful resources to guide you through the 30-step Vaseline and vitamin E oil 
          routine. These materials will help you implement the routine correctly and track your progress.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <div key={material.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {material.icon === 'document' && (
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    {material.icon === 'checklist' && (
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    )}
                    {material.icon === 'journal' && (
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                    {material.icon === 'beaker' && (
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    )}
                    {material.icon === 'question' && (
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {material.icon === 'academic' && (
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{material.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {material.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-3">Format: {material.format}</span>
                      <span>Size: {material.size}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <button className="btn btn-primary flex items-center ml-auto">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6 border">
        <h2 className="text-xl font-semibold mb-4">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-lg mb-3">Video Tutorials</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <Link href="#" className="text-primary hover:underline">Proper Mixing Technique</Link>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <Link href="#" className="text-primary hover:underline">Facial Massage Tutorial</Link>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <Link href="#" className="text-primary hover:underline">Full 30-Step Routine Walkthrough</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-3">Expert Q&A Sessions</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <Link href="#" className="text-primary hover:underline">Dermatologist's Take on the Routine</Link>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <Link href="#" className="text-primary hover:underline">Adjusting the Routine for Different Skin Types</Link>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <Link href="#" className="text-primary hover:underline">Combining with Other Skincare Actives</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-primary text-white rounded-lg p-8 text-center mt-8">
        <h2 className="text-2xl font-bold mb-4">Need help with your routine?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          If you have any questions about implementing the 30-step Vaseline and vitamin E oil
          routine, our community forum is full of helpful tips and experts ready to assist.
        </p>
        <Link href="/community/vaseline-routine" className="btn bg-white text-primary hover:bg-gray-100">
          Join Our Community
        </Link>
      </div>
    </div>
  );
} 