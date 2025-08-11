// src/components/SearchBar.js
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState({ authors: [], news: [] });
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [autoFillText, setAutoFillText] = useState("");
  const inputRef = useRef(null);

  // Fetch suggestions
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!query.trim()) {
        setSuggestions({ authors: [], news: [] });
        setAutoFillText("");
        return;
      }

      try {
        const res = await axios.get(
          `http://localhost:8080/api/search/suggestions?q=${query}`
        );

        setSuggestions(res.data);
        setShowSuggestions(true);

        // Autofill: pick first result from authors or news
        const allItems = [...res.data.authors, ...res.data.news];
        if (allItems.length > 0) {
          const firstItem =
            allItems[0].type === "author"
              ? allItems[0].name
              : allItems[0].title;

          if (firstItem.toLowerCase().startsWith(query.toLowerCase())) {
            setAutoFillText(firstItem);
          } else {
            setAutoFillText("");
          }
        } else {
          setAutoFillText("");
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchSuggestions();
  }, [query]);

  const handleKeyDown = (e) => {
    const allItems = [...suggestions.authors, ...suggestions.news];

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % allItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + allItems.length) % allItems.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (allItems[activeIndex]) handleRedirect(allItems[activeIndex]);
    } else if (e.key === "Tab" || e.key === "ArrowRight") {
      if (autoFillText) {
        setQuery(autoFillText);
        setAutoFillText("");
        e.preventDefault();
      }
    }
  };

  const handleRedirect = (item) => {
    const url =
      item.type === "author"
        ? `https://codolog.in/author/${item.slug}/`
        : `https://codolog.in/${item.slug}/`;
    window.location.href = url;
  };

  const renderSuggestions = () => {
    const allItems = [...suggestions.authors, ...suggestions.news];
    if (!showSuggestions || allItems.length === 0) return null;

    return (
      <div
        className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-50"
        role="listbox"
      >
        {suggestions.authors.length > 0 && (
          <>
            <div className="px-3 py-1 text-xs font-semibold text-gray-500 border-b">
              Authors
            </div>
            {suggestions.authors.map((item, index) => (
              <div
                key={item.slug}
                role="option"
                className={`px-4 py-2 cursor-pointer ${
                  index === activeIndex ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
                onClick={() => handleRedirect(item)}
              >
                {item.name}
              </div>
            ))}
          </>
        )}

        {suggestions.news.length > 0 && (
          <>
            <div className="px-3 py-1 text-xs font-semibold text-gray-500 border-t">
              News
            </div>
            {suggestions.news.map((item, index) => {
              const adjustedIndex = index + suggestions.authors.length;
              return (
                <div
                  key={item.slug}
                  role="option"
                  className={`px-4 py-2 cursor-pointer ${
                    adjustedIndex === activeIndex
                      ? "bg-gray-200"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleRedirect(item)}
                >
                  {item.title}
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="relative max-w-xl mx-auto mt-4">
      {/* Search Input */}
      <div className="relative">
        {/* Autofill Overlay */}
        {autoFillText && autoFillText.toLowerCase() !== query.toLowerCase() && (
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded text-gray-400 absolute top-0 left-0 pointer-events-none"
            value={autoFillText}
            readOnly
          />
        )}

        {/* Main Input */}
        <input
          type="text"
          placeholder="Search Here..."
          className="w-full px-4 py-2 border border-gray-300 rounded bg-transparent relative z-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          ref={inputRef}
        />
      </div>

      {/* Suggestions */}
      {renderSuggestions()}
    </div>
  );
};

export default SearchBar;
