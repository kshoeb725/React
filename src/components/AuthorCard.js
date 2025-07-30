import React from "react";

export default function AuthorCard() {
  const authorUrl = "https://codolog.in/author/prem01/";

  return (
    <div
      onClick={() => window.open(authorUrl, "_blank")}
      className="cursor-pointer flex items-center gap-4 p-4 border rounded-md shadow hover:shadow-md transition duration-200 hover:bg-gray-50"
    >
      <img
        src="https://codolog.in/wp-content/uploads/2023/10/Untitled-design-4.png"
        alt="Author"
        className="w-14 h-14 rounded-full object-cover"
      />
      <div>
        <h3 className="text-lg font-semibold text-blue-600">Prem Kumar</h3>
        <p className="text-sm text-gray-600">View all posts by this author</p>
      </div>
    </div>
  );
}
