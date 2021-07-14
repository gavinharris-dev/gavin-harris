import Link from "next/link";
import cn from "classnames";

type Props = {
  title: string;
  src: string;
  slug?: string;
  className?: string;
};

const CoverImage = ({ title, src, slug, className }: Props) => {
  const image = (
    <img
      src={src}
      alt={`${title}`}
      className='w-20 h-14 object-contain object-center'
    />
  );
  return (
    <div className={cn("sm:mx-0", className)}>
      {image}
      {/* {slug ? (
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )} */}
    </div>
  );
};

export default CoverImage;
