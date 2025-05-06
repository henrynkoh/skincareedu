import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-primary text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Personalized Skincare Education
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Analyze ingredients, track your skin progress, and access customized 
            skincare routines tailored to your unique needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/scanner" className="btn btn-secondary">
              Scan Ingredients
            </Link>
            <Link href="/dashboard" className="btn bg-white text-primary hover:bg-gray-100">
              Track Progress
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Ingredient Scanner</h3>
              <p className="mb-4">
                Analyze products for safety and compatibility with your skin type.
                Identify potential allergens and harmful substances.
              </p>
              <Link href="/scanner" className="text-primary font-medium">
                Try Scanner →
              </Link>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Skin Monitoring</h3>
              <p className="mb-4">
                Track changes in your skin over time with AI-powered analysis and
                personalized recommendations for improvement.
              </p>
              <Link href="/dashboard" className="text-primary font-medium">
                View Dashboard →
              </Link>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Education Classes</h3>
              <p className="mb-4">
                Access customized tutorials and step-by-step guides for effective 
                skincare routines, including the 30-step method.
              </p>
              <Link href="/classes" className="text-primary font-medium">
                Browse Classes →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Customized Education</h2>
              <p className="mb-4">
                Learn the science-backed Vaseline and vitamin E oil routine that can
                improve skin texture and reduce the appearance of wrinkles.
              </p>
              <p className="mb-6">
                Our platform combines the best features of Stilla, SkinVision, and
                Think Dirty to create a comprehensive skincare education experience.
              </p>
              <Link href="/classes/vaseline-routine" className="btn btn-primary">
                Start Learning
              </Link>
            </div>
            <div className="md:w-1/2 bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Featured Class</h3>
              <p className="font-medium">30-Step Vaseline & Vitamin E Routine</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-2">1</span>
                  <p>Skin state assessment</p>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-2">2</span>
                  <p>Patch testing</p>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center mr-2">3</span>
                  <p>Proper cleansing techniques</p>
                </div>
                <div className="text-primary font-medium mt-2">
                  View all 30 steps →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your skincare routine?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join SkincareEdu today and get personalized recommendations, tracking tools,
            and educational content.
          </p>
          <Link href="/signup" className="btn bg-white text-primary hover:bg-gray-100">
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  );
} 