import Author from "./author";

type PostType = {
  slug: string;
  title: string;
  startDate: string;
  endDate?: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  summary: string;
  detail: string;
  ogImage: {
    url: string;
  };
};

export default PostType;
