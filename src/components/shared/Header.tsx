'use client';
import { menu } from '@/app/constants/menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Set a scroll threshold, for example, 100 pixels
      const scrollThreshold = 100;

      if (scrollY >= scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the event listener to the window scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'w-full py-6 fixed top-0 text-white transition-colors duration-300',
        isScrolled && 'sticky bg-black py-4',
      )}
    >
      <nav className="container flex flex-col md:flex-row md:items-center justify-between">
        <Link
          className="bg-black md:bg-transparent md:relative md:w-fit w-full absolute top-0 left-0 pl-8 py-6 md:pl-0 md:py-0 z-40"
          href={'/'}
        >
          <h2 className="font-black text-2xl">Hushibul</h2>
        </Link>

        <ul
          className={cn(
            'flex flex-col md:flex-row md:items-center -translate-x-full md:translate-x-0 w-1/2 md:w-fit  gap-y-8 md:gap-y-0 bg-black md:bg-transparent gap-x-4 h-screen md:h-fit absolute top-16 left-0 md:relative md:top-0 transition-all duration-300 opacity-0 md:opacity-100 pl-8 pt-8 md:pl-0 md:pt-0 z-40',
            isMenuOpen && 'translate-x-0 opacity-100',
          )}
        >
          {menu.map((item) => (
            <li
              className="relative text-sm font-semibold after:transition-all after:duration-300 after:content-[''] after:absolute after:w-0 after:h-[1px] after:-bottom-[4px] after:left-0 after:bg-white hover:after:w-full"
              key={item?.id}
            >
              <Link href={item?.path}>{item?.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-7 right-6 flex flex-col md:hidden gap-y-1 z-50"
      >
        {/* <span className="relative w-4 h-[2px] bg-white inline-block before:absolute before:content-[''] before:-top-[6px] before:left-0 before:bg-white before:w-4 before:h-[2px] before:transition-transform before:duration-300 after:absolute after:content-[''] after:-bottom-[6px] after:left-0 after:w-4 after:h-[2px] after:bg-white group-hover:before:rotate-45 group-hover:after:-rotate-45 after:transition-transform after:duration-300"></span> */}
        <span
          className={cn(
            'relative w-4 h-[2px] bg-white inline-block transition-transform duration-500',
            isMenuOpen && 'rotate-45 translate-y-[6px]',
          )}
        ></span>
        <span
          className={cn(
            'relative w-4 h-[2px] bg-white inline-block transition-opacity duration-500',
            isMenuOpen && 'opacity-0',
          )}
        ></span>
        <span
          className={cn(
            'relative w-4 h-[2px] bg-white inline-block transition-transform duration-500',
            isMenuOpen && '-rotate-45 -translate-y-[6px]',
          )}
        ></span>
      </button>
      <button
        onClick={() => setIsMenuOpen(false)}
        className={cn(
          'absolute w-full h-screen top-0 left-0 right-0 bottom-0 opacity-70 bg-black z-30 md:relative hidden',
          isMenuOpen && 'block',
        )}
      ></button>
    </header>
  );
};

export default Header;
