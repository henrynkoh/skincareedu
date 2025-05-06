import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Community Discussion: Vaseline & Vitamin E Oil Routine - SkincareEdu',
  description: 'Join the community discussion about the 30-step Vaseline and vitamin E oil skincare routine',
};

export default function CommunityDiscussionPage() {
  // Sample discussion posts
  const discussionPosts = [
    {
      id: 1,
      author: "Emily Chen",
      avatar: "/avatars/emily.jpg",
      date: "2 days ago",
      content: "I've been following the full 30-step routine for 3 weeks now and I'm amazed at the results! My skin feels so much more hydrated and the fine lines around my eyes have definitely reduced. I was skeptical about using Vaseline on my face at first, but now I'm a convert!",
      likes: 24,
      replies: 12,
      authorRole: "Skincare Enthusiast"
    },
    {
      id: 2,
      author: "Dr. Sarah Johnson",
      avatar: "/avatars/sarah.jpg",
      date: "1 week ago",
      content: "As a dermatologist, I often recommend petroleum jelly for severely dry skin conditions. The occlusive properties create an excellent moisture barrier. The addition of vitamin E provides antioxidant benefits, though I would caution those with acne-prone skin to patch test thoroughly and perhaps use a modified version of this routine focusing on drier areas only.",
      likes: 56,
      replies: 8,
      authorRole: "Dermatologist"
    },
    {
      id: 3,
      author: "Michael Lee",
      avatar: "/avatars/michael.jpg",
      date: "3 days ago",
      content: "Question for anyone who's tried this: I have combination skin with an oily T-zone. Should I avoid applying the mixture to my forehead and nose? Or should I just use a very thin layer? I'm worried about breaking out but I'd love to try this for the dry patches on my cheeks.",
      likes: 7,
      replies: 15,
      authorRole: "Skincare Newbie"
    },
    {
      id: 4,
      author: "Jasmine Rodriguez",
      avatar: "/avatars/jasmine.jpg",
      date: "5 days ago",
      content: "Before and after photos attached! I've been doing this routine 3 times a week for the past month. My skin is noticeably plumper and more radiant. The fine lines on my forehead have softened significantly. I've found that focusing on steps 9-15 has been particularly effective for my concerns.",
      likes: 42,
      replies: 18,
      authorRole: "Skincare Influencer",
      hasImages: true
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-4">
        <Link href="/classes/vaseline-routine" className="text-primary hover:underline">← Back to Routine Overview</Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Community Discussion: Vaseline & Vitamin E Oil Routine</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          {/* Post creation form */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Share Your Experience</h2>
            <textarea 
              className="w-full p-3 border rounded-lg h-32 mb-4" 
              placeholder="Share your experience, ask questions, or post your results..."
            ></textarea>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <button className="flex items-center text-gray-600 hover:text-primary">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Add Photos
                </button>
                <button className="flex items-center text-gray-600 hover:text-primary">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Add Video
                </button>
              </div>
              <button className="btn btn-primary">
                Post to Community
              </button>
            </div>
          </div>
          
          {/* Discussion posts */}
          <div className="space-y-6">
            {discussionPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                        {post.avatar ? (
                          <div className="w-full h-full bg-primary flex items-center justify-center text-white font-bold">
                            {post.author.charAt(0)}
                          </div>
                        ) : (
                          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{post.author}</h3>
                          <p className="text-sm text-gray-600">{post.authorRole}</p>
                        </div>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      <p className="mt-2">
                        {post.content}
                      </p>
                      {post.hasImages && (
                        <div className="mt-4 grid grid-cols-2 gap-2">
                          <div className="bg-gray-100 rounded aspect-square flex items-center justify-center">
                            <span className="text-gray-500 text-sm">Before Image</span>
                          </div>
                          <div className="bg-gray-100 rounded aspect-square flex items-center justify-center">
                            <span className="text-gray-500 text-sm">After Image</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t mt-4">
                    <div className="flex space-x-4">
                      <button className="flex items-center text-gray-600 hover:text-primary">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        Like ({post.likes})
                      </button>
                      <button className="flex items-center text-gray-600 hover:text-primary">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Reply ({post.replies})
                      </button>
                    </div>
                    <button className="text-gray-600 hover:text-primary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-3 flex justify-between items-center">
                  <button className="text-primary text-sm font-medium">
                    View all {post.replies} replies
                  </button>
                  <button className="text-gray-600 text-sm hover:text-primary">
                    Newest first ▼
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <button className="btn btn-secondary">
              Load More Posts
            </button>
          </div>
        </div>
        
        <div className="md:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Community Guidelines</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Be respectful and supportive of all community members</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Share your honest experiences, both positive and challenges</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>When sharing before/after photos, try to use consistent lighting and angles</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>No spam, advertising, or self-promotion</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Remember that individual results may vary</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Popular Topics</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">#VaselineRoutine</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">#BeforeAndAfter</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">#SkinHydration</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">#AntiAging</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">#VitaminE</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">#OilySkinTips</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">#SluggingMethod</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">#NightRoutine</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Top Contributors</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                  D
                </div>
                <div>
                  <h3 className="font-medium">Dr. Sarah Johnson</h3>
                  <p className="text-sm text-gray-600">Dermatologist</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                  J
                </div>
                <div>
                  <h3 className="font-medium">Jasmine Rodriguez</h3>
                  <p className="text-sm text-gray-600">Skincare Influencer</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                  E
                </div>
                <div>
                  <h3 className="font-medium">Emily Chen</h3>
                  <p className="text-sm text-gray-600">Skincare Enthusiast</p>
                </div>
              </li>
            </ul>
            <Link href="/community/experts" className="block text-center text-primary font-medium mt-4 hover:underline">
              View All Contributors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 