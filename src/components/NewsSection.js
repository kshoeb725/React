import React, { useEffect, useState } from "react";

export default function NewsSection() {
  const [newsList, setNewsList] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("http://localhost:8080/api/news")
      .then((res) => res.json())
      .then((data) => setNewsList(data))
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  const filteredNews = filter === "all"
    ? newsList
    : newsList.filter(news => news.category === filter);

  return (
    <div className="max-w-4xl mx-auto my-12 px-4">
      <h2 className="text-2xl font-bold mb-4">📰 News Section</h2>

      {/* Filter buttons */}
      <div className="flex gap-3 mb-6">
        {["all", "new", "old", "trending"].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full text-sm capitalize ${
              filter === type
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* News cards */}
      {filteredNews.length > 0 ? (
        <div className="space-y-4">
          {filteredNews.map(news => (
            <div
              key={news.id}
              className="border p-4 rounded-lg shadow-sm hover:shadow transition"
            >
              <h3 className="text-lg font-semibold">{news.title}</h3>
              <p className="text-sm text-gray-500 mb-2 capitalize">
                Category: {news.category} | Published: {new Date(news.publishedAt).toLocaleString()}
              </p>
              <p className="text-gray-700">{news.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No news found in this category.</p>
      )}
    </div>
  );
}
