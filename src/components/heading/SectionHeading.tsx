type sectionHeadingType = {
  heading: string;
  alignment?: string;
};

const SectionHeading: React.FC<sectionHeadingType> = ({ heading }) => {
  return <h2 className="text 3xl md:text-5xl text-black font-semibold uppercase">{heading}</h2>;
};

export default SectionHeading;
