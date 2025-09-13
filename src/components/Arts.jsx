const arts = [
  { id: 1, title: "Art Piece 1", imageUrl: "#", description: "" },
  { id: 2, title: "Art Piece 2", imageUrl: "#", description: "" },
  { id: 3, title: "Art Piece 3", imageUrl: "#", description: "" },
  { id: 4, title: "Art Piece 4", imageUrl: "#", description: "" },
  { id: 5, title: "Art Piece 5", imageUrl: "#", description: "" },
  { id: 6, title: "Art Piece 6", imageUrl: "#", description: "" },
];

export default function Arts() {
  return (
    <section className="w-full max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-mono font-bold mb-8 text-left text-white">
        <span className="text-off-red-500">#</span>artworks
      </h2>
      <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {arts.map((art) => (
          <div
            key={art.id}
            className="border border-white/50 rounded-md px-6 py-5 flex flex-col min-h-[180px] bg-black/60 hover:border-red-500 transition duration-200"
          >
            {/* Placeholder for future image */}
            <div className="mb-4 h-28 bg-white/10 rounded-md flex items-center justify-center text-gray-500 font-mono italic">
              Image coming soon
            </div>

            {/* Title placeholder */}
            <div className="font-bold text-lg mb-2 text-white font-mono">
              {art.title}
            </div>

            {/* Empty description area for future use */}
            <div className="flex-grow text-gray-400 mb-4 text-sm font-mono">
              {art.description || "Description coming soon."}
            </div>

            {/* Placeholder for future links/buttons */}
            <div className="flex gap-3">
              <button
                disabled
                className="px-4 py-1 border border-red-500 rounded font-mono text-xs text-red-500 cursor-not-allowed opacity-50"
              >
                Link unavailable
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
