import { join } from "path";
import fs from "fs";

const postsDirectory = join(process.cwd(), "_posts");

function frontMatter(contents: string) {
  const parts = contents.split("---\n");
  if (parts.length === 1 || parts.length === 3) {
    try {
      return {
        data: parts[1] ? JSON.parse(parts[1]) : {},
        content: parts[2] ?? parts[0],
      };
    } catch (err) {
      return {};
    }
  }
  return {};
}

function summaryAndDetail(contents: string): {
  summary: string;
  detail?: string;
} {
  const split = contents.split("*******DETAIL*******");

  if (split.length === 2) {
    return {
      summary: split[0],
      detail: split[1],
    };
  }

  return {
    summary: contents,
    detail: undefined,
  };
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const m = frontMatter(fileContents);
  const { data } = m;
  let { content } = m;

  if (!content) {
    content = "";
  }

  const { summary, detail } = summaryAndDetail(content);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "summary") {
      items.summary = summary;
    }
    if (field === "detail") {
      items.detail = detail || "";
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      // eslint-disable-next-line no-nested-ternary
      post1.startDate === post2.startDate ? 0: 
      post1.startDate > post2.startDate ? -1 : 1
    );
  return posts;
}
