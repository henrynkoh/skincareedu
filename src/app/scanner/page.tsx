import React from 'react';
import IngredientScanner from '../../components/IngredientScanner';

export const metadata = {
  title: 'Ingredient Scanner - SkincareEdu',
  description: 'Analyze skincare products for safety and compatibility with your skin type',
};

export default function ScannerPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Ingredient Scanner</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-3xl">
        Our ingredient scanner analyzes skincare products to help you make informed decisions.
        Simply enter a product barcode to check for allergens, potential irritants, and overall
        safety for your skin type.
      </p>
      <IngredientScanner />
      
      <div className="mt-12 bg-primary/5 rounded-lg p-6 max-w-3xl">
        <h2 className="text-xl font-semibold mb-4">About the Scanner</h2>
        <p className="mb-4">
          The SkincareEdu scanner is inspired by apps like Stilla and Think Dirty, helping you understand
          what goes into your skincare products. Our technology analyzes ingredients for:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Potential allergens that may cause reactions</li>
          <li>Harmful substances like parabens, sulfates, and phthalates</li>
          <li>Compatibility with different skin types</li>
          <li>Ingredient benefits and purpose in formulations</li>
        </ul>
        <p>
          Note: While we strive for accuracy, always consult a dermatologist for personalized skincare advice,
          especially if you have sensitive skin or specific conditions.
        </p>
      </div>
    </div>
  );
} 