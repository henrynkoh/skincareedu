import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Community Forum - SkincareEdu',
  description: 'Join the SkincareEdu community to discuss skincare routines, techniques, and products',
};

export default function CommunityPage() {
  // Sample community topics
  const featuredTopics = [
    {
      id: 'vaseline-routine',
      title: 'Vaseline & Vitamin E Oil Routine',
      posts: 287,
      followers: 426,
      lastActive: '15 minutes ago',
      description: 'Discuss the 30-step Vaseline and vitamin E oil routine, share your results, and get advice.'
    },
    {
      id: 'sensitive-skin',
      title: 'Sensitive Skin Solutions',
      posts: 145,
      followers: 319,
      lastActive: '2 hours ago',
      description: 'Support group for those dealing with sensitive skin, rosacea, and other skin sensitivities.'
    },
    {
      id: 'ingredient-spotlight',
      title: 'Ingredient Spotlight',
      posts: 203,
      followers: 287,
      lastActive: '1 day ago',
      description: 'Deep dive into specific skincare ingredients - how they work, benefits, and potential issues.'
    }
  ];
  
  const recentDiscussions = [
    {
      id: 1,
      title: 'Has anyone experienced purging with the Vaseline routine?',
      author: 'Emily Chen',
      replies: 24,
      views: 432,
      topic: 'Vaseline & Vitamin E Oil Routine',
      lastActive: '35 minutes ago'
    },
    {
      id: 2,
      title: 'Best way to use the Vaseline routine with other actives?',
      author: 'Michael Lee',
      replies: 17,
      views: 286,
      topic: 'Vaseline & Vitamin E Oil Routine',
      lastActive: '2 hours ago'
    },
    {
      id: 3,
      title: 'Where to find high-quality vitamin E oil?',
      author: 'Sophia Rodriguez',
      replies: 31,
      views: 514,
      topic: 'Ingredient Spotlight',
      lastActive: '5 hours ago'
    },
    {
      id: 4,
      title: 'Managing redness while using the Vaseline routine',
      author: 'David Kim',
      replies: 9,
      views: 173,
      topic: 'Sensitive Skin Solutions',
      lastActive: '1 day ago'
    },
    {
      id: 5,
      title: 'Does the amount of Vaseline matter for effectiveness?',
      author: 'Lisa Johnson',
      replies: 22,
      views: 319,
      topic: 'Vaseline & Vitamin E Oil Routine',
      lastActive: '1 day ago'
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Community</h1>
        <Link href="/community/new-topic" className="btn btn-primary">Start New Topic</Link>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Featured Topics</h2>
              <Link href="/community/topics" className="text-primary hover:underline text-sm">View All Topics</Link>
            </div>
            
            <div className="space-y-6">
              {featuredTopics.map((topic) => (
                <div key={topic.id} className="border-b pb-5 last:border-b-0 last:pb-0">
                  <div className="flex justify-between">
                    <Link href={`/community/${topic.id}`} className="text-lg font-medium hover:text-primary">
                      {topic.title}
                    </Link>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-4">{topic.posts} posts</span>
                      <span>{topic.followers} followers</span>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600">{topic.description}</p>
                  <div className="mt-3 flex items-center text-sm text-gray-500">
                    <span>Last active: {topic.lastActive}</span>
                    <Link 
                      href={`/community/${topic.id}`} 
                      className="ml-4 text-primary font-medium hover:underline"
                    >
                      Join Discussion →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Recent Discussions</h2>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                <select className="text-sm border-gray-300 rounded-md focus:border-primary focus:ring focus:ring-primary/20">
                  <option>Most Recent</option>
                  <option>Most Popular</option>
                  <option>Most Replies</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-4">
              {recentDiscussions.map((discussion) => (
                <div key={discussion.id} className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <Link href={`/community/discussion/${discussion.id}`} className="font-medium hover:text-primary">
                    {discussion.title}
                  </Link>
                  <div className="mt-2 flex flex-wrap justify-between">
                    <div className="text-sm text-gray-600">
                      Posted by <span className="font-medium">{discussion.author}</span> in <Link href={`/community/${discussion.topic.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary hover:underline">{discussion.topic}</Link>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 space-x-4 mt-1 md:mt-0">
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.views} views</span>
                      <span>Active {discussion.lastActive}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6">
              <Link href="/community/discussions" className="btn btn-secondary">
                View All Discussions
              </Link>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="font-semibold mb-4">Community Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Members:</span>
                <span className="font-medium">8,742</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Topics:</span>
                <span className="font-medium">35</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Discussions:</span>
                <span className="font-medium">1,286</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Online Now:</span>
                <span className="font-medium text-green-600">124</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="font-semibold mb-4">Top Contributors</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">E</div>
                <div>
                  <h4 className="font-medium">Emily Chen</h4>
                  <p className="text-sm text-gray-500">564 contributions</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">D</div>
                <div>
                  <h4 className="font-medium">Dr. Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">412 contributions</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">M</div>
                <div>
                  <h4 className="font-medium">Michael Lee</h4>
                  <p className="text-sm text-gray-500">289 contributions</p>
                </div>
              </div>
            </div>
            <Link href="/community/contributors" className="text-primary text-sm font-medium mt-4 inline-block hover:underline">
              View all contributors
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-4">Community Guidelines</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Be respectful and supportive</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Share personal experiences honestly</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>No spam or self-promotion</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Verify claims with credible sources</span>
              </li>
            </ul>
            <Link href="/community/guidelines" className="text-primary text-sm font-medium mt-4 inline-block hover:underline">
              Read full guidelines
            </Link>
          </div>
        </div>
      </div>
      
      <div className="bg-primary text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Connect with fellow skincare enthusiasts, share your experiences, and learn from others.
          Our community is a supportive space for all your skincare questions and journeys.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/signup" className="btn bg-white text-primary hover:bg-gray-100">
            Create an Account
          </Link>
          <Link href="/community/guidelines" className="btn border border-white text-white hover:bg-primary/80">
            Community Guidelines
          </Link>
        </div>
      </div>
    </div>
  );
} 