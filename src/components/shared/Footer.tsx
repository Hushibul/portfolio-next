import { ArrowRight } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="bg-black py-6 md:py-12 mt-40">
      <div className="container grid grid-cols-3 gap-x-4">
        <div className="">
          <h5 className="text-white font-semibold text-lg capitalize mb-8">About Me</h5>
          <span className="text-gray-500 text-sm">
            Do you want to be even more successful? Learn to love learning and growth. The more effort you put into
            improving your skills,
          </span>
        </div>
        <div className="">
          <h5 className="text-white font-semibold text-lg capitalize mb-8">Newsletter</h5>
          <span className="text-gray-500 text-sm">Stay updated with our latest trends</span>
          <div className="flex items-center mt-4">
            <input className="p-2" type="email" placeholder="Enter email address" />
            <button className="bg-gradient-to-r from-primary to-secondary p-3">
              <ArrowRight width={17} height={17} className="text-white" />
            </button>
          </div>
        </div>
        <div className="">
          <h5 className="text-white font-semibold text-lg capitalize mb-8">Follow Me</h5>
          <span className="text-gray-500 text-sm">Let us be social</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
