"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageData {
  id: number;
  url: string;
  title: string;
}

type Position = "left" | "center" | "right";

interface CardPosition {
  imageIndex: number;
  position: Position;
}

const InfiniteImageSlider: React.FC<{images: ImageData[]}> = ({images}) => {
  // const images: ImageData[] = [
  //   { id: 1, url: "/assets/doc.png", title: "Document" },
  //   { id: 2, url: "/assets/invoice.png", title: "Invoice" },
  //   { id: 3, url: "/assets/license.png", title: "License" },
  // ];

  const [cards, setCards] = useState<CardPosition[]>([
    { imageIndex: 0, position: "left" },
    { imageIndex: 1, position: "center" },
    { imageIndex: 2, position: "right" },
  ]);

  const [isScanning, setIsScanning] = useState(true);
  const [rotationCount, setRotationCount] = useState(0);
  const [scanDirection, setScanDirection] = useState<"down" | "up">("down");

  useEffect(() => {
    const scanTimer = setTimeout(() => {
      setIsScanning(false);
    }, 800);

    return () => clearTimeout(scanTimer);
  }, [rotationCount]);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setIsScanning(true);
      setScanDirection("down");
      setRotationCount((prev) => prev + 1);

      setTimeout(() => {
        setScanDirection("up");
        setRotationCount((prev) => prev + 1);

        setTimeout(() => {
          setCards((prevCards) => {
            return prevCards.map((card) => {
              let newPosition: Position;
              let newImageIndex = card.imageIndex;

              if (card.position === "center") {
                newPosition = "left";
              } else if (card.position === "right") {
                newPosition = "center";
              } else {
                newPosition = "right";
                newImageIndex = (card.imageIndex + 3) % images.length;
              }

              return { imageIndex: newImageIndex, position: newPosition };
            });
          });

          setIsScanning(false);
        }, 800);
      }, 800);
    }, 4000);

    return () => clearInterval(slideTimer);
  }, [images.length]);

  const getPositionStyles = (position: Position) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const isTablet =
      typeof window !== "undefined" &&
      window.innerWidth >= 768 &&
      window.innerWidth < 1024;

    const styles = {
      left: {
        x: isMobile ? "-100%" : isTablet ? "-105%" : "-110%",
        scale: isMobile ? 0.65 : 0.75,
        opacity: isMobile ? 0.4 : 0.6,
        filter: "brightness(0.6)",
        zIndex: 10,
      },
      center: {
        x: "0%",
        scale: 1,
        opacity: 1,
        filter: "brightness(1)",
        zIndex: 30,
      },
      right: {
        x: isMobile ? "100%" : isTablet ? "105%" : "110%",
        scale: isMobile ? 0.65 : 0.75,
        opacity: isMobile ? 0.4 : 0.6,
        filter: "brightness(0.6)",
        zIndex: 10,
      },
    };
    return styles[position];
  };

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-7xl  h-[400px] sm:h-[500px] md:h-[440px] flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center ">
          {cards.map((card, idx) => {
            const image = images[card.imageIndex];
            const isCenter = card.position === "center";

            return (
              <motion.div
                key={`card-${idx}`}
                animate={getPositionStyles(card.position)}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute w-full max-w-[220px] "
              >
                <div
                  className={`relative ${
                    isCenter ? "h-64 sm:h-80 md:h-96" : "h-56 sm:h-72 md:h-80"
                  } overflow-hidden transition-all duration-700`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />

                  {isCenter && isScanning && (
                    <motion.div
                      key={`scan-${rotationCount}-${scanDirection}`}
                      className="absolute left-0 right-0 pointer-events-none"
                      style={{ height: "40px" }}
                      initial={
                        scanDirection === "down"
                          ? { top: "0%" }
                          : { bottom: "0%" }
                      }
                      animate={
                        scanDirection === "down"
                          ? { top: "100%" }
                          : { bottom: "100%" }
                      }
                      transition={{ duration: 0.8, ease: "linear" }}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-black/60 shadow-[0_0_10px_rgba(0,0,0,0.5),0_0_18px_rgba(0,0,0,0.3)]" />
                        <div className="absolute top-[12px] left-0 right-0 h-[2px] bg-black/45 shadow-[0_0_6px_rgba(0,0,0,0.35)]" />
                        <div className="absolute top-[24px] left-0 right-0 h-[2px] bg-black/45 shadow-[0_0_6px_rgba(0,0,0,0.35)]" />
                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/60 shadow-[0_0_10px_rgba(0,0,0,0.5),0_0_18px_rgba(0,0,0,0.3)]" />

                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute top-0 bottom-0 w-[2px] bg-black/40 shadow-[0_0_5px_rgba(0,0,0,0.3)]"
                            style={{ left: `${i * 9.09}%` }}
                          />
                        ))}

                        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/15 blur-sm" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfiniteImageSlider;
