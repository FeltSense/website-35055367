'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: '/gallery/skincare-routine-1.jpg',
      alt: 'Luxurious skincare routine with natural ingredients',
      category: 'Routine'
    },
    {
      id: 2,
      src: '/gallery/product-shot-serum.jpg',
      alt: 'Premium vitamin C serum with botanical extracts',
      category: 'Products'
    },
    {
      id: 3,
      src: '/gallery/natural-ingredients.jpg',
      alt: 'Organic botanical ingredients and sustainable sourcing',
      category: 'Ingredients'
    },
    {
      id: 4,
      src: '/gallery/skincare-results.jpg',
      alt: 'Visible skincare transformation results',
      category: 'Results'
    },
    {
      id: 5,
      src: '/gallery/sustainable-packaging.jpg',
      alt: 'Eco-friendly sustainable beauty packaging',
      category: 'Sustainability'
    },
    {
      id: 6,
      src: '/gallery/lab-science.jpg',
      alt: 'Science-backed skincare formulation laboratory',
      category: 'Science'
    },
    {
      id: 7,
      src: '/gallery/skincare-routine-2.jpg',
      alt: 'Complete anti-aging skincare regimen',
      category: 'Routine'
    },
    {
      id: 8,
      src: '/gallery/product-collection.jpg',
      alt: 'Complete Bloom & Wild skincare collection',
      category: 'Products'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-slate-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Our Work
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the transformative power of science-backed skincare through our curated gallery 
            of products, ingredients, and real results that celebrate natural beauty.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Category Tag */}
              <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {image.category}
              </div>
              
              {/* Hover Info */}
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium line-clamp-2">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                width={1200}
                height={800}
                className="w-full h-full object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-xl font-bold transition-colors duration-200"
              >
                ×
              </button>
              
              {/* Navigation */}
              {selectedImage > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage - 1);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-xl font-bold transition-colors duration-200"
                >
                  ←
                </button>
              )}
              
              {selectedImage < galleryImages.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage + 1);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-xl font-bold transition-colors duration-200"
                >
                  →
                </button>
              )}
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-block bg-primary-500 text-white px-2 py-1 rounded text-sm font-medium mb-2">
                      {galleryImages[selectedImage].category}
                    </span>
                    <p className="text-white text-sm">
                      {galleryImages[selectedImage].alt}
                    </p>
                  </div>
                  <span className="text-white/70 text-sm">
                    {selectedImage + 1} / {galleryImages.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-6 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">✨</span>
            </div>
            <div className="text-left">
              <p className="text-slate-900 font-semibold">Ready to transform your skin?</p>
              <p className="text-slate-600 text-sm">Discover our science-backed skincare collection</p>
            </div>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}