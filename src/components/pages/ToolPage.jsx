import { useState, useEffect } from 'react';

const ToolPage = ({ url }) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) {
      document.body.classList.add('iframe-hovered');
    } else {
      document.body.classList.remove('iframe-hovered');
    }
    return () => {
      document.body.classList.remove('iframe-hovered');
    };
  }, [hovered]);

  return (
    <div 
      className="w-screen h-[100dvh] bg-white pt-24"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <iframe 
        src={url} 
        className="w-full h-full border-none"
        title="Veloq Tool"
      />
    </div>
  );
};

export default ToolPage;