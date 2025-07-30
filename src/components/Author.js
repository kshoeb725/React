import React, { useState } from "react";

export default function Author ({
  name = "Admin",
  url = "https://codolog.in/author/prem01/",
  image = "https://codolog.in/wp-content/uploads/2024/07/cropped-cropped-1.png",
  bio = "20+ posts published",
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span
        onClick={() => window.open(url, "_blank")}
        className="text-blue-600 hover:underline cursor-pointer"
      >
        {name}
      </span>

      {showTooltip && (
        <div className="absolute z-10 top-6 left-0 w-64 bg-white border shadow-lg rounded p-3 text-sm text-gray-800">
          <div className="flex items-center gap-3">
            <img
              src={image}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold">{name}</div>
              <div className="text-gray-500 text-xs">{bio}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
