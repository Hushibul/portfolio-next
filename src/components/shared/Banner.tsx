import React from 'react';

const Banner = ({ children }: { children: React.ReactNode }) => {
  return <section className="bg-gradient-to-r from-primary to-secondary w-full p-4 md:p-8">{children}</section>;
};

export default Banner;
