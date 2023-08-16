'use client'

import Footer from '@/components/Footer';
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
  const imageUrls: { [key: string]: string[] } = {
    starNight: [
      "/img/1.jpg",
      "/img/2.jpg",

    ],
    delegation: [
      "/img/3.jpg",
      "/img/4.jpg",

    ],
    committee: [
      "/img/5.jpg",
      "/img/6.jpg",

    ],
    topFive: [
      "/img/7.jpg",
      "/img/8.jpg",

    ],
    winning: [
      "/img/9.jpg",

    ],
    inaugration: [
      "https://kiit.ac.in/wp-content/uploads/2021/11/KIIT-MUN-2021.jpg",
    ],
  };

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
              {imageUrls.starNight.map((url, i) => (
                <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                  <img
                      key={i}
                    className="w-full h-full object-cover cursor-pointer rounded"
                    src={url}
                    alt={`Image ${i + 1}`}
                    onClick={() => handleImageClick(url)}
                  />
                </div>
              ))}
          </div>
          )}
          {activeLevel.delegation && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
              {imageUrls.delegation.map((url, i) => (
                <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                  <img
                    className="w-full h-full object-cover cursor-pointer rounded"
                    src={url}
                    alt={`Image ${i + 1}`}
                    onClick={() => handleImageClick(url)}
                  />
                </div>
              ))}
          </div>
          )}
          {activeLevel.committee && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
              {imageUrls.committee.map((url, i) => (
                <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                  <img
                    className="w-full h-full object-cover cursor-pointer rounded"
                    src={url}
                    alt={`Image ${i + 1}`}
                    onClick={() => handleImageClick(url)}
                  />
                </div>
              ))}
          </div>
          )}
          {activeLevel.topFive && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
              {imageUrls.topFive.map((url, i) => (
                <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                  <img
                    className="w-full h-full object-cover cursor-pointer rounded"
                    src={url}
                    alt={`Image ${i + 1}`}
                    onClick={() => handleImageClick(url)}
                  />
                </div>
              ))}
          </div>
          )}
          {activeLevel.winning && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
              {imageUrls.winning.map((url, i) => (
                <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                  <img
                    className="w-full h-full object-cover cursor-pointer rounded"
                    src={url}
                    alt={`Image ${i + 1}`}
                    onClick={() => handleImageClick(url)}
                  />
                </div>
              ))}
          </div>
          )}
          {activeLevel.inaugration && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
              {imageUrls.inaugration.map((url, i) => (
                <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                  <img
                    className="w-full h-full object-cover cursor-pointer rounded"
                    src={url}
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
    <Footer />
    </>
  );
};

export default Gallery;