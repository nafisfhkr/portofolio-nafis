// components/VideoModal.tsx
'use client';

import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
        >
          <X size={24} />
        </button>

        {/* Video Player */}
        <div className="relative rounded-lg overflow-hidden bg-black">
          <video
            ref={videoRef}
            controls
            autoPlay
            className="w-full max-h-[80vh]"
          >
            <source src={videoUrl} type="video/mp4" />
            Browser tidak mendukung pemutaran video.
          </video>
          
          {/* Video Title */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h3 className="text-white font-semibold text-lg">{title} - Demo</h3>
          </div>
        </div>
      </div>
    </div>
  );
}