'use client';
import Image from 'next/image';
import { Button } from '@repo/ui';
import { useState } from 'react';

export function AnimeCard({ anime, rank }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 mb-8 group border border-gray-100">
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center text-lg shadow-lg">
            #{rank}
          </span>
        </div>
        <div className="h-64 overflow-hidden">
          <Image
            src={anime.image}
            alt={anime.title}
            width={800}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
            {anime.genre.split(',')[0]}
          </span>
          <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="font-bold text-gray-900">{anime.rating}</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
          {anime.title}
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Studio:</span>
            <span className="font-medium">{anime.studio}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Episodes:</span>
            <span className="font-medium">{anime.episodes}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Season:</span>
            <span className="font-medium">{anime.season}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Streaming:</span>
            <span className="font-medium">{anime.streaming[0]}</span>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">{anime.description}</p>

        {/* Themes */}
        <div className="flex flex-wrap gap-2 mb-4">
          {anime.themes.map((theme, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {theme}
            </span>
          ))}
        </div>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">Detailed Overview</h4>
            <p className="text-gray-600 leading-relaxed mb-4">{anime.detailedDescription}</p>
            <div className="flex flex-wrap gap-2">
              {anime.streaming.map((platform, index) => (
                <span key={index} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-300">
                  Available on {platform}
                </span>
              ))}
            </div>
          </div>
        )}

        <Button 
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline" 
          className="w-full justify-center mt-4"
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <span className="ml-2">↑</span>
            </>
          ) : (
            <>
              <span>Expand Details</span>
              <span className="ml-2">↓</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
}