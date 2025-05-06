import React, { useState } from 'react';
import Link from 'next/link';

// Class data types
interface ClassModule {
  id: string;
  title: string;
  duration: string;
  description: string;
  steps: {
    stepNumber: number;
    title: string;
    description: string;
    completed?: boolean;
  }[];
}

const EducationClasses = () => {
  // Default class module - Vaseline Routine
  const vaselineRoutine: ClassModule = {
    id: 'vaseline-routine',
    title: '30-Step Vaseline & Vitamin E Oil Routine',
    duration: '4 weeks',
    description: 'Learn the science-backed Vaseline and vitamin E oil skincare routine that can reduce the appearance of wrinkles and improve skin texture.',
    steps: [
      {
        stepNumber: 1,
        title: 'Skin State Assessment',
        description: 'Check your face skin condition to identify your skin type (dry, oily, combination, or sensitive).',
      },
      {
        stepNumber: 2,
        title: 'Patch Test',
        description: 'Apply a small amount of Vaseline and vitamin E oil mixture on your inner wrist to check for allergic reactions over 24 hours.',
      },
      {
        stepNumber: 3,
        title: 'Cleansing',
        description: 'Wash your face with a mild cleanser to remove dirt, oil, and makeup before applying the mixture.',
      },
      {
        stepNumber: 4,
        title: 'Exfoliation (Optional)',
        description: 'Gently exfoliate to remove dead skin cells, improving absorption of the mixture.',
      },
      {
        stepNumber: 5,
        title: 'Steam Treatment',
        description: 'Use a warm towel on your face for 3-5 minutes to open pores before application.',
      },
      // Additional steps would continue here
    ],
  };

  // Store active class and progress
  const [activeClass, setActiveClass] = useState<ClassModule>(vaselineRoutine);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  
  // Toggle step completion status
  const toggleStepCompletion = (stepNumber: number) => {
    setActiveClass({
      ...activeClass,
      steps: activeClass.steps.map(step => 
        step.stepNumber === stepNumber 
          ? { ...step, completed: !step.completed }
          : step
      )
    });
  };

  // Calculate progress percentage
  const calculateProgress = () => {
    const completedSteps = activeClass.steps.filter(step => step.completed).length;
    return Math.round((completedSteps / activeClass.steps.length) * 100);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Skincare Education Classes</h2>
      
      {/* Class overview */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="text-xl font-semibold">{activeClass.title}</h3>
            <span className="px-3 py-1 bg-secondary/20 text-gray-800 rounded-full text-sm font-medium">
              {activeClass.duration}
            </span>
          </div>
          
          <p className="text-gray-600 mb-4">{activeClass.description}</p>
          
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Your Progress</span>
              <span className="text-sm font-medium">{calculateProgress()}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-primary rounded-full h-2.5" 
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary">
              Continue Learning
            </button>
            <button className="btn bg-gray-100 text-gray-800 hover:bg-gray-200">
              Reset Progress
            </button>
          </div>
        </div>
      </div>
      
      {/* Steps accordion */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Course Content</h3>
          
          <div className="space-y-3">
            {activeClass.steps.map((step) => (
              <div key={step.stepNumber} className="border rounded-lg overflow-hidden">
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                  onClick={() => setExpandedStep(expandedStep === step.stepNumber ? null : step.stepNumber)}
                >
                  <div className="flex items-center">
                    <div className="mr-3">
                      <input
                        type="checkbox"
                        checked={step.completed || false}
                        onChange={() => toggleStepCompletion(step.stepNumber)}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    <div>
                      <span className="font-medium">
                        Step {step.stepNumber}: {step.title}
                      </span>
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 transition-transform ${expandedStep === step.stepNumber ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                
                {expandedStep === step.stepNumber && (
                  <div className="p-4 border-t">
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    {/* Video placeholder */}
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    
                    <div className="flex justify-between">
                      <button 
                        className="text-sm text-primary font-medium"
                        onClick={() => toggleStepCompletion(step.stepNumber)}
                      >
                        {step.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                      </button>
                      
                      <Link href="#" className="text-sm text-primary font-medium">
                        Read More →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Related Classes */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Related Classes</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h4 className="font-medium">Understanding Skincare Ingredients</h4>
              <p className="text-sm text-gray-600 mt-1">
                Learn about common ingredients in skincare products and their benefits.
              </p>
              <Link href="#" className="text-sm text-primary font-medium mt-2 inline-block">
                View Class →
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h4 className="font-medium">Advanced Anti-Aging Techniques</h4>
              <p className="text-sm text-gray-600 mt-1">
                Discover advanced methods to maintain youthful skin beyond basic routines.
              </p>
              <Link href="#" className="text-sm text-primary font-medium mt-2 inline-block">
                View Class →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationClasses; 