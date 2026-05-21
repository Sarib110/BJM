import React from 'react';

const ToolPage = ({ url, onBack }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-white w-screen h-screen flex flex-col">
      <div className="h-14 bg-black flex items-center px-6 shadow-md">
        <button 
          onClick={onBack}
          className="text-white text-sm font-medium hover:text-zinc-300 transition-colors flex items-center gap-2"
        >
          ← Back to Website
        </button>
      </div>
      <iframe 
        src={url} 
        className="w-full flex-grow border-none"
        title="Veloq Tool"
      />
    </div>
  );
};

export default ToolPage;