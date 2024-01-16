import Image from "next/image";

type Props = {
  title: string;
  src: string;
};

const CoverImage = ({ title, src }: Props) => (
  <Image
    className='mx-0 print:hidden'
    src={src}
    width={80}
    height={80}
    alt={`${title}`}
  />
);

export default CoverImage;
