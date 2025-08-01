import { useState, useEffect, useCallback } from "react";

export const useImageOptimization = (src, options = {}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    width = 400,
    height = 400,
    quality = 80,
    format = "webp",
    fallbackFormat = "jpg",
  } = options;

  useEffect(() => {
    if (!src) return;

    const loadImage = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Check if browser supports WebP
        const supportsWebP = await checkWebPSupport();

        // Optimize Unsplash URLs
        if (src.includes("unsplash.com")) {
          const optimizedSrc = optimizeUnsplashUrl(src, {
            width,
            height,
            quality,
            format: supportsWebP ? "webp" : fallbackFormat,
          });
          setImageSrc(optimizedSrc);
        } else {
          // For other images, use as-is or apply other optimizations
          setImageSrc(src);
        }
      } catch (err) {
        setError(err.message);
        setImageSrc(src); // Fallback to original
      } finally {
        setIsLoading(false);
      }
    };

    loadImage();
  }, [src, width, height, quality, format, fallbackFormat]);

  return { imageSrc, isLoading, error };
};

// Check WebP support
const checkWebPSupport = () => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  });
};

// Optimize Unsplash URLs
const optimizeUnsplashUrl = (url, options) => {
  const { width, height, quality, format } = options;

  // Remove existing parameters
  const baseUrl = url.split("?")[0];

  // Add optimization parameters
  const params = new URLSearchParams({
    w: width,
    h: height,
    q: quality,
    fm: format,
    fit: "crop",
    crop: "face",
  });

  return `${baseUrl}?${params.toString()}`;
};

// Hook for lazy loading images
export const useLazyImage = (src, options = {}) => {
  const [inView, setInView] = useState(false);
  const [imageRef, setImageRef] = useState(null);

  const { threshold = 0.1, rootMargin = "50px" } = options;

  useEffect(() => {
    if (!imageRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(imageRef);

    return () => observer.disconnect();
  }, [imageRef, threshold, rootMargin]);

  const { imageSrc, isLoading, error } = useImageOptimization(
    inView ? src : null,
    options
  );

  return {
    ref: setImageRef,
    src: imageSrc,
    isLoading: isLoading && inView,
    error,
    inView,
  };
};

// Preload critical images
export const useImagePreloader = (images = []) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isPreloading, setIsPreloading] = useState(false);

  const preloadImages = useCallback(async () => {
    if (images.length === 0) return;

    setIsPreloading(true);
    const loaded = new Set();

    const promises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loaded.add(src);
          resolve();
        };
        img.onerror = () => resolve(); // Continue even if image fails
        img.src = src;
      });
    });

    await Promise.all(promises);
    setLoadedImages(loaded);
    setIsPreloading(false);
  }, [images]);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  return { loadedImages, isPreloading };
};
