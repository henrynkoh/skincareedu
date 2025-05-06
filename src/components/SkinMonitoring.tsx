import React, { useState } from 'react';

type SkinIssue = 'wrinkles' | 'acne' | 'dryness' | 'redness' | 'other';

interface SkinEntry {
  id: string;
  date: Date;
  image?: string;
  notes: string;
  issueType: SkinIssue;
  rating: number;
}

const SkinMonitoring = () => {
  const [entries, setEntries] = useState<SkinEntry[]>([]);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [notes, setNotes] = useState('');
  const [issueType, setIssueType] = useState<SkinIssue>('wrinkles');
  const [rating, setRating] = useState(3);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onloadend = () => {
        setCurrentImage(reader.result as string);
      };
      
      reader.readAsDataURL(file);
    }
  };

  // Add new skin entry
  const addEntry = () => {
    if (!currentImage) {
      alert('Please upload an image');
      return;
    }

    const newEntry: SkinEntry = {
      id: Date.now().toString(),
      date: new Date(),
      image: currentImage,
      notes,
      issueType,
      rating
    };

    setEntries([newEntry, ...entries]);
    
    // Reset form
    setCurrentImage(null);
    setNotes('');
    setIssueType('wrinkles');
    setRating(3);
  };

  // Helper function to format dates
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Skin Monitoring Dashboard</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Add New Entry</h3>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skin Photo
              </label>
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50"
                onClick={() => document.getElementById('imageUpload')?.click()}
              >
                {currentImage ? (
                  <img 
                    src={currentImage} 
                    alt="Skin preview" 
                    className="mx-auto max-h-48 rounded"
                  />
                ) : (
                  <div className="py-8">
                    <svg 
                      className="mx-auto h-12 w-12 text-gray-400" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">
                      Click to upload image
                    </p>
                  </div>
                )}
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                For best results, use consistent lighting and distance
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skin Concern
              </label>
              <select
                value={issueType}
                onChange={(e) => setIssueType(e.target.value as SkinIssue)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              >
                <option value="wrinkles">Wrinkles</option>
                <option value="acne">Acne</option>
                <option value="dryness">Dryness</option>
                <option value="redness">Redness</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Severity Rating (1-5)
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      rating === value 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                rows={4}
                placeholder="Add details about your skin condition, products used, etc."
              />
            </div>
            
            <button
              onClick={addEntry}
              className="btn btn-primary w-full"
            >
              Add Entry
            </button>
          </div>
        </div>
      </div>
      
      {entries.length > 0 ? (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">History</h3>
          
          {entries.map((entry) => (
            <div key={entry.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4">
              {entry.image && (
                <div className="md:w-1/4">
                  <img 
                    src={entry.image} 
                    alt={`Skin on ${formatDate(entry.date)}`}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
              )}
              
              <div className="md:w-3/4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-lg">{formatDate(entry.date)}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    entry.rating <= 2 ? 'bg-green-100 text-green-800' :
                    entry.rating === 3 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    Severity: {entry.rating}/5
                  </span>
                </div>
                
                <div className="mb-2">
                  <span className="text-sm font-medium text-gray-500">
                    Concern: 
                  </span>{' '}
                  <span className="capitalize">{entry.issueType}</span>
                </div>
                
                <p className="text-gray-700">{entry.notes}</p>
                
                <div className="mt-4 pt-2 border-t border-gray-100">
                  <div className="text-sm text-primary font-medium">
                    AI Analysis: 
                    {entry.rating <= 2 
                      ? " Significant improvement noticed. Continue your routine."
                      : entry.rating === 3 
                      ? " Some progress shown. Consistency is key."
                      : " Little change observed. Consider adjusting your routine."}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">No entries yet</h3>
          <p className="text-gray-600 mb-4">
            Start tracking your skincare journey by adding your first entry.
          </p>
        </div>
      )}
    </div>
  );
};

export default SkinMonitoring; 