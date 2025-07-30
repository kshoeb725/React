import Header from "../components/Header";
import Footer from "../components/Footer";
import PostContent from "../components/PostContent";
import AuthorCard from "../components/AuthorCard";
export default function PostPage() {
  return (
    <div>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <PostContent />

        <div className="mt-12">
          <AuthorCard />
        </div>
      </main>
      <Footer />
    </div>
  );
}
