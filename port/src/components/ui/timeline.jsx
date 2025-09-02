"use client";
import React, { useEffect, useRef, useState } from "react";

// Custom hook for intersection observer
const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

// Timeline Item Component with animations
const TimelineItem = ({ item, index, isLast, visibleItems, setVisibleItems }) => {
  const [itemRef, isVisible] = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: "-50px"
  });

  useEffect(() => {
    if (isVisible) {
      setVisibleItems(prev => new Set([...prev, index]));
    }
  }, [isVisible, index, setVisibleItems]);

  return (
    <div 
      ref={itemRef}
      className={`flex items-start mb-8 md:mb-12 relative transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 200}ms`
      }}
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center mr-6 md:mr-8">
        <div 
          className={`h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 relative z-10 flex-shrink-0 transition-all duration-500 ease-out ${
            isVisible 
              ? 'scale-100 shadow-lg shadow-blue-500/30' 
              : 'scale-0'
          }`}
          style={{
            transitionDelay: `${index * 200 + 100}ms`
          }}
        />
        <div className="relative mt-2">
          <div className="w-[2px] h-16 md:h-20 bg-neutral-200 dark:bg-neutral-700" />
          <div 
            className={`absolute top-0 left-0 w-[2px] bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-1000 ease-out ${
              visibleItems.has(index)
                ? 'h-16 md:h-20 opacity-100' 
                : 'h-0 opacity-0'
            }`}
            style={{
              transitionDelay: `${index * 300}ms`
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="mb-4">
          <h3 
            className={`text-xl md:text-2xl font-bold text-neutral-700 dark:text-neutral-300 mb-2 transition-all duration-600 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-4'
            }`}
            style={{
              transitionDelay: `${index * 200 + 200}ms`
            }}
          >
            {item.title}
          </h3>
        </div>
        <div 
          className={`bg-white dark:bg-neutral-800 p-4 md:p-6 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-700 ease-out hover:shadow-xl hover:scale-[1.02] ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8'
          }`}
          style={{
            transitionDelay: `${index * 200 + 400}ms`
          }}
        >
          {item.content}
        </div>
      </div>
    </div>
  );
};

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [titleRef, isTitleVisible] = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: "-20px"
  });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  // Add fallback if data is empty
  if (!data || data.length === 0) {
    return (
      <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white">
            Education Timeline
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            No education data available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4 transition-all duration-1000 ease-out ${
              isTitleVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            Education
          </h2>
        </div>
        
        <div ref={ref} className="relative max-w-4xl mx-auto">
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <TimelineItem 
                key={index} 
                item={item} 
                index={index} 
                isLast={index === data.length - 1}
                visibleItems={visibleItems}
                setVisibleItems={setVisibleItems}
              />
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-neutral-500">No timeline data available</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};