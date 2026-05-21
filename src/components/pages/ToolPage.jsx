import React from 'react';

const ToolPage = ({ url }) => {
  return (
    <div className="w-screen h-[100dvh] bg-white pt-24">
      <iframe 
        src={url} 
        className="w-full h-full border-none"
        title="Veloq Tool"
      />
    </div>
  );
};

export default ToolPage;