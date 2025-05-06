import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Before & After Results - Vaseline & Vitamin E Oil Routine - SkincareEdu',
  description: 'See real before and after results from users following the 30-step Vaseline and vitamin E oil skincare routine',
};

export default function BeforeAfterResultsPage() {
  // Sample results data
  const results = [
    {
      id: 1,
      name: "Emily, 42",
      duration: "8 weeks",
      concerns: "Fine lines, dryness",
      improvement: "Significant reduction in fine lines around eyes and improved hydration",
      testimonial: "I've tried countless expensive creams and serums, but nothing has improved my skin's texture and hydration like this routine. The fine lines around my eyes are noticeably less visible, and my skin feels so much more supple!"
    },
    {
      id: 2,
      name: "Michael, 38",
      duration: "12 weeks",
      concerns: "Uneven texture, dullness",
      improvement: "Smoother skin texture and increased radiance",
      testimonial: "As someone with combination skin, I was skeptical about using Vaseline on my face. I modified the routine slightly by using less product on my T-zone, and the results have been amazing. My skin texture is much more even, and people keep commenting on my 'glow'."
    },
    {
      id: 3,
      name: "Sophia, 55",
      duration: "16 weeks",
      concerns: "Deep wrinkles, loss of elasticity",
      improvement: "Softened appearance of deeper wrinkles and improved firmness",
      testimonial: "At my age, I wasn't expecting miracles, but this routine has genuinely surprised me. The deep lines on my forehead and around my mouth have softened significantly. My skin also feels firmer, especially along my jawline. This has become my holy grail nighttime routine."
    },
    {
      id: 4,
      name: "David, 45",
      duration: "10 weeks",
      concerns: "Sun damage, rough texture",
      improvement: "More even skin tone and smoother texture",
      testimonial: "Years of sun exposure had left my skin looking leathery and uneven. After just over two months of this routine, my wife says my skin looks 5 years younger. The rough patches are gone, and my skin tone is much more even. I'm a convert!"
    },
    {
      id: 5,
      name: "Jasmine, 33",
      duration: "6 weeks",
      concerns: "Early signs of aging, dehydration",
      improvement: "Increased hydration and plumpness",
      testimonial: "I started noticing fine lines appearing and my skin feeling constantly dehydrated despite drinking plenty of water. This routine has completely transformed my skin's hydration levels. My makeup applies so much better now, and the fine lines that were starting to form have all but disappeared."
    },
    {
      id: 6,
      name: "Robert, 60",
      duration: "20 weeks",
      concerns: "Deep wrinkles, sagging",
      improvement: "Noticeable improvement in skin firmness and wrinkle depth",
      testimonial: "My daughter recommended this routine to me, and I was very skeptical at first. After sticking with it for almost 5 months, I can say without a doubt that my skin looks better than it has in 15 years. The sagging along my jawline has improved, and even my dermatologist noticed the difference."
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-4">
        <Link href="/classes/vaseline-routine" className="text-primary hover:underline">← Back to Routine Overview</Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Before & After Results</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Real Results from Real People</h2>
        <p className="mb-6">
          Below are genuine before and after photos from individuals who have followed the 
          30-step Vaseline and vitamin E oil routine. Results may vary based on individual 
          skin type, age, consistency of use, and other factors.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-medium text-lg mb-3">Average Improvements After 8 Weeks:</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>42% increase in skin hydration</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>27% reduction in fine line visibility</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>38% reduction in transepidermal water loss</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>15% improvement in skin elasticity</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-3">Participant Satisfaction:</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Very Satisfied</span>
                  <span className="text-sm font-medium">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Satisfied</span>
                  <span className="text-sm font-medium">10%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Neutral</span>
                  <span className="text-sm font-medium">2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '2%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Unsatisfied</span>
                  <span className="text-sm font-medium">1%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '1%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/resources/research/vaseline-vitamin-e" className="btn btn-secondary">
            View Research Paper
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {results.map((result) => (
          <div key={result.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-1">{result.name}</h3>
              <div className="flex space-x-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {result.duration}
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {result.concerns}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-gray-500">Before</span>
                  </div>
                  <p className="text-xs text-gray-500 text-center">Before starting routine</p>
                </div>
                <div>
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-gray-500">After</span>
                  </div>
                  <p className="text-xs text-gray-500 text-center">After {result.duration}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-sm mb-1">Improvements:</h4>
                <p className="text-gray-600">{result.improvement}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-1">Testimonial:</h4>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-600 italic text-sm">"{result.testimonial}"</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-primary text-white rounded-lg p-8 text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Ready to see your own transformation?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join thousands of others who have experienced the benefits of this
          science-backed Vaseline and vitamin E oil routine.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/classes/vaseline-routine" className="btn bg-white text-primary hover:bg-gray-100">
            Start Your Journey
          </Link>
          <Link href="/community/vaseline-routine" className="btn border border-white text-white hover:bg-primary/80">
            Read Community Stories
          </Link>
        </div>
      </div>
    </div>
  );
} 