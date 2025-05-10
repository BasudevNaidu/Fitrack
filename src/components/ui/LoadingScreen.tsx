import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-slate-900 flex flex-col items-center justify-center z-50 transition-colors duration-300">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold text-teal-500 mb-8">FitTrack</div>
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">Loading your fitness journey...</p>
      </div>
      <style jsx>{`
        .spinner {
          width: 60px;
          height: 60px;
          position: relative;
        }
        
        .double-bounce1, .double-bounce2 {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #0BCEAF;
          opacity: 0.6;
          position: absolute;
          top: 0;
          left: 0;
          animation: bounce 2s infinite ease-in-out;
        }
        
        .double-bounce2 {
          animation-delay: -1.0s;
        }
        
        @keyframes bounce {
          0%, 100% { transform: scale(0); }
          50% { transform: scale(1.0); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;