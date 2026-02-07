import { getPosts } from "./utils";
import { baseURL } from "../resources";

export default function sitemap() {
  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: `https://${baseURL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const works = getPosts(["src", "app", "work", "projects"]).map((post) => ({
    url: `https://${baseURL}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/about", "/blog", "/work", "/gallery"].map((route) => ({
    url: `https://${baseURL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...works];
}
