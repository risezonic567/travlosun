import React, { useState, useEffect } from "react";
import { blogPosts } from "../data/blogData";
import BlogCard from "../components/Blog/BlogCard";
import { Helmet } from "react-helmet";

export default function Blogs() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const categories = ["All", ...new Set(blogPosts.map(p => p.category))];

  // Filtered Posts
  let filtered = blogPosts.filter(
    post =>
      (category === "All" || post.category === category) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort handling
  filtered = filtered.sort((a, b) => {
    if (sortOrder === "newest") return new Date(b.date) - new Date(a.date);
    if (sortOrder === "oldest") return new Date(a.date) - new Date(b.date);
    if (sortOrder === "views") return b.views - a.views;
    if (sortOrder === "popular") return b.likes - a.likes;
    return 0;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pt-32">
      <Helmet>
        <title>Travel Blog India | Tips, Guides & Inspiration – Travel O Sun  </title>
        <meta name="description" content="Discover travel blogs from Travel O Sun. Read expert tips, destination guides, and real travel stories to plan your next family holiday, honeymoon, or adventure trip across India." />
        <meta name="keywords" content="destination guides," />
        <link rel="canonical" href="https://travelosun.com/blog" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Latest Articles</h1>

      {/* Search + Filters */}
      <div className="flex flex-col gap-4 mb-8">

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search articles..."
          className="px-4 py-3 border rounded-lg w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category Pills */}
        <div className="flex gap-3 overflow-x-scroll no-scrollbar py-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition
                ${category === cat ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <select
          className="px-4 py-2 border rounded-lg w-full sm:w-64"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="views">Most Viewed</option>
          <option value="popular">Most Liked</option>
        </select>
      </div>

      {/* Blog Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length ? (
          filtered.map(post => <BlogCard key={post.slug} post={post} />)
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
}
