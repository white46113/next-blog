export function UpcomingReleases() {
  const upcoming = [
    { title: "Attack on Titan: Final Chapter", date: "Mar 15, 2025", type: "Movie" },
    { title: "My Hero Academia S7", date: "Apr 5, 2025", type: "TV" },
    { title: "The Eminence in Shadow S3", date: "May 12, 2025", type: "TV" },
    { title: "Solo Leveling: Arise", date: "Jun 8, 2025", type: "TV" }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg p-6 text-white">
      <h3 className="text-xl font-bold mb-4">Coming Soon</h3>
      <div className="space-y-3">
        {upcoming.map((release, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <p className="font-semibold">{release.title}</p>
            <div className="flex justify-between items-center text-sm opacity-90">
              <span>{release.date}</span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">{release.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}