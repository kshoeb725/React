import Header from "../components/Header";
import Footer from "../components/Footer";
import PostContent from "../components/PostContent";
import NewsSection from "../components/NewsSection";
import SearchBar from "../components/SearchBar";

export default function PostPage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <PostContent />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
