import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import PostWidget from "@/components/PostWidget";
import Head from "next/head";
import Image from "next/image";
import { title } from "process";

const posts = [
  {
    title: "React Testing",
    excerpt: "Learn React Testing",
  },
  {
    title: "React with Tailwind",
    excerpt: "Learn React with Tailwind",
  },
];

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title> CMS BLOG</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => (
              <div>
                <PostCard post={post} key={post.title} />
              </div>
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
