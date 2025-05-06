import React, { useState } from 'react';
import axios from 'axios';

type ScanResult = {
  product_name?: string;
  ingredients_text?: string;
  ingredients_analysis_tags?: string[];
  safety_rating?: number;
  allergens?: string[];
  status: 'success' | 'error';
  message?: string;
};

const IngredientScanner = () => {
  const [barcode, setBarcode] = useState<string>('');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string>('');

  const scanProduct = async () => {
    if (!barcode.trim()) {
      setError('Please enter a product barcode');
      return;
    }

    setIsScanning(true);
    setError('');
    
    try {
      // For demonstration purposes, this uses Open Food Facts API
      // In a real app, you'd use a skincare-specific API or your own backend
      const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
      
      if (response.data && response.data.status === 1) {
        const product = response.data.product;
        
        // Process the result to match the SkinCareEdu format
        const result: ScanResult = {
          product_name: product.product_name,
          ingredients_text: product.ingredients_text,
          ingredients_analysis_tags: product.ingredients_analysis_tags || [],
          status: 'success',
          // Add mock data for demonstration purposes
          safety_rating: Math.floor(Math.random() * 5) + 1, // 1-5 rating
          allergens: product.allergens?.split(',') || [],
        };
        
        setResult(result);
      } else {
        setResult({
          status: 'error',
          message: 'Product not found'
        });
      }
    } catch (error) {
      console.error('Error scanning product:', error);
      setResult({
        status: 'error',
        message: 'Failed to scan product. Please try again.'
      });
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Ingredient Scanner</h2>
      <p className="mb-6 text-gray-600">
        Scan a skincare product barcode to analyze its ingredients for safety and compatibility with your skin.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
          placeholder="Enter product barcode"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={scanProduct}
          disabled={isScanning}
          className="btn btn-primary"
        >
          {isScanning ? 'Scanning...' : 'Scan Product'}
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {result && (
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-semibold mb-4">
            {result.status === 'success' ? 'Scan Results' : 'Error'}
          </h3>
          
          {result.status === 'success' ? (
            <div>
              <div className="mb-4">
                <span className="font-semibold">Product Name:</span> {result.product_name || 'Unknown'}
              </div>
              
              {result.safety_rating !== undefined && (
                <div className="mb-4">
                  <span className="font-semibold">Safety Rating:</span>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < result.safety_rating! ? 'text-secondary' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              )}
              
              {result.ingredients_text && (
                <div className="mb-4">
                  <span className="font-semibold">Ingredients:</span>
                  <p className="mt-1 text-gray-600">{result.ingredients_text}</p>
                </div>
              )}
              
              {result.allergens && result.allergens.length > 0 && (
                <div className="mb-4">
                  <span className="font-semibold">Potential Allergens:</span>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {result.allergens.map((allergen, index) => (
                      <span key={index} className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-6 p-4 bg-primary/10 rounded-md">
                <p className="font-medium text-primary">Recommendation</p>
                <p className="mt-2">
                  This product {result.safety_rating && result.safety_rating >= 4 
                    ? 'appears to be safe for most skin types.' 
                    : 'may contain some ingredients that could cause irritation for sensitive skin.'}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-red-500">{result.message}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default IngredientScanner; 