import Image from 'next/image';
import {
  CalendarEvent,
  Envelope,
  Facebook,
  Github,
  HouseDoor,
  Linkedin,
  Telephone,
  Twitter,
} from 'react-bootstrap-icons';

const HomeBanner = () => {
  return (
    <div className="container  mt-40 -mb-20 md:-mb-40 min-h-[700px] p-4 md:p-8 bg-white flex flex-col md:flex-row items-start md:items-center rounded-md gap-y-4 md:gap-x-8 shadow-md">
      <div className="rounded overflow-hidden flex-[0_0_50%]">
        <Image src={'/images/personal.jpg'} width={668} height={690} alt="Personal Photo" />
      </div>
      <div className="flex flex-col gap-y-2 md:gap-y-4 flex-[0_0_50%]">
        <h5 className="uppercase text-base md:text-lg tracking-widest text-gray-900">Hello Everyone, I am</h5>
        <h1 className="text-3xl md:text-5xl uppercase font-semibold">DONALD MCKINNEY</h1>
        <h4 className="uppercase text-lg md:text-xl font-[500]">JUNIOR UI/UX DEVELOPER</h4>
        <span className="block text-sm md:text-base text-gray-500">
          You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing
          Scrooge some different futures)
        </span>
        <ul className="mt-2 flex flex-col gap-y-2 md:gap-y-4">
          <li className="flex gap-x-4 items-center">
            <CalendarEvent width={20} height={20} className="text-primary" />
            <span>31st December, 1992</span>
          </li>
          <li className="flex gap-x-4 items-center">
            <Telephone width={20} height={20} className="text-primary" />
            <a href="tel:44 (012) 6954 783">44 (012) 6954 783</a>
          </li>
          <li className="flex gap-x-4 items-center">
            <Envelope width={20} height={20} className="text-primary" />
            <a href="mailto:businessplan@donald">businessplan@donald</a>
          </li>
          <li className="flex gap-x-4 items-center">
            <HouseDoor width={20} height={20} className="text-primary" />
            <span>Santa monica bullevard</span>
          </li>
        </ul>
        <ul className="flex items-center gap-x-4 mt-4">
          <li className="p-2 rounded bg-gray-300 hover:bg-gradient-to-l from-primary to-secondary transition-colors duration-500">
            <a href="" target="_blank">
              <Facebook width={30} height={30} color="white" />
            </a>
          </li>
          <li className="p-2 rounded bg-gray-300 hover:bg-gradient-to-l from-primary to-secondary transition-colors duration-500">
            <a href="" target="_blank">
              <Twitter width={30} height={30} color="white" />
            </a>
          </li>
          <li className="p-2 rounded bg-gray-300 hover:bg-gradient-to-l from-primary to-secondary transition-colors duration-500">
            <a href="" target="_blank">
              <Github width={30} height={30} color="white" />
            </a>
          </li>
          <li className="p-2 rounded bg-gray-300 hover:bg-gradient-to-l from-primary to-secondary transition-colors duration-500">
            <a href="" target="_blank">
              <Linkedin width={30} height={30} color="white" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeBanner;
