export function TrendingAnime() {
  const trending = [
    { title: "Blue Lock: Season 2", viewers: "2.4M", trend: "up" },
    { title: "Demon Slayer: Infinity Castle", viewers: "3.1M", trend: "up" },
    { title: "One Piece: Wano Finale", viewers: "1.8M", trend: "stable" },
    { title: "Chainsaw Man: Academy", viewers: "2.7M", trend: "up" },
    { title: "Jujutsu Kaisen: Shibuya", viewers: "2.9M", trend: "down" }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
        <span className="w-2 h-6 bg-red-500 rounded-full mr-3"></span>
        Trending Now
      </h3>
      <div className="space-y-4">
        {trending.map((anime, index) => (
          <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 truncate">{anime.title}</p>
              <p className="text-sm text-gray-500">{anime.viewers} viewers</p>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              anime.trend === 'up' ? 'bg-green-100 text-green-800' : 
              anime.trend === 'down' ? 'bg-red-100 text-red-800' : 
              'bg-gray-100 text-gray-800'
            }`}>
              {anime.trend === 'up' ? '↑' : anime.trend === 'down' ? '↓' : '→'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}