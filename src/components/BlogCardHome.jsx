import React from "react";
import { blogPosts } from "../data/blogData";
import BlogCard from "./Blog/BlogCard";

export default function BlogCardHome() {

    const latestPosts = blogPosts.slice(0, 4);

    return (
        <>
            <div className="relative flex justify-center p-5">

                <div className="max-w-7xl mx-auto py-16">
                    <div className="relative text-center my-16 max-w-3xl mx-auto font-serif space-y-4">
                        <h3 className="text-Lightcolor text-2xl font-semibold">Explore India:</h3>
                        <h2 className="text-5xl font-semibold text-primary">
                            <span className="text-gray-800">Recent</span> Latests Travel Articles & Offer
                        </h2>
                        <p className="text-xl">
                            Stay inspired with the latest travel tips, destination guides, and tour package insights from Travel O Sun. Discover how to plan affordable getaways, find flight deals, and explore India’s most loved destinations.
                        </p>
                    </div>
                    {/* Display the top 4 posts in a grid */}
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {latestPosts.length > 0 ? (
                            latestPosts.map(post => <BlogCard key={post.slug} post={post} />)
                        ) : (
                            <p className="col-span-full text-center">No articles found.</p>
                        )}
                    </div>
                </div>

            </div>
        </>
    );
}