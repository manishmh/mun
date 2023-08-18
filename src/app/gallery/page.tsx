'use client'


import Footer from '@/components/Footer';
import GalleryNavigation from '@/components/GalleryNavigation';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

export type activelevelProps = {
  starNight: boolean;
  delegation: boolean;
  committee: boolean;
  topFive: boolean;
  winning: boolean;
  inaugration: boolean;
};

const Gallery = () => {
  const imageUrls: { [key: string]: string[] } = {
    starNight: [
      "https://i.imgur.com/jf9c05e.jpg",
      "https://i.imgur.com/SXws5q7.jpg",
      "https://i.imgur.com/Q88qqCF.jpg",
      "https://i.imgur.com/2US1Im9.jpg",
      "https://i.imgur.com/xec4qA3.jpg",
      "https://i.imgur.com/IXRAuxZ.jpg",
      "https://i.imgur.com/nC0IBy9.jpg",
      "https://i.imgur.com/mUkf7uZ.jpg",
      "https://i.imgur.com/G0UGWRG.jpg",
      "https://i.imgur.com/Xnokqi1.jpg",
      "https://i.imgur.com/0K7PRUE.jpg",
      "https://i.imgur.com/R7mQtMW.jpg",
      "https://i.imgur.com/24DLDne.jpg",
      "https://i.imgur.com/YkJrPDI.jpg",
      "https://i.imgur.com/NInuD8x.jpg",
      "https://i.imgur.com/Mlt4irJ.jpg",
    ],
    delegation: [
      "https://i.imgur.com/9FrrG4h.jpg",
      "https://i.imgur.com/quNan07.jpg",
      "https://i.imgur.com/rJaEnz3.jpg",
      "https://i.imgur.com/ROvxMNN.jpg",
      "https://i.imgur.com/nGNKtEv.jpg",
      "https://i.imgur.com/L2IsdW8.jpg",
      "https://i.imgur.com/yeWqASx.jpg",
      "https://i.imgur.com/TbWFUxQ.jpg",
      "https://i.imgur.com/TW4IN2n.jpg",
      "https://i.imgur.com/eJkYb02.jpg",
      "https://i.imgur.com/pPYSoIK.jpg",
      "https://i.imgur.com/QWuOo2A.jpg",
      "https://i.imgur.com/tkDV4u1.jpg",
      "https://i.imgur.com/Kjihx2k.jpg",
      "https://i.imgur.com/BdiITkY.jpg",
      "https://i.imgur.com/ozmJURW.jpg",

    ],
    committee: [
      "https://i.imgur.com/TccpIky.jpg",
      "https://i.imgur.com/zjieypk.jpg",
      "https://i.imgur.com/Xmwj0gc.jpg",
      "https://i.imgur.com/eDGsSG6.jpg",
      "https://i.imgur.com/rxttim9.jpg",
      "https://i.imgur.com/Mj5n0Xm.jpg",
      "https://i.imgur.com/0JgMn4O.jpg",
      "https://i.imgur.com/CpIgpZa.jpg",
      "https://i.imgur.com/cqgvzNH.jpg",
      "https://i.imgur.com/CY4AZyh.jpg",
      "https://i.imgur.com/u9tzRRE.jpg",
      "https://i.imgur.com/IcEeB8z.jpg",
      "https://i.imgur.com/lZH1Ff0.jpg",
      "https://i.imgur.com/03v9xn9.jpg",
      "https://i.imgur.com/cjzTRIJ.jpg",
      "https://i.imgur.com/MsntwCH.jpg",
    ],
    topFive: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",

    ],
    winning: [
      "https://i.imgur.com/oTUOafS.jpg",
      "https://i.imgur.com/MAyeZEN.jpg",
      "https://i.imgur.com/QTMBcJY.jpg",
      "https://i.imgur.com/m6a7X13.jpg",
      "https://i.imgur.com/RCyZKm3.jpg",
      "https://i.imgur.com/TYBzC4v.jpg",
      "https://i.imgur.com/xzEA1X5.jpg",
      "https://i.imgur.com/ZocAhbW.jpg",
      "https://i.imgur.com/pGKpPjZ.jpg",
      "https://i.imgur.com/2E07ehN.jpg",
      "https://i.imgur.com/ueOSW2L.jpg",
      "https://i.imgur.com/4bhKchF.jpg",
      "https://i.imgur.com/WMVWR8s.jpg",
      "https://i.imgur.com/ysTQ0cB.jpg",
      "https://i.imgur.com/YySTNjF.jpg",
      "https://i.imgur.com/tb3nyi3.jpg",
    ],
    inaugration: [
      "https://i.imgur.com/rjr4gDo.jpg",
      "https://i.imgur.com/SzENsyy.jpg",
      "https://i.imgur.com/wBw6VLo.jpg",
      "https://i.imgur.com/2F7yJXH.jpg",
      "https://i.imgur.com/IXBF4T3.jpg",
      "https://i.imgur.com/XRCb8Ab.jpg",
      "https://i.imgur.com/nUUo6EX.jpg",
      "https://i.imgur.com/STMH4G4.jpg",
      "https://i.imgur.com/w92Qpro.jpg",
      "https://i.imgur.com/FANDwlP.jpg",
      "https://i.imgur.com/ok5n0K5.jpg",
      "https://i.imgur.com/hfexg3C.jpg",
      "https://i.imgur.com/H0fz2ZY.jpg",
      "https://i.imgur.com/xZy7WlU.jpg",
      "https://i.imgur.com/E5mq7K7.jpg",
      "https://i.imgur.com/UPJG3RQ.jpg",
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
  });

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
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
    };

    newActiveLevel[level] = true;
    setActiveLevel(newActiveLevel);
  };

  return (
    <>
      <Navbar />
      <div
        id="footer"
        className="bg-[url('/footer/green_bg.png')] w-full h-full bg-no-repeat bg-cover relative pt-[100px]"
      >
        <div className="h-full bg-cover bg-center flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white mb-10 mt-4">Gallery</h1>
          <div className="rounded bg-[url('//green_bg.png')] bg-no-repeat bg-cover shadow-2xl p-4 mb-4 mx-4 md:mx-20">
            <GalleryNavigation
              activeLevel={activeLevel}
              handleActiveLevel={hanldeActiveLevel}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {activeLevel.starNight && (
                imageUrls.starNight.map((url, i) => (
                  <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                    <img
                      className="w-full h-full object-cover cursor-pointer rounded"
                      src={url}
                      alt={`Image ${i + 1}`}
                      onClick={() => handleImageClick(url)}
                    />
                  </div>
                ))
              )}
              {activeLevel.delegation && (
                imageUrls.delegation.map((url, i) => (
                  <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                    <img
                      className="w-full h-full object-cover cursor-pointer rounded"
                      src={url}
                      alt={`Image ${i + 1}`}
                      onClick={() => handleImageClick(url)}
                    />
                  </div>
                ))
              )}
              {activeLevel.committee && (
                imageUrls.committee.map((url, i) => (
                  <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                    <img
                      className="w-full h-full object-cover cursor-pointer rounded"
                      src={url}
                      alt={`Image ${i + 1}`}
                      onClick={() => handleImageClick(url)}
                    />
                  </div>
                ))
              )}
              {activeLevel.topFive && (
                imageUrls.topFive.map((url, i) => (
                  <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                    <img
                      className="w-full h-full object-cover cursor-pointer rounded"
                      src={url}
                      alt={`Image ${i + 1}`}
                      onClick={() => handleImageClick(url)}
                    />
                  </div>
                ))
              )}
              {activeLevel.winning && (
                imageUrls.winning.map((url, i) => (
                  <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                    <img
                      className="w-full h-full object-cover cursor-pointer rounded"
                      src={url}
                      alt={`Image ${i + 1}`}
                      onClick={() => handleImageClick(url)}
                    />
                  </div>
                ))
              )}
              {activeLevel.inaugration && (
                imageUrls.inaugration.map((url, i) => (
                  <div key={i} className="bg-gray-200 p-2 rounded-2xl max-w-xs">
                    <img
                      className="w-full h-full object-cover cursor-pointer rounded"
                      src={url}
                      alt={`Image ${i + 1}`}
                      onClick={() => handleImageClick(url)}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
          {lightboxOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10 px-4 md:px-0">
              <div className="max-w-lg p-4 bg-white rounded-lg relative">
                <img
                  className="w-full rounded"
                  src={selectedImage}
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
