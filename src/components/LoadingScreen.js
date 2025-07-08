import { motion } from 'framer-motion';
import profile from '../assets/profile.png';
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* روبوت SVG متحرك أو Emoji */}
      <div className="flex flex-col items-center justify-center">
        {/* يمكنك استبدال هذا الSVG بروبوت آخر إذا كان لديك */}
        <span className="text-7xl animate-bounce mb-6">🤖</span>
        {/* شريط تحميل متحرك */}
        <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 animate-loading-bar" style={{width: '60%'}}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 