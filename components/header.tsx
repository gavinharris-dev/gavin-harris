import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import Link from "next/link";

type HeaderProps = {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
};

export const Header = ({ setDarkMode, darkMode }: HeaderProps) => (
  <h2 className='flex flex-col text-base font-bold tracking-tight md:tracking-tighter leading-tight mb-4 pt-2 print:hidden'>
    <button
      className='self-end mx-8'
      type='button'
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <IoSunnyOutline size='28px' />
      ) : (
        <IoMoonOutline size='28px' />
      )}
    </button>
  </h2>
);
