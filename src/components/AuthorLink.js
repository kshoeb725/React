import React, { useEffect, useState } from "react";

export default function AuthorLink({ authorSlug }) {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    // Fetch author details from backend using slug
    fetch(`http://localhost:8080/api/authors/${authorSlug}`)
      .then((res) => res.json())
      .then((data) => setAuthor(data))
      .catch((err) => console.error("Author fetch error:", err));
  }, [authorSlug]);

  if (!author) return <p className="text-sm text-gray-400">Loading author...</p>;

  return (
    <p className="text-sm text-gray-500">
      By{" "}
      <a
        href={author.url || `https://codolog.in/author/${author.slug}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {author.name}
      </a>
    </p>
  );
}
