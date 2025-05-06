"use client";

import React, { useState, useEffect } from 'react';

interface MarkCompleteButtonProps {
  stepNumber: number;
}

export default function MarkCompleteButton({ stepNumber }: MarkCompleteButtonProps) {
  const [isComplete, setIsComplete] = useState(false);

  // Check localStorage on component mount
  useEffect(() => {
    try {
      const savedState = localStorage.getItem(`step-${stepNumber}-complete`);
      if (savedState) {
        setIsComplete(savedState === 'true');
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, [stepNumber]);

  const toggleComplete = () => {
    try {
      const newState = !isComplete;
      setIsComplete(newState);
      
      // Save to localStorage
      localStorage.setItem(`step-${stepNumber}-complete`, newState.toString());
      
      console.log(`Step ${stepNumber} marked as ${newState ? 'complete' : 'incomplete'}`);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return (
    <button 
      className={`btn ${isComplete ? 'bg-green-600 hover:bg-green-700 text-white' : 'btn-primary'}`}
      onClick={toggleComplete}
    >
      {isComplete ? 'Completed ✓' : 'Mark as Complete'}
    </button>
  );
} 