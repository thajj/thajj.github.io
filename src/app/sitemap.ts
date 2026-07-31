import { getPosts } from "./utils";
import { baseURL, routes } from "../resources";

export default function sitemap() {
  const staticPaths = ["", "/about", "/work"];
  if (routes["/blog"]) staticPaths.push("/blog");

  const staticRoutes = staticPaths.map((route) => ({
    url: `https://${baseURL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const works = getPosts(["src", "app", "(main)", "work", "projects"]).map((post) => ({
    url: `https://${baseURL}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const blogs = routes["/blog"]
    ? getPosts(["src", "app", "(main)", "blog", "posts"]).map((post) => ({
        url: `https://${baseURL}/blog/${post.slug}`,
        lastModified: post.metadata.publishedAt,
      }))
    : [];

  return [...staticRoutes, ...works, ...blogs];
}
