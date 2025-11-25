'use client';
import { Button } from '@repo/ui';
import { useState } from 'react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">Anime Updates</h3>
      <p className="text-gray-600 mb-4 text-sm">Get weekly recommendations and news delivered to your inbox.</p>
      <div className="space-y-3">
        <input 
          type="email" 
          placeholder="your.email@example.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
        />
        <Button variant="primary" className="w-full justify-center text-sm">
          Subscribe
        </Button>
      </div>
    </div>
  );
}