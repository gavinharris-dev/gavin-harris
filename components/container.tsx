import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Container = ({ children }: Props) => (
  <div className='container mx-auto px-5 h-full'>{children}</div>
);

export default Container;
