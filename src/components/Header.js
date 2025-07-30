export default function Header() {
  return (
    <header className="bg-white shadow border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-blue-600 font-heading">
          CodoLog
        </a>
        <nav className="space-x-6 text-sm font-body text-gray-600">
          <a href="/">Home</a>
          <a href="/">C</a>
          <a href="/">C++</a>
          <a href="/">Java</a>
          <a href="/">Contact</a>
        </nav>
      </div>
    </header>
  );
}
