import Author from "../types/author";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => (
  <div>
    <div className='mb-5'>
      <CoverImage title={title} src={coverImage} />
    </div>
    <h3 className='text-3xl mb-3 leading-snug'>
      <Link as={`/posts/${slug}`} href='/posts/[slug]'>
        <a className='hover:underline'>{title}</a>
      </Link>
    </h3>
    <div className='text-lg mb-4'>
      <DateFormatter dateString={date} />
    </div>
    <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
    <Avatar name={author.name} picture={author.picture} />
  </div>
);

export default PostPreview;
