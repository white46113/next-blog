export function SocialProof() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">What Readers Say</h3>
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm text-gray-500">Sarah M.</span>
          </div>
          <p className="text-sm text-gray-600">"The expandable details are so helpful! Discovered my next favorite anime thanks to this list."</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="text-sm text-gray-500">Alex T.</span>
          </div>
          <p className="text-sm text-gray-600">"Love the genre breakdown and streaming info. Very comprehensive guide!"</p>
        </div>
      </div>
    </div>
  );
}