'use client'

import GalleryNavigation from '@/components/GalleryNavigation';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

export type activelevelProps = {
    starNight: boolean,
    delegation: boolean,
    committee: boolean,
    topFive: boolean,
    winning: boolean,
    inaugration: boolean,
}

const Gallery = () => {
  const imageUrls = [
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "/logo.png",
    "image10.jpg",
    "image11.jpg",
    "image12.jpg",
    "/logo.png",
    "image14.jpg",
    "image15.jpg",  
    "image16.jpg",
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [activeLevel, setActiveLevel] = useState<activelevelProps>({
    starNight: true,
    delegation: false,
    committee: false,
    topFive: false,
    winning: false,
    inaugration: false,
  })

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => 
  {
    setSelectedImage('');
    setLightboxOpen(false);
  };
  const hanldeActiveLevel = (level: keyof activelevelProps) => {
    const newActiveLevel = {
      starNight: false,
      delegation: false,
      committee: false,
      topFive: false,
      winning: false,
      inaugration: false,
    }

    newActiveLevel[level] = true
    setActiveLevel(newActiveLevel)
  }

  return (
    <>
    <Navbar />
    <div id="footer" className="bg-[url('/footer/green_bg.png')] w-full h-full bg-no-repeat bg-cover relative pt-[100px]">
      <div className="h-full bg-cover bg-center flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white mb-10 mt-4">Gallery</h1> 
        <div className="rounded bg-[url('//green_bg.png')] bg-no-repeat bg-cover shadow-2xl p-4 mb-4 mx-4 md:mx-20">
          <GalleryNavigation 
            activeLevel={activeLevel} 
            handleActiveLevel={hanldeActiveLevel}
          />
          {activeLevel.starNight && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
              {imageUrls.map((url, i) => (
                <div key={i} className="bg-gray-200 p-4 rounded-2xl max-w-xs"> 
                  <img
                    className="w-full h-full object-cover cursor-pointer rounded"
                    src={url.startsWith('/') ? url : `/public/${url}`}
                    alt={`Image ${i + 1}`}
                    onClick={() => handleImageClick(url)}
                  />
                </div>
              ))}
          </div>
          )}
          {activeLevel.delegation && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
              {imageUrls.map((url, i) => (
                <div key={i} className="bg-gray-200 p-4 rounded-2xl max-w-xs"> 
                  <img
                    className="w-full h-full object-cover cursor-pointer rounded"
                    src={url.startsWith('/') ? url : `/public/${url}`}
                    alt={`Image ${i + 1}`}
                    onClick={() => handleImageClick(url)}
                  />
                </div>
              ))}
          </div>
          )}
          {activeLevel.committee && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
              {imageUrls.map((url, i) => (
                <div key={i} className="bg-gray-200 p-4 rounded-2xl max-w-xs"> 
                  <img
                    className="w-full h-full object-cover cursor-pointer rounded"
                    src={url.startsWith('/') ? url : `/public/${url}`}
                    alt={`Image ${i + 1}`}
                    onClick={() => handleImageClick(url)}
                  />
                </div>
              ))}
          </div>
          )}
          {activeLevel.topFive && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
              {imageUrls.map((url, i) => (
                <div key={i} className="bg-gray-200 p-4 rounded-2xl max-w-xs"> 
                  <img
                    className="w-full h-full object-cover cursor-pointer rounded"
                    src={url.startsWith('/') ? url : `/public/${url}`}
                    alt={`Image ${i + 1}`}
                    onClick={() => handleImageClick(url)}
                  />
                </div>
              ))}
          </div>
          )}
          {activeLevel.winning && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
              {imageUrls.map((url, i) => (
                <div key={i} className="bg-gray-200 p-4 rounded-2xl max-w-xs"> 
                  <img
                    className="w-full h-full object-cover cursor-pointer rounded"
                    src={url.startsWith('/') ? url : `/public/${url}`}
                    alt={`Image ${i + 1}`}
                    onClick={() => handleImageClick(url)}
                  />
                </div>
              ))}
          </div>
          )}
          {activeLevel.inaugration && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
              {imageUrls.map((url, i) => (
                <div key={i} className="bg-gray-200 p-4 rounded-2xl max-w-xs"> 
                  <img
                    className="w-full h-full object-cover cursor-pointer rounded"
                    src={url.startsWith('/') ? url : `/public/${url}`}
                    alt={`Image ${i + 1}`}
                    onClick={() => handleImageClick(url)}
                  />
                </div>
              ))}
          </div>
          )}
        </div>
        {lightboxOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10 px-4 md:px-0">
            <div className="max-w-lg p-4 bg-white rounded-lg relative">
              <img
                className="w-full rounded"
                src={selectedImage.startsWith('/') ? selectedImage : `/public/${selectedImage}`}
                alt="Selected"
              />
              <button
                className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 cursor-pointer"
                onClick={handleCloseLightbox}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Gallery;