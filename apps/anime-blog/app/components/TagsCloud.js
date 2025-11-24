export function TagsCloud() {
  const tags = ['Action', 'Romance', 'Fantasy', 'Sci-Fi', 'Slice of Life', 'Horror', 'Comedy', 'Drama', 'Mystery', 'Adventure'];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Explore Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-purple-100 hover:text-purple-700 cursor-pointer transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}