export function GenrePoll() {
  const genres = [
    { name: "Action", votes: 42, color: "bg-red-500" },
    { name: "Romance", votes: 38, color: "bg-pink-500" },
    { name: "Fantasy", votes: 35, color: "bg-purple-500" },
    { name: "Sci-Fi", votes: 31, color: "bg-blue-500" },
    { name: "Slice of Life", votes: 28, color: "bg-green-500" },
    { name: "Mystery", votes: 25, color: "bg-indigo-500" }
  ];

  const totalVotes = genres.reduce((sum, genre) => sum + genre.votes, 0);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Favorite Genres</h3>
      <p className="text-gray-600 mb-4 text-sm">Community votes on most anticipated genres for 2025</p>
      <div className="space-y-3">
        {genres.map((genre, index) => {
          const percentage = Math.round((genre.votes / totalVotes) * 100);
          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{genre.name}</span>
                <span className="text-sm text-gray-500">{percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${genre.color} transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-gray-500 text-xs mt-4 text-center">{totalVotes} total votes</p>
    </div>
  );
}