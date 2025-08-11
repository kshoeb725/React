import React, { useState, useEffect } from "react";

export default function AuthorLink({ authorSlug }) {
  const [author, setAuthor] = useState(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/api/authors/${authorSlug}`)
      .then((res) => res.json())
      .then((data) => setAuthor(data))
      .catch((err) => console.error("Error fetching author:", err));
  }, [authorSlug]);

  if (!author) return <p className="text-sm text-gray-400">Loading author...</p>;

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a
        href={author.url || `https://codolog.in/author/${author.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-600 font-medium hover:underline"
      >
        By {author.name}
      </a>

      {/* Tooltip */}
      {hovered && (
        <div className="absolute z-10 mt-2 left-0 bg-white border shadow-lg p-4 rounded-md w-64 transition duration-150">
          <div className="flex items-center gap-4">
            <img
              src={author.image || "https://via.placeholder.com/60"}
              alt={author.name}
              className="w-14 h-14 rounded-full object-cover border"
            />
            <div>
              <h4 className="text-base font-semibold">{author.name}</h4>
              <p className="text-xs text-gray-500">{author.bio || "Author of multiple tech articles."}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
