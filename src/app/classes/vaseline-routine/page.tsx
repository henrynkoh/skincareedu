import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '30-Step Vaseline & Vitamin E Oil Routine - SkincareEdu',
  description: 'Learn the science-backed skincare routine that can reduce wrinkles and improve skin texture',
};

export default function VaselineRoutinePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-4">
        <Link href="/classes" className="text-primary hover:underline">← Back to Classes</Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">30-Step Vaseline & Vitamin E Oil Routine</h1>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-2/3">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Course Overview</h2>
            <p className="mb-4">
              This comprehensive routine combines the moisturizing power of Vaseline 
              with the antioxidant benefits of vitamin E oil to create a powerful 
              anti-aging skincare regimen. Follow all 30 steps for optimal results, 
              or customize the routine to fit your specific needs.
            </p>
            <div className="flex items-center mb-2">
              <span className="text-sm font-medium mr-2">Duration:</span>
              <span className="px-3 py-1 bg-secondary/20 text-gray-800 rounded-full text-xs font-medium">
                4 weeks
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">Difficulty:</span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                Intermediate
              </span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Scientific Background</h2>
            <p className="mb-4">
              Vaseline (petroleum jelly) creates an occlusive barrier on the skin that 
              locks in moisture and prevents transepidermal water loss. When combined with 
              vitamin E oil, a powerful antioxidant, the mixture helps protect against free 
              radical damage while improving the appearance of fine lines and wrinkles.
            </p>
            <p className="mb-4">
              Clinical studies have shown that occlusive moisturizers can reduce the appearance 
              of fine lines by up to 40% after 4 weeks of consistent use, while vitamin E has 
              been demonstrated to protect against UV damage and improve skin elasticity.
            </p>
            <div className="flex items-center text-primary mt-4">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
              </svg>
              <Link href="/resources/research/vaseline-vitamin-e" className="text-sm font-medium">
                Read the research paper
              </Link>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-6">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold mb-2">What You'll Need</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vaseline (100g jar)</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vitamin E oil (or capsules)</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Clean spoon or spatula</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Warm towel for steaming</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gentle cleanser</span>
                </li>
              </ul>
            </div>
            <div className="p-6">
              <Link href="/classes/vaseline-routine/all-steps" className="btn btn-primary w-full mb-3">
                Start Course
              </Link>
              <Link href="/classes/vaseline-routine/download-materials" className="btn bg-gray-100 text-gray-800 hover:bg-gray-200 w-full">
                Download Materials
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <h2 className="text-xl font-semibold mb-6">The 30-Step Routine</h2>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="border rounded-lg overflow-hidden">
            <div className="flex items-center p-4 bg-gray-50">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center mr-4">
                1
              </div>
              <div>
                <h3 className="font-medium text-lg">Skin State Assessment</h3>
                <p className="text-gray-600">
                  Check your face skin condition to identify your skin type (dry, oily, combination, or sensitive).
                </p>
              </div>
            </div>
            <div className="p-4 border-t">
              <div className="prose max-w-none">
                <p>
                  Before starting any skincare routine, it's essential to understand your skin type. This will 
                  help you adjust the routine to maximize benefits and minimize potential side effects.
                </p>
                <h4 className="font-medium mt-4 mb-2">How to assess your skin:</h4>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Wash your face with a gentle cleanser and pat dry.</li>
                  <li>Wait 30 minutes without applying any products.</li>
                  <li>Examine your T-zone (forehead, nose, and chin) and cheeks.</li>
                  <li>
                    <strong>Dry skin:</strong> Feels tight, may have flaky patches.
                  </li>
                  <li>
                    <strong>Oily skin:</strong> Appears shiny, especially in the T-zone.
                  </li>
                  <li>
                    <strong>Combination skin:</strong> Oily T-zone but normal or dry cheeks.
                  </li>
                  <li>
                    <strong>Sensitive skin:</strong> Easily reddens, itches, or burns with products.
                  </li>
                </ol>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                  <p className="text-sm">
                    <strong>Note:</strong> If you have oily skin, use a smaller amount of the Vaseline mixture 
                    and focus mainly on areas with fine lines. For very oily skin, consider using this 
                    treatment only 2-3 times per week instead of daily.
                  </p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="btn btn-primary">
                  Mark as Complete
                </button>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="border rounded-lg overflow-hidden">
            <div className="flex items-center p-4 bg-gray-50">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center mr-4">
                2
              </div>
              <div>
                <h3 className="font-medium text-lg">Patch Test</h3>
                <p className="text-gray-600">
                  Apply a small amount of Vaseline and vitamin E oil mixture on your inner wrist to check for allergic reactions over 24 hours.
                </p>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="border rounded-lg overflow-hidden">
            <div className="flex items-center p-4 bg-gray-50">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center mr-4">
                3
              </div>
              <div>
                <h3 className="font-medium text-lg">Cleansing</h3>
                <p className="text-gray-600">
                  Wash your face with a mild cleanser to remove dirt, oil, and makeup before applying the mixture.
                </p>
              </div>
            </div>
          </div>
          
          {/* More steps would be listed here */}
          <div className="text-center pt-6">
            <Link href="/classes/vaseline-routine/all-steps" className="btn btn-secondary">
              View All 30 Steps
            </Link>
          </div>
        </div>
      </div>
      
      <div className="bg-primary text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to transform your skincare routine?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join thousands of others who have experienced the benefits of this
          science-backed Vaseline and vitamin E oil routine.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/classes/vaseline-routine/all-steps" className="btn bg-white text-primary hover:bg-gray-100">
            Start Free Trial
          </Link>
          <Link href="/classes/vaseline-routine/results" className="btn border border-white text-white hover:bg-primary/80">
            See Before & After Results
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Link href="/classes/vaseline-routine/track-progress" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-lg mb-3">Track Your Progress</h3>
          <p className="text-gray-600 mb-4">
            Document your skincare journey and see the transformation week by week.
          </p>
          <div className="text-primary flex items-center">
            <span className="font-medium">Track now</span>
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>
        
        <Link href="/community/vaseline-routine" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-lg mb-3">Join the Community</h3>
          <p className="text-gray-600 mb-4">
            Connect with others following the same routine and share your experiences.
          </p>
          <div className="text-primary flex items-center">
            <span className="font-medium">Join discussion</span>
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>
        
        <Link href="/resources/research/vaseline-vitamin-e" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-lg mb-3">Scientific Research</h3>
          <p className="text-gray-600 mb-4">
            Explore the science behind how Vaseline and vitamin E work together for healthier skin.
          </p>
          <div className="text-primary flex items-center">
            <span className="font-medium">Read paper</span>
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
} 